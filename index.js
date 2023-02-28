const addDays = require("date-fns/addDays");

const addDate = (num) => {
  const result = addDays(new Date(2020, 7, 22), num);
  console.log(
    `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
  );
};

module.exports = addDate(4);
