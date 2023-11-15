let carerDetailMap
let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }


function renderCarersMap() {
    renderMap()
    getCarerLocation()
}

function renderMap() {
    carerDetailMap = new google.maps.Map(
        document.querySelector("#carerDetailMap"), { zoom: 13, center: userLocation })
}

const carerId = document.querySelector('#carerId').value
function getCarerLocation() {
    axios
        .get(`/api/carers-location/${carerId}`)
        .then(res => {
            address = res.data.address
            const position = { lat: address.coordinates[0], lng: address.coordinates[1] }
            printMarker(position)
        })
        .catch(err => console.log(err))
}

function printMarker(position) {
    if (position) {
        console.log("estoy en place", position)
        new google.maps.Marker({
            map: carerDetailMap,
            position,
            icon: "/images/arrow-foodprint.png"
        })
    }
}