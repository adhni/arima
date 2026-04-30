# ARIMA Workflow Visualiser v5

This version moves from a pure lever playground toward the Week 8 R workflow.

## New in v5

- Candidate model mode
- Manual model mode
- p and q sliders up to 5
- AICc/BIC-style comparison table
- Residual diagnostics tab
- R/fable-ready JSON structure in `data/arima_examples.json`
- R generation script template in `scripts/generate_week8_json.R`

## Important

The included data and metrics are teaching proxies. The UI is ready for real R/fable output, but the included JSON should be replaced by exact class-generated output.

The intended real workflow is:

1. Run `scripts/generate_week8_json.R`
2. Save exact outputs into `data/arima_examples.json`
3. Open or publish `index.html`

## GitHub Pages

This app is static and can be published directly on GitHub Pages.
