var ul,
	liItems,
	imgWidth,
	imgNumber,
	currentImage = 0;

function init() {
	ul = document.getElementById('img_slider');
	liItems = ul.children;
	imgNumber = liItems.length;
	imgWidth = liItems[0].children[0].offsetWidth;
	// set ul's width as the total width of all images in image slider
	ul.style.width = parseInt(imgWidth * imgNumber) + 'px';

	slider(ul);
	
	load_yt_video({
		target: document.getElementById('yt_wrap_anthrm'),
		url: 'https://www.youtube.com/embed/Bh26zOjIh9I',
		width: '100%',
		height: '400px'
	});
}

/**delta function is to set how the image slide—keep still for a while and move to next picture.
*step function will be called many times until clearInterval() been called
* currentImage * imageWidth is the currentImage position of ul
* delta start from 0 to 1, delta * imageWidth is the pixels that changes
**/

function slider(ul) {
	animate({
		delay: 17,
		duration: 5000,
		delta: function(p) {
			return Math.max(0, -1 + 2 * p);
		},
		step: function(delta) {
			ul.style.left = '-' + parseInt(currentImage * imgWidth + delta * imgWidth) + 'px';
		},
		callback: function() {
			currentImage++;

			// if it doesn't slide to the last image, keep sliding
			if (currentImage < imgNumber -1) {
				slider(ul);
			}

			// if current image is the last one, it slides back to the
			// first one
			else {
				var leftPos = (imgNumber - 1) * imgWidth;
				// after 2 seconds, call the go back function to slide
				// to the first image
				setTimeout(function() {
					goBack(leftPos);
				}, 2000);
				setTimeout(function() {
					slider(ul);
				}, 4000);
			}
		}
	});
}

function goBack(leftPos) {
	currentImage = 0;

	var id = setInterval(function() {
		if (leftPos >= 0) {
			ul.style.left = '-' + parseInt(leftPos) + 'px';
			leftPos -= imgWidth / 10;
		}
		else {
			clearInterval(id);
		}
	}, 17);
}

function animate (opts) {
	var start = new Date();

	var id = setInterval(function() {
		var timepassed = new Date() - start;

		var progress = timepassed / opts.duration;

		if (progress > 1) {
			progress = 1;
		}

		var delta = opts.delta(progress);
		opts.step(delta);

		if (progress === 1) {
			clearInterval(id);
			opts.callback();
		}
	}, opts.delay || 17);
}

function load_yt_video(opts) {
	var frame = document.createElement('iframe');
	frame.width = opts.width;
	frame.height = opts.height;
	frame.frameborder = opts.frameborder || 0;
	frame.allowfullscreen = opts.allowfullscreen || true;
	frame.src = opts.url;
	if (opts.target) {
		opts.target.appendChild(frame);
	}
}

window.addEventListener('load', init);
