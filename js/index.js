$(document).ready(function () {
    if (window.innerWidth <= 500) {
        setMobileView();
    }
    else {
        setDesktopView();
    }

    $('[data-value="redo"], [data-value="undo"]').attr('disabled', true);

    var calculator = new CalculatorUI();
});

function setDesktopView() {
    var pageHandler = new PageHandler(2);

    $('#page-2').addClass('not-displayed');

    $('#arrow-next').on('click', function () {
        pageHandler.setPage(pageHandler.getCurrentPageNumber() + 1);
    });

    $('#arrow-prev').on('click', function () {
        pageHandler.setPage(pageHandler.getCurrentPageNumber() - 1);
    });

    $('.dot').each(function () {
        $(this).on('click', function (event) {
            pageHandler.setPage(event.target.dataset.page);
        })
    })
}

function setMobileView() {
    $('#carousel').slick({
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('#dots')
    });

    $('#arrow-next, #arrow-prev, #desktop-dots').addClass('not-displayed');
}