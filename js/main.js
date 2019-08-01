//declaring variables
var images = ('../mg/UNISA-Cover-Photo.jpg', '../mg/unisa-main-campus-1024x576.jpg', '../mg/Unisa-campus.png', '../mg/15-Best-Universities-in-the-UK-for-International-Students.jpg', '../mg/12186.jpg', '../mg/15-Best-Universities-in-the-UK-for-International-Students.jpg', '../mg/7426748-11442669.jpg', '../mg/Corpus-Christi-Oxford.jpg', '../mg/google_place_photo.png', '../mg/rlscs8u6jep21.jpg', '../mg/stanford-university-best-universities-in-the-united-states-2016.jpg');

//copied js
var slider = document.getElementById('slider')
var sliderItem = slider.getElementsByTagName('div');
var dots = document.getElementById('dots');
var dotsChild = document.getElementById('dots').getElementsByTagName('li');
for (i = 0; i < sliderItem.length; i++) {
    dots.appendChild(document.createElement('li'));
    dotsChild[i].classList.add('list-inline-item');
    dotsChild[i].setAttribute("id", i);
    dotsChild[i].innerHTML = i;
    dotsChild[0].classList.add('active');
    dotsChild[i].addEventListener("click", runSlider);
}

function runSlider() {
    var dnum = this.getAttribute("id");
    for (i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
        sliderItem[dnum].classList.add('active');
        dotsChild[i].classList.remove('active');
        dotsChild[dnum].classList.add('active');
    }
}
//count 3 seconds
function showSlides() {
    var i;

    // get the array of divs' with classname image-sliderfade 
    var slides = slider.getElementsByTagName('div');

    // get the array of divs' with classname dot 
    var dots = document.getElementsByClassName('list-inline dots');

    for (i = 0; i < slides.length; i++) {
        // initially set the display to  
        // none for every image. 
        slides[i].style.display = "none";
    }

    // increase by 1, Global variable 
    slideIndex++;

    // check for boundary 
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
        replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change image every 3 seconds 
    setTimeout(showSlides, 3000);
}