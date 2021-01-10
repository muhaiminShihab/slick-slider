$(document).ready(function () {
    $('.banner-area').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        prevArrow: "<button class='prevdot'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='nextdot'><i class='fas fa-angle-right'></i></button>",
    });
});
