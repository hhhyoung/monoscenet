

$(document).ready(function () {
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    // alert(page_id);

    if (page_id == 'content3') {
        $('html, body').animate({
            scrollTop: $('#scroll-' + page_id).offset().top -150
        }, 500);
    } else if (page_id == 'content5') {
        $('html, body').animate({
            scrollTop: $('#scroll-' + page_id).offset().top -150
        }, 500);
    }

});