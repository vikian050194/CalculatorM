function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    return compare(expected, actual);
};

function getResult(incorrect, expected, actual) {
    if (incorrect === undefined) {
        return { areEqual: true };
    } else {
        return {
            areEqual: false,
            incorrect: incorrect,
            expected: expected,
            actual: actual
        };
    }

}

function compare(expected, actual) {
    if (typeof (actual) !== typeof (expected)) {
        return getResult('type', typeof (expected), typeof (actual));
    }

    switch (typeof (actual)) {
        case 'array':
            if (actual.length !== expected.length) {
                return getResult('array length', expected.length, actual.length);
            }

            actual.forEach(function (element, index) {
                if (element !== expected[index]) {
                    return getResult('array element', expected[index], element);
                }
            }, this);

        case 'object':
            if (Object.keys(actual).length !== Object.keys(expected).length) {
                return getResult('objects keys count', Object.keys(expected).length, Object.keys(actual).length);
            }

            for (var p in actual) {
                if (actual.hasOwnProperty(p) !== expected.hasOwnProperty(p)) {
                    return getResult('object key', p, undefined);
                }

                if (actual[p] !== expected[p]) {
                    return getResult('value of \'' + p + '\'', expected[p], actual[p]);
                }

                // if (actual[p] === null && expected[p] !== null) {
                //     return getResult('value', expected[p], actual[p]);
                // }
            }
            break;
        case 'function':
            if (typeof (expected) === 'undefined' || (actual.toString() !== expected.toString())) {//сколько тут необходимо = ???
                return getResult('function', expected, actual);
            }
            break;
        default:
            if (actual !== expected) {
                return getResult('value', expected, actual);
            }
    }

    return getResult();
}