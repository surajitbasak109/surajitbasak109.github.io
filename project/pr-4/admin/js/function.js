$(function() {
    // getting todays date
    var today = new Date().getTime();
    var title = $('#title');
    var summary = $('#summary');
    // When using ckeditor we cannot get textbody value when user types it,
    // so this is the method to get it
    var image = $('#image');
    var author = $('#author');
    var posted_on = $('#posted_on');
    var slug = $('#slug');
    var href = window.location.href;
    if (href.indexOf('view_post.html') !== -1) {
        basicBlog.updateFullPostTable();
    }
    if (href.indexOf('index.html') !== -1 || href[href.length -1] === '/') {
        basicBlog.updatePostTable(5);
    }
    if (href.indexOf('add_post.html') !== -1) {
        var textbody = CKEDITOR.instances['textbody'];
        // showing this date in our disabled posted_on text input
        $('#posted_on').val(today);
        // adding event listener when user typing, it updates that value with slug function
        $('#title').on('change', function() {
            var title = $(this).val();
            $('#slug').val(basicBlog.makeSlug(title));
        });
        // main part: when user submits the form it returning a JSON formatted string
        $('#jsonForm').submit(function(e) {
            // Prevent default behavior of form submit
            e.preventDefault();
            basicBlog.addPost(title, summary, textbody, image, author);

        });
        $('#result').on('click', function() {
            $(this).select();
        });
    }
    if (href.indexOf('edit_post.html') !== -1) {
        if (href.indexOf('?post=') !== -1) {
            var textbody = CKEDITOR.instances['textbody'];
            basicBlog.displayEditPost(href, title, summary, textbody, image, author, posted_on, slug);

            $('#jsonForm').submit(function(e) {
                e.preventDefault();
                basicBlog.addPost(title, summary, textbody, image, author);
            });

            $('#result').on('click', function() {
                $(this).select();
            });
        } else {
            window.location.href = 'index.html';
        }
    }

});