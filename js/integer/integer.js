class Integer {
    constructor() {
        if (arguments.length === 0) {
            this.digits = [0];
            this.isNegative = false;
        }

        if (arguments.length === 1) {
            const pattern = /-*\d/;
            let number = arguments[0];

            this.digits = [];
            this.isNegative = false;

            if (typeof number === "string" && pattern.test(number)) {
                var start = 0;

                if (number[0] === "-") {
                    this.isNegative = true;
                    start = 1;
                }

                for (var i = number.length - 1; i >= start; i--) {
                    this.digits.push(parseInt(number[i]));
                }
            } else {
                throw new Error("Format error!");
            }
        }

        if (arguments.length === 2) {
            this.digits = arguments[0];
            this.isNegative = arguments[1];
        }
    }

    get isZero() {
        return this.digits.length === 1 && this.digits[0] === 0;
    }

    clone() {
        return new Integer([...this.digits], this.isNegative);
    }

    toString() {
        let result = "";

        if (this.isNegative) {
            result = "-";
        }

        result += new String(this.digits.reduce(function (previousValue, currentValue) {
            return "" + currentValue + previousValue;
        }));

        return result;
    }

    changeSign() {
        if (!this.isZero) {
            this.isNegative = !this.isNegative;
        } else {
            this.isNegative = false;
        }
    }

    static compare(firstArgument, secondArgument) {
        if (!firstArgument.isNegative && secondArgument.isNegative) {
            return 1;
        }

        if (firstArgument.isNegative && !secondArgument.isNegative) {
            return -1;
        }

        if (firstArgument.digits.length > secondArgument.digits.length) {
            return firstArgument.isNegative ? -1 : 1;
        }

        if (firstArgument.digits.length < secondArgument.digits.length) {
            return firstArgument.isNegative ? 1 : -1;
        }

        var i = firstArgument.digits.length - 1;

        while (firstArgument.digits[i] === secondArgument.digits[i] && i != 0) {
            i--;
        }

        if (firstArgument.digits[i] < secondArgument.digits[i]) {
            return firstArgument.isNegative ? 1 : -1;
        }

        if (firstArgument.digits[i] > secondArgument.digits[i]) {
            return firstArgument.isNegative ? -1 : 1;
        }

        return 0;
    }

    static areEqual(firstArgument, secondArgument) {
        return Integer.compare(firstArgument, secondArgument) === 0;
    }

    static add(a, b) {
        let resultDigits = [],
            isNegativeResult = false,
            firstArgument = a.clone(),
            secondArgument = b.clone();

        if (firstArgument.isNegative === false && secondArgument.isNegative === true) {
            secondArgument.isNegative = false;
            return Integer.sub(firstArgument, secondArgument);
        }

        if (firstArgument.isNegative === true && secondArgument.isNegative === false) {
            firstArgument.isNegative = false;
            return Integer.sub(secondArgument, firstArgument);
        }

        isNegativeResult = firstArgument.isNegative;
        let balance = 0;

        if (firstArgument.digits.length < secondArgument.digits.length) {
            let temp = firstArgument;
            firstArgument = secondArgument;
            secondArgument = temp;
        }

        for (let index = 0; index < firstArgument.digits.length; index++) {
            const secondArgumentDigit = secondArgument.digits[index] || 0;
            let resultDigit = firstArgument.digits[index] + secondArgumentDigit + balance;

            if (resultDigit >= 10) {
                balance = parseInt(resultDigit / 10);
                resultDigit %= 10;
            } else {
                balance = 0;
            }

            resultDigits.push(resultDigit);
        }

        if (balance !== 0) {
            resultDigits.push(balance);
        }

        return new Integer(resultDigits, isNegativeResult);
    }

    static sub(a, b) {
        let resultDigits = [],
            isNegativeResult = false,
            firstArgument = a.clone(),
            secondArgument = b.clone();

        if (firstArgument.isNegative === false && secondArgument.isNegative === true) {
            secondArgument.isNegative = false;
            return Integer.add(firstArgument, secondArgument);
        }

        if (firstArgument.isNegative === true && secondArgument.isNegative === false) {
            secondArgument.isNegative = true;
            return Integer.add(firstArgument, secondArgument);
        }

        if (firstArgument.isNegative === false && secondArgument.isNegative === false) {
            isNegativeResult = false;

            if (Integer.compare(firstArgument, secondArgument) === -1) {
                var exchange = firstArgument;
                firstArgument = secondArgument;
                secondArgument = exchange;
                isNegativeResult = true;
            }

            for (var i = 0; i < firstArgument.digits.length; i++) {
                var secondArgumentDigit = secondArgument.digits[i] || 0;

                if (firstArgument.digits[i] >= secondArgumentDigit) {
                    var resultDigit = firstArgument.digits[i] - secondArgumentDigit;
                    resultDigits.push(resultDigit);
                } else {
                    if (i < firstArgument.digits.length - 1) {
                        firstArgument.digits[i] += 10;
                        firstArgument.digits[i + 1] -= 1;
                    }
                    if (i + 1 === firstArgument.digits.length - 1 && firstArgument.digits[i + 1] === 0) {
                        firstArgument.digits.length -= 1;
                    }

                    resultDigit = firstArgument.digits[i] - secondArgumentDigit;
                    resultDigits.push(resultDigit);

                }
            }

            while (resultDigits[resultDigits.length - 1] === 0 && resultDigits.length != 1) {
                resultDigits.length--;
            }
        }

        if (firstArgument.isNegative === true && secondArgument.isNegative === true) {
            secondArgument.isNegative = false;
            return Integer.add(firstArgument, secondArgument);
        }

        return new Integer(resultDigits, isNegativeResult);
    }

    static mul(a, b) {
        let result = new Integer(),
            firstArgument = a.clone(),
            secondArgument = b.clone();

        for (let i = 0; i < secondArgument.digits.length; i++) {
            let balance = 0;
            const additionalNumber = new Integer();

            for (let j = 0; j < firstArgument.digits.length; j++) {
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

            for (let k = 0; k < i; k++) {
                for (let j = additionalNumber.digits.length - 1; j >= 0; j--) {
                    additionalNumber.digits[j + 1] = additionalNumber.digits[j];
                }

                additionalNumber.digits[0] = 0;
            }

            result = Integer.add(result, additionalNumber);
        }

        if (firstArgument.isNegative === secondArgument.isNegative) {
            result.isNegative = false;
        } else {
            result.isNegative = true;
        }

        while (result.digits[result.digits.length - 1] === 0 && result.digits.length !== 1) {
            result.digits.length--;
        }

        return result;
    }

    static pow(a, p) {
        let result = new Integer("1"),
            firstArgument = a.clone(),
            power = p.clone();

        if (power.isZero) {
            return result;
        }

        if (Integer.areEqual(power, new Integer("1"))) {
            return firstArgument;
        }

        const coefficients = getCoefficients(power);

        for (var i = coefficients.length - 1; i >= 0; i--) {
            if (coefficients[i] === 1) {
                result = Integer.mul(result, firstArgument);
            }

            if (i != 0) {
                result = Integer.mul(result, result);
            }
        }

        return result;
    }
}

function divide(a, b) {
    let quotient = new Integer(),
        remainer = a.clone(),
        comparer = b.clone();

    comparer.isNegative = false;

    switch (Integer.compare(a, b)) {
        case 0:
            quotient = new Integer("1");
            remainer = new Integer();
            break;
        case -1:
            if (!a.isNegative && !b.isNegative) {
                break;
            }
        case 1:
            while (Integer.compare(remainer, comparer) !== -1 || remainer.isNegative) {
                remainer = !!(a.isNegative ^ b.isNegative) ? Integer.add(remainer, b) : Integer.sub(remainer, b);
                quotient = Integer.add(quotient, new Integer("1"));
            }

            quotient.isNegative = !!(a.isNegative ^ b.isNegative);
            break;
    }

    return {
        remainer,
        quotient
    };
}

function getCoefficients(power) {
    var coefficients = [];
    var two = new Integer("2");

    for (var i = 0; power.digits[0] > 1 || power.digits.length > 1; i++) {
        coefficients[i] = Integer.mod(power, two).digits[0];
        power = Integer.div(power, two);

        if (power.digits[0] === 1 && power.digits.length === 1) {
            coefficients[i + 1] = 1;
        }
    }
    return coefficients;
}

Integer.;

Integer.mod = function (a, m) {
    if (Integer.areEqual(a, m)) {
        return new Integer();
    } else {
        return divide(a, m).remainer;
    }
};

export default Integer;