document.addEventListener("DOMContentLoaded", () => {
    console.log("Walk-my-Dog JS imported successfully!");
});
let carerDetailMap
let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }

function init() {
    renderCarersMap()
    getCarerLocation()

}

function renderCarersMap() {
    renderMap()
    getCarerLocation()
}

function renderMap() {
    myMap = new google.maps.Map(
        document.querySelector("#carerDetailMap"), { zoom: 13, center: userLocation })
}
function getCarerLocation() {
    axios
        .get("/api/carers-location/:carer_id}")
        .then(res => {
            res.data(element => {
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
            map: carerDetailMap,
            position: place,
            title: name
        })
    }
}