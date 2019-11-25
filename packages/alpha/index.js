const wait = require("waait");

const waiter = async () => {
  await wait(100);
  console.log("waited 100ms");
};

module.exports = waiter;
