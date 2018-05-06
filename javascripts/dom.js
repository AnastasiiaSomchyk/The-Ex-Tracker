const printExToDom = (dude) => {
  let domStrong = '';
  dude.forEach((ex) => {
    domStrong += `<div class="jumbotron">
    <img class="snuggle-bunny" src="${ex.imageSoure}">
    <div class="pull-right">
     <h1 class="display-4">${ex.name}</h1>
     <h2>Age ${ex.age}</h2>
     <p class="lead">${ex.flaws}</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to    space content out within the larger container.</p>
      <p class="lead">
      <button type="button" class="btn btn-outline-dark">Morning</button>
      <button type="button" class="btn btn-outline-dark">Afternoon</button>
      <button type="button" class="btn btn-outline-dark">Evening</button>
      <button type="button" class="btn btn-outline-dark">After Dark</button>
  </p>
  </div>
  </div>`;
  });
  return domStrong;
};

const writeLocations = (locations) => {
  let domStrang = '';
  locations.forEach((location) => {
    domStrang += `<div class="card col-md-4">
     <h2>${location.localName}</h2>
      <img class="img-ex" src="${location.imageSoure}">
        <div class="caption">;
       <h3 id="thumbnail-label"> ${location.localAddress}</h3>
       </div>
    </div>
    `;
  });
  return domStrang;
};

module.exports = {
  printExToDom,
  writeLocations,
};