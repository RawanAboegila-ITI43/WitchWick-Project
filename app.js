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
        console.log("none");
        x.style.display = "none";
    } else {
        console.log("block");
        x.style.display = "block";
    }
}