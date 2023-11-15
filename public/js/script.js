document.addEventListener("DOMContentLoaded", () => {
  console.log("Walk-my-Dog JS imported successfully!");
});
let myMap
let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }


//Autocomplete of the address input
function initAutocomplete() {
  let input = document.querySelector('input[name="address"]');
  let autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });

  autocomplete.addListener('place_changed', function () {
    let place = autocomplete.getPlace()
    document.querySelector("#lng").value = place.geometry.location.lng()
    document.querySelector("#lat").value = place.geometry.location.lat()
  })
}



//Showing locations acording to the button pressed
const vButton = document.querySelector("#vets")
vButton.addEventListener('click', () => assignQuery("clinica veterinaria"))

const sButton = document.querySelector("#shops")
sButton.addEventListener('click', () => assignQuery("tiendas para mascotas"))

const pButton = document.querySelector("#parks")
pButton.addEventListener('click', () => assignQuery("pipican"))
let markerType

const assignQuery = (query) => {
  if (query === "clinica veterinaria") {
    markerType = "veterinary"
  }
  initMap(query)
}



//Methods to rednder map with carers
const carersButton = document.querySelector("#carers")
carersButton.addEventListener('click', () => renderCarersMap())

function renderCarersMap() {
  renderMap()
  getCarersLocation()
}

function getCarersLocation() {
  axios
    .get("/api/carers-location")
    .then(res => {
      res.data.forEach(element => {
        address = { lat: element.address.coordinates[0], lng: element.address.coordinates[1] }
        console.log(address)

        printMarker(address, element.name)
      });
    })
    .catch(err => console.log(err))
}

//Methods to render map with places marked
function initMap(query) {
  renderMap()
  getUserLocation()
  findPlaces(userLocation, query)
}

function renderMap() {
  myMap = new google.maps.Map(
    document.querySelector("#serviceMap"), { zoom: 13, center: userLocation })
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(
    position => updateMapPosition(position),
    error => console.error('Se ha producido un error:', error)
  )
}

function updateMapPosition({ coords }) {
  const { latitude: lat, longitude: lng } = coords
  userLocation = { lat, lng }
  myMap.setCenter(userLocation)
}

function findPlaces(userLocation, queryValue) {
  if (queryValue) {
    let request = {
      location: userLocation,
      radius: '1000',
      query: queryValue
    }
    service = new google.maps.places.PlacesService(myMap);
    service.textSearch(request, getPlacesResult);
  }
}

function getPlacesResult(results, status) {

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    //gestionar query y asignar type al markador
    for (let i = 0; i < results.length; i++) {
      name = results[i].name
      marker = { lat: results[i].geometry.location.lat(), lng: results[i].geometry.location.lng() }
      printMarker(marker, name)
    }
  }
}

const icons = {
  veterinary: {
    icon: "/images/arrow-vet.png",
  },
  food: {
    icon: "/images/arrow-food.png",
  },
  park: {
    icon: "/images/arrow-park.png",
  },
  carer: {
    icon: "/images/arrow-foodprint.png",
  },
};



function printMarker(place, name) {
  if (place) {
    console.log("estoy en place", place)
    new google.maps.Marker({
      map: myMap,
      position: place,
      title: name,
      icon: icons.veterinary.icon
    })
  }
}