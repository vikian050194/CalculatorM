import Integer from "../../integer/integer";

import assert from "assert";

describe("Integer: ctor", function () {
    it("No arguments", function () {
        var number = new Integer();

        assert.equal(number.isNegative, false);
        assert.equal(number.digits.length, 1);
        assert.equal(number.digits[0], 0);
    });

    it("String argument: zero", function () {
        var number = new Integer("0");

        assert.equal(number.isNegative, false);
        assert.equal(number.digits.length, 1);
        assert.equal(number.digits[0], 0);
    });

    it("String argument: positive non zero number", function () {
        var number = new Integer("42");

        assert.equal(number.isNegative, false);
        assert.equal(number.digits.length, 2);
        assert.equal(number.digits[0], 2);
        assert.equal(number.digits[1], 4);
    });

    it("String argument: negative number", function () {
        var number = new Integer("-42");

        assert.equal(number.isNegative, true);
        assert.equal(number.digits.length, 2);
        assert.equal(number.digits[0], 2);
        assert.equal(number.digits[1], 4);
    });

    it("One non string argument", function () {
        assert.throws(() => {
            new Integer(true);
        });
    });

    it("Array and boolean arguments", function () {
        var number = new Integer([0], false);

        assert.equal(number.isNegative, false);
        assert.equal(number.digits.length, 1);
        assert.equal(number.digits[0], 0);
    });
});