(function () {
    $(window).resize(function () {
        var width = $(document).width();
        var height = $(document).height();
        if (width => 500) {
            $(document).find('table').width(320);
            $(document).find('table').width(568);
        }
    });

    $(document).ready(function () {
        var calc = $('.calculator');
        var calculator = new Calculator(calc);
    });
} ());