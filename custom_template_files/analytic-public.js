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
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	/**
	 * Store notification to database
	 */
	function ajax_send_analytic_event(category, action, label = '', data = {}) {
		let args = {
			'action': 'send_analytic_event',
			'category': category,
			'action_event': action,
			'label': label,
			'data': data,
		}

		$.ajax({
			type: 'POST',
			url: window.location.origin + '/wp-admin/admin-ajax.php',
			data: args,
			dataType: 'json',
			success: function (response) {
				if (response.success == true && response.data) {
					console.log('success');
					console.log(response.data);
				}
			},
		});
	}

	document.addEventListener("DOMContentLoaded", function() {
		const digest = document.querySelector('#download-digest-q4');
		if (digest) {
			digest.addEventListener('click', function() {
				ajax_send_analytic_event('digest', 'download', 'q4-2023');
			});
		}
	});

})( jQuery );
