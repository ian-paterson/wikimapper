function parseDMS(lat, lng) {
  var splitLat = lat.split(/[^\d\w]+/);
  var splitLng = lng.split(/[^\d\w]+/);
  var decLat = 0;
  var decLng = 0;


  if (splitLat.length === 2) {
    decLat = convertDMSToDD(splitLat[0], 0, 0, splitLat[1]);
  } else if (splitLat.length === 3) {
    decLat = convertDMSToDD(splitLat[0], splitLat[1], 0, splitLat[2]);
  } else if (splitLat.length === 4) {
    decLat = convertDMSToDD(splitLat[0], splitLat[1], splitLat[2], splitLat[3]);
  }

  if (splitLng.length === 2) {
    decLng = convertDMSToDD(splitLng[0], 0, 0, splitLng[1]);
  } else if (splitLng.length === 3) {
    decLng = convertDMSToDD(splitLng[0], splitLng[1], 0, splitLng[2]);
  } else if (splitLng.length === 4) {
    decLng = convertDMSToDD(splitLng[0], splitLng[1], splitLng[2], splitLng[3]);
  }

  return {
    'latitude': decLat,
    'longitude': decLng
  };
}

function convertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = parseInt(degrees) + parseInt(minutes)/60 + parseInt(seconds)/(60*60);

  if (direction == "S" || direction == "W") {
    dd = dd * -1;
  }

  return dd;
}

var latitudes = document.getElementsByClassName('latitude');
var longitudes = document.getElementsByClassName('longitude');
var coordinatesLinks = document.getElementsByClassName('geo-default');
var coordinatesLinkSpans = document.getElementsByClassName('geo-dms');

for (var i = 0; i < coordinatesLinks.length; i++) {
  decimalCoords = parseDMS(latitudes[i].innerText, longitudes[i].innerText);
/*  coordinatesLinks[i].parentNode.href = '//maps.google.com/?q=' + decimalCoords.latitude + */
                                        //',' + decimalCoords.longitude + '&ll=' + decimalCoords.latitude +
                                        /*',' + decimalCoords.longitude + '&z=7';*/

  coordinatesLinks[i].parentNode.href = '//bing.com/maps/?v=2&cp=' + decimalCoords.latitude + 
                                        '~' + decimalCoords.longitude + '&style=r&lvl=12';
}

for (var i = 0; i < coordinatesLinks.length; i++) {
//  coordinatesLinkSpans[i].innerText = "Google Maps";
  coordinatesLinkSpans[i].innerText = "Bing Maps";
}
