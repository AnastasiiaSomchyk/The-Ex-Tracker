const dom = require('./dom');
// const loadLocation = require('./location');
// const loadEx = require('./ex');
const allEvents = require('./events');
// // const buttonsClickEvent = require('./events');

// const whenExLoads = function (data) {
//   $('#ex-resume').append(dom.printExToDom(data.dude));
//   allEvents.buttonsClickEvent();
// };

// const whenLocationLoad =  function (data) {
//   // console.log('data', data);
//   $('#localPlaces').append(dom.writeLocations(data.locations));
//   allEvents.searchEvent();
// };

// const whenDontLoad = function (error) {
//   console.log('this is error', error);
// };

// const initializer = () => {
//   loadEx(whenExLoads, whenDontLoad);
//   loadLocation(whenLocationLoad, whenDontLoad);
// };

// Promise Constructor
const exJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.dude);
      })
      .fail((error) => {
        reject(`shit broke`, error);
      });
  });
};

const locationsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((error) => {
        reject(`shit broke`, error);
      });
  });
};

// const printDudesAndLocations = () => {
//   return Promise.all([exJSON(), locationsJSON(),])
//     .then((results) => {
//       const data = [...results[0], ...results[1],];
//       return Promise.resolve(data);
//     }).catch ((error) => {
//       console.error(error);
//     });
// };

const initializer = () => {
  exJSON().then((data) => {
    dom.printExToDom(data);
  });
  locationsJSON().then((data2) => {
    dom.writeLocations(data2);
  });
  allEvents.buttonsClickEvent();
  allEvents.searchEvent();
};

module.exports = initializer;
