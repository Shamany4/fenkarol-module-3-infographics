(function ($) {
	'use strict';

	$(window).load(function () {
		add_like_ajax();
	});

	/**
	 * Send alax for add like
	 */
	function add_like_ajax() {

		$('#add-like-button').on('click', function (e) {

			// Stop default submit
			e.preventDefault();
			let button = $('#add-like-button');

			// Send by ajax
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajaxLiker.url,
				data: {
					'action': 'add_like',
				},
				beforeSend: function () {
					button.addClass('loading');
				},
				success: function (response) {
					if (response.status) {
						button.addClass('liked');
						button.find('span').text('Спасибо!');
						button.removeAttr('id');
						button.removeClass('loading');
					}
				}
			});
		});

	}


})(jQuery);