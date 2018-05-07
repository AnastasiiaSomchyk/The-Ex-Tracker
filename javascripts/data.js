const dom = require('./dom');
const loadLocation = require('./location');
const loadEx = require('./ex');
const allEvents = require('./events');
// const buttonsClickEvent = require('./events');

const whenExLoads = function (data) {
  $('#ex-resume').append(dom.printExToDom(data.dude));
  allEvents.buttonsClickEvent();
};

const whenLocationLoad =  function (data) {
  console.log('data', data);
  $('#localPlace').append(dom.writeLocations(data.locations));

};

const whenDontLoad = function (error) {
  console.log('this is error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenDontLoad);
  loadLocation(whenLocationLoad, whenDontLoad);
};

module.exports = initializer;
