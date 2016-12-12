$(document).ready(function() {
    // checking if window location has ? symbol
    if (window.location.href.indexOf('?post=') != -1) {
    		var slug = window.location.href.split('?post=')[1];
    		console.log(slug);
        basicBlog.displayPost(slug);
    }
    // if it isn't redirect the user to index page
    else {
        window.location.href = 'index.html';
    }
});