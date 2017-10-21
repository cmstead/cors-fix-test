var csProxyUtils = (function () {
    function buildProxyUrl(apiKey, requestUrl) {
        var hostUri = 'www.chrisstead.com/proxy/';
        return 'http://' + hostUri + '?apikey=' + apiKey + '&requesturl=' + requestUrl;
    }
    
    function buildJsonpProxyUrl(apiKey, requestUrl) {
        var hostUri = 'www.chrisstead.com/proxy/jsonp.php';
        return 'http://' + hostUri + '?apikey=' + apiKey + '&requesturl=' + requestUrl;
    }
    
    return {
        buildProxyUrl: buildProxyUrl,
        buildJsonpProxyUrl: buildJsonpProxyUrl
    }
})();