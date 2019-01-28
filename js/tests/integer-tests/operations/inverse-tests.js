import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: inverse", function () {
    it.only("inverse 3 mod 13", function () {
        var firstNumber = new Integer("3");
        var secondNumber = new Integer("13");
        var expected = new Integer("9");

        var actual = Integer.inverse(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
    it.only("inverse 2 mod 13", function () {
        var firstNumber = new Integer("2");
        var secondNumber = new Integer("13");
        var expected = new Integer("7");

        var actual = Integer.inverse(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
    it.only("inverse 0 mod 13", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("13");
        var expected = new Integer("-1");

        var actual = Integer.inverse(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
    it.only("inverse 3 mod 0", function () {
        var firstNumber = new Integer("3");
        var secondNumber = new Integer("0");
        var expected = new Integer("-1");

        var actual = Integer.inverse(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
    it.only("inverse 53 mod 84", function () {
        var firstNumber = new Integer("53");
        var secondNumber = new Integer("84");
        var expected = new Integer("65");

        var actual = Integer.inverse(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
    it.only("inverse 29 mod 13", function () {
        var firstNumber = new Integer("29");
        var secondNumber = new Integer("13");
        var expected = new Integer("9");

        var actual = Integer.inverse(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});