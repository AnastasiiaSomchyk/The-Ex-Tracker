const writeLocations = require('./dom');
const loadLocation = require('./location');

const whenLocationLoad = (data) => {
  console.log('data', data);
  $('#localPlace').append(writeLocations(data.locations));
  // binEvents();
  // applySale();
};

const whenLocationDontLoad = (error) => {
  console.log('this is error', error);
};

const initializer = () => {
  loadLocation(whenLocationLoad, whenLocationDontLoad);
};

module.exports = initializer;
