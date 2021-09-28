$(document).ready(function () {
    var carousel_config = {
        // autoplay: true,
        // autoPlay: 5000,
        autoHeight: true,
        pagination: true,
        nav: false,
        dots: true,
    };
    var owl = $("#carousel-product-used");
    owl.owlCarousel({
        ...carousel_config,
        responsive: {
            0: {
                items: 1.3,
            },
            600: {
                items: 2.5,
            },
            1000: {
                items: 4,
            },
        },
    });
    var owl2 = $("#carousel-other-recipe");
    owl2.owlCarousel({
        ...carousel_config,
        responsive: {
            0: {
                items: 1.3,
            },
            600: {
                items: 2.5,
            },
            1000: {
                items: 3,
            },
        },
    });

    closeAuthNoti();
});

function closeAuthNoti() {
    $('.close-noti').click(function () {
        $('section.login-notification').hide();
    })
}