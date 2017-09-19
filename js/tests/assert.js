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
        return throwError('actual', expected[p], actual[p]);
    }
				
	if (actual === null && expected === null) {
        return;
    }

    switch (typeof (actual)) {
        case 'array':
            if (actual.length !== expected.length) {
                throwError('array length', expected.length, actual.length);
            }

            actual.forEach(function (element, index) {
                if (element !== expected[index]) {
                    throwError('array element', expected[index], element);
                }
            }, this);

        case 'object':
            if (Object.keys(actual).length !== Object.keys(expected).length) {
                throwError('objects keys count', Object.keys(expected).length, Object.keys(actual).length);
            }

            for (var p in actual) {
                if (actual.hasOwnProperty(p) !== expected.hasOwnProperty(p)) {
                    throwError('object key', p, undefined);
                }
				
				compare(expected[p], actual[p]);	
            }
            break;
        case 'function':
            if (typeof (expected) === 'undefined' || (actual.toString() !== expected.toString())) {//сколько тут необходимо = ???
                throwError('function', expected, actual);
            }
            break;
        default:
            if (actual !== expected) {
                throwError('value', expected, actual);
            }
    }
}