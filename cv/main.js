var root =document.getElementById('root');

getCVData('cv.json', function (resp) {
	var cv = JSON.parse(resp);
	var html = '<div class="title"><h1>Curriculum Vitae</h1></div>';
	html += '<div class="name"><h2>' + cv.Name + '</h2></div>';
	html += '<section class="present-address"><h3>Present Address</h3><hr>';
	html += update(cv["Present Address"]);
	html += '</section>';

	html += '<div class="avatar"><img src="' + cv['avatar'] + '" alt="Avatar Image"></div>'

	html += '<section class="working-experience"><h3>Working Experience</h3><hr><ul>';
	for (var exp in cv["Working Experience"])
		html += '<li>' + cv["Working Experience"][exp] + '</li>';
	html += '</ul></div>';
	html += '</section>';

	html += '<section class="education-qualification"><h3>Education Qualification</h3><hr>';
	for (var edu in cv["Education Qualification"]) {
		html += '<div class="'+ edu.toLowerCase() +'"><h4>'+ edu + '</h4>';
		html += update(cv["Education Qualification"][edu]);
		html += '</div>';
	}
	html += '</section>';

	html += '<section class="computer-knowledge"><h3>Computer Knowledge</h3><hr>';
	html += update(cv["Computer Knowledge"]);
	html += '</section>';

	html += '<section class="web-technology"><h3>Web Technology</h3><hr>';
	html += update(cv["Web Technology"]);
	html += '</section>';

	html += '<section class="web-technology"><h3>Person Details</h3><hr>';
	html += update(cv["Personal Details"]);
	html += '</section>';

	html += '<section class="career-objective"><h3>Career Objective</h3><hr>'+ cv['Career Objective'] +'</section>';
	html += '<section class="declaration"><h3>Declaration</h3><hr>'+ cv['Declaration'] +'</section>';

	root.innerHTML = html;

}, root);

function getCVData (url, fn, target) {
	var invocation = new XMLHttpRequest();
	invocation.onreadystatechange = function () {
		if (invocation.readyState === invocation.DONE) {
			if (invocation.status === 200) {
				fn(invocation.responseText);
			}
		}
	}
	invocation.open('GET', url, true);
	invocation.send(null);
}

function update(obj) {
	var data = "";
	for (var key in obj)
		data += '<p><strong>'+ key +'</strong>: '+ obj[key] +' </p>';
	return data;
}