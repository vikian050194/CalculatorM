function Integer(number) {
    var pattern = /-*\d/;
    this.digits = [];
    this.sign = '+';//лучше использовать bool вместо string
    if (number !== undefined) {
        if (typeof number === "string" && pattern.test(number)) {
            if (number[0] === '-') {
                this.sign = '-';
                for (var i = 1; i < number.length; i++) {
                    this.digits.unshift(parseInt(number[i]));
                }
            }
            else {
                for (var i = 0; i < number.length; i++) {//если использовать пуш, то код тем более не придётся дублировать
                    this.digits.unshift(parseInt(number[i]));
                }
            }

        }
        else {
            throw "Format error!";
        }
    }
    else {
        this.digits[0] = 0;
    }

    this.add = function (termFirst, termSecond) {//странное имя "getAdd", лучше возвращать новый объект

        var termResult = new Integer();
        if ((typeof termFirst !== 'object') || (typeof termSecond !== 'object')) {//этой проверки скорее всего недостаточно
            throw 'Error format in operation Add!'
        }
        else {
            if (termFirst.digits.length < termSecond.digits.length) {
                var exchange = termFirst;
                termFirst = termSecond;
                termSecond = exchange;
            }

            if (termFirst.sign === termSecond.sign) {
                termResult.sign = termFirst.sign;
                var i = 0;
                balance = 0;

                while (i < termSecond.digits.length) {
                    termResult.digits[i] = termFirst.digits[i] + termSecond.digits[i] + balance;
                    balance = 0;

                    if (termResult.digits[i] >= 10) {
                        balance = parseInt(termResult.digits[i] / 10);
                        termResult.digits[i] %= 10;
                    }
                    i++;
                }

                if (termFirst.digits.length === termSecond.digits.length) {
                    termResult.digits[i] = balance;
                }

                else {
                    while (i < termFirst.digits.length) {
                        termResult.digits[i] = termFirst.digits[i] + balance;

                        if (termResult.digits[i] >= 10) {
                            balance = parseInt(termResult.digits[i] / 10);
                            termResult.digits[i] %= 10;
                        }
                        balance = 0;
                        i++;
                    }
                }
            }
        }
        return termResult;
    }

    this.sub = function(termFirst, termSecond){
        
        var termResult = new Integer();
        if ((typeof termFirst !== 'object') || (typeof termSecond !== 'object')) {//этой проверки скорее всего недостаточно
            throw 'Error format in operation Sub!'
        }
        else {
            if (termFirst.digits.length < termSecond.digits.length) {
                var exchange = termFirst;
                termFirst = termSecond;
                termSecond = exchange;
            }

            if (termFirst.digits.length === termSecond.digits.length){
                var i = termFirst.digits.length - 1;
                while(termFirst.digits[i] === termSecond.digits[i]){
                    i--;
                }
                 if(termFirst.digits[i] < termSecond.digits[i]){
                    var exchange = termFirst;
                    termFirst = termSecond;
                    termSecond = exchange
                }
            }
            var i = 0;
            while(i <  termSecond.digits.length){
                if(termFirst.digits[i]>=termSecond.digits[i]){
                    termResult.digits[i] = termFirst.digits[i] - termSecond.digits[i];
                    i++;
                }
                else{
                    var balance = 1;
                    while(termFirst.digits[i+balance] === 0 && termFirst.digits[i+balance+1] !==undefined){
                        termFirst.digits[i+balance+1] -= 1;
                        termFirst.digits[i+balance]+=10;
                        balance++;
                    }
                    termFirst.digits[i+1] -= 1;
                    termFirst.digits[i]+=10;
                    termResult.digits[i] = termFirst.digits[i] - termSecond.digits[i];
                    i++; 
                
                }
            }
            while(i < termFirst.digits.length){
                if(termFirst.digits[i]!==0 && termFirst.digits[i+1]!== undefined)
                termResult.digits[i] = termFirst.digits[i];
                i++;
            }


        }
        return termResult;
    }

    this.toString = function () {
        var result = '';
        if (this.sign === '-') {
            result += '-';
        }
        result += String(this.digits.reduce(function (previousValue, currentValue) {
            return '' + currentValue + previousValue;
        }));

        return result;
    }
}
