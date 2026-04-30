# ARIMA Workflow Visualiser v6

This version keeps the app as a live lever playground while covering the core Week 7-9 ARIMA workflow.

## New in v6

- Candidate model mode
- Manual model mode
- Log transform, first-difference, and seasonal-difference controls
- Core ARIMA mode by default, with Week 9 seasonal ARIMA behind a topic selector
- Week 7-style stationarity example
- Week 9-style seasonal ARIMA example
- AICc/BIC-style comparison table
- Residual diagnostics tab
- R/fable-ready JSON structure in `data/arima_examples.json`
- R generation script template in `scripts/generate_week8_json.R`

## Important

The included data and metrics are teaching proxies. The UI is ready for real R/fable output, but the included JSON should be replaced by exact class-generated output.

The intended real workflow is still:

1. Run `scripts/generate_week8_json.R`
2. Save exact outputs into `data/arima_examples.json`
3. Open or publish `index.html`

## GitHub Pages

This app is static and can be published directly on GitHub Pages.
