/**
 * Make slider with logos for Zdorovie page
 */
if ($('.zdorovie-suppor-list .zdorovie-support-list-singe').length > 4) {
    $('.zdorovie-suppor-list').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

// EcoSphere start


$(document).ready(function () {
    createStatusSelect();
    telegramCounterPlusOne();
});

/**
 * Add +1 to telegram counter
 */
function telegramCounterPlusOne() {
    $('#telegram_ecosphere_subscribe_button').on('click', function (e) {

        args = {
            'action': 'telegram_counter_plus_one',
            'security': treatment_ajaxinfo.nonce
        }

        // Send by ajax to telegram_counter_plus_one_ajax
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: treatment_ajaxinfo.url,
            data: args
        });
    });
}

/**
 * Make select from json
 */
function createStatusSelect() {

    // Add options from list
    $select = $('#eco-sphere-status-input');
    if (products) {
        products = JSON.parse(products);
        for (let item in products) {
            $select.append('<option value="' + item + '">' + item + '</option>');
        }
    }

    // Init select 2
    $select.select2({
        "language": {
            "noResults": function () {
                return "Ничего не найдено";
            }
        }
    });

    // Hide results on change
    $select.on('select2:select', function (e) {
        $('.eco-sphere-status-result').slideUp();
    });

    // Genarate new outpoot on click
    $('#eco-sphere-status-button').on('click', function () {
        input_data = $('#eco-sphere-status-input').val();
        find_product = findStatusProduct(input_data);

        if (find_product) {

            red = ['Не рекомендован', 'Резерв'];
            yellow = ['Вторая линия терапии'];
            green = ['Приоритетный выбор', 'Рекомендован'];

            let html = '';

            // Add safety
            alert_class = '';
            if (red.includes(find_product.safety_class)) {
                alert_class = 'red'
            }
            if (yellow.includes(find_product.safety_class)) {
                alert_class = 'yellow'
            }
            if (green.includes(find_product.safety_class)) {
                alert_class = 'green'
            }
            html += '<div class="single"><div><p>Класс экологической безопасности<sup>6</sup>:</p></div><div class="recommendation ' + alert_class + '">' + find_product.safety_class + '</div></div>';

            // Add safety
            alert_class = '';
            if (red.includes(find_product.ru_recomendations)) {
                alert_class = 'red'
            }
            if (yellow.includes(find_product.ru_recomendations)) {
                alert_class = 'yellow'
            }
            if (green.includes(find_product.ru_recomendations)) {
                alert_class = 'green'
            }
            html += '<div class="single"><div><p>Российские рекомендации<sup>7</sup>:</p></div><div class="recommendation ' + alert_class + '">' + find_product.ru_recomendations + '</div></div>';

            // Add safety
            alert_class = '';
            if (red.includes(find_product.eu_recomendations)) {
                alert_class = 'red'
            }
            if (yellow.includes(find_product.eu_recomendations)) {
                alert_class = 'yellow'
            }
            if (green.includes(find_product.eu_recomendations)) {
                alert_class = 'green'
            }
            html += '<div class="single"><div><p>Европейские рекомендации<sup>8</sup>:</p></div><div class="recommendation ' + alert_class + '">' + find_product.eu_recomendations + '</div></div>';

            $('.eco-sphere-status-result').html(html);
            $('.eco-sphere-status-result').slideDown();

        }
    });

}

function findStatusProduct(product_name) {
    response = '';
    if (products && products[product_name]) {
        response = products[product_name];
    }
    return response;
}


products = '{"Амикацин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Амоксициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Амоксициллин/клавулановая кислота": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Ампициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Ампициллин/сульбактам": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Бакампициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Бензатина бензилпенициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Бензилпенициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефецетрил": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефадроксил": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Цефалексин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефалотин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефапирин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефатризин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефазедон": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефазолин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефрадин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефродаксин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтрезол": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Хлорамфеникол": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Клиндамицин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Клометоциллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Клоксациллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Диклоксациллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Доксициклин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Флуклоксациллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Гентамицин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Мециллинам": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Метронидазол (в/в)": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Метронидазол (перорально)": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Нафциллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Нитрофурантоин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Оксациллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пенамециллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Феноксиметилпеницллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пивампициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пивмециллинам": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Прокаин бензилпенициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Спектиномицин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Сульфадиазин/триметоприм": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Сульфаметизол/триметоприм": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Сульфаметоксазол/триметоприм": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Сульфаметрол/триметоприм": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Сульфамоксол/триметоприм": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Сультамициллин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тетрациклин": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тиамфеникол": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Триметоприм": {"safety_class": "Приоритетный выбор", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Арбекацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Азитромицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Азлоциллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Биапенем": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Карбенициллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефаклор": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефамандол": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефбуперазон": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефкапен пивоксил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефдинир": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефдиторен пивоксил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефепим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефетамет пивоксил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефиксим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефменоксим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефметазол": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефминокс": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефодизим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефоницид": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефоперазон": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефоранид": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефоселис": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефотаксим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефотетан": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефотиам": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефотиам гексетил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефокситин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефозопран": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефпирамид": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефпиром": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефподоксим проксетил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефпрозил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтазидим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефтерал пивоксил": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтибутен": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефтизоксим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтриаксон": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефуроксим": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Хлортетрациклин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Ципрофлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Кларитромицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Клофоктол": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Делафлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Дибекацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Диритромицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Дорипенем": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Эноксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Эртапенем": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Эритромицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Флероксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Фломоксеф": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Флумеквин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Фосфомицин (перорально)": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Фузидиевая кислота": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Гареноксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Гатифлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Гемифлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Имипенем/циластатин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Изепамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Джозамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Канамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Латамоксеф": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Левофлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Линкомицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Ломефлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Лимециклин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Меропенем": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Метациклин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Мезлоциллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Микрономицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Мидекамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Миноциклин (перорально)": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Моксифлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Неомицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Нетилмицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Норфлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Офлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Олеандомицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Окситетрациклин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Панипенем": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пазуфлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пефлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Фенетициллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пиперациллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Пиперациллин/тазобактам": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Пристинамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Прулифлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Рибостамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Рифабутин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Рифампицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Рифамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Рифаксимин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Рокситромицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Руфлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Сизомицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Ситофлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Спарфлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Спирамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Спирамицин/метронидазол": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Стрептомицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Сульбенициллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тебипенем": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тейкопланин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Телитромицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Темоциллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тикарциллин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тобрамицин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тозуфлоксацин": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Ванкомицин (в/в)": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Ванкомицин (перорально)": {"safety_class": "Вторая линия терапии", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Азтреонам": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтаролин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтазидим-авибактам": {"safety_class": "Резерв", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Цефтобипрол медокарил": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Цефтозалан-тазобактам": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Колистин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Далбаванцин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Дафлопристин-квинупристин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Даптомицин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Эравациклин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Фаропенем": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Фосфомицин (в/в)": {"safety_class": "Резерв", "ru_recomendations": "Рекомендован", "eu_recomendations": "Не рекомендован"}, "Линезолид": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Меропенем-сульбактам": {"safety_class": "Резерв", "ru_recomendations": "Рекомендован", "eu_recomendations": "Рекомендован"}, "Миноциклин (в/в)": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Омадациклин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Оритаванцин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Плазомицин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Рекомендован"}, "Полимиксин Б": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тедизолид": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Телаванцин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}, "Тайгециклин": {"safety_class": "Резерв", "ru_recomendations": "Не рекомендован", "eu_recomendations": "Не рекомендован"}}';

// EcoSphere end
