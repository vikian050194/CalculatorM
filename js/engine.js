function Engine() {
    var firstArgument = 0;
    var secondArgument = 0;
    var module = 1;
	var state = 0;
	var operator = '';

	this.clean = function () {
		firstArgument = 0;
		secondArgument = 0;
		state = 0;
		operator = '';
	}
	this.setMod = function () {
		module = firstArgument;
		firstArgument = 0;
	}
	this.calculate = function () {
		function mod() {
			return firstArgument % secondArgument;
		}
		function add() {
			return (firstArgument + secondArgument) % module;
		}
		function sub() {
			return (firstArgument - secondArgument) % module;
		}
		function mul() {
			return (firstArgument * secondArgument) % module;
		}
		function div() {
			return (firstArgument / secondArgument) % module;
		}
		function pow() {
			var result = 1;

			while (secondArgument) {
				if (secondArgument & 1) {
					result = result * firstArgument % module;
				}

				firstArgument = firstArgument * firstArgument % module;
				secondArgument /= 2;
			}

			return result;
		}

		var result = 0;

		switch (operator) {
			case '':
				result = firstArgument % module;
				break;
			case 'mod':
				result = mod();
				break;
			case 'add':
				result = add();
				break;
			case 'sub':
				result = sub();
				break;
			case 'mul':
				result = mul();
				break;
			case 'div':
				result = div();
				break;
			case 'pow':
				result = pow();
				break;
			default:

				break;
		}

		state = 0;
		operator = '';
		firstArgument = result;
		secondArgument = 0;
		return result;
	}
	this.append = function (digit) {
		switch (state) {
			case 0:
				firstArgument = firstArgument * 10 + digit;
				break;
			case 1:
				secondArgument = secondArgument * 10 + digit;
				break;
			default:

				break;
		}
	}
	this.setOperator = function (param) {
		operator = param;
		state = 1;
	}
}