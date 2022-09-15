!(function (n) {
    "use strict";
    n("#navbar-toggle").click(function () {
        n("#navbar-content").toggleClass("f-navbar-content-closer"), n("#f-navbar-overlay").toggleClass("show");
    }),
        n("#navbar-closer").click(function () {
            n("#navbar-content").toggleClass("f-navbar-content-closer"), n("#f-navbar-overlay").toggleClass("show");
        }),
        n("#f-navbar-overlay").click(function () {
            n("#navbar-content").toggleClass("f-navbar-content-closer"), n("#f-navbar-overlay").toggleClass("show");
        }),
        n(".fs-navbar > a").click(function () {
            n("#navbar-content").toggleClass("f-navbar-content-closer"), n("#f-navbar-overlay").toggleClass("show");
        }),
        videojs("my-video", { controlBar: { children: ["playToggle", "currentTimeDisplay", "progressControl", "durationDisplay", "muteToggle"] } }),
        t("#owl-game"),
        n(".f-nav-tabs .nav-link").click(function () {
            var a = n(this).attr("aria-controls");
            void 0 !== a &&
                setTimeout(function () {
                    t("#owl-" + a);
                }, 300);
        }),
        n("#f-counter-action-plus").click(function () {
            var t = parseInt(n("#f-counter-num").text()) + 1;
            n("#f-counter-num").text(t), n("#f-input-counter-num").val(t);
        }),
        n("#f-counter-action-minus").click(function () {
            var t = parseInt(n("#f-counter-num").text());
            if (0 != t) {
                var a = t - 1;
                n("#f-counter-num").text(a), n("#f-input-counter-num").val(a);
            }
        });
})(window.jQuery);
