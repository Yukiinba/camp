 mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/outdoors-v10', // style URL
center: campground.geometry.coordinates,// starting position [lng, lat]
zoom: 9 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset: 25}).setHTML(`<h5>${campground.title}</h5><P>${campground.location}</P>`)
    )
.addTo(map);


// new mapboxgl.Marker()
// .setLngLat(['<%=clg.Longitude%>','<%=clg.Latitude%>'])
// .setPopup(new mapboxgl.Popup({offset:25}).setHTML(`<h3>${name}</h3>`))
// .addTo(map)

