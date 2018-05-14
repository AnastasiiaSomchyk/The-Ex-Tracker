const printExToDom = (dude) => {
  let domStrong = '';
  dude.forEach((ex) => {
    domStrong += `<div class="jumbotron">
    <img class="snuggle-bunny" src="${ex.imageSoure}">
    <img class="logo-heart" src="${ex.logoSource}">
    <div class="pull-right">
     <h1 class="display-4">${ex.name}</h1>
     <h2>Age ${ex.age}</h2>
     <p class="lead"><b>${ex.flaws}</b></p>
    <hr class="my-4">
      <p class="lead">
      <button id="morning-btn" type="button" class="btn btn-outline-dark"><b>Morning</b></button>
      <button id="afternoon-btn" type="button" class="btn btn-outline-dark"><b>Afternoon</b></button>
      <button id="evening-btb" type="button" class="btn btn-outline-dark"><b>Evening</b></button>
      <button id="dark-btn" type="button" class="btn btn-outline-dark"><b>After Dark</b></button>
      <button id="reset-btn" type="button" class="btn btn-outline-dark"><b>Reset</b></button>
  </p>
  <form class="navbar-form">
  <div class="form-group">
    <input id="search" type="text" class="form-control" placeholder="Search by location">
  </div>
</form>
  </div>
  </div>`;
  });
  return domStrong;
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
  return domStrang;
};

module.exports = {
  printExToDom,
  writeLocations,
};
