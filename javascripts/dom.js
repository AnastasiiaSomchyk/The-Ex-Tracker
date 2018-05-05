const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="card col-md-6 col-md-offset-3">
     <div class="thumbnail">
     <h1>${location.localName}</h1>
      <img src="${location.imageSoure}">
        <div class="caption">;
       <h3 id="thumbnail-label"> ${location.localAddress}</h3>
       </div>
      </div>
    </div>
    `;
  });
  return domString;
};

module.exports = writeLocations;
