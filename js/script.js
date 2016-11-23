$(document).ready(function () {
    'use strict';
    $("a.page-scroll").bind("click", function (a) {
        var target = $(this);
        $("html, body").stop().animate({
            scrollTop: $(target.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), a.preventDefault();
    }), $("body").scrollspy({
        target: ".navbar-fixed-top"
        , offset: 100
    }), $(".navbar-collapse ul li a").click(function () {
        $(".navbar-toggle:visible").click()
    }), $("#topNav").affix({
        offset: {
            top: 50
        }
    })
});