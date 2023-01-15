

function menuBar() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(document).ready(function () {
    var loginTrans = {

        color: ' #755441',
        backgroundColor: ' #fefefe'
    }
    var loginNorm = {

        color: '  #fefefe',
        backgroundColor: ' #755441'
    };
    var scroll_start = 0;
    var startchange = $('.container');
    var offset = startchange.offset();
    console.log("scroll");
    console.log(startchange);
    console.log(offset);
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('.container').css('background-color', '#fefefe');
            $('.container').css('box-shadow', '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)');
            $('#loginLink').css(loginNorm);
        } else {
            $('.container').css('background', 'transparent');
            $('.container').css('border', 'none');
            $('.container').css('box-shadow', 'none');
            $('#loginLink').css(loginTrans);
        }
    });


})