import * as Utils from "./utils.js";
const DATA_COUNT = 100;
const NUMBER_CFG = { count: DATA_COUNT, min: 10, max: 12 };

const labels = Utils.months({ count: 100 });
const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
  ],
};

export default { DATA_COUNT, NUMBER_CFG, labels, data };
