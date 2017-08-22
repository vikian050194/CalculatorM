function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    compare(expected, actual);
};

function compare(expected, actual) {
    for (var p in actual) {
        if (actual.hasOwnProperty(p) !== expected.hasOwnProperty(p)) {
            return false;
        }

        switch (typeof (actual[p])) {
            case 'array':
            case 'object':
                compare(expected[p], actual[p]);
                break;
            case 'function':
                if (typeof (expected[p]) == 'undefined' || (actual[p].toString() != expected[p].toString())) {
                    throw 'incorrect function: ' + p.name;
                }
                break;
            default:
                if (actual[p] != expected[p]) {
                    throw 'incorrect value: ' + p;
                }
        }
    }

    for (var p in expected) {
        if (typeof (actual[p]) == 'undefined') {
            throw 'missing' + p;
        }
    }
}