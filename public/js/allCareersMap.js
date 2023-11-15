let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }
let serviceMap
function renderCarersMap() {
    renderMap()
    getCarersLocation()
}


function renderMap() {
    serviceMap = new google.maps.Map(
        document.querySelector("#serviceMap"), { zoom: 13, center: userLocation })
}
function getCarersLocation() {
    axios
        .get("/api/carers-location")
        .then(res => {
            res.data.forEach(element => {
                address = { lat: element.address.coordinates[0], lng: element.address.coordinates[1] }
                printMarker(address, element.name)
            });
        })
        .catch(err => console.log(err))
}

function printMarker(place, name) {
    if (place) {
        new google.maps.Marker({
            map: serviceMap,
            position: place,
            title: name,
            icon: "/images/arrow-carer.png"
            //url: hay que rescatar id
        })
    }
}