$(document).ready(function () {
    var pageHandler = new PageHandler(4);

    pageHandler.setPage(1);

    setSlideButtons(pageHandler);

    setPositiveSwitch();

    // if (window.innerWidth <= 500) {
    //     setMobileView();
    // }
    // else {
        setDesktopView(pageHandler);
    // }

    $('[data-value="redo"], [data-value="undo"]').attr('disabled', true);

    var calculator = new CalculatorUI();
});

function setDesktopView(pageHandler) {
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

function setSlideButtons(pageHandler) {
    $('#F1').on('click', function () {
        pageHandler.setPage(1);
    });

    $('#F2').on('click', function () {
        pageHandler.setPage(2);
    });

    $('#F3').on('click', function () {
        pageHandler.setPage(3);
    });

    $('#menu').on('click', function () {
        pageHandler.setPage(4);
    });
}

function setPositiveSwitch() {
    var positiveCookie = Cookies.get('positive');
    if (positiveCookie === undefined) {
        Cookies.set('positive', false, {expires: 31});
        return;
    }

    var positiveSwitch = $("#positive")[0];
    if (positiveCookie === "true") {
        positiveSwitch.checked = "true";
    }
}