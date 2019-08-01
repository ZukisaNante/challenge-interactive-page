//declaring variables
var images = ('../mg/UNISA-Cover-Photo.jpg', '../mg/unisa-main-campus-1024x576.jpg', '../mg/Unisa-campus.png', '../mg/15-Best-Universities-in-the-UK-for-International-Students.jpg', '../mg/12186.jpg', '../mg/15-Best-Universities-in-the-UK-for-International-Students.jpg', '../mg/7426748-11442669.jpg', '../mg/Corpus-Christi-Oxford.jpg', '../mg/google_place_photo.png', '../mg/rlscs8u6jep21.jpg', '../mg/stanford-university-best-universities-in-the-united-states-2016.jpg');
let previousImage = document.getElementById('preBtn');
let nextImage = document.getElementById('nextBtn');
let imageNumber = 0;
let imageLength = images.length - 1;
//function to count delay show
window.setInterval(function() {
    changeImage(1);
}, 3000); // 3 seconds
//function previous
function previousShowedImage(check) {
    check.addEventLister('click', imageLength);
    document.getElementsByClassName('imageSlides').innerHTML = imageLength;
}
//output
previousShowedImage();