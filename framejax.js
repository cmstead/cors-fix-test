var framejax = (function () {
    function ajax(options) {
        var dataFrame = $('<iframe id="dataframe">')
            .attr('src', options.url)
            .css({ height: 0, width: 0, border: 0, padding: 0, margin: 0 });

        $('body').append(dataFrame);

        var callbackHandle = {
            done: function () { /* noop */ }
        }

        window.addEventListener("message", function (event) {
            $('#dataframe').remove();
            var result = options.dataType === 'json'
                ? JSON.parse(event.data)
                : event.data;

            callbackHandle.done(result);
        });

        return {
            done: function (callback) {
                callbackHandle.done = callback;
            }
        };
    }

    return {
        ajax: ajax
    };
})();