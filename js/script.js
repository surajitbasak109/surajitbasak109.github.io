$(document).ready(function() {
    $("a.page-scroll").bind("click", function(a) {
        var target = $(this);
        $("html, body").stop().animate({
            scrollTop: $(target.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"),
        a.preventDefault();
    }),
    $("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 100
    }),
    $(".navbar-collapse ul li a").click(function() {
        $(".navbar-toggle:visible").click()
    }),
    $("#topNav").affix({
        offset: {
            top: 50
        }
    });

    $.getJSON('projects.json', function(json) {
        $('#mainProject').html('<div class="row"><a href="' + json[0].link + '" target="_blank">'+
        '<div class="project-column col-md-12"><img class="projectImage img-responsive img-rounded" src="' + json[0].img + '" alt="' + json[0].title + '">'+
        '<div class="overlay">' + json[0].title + '</div></div></a></div>');

        var html = '';
        var len = json.length;

        for (var i = 1; i < len; i+=2) {
            html += '<div class="row">'
            var data = json.slice(i, i+2);
            for (j = 0; j < data.length; j++) {
            html += '<a href="' + data[j].link + '" target="_blank">'+
            '<div class="project-column col-md-6"><img class="projectImage img-responsive img-rounded" src="' + data[j].img + '" alt="' + data[j].title + '">'+
            '<div class="overlay">' + data[j].title + '</div></div></a>';
            }

            html += '</div>'
        }
        $('#projectPreview').html(html);
    });
});
