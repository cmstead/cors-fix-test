function displayBreweryInfo(zipcode) {
    // var zipcode = $("#zipcode-input").val().trim();
    var queryURL = "http://api.brewerydb.com/v2/locations?postalCode=" + zipcode + "&key=0e8760e7ad6c26f9098f623ca7d0b5a7";
    var apiKey = "272f3002d2ba42214bb93754e572957f692647d0";

    var proxyCall = function (queryURL) {
        console.log('calling framejax', csProxyUtils);

        return framejax.ajax({
            method: "GET",
            dataType: "json",
            url: csProxyUtils.buildJsonpProxyUrl(apiKey, queryURL),
        });
    };

    var result = proxyCall(queryURL);
    console.log(result);

   result.done(function (response) {
        console.log(response);
        //console.log(response.data.length);
        // breweriesInfo(response.data);
        // dropPins(response.data);
    });
}

$(document).ready(function () {
    displayBreweryInfo(92083);
});
