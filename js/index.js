$(document).ready(function () {
    var pageHandler = new PageHandler();
    if(window.innerWidth <= 500) {
        $('#desktop-dots').addClass('not-displayed');

        $('#carousel').slick({
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            appendDots: $('#dots')
        });

        $('#arrow-next').addClass('not-displayed');
        $('#arrow-prev').addClass('not-displayed');
    }
    else {
        $('#page-2').addClass('not-displayed');

        $('#arrow-next').on('click', function() {
            pageHandler.setPage(pageHandler.getCurrentPageNumber() + 1);
        });

        $('#arrow-prev').on('click', function() {
            pageHandler.setPage(pageHandler.getCurrentPageNumber() - 1);
        });

        $('.dot').each(function () {
            $(this).on('click', function (event) {
                pageHandler.setPage(event.target.dataset.page);
            })
        })
    }

    var calculator = new CalculatorUI();
});