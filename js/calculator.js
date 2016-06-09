function Calculator(c) {
    var calc = $(c);
    var output = calc.find('#output')
    var engine = new Engine();

    var get = function () {
        return output.text();
    }
    var set = function (result) {
        output.html(result);
    }
    var append = function (i) {
        var newValue = get();
        if (newValue === '0') {
            newValue = i;
        } else {
            newValue += i;
        }
        set(newValue);
    }
    var clean = function () {
        set('0');
        engine.currentValue = 0;
    }
    var init = function () {
        $('#c').on('click', clean);

        for (var i = 0; i <= 9; i++) {
            var id = '#' + i;
            $(id).on('click', function (e) {
                var value = e.currentTarget.firstChild.data;
                append(value)
            });
        }
    }

    init();
}

Calculator.prototype.start = function () {

}; 