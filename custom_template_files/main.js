/**
 * No conflict for Wordpress
 */
var $ = jQuery.noConflict();

feather.replace();

$(window).on('load', function () {
    // Run icons
    // Documentation: https://github.com/feathericons/feather#feather

    // Init slider for actual materials
    actualMaterialsSlick();

    // Init academies slider
    academiesSlick();

    // Init courses slider
    coursesSlick();

    /**
     * Mobile menu
     */
    menuToggler();
    menuTogglerSub();

    /**
     * Make custom secets
     */
    makeSelect();
    /**
     * Make accorions in course description
     */
    courseTableAccordion();

    /**
     * Toggle links with sub menu in mobile menu
     */
    linksToggle();

    /** Build select
     * Used lib: select2
     * Documentation: https://select2.org/
     * */
    selectInit();

    /**
     *  Show/hide cookies popup
     */
    cookiesPopup();

    /**
     *  Show/hide search popup
     */
    searchPopup();

    /**
     * Open auth popup
     */
    openPopupAuth();

    popupPhoneVerification();
    popupPhoneVerificationCode();
    formVerificationCode();

    /**
     * Toggle popups
     */
    popupToggler();

    /**
     * Login and register by popup (ajax)
     */
    popupLogin();
    popupRegister();
    viberVerification();
    smsVerification();
    emailVerification();
    skipVerification();
    forgotPassword();
    resetPassword();
    popupLoginByPhone();
    showHidePassword();

    /**
     * Profile edit ajax
     */
    profileEdit();

    /**
     * Make main slider
     */
    makeMainSlider();

    /**
     * Add masks to inputs
     */
    phoneMask();

    /**
     * Init country and city autocomplete in registration form
     *
     * Used dadata.ru: https://dadata.ru/
     */
    countryAndCityAutocomplete();

    /**
     * Make Add to calendar button
     */
    makeCalendarsButtons();

    /**
     * Subscribe to webinar ajax
     */
    subscribeToWebinar();

    /**
     * Play video on click
     */
    videoPlay();

    /**
     * Make timer alive!
     */
    initializeClock();

    /**
     * Scroll to top button toogle visibility
     */
    scrollToTopButtonToogle();

    /**
     * Comments
     */
    comments();

    /**
     * Tree tabs
     */
    treeTabs();

    newYearCards();

    scrollPage80Percent();

    tabsToggler();

    /**
     * Add play video event listener
     */
    youtubeVideoEventPlayEventSinglePage();

    filterAcademy();
    accordion();

    shortsSlider();
    shortsPopups();

    $('.chapter-slider .slides').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: "unslick"
            }
        ]
    });


    $('.chapter-slider .slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.chapter-3-image').removeClass('slide-1 slide-2 slide-3').addClass('slide-' + (nextSlide + 1));
    });
});

function isVisible(target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };

    // Получаем позиции окна
    var windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней части окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right // Если позиция левой стороны элемента меньше позиции правой части окна, то элемент виден справа
    ) {
        return true;
    } else {
        return false;
    }
};


/**
 * Init actual materials slider
 */
function actualMaterialsSlick() {

    slides = $('.actual-materials-list .card-new');

    if (slides.length > 1) {
        $('.actual-materials-list .row').slick({
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            slidesToShow: 3,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                    dots: true,
                    swipeToSlide: true,
                }
            },
             {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    dots: true,
                    centerPadding: '15px'
                }
            }]
        });
    }
}

/**
 * Academies block slider
 */
function academiesSlick() {

    slides = $('.academies-list .card-new');

    if (slides.length >= 4) {
        $('.academies-list .row').slick({
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            slidesToShow: 4,
            infinite: false,
            dots: true,
            swipeToSlide: true,
            centerPadding: '40px',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '15px'
                    }
                },
            ]
        });
    }
}

/**
 * Courses block slider
 */
function coursesSlick() {

    slides = $('.courses-card');

    if (slides.length >= 4) {
        $('.courses-list .row').slick({
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            slidesToShow: 3,
            infinite: false,
            dots: false,
            swipeToSlide: true,
            centerPadding: '40px',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '15px',
                        arrows: false,
                        dots: true
                    }
                },
            ]
        });
    }
}

/**
 * Mobile menu open/close
 */
function menuToggler() {
    $('#hamburger').on('click', function () {
        $('#main-menu').addClass('opened');
    });

    $('#close-menu').on('click', function () {
        $('#main-menu').removeClass('opened');
    });
}

/**
 * Open/close submenu on mobile
 */
function menuTogglerSub() {
    $('.has-sub-menu .icon').on('click', function (event) {
        event.preventDefault();
        $(this).closest('.has-sub-menu').toggleClass('opened');
    });
}

/**
 * Make custom secets
 */
function makeSelect() {
    $('.js-example-basic-multiple.academies').select2({
        placeholder: "Все академии",
    });

    $('.js-example-basic-multiple.categories').select2({
        placeholder: "Все категории",
    });
}

/**
 * Accordion for table of course content
 */
function courseTableAccordion() {
    $('.accordion-single .head').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.accordion-single').toggleClass('active');
    });
}

/**
 * Toggle links block in articles
 */
function linksToggle() {
    $('.links-container .links-head').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.links-container').toggleClass('opened');
    });
}

/**
 * Init select2 for selects
 */
function selectInit() {
    $('.js-select-basic').select2({
        "language": {
            "noResults": function () {
                return "Не найдено";
            }
        },
        width: "100%"
    });

    $('.js-select-basic-hide-search').select2({
        "minimumResultsForSearch": -1,
        "language": {
            "noResults": function () {
                return "Не найдено";
            }
        },
        width: "100%"
    });
}

function cookiesPopup() {
    /**
     * Show cookies popup if coocke value is empty
     */
    if (checkCookie('cookie-accept') != 'yes') {
        $('#cookies-popup').fadeIn();
    }

    /**
     * If click Accept cookie button - hide popup and set cookie 'cookie-popup' to 'yes'
     */
    $('#cookies-popup #cookies-popup-accept').on('click', function (event) {
        $('#cookies-popup').fadeOut();
        setCookie('cookie-accept', 'yes', 365);
    });
}

function searchPopup() {

    // Open search popup
    $('#open-search-popup').on('click', function (event) {
        event.preventDefault();
        $('#search-popup').addClass('opened');
    });

    // Close search popup
    $('#search-popup-close').on('click', function (event) {
        event.preventDefault();
        $('#search-popup').removeClass('opened');
    });
}

function openPopupAuth() {
    $('.open-auth-popup-registration').on('click', function (event) {
        event.preventDefault();
        authPopupSetStatus('registration');
        openPopup('#popup-auth');
    });

    $('.open-auth-popup-login').on('click', function (event) {
        event.preventDefault();
        authPopupSetStatus('login');
        openPopup('#popup-auth');
    });

    $('#auth-title-registration').on('click', function () {
        if (!this.classList.contains('active')) {
            authPopupSetStatus('registration');
        }
    });

    $('#popup-auth #auth-title-login').on('click', function () {
        if (!this.classList.contains('active')) {
            authPopupSetStatus('login');
        }
    });

    $('.tab-button#auth-by-phone').on('click', function () {
        setTimeout(function () {
            const input = document.getElementById('user_phone');
            if (input) {
                const end = input.value.length;
                input.setSelectionRange(end, end);
                input.focus();
            }
        }, 10);
    });

    $('.tab-button#auth-by-password').on('click', function () {
        setTimeout(function () {
            const input = document.getElementById('user_login');
            if (input) {
                const end = input.value.length;
                input.setSelectionRange(end, end);
                input.focus();
            }
        }, 10);
    });

    if (checkCookie('CRM_Token')) {
        const CrmTokenData = JSON.parse(checkCookie('CRM_Token'));
        console.log(CrmTokenData);

        $('#popup-auth-forms-registration #phone').val(CrmTokenData.phone);
        if (CrmTokenData.email) {
            $('#popup-auth-forms-registration #user_email').val(CrmTokenData.email);
        }
        $('#popup-auth-forms-registration #last_name').val(CrmTokenData.last_name);
        $('#popup-auth-forms-registration #first_name').val(CrmTokenData.first_name);
        $('#popup-auth-forms-registration #middle_name').val(CrmTokenData.middle_name);

        if ($("#popup-auth-forms-registration #city option[value=" + CrmTokenData.city_id + "]").length) {
            $("#popup-auth-forms-registration #city").val(CrmTokenData.city_id).trigger("change");
        }

        if ($("#popup-auth-forms-registration #spec option[value=" + CrmTokenData.specialization_id + "]").length) {
            $("#popup-auth-forms-registration #spec").val(CrmTokenData.specialization_id).trigger("change");
        }
    }

    const url = new URLSearchParams(window.location.search);
    if (! ajaxinfo.is_user_logged_in && url.has('crm_token')) {
        authPopupSetStatus('registration');
        openPopup('#popup-auth');
    }
}

function authPopupSetStatus(status) {
    if (status === 'registration') {
        $('#popup-auth h3.active').removeClass('active');
        $('#popup-auth .popup-auth-forms-content.active').removeClass('active');
        $('#popup-auth h3#auth-title-registration').addClass('active');
        $('#popup-auth #popup-auth-forms-content-registration').addClass('active');;
        $('#popup-auth #user_email').get(0).focus();
    }
    if (status === 'login') {
        $('#popup-auth h3.active').removeClass('active');
        $('#popup-auth .popup-auth-forms-content.active').removeClass('active');
        $('#popup-auth h3#auth-title-login').addClass('active');
        $('#popup-auth #popup-auth-forms-content-login').addClass('active');
        $('#popup-auth #user_login').get(0).focus();
    }
}

function openPopup(id_selector) {
    // Close opened popups if exist
    $('.popup.opened').removeClass('opened');

    $('.popup' + id_selector).addClass('opened');
}

function closePopup(id_selector) {
    $(id_selector).removeClass('opened');
}

function popupToggler() {
    $('.popup .popup-close, .popup .popup-overlay').on('click', function (event) {
        event.preventDefault();
        this.closest('.popup').classList.remove('opened');
    });
}

function formRedirect(url) {
    document.location.href = url;
}

function popupLogin() {
    $('#popup-auth-forms-login, #static-auth-forms-login').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_login', //calls wp_ajax_nopriv_ajaxlogin
            'log': form.find('#user_login').val(),
            'pwd': form.find('#user_pass').val(),
            'security_login': form.find('#security_login').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.loggedin == true) {
                    // Show result success message
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    // Dispatch custom event
                    document.dispatchEvent(new Event('user-logged-in'));
                    // Redirect if the link exists
                    redirectUrl = form.find('#login-redirect').val();
                    setTimeout(formRedirect(redirectUrl), 2000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.error);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function popupRegister() {
    $('#popup-auth-forms-registration').on('submit', function (e) {

        // Stop default submit
        e.preventDefault();

        form = $(this);

        form.find('.submit-status').removeClass('opened').removeClass('success error').html('');

        data = {
            'action': 'ajax_popup_register', //calls wp_ajax_nopriv_ajaxlogin
            'user_email': form.find('#user_email').val(),
            'user_password': form.find('#user_password').val(),
            'user_password_repeat': form.find('#user_password_repeat').val(),
            'last_name': form.find('#last_name').val(),
            'first_name': form.find('#first_name').val(),
            'middle_name': form.find('#middle_name').val(),
            'phone': form.find('#phone').val(),
            'country': form.find('#country').val(),
            'city': form.find('#city').val(),
            'spec': form.find('#spec').val(),
            'policy': form.find('#policy').val(),
            'subscribe': form.find('#subscribe').val(),
            'security_popup_register': form.find('#security_popup_register').val(),
            'redirect': form.find('#register-redirect').val(),
            'verification_by': form.find('#verification_by').val(),
        }

        // Hide status messages
        form.find('.submit-status').removeClass('opened');

        // Check passwords
        const user_password = $(this).find('#user_password').val();
        const user_password_repeat = $(this).find('#user_password_repeat').val();
        if (user_password != user_password_repeat || user_password.length < 8 || !user_password.match(/[A-Za-z]+/) || !user_password.match(/[0-9]+/)) {
            form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html('Пароли должны совпадать, состоять из латинских символов и цифр, и иметь длинну не менее 8 символов');
            return;
        }

        // Check phone length
        if ((data.phone.match(/\d/g) || []).length < 11) {
            form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html('Неверная длина телефонного номера.');
            return;
        }

        // Send by ajax
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // If user was registered
                    // Show success message
                    form.hide();
                    $('.verification-step.' + data.verification_by).show();
                    // Dispatch custom event
                    document.dispatchEvent(new Event('user-requested'));
                    // document.dispatchEvent(new Event('user-registered'));
                } else {
                    // If something wrong
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function viberVerification() {
    $('#viber_verification').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_viber_verification',
            'code': form.find('#viber_code').val(),
            'security_viber_verification': form.find('#security_viber_verification').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // Show result success message
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function (res) {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}


function smsVerification() {
    $('#sms_verification').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_sms_verification',
            'code': form.find('#sms_code').val(),
            'security_sms_verification': form.find('#security_sms_verification').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // Show result success message
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function (res) {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function emailVerification() {
    $('#email_verification').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_email_verification',
            'code': form.find('#email_code').val(),
            'security_email_verification': form.find('#security_email_verification').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // Show result success message
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function (res) {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function skipVerification() {
    $('.js-skip-verification').on('click', function (e) {
        e.preventDefault();

        form = $(this).closest("form");
        data = {
            'action': 'ajax_skip_verification',
            'security_skip_verification': form.find('#security_skip_verification').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // Show result success message
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function(){
                        window.location.reload(true);
                    }, 2000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function (res) {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function forgotPassword() {
    $('#static-lost-password-form').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_user_forgot_password', //calls wp_ajax_nopriv_ajaxlogin
            'user_login': form.find('#user_login').val(),
            'security_forgot_password': form.find('#security_forgot_password').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // Show result success message
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function () {
                            document.location.href="/";
                        }, 1000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function (res) {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}


function resetPassword() {
    $('#static-reset-password-form').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_user_reset_password', //calls wp_ajax_nopriv_ajaxlogin
            'password_new': form.find('#password_new').val(),
            'password_new_repeat': form.find('#password_new_repeat').val(),
            'reset_password_security': form.find('#reset_password_security').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    // Show result success message
                    form.find('#password_new').val('');
                    form.find('#password_new_repeat').val('');
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);

                    redirectUrl = form.find('#reset-redirect').val();
                    setTimeout(formRedirect(redirectUrl), 3000);
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function (res) {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function popupLoginByPhone() {
    if (checkCookie('phone-code')) {
        makeTimerCode(checkCookie('phone-code'));
    }
    $('#popup-auth-forms-login-by-phone').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'ajax_login_by_phone', //calls wp_ajax_nopriv_ajaxlogin
            'user_phone': form.find('#user_phone').val(),
            'code': form.find('#code').val(),
            'security': form.find('#security_login_by_phone').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
                form.find('.submit-status').removeClass('opened');
            },
            success: function (data) {
                if (data.loggedin == true) {
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    document.dispatchEvent(new Event('user-logged-in'));
                    redirectUrl = form.find('#login-redirect-by-phone').val();
                    setTimeout(formRedirect(redirectUrl), 2000);
                } else {
                    if (data.error) {
                        form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.error);
                    }
                    if (data.status) {
                        switch (data.status) {
                            case 'code_sent_success':
                                form.find('[type=submit]').text('ВОЙТИ');
                                form.find('#user_phone').prop('disabled', true);
                                form.find('#code').prop('disabled', false).prop('required', true).focus();
                                form.removeClass('form-loading');
                                form.find('[type=submit]').removeClass('button-loading');
                                document.cookie = 'phone-code=15; max-age=15';
                                makeTimerCode(15);
                                break;
                            case 'code_sent_error':
                                form.removeClass('form-loading');
                                form.find('[type=submit]').removeClass('button-loading');
                                break;
                            case 'code_wrong':
                                form.removeClass('form-loading');
                                form.find('[type=submit]').removeClass('button-loading');
                                break;
                        }
                    }
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });

    function makeTimerCode(sec) {
        const timerBlock = document.getElementById('phone-code-renew');
        const timerElement = document.getElementById('time-to-renew-code');
        let remainingTime = parseInt(sec);

        timerBlock.classList.remove('done');
        timerBlock.classList.add('wait');


        const timerInterval = setInterval(() => {
            remainingTime--;
            timerElement.textContent = `Вы сможете запросить новый код через ${remainingTime} сек`;

            if (remainingTime === 0) {
                clearInterval(timerInterval);
                timerBlock.classList.add('done');
                timerBlock.classList.remove('wait');
            }
        }, 1000);
    }

    $('#renew-code-button').on('click', function (event) {
        event.preventDefault();
        const timerBlock = document.getElementById('phone-code-renew');
        const submitButton = document.getElementById('auth-phone-submit');
        timerBlock.classList.remove('done');
        timerBlock.classList.remove('wait');
        form.find('.submit-status').removeClass('opened');
        form.find('#user_phone').prop('disabled', false).focus();
        form.find('#code').prop('disabled', true).prop('required', false);
        submitButton.innerHTML = 'ЗАПРОСИТЬ КОД';
    });
}

function showHidePassword() {

    $('.password-input-container .show-hide-pass').on('click', function (event) {
        event.preventDefault();

        let input = $(this).parent().find('input[type="text"], input[type="password"]');

        if ($(input).attr('type') === "password") {
            $(this).addClass('opened');
            $(input).attr('type',"text");
        } else {
            $(this).removeClass('opened');
            $(input).attr('type',"password");
        }

    });
}

/**
 * Make slider for home page if has two or more slides
 */
function makeMainSlider() {

    mainSlidesContainer = $('.hero-main');
    mainSlides = mainSlidesContainer.find('.hero-slide');

    if (mainSlides.length >= 2) {

        mainSlidesContainer.slick({
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true
        });

    }
}


/**
 * Init country and city autocomplete in registration form
 *
 * Used dadata.ru: https://dadata.ru/
 */

function countryAndCityAutocomplete() {
    if ($("input#country").length && $("input#city").length) {
        // Set token in vars.js

        data = {
            'action': 'get_docacademy_option',
            'option': 'dadata_key'
        }

        $.ajax({
            url: window.location.origin + '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: data,
            success: function (token) {
                generateCity(token);
            }
        });

        function generateCity(token) {
            var TOKEN = token;
            // Set format results for cities
            var defaultFormatResult = $.Suggestions.prototype.formatResult;

            function formatResult(value, currentValue, suggestion, options) {
                var newValue = suggestion.data.city;
                suggestion.value = newValue;
                return defaultFormatResult.call(this, newValue, currentValue, suggestion, options);
            }

            // Set format return for cities
            function formatSelected(suggestion) {
                return suggestion.data.city;
            }

            $("input#city").attr("autocomplete", "off");
            $("input#city").suggestions({
                token: TOKEN,
                type: "ADDRESS",
                bounds: "city",
                count: 3,
                constraints: {
                    locations: {
                        country: "Беларусь"
                    },
                },
                formatResult: formatResult,
                formatSelected: formatSelected,
            });
        }
    }
}


/**
 * Generate add to calendars buttons
 */
function makeCalendarsButtons() {
    calendars = document.querySelectorAll('.add-to-calendar-js');

    for (var i = 0, len = calendars.length; i < len; i++) {

        data_title = calendars[i].getAttribute('data-title');
        data_start = calendars[i].getAttribute('data-start');
        data_end = calendars[i].getAttribute('data-end');
        data_location = calendars[i].getAttribute('data-location');
        data_description = calendars[i].getAttribute('data-description');


        var myCalendar = createCalendar({
            data: {
                // Event title
                title: data_title,

                // Event start date
                start: new Date(data_start),

                // You can also choose to set an end time
                // If an end time is set, this will take precedence over duration
                end: new Date(data_end),

                // Event Address
                address: data_location,

                // Event Description
                description: data_description
            }
        });

        new_calendar = calendars[i].appendChild(myCalendar);

        // Change structure
        new_calendar.querySelector('.add-to-calendar-label').textContent = 'Добавить в календарь';

        new_calendar.querySelector('.icon-google').textContent = 'Google календарь';
        new_calendar.querySelector('.icon-yahoo').remove();
        new_calendar.querySelector('.icon-ical').textContent = 'iCalendar';
        new_calendar.querySelector('.icon-outlook').textContent = 'Outlook';

    }
}

/**
 * Change password form ajax
 */
$('#change-password-form').on('submit', function (event) {
    event.preventDefault();

    form = $(this);

    data = {
        'action': 'new_password',
        'password_old': form.find('#password_old').val(),
        'password_new': form.find('#password_new').val(),
        'password_new_repeat': form.find('#password_new_repeat').val(),
        'security': form.find('#security').val(),
    }

    $.ajax({
        url: form.attr('action'),
        type: 'POST',
        data: data,
        dataType: 'json',
        beforeSend: function () {
            form.addClass('form-loading');
            form.addClass('button-loading');
        },
        success: function (result) {
            if (result.status === true) {
                // $('#change-password-form').find('.status-message').removeClass('error').addClass('opened').html(result.message);
                document.location.href="/lp-profile/";
            } else {
                $('#change-password-form').find('.status-message').addClass('error').addClass('opened').html(result.message);
            }
        }
    }).done(function () {
        form.removeClass('form-loading');
        form.removeClass('button-loading');
    });
});


function profileEdit() {
    $('#profile-forms-edit').on('submit', function (e) {

        // Stop default submit
        e.preventDefault();

        const form = $(this);

        // Hide status messages
        form.find('.status-message').removeClass('opened');

        var formData = new FormData(this);
        formData.append("image", form.find('#user_image')[0].files[0]);
        formData.append("action", 'profile_edit');

        // // Send by ajax
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: form.attr('action'),
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (response) {
                if (response.status == true) {
                    // If user was registered
                    document.location.href="/lp-profile/";
                    // form.find('.status-message').addClass('opened').removeClass('error').addClass('success').text(response.message);
                } else {
                    // If something wrong
                    form.find('.status-message').addClass('opened').removeClass('success').addClass('error').html(response.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

/**
 * Subscribe to webinar ajax
 */

function subscribeToWebinar() {
    $('#subscribe-to-webinar').on('click', function (e) {

        // Stop default submit
        e.preventDefault();

        args = {
            'action': 'subscribe_to_webinar',
        }

        // // Send by ajax
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: ajaxinfo.url,
            data: args,
            beforeSend: function () {
                $('#subscribe-to-webinar').attr('disabled', 'disabled');
            },
            success: function (response) {
                if (response.status == true) {
                    $('#subscribe-to-webinar').hide();
                    $('#subscribe-to-webinar').after('<p class="button button-bordered">Готово!</p>');
                }
            }
        }).done(function () {
            $('#subscribe-to-webinar').removeAttr('disabled');
        });
    });
}

/**
 * Play video
 *
 * On click remove 'stopped' class from container and play video.
 */
function videoPlay() {
    $('.video-container.stopped').on('click', function (event) {
        event.preventDefault();
        $(this).removeClass('stopped');
        $(this).find('video').get(0).play();
    });
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// Make timer alive!
function initializeClock() {
    var clock = document.querySelector('.coming-soon-event');

    if (clock) {
        var daysSpan = clock.querySelector(' .timer-single:nth-child(1) .count');
        var hoursSpan = clock.querySelector('.timer-single:nth-child(2) .count');
        var minutesSpan = clock.querySelector('.timer-single:nth-child(3) .count');
        var secondsSpan = clock.querySelector('.timer-single:nth-child(4) .count');

        var endtime = new Date();

        // Nodes to int
        days = parseInt(daysSpan.firstChild.nodeValue);
        hours = parseInt(hoursSpan.firstChild.nodeValue);
        minutes = parseInt(minutesSpan.firstChild.nodeValue);
        seconds = parseInt(secondsSpan.firstChild.nodeValue);

        // Make new end date
        endtime.setDate(endtime.getDate() + days);
        endtime.setHours(endtime.getHours() + hours);
        endtime.setMinutes(endtime.getMinutes() + minutes);
        endtime.setSeconds(endtime.getSeconds() + seconds);

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
}

initializeClock();


/**
 * Add lazy load to images with BG style
 *
 * Add data-lazybg="{url bg image}" to block with bg image
 */
function lazyLoad() {
    let lazyObjectObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let lazyObject = entry.target;
                if (!(lazyObject.dataset.lazybg == '')) {
                    bgsrc = lazyObject.dataset.lazybg;
                    lazyObject.style.backgroundImage = 'url(' + bgsrc + ')';
                    lazyObject.dataset.lazybg = '';
                    lazyObjectObserver.unobserve(lazyObject);
                }
            }
        });
    }, {
        rootMargin: "0px 0px 0px 0px"
    });
    document.addEventListener("DOMContentLoaded", function () {
        var lazyObjects = [].slice.call(document.querySelectorAll("[data-lazybg]"));
        lazyObjects.forEach(function (lazyObject) {
            lazyObjectObserver.observe(lazyObject);
        });
    });
}

lazyLoad();

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7] && match[7].length === 11) ? match[7] : false;
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

function youtubeVideoEventPlayEventSinglePage() {
    let ytvideo = $('.event-single #youtube-video');

    let link = $('#youtube-video').attr('data-link')
    let ytvideo_link = false;

    if (link) {
        ytvideo_link = youtube_parser(link);
    }

    if (ytvideo && ytvideo_link) {
        let player;
        player = new window.YT.Player("youtube-video", {
            width: 800,
            height: 500,
            videoId: ytvideo_link,
            events: {
                onReady: window.onPlayerReady,
                onStateChange: onPlayerStateChange
            },
            playerVars: {
                rel: 0,
            }
        });

        let end_video_event_sent = false;

        function sendVideoEvent(event_type) {
            const args = {
                'action': 'event_video',
                'security': ajaxinfo.nonce,
                'event': event_type,
            }

            // Send by ajax
            $.ajax({
                type: 'POST',
                dataType: 'JSON',
                url: ajaxinfo.url,
                data: args,
                success: function (response) {
                    document.dispatchEvent(new CustomEvent('video_event', {'detail': response.data}));

                    // Удалить по завершению проекта Наследие start
                    if ('notice' in response) {
                        let stepThreeEnd = new Notice(
                            response.notice.title,
                            response.notice.description,
                            response.notice.status,
                            '',
                            5000000
                        );
                        stepThreeEnd.push();
                    }
                    // Удалить по завершению проекта Наследие end
                }
            });
        }

        let watch_video_notified = false;

        // If video played to 90% and more - set it like a watched
        function videoPlayCheck(duration_to_end) {
            let videoCheckInterval = setInterval(function () {

                let playerStatus = player.getPlayerState();

                if (end_video_event_sent == true) {
                    clearInterval(videoCheckInterval);
                }

                if (playerStatus != 1 && playerStatus != 3) {
                    clearInterval(videoCheckInterval);
                }

                if (!watch_video_notified) {
                    if (player.getCurrentTime() > player.getDuration() / 2) {
                        const notice = new Notice('Внимание', 'Досмотрите видео до конца.');
                        notice.push();
                        watch_video_notified = true;
                    }
                }

                if ( player.getCurrentTime() > duration_to_end) {
                    clearInterval(videoCheckInterval);
                    if (end_video_event_sent != true) {
                        if (!end_video_event_sent) {
                            sendVideoEvent('video_end');
                            end_video_event_sent = true;
                        }
                        end_video_event_sent = true;
                    }
                }
            }, 1000);
        };

        function onPlayerStateChange(event) {

            const yt_events = [-1, 0, 1, 2];

            if (yt_events.includes(event.data)) {

                let event_type;

                switch (event.data) {
                    case 0: // Video ended
                        if (!end_video_event_sent) {
                            sendVideoEvent('video_end');
                            end_video_event_sent = true;
                        }
                        break;
                    case 1: // Video play
                        sendVideoEvent('video_play');
                        videoPlayCheck(player.getDuration() * 0.9);
                        break;
                    case 2: // Video pause
                        sendVideoEvent('video_pause');
                        break;
                    case -1: // Video started
                        sendVideoEvent('video_start');
                        break;
                }

            }
        };


    }
}

function scrollToTopButtonToogle() {
    $(window).on('scroll', function () {
        if (window.pageYOffset > 1000) {
            $('.arrow-scroll-up').fadeIn(400);
        } else {
            $('.arrow-scroll-up').fadeOut(400);
        }
    });
}

function comments() {

    /**
     * Close form button
     */
    $('.comment-single .close-comment-form').on('click', function (event) {
        event.preventDefault();
        $(this).closest('form').hide();
    });

    /**
     * Open reply comment form
     */
    $('.comment-single .comment-reply').on('click', function (event) {
        event.preventDefault();
        $(this).closest('.comment-single').find('form.comment-reply-form').show();
    });

    /**
     * Change password form ajax
     */
    $('.comment-reply-form').on('submit', function (event) {
        event.preventDefault();

        form = $(this);

        data = {
            'action': 'add_comment',
            'comment_text': form.find('[name="comment_text"]').val(),
            'comment_id': form.find('[name="comment_id"]').val(),
            'security': form.find('#security').val(),
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
                    document.location.reload();
                } else {
                    form.find('.status-message').addClass('error').addClass('opened').html(result.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
            form.find('[type=submit]').prop('disabled', false);
        });
    });

    /**
     * Open edit comment form
     */
    $('.comment-single .comment-edit').on('click', function (event) {
        event.preventDefault();
        let comment_container = $(this).closest('.comment-single');
        let current_text = comment_container.find('.text p').hide().html();
        comment_container.find('form.comment-edit-form textarea').html(current_text);
        comment_container.find('form.comment-edit-form').show();
    });
    $('.comment-edit-form .close-comment-form').on('click', function (event) {
        $(this).closest('.comment-single').find('.text p').show();
    });

    /**
     * Change password form ajax
     */
    $('.comment-edit-form').on('submit', function (event) {
        event.preventDefault();

        form = $(this);
        content = $(this).closest('.comment-single').find('.text p');

        data = {
            'action': 'edit_comment',
            'comment_text': form.find('[name="comment_text"]').val(),
            'comment_id': form.find('[name="comment_id"]').val(),
            'security': form.find('#security').val(),
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
                    content.html(form.find('[name="comment_text"]').val());
                    form.hide();
                    content.show();
                } else {
                    form.find('.status-message').addClass('error').addClass('opened').html(result.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
            form.find('[type=submit]').prop('disabled', false);
        });
    });


    // legal section - play video
    $('.video').click(function () {
        $('#overlay').fadeIn(400);
        $(this).children('.modal_form').css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
            .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
    // legal section - play video overlay
    $('.modal_close, #overlay').click(function () { // лoвим клик пo крестику или пoдлoжке
        $('.modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function () { // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });

    // Accordion
    $(function () {
        let Accordion = function (el, multiple) {
            this.el = el || {};
            // more then one submenu open?
            this.multiple = multiple || false;

            let accordionTitle = this.el.find(".accordion-title");
            accordionTitle.on(
                "click",
                {el: this.el, multiple: this.multiple},
                this.dropdown
            );
        };

        Accordion.prototype.dropdown = function (e) {
            let $el = e.data.el,
                $this = $(this),
                //this is the ul.submenuItems
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass("open");

            if (!e.data.multiple) {
                //show only one menu at the same time
                $el
                    .find(".accordion-content")
                    .not($next)
                    .slideUp()
                    .parent()
                    .removeClass("open");
            }
        };

        let accordion = new Accordion($(".faq-accordion"), false);
    });


    // FAQ form - in work now, no need to check for the moment!!!
    var form = $('.form-send-mail'),
        action = form.attr('action');
    // checking field for not empty

    form.find('.req-field').addClass('empty-field');

    function checkInput() {
        form.find('.req-field').each(function () {
            var el = $(this);
            if (el.val() != '') {
                el.removeClass('empty-field');
            } else {
                el.addClass('empty-field');
            }
        });
    }

    function lightEmpty() {
        form.find('.empty-field').addClass('rf-error');
        setTimeout(function () {
            form.find('.rf-error').removeClass('rf-error');
        }, 1000);
    }

    $(document).on('submit', '.form-send-mail', function (e) {
        var formData = {
            client_quest: $('#client_quest').prop('value')
        };

        $.ajax({
            type: 'POST',
            url: action,
            data: formData,
            beforeSend: function () {
                form.addClass('is-sending');
            },
            error: function (request, txtstatus, errorThrown) {
                form.removeClass('is-sending').addClass('is-sending-complete').addClass('error');
            },
            success: function (response) {
                const data = JSON.parse(response);
                if (data.status === 'success') {
                    form.removeClass('is-sending').addClass('is-sending-complete').addClass('success');
                } else {
                    form.removeClass('is-sending').addClass('is-sending-complete').addClass('error');
                }
            }
        });

        e.preventDefault();
    });

    $(document).on('click', '.form-send-mail button[type="submit"]', function (e) {
        checkInput();
        var errorNum = form.find('.empty-field').length;
        if (errorNum > 0) {
            lightEmpty();
            e.preventDefault();
        }
    });

    $(document).on('click', '.icon-close', function (e) {
        $('.form-send-mail').removeClass('is-sending-complete');
        $('.sending-complete-message').css('display', 'none');
    });

}

/**
 * Prevent pass requierd input with just write space
 * Add to input: oninput="validateEmptySpace(this)"
 */
function validateEmptySpace(input) {
    if (/^\s/.test(input.value))
        input.value = '';
}

/**
 * Only Russian chars available
 */
function allowRussianLettersAndSpace(input) {
    if (! /^[А-ЯЁа-яё\s-]*$/.test(input.value)) {
        input.value = input.value.slice(0, -1);
    }

    if (/^\s/.test(input.value) && input.value.length < 2) {
        input.value = '';
    }
}


/**
 * Tree tabs
 */
function treeTabs() {
    $('[data-tab]').on('click', function (event) {
        event.preventDefault();
        $section_id = $(this).data('tab');

        if ( $($section_id) ) {
            $('.section.step.active').removeClass('active');
            $($section_id).addClass('active');
        }
    });
}

/**
 * New Year cards
 */

function newYearCards() {

    const cardsContainer = document.querySelector('#new-year-cards');

    if (cardsContainer) {
        const cardsList = [
            "В Новый год все ждут чуда.<br>И я хочу пожелать вам, чтобы в следующем году вы были не только с чудесами, но и сами творили чудеса!<br>Потому что, когда человек творит чудеса, он становится волшебником!<br>Давайте поднимем бокалы за чудеса и волшебников!<br>Ура! С Новым годом!",
            "Пусть Новый год станет для вас годом новых начинаний, свершений и побед. Пусть ваш дом наполняется теплотой и уютом.<br>С праздником, друзья. Будьте счастливы!<br>А с вами, с нашей дружной командой, и ваши мечты обязательно сбудутся!",
            "Пусть Новый год будет счастливым, И пусть все будут здоровы, Пусть будут в доме мир, покой и лад, А горести, как снег, уйдут в овраг.<br>Пусть новый год подарит вам счастье, Любовь и преданность друзей, Не будет в жизни никогда ненастья, Тебе же только добрых новостей.<br>Улыбок, радости, веселья и удачи, Побольше в этом Новом году, Пускай сбываются мечты, что в детстве Мечтал когда-то ты в саду.",
            "Пусть Новый год придёт в ваш дом, Пусть счастье и веселье Согреет дом теплом, И пусть в твоей душе всегда поёт весна.<br>Пусть Новый год подарит радость От всех забот и бед, Пускай в душе не будет места для печали и уныния, А в доме будут лишь любовь и счастье.",
            "Поздравляем с Новым годом! В канун Нового года у одного из жителей города появляется возможность загадать любое желание.<br>И он загадывает, чтобы все его близкие были счастливы. А также, чтобы в его семье не было никаких проблем.<br>Он даже не подозревает, что желание сбудется.",
            "С Новым годом Дорогие коллеги, с Новым Годом!<br>Позвольте вас от всей души поздравить! Желаю вам здоровья, счастья, смеха, А также, чтоб всегда во всём везло вам! Пускай в достатке будет ваша жизнь.<br>Пусть всё отлично будет в этом мире, И пусть удача вам сопутствует во всем, А дом ваш будет полон счастья и любви.",
            "Дорогие коллеги, мы хотим поздравить вас с Новым годом!<br>И пожелать вам и вашим близким здоровья, семейного счастья, благополучия, любви и радости!<br>Мы работаем для вас и ради вас, чтобы наш сайт радовал вас. Мы очень ценим ваше внимание и вашу поддержку, спасибо вам за то, что вы с нами!<br>С наступающим, друзья!",
            "Дорогие коллеги, мы хотим поздравить вас с Новым годом!<br>Пусть этот год будет насыщен новыми идеями и творческими успехами. Желаем вам крепкого здоровья, благополучия, счастья и любви!<br>С Новым годом, коллеги!",
            "Новый Год - это хороший повод подвести итоги, подумать о том, что удалось, а что нет.А еще - помечтать о будущем!<br>Но самое главное - мы должны помнить, что в жизни главное не то, как ты живешь, а с кем ты живешь и какими воспоминаниями будешь ты жить в своей старости.",
            "В новом году желаем , чтобы все были здоровы и веселы, чтоб были деньги и новые идеи, чтоб все это было в радость.<br>А еще хочу пожелать побольше смеха, потому что смех продлевает жизнь.<br>И вообще, я хочу пожелать в новом году, чтобы мы чаще смеялись.",
            "Дорогие друзья! Мы от всей души поздравляем вас с Новым годом и Рождеством!<br>В эти праздничные дни у каждого из нас есть возможность помечтать, загадать желания и поверить в то, что они обязательно сбудутся.",
            "В Новый год мы хотим пожелать вам всего самого лучшего, что есть в этом мире.<br>Чтоб ваши близкие и родные всегда были рядом с вами. Чтобы все ваши мечты сбывались, а планы реализовывались.<br>Пусть в вашей семье будет только счастье, мир и покой. Поздравляем вас с Новым годом!",
            "В Новый год мы хотим пожелать вам лишь одного - чтобы вы не забывали о том, что у вас есть сердце. Оно у нас одно на всех. И если кто-то из нас забудет об этом, то другие обязательно напомнят.<br>С Новым годом! С новым счастьем! ",
            "Желаю, чтобы в наступающем году с вами произошло то самое чудо, о котором ты так мечтаешь. Хоть у каждого оно свое, но оно обязательно самое необходимое и самое важное.",
            "С Новым годом, дорогие коллеги!<br>Надеемся, что в следующем году вы сможете справиться с любыми жизненными трудностями, как с легкостью бабочка летает над забором. И не забудьте наслаждаться каждым моментом, как слон наслаждается кусочком сахара. ",
            "С Новым годом, коллеги!<br>Желаем вам чтобы в следующем году ваши достижения росли стремительно, как рост дерева в летнее время. И не забудьте сохранять свежий взгляд на вещи, как свежий лист на дереве. С Новым годом!",
            "С Новым годом, дорогие коллеги!<br>Желаем вам, чтобы в следующем году ваши дни были солнечными, как летний день, и ваши сны сбывались, как мечты в ночное время. И не забудьте сохранять хорошее настроение, как хорошую погоду. ",
            "С Новым годом, мои дорогие друзья!<br>Желаем вам, чтобы в следующем году ваши проблемы решались сами, как пазлы в детстве. И не забудьте смеяться каждый день, как будто это ваш последний. ",
            "С Новым годом, друзья!<br>Желаем вам, чтобы в следующем году ваша жизнь была полна удачи и радости, как полное яблоко счастья. И не забудьте слушать свою интуицию, как чайник своего гудка.",
            "Дорогие друзья, с наступающим  Новым годом!<br>Он принесет нам удачу и счастье. Он станет лучше прошлого, и нам не нужно будет разбираться в его остатках.<br>Да здравствует Новый год!",
            "В новом году, давайте начнем с того, что не будем жить прошлым.<br>Давайте попробуем жить здесь и сейчас, и, если возможно, в будущем.<br>Жизнь — это дар, который мы должны использовать с умом.",
            "В новом году, давайте будем честны, у нас будет много времени и пространства для того, чтобы просто посидеть и спокойно посмотреть на мир.<br>Поэтому предлагаю воспользоваться этим редким моментом в жизни и устроить себе и своим близким настоящую сказку.",
            "В новом году, давайте будем благодарны и признательны за все хорошее что с нами происходит, несмотря на трудности, и будем меньше обращать внимание на негатив.<br>Будьте счастливы!",
            "Дорогие друзья, скоро мы встречаем Новый Год!<br>Пусть он принесет нам много радости, успехов, любви и благополучия!<br>Давайте встретим его с улыбкой на лице и открытыми сердцами.<br>Напивайтесь на здоровье, танцуйте, смейтесь и чувствуйте себя счастливыми!",
            "С Новым Годом, друзья!<br>Пусть этот год будет еще лучше, чем прошлый! Новый Год - это новая возможность начать все сначала и сделать свою жизнь чуть лучше! ",
            "Давно ли ты живешь, Новый Год? Давно ли ты радуешь людей своим приходом? Но всегда ты приносишь надежду и радость, и мы будем тебя встречать с улыбкой и открытыми сердцами.<br>С Новым Годом, дорогие друзья! Пусть этот год будет самым лучшим в нашей жизни!",
            "Дорогие коллеги, с Новым Годом!<br>Мы знаем, что ваша работа - это не только профессия, но и миссия. Вы каждый день спасаете жизни и помогаете людям стать здоровыми. Мы гордимся вами и ценим ваш труд.<br>Пусть этот Новый Год будет для вас богатым на успехи и победы над трудностями. Спасибо вам за все, что вы делаете, и желаем вам счастья, здоровья и успехов в новом году!",
            "Дорогие врачи, с Новым Годом!<br>Скажите, в этом году вы будете лечить нас лучше, чем в прошлом? Или мы должны быть готовы к тому, что ваши назначения станут еще страннее?<br>Ну не важно, мы все равно вам доверяем! Пусть этот Новый Год будет богат на успехи и радостные моменты для вас. Спасибо вам за вашу работу, и желаем вам счастья, здоровья и успехов в новом году!",
            "С Новым Годом, дорогие врачи!<br>Мы знаем, что вы работаете на полную катушку, чтобы спасти жизни и улучшить здоровье людей. Вы - настоящие герои!<br>Пусть этот Новый Год будет для вас приятным и благополучным. Желаем вам счастья, удачи, здоровья и успехов в новом году. Спасибо вам за вашу важную работу и заботу о нашем здоровье!",
            "Дорогие врачи, с наступающим Новым годом!<br>Желаю вам здоровья, счастья, удачи, терпения, любви и уважения к себе и своим коллегам.<br>В этом новом году, давайте попробуем, чтобы вы начали с малого и в конце концов достигли больших успехов.<br>Вы не можете контролировать свои эмоции, но если вы начнете контролировать свое сердце, то вы сможете контролировать свою жизнь.<br>Вот почему, если мы хотим начать новый год, мы должны начать с сердца.<br>Это будет проще, чем вы думаете.",
            "Дорогие коллеги, с Новым Годом!<br>Вы всегда готовы помочь нам, даже если у вас нет свободного времени. Вы - настоящие герои! Мы ценим ваш труд и желаем вам успехов и радости в этом новом году.<br>И не забывайте, что настоящий врач всегда находит время для шутки, даже если у него плохое настроение. Спасибо вам за вашу работу, и желаем вам счастья, здоровья и успехов в новом году!",
            "Дорогие друзья! С Новым Годом!<br>Он уже на пороге, и мы готовы к нему с восторгом! Хотя, конечно, мы также готовы к тому, что в этом году нам придется потрудиться и постараться, чтобы все получилось. Но не беда, мы с этим справимся!<br>Пусть этот Новый Год будет богат на успехи, радостные моменты и, конечно же, шутки и смех.",
            "В этом новом году, давайте будем более внимательными к своим близким и к тому, что они делают, думают и чувствуют.<br>В этом году мы все можем научиться лучше понимать себя и других, и, конечно, друг друга.",
            "В этом новом году, давайте начнем с того, что мы будем делать то, что нам нравится.<br>Мы будем заниматься тем, что помогает нам быть счастливыми.<br>А не тем, что приносит нам деньги.<br>Потому что счастье внутри нас, оно не зависит от внешних обстоятельств.<br>И оно зависит только от нас.",
            "С Новым Годом, дорогие друзья! Надеемся, что в этом году вы не будете делать новогодние решения, которые никогда не будете выполнять. Ведь это невозможно! Но не важно, что вы будете делать в этом году - похудеть, начать заниматься спортом или просто быть счастливыми. Главное - это наслаждаться каждым моментом и быть рядом с любимыми людьми.",
            "В этом новом году, давайте будем любить друг друга, как в старые добрые времена.<br>Давайте будем помнить, что мы все – люди, и что у нас есть общие ценности: мир, свобода, любовь и понимание.<br>И давайте не забывать о том, что даже если мы далеко друг от друга, мы по-прежнему связаны друг с другом.",
            "Пусть Новый Год не превращается в старый долг, а все пережитые трудности - в незабываемые впечатления!<br>Пусть все желания сбываются, а обещания - соблюдаются. С Новым Годом, дорогой друг!",
            "Новый Год - это как новая книга: много непрочитанных страниц, интригующий сюжет и неизвестное завершение. Желаю тебе чтобы эта книга была увлекательной и полной сюрпризов, а также чтобы ты нашел в ней множество новых друзей и вдохновения!<br>С Новым Годом!",
            "Пусть Новый Год не заставит нас чаще повторять старый год, а все проблемы решатся сами по себе!<br>Пусть все наши планы удачно реализуются.<br>С Новым Годом!",
        ];

        // Add cards from array
        for (const card of cardsList) {
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML = card;
            cardsContainer.append(newCard);
        }

        // Show random card on init
        const cards = document.querySelectorAll('#new-year-cards .card');
        cards[Math.floor(Math.random()*cards.length)].classList.add('active');

        // Generator button
        const buttonGenerator = document.querySelector('#button-generator');
        buttonGenerator.addEventListener('click', function (event) {
           event.preventDefault();
            const copyTextButton = document.querySelector('#button-copy-text');
            copyTextButton.innerHTML = 'Скопировать текст';
            copyTextButton.classList.remove('done');

            for (let i = 1; i < 20; i++) {
                setTimeout(function timer() {
                    let activeCards = document.querySelectorAll('#new-year-cards .card.active');
                    for (const card of activeCards) {
                        card.classList.remove('active');
                    }
                    cards[Math.floor(Math.random()*cards.length)].classList.add('active');
                }, i * 50);
            }
        });

        // Copy text button
        const copyTextButton = document.querySelector('#button-copy-text');
        copyTextButton.addEventListener('click', function (event) {
            event.preventDefault();

            const activeCard = document.querySelector('#new-year-cards .card.active');
            navigator.clipboard.writeText(activeCard.innerHTML.replace('<br>', ' '));

            this.innerHTML = '✅ Текст скопирован';
            this.classList.add('done');
        });
    }
}


/**
 * Scroll page event
 * Event run once on page scrolled to 80%
 */
function scrollPage80Percent() {

    let page_type = false;

    if (document.body.classList.contains('single-post')) {
        page_type = 'post';
    }

    const pageHeight80Percent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0.8;
    let pageScrollChecked = false;
    window.addEventListener('scroll', function (e) {
        if (document.documentElement.scrollTop > pageHeight80Percent && pageScrollChecked === false) {
            pageScrollChecked = true;
            const detail = {
                'url': window.location.pathname,
                'page_type': page_type,
            }
            document.dispatchEvent(new CustomEvent('page-scroll/80', {'detail': detail}));
        }
    });

    let articleEndChecked = false;
    let articleEndTimer = 0;
    setInterval(function() {
        articleEndTimer++;
        if (pageScrollChecked && !articleEndChecked && articleEndTimer >= 30) {
            articleEndChecked = true;
            const detail = {
                'url': window.location.pathname,
                'page_type': page_type,
            }
            document.dispatchEvent(new CustomEvent('article_end', {'detail': detail}));
        }
    }, 1000);

    document.addEventListener('page-scroll/80', function (event) {
        event.detail.action = 'page_scroll_80';
        $.ajax({
            url: ajaxinfo.url,
            type: 'POST',
            data: event.detail,
            dataType: 'json',
            success: function (result) {
            }
        }).done(function () {
        });
    });

    document.addEventListener('article_end', function (event) {
        event.detail.action = 'article_end';
        $.ajax({
            url: ajaxinfo.url,
            type: 'POST',
            data: event.detail,
            dataType: 'json',
            success: function (result) {
            }
        }).done(function () {
        });
    });
}

/**
 * Tabs toggler
 *
 * example:
 * <div class="tabs">
 *      <div class="nav">
 *          <div class="tab-button active">Вкладка 1</div>
 *          <div class="tab-button">Вкладка 2</div>
 *      </div>
 *      <div class="content">
 *          <div class="tab-content active">Контент вкладки 1</div>
 *          <div class="tab-content">Контент вкладки 2</div>
 *      </div>
 * </div>
 */
function tabsToggler() {

    const tabs = document.querySelectorAll('.tabs');
    if (tabs) {

        for (const tab of tabs) {
            let buttons = tab.querySelectorAll('.tab-button');
            let contents = tab.querySelectorAll('.tab-content');

            buttons.forEach(function (button, index) {
                button.addEventListener('click', function (event) {
                    event.preventDefault();

                    let actives = tab.querySelectorAll('.tab-button.active, .tab-content.active');
                    actives.forEach(function (activeElement) {
                        activeElement.classList.remove('active');
                    });

                    this.classList.add('active');
                    contents[index].classList.add('active');
                });
            });
        }

    }
}

function phoneMask() {
    const phones = document.querySelectorAll('.phone-mask');
    if (phones) {
        for (const phone of phones) {
            phone.addEventListener("input", (e) => {
                const value = phone.value.replace(/\D+/g, "");
                const numberLength = 12;

                let result = "+";
                for (let i = 0; i < value.length && i < numberLength; i++) {
                    result += value[i];
                }
                phone.value = result;
            });
        }
    }
}

/**
 * Tabs toggler
 *
 * example:
 * <div class="tabs">
 *      <div class="nav">
 *          <div class="tab-button active">Вкладка 1</div>
 *          <div class="tab-button">Вкладка 2</div>
 *      </div>
 *      <div class="content">
 *          <div class="tab-content active">Контент вкладки 1</div>
 *          <div class="tab-content">Контент вкладки 2</div>
 *      </div>
 * </div>
 */
function tabsToggler() {

    const tabs = document.querySelectorAll('.tabs');
    if (tabs) {

        for (const tab of tabs) {
            let buttons = tab.querySelectorAll('.tab-button');
            let contents = tab.querySelectorAll('.tab-content');

            buttons.forEach(function(button, index) {
                button.addEventListener('click', function (event) {
                    event.preventDefault();

                    let actives = tab.querySelectorAll('.tab-button.active, .tab-content.active');
                    actives.forEach(function (activeElement) {
                        activeElement.classList.remove('active');
                    });

                    this.classList.add('active');
                    contents[index].classList.add('active');
                });
            });
        }

    }
}


function popupPhoneVerification() {
    $('#popup-verification-form-login').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'phone_verification',
            'verification_by': form.find('#verification_by').val(),
            'phone': form.find('#phone').val(),
            'phone_verification_login': form.find('#phone_verification_login').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    $("#popup-verification-form-login").hide();
                    $("#popup-verification-form-login-code").show();
                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}


function popupPhoneVerificationCode() {
    $('#popup-verification-form-login-code').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'phone_verification_code',
            'code': form.find('#code').val(),
            'phone_verification_login_code': form.find('#phone_verification_login_code').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    setCookie('verified', true, 365);
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function () {
                        document.location.href="/";
                    }, 1000);

                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}

function formVerificationCode() {
    $('#verify-code-form').on('submit', function (e) {
        e.preventDefault();

        form = $(this);
        data = {
            'action': 'form_verification_code',
            'phone': form.find('#phone').val(),
            'code': form.find('#code').val(),
            'security_verify_code': form.find('#security_verify_code').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading');
            },
            success: function (data) {
                if (data.success == true) {
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').text(data.message);
                    setTimeout(function () {
                        document.location.href="/";
                    }, 1000);

                } else {
                    form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading');
        });
    });
}


function filterAcademy() {
    const filter = document.querySelector('.filter-academy-box');

    if (filter) {
        const postTypeButtons = filter.querySelectorAll('input[name="post_type\[\]"]');
        const allButton = filter.querySelector('#cb-all');
        postTypeButtons.forEach(function (button) {
            button.addEventListener('change', function () {
                if (this.checked) {
                    this.closest('.check-button').classList.add('checked');
                } else {
                    this.closest('.check-button').classList.remove('checked');
                }

                let checkedPostTypeButtons = document.querySelectorAll('input[name="post_type\[\]"]:checked');

                if (postTypeButtons.length === checkedPostTypeButtons.length) {
                    allButton.classList.add('checked');
                } else {
                    allButton.classList.remove('checked');
                }
            });
        });

        allButton.addEventListener('click', function () {
            this.classList.toggle('checked');

            if (this.classList.contains('checked')) {
                postTypeButtons.forEach(function (button) {
                    button.checked = true;
                    button.closest('.check-button').classList.add('checked');
                });
            } else {
                postTypeButtons.forEach(function (button) {
                    button.checked = false;
                    button.closest('.check-button').classList.remove('checked');
                });
            }
        });

    }
}


function accordion() {
    const accordionsList = document.querySelectorAll('.js-accordion');

    if (accordionsList) {
        accordionsList.forEach(function (accordion) {

            let accordionHead = document.querySelector('.js-accordion-head');

            if (accordionHead) {
                accordionHead.addEventListener('click', function (event) {
                    event.preventDefault();
                    accordion.classList.toggle('opened');
                });
            }

        });
    }
}


function shortsSlider() {
    let shortsSlider = $('.shorts-block.shorts-block-slick');
    let shortsSliderContainer = document.querySelector('.shorts-block');
    let shortsSlidesList = document.querySelectorAll('.shorts-block .short-slide');

    if (shortsSlider) {

        if (shortsSlider.hasClass('shorts-block-slick')) {
            shortsSlider.slick({
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                fade: true,
                cssEase: 'linear',
                adaptiveHeight: true
            });

            shortsSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                let currentVideoPlayer = document.querySelector('.shorts-block .slick-current .video-container');
                let player = YT.get(currentVideoPlayer.id);
                player.stopVideo();
                shortsSlider.find('.play').removeClass('play');
            });

            shortsSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
                let currentVideoPlayer = document.querySelector('.shorts-block .slick-current .video-container');
                let player = YT.get(currentVideoPlayer.id);
                player.mute();
                player.playVideo();
                shortsSlider.find('.slick-current').addClass('play');
            });
        }


        window.addEventListener('scroll', function() {
            if(isVisible(shortsSliderContainer)) {
                let openedShortPopup = document.querySelector('.shorts-popup.opened');
                if (openedShortPopup) {
                    return;
                }
                let currentSlide = document.querySelector('.shorts-block .slick-current');
                if (! currentSlide) {
                    currentSlide = document.querySelector('.shorts-block .short-slide');
                }

                currentSlide.classList.add('play');
                let videoPlayer = currentSlide.querySelector('.video-container');

                let player = YT.get(videoPlayer.id);
                player.mute();
                player.playVideo();
            }
        });

        shortsSlidesList.forEach(function (slide) {
            let imageContainer = slide.querySelector('.image-container');
            let videoContainer = slide.querySelector('.video-container');
            let ytvideo_link = youtube_parser(imageContainer.dataset.video);

            new window.YT.Player(videoContainer.id, {
                width: 800,
                height: 500,
                videoId: ytvideo_link,
                playerVars: {
                    controls: 0,
                    rel: 0,
                    fs: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    disablekb: 1
                }
            });

            imageContainer.addEventListener('click', function (event) {
                let player = YT.get(videoContainer.id);
                player.stopVideo();
                document.querySelector('.short-slide.play').classList.remove('play');
            });
        });
    }
}

function shortsPopups() {
    let shortPopups = document.querySelectorAll("[data-open-short-popup]");


    shortPopups.forEach(function(button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            shortsPopupOpen(button.dataset.video,button.dataset.title,button.dataset.link);
            let ytvideo_link = youtube_parser(button.dataset.video);

            playerShort = new window.YT.Player("shorts-video", {
                width: 800,
                height: 500,
                videoId: ytvideo_link,
                playerVars: {
                    controls: 0,
                    rel: 0,
                    fs: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    disablekb: 1
                }
            });
        });
    });
}

function shortsPopupOpen(videoLink,videoTitle,buttonLink) {

    let shortPopup = document.createElement('div');
    shortPopup.classList = 'shorts-popup';

    shortPopup.innerHTML = '<div class="shorts-popup-overlay"></div>\n' +
        '        <div class="shorts-popup-container">\n' +
        '            <button class="shorts-popup-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>\n' +
        '            <div class="shorts-popup-content">\n' +
        '                <div class="video">\n' +
        '                <div id="shorts-video">\n' +
        '                </div>\n' +
        '                </div>\n' +
        '                <div class="bottom">\n' +
        '                    <div class="title">\n' +
        '                        <h4>' + videoTitle + '</h4>\n' +
        '                    </div>\n' +
        '                    <a href="' + buttonLink + '" class="button">Перейти</a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '    </div>';
    $("body").append(shortPopup);

    let ytvideo = $('.shorts-popup #shorts-video');
    let ytvideo_link = youtube_parser(videoLink);

    if (ytvideo && ytvideo_link) {
        let playerShort;

        playerShort = new window.YT.Player("shorts-video", {
            width: 800,
            height: 500,
            videoId: ytvideo_link,
            events: {
                onReady: onPlayerShortReady,
            },
            playerVars: {
                controls: 0,
                rel: 0,
                fs: 0,
                modestbranding: 1,
                showinfo: 0,
                disablekb: 1
            }
        });

        function onPlayerShortReady(event) {
            event.target.playVideo();
        };

        let closeButton = shortPopup.querySelector('.shorts-popup-close');
        closeButton.addEventListener('click', function (event) {
            event.preventDefault();
            shortPopup.remove();
        });

        let overlayButton = shortPopup.querySelector('.shorts-popup-overlay');
        overlayButton.addEventListener('click', function (event) {
            event.preventDefault();
            shortPopup.remove();

        });
        shortPopup.classList.add('opened');

    }



}
