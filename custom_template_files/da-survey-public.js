(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	$( window ).load(function() {

		/**
		 * Show survey popup
		 */

		if ($('.survey-popup')) {
			let survey_popup = $('.survey-popup');
			survey_popup.find('.step').first().addClass('current');


			let time_to_show = survey_popup.attr('data-time-to-show') * 1000;
			setTimeout(
				function()
				{
					survey_popup.addClass('opened');
				}, time_to_show);

			let inputs = survey_popup.find(':radio, :checkbox').on('change', function() {
				$(this).closest('.step').find(':disabled').prop('disabled', false);
			});

			$('.survey-popup .button-next').on('click', function(event) {
				event.preventDefault();
				$('.survey-popup .step.current').removeClass('current').next().addClass('current');
			});

			$('.survey-popup .close').on('click', function() {
				$(this).closest('.survey-popup').removeClass('opened');
			});

			$('.survey-popup form').on('submit', function(event) {
				event.preventDefault();
				const form = $(this);

				let result = {};

				$('.survey-popup .content').addClass('final-window');

				form.find('.step').each(function(index) {
					result[index] = {
						id: index,
						title: $(this).find('h3').text(),
						answers: {}
					};
					$(this).find('.answers input').each(function(index2) {
						let checked = false;
						if ($(this).is(":checked")) {
							checked = true;
						}
						result[index]['answers'][index2] = {
							text: $(this).closest('label').text(),
							checked: checked
						};
					});
				});

				let data = {
					'action': 'add_survey_answer',
					'security': form.find('#security').val(),
					'type': 'popup',
					'result': result,
					'survey_id': form.find('#survey_id').val(),
				}

				$.ajax({
					url: form.attr('action'),
					type: 'POST',
					data: data,
					dataType: 'json',
					beforeSend: function () {
						form.addClass('form-loading');
						form.find('[type=submit]').addClass('button-loading');
						form.find('[type=submit]').prop('disabled', true);
						form.find('.status-message').hide();
					},
					success: function (result) {
						if (result.status === true) {
							form.closest('.survey-popup').addClass('success');
							form.find('.status-message').addClass('success').addClass('opened').find('#res-status-message').text(result.message);

							if (result.result) {
								form.closest('.survey-popup').addClass('with-result');
								form.find('#res-maximum').text(result.result.maximum);
								form.find('#res-right').text(result.result.right_answers);
								form.find('#res-wrong').text(result.result.wrong_answers);
								form.find('#res-final-from').text(result.result.right_answers);
								form.find('#res-final-to').text(result.result.maximum);
							}

						} else {
							form.closest('.survey-popup').addClass('error');
							form.find('.status-message').addClass('error').addClass('opened').find('#res-status-message').text(result.message);
						}
					}
				}).done(function () {
					form.removeClass('form-loading');
					form.find('[type=submit]').removeClass('button-loading');
					form.find('[type=submit]').prop('disabled', false);
				});
			});
		}

		/**
		 * Show survey block
		 */

		if ($('.survey-block')) {
			let survey_block = $('.survey-block');
			survey_block.find('.step').first().addClass('current');

			let inputs = survey_block.find(':radio, :checkbox').on('change', function() {
				$(this).closest('.step').find(':disabled').prop('disabled', false);
			});

			$('.survey-block .button-next').on('click', function(event) {
				event.preventDefault();
				$('.survey-block .step.current').removeClass('current').next().addClass('current');
			});

			$('.survey-block .close').on('click', function() {
				$(this).closest('.survey-block').removeClass('opened');
			});

			$('.survey-block form').on('submit', function(event) {
				event.preventDefault();
				const form = $(this);

				let result = {};

				$('.survey-block .content').addClass('final-window');

				form.find('.step').each(function(index) {
					result[index] = {
						id: index,
						title: $(this).find('h3').text(),
						answers: {}
					};
					$(this).find('.answers input').each(function(index2) {
						let checked = false;
						if ($(this).is(":checked")) {
							checked = true;
						}
						result[index]['answers'][index2] = {
							text: $(this).closest('label').text(),
							checked: checked
						};
					});
				});

				let data = {
					'action': 'add_survey_answer',
					'security': form.find('#security').val(),
					'type': 'popup',
					'result': result,
					'survey_id': form.find('#survey_id').val(),
				}

				$.ajax({
					url: form.attr('action'),
					type: 'POST',
					data: data,
					dataType: 'json',
					beforeSend: function () {
						form.addClass('form-loading');
						form.find('[type=submit]').addClass('button-loading');
						form.find('[type=submit]').prop('disabled', true);
						form.find('.status-message').hide();
					},
					success: function (result) {
						if (result.status === true) {
							form.closest('.survey-block').addClass('success');
							form.closest('.survey-block').find('.head .title').text(result.message);
							form.find('.status-message').addClass('success').addClass('opened').find('#res-status-message').text(result.message);

							if (result.result) {
								form.closest('.survey-block').addClass('with-result');
								form.find('#res-maximum').text(result.result.maximum);
								form.find('#res-right').text(result.result.right_answers);
								form.find('#res-wrong').text(result.result.wrong_answers);
								form.find('#res-total').text(result.result.total);
							}

						} else {
							form.closest('.survey-block').addClass('error');
							form.closest('.survey-block').find('.head .title').text(result.message);
							form.find('.status-message').addClass('error').addClass('opened').find('#res-status-message').text(result.message);
						}
					}
				}).done(function () {
					form.removeClass('form-loading');
					form.find('[type=submit]').removeClass('button-loading');
					form.find('[type=submit]').prop('disabled', false);
				});
			});
		}

	});

})( jQuery );
