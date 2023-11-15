document.addEventListener("DOMContentLoaded", () => {
  console.log("Walk-my-Dog JS imported successfully!")
})


//Autocomplete of the address input
function initAutocomplete() {
  let input = document.querySelector('input[name="address"]');
  let autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] })

  autocomplete.addListener('place_changed', function () {
    let place = autocomplete.getPlace()
    document.querySelector("#lng").value = place.geometry.location.lng()
    document.querySelector("#lat").value = place.geometry.location.lat()
  })
}
