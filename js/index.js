$(document).ready(function () {
    var pageHandler = new PageHandler(4);

    pageHandler.setPage(1);

    setSlideButtons(pageHandler);

    $('[data-value="redo"], [data-value="undo"]').attr('disabled', true);

    var calculator = new CalculatorUI();
});

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