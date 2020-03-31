$(function () {
    $(function () {
        $('.icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
});

//сделать также чтобы менялся текст с больше на меньше
$('.anim').click(function () {
    $('.more').slideToggle('slow');
})

$(document).ready(function () {
    $(".btn-slide").click(function () {
        $(".more").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
});

document.querySelector('#more').onclick = function change() {
    let span = document.querySelector('#more').textContent;
    if (span == "читати більше") {
        document.querySelector('#more').textContent = "читати менше";
    } else {
        document.querySelector('#more').textContent = "читати більше"
    }
}

