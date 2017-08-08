function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    var expectedProperties = Object.getOwnPropertyNames(expected).sort();
    var actualProperties = Object.getOwnPropertyNames(actual).sort();

    if (expectedProperties.length !== actualProperties.length) {
        throw 'incorrect properties count';
    }

    for (var i = 0; i < expectedProperties.length; i++) {
        if (expected[expectedProperties[i]] === undefined) {
            throw 'incorrect property value of expected model';
        }

        if (actual[actualProperties[i]] === undefined) {
            throw 'incorrect property value of actual model';
        }
    }
}