function isSafeInteger(number) {
    if (typeof number !== "number") {
        return false;
    }
    if (!isFinite(number)) { //NaN is also not finite
        return false;
    }
    // var integer = getSign(number) * Math.floor(Math.abs(number));
    // if (integer !== number) {
    //     return false;
    // }
    if (Math.abs(number) < Math.pow(2, 53) - 1) {
        return true;
    }
    return false;
}

function getSign(x) {
    return x ? x < 0 ? -1 : 1 : 0;
}

export default isSafeInteger;