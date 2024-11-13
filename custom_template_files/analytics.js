// Analytics events

// User logged in
document.addEventListener('user-logged-in', function (event) {
    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'user_logged'
    });
});

// User registered
document.addEventListener('user-registered', function (event) {
    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'user_registered'
    });
});

// User registered
document.addEventListener('user-requested', function (event) {
    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'user_requested_registration'
    });
});

// User subscribe to webinar
document.addEventListener('user-subscribed-to-webinar', function (event) {
    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'user_subscribed_to_webinar'
    });
});


// User watching video in webinars
document.addEventListener('video_event', function (event) {
    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': event.detail.webinar_event,
        'user_id': event.detail.user_id,
        'webinar_id': event.detail.webinar_id,
        'webinar_url': event.detail.webinar_url,
        'webinar_title': event.detail.webinar_title,
    });
});

