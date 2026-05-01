#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const dataPath = path.join(root, "data", "arima_examples.json");

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`${path.relative(root, filePath)} is not valid JSON: ${error.message}`);
  }
}

function requireArray(value, label) {
  if (!Array.isArray(value) || value.length === 0) {
    fail(`${label} must be a non-empty array`);
  }
}

function requireString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${label} must be a non-empty string`);
  }
}

function requireNumberArray(value, label) {
  requireArray(value, label);
  value.forEach((item, index) => {
    if (typeof item !== "number" || !Number.isFinite(item)) {
      fail(`${label}[${index}] must be a finite number`);
    }
  });
}

function validateCandidate(candidate, datasetId, index) {
  const prefix = `${datasetId}.candidates[${index}]`;
  requireString(candidate.id, `${prefix}.id`);
  requireString(candidate.label, `${prefix}.label`);

  ["p", "d", "q", "P", "D", "Q", "period"].forEach((field) => {
    if (typeof candidate[field] !== "number" || !Number.isInteger(candidate[field]) || candidate[field] < 0) {
      fail(`${prefix}.${field} must be a non-negative integer`);
    }
  });

  if (!["none", "log"].includes(candidate.transform)) {
    fail(`${prefix}.transform must be "none" or "log"`);
  }

  if (typeof candidate.c !== "boolean") {
    fail(`${prefix}.c must be boolean`);
  }
}

function validateDataset(dataset, index) {
  const prefix = `datasets[${index}]`;
  requireString(dataset.id, `${prefix}.id`);
  requireString(dataset.name, `${prefix}.name`);
  requireString(dataset.frequency, `${prefix}.frequency`);
  requireString(dataset.value_label, `${prefix}.value_label`);
  requireArray(dataset.labels, `${prefix}.labels`);
  requireNumberArray(dataset.values, `${prefix}.values`);
  requireArray(dataset.future_labels, `${prefix}.future_labels`);
  requireArray(dataset.candidates, `${prefix}.candidates`);

  if (dataset.labels.length !== dataset.values.length) {
    fail(`${prefix}.labels and ${prefix}.values must have the same length`);
  }

  if (typeof dataset.seasonal_period !== "number" || dataset.seasonal_period < 0) {
    fail(`${prefix}.seasonal_period must be a non-negative number`);
  }

  dataset.candidates.forEach((candidate, candidateIndex) => {
    validateCandidate(candidate, dataset.id, candidateIndex);
  });
}

if (!fs.existsSync(indexPath)) fail("index.html is missing");
if (!fs.existsSync(dataPath)) fail("data/arima_examples.json is missing");

const indexHtml = fs.readFileSync(indexPath, "utf8");
if (!indexHtml.includes('fetch("data/arima_examples.json"')) {
  fail("index.html must fetch data/arima_examples.json");
}

const data = readJson(dataPath);
requireString(data.schema_version, "schema_version");
requireArray(data.datasets, "datasets");
data.datasets.forEach(validateDataset);

console.log(`Static app validation passed for ${data.datasets.length} datasets.`);
