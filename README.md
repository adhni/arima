# Forecast Workflow Visualiser v7

This version keeps the app as a live lever playground while covering the core Week 7-9 ARIMA workflow and the Week 5/6 ETS workflow.

Live app: https://adhni.github.io/arima/

- Top-level ARIMA and ETS tabs
- Candidate model mode
- Manual model mode
- Log transform, first-difference, and seasonal-difference controls
- Study-focus selector for choosing p/q, differencing, or seasonal patterns
- ETS error/trend/season controls
- ETS components view for level, trend, and season
- Week 5/6-style ETS examples for holiday tourism, Algeria exports, Australian population, and H02 medicine costs
- Week 7-style stationarity example
- Seasonal ARIMA example
- AICc/BIC-style comparison table
- Residual diagnostics tab
- R/fable-ready JSON structure in `data/arima_examples.json`
- R generation script template in `scripts/generate_week8_json.R`

## Data status

The included data and metrics are teaching proxies, suitable for demonstrating the workflow and publishing the static app. The UI is ready for real R/fable output when exact class-generated outputs are available.

The ETS tab is intentionally student-facing: students choose additive or multiplicative error, no/linear/damped trend, and no/additive/multiplicative season. The app then shows the matching ETS code-style label such as `ETS(M,Ad,M)`.

Future exact-data workflow:

1. Run `scripts/generate_week8_json.R`
2. Save exact outputs into `data/arima_examples.json`
3. Run `node scripts/validate_static_app.js`
4. Open or publish `index.html`

## GitHub Pages

This app is static and can be published directly on GitHub Pages:

1. Commit `index.html`, `data/arima_examples.json`, and `scripts/validate_static_app.js`.
2. In the repository settings, enable GitHub Pages from the branch that contains these files.
3. Use the repository root as the Pages source.
4. After deployment, open the Pages URL and confirm the dataset selector and charts load.
