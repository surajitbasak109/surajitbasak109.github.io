$('#tch-toggle-1').on('change', function() {
	if ($(this).prop('checked') === true) {
		$('body').addClass('dark');
		$('body').removeClass('light');
	} else {
		$('body').addClass('light');
		$('body').removeClass('dark');		
	}
});