$(document).ready(function () {
    var carousel_config = {
        loop: false,
        autoHeight: true,
        pagination: true,
        nav: false,
        dots: true,
        autoPlay: false
    };
    var owl_chef = $("#carousel-chef");
    owl_chef.owlCarousel({
        ...carousel_config,
        dots: false,
        responsive: {
            0: {
                items: 2,
                stagePadding: 20,
            },
            600: {
                items: 4,
                stagePadding: 30,
            },
            1000: {
                items: 6,
                stagePadding: 10,
            },
        },
    });
    var owl = $("#carousel-product-used");
    owl.owlCarousel({
        ...carousel_config,
        responsive: {
            0: {
                items: 1,
                stagePadding: 90,
            },
            600: {
                items: 3,
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
                items: 1,
                stagePadding: 50,
            },
            600: {
                items: 2,
                stagePadding: 30,
            },
            1000: {
                items: 3,
            },
        },
    });

    $("#carousel-chef").css("display", "block");

    closeAuthNoti();
});

function closeAuthNoti() {
    $('.close-noti').click(function () {
        $('section.login-notification').hide();
    })
}

function playVideo() {
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function () {
        $("#playButton").fadeOut();
    });

    player.on('pause', function () {
        $("#playButton").fadeIn();
    });

    player.getVideoTitle().then(function (title) {
        console.log('title:', title);
    });
}