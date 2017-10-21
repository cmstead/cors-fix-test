$(document).ready(function () {
    var placesApiKey = 'AIzaSyA4Fw5m2LqG8i8NYsdx4NgIY_PGB0ouA5s';
    var placesBaseUri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=' + placesApiKey;

    var placesTestUri = placesBaseUri + '&location=32.7157,-117.1611&radius=5000';

    var proxyKey = '55d9430e09095b44d75ece0c0380c9daf1946332';

    $.ajax({
        url: csProxyUtils.buildProxyUrl(proxyKey, placesTestUri)
    }).done(function (data) {
        console.log('Yay, it worked!');
        console.log(JSON.stringify(data));
    });
});