function Assert() {

}

Assert.prototype.areEqual = function (expected, actual) {
    // var expectedProperties = Object.getOwnPropertyNames(expected).sort();
    // var actualProperties = Object.getOwnPropertyNames(actual).sort();
    //
    // for (var i = 0; i < actualProperties.length; i++) {
    //     if (actual[actualProperties[i]] === undefined) {
    //         throw 'incorrect property value of actual model';
    //     }
    // }
    //
    // for (var i = 0; i < expectedProperties.length; i++) {
    //     if (expected[expectedProperties[i]] === undefined) {
    //         throw 'incorrect property value of expected model';
    //     }
    //
    //     if (actual[expectedProperties[i]] !== expected[expectedProperties[i]]) {
    //         throw 'incorrect property value';
    //     }
    // }

    if(!Object.compare(expected, actual))
        throw 'smth incorrect';
};

Object.compare = function (obj1, obj2) {
    //Loop through properties in object 1
    for (var p in obj1) {
        //Check property exists on both objects
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

        switch (typeof (obj1[p])) {
            //Deep compare objects
            case 'object':
                if (!Object.compare(obj1[p], obj2[p])) return false;
                break;
            //Compare function code
            case 'function':
                if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
                break;
            //Deep compare arrays
            case 'array':
                if (!Object.compare(obj1[p], obj2[p])) return false;
                break;
            //Compare values
            default:
                if (obj1[p] != obj2[p]) return false;
        }
    }

    //Check object 2 for any extra properties
    for (var p in obj2) {
        if (typeof (obj1[p]) == 'undefined') return false;
    }
    return true;
};