var PageHandler = require('./ui/page-handler'),
    CalculatorUI = require('./engine/calculator.ui');

$(document).ready(function () {
    var pageHandler = new PageHandler(4);

    pageHandler.setPage(1);

    setSlideButtons(pageHandler);

    setPositiveSwitch();

    setModuleSwitch();

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

function setPositiveSwitch() {
    var positiveCookie = Cookies.get('positive');
    if (positiveCookie === undefined) {
        Cookies.set('positive', false, { expires: 31 });
        return;
    }

    var positiveSwitch = $("#positive")[0];
    if (positiveCookie === "true") {
        positiveSwitch.checked = true;
    }
}

function setModuleSwitch() {
    var moduleCookie = Cookies.get('module');
    if (moduleCookie === undefined) {
        Cookies.set('positive', false, { expires: 31 });
        return;
    }

    var moduleSwitch = $("#module")[0];
    if (moduleCookie === "true") {
        moduleSwitch.checked = true;
    }
}