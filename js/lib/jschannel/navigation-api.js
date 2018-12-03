function FrameworkNavigation(callback) {

    this.isOpen = false;
    var self = this;

    if (window !== window.parent) {
        this.chan = Channel.build({
            window: window.parent,
            origin: "*",
            scope: "testScope",
            onReady: function() {
                console.info("BPTA child channel is ready!");
                self.isOpen = true;
                callback();
            }
        });
        this.chan.bind("receiveMessage", function(trans, msg) {
            console.info("receiveMessage from parent : " + msg);
        });
    } else {
        console.warn("navigationModel: Parent window same as current window, skipping jschannel build");
    }

    this.sendMessage = function(msg, success, error) {

        console.info("sendMessage : " + msg);

        if (this.isOpen) {

            var method = null;
            if (msg instanceof NavigateTo) {
                method = NAVIGATE_TO_MSG;
            } else if (msg instanceof ContextUpdate) {
                method = CTX_UPDATE_MSG;
            } else if (msg instanceof RequestData) {
                method = constants.REQUEST_DATA_MSG;
                timeoutDefault = constants.REQUEST_DATA_MSG_TIMEOUT_MS;
            } else if (msg instanceof InvokeValidation) {
                method = constants.MSG_INVOKE_VALIDATION;
                timeoutDefault = constants.INVOKE_VALIDATION_MSG_TIMEOUT_MS;

            }
            // if message in not found
            if (!method) {
                console.warn("no Known message type");
            }

            this.chan.call({
                method: method,
                params: msg,
                success: success,
                error: error
            });
        } else {
            console.warn("navigationModel: framework channel is not ready");
        }
    };

    return this;
}


