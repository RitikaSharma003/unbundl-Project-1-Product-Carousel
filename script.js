const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,


}

//header container
ScrollReveal().reveal(".header__container h1",{...scrollRevealOption,});
ScrollReveal().reveal(".header__container p",{...scrollRevealOption,
delay:500,});

ScrollReveal().reveal(".header__container form",{...scrollRevealOption,
delay:1000,});

ScrollReveal().reveal(".header__container a",{...scrollRevealOption,
delay:1500,});




// carousel
$(document).ready(function(){
    // Initialize Bootstrap Carousel
    $('#chooseCarousel').carousel();

    // Handle slide event to show corresponding content
    $('#chooseCarousel').on('slide.bs.carousel', function (e) {
        $('.choose__card').removeClass('active');
        $('.choose__card').eq(e.to).addClass('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('imageCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds (adjust as needed)
});
