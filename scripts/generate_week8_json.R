# scripts/generate_week8_json.R
# Template for generating exact data/arima_examples.json from the Week 8 workflow.

library(fpp3)
library(jsonlite)

# This script is a template. It follows the same workflow used in week8.R:
# inspect series -> candidate models -> glance(AICc/BIC) -> augment residuals -> forecast.

make_model_bundle <- function(data, value, models, h = 10, lag = 10, dof_lookup = NULL) {
  # TODO:
  # - data: tsibble
  # - value: unquoted response variable
  # - models: named model specification list
  # Return list containing:
  # - historical labels and values
  # - candidate model specs
  # - forecast means and 80/95 intervals
  # - augment() fitted values and .innov residuals
  # - glance() metrics including AICc/BIC
  # - ljung_box p-values
}

# Examples to implement from week8.R:
#
# 1. Egyptian exports
# egypt <- global_economy |> filter(Code == "EGY")
# fit <- egypt |> model(
#   auto = ARIMA(Exports),
#   ar4 = ARIMA(Exports ~ pdq(4,0,0))
# )
#
# 2. CAF exports
# caf <- global_economy |> filter(Code == "CAF")
# fit <- caf |> model(
#   arima210 = ARIMA(Exports ~ pdq(2,1,0)),
#   arima013 = ARIMA(Exports ~ pdq(0,1,3)),
#   stepwise = ARIMA(Exports),
#   fullsearch = ARIMA(Exports, stepwise = FALSE, approximation = FALSE)
# )
#
# 3. US consumption
# fit <- us_change |> model(
#   ar2 = ARIMA(Consumption ~ pdq(2,0,0) + PDQ(0,0,0)),
#   ar3 = ARIMA(Consumption ~ pdq(3,0,0) + PDQ(0,0,0)),
#   ma3 = ARIMA(Consumption ~ pdq(0,0,3) + PDQ(0,0,0)),
#   auto = ARIMA(Consumption ~ PDQ(0,0,0))
# )
#
# 4. Mink
# mink <- as_tsibble(fma::mink)
# fit <- mink |> model(
#   ar4 = ARIMA(value ~ pdq(4,0,0)),
#   auto = ARIMA(value),
#   best = ARIMA(value, stepwise = FALSE, approximation = FALSE)
# )
#
# Final:
# write_json(result, "data/arima_examples.json", pretty = TRUE, auto_unbox = TRUE)
