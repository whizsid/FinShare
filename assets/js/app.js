$(document).ready(function() {
    $(".sec-5-slider").slick({
        // normal options...
        infinite: true,
        mobileFirst: true,
        // the magic
        responsive: [{
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

        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.square').click(function() {
        var show = $(this).data('show');

        $('.square').removeClass('active');
        $(this).addClass('active')
        $('.sec-6-desc').removeClass('active');
        $('.sec-6-desc:nth-child(' + show + ')').addClass('active');
    })
});