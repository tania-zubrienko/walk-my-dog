// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("Walk-my-Dog JS imported successfully!");
});


function initAutocomplete() {
  console.log("ENTRO EN COMPLETE")

  let input = document.querySelector('input[name="adress"]');
  let autocomplete = new google.maps.places.Autocomplete(input, {
    types: ['geocode'],
    //componentRestrictions: { country: 'es' }
  });

  autocomplete.addListener('place_changed', function () {
    console.log("ENTRO EN LISTENER")

    let place = autocomplete.getPlace()
    document.querySelector("#lng").value = place.geometry.location.lng()
    document.querySelector("#lat").value = place.geometry.location.lat()
  })
}
