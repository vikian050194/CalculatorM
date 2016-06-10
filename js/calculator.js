function Calculator(c) {
    var calc = $(c);
    var output = calc.find('#output')
    var module = calc.find('#module')
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
		engine.append(parseInt(i));
    }
    var clean = function () {
        set('0');
        engine.clean();
    }
	var setMod = function(){
		var value = get();
		module.html(value);
		engine.setMod();
		clean();
	}
	var clickDigit = function(e) {
		var value = e.currentTarget.firstChild.data;
		append(value)
    }
	var clickOperator = function(e){
		var value = e.currentTarget.firstChild.data;
		engine.setOperator(value)
		set('0');
	}
	var calculate = function()
	{
		var result = engine.calculate();
		set(result);
	}
    var init = function () {
		calc.find('#setMod').on('click', setMod);
		calc.find('#calculate').on('click', calculate);
        calc.find('#c').on('click', clean);
        for (var i = 0; i <= 9; i++) {
            var id = '#' + i;
            calc.find(id).on('click', clickDigit);
        }
		var operators = ['add','mul','sub','div','mod','pow'];
		for(var i = 0;i<=operators.length;i++){
			var id = '#' + operators[i];
            calc.find(id).on('click', clickOperator);
		}		
    }	
	
    init();
}

Calculator.prototype.start = function () {

}; 