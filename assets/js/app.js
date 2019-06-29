var menuOpen = false;

$(document).ready(function() {
    $(".sec-5-slider").slick({
        // normal options...
        infinite: true,
        mobileFirst: true,
        // the magic
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        autoplay: true,
        arrows: true,
        dots: false,

        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.square').click(function() {
        var show = $(this).data('show');

        $('.square').removeClass('active');
        $(this).addClass('active')
        $('.sec-6-desc').removeClass('active');
        $('.sec-6-desc:nth-child(' + show + ')').addClass('active');
    })

    $('.navbar-toggler').click(function(){
        if(menuOpen){
            $('.navbar-expand').addClass('menu-expanded');
            menuOpen = false;
        } else {
            $('.navbar-expand').removeClass('menu-expanded');
            menuOpen = true;
        }
    })
});