var urlToParse = 'admin/database.json';
var html = '';
$.getJSON(urlToParse, function (data) {
	data.forEach(function (val) {
		html += '<div class="post-preview">' +
			'<a href="post.html?' + val.slug + '">' +
			'<h2 class="post-title">' +
			val.title +
			'</h2>' +
			'<h3 class="post-subtitle">' +
			val.summary +
			'</h3>' +
			'</a>' +
			'<p class="post-meta">Posted by ' + val.author + ' on ' + val.posted_on + '</p>' +
			'</div>' +
			'<hr>';
		$('#post_preview').html(html);
	});
});