let slideIndex = 0;
showSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    return slides;
}

function menuBar() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(document).ready(function () {
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
        } else {
            $('.container').css('background', 'transparent');
            $('.container').css('border', 'none');
            $('.container').css('box-shadow', 'none');

        }
    });
})