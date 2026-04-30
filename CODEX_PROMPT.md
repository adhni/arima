You are improving ARIMA Workflow Visualiser v5.

Current app:
- Static HTML/CSS/JS
- Candidate model mode and manual mode
- Forecast-first layout
- R-style panel below forecast: differenced/original series, ACF, PACF
- Residual diagnostics tab
- AICc/BIC-style comparison table
- data/arima_examples.json contains teaching proxy data
- scripts/generate_week8_json.R is the intended real-data pipeline

Important user preference:
- Keep it visual and simple.
- Keep charts as the main learning object.
- Avoid long tutorial text.
- Make it feel like R/fable and gg_tsdisplay.
- Do not add React, Vite, npm, backend, or server dependencies.

Priority next task:
Replace teaching proxy metrics with exact R/fable outputs:
- forecasts with 80% and 95% intervals
- fitted values
- innovations/residuals
- ACF/PACF values
- glance() model metrics including AICc and BIC
- Ljung-Box p-values

Keep the same UI and JSON-driven structure.
