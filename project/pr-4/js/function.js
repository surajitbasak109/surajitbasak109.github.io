$(document).ready(function() {
    var href = window.location.href;
    if (href.indexOf('index.html') !== -1 || href[href.length -1] === '/') {
        basicBlog.updateIndex();
    }
    if (href.indexOf('post.html') !== -1) {
        if (window.location.href.indexOf('?post=') != -1) {
            var slug = window.location.href.split('?post=')[1];
            basicBlog.displayPost(slug);
        }
        // if it isn't redirect the user to index page
        else {
            window.location.href = 'index.html';
            basicBlog.updateIndex();
        }
    }
})