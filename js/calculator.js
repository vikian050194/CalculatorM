function Calculator() {
    var engine = new Engine();
    var themer = new Themer();

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
    var setMod = function () {
        var value = get();
        engine.setMod();
        module.html(engine.getMod());        
        clean();
    }

    this.digit = function (value) {
        console.log(value);
    };

    this.operator = function (value) {
        console.log(value);
    };

    this.memory = function (value) {
        console.log(value);
    };

    this.model = function () {
        return engine.model();
    };

    var backward = function () {
        var value = get();
        if (value.length == 1) {
            set('0');
            engine.setValue(0);
        } else if (value.length > 1) {
            var newValue = value.slice(0, -1)
            set(newValue);
            engine.setValue(parseInt(newValue));
        }
    }
    var memoryRecall = function(){
        var value = engine.memoryRecall();
        set(value);
    }
    var init = function () {
        $(document).on('nextTheme', themer.next);
        $(document).on('setMod', setMod);
        $(document).on('clickDigit', clickDigit);
        $(document).on('clickOperator', clickOperator);
        $(document).on('calculate', calculate);
        $(document).on('clean', clean);
        $(document).on('backward', backward);
        $(document).on('memoryClean', engine.memoryClean);
        $(document).on('memoryRecall', memoryRecall);
        $(document).on('addToMemory', engine.addToMemory);
    }

    init();
}