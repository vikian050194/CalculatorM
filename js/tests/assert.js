function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    var expectedProperties = Object.getOwnPropertyNames(expected).sort();
    var actualProperties = Object.getOwnPropertyNames(actual).sort();


    for (var i = 0; i < actualProperties.length; i++) {
        if (actual[actualProperties[i]] === undefined) {
            throw 'incorrect property value of actual model';
        }
    }

    for (var i = 0; i < expectedProperties.length; i++) {
        if (expected[expectedProperties[i]] === undefined) {
            throw 'incorrect property value of expected model';
        }

        if (actual[expectedProperties[i]] !== expected[expectedProperties[i]]) {
            throw 'incorrect property value';
        }
    }
}