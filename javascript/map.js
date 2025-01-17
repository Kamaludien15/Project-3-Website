// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -33.91942, lng: 18.43385 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;