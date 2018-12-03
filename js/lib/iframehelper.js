var IframeHelper = {
    busy: false,
    refresh: function (func, url) {
        IframeHelper.busy = true;
        $("body").append('<iframe id="ajaxProxy" style="display: none;" src="' + url + '" width="1" height="1"></iframe>');
        $("#ajaxProxy").load(function () {
            IframeHelper.busy = false;
            $(this).remove();
            func();
        });
    }
};