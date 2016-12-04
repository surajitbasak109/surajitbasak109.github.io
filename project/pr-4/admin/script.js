$(document).ready(function () {
	// getting todays date
	var today = showCurrentDate();
	// showing this date in our disabled posted_on text input
	$('#posted_on').val(today);
	// adding event listener when user typing, it updates that value with slug function
	$('#title').on('change', function () {
		var title = $(this).val();
		$('#slug').val(makeSlug(title));
	});
	// main part: when user submits the form it returning a JSON formatted string
	$('#jsonForm').submit(function (e) {
		// When using ckeditor we cannot get textbody value when user types it, so this is the method to get it
		var body = CKEDITOR.instances['textbody'].getData();
		$('#textbody').val(body);
		$('#result').text(JSON.stringify(getJsonFormat($(this))));
		$('#result').removeClass('hidden');
		$('#nb').removeClass('hidden');
		e.preventDefault();
	});

	$('#result').on('click', function () {
		$(this).select();
	});
});

// this function update current time as DD MM, YY
function showCurrentDate() {
	// making an array to store 12 months
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// storing todays date in a variable
	var now = new Date();
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
	return date + ' ' + month + ', ' + year;
}

function makeSlug(value) {
	// replacing all non alphanumeric values with - format
	return value.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
}

function getJsonFormat(form) {
	var arr = form.serializeArray();
	var indexed_arr = {};
	arr.map(function (n, i) {
		indexed_arr[n['name']] = n['value'];
	});
	return indexed_arr;
}