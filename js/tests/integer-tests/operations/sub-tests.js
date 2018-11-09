import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: sub", function () {
    it("of 1 sub 1", function () {
        var firstNumber = new Integer("1");
        var secondNumber = new Integer("1");
        var expected = new Integer("0");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 100 sub 9", function () {
        var firstNumber = new Integer("100");
        var secondNumber = new Integer("9");
        var expected = new Integer("91");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 21 sub 30", function () {
        var firstNumber = new Integer("21");
        var secondNumber = new Integer("30");
        var expected = new Integer("-9");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 1000 sub 999", function () {
        var firstNumber = new Integer("1000");
        var secondNumber = new Integer("999");
        var expected = new Integer("1");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 1000000000000 sub 999999999999", function () {
        var firstNumber = new Integer("1000000000000");
        var secondNumber = new Integer("999999999999");
        var expected = new Integer("1");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -21 sub -30", function () {
        var firstNumber = new Integer("-21");
        var secondNumber = new Integer("-30");
        var expected = new Integer("9");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -21 sub 30", function () {
        var firstNumber = new Integer("-21");
        var secondNumber = new Integer("30");
        var expected = new Integer("-51");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 21 sub -30", function () {
        var firstNumber = new Integer("21");
        var secondNumber = new Integer("-30");
        var expected = new Integer("51");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 100000000 sub 1", function () {
        var firstNumber = new Integer("100000000");
        var secondNumber = new Integer("1");
        var expected = new Integer("99999999");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -645645776578 sub 343255465768768798", function () {
        var firstNumber = new Integer("-645645776578");
        var secondNumber = new Integer("343255465768768798");
        var expected = new Integer("-343256111414545376");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 354456436346 sub 4364", function () {
        var firstNumber = new Integer("354456436346");
        var secondNumber = new Integer("4364");
        var expected = new Integer("354456431982");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 965394583456 sub 89534", function () {
        var firstNumber = new Integer("965394583456");
        var secondNumber = new Integer("89534");
        var expected = new Integer("965394493922");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 354456436346345745645684965394583456 sub 4364565454645823653489534", function () {
        var firstNumber = new Integer("354456436346345745645684965394583456");
        var secondNumber = new Integer("4364565454645823653489534");
        var expected = new Integer("354456436341981180191039141741093922");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -1 sub -1000000000000", function () {
        var firstNumber = new Integer("-1");
        var secondNumber = new Integer("-1000000000000");
        var expected = new Integer("999999999999");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});