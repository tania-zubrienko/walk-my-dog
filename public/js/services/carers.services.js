class MapService {

    renderMap(map) {
        map = new google.maps.Map(
            document.querySelector(`#${map}`), { zoom: 13, center: userLocation })
    }

}

const mapService = new MapService
module.exports = mapService