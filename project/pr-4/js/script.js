jQuery(document).ready(function () {
	var s = 1170;
	if ($(window).width() > s) {
		var i = $(".navbar-custom").height();
		$(window).on("scroll", {
			previousTop: 0
		}, function () {
			var s = $(window).scrollTop();
			s < this.previousTop ? s > 0 && $(".navbar-custom").hasClass("is-fixed") ? $(".navbar-custom").addClass("is-visible") : $(".navbar-custom").removeClass("is-visible is-fixed") : s > this.previousTop && ($(".navbar-custom").removeClass("is-visible"),
					s > i && !$(".navbar-custom").hasClass("is-fixed") && $(".navbar-custom").addClass("is-fixed")),
				this.previousTop = s
		})
	}
});