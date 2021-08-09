var map = L.map('map').setView([9.97, 24.28], 3);

var mymap = L.tileLayer('https://tile.jawg.io/3645a6cd-aa3c-4a4d-92f7-a51a164d4613/{z}/{x}/{y}{r}.png?access-token=34FzeFhj7ZHG6dL89LsHPfYnWYYmUwms7xxIfxLM8iKjoGG1oHWVdimFn6bjVbDA', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '34FzeFhj7ZHG6dL89LsHPfYnWYYmUwms7xxIfxLM8iKjoGG1oHWVdimFn6bjVbDA'
}).addTo(map);


  $.getJSON("https://raw.githubusercontent.com/andoandriamalala/ROVA-CAVIAR/main/rovajson.txt",function(data){
    var rovaIcon = L.icon({
      iconUrl: 'assets/img/marker/marker.png',
      iconSize: [40,60]
    });
    var cavshop = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: rovaIcon});
        marker.bindPopup('<h2 class="bindpoptitle">' + feature.properties.name + '</h2>' + '(' + feature.properties.TYPE + ')' + '<br/>' + '📍 ' + feature.properties.Location);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(cavshop);
    map.addLayer(clusters);
});


