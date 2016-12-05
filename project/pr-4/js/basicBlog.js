var basicBlog = {
    addPost: function(title, summary, textbody, image, author) {
        var textbody = textbody.getData();
        var error = [];
        if (title.val().length == 0) {
            error.push("Title");
            title.next().text("Title field cannot be empty").css("color", "red");
        }
        if (summary.val().length == 0) {
            error.push("Summary");
            summary.next().text("Summary field cannot be empty").css("color", "red");
        }
        if (textbody.length == 0) {
            error.push("Textbody");
            $("#textbody").next("label").text("Text Body field cannot be empty").css("color", "red");
        }
        if (image.val().length == 0) {
            error.push("Image");
            image.next().text("Image field cannot be empty").css("color", "red");
        }
        if (author.val().length == 0) {
            error.push("Author");
            author.next().text("Author field cannot be empty").css("color", "red");
        }
        if (error.length == 0) {
            $("#textbody").val(textbody);
            $("#result").text(JSON.stringify(this.getJsonFormat($("#jsonForm")))).removeClass("hidden");
            $("#update_dialogue").text("JSON formatted string generated.").removeClass("hidden").addClass("shake");
            $("#nb").removeClass("hidden");
        } else {
            var f = error.length > 1 ? "fields" : "field";
            $("#error").html("This " + f + " can not be empty: <strong>" + error.join(", ") + "</strong>").removeClass("hidden").addClass("shake");
        }
    },
    updateIndex: function() {
        var html = "";
        $.getJSON("admin/database.json", function(data) {
            var i = 0;
            while (i < data.length) {
                html += '<div class="post-preview">' + '<a href="post.html?post=' + data[i].slug + '">' + '<h2 class="post-title">' + data[i].title + "</h2>" + '<h3 class="post-subtitle">' + data[i].summary + "</h3>" + "</a>" + '<p class="post-meta">Posted by ' + data[i].author + " on " + basicBlog.getDate(data[i].posted_on) + "</p>" + "</div>" + "<hr>";
                i++;
            }
            $("#post_preview").html(html);
        });
    },
    displayPost: function(slug) {
        $.getJSON("admin/database.json", function(data) {
            data.forEach(function(val) {
                if (val.slug == slug) {
                    document.title = val.title;
                    $("#post_header").attr("style", "background-image: url(" + val.image + ");");
                    $("#title").text(val.title);
                    $("#meta").html("Posted by " + val.author + " on " + basicBlog.getDate(val.posted_on));
                    $("#post_body").html(val.textbody);
                }
            });
        });
    },
    updatePostTable: function(end) {
        var html = '<table class="edit-table"><tr><th>ID</th><th>Title</th><th>Posted on</th><th>Action</th></tr>';
        $.getJSON("database.json", function(data) {
            var i = 0;
            while (i < end) {
                html += "<tr><td>" + i + "</td>" + "<td>" + data[i].title + "</td>" + "<td>" + basicBlog.getDate(data[i].posted_on) + "</td>" + '<td><a href="edit_post.html?post=' + data[i].slug + '">Edit</a> | <a href="../post.html?post=' + data[i].slug + '" target="_blank">View</a></td></tr>';
                i++;
            }
            html += "</table>";
            $("#edit_tab").html(html);
        });
    },
    updateFullPostTable: function() {
        var html = '<table class="edit-table"><tr><th>ID</th><th>Title</th><th>Posted on</th><th>Action</th></tr>';
        $.getJSON("database.json", function(data) {
            var i = 0;
            while (i < data.length) {
                html += "<tr><td>" + i + "</td>" + "<td>" + data[i].title + "</td>" + "<td>" + basicBlog.getDate(data[i].posted_on) + "</td>" + '<td><a href="edit_post.html?post=' + data[i].slug + '">Edit</a> | <a href="../post.html?post=' + data[i].slug + '" target="_blank">View</a></td></tr>';
                i++;
            }
            html += "</table>";
            $("#edit_tab").html(html);
        });
    },
    displayEditPost: function(href, title, summary, textbody, image, author, posted_on, slug) {
        $.getJSON("database.json", function(data) {
            var url_slug = href.split("?post=")[1];
            var i = 0;
            while (i < data.length) {
                if (url_slug == data[i].slug) {
                    title.val(data[i].title);
                    summary.val(data[i].summary);
                    textbody.setData(data[i].textbody);
                    image.val(data[i].image);
                    author.val(data[i].author);
                    posted_on.val(data[i].posted_on);
                    slug.val(data[i].slug);
                }
                i++;
            }
        });
    },
    // this function update current time as DD MM, YY
    getDate: function(timestamp) {
        var t = parseInt(timestamp);
        // making an array to store 12 months
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // storing todays date in a variable
        var now = new Date(t);
        // geting date
        var date = now.getDate();
        // getting month
        var month = now.getMonth();
        // as we get month in digit format, so we need to make it in a String format(like January)
        // so we are accesing our months array with that numeric digit
        month = months[month];
        // getting full year
        var year = now.getFullYear();
        // returning it to DD MM, YY format
        return date + " " + month + ", " + year;
    },
    makeSlug: function(value) {
        // replacing all non alphanumeric values with - format
        return value.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
    },
    getJsonFormat: function(form) {
        var arr = form.serializeArray();
        var indexed_arr = {};
        arr.map(function(n, i) {
            indexed_arr[n["name"]] = n["value"];
        });
        return indexed_arr;
    }
};