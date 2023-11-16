let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }
let myMap = document.querySelector("#serviceMap")

//Showing locations acording to the button pressed
const vButton = document.querySelector("#vets")
vButton.addEventListener('click', () => assignQuery("clinica veterinaria"))

const sButton = document.querySelector("#shops")
sButton.addEventListener('click', () => assignQuery("tiendas para mascotas"))

const pButton = document.querySelector("#parks")
pButton.addEventListener('click', () => assignQuery("pipican"))

let markerType = "/images/arrow-carer.png"
const assignQuery = (query) => {
    if (query === "clinica veterinaria") {
        markerType = "/images/arrow-vet.png"
    } else if (query === "tiendas para mascotas") {
        markerType = "/images/arrow-food2.png"
    } else if (query === "pipican") {
        markerType = "/images/arrow-park.png"
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

// TODO OPCIONAL: EXTRAER EN SERVICIOS
function getCarersLocation() {
    axios
        .get("/api/carers-location")
        .then(locations => {
            locations.data.forEach(element => {
                address = { lat: element.address.coordinates[0], lng: element.address.coordinates[1] }
                printMarker(address, element.name)
            });
        })
        .catch(err => console.log(err))
}

//Methods to render map with places marked
function initMap(query) {
    renderMap(myMap)
    getUserLocation()
    findPlaces(userLocation, query)
}

function renderMap() {
    myMap = new google.maps.Map(
        document.querySelector("#serviceMap"), {
        zoom: 13,
        center: userLocation,
        styles
    })
}

function getUserLocation() {
    console.log("estoy en LOCATIONS")
    navigator.geolocation.getCurrentPosition(
        position => updateMapPosition(position),
        error => console.error('Se ha producido un error:', error)
    )
}

function updateMapPosition({ coords }) {
    const { latitude: lat, longitude: lng } = coords
    userLocation = { lat, lng }
    console.log(userLocation)
    myMap.setCenter(userLocation)
}

function findPlaces(userLocation, queryValue) {
    console.log("estoy en FIND")

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
    console.log("estoy en FETPLACES")

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(elm => {
            name = elm.name
            marker = { lat: elm.geometry.location.lat(), lng: elm.geometry.location.lng() }
            printMarker(marker, name)
        })
    }
}


function printMarker(place, name) {
    if (place) {
        new google.maps.Marker({
            map: myMap,
            position: place,
            title: name,
            icon: markerType
            //url: hay que rescatar id
        })
    }
}