$(document).ready(function () {
    $('.slider-products').slick({
        slidesToShow: 3,  
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false, 
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider-reviews').slick({
        slidesToShow: 3,  
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false, 
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    });
});
