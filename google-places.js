$(document).ready(function() {
    var placesApiKey = 'AIzaSyA4Fw5m2LqG8i8NYsdx4NgIY_PGB0ouA5s';
    var placesBaseUri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=' + placesApiKey;

    var placesTestUri = placesBaseUri + '&location=32.7157,-117.1611&radius=5000';

    // console.log(placesTestUri);

    // var proxyUri = 'www.chrisstead.com/proxy/';
    // var proxyUri = 'localhost/simphpleProxy/';
    var proxyUri = 'localhost/simphpleProxy/jsonp.php';
    var proxyKey = '55d9430e09095b44d75ece0c0380c9daf1946332';

    var requestUri = `http://${proxyUri}?apikey=${proxyKey}&requesturl=${placesTestUri}`;

    // console.log(requestUri);

    framejax
        .ajax({
            url: requestUri
        })
        .done(function(data) {
            console.log('Yay, it worked!');
            console.log(JSON.stringify(data));
        });

    // $.ajax({
    //     method: 'GET',
    //     url: requestUri
    // }).done(function (result) {
    //     console.log('Yay!');
    //     console.log(result);
    // });

});