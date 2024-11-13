/**
 * No conflict for Wordpress
 */
var $ = jQuery.noConflict();

/**
 * Set coockies
 * @param name - name
 * @param value - value
 * @param days - how much days to be expired
 */
function setCookie(name, value, days) {
    let maxAge = days * 24 * 60 * 60 * 1000;
    document.cookie = name + '=' + value + '; max-age=' + maxAge;
}

/**
 * Check coockie by name
 * @param name - name
 * @return boolean
 */
function checkCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Serialize the form and return data in json
 *
 * @param {jquery} $form
 * @returns
 */
function getFormDataJson($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

/**
 * Add target _blank to all external links
 */
$('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if (!a.test(this.href)) {
        $(this).attr("target","_blank");
    }
});
