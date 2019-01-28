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

    push(value) {
        if (this.isZero) {
            if (value !== 0) {
                this.digits[0] = value;
            }
        } else {
            this.digits.unshift(value);
        }
    }

    pop() {
        if (this.digits.length === 1) {
            this.digits[0] = 0;
        } else {
            this.digits.shift();
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
                    firstArgument.digits[i] += 10;
                    firstArgument.digits[i + 1] -= 1;

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

    static div(a, b) {
        return divide(a, b).quotient;
    }

    static mod(a, m) {
        if (Integer.areEqual(a, m)) {
            return new Integer();
        } else {
            return divide(a, m).remainer;
        }
    }
    static inverse(a, b) {
        if (a.isZero || b.isZero) {
            return new Integer("-1");
        }
        if (!Integer.areEqual(gcd(a, b).d, new Integer("1"))) {
            return new Integer("-1");
        } else {
            let inverseElement = gcd(a, b).coeffA;
            if (inverseElement.isNegative) {
                inverseElement = Integer.add(inverseElement, b);
            }
            return inverseElement;
        }
    }
}

function gcd(a, b) {
    let n = new Integer(),
        m = new Integer(),
        x1 = new Integer("0"),
        x2 = new Integer("1"),
        y1 = new Integer("1"),
        y2 = new Integer("0"),
        x = new Integer(),
        y = new Integer(),
        q = new Integer(),
        r = new Integer(),
        d = new Integer();

    if (Integer.compare(a, b) === 1) {
        n = a.clone();
        m = b.clone();
    } else {
        n = b.clone();
        m = a.clone();
    }
    while (Integer.compare(m, new Integer("0")) === 1) {
        q = Integer.div(n, m);
        r = Integer.sub(n, Integer.mul(q, m));
        x = Integer.sub(x2, Integer.mul(q, x1));
        y = Integer.sub(y2, Integer.mul(q, y1));
        n = m.clone();
        m = r.clone();
        x2 = x1.clone();
        x1 = x.clone();
        y2 = y1.clone();
        y1 = y.clone();
    }
    d = n.clone();
    x = x2.clone();
    y = y2.clone();
    if (Integer.compare(a, b) === 1) {
        return {
            d,
            coeffA:x,
            coeffB:y
        };
    }
    else{
        return {
            d,
            coeffA:y,
            coeffB:x
        };
    }
}

function divide(a, b) {
    let quotient = new Integer(),
        remainer = a.clone(),
        comparer = b.clone();

    comparer.isNegative = false;
    const divideBySubtraction = function () {
        while (Integer.compare(remainer, comparer) !== -1 || remainer.isNegative) {
            remainer = a.isNegative ^ b.isNegative ? Integer.add(remainer, b) : Integer.sub(remainer, b);
            quotient = Integer.add(quotient, new Integer("1"));
        }

        quotient.isNegative = !!(a.isNegative ^ b.isNegative);
    };
    switch (Integer.compare(a, b)) {
        case 0:
            quotient = new Integer("1");
            remainer = new Integer();
            break;
        case -1:
            if (!a.isNegative && !b.isNegative) {
                break;
            }

            divideBySubtraction();
            break;
        case 1:
            divideBySubtraction();
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
export default Integer;