// Creating map object
// var map = L.map("map-id", {
//   center: [40.7128, -74.0059],
//   zoom: 11,
//   layers: [streetmap]
// });


// Adding tile layer
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});


var URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

// var geojsonMarkerOptions = {
//   radius: markerSize(feature.properties.mag),
//   fillColor: "#ff7800",
//   color: "#000",
//   weight: 1,
//   opacity: 1,
//   fillOpacity: 0.8
// };

function markerSize(magnitude) {
  return magnitude *5;
};


// d3.json(URL, function (data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng);
//     }
//     }).addTo(map);
// });

// function markerOptions(options) {

//   var sizing = L.geoJson(options, {
//     style : function(feature) {
//       return {
//         fillColor: chooseColor(feature.property.mag),
//         radius: feature.property.mag,
//       }
//     }
//   })
// }; markerOptions(sizing);

d3.json(URL, function (data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  }).addTo(map);
});




// Creating map object
var map = L.map("map-id", {
  center: [40.7128, -74.0059],
  zoom: 3,
  layers: [streetmap]
});
