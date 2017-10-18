function Integer(number) {
    var pattern = /-*\d/;

    this.digits = [];
    this.isNegative = false;

    if (number !== undefined) {
        if (typeof number === "string" && pattern.test(number)) {
            var start = 0;

            if (number[0] === '-') {
                this.isNegative = true;
                start = 1;
            }

            for (var i = number.length - 1; i >= start; i--) {
                this.digits.push(parseInt(number[i]));
            }
        }
        else {
            throw "Format error!";
        }
    }
    // else {
    //     this.digits[0] = 0;
    // }
    this.DeleteNulls = function () {
        while (this.digits[this.digits.length - 1] === 0 && this.digits.length != 1) {
            this.digits.length--;
        }
    }

    this.toString = function () {
        var result = '';

        if (this.isNegative) {
            result = '-';
        }

        result += String(this.digits.reduce(function (previousValue, currentValue) {
            return '' + currentValue + previousValue;
        }));

        return result;
    }
}

Integer.compasion = function (firstArgument, secondArgument) {
    if (firstArgument.digits.length > secondArgument.digits.length) {
        return true;
    }
    if (firstArgument.digits.length < secondArgument.digits.length) {
        return false;
    }
    if (firstArgument.digits.length = secondArgument.digits.length) {
        var i = firstArgument.digits.length - 1;
        while (firstArgument.digits[i] === secondArgument.digits[i] && i != 0) {
            i--;
        }

        if (firstArgument.digits[i] < secondArgument.digits[i]) {
            return false;
        }
        else {
            return true;
        }


    }
}

Integer.add = function (firstArgument, secondArgument) {
    var result = new Integer();

    if (!(firstArgument instanceof Integer) || !(secondArgument instanceof Integer)) {
        throw 'Error format in operation Add!'
    }
    else {
        if (firstArgument.isNegative === false && secondArgument.isNegative === true) {
            secondArgument.isNegative = false;
            result = Integer.sub(firstArgument, secondArgument);
            return result;
        }

        if (firstArgument.isNegative === true && secondArgument.isNegative === false) {
            firstArgument.isNegative = false;
            result = Integer.sub(secondArgument, firstArgument);
            return result;
        }

        if (firstArgument.isNegative === secondArgument.isNegative) {
            result.isNegative = firstArgument.isNegative;
            var i = 0;
            var balance = 0;

            if (firstArgument.digits.length < secondArgument.digits.length) {
                var exchange = firstArgument;
                firstArgument = secondArgument;
                secondArgument = exchange;
            }

            for (; i < firstArgument.digits.length; i++) {
                var secondArgumentDigit = secondArgument.digits[i] || 0;
                var resultDigit = firstArgument.digits[i] + secondArgumentDigit + balance;

                if (resultDigit >= 10) {
                    balance = parseInt(resultDigit / 10);
                    resultDigit %= 10;
                } else {
                    balance = 0;
                }

                result.digits.push(resultDigit);
            }

            if ((firstArgument.digits.length === secondArgument.digits.length) && balance !== 0) {
                result.digits.push(balance);
            }
        }
        else {
            if (firstArgument.isNegative && !secondArgument.isNegative) {
                firstArgument.isNegative = false;
                result = Integer.sub(secondArgument, firstArgument);
            }
            else {
                secondArgument.isNegative = false
                result = Integer.sub(firstArgument, secondArgument);
            }
        }
    }

    return result;
}

Integer.sub = function (firstArgument, secondArgument) {
    var result = new Integer();

    if (!(firstArgument instanceof Integer) || !(secondArgument instanceof Integer)) {
        throw 'Error format in operation Sub!'
    }
    else {

        if (firstArgument.isNegative === false && secondArgument.isNegative === true) {
            secondArgument.isNegative = false;
            result = Integer.add(firstArgument, secondArgument);
            return result;
        }

        if (firstArgument.isNegative === true && secondArgument.isNegative === false) {
            secondArgument.isNegative = true;
            result = Integer.add(firstArgument, secondArgument);
            return result;
        }

        if (firstArgument.isNegative === false && secondArgument.isNegative === false) {
            result.isNegative = false;

            if (!Integer.compasion(firstArgument, secondArgument)) {
                var exchange = firstArgument;
                firstArgument = secondArgument;
                secondArgument = exchange
                result.isNegative = true;

            }

        }

        for (var i = 0; i < firstArgument.digits.length; i++) {
            var secondArgumentDigit = secondArgument.digits[i] || 0;

            if (firstArgument.digits[i] >= secondArgumentDigit) {
                var resultDigit = firstArgument.digits[i] - secondArgumentDigit;
                result.digits.push(resultDigit);
            }
            else {
                if (i < firstArgument.digits.length - 1) {
                    firstArgument.digits[i] += 10;
                    firstArgument.digits[i + 1] -= 1;
                }
                if (i + 1 === firstArgument.digits.length - 1 && firstArgument.digits[i + 1] === 0) {
                    firstArgument.digits.length -= 1;
                }

                resultDigit = firstArgument.digits[i] - secondArgumentDigit;
                result.digits.push(resultDigit);

            }
        }
        result.DeleteNulls();
    }

    if (firstArgument.isNegative === true && secondArgument.isNegative === true) {
        secondArgument.isNegative = false;
        result = Integer.add(firstArgument, secondArgument);
        return result;
    }
    return result;
}

Integer.pow = function (firstArgument, secondArgument) {
    var result = new Integer('1');

    if (!(firstArgument instanceof Integer) || !(secondArgument instanceof Integer)) {
        throw 'Error format in operation power!'
    }
    else {

    }
    return result;

}

Integer.mul = function (firstArgument, secondArgument) {
    var result = new Integer();

    if (!(firstArgument instanceof Integer) || !(secondArgument instanceof Integer)) {
        throw 'Error format in operation multiplication!'
    }
    else {
        for (var i = 0; i < secondArgument.digits.length; i++) {
            var balance = 0;
            var additionalNumber = new Integer();

            for (var j = 0; j < firstArgument.digits.length; j++) {
                additionalNumber.digits[j] = secondArgument.digits[i] * firstArgument.digits[j] + balance;

                if (additionalNumber.digits[j] >= 10) {
                    balance = parseInt(additionalNumber.digits[j] / 10);
                    additionalNumber.digits[j] %= 10;
                } else {
                    balance = 0;
                }

            }

            if (balance != 0) {
                additionalNumber.digits[additionalNumber.digits.length] = balance;
            }


            for (var k = 0; k < i; k++) {
                for (var j = additionalNumber.digits.length - 1; j >= 0; j--) {
                    additionalNumber.digits[j + 1] = additionalNumber.digits[j];
                }
                additionalNumber.digits[0] = 0;
            }

            result = Integer.add(result, additionalNumber);
        }

        if (firstArgument.isNegative === secondArgument.isNegative) {
            result.isNegative = false;
        }
        else {
            result.isNegative = true;
        }
        result.DeleteNulls();
        return result;
    }
}

Integer.div = function (firstArgument, secondArgument) {
    var result = new Integer();

    if (!(firstArgument instanceof Integer) || !(secondArgument instanceof Integer)) {
        throw 'Error format in operation div!'
    }
    else {
        if(firstArgument.isNegative === secondArgument.isNegative){
            result.isNegative = false;
        }
        else{
            result.isNegative = true;
        }
        firstArgument.isNegative = false;
        secondArgument.isNegative = false;

        if (Integer.compasion(firstArgument, secondArgument)) {
            var count;
            firstArgumentDivDigits = new Integer();
            var i = firstArgument.digits.length - 1;
            while (i >= 0 && firstArgumentDivDigits.digits.length != secondArgument.digits.length) {
                firstArgumentDivDigits.digits.push(firstArgument.digits[i]);
                i--;
            }
            while(firstArgumentDivDigits.digits.length!=firstArgument.digits.length){
            if (!Integer.compasion(firstArgumentDivDigits, secondArgument)) {
                firstArgumentDivDigits.digits[i] = firstArgument.digits[i];
            }

            while(!Integer.compasion(firstArgumentDivDigits, secondArgument)){
                firstArgumentDivDigits = Integer.sub(firstArgumentDivDigits, secondArgument);
                count++;
            }
            result.digits.push(count);
            count = 0;
        }
        }
        return result;
    }
}

