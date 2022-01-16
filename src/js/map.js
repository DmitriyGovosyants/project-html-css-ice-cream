function initMap() {
let element = document.getElementById('map');
const options = {
    zoom: 5,
    center: { lat: 41.797981, lng: -87.586858 }
};

let myMap = new google.maps.Map(element, options);

let markers = [
    {
    coordinates: { lat: 41.797981, lng: -87.586858 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Chicago</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 33.9600112, lng: -118.4379626 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">LA</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 40.7479666, lng: -73.986163316 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">NY</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 39.781282, lng: -86.1465297 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Indianapolis</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 48.2195999, lng: -101.3115012 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Minot</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 32.8212559, lng: -80.1105616 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Charleston</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 43.545397, lng: -105.117946 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Fremont County</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 44.2499924, lng: -114.4728538 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Idaho</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 35.0826103, lng: -106.8165629 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Albuquerque</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 44.970797, lng: -93.3315181 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Minneapolis</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 40.8007178, lng: -96.760768 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Lincoln</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 30.3079827, lng: -97.8934853 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Austin</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 36.1251958, lng: -115.3150834 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Las Vegas</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 44.2148704, lng: -120.799239 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Portland</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 33.5314448, lng: -86.9902206 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Birmingham</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 32.8208751, lng: -96.8716362 },
    // image: './images/modal/cafe.png',
    info: '<p><b class="map-subtitle">Dallas</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 28.4807935, lng: -80.5488077 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">Cape Canaveral</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 38.653285, lng: -90.3835452 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">St. Louis</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 39.1987578, lng: -112.1585311 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">Holden</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: -65.2445403, lng: -64.2399281 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">Vernadsky Research Base - penguins out of line</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 45.9610278, lng: -109.6575471 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">Yellowstone River</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 38.8255663, lng: -97.7021552 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">Salina</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

    {
    coordinates: { lat: 37.2970523, lng: -121.9574962 },
    // image: './images/modal/food-truck.png',
    info: '<p><b class="map-subtitle">San Jose</b> <br>Monday - Friday <br><i>06:00 AM - 10:00 PM</i> <br>Saturday - Sunday <br><i>08:00 AM - 16:00 PM</i></p>'
    },

];

for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
}

function addMarker(properties) {
    let marker = new google.maps.Marker({
    position: properties.coordinates,
    map: myMap,
    });

    if (properties.image) {
    marker.setIcon(properties.image);
    }

    if (properties.info) {
    let InfoWindow = new google.maps.InfoWindow({
        content: properties.info
    });

    marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
    })
    }
}
}