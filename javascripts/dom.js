const printExToDom = (dude) => {
  let domStrong = '';
  dude.forEach((ex) => {
    domStrong += `<div class="col-md-4">
    <div class="panel panel-default>
     <h1 class="display-4">${ex.name}</h1>
     <h3>Age ${ex.age}</h3>
     <p class="lead"><b>${ex.flaws}</b></p>
    <hr class="my-4">
    <img class="snuggle-bunny" src="${ex.imageSoure}">
    </div>
  </div>`;
  });
  $('#ex-resume').append(domStrong);
};

const writeLocations = (locations) => {
  let domStrang = '';
  locations.forEach((location) => {
    domStrang += `<div class="card col-md-4 localPlace">
     <h2 class="localName">${location.localName}</h2>
      <img class="img-ex" src="${location.imageSoure}">
        <div class="caption">;
       <h3 id="thumbnail-label"> ${location.localAddress}</h3>
       <h4 class="time">Usually here ${location.time}</h4>
       </div>
    </div>
    `;
  });
  $('#localPlaces').append(domStrang);
};

module.exports = {
  printExToDom,
  writeLocations,
};
