document.addEventListener("DOMContentLoaded", () => {
    console.log("Walk-my-Dog JS imported successfully!");
});
let carerDetailMap
let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }

function init() {
    renderCarersMap()
    getCarersLocation()

}

function renderCarersMap() {
    renderMap()
    getCarersLocation()
}

function renderMap() {
    myMap = new google.maps.Map(
        document.querySelector("#carerDetailMap"), { zoom: 13, center: userLocation })
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
function printMarker(place, name) {
    if (place) {
        console.log("estoy en place", place)
        new google.maps.Marker({
            map: myMap,
            position: place,
            title: name
        })
    }
}