function Calculator(calc) {
    this.calc = $(calc);
    this.calc.find('#output').html('kek');
}

Calculator.prototype.start = function () {
    $(this.calc).find('#1').click(function(){
        var last = $(this.calc).find('#output').innerHTML;
        $(this.calc).find('#output').html(last+'1');
    });
    $(this.calc).find('#output').html('123456789');
}; 