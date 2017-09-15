function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    compare(expected, actual);
};

function getErrorMessage(expected, actual) {
    return 'expected: "' + expected + '" actual: "' + actual + '"';
}

function compare(expected, actual) {
    if (typeof (actual) !== typeof (expected)) {
        throw 'incorrect type: ' + getErrorMessage(typeof(expected), typeof(actual));
    }

    switch (typeof (actual)) {
        case 'array':
            if (actual.length !== expected.length) {
                throw "arrays' lengths don't match";
            }
            actual.forEach(function (element, index) {
                if (element !== expected[index]) {
                    throw "arrays don't match";
                }
            }, this);

        case 'object':
            if (Object.keys(actual).length !== Object.keys(expected).length) {
                throw "objects keys don't match";
            }
            for (var p in actual) {
                if (actual.hasOwnProperty(p) !== expected.hasOwnProperty(p)) {
                    return false;
                }

                if (actual[p] === null && expected[p] !== null) {
                    throw 'incorrect value: ' + p;
                }
            }
            break;
        case 'function':
            if (typeof (expected) == 'undefined' || (actual.toString() != expected.toString())) {
                throw 'incorrect function';
            }
            break;
        default:
            if (actual !== expected) {
                throw 'incorrect value: ' + 'expected: "' + expected + '" actual: "' + actual + '"';
            }
    }
}