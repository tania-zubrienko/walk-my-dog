let userLocation = { lat: 40.44699825339554, lng: -3.6751472005642563 }
let serviceMap = document.querySelector("#serviceMap")
let carerDetailMap = document.querySelector("#carerDetailMap")
const markerType = "/images/arrow-carer.png"



function renderAllCarers() {

    mapService.renderMap(serviceMap)
    getAllLocation()

}


function renderSingleCarer() {

    mapService.renderMap(carerDetailMap)
    getOneLocation()

}


function getAllLocation() {

    axios
        .get("/api/carers-location")
        .then(res => {
            res.data.forEach(element => {
                name = element.name
                url = ("/cuidadores/" + element._id)

                address = { lat: element.address.coordinates[0], lng: element.address.coordinates[1] }
                mapService.printMarkerCarer(address, markerType, name, url)
            });
        })
        .catch(err => next(err))
}


function getOneLocation() {

    const carerId = document.querySelector('#carerId').value
    axios
        .get(`/api/carers-location/${carerId}`)
        .then(res => {
            name = res.data.name   ///<---añadir 
            url = ("/cuidadores/" + res.data._id)   ///<---añadir  url

            address = res.data.address
            const position = { lat: address.coordinates[0], lng: address.coordinates[1] }
            mapService.printMarkerCarer(position, markerType, name, url)
        })
        .catch(err => console.log(err))

}