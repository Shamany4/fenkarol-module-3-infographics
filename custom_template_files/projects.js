/**
 * No conflict for Wordpress
 */
var $ = jQuery.noConflict();

$(window).on('load', function () {
    questNeiromidinCreate();
    questNeiromidinAddStepProgress();
    questNeiromidinDelete();
    questNeiromidinAskSecond();

    // Deti Babochki
    detiBabockiCalc();
    detiBabochiPopupOpen();
    detiBabochkiVideo();

    // Medguru
    medguruAnalytics();
    smoothScrollToChapter();
    medGuruYoutube();
});

/**
 * Отправка формы добавления нового пациента в анкетировании Нейромидином
 *
 * Передает запрос, получает ответ. Если успешно - добавляет карточку.
 */
function questNeiromidinCreate() {
    $('#quest-neiromidin-create').on('submit', function (e) {
        e.preventDefault();

        const form = $(this)

        let datas = $(this).serializeArray()
        let data = {}

        $.each(datas, function (k, v) {
            data[v.name] = v.value
        })

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading').prop('disabled', true);
                form.find('.submit-status').removeClass('opened');
            },
            success: function (data) {

                if (data.success == true) {
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').html(data.message);
                    form.find('input:not(:hidden)').val('');


                    if (data.patient) {

                        let newDate = data.patient.info.date_of_birth.split("-");
                        newDate = newDate[1] + "." + newDate[2] + "." + newDate[0];

                        let newCard = document.createElement('div');
                        newCard.classList = "quest-neiromidin-card mt-4 animate__animated animate__flipInX";
                        newCard.innerHTML = '<a href="/quests/neiromidin/' + data.patient.id + '/" class="link-overlay"></a><div class="content"><div class="icon"><img src="/wp-content/themes/docacademy/assets/images/projects/quest/q-neiromidin-card.svg"></div><div class="text"><div class="title">' + data.patient.info.name + '</div><div class="description">' + data.patient.info.sex + '<br>' + newDate + '</div></div></div><div class="button mt-3">Заполнить анкету</div>';

                        $('#quest-neiromidin_block-first-step .quest-neiromidin_block_list').prepend(newCard);

                        $('#quest-neiromidin_block-first-step .empty-text').hide();
                    }

                } else {
                    if (data.message) {
                        form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                    }
                }
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading').prop('disabled', false);
        });
    });
}

function questNeiromidinAddStepProgress() {
    $('#quest_result_add_step_progress').on('submit', function (e) {
        e.preventDefault();

        const form = $(this);

        let result = {};

        form.find('[data-block]').each(
            function (index) {

                let blockId = this.dataset.block;
                result[blockId] = {};

                form.find('[data-block=' + blockId + '] [data-answer]:checked').each(function (index_a) {
                    result[blockId][this.dataset.answer] = this.value;
                });
            }
        );

        let data = {
            'action': form.find('[name=action]').val(),
            'security': form.find('[name=security]').val(),
            'result': JSON.stringify(result),
            'quest_id': form.find('[name=quest_id]').val(),
            'quest_result_id': form.find('[name=quest_result_id]').val(),
            'step_id': form.find('[name=step_id]').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading').prop('disabled', true);
                form.find('.submit-status').removeClass('opened');
            },
            success: function (data) {

                if (data.success == true) {
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').html(data.message);
                    if (data.redirect) {
                        window.location = data.redirect;
                    }

                } else {
                    if (data.message) {
                        form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                    }
                }
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading').prop('disabled', false);
        });
    });
}

function questNeiromidinDelete() {

    let questDeleteYes = false;

    $('#quest_result_delete').on('submit', function (e) {
        e.preventDefault();

        if (!questDeleteYes) {
            openPopup('#popup-quest-neiromidin-delete');
            return;
        }

        const form = $(this);

        let datas = $(this).serializeArray();
        let data = {}

        $.each(datas, function (k, v) {
            data[v.name] = v.value
        })

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading').prop('disabled', true);
                form.find('.submit-status').removeClass('opened');
            },
            success: function (data) {

                if (data.success == true) {
                    window.location = data.redirect;
                } else {

                }
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
            }
        });
    });

    $("#popup-quest-neiromidin-delete-yes").on('click', function (e) {
        e.preventDefault();
        questDeleteYes = true;
        closePopup('#popup-quest-neiromidin-delete');
        $('#quest_result_delete').submit();
    });
}

function questNeiromidinAskSecond() {
    $('#quest-neiromidin-ask-second-yes').on('click', function (e) {
        $('.quest-neiromidin-ask-second').hide();
        $('.quest-neiromidin-form-second').show();
    });

    $('#quest_result_skip_progress').on('submit', function (e) {
        e.preventDefault();

        const form = $(this);

        let data = {
            'action': form.find('[name=action]').val(),
            'security': form.find('[name=security]').val(),
            'quest_id': form.find('[name=quest_id]').val(),
            'quest_result_id': form.find('[name=quest_result_id]').val(),
            'step_id': form.find('[name=step_id]').val(),
        }

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: form.attr('action'),
            data: data,
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').addClass('button-loading').prop('disabled', true);
                form.find('.submit-status').removeClass('opened');
            },
            success: function (data) {

                if (data.success == true) {
                    form.find('.submit-status').addClass('opened').removeClass('error').addClass('success').html(data.message);
                    if (data.redirect) {
                        window.location = data.redirect;
                    }

                } else {
                    if (data.message) {
                        form.find('.submit-status').addClass('opened').removeClass('success').addClass('error').html(data.message);
                    }
                }
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
            }
        }).done(function () {
            form.removeClass('form-loading');
            form.find('[type=submit]').removeClass('button-loading').prop('disabled', false);
        });
    });
}


function detiBabockiCalc() {
    const detiBabockiCalc = document.querySelector('#deti-babocki-calc');
    const detiBabockiFin = document.querySelector('#deti-babocki-fin');

    if (detiBabockiCalc && detiBabockiFin) {
        detiBabockiCalc.addEventListener('input', function (event) {
            let currentValue = parseInt(this.value);
            let currentMax = parseInt(this.max);

            if (currentValue > currentMax) {
                this.value = currentMax;
            }
            if (currentValue < 0) {
                this.value = 0;
            }

            detiBabockiFin.querySelector('span').innerHTML = this.value * 10;
        });
    }
}

function detiBabochiPopupOpen() {
    $('.card-gift-deti-babochki a').on('click', function (event) {
        event.preventDefault();
        $('.popup-babochki').addClass('opened');
    });

    $('#popup-club-deti-babochki-form').on('submit', function (event) {
        event.preventDefault();

        const form = $(this);
        const args = {
            'action': 'add_order_gift_deti_babochki',
            'gift-slug': form.find('#gift-slug').val(),
            'security': form.find('#security_card_gift').val(),
            'deti-babocki-calc': form.find('#deti-babocki-calc').val(),
        }

        $.ajax({
            type: 'POST',
            url: window.location.origin + '/wp-admin/admin-ajax.php',
            data: args,
            dataType: 'json',
            beforeSend: function () {
                form.addClass('form-loading');
                form.find('[type=submit]').prop('disabled', true);
            },
            success: function (response) {
                if (response.success == true) {
                    form.find('.status-message').removeClass('error').addClass('opened').html(response.message);
                } else {
                    form.find('.status-message').addClass('error').addClass('opened').html(response.message);
                }
            },
        }).done(function (response) {
            form.removeClass('form-loading');
            form.find('[type=submit]').prop('disabled', false);
        });
    });
}


function detiBabochkiVideo() {
    const videoContainer = document.querySelector('.zuda-video .video-container');
    const video = document.querySelector('.zuda-video .video-container video');

    if (videoContainer && video) {
        videoContainer.addEventListener('click', function (event) {
            event.preventDefault();

            if (videoContainer.classList.contains('opened')) {
                videoContainer.classList.remove('opened');
                video.stop();
            } else {
                videoContainer.classList.add('opened');
                video.play();
            }
        });
    }
}


function smoothScrollToChapter() {
    $('.scroll-to-element').on('click touch', function (event) {
        event.preventDefault();
        let scrollElem = document.querySelector($(this).data('target')).offsetTop;
        window.scrollTo({top: scrollElem, behavior: 'smooth'});
    });
}


function medguruAnalytics() {

    if (document.querySelector('.medguru')) {

        let medguruAnalytics = {
            pagePercent: 0,
            pageTimeInSeconds: 0,
            videoTime: 0,
            videoPercent: 0,
        }

        window.localStorage.setItem("medguru", JSON.stringify(medguruAnalytics));

        setInterval(function () {
            medguruAnalytics.pageTimeInSeconds++;
            window.localStorage.setItem("medguru", JSON.stringify(medguruAnalytics));
        }, 1000);

        window.addEventListener('scroll', function (e) {
            let newPagePercent = Math.round(100 * document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight));

            if (newPagePercent > medguruAnalytics.pagePercent) {
                medguruAnalytics.pagePercent = newPagePercent;
                window.localStorage.setItem("medguru", JSON.stringify(medguruAnalytics));
            }

        });

        window.addEventListener('medguru-video-progress', function (e) {
            if (e.detail.time > medguruAnalytics.videoTime) {
                medguruAnalytics.videoTime = e.detail.time;
                medguruAnalytics.videoPercent = e.detail.percent;
                window.localStorage.setItem("medguru", JSON.stringify(medguruAnalytics));
            }
        });

        window.addEventListener('visibilitychange', function () {

            window.localStorage.removeItem("medguru");

            let args = {
                'action': 'send_analytic_event',
                'category': 'medguru',
                'action_event': 'page',
                'label': 'analytic',
                'data': medguruAnalytics
            }

            $.ajax({
                type: 'POST',
                url: window.location.origin + '/wp-admin/admin-ajax.php',
                data: args,
                dataType: 'json',
            });


        });

    }
}


function medGuruYoutube() {

    let ytvideo = $('.medguru-video #medguru-video');

    let link = ytvideo.attr('data-link')
    let ytvideo_link = false;

    if (link) {
        ytvideo_link = youtube_parser(link);
    }

    if (ytvideo && ytvideo_link) {
        const tag = document.createElement("script");
        tag.id = "iframe-demo";
        tag.src = "https://www.youtube.com/iframe_api";
        const [firstScriptTag] = document.getElementsByTagName("script");
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        let player;

        window.onYouTubeIframeAPIReady = () => {
            player = new window.YT.Player("medguru-video", {
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

             let myTimer;
            function onPlayerStateChange(event){
                if(event.data==1) { // playing
                    myTimer = setInterval(function(){
                        let time = Math.round(player.getCurrentTime());
                        let duration = player.getDuration();
                        let percent = Math.round(time / duration * 100);
                        window.dispatchEvent(new CustomEvent("medguru-video-progress", {
                            detail: { time: time, percent: percent }
                        }));
                    }, 100);
                }
                else { // not playing
                    clearInterval(myTimer);
                }
            }

            $('.medguru-video .medguru-video-container .overlay').on('click', function () {
                $('.medguru-video .medguru-video-container .overlay').hide();
                player.playVideo();
            });

            $('.medguru-video #mg-button-play-video').on('click', function () {
                $('.medguru-video .medguru-video-container .overlay').hide();
                player.playVideo();
            });

        };


    }
}
