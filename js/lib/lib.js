/**
 * Module pattern layout.
 */

var Library = (function () {

    //private method
    var receiveMessage = function (event) {
        var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
        if (!(origin.endsWith(connection.dns) || origin.indexOf(connection.dns) + ':' != -1)) {
            return;
        }

        //Get the event message data
        var data = JSON.parse(event.data);

        //Handle each message type
        if (typeof data.handler === 'undefined') return;
        console.log(event.data);

        switch (data.handler.toString()) {
            case 'paymentResponseParentRedirect':
                if (data.body !== 'undefined' && data.body.url !== 'undefined'){
                    if (data.body.url.toString().startsWith('/')) {
                        self.location.href = location.protocol + '//' + document.location.host + data.body.url.toString();
                    }
                }
                break;
            default:
                console.log("No handler");
                return;
        }
    };

    window.addEventListener("message", receiveMessage, false);

    var inIframe = function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };

    var paymentResponseParentRedirect = function (target, hiddenDivId) {
        // public
        var urlParams = window.location.href.slice(window.location.href.indexOf('?') + 1);
        var appender = (target.indexOf("?") !== -1) ? "&" : "?";

        if (urlParams){
            urlParams = urlParams + "&_=" + Date.now();
        } else {
            urlParams = "_=" + Date.now();
        }

        // Display banner after n milliseconds
        setTimeout(function(){
            if(hiddenDivId && document.getElementById(hiddenDivId)){
                var cssClasses = document.getElementById(hiddenDivId).className;
                if(cssClasses.indexOf("hidden")>-1){
                    document.getElementById(hiddenDivId).className = cssClasses.replace("hidden", "");
                }
            }
        }, 3000);

        //Prepare the message as JSON object
        var message = {
            'handler':'paymentResponseParentRedirect',
            'body':{
                'url':target + appender + urlParams
            }
        };

        if (inIframe() && target) self.parent.postMessage(JSON.stringify(message), "*");
    };
    
    return {
        paymentResponseParentRedirect: paymentResponseParentRedirect,
        inIframe: inIframe
    };

})();