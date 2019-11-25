const alpha = require('alpha');
const delay = require('yoctodelay');

const delayMore = async () => {
  await delay(100);
  console.log('waited 100ms more');
}
const doStuff = async() => {
  await alpha();
  await delayMore();
  console.log('Did the stuff');
}

doStuff();