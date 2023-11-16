
class MapService {
    constructor(
    ) {
        this.userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }
        this.map = undefined
        this.styleMap = styles

    }

    renderMap(map) {

        this.map = new google.maps.Map(map, {
            zoom: 12,
            center: this.userLocation,
            styles: this.styleMap
        })

        return this.map
    }

    printMarkerCarer(position, markerType, name, url) {
        if (position) {
            const marker = new google.maps.Marker({
                map: this.map,
                position,
                icon: markerType,
                title: name,
                url
            })
            marker.addListener("click", () => location.href = marker.url)
        }
    }
}

const mapService = new MapService()