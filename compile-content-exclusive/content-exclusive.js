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

    onChefSelect();
    closeAuthNoti();

    chefDetail("Chef Naem");
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

function onChefSelect() {
    $(".chef_select").each(function () {
        $(this).click(function () {
            removeActiveChef();
            $(this).addClass("active");
            const chef = chef_detail.find(x => x.name == $(this).attr("name"));

            $("#recipe-detail").html(chef_detail_template(chef));
        });
    });
}

function removeActiveChef() {
    $(".chef_select").each(function () {
        $(this).removeClass("active");
    })
}

function chefDetail (name) {
    const chef = chef_detail.find(x => x.name == name);

    $("#recipe-detail").html(chef_detail_template(chef));
}

function chef_detail_template(chef) {
    return `
        <section class="chef-info text-center" style="padding-top: 0;">
            <div class="container">
                <div class="chef-bio">
                    <div class="row cust-grid justify-around">
                        <div class="col-xs-12 col-md-5 cust-grid-col">
                            <img src="${chef.img}" alt="Chef Bio" width="100%" />
                        </div>
                        <div class="col-xs-12 col-md-6 cust-grid-col info">
                            <h1>${chef.name}</h1>
                            <p class="chef-nation"><b>${chef.nation}</b></p>
                            <p>${chef.summary}</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-offset-2 col-xs-12 col-md-8">
                        <div class="chef-quote">
                            <p class="quote-copy">${chef.quote}</p>
                            <p class="quote-from">- ${chef.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="chef-recipe">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-xs-12 col-md-8">
                        <div class="row">
                            <div class="col-xs-12">
                                <p class="title">${chef.name}'s twist</p>
                            </div>
                        </div>
                    </div>
                </div>
                ${chef.recipe_list.map(function (recipe, index) {
                    return `<div class="row">
                        <div class="col-md-offset-2 col-xs-12 col-md-8">
                            <div class="row cust-grid">
                                <div class="col-xs-12 col-md-6 cust-grid-col cust-grid-col">
                                    <img src="${recipe.img}" alt="${recipe.name}"
                                        width="100%" />
                                </div>
                                <div class="col-xs-12 col-md-6 cust-grid-col info">
                                    <h2>${recipe.name}</h2>
                                    <p class="desc">${recipe.desc}</p>
                                    <a class="button" href=${recipe.url}>Get recipe</a>
                                </div>
                            </div>
                        </div>
                    </div> ${chef.recipe_list.length - 1 == index ? "" : `<hr />`}
                    `
                }).join(' ')}
            </div>
        </section>`
}

chef_detail = [
    {
        img: "./assets/img/landing/chef-bio.png",
        name: "Chef Naem",
        nation: "Malaysian Chef",
        summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        recipe_list: [
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Chef Naem's favourite travel recipe",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Chef Naem's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
        ],
    },
    {
        img: "/assets/img/landing/chef-bio.png",
        name: "Dapoq Pdot",
        nation: "Malaysian Chef",
        summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        recipe_list: [
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Dapoq Pdot's favourite travel recipe",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Dapoq Pdot's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
        ],
    },
    {
        img: "/assets/img/landing/chef-bio.png",
        name: "Danny Ah Boy",
        nation: "Thailand Chef",
        summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        recipe_list: [
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Danny Ah Boy's favourite travel recipe",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            }
        ],
    },
    {
        img: "/assets/img/landing/chef-bio.png",
        name: "Nur Hamira",
        nation: "Indonesian Chef",
        summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        recipe_list: [
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Nur Hamira's favourite travel recipe",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Nur Hamira's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Nur Hamira's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
        ],
    },
    {
        img: "/assets/img/landing/chef-bio.png",
        name: "Dear Nestlé",
        nation: "International Chef",
        summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        recipe_list: [
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Dear Nestlé's favourite travel recipe",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Dear Nestlé's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Dear Nestlé's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
            {
                img: "./assets/img/landing/recipe-rendang.jpg",
                name: "Dear Nestlé's favourite travel recipe 2",
                desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
                url: ""
            },
        ],
    }
]