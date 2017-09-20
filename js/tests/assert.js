function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    compare(expected, actual);
};

function throwError(incorrect, expected, actual) {
    throw {
        incorrect: incorrect,
        expected: expected,
        actual: actual
    };
}

function compare(expected, actual) {
    if (typeof (actual) !== typeof (expected)) {
        throwError('type', typeof (expected), typeof (actual));
    }

    if (actual === null && expected !== null) {
        throwError('actual', expected[p], actual[p]);
    }

    if (actual === null && expected === null) {
       return;
    }

    switch (typeof (actual)) {
        case 'object':
            if (Array.isArray(actual)) {
                if (actual.length !== expected.length) {
                    throwError('array length', expected.length, actual.length);
                }

                actual.forEach(function (element, index) {
                    compare(expected[index], element);
                }, this);
            } else {
                if (Object.keys(actual).length !== Object.keys(expected).length) {
                    throwError('objects keys count', Object.keys(expected).length, Object.keys(actual).length);
                }

                for (var p in actual) {
                    if (actual.hasOwnProperty(p) !== expected.hasOwnProperty(p)) {
                        throwError('object key', p, undefined);
                    }

                    compare(expected[p], actual[p]);
                }
            }
            break;
        case 'function':
            if (typeof (expected) === 'undefined' || (actual.toString() !== expected.toString())) {
                throwError('function', expected, actual);
            }
            break;
        default:
            if (actual !== expected) {
                throwError('value', expected, actual);
            }
    }
}