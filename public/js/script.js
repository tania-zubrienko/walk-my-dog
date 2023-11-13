// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("Walk-my-Dog JS imported successfully!");
});

let myMap
const ironhackCoords = { lat: 40.392521370648154, lng: -3.6989879718518366 }

function initAutocomplete() {
  //console.log("ENTRO EN COMPLETE")

  let input = document.querySelector('input[name="address"]');
  let autocomplete = new google.maps.places.Autocomplete(input, {
    types: ['geocode'],
    //componentRestrictions: { country: 'es' }
  });

  autocomplete.addListener('place_changed', function () {
    //console.log("ENTRO EN LISTENER")

    let place = autocomplete.getPlace()
    console.log(place)
    document.querySelector("#lng").value = place.geometry.location.lng()
    document.querySelector("#lat").value = place.geometry.location.lat()
  })
}
let query
vetsButton = () => {
  console.log("presionado vets")
  query = "clinica veterinaria"
  initMap(query)
}
shopsButton = () => {
  console.log("presionado shops")
  query = "tiendas para mascotas"
  initMap(query)
}
parksButton = () => {
  console.log("presionado parks")
  query = "pipican"
  initMap(query)
}

const vButton = document.querySelector("#vets")
vButton.addEventListener('click', vetsButton)

const sButton = document.querySelector("#shops")
sButton.addEventListener('click', shopsButton)

const pButton = document.querySelector("#parks")
pButton.addEventListener('click', parksButton)









function initMap(query) {
  renderMap()
  findPlaces(ironhackCoords, query)
}

function renderMap() {

  myMap = new google.maps.Map(
    document.querySelector("#serviceMap"),
    {
      zoom: 13,
      center: ironhackCoords
    }
  )
}

function findPlaces(coordinates, queryValue) {
  let request = {
    location: coordinates,
    radius: '1000',
    query: queryValue
  }
  console.log(request)
  service = new google.maps.places.PlacesService(myMap);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      name = results[i].name
      marker = { lat: results[i].geometry.location.lat(), lng: results[i].geometry.location.lng() }
      printMarker(marker, name)


    }
  }
}

function printMarker(place, name) {
  new google.maps.Marker({
    map: myMap,
    position: place,
    title: name
  })
}