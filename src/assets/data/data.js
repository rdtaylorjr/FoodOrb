const address = require('./address.json');
const item = require('./item.json');
const order = require('./order.json');
const payment = require('./payment.json');
const user = require('./user.json');

module.exports = () => ({
  address: address/1,
  item: item,
  order: order,
  payment: payment,
  user: user
});

// start the json server by watching this file
// > json-server --watch src/assets/data/data.json