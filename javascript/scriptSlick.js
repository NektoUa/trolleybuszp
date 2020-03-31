$(document).ready(function () {
    // Бургер-меню
    $('.header_burger').click(function () {
        $('.header_burger,.header_menu').toggleClass('active');
        $('main').toggleClass('lock');
    })

    $(".header_menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    // Слайдер
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        console.log(currentSlide);
    })

    // Стрілка нагору
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#topArrow').fadeIn();
            } else {
                $('#topArrow').fadeOut();
            }
        });
        $('#topArrow').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 700);
        });
    });

});

