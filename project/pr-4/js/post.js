$(document).ready(function () {
	parseJSON();
});

function parseJSON() {
	// checking if link has ? mark
	if (window.location.href.indexOf('?') > -1) {
		var href = window.location.href.split('?')[1];
		var urlToParse = 'admin/database.json';

		$.getJSON(urlToParse, function (data) {
			data.forEach(function (val) {
				if (val.slug == href) {
					$('#post_header').attr('style', 'background-image: url(' + val.image + ');');
					$('#title').text(val.title);
					$('#meta').html('Posted by ' + val.author + ' on ' + val.posted_on);
					$('#post_body').html(val.textbody);
				}
			});
		});
	}
	// if it isn't redirect the user to index page
	else {
		window.location.href = 'index.html';
	}
}



function log(input) {
	console.log(input);
}