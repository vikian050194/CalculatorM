import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: subtract", function () {
    
    it("of 1 subtract 1", function () {
        var firstNumber = new Integer("1");
        var secondNumber = new Integer("1");
        var expected = new Integer("0");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 100 subtract 9", function () {
        var firstNumber = new Integer("100");
        var secondNumber = new Integer("9");
        var expected = new Integer("91");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 21 subtract 30", function () {
        var firstNumber = new Integer("21");
        var secondNumber = new Integer("30");
        var expected = new Integer("-9");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 1000 subtract 999", function () {
        var firstNumber = new Integer("1000");
        var secondNumber = new Integer("999");
        var expected = new Integer("1");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 1000000000000 subtract 999999999999", function () {
        var firstNumber = new Integer("1000000000000");
        var secondNumber = new Integer("999999999999");
        var expected = new Integer("1");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -21 subtract -30", function () {
        var firstNumber = new Integer("-21");
        var secondNumber = new Integer("-30");
        var expected = new Integer("9");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -21 subtract 30", function () {
        var firstNumber = new Integer("-21");
        var secondNumber = new Integer("30");
        var expected = new Integer("-51");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 21 subtract -30", function () {
        var firstNumber = new Integer("21");
        var secondNumber = new Integer("-30");
        var expected = new Integer("51");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 100000000 subtract 1", function () {
        var firstNumber = new Integer("100000000");
        var secondNumber = new Integer("1");
        var expected = new Integer("99999999");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -645645776578 subtract 343255465768768798", function () {
        var firstNumber = new Integer("-645645776578");
        var secondNumber = new Integer("343255465768768798");
        var expected = new Integer("-343256111414545376");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 354456436346 subtract 4364", function () {
        var firstNumber = new Integer("354456436346");
        var secondNumber = new Integer("4364");
        var expected = new Integer("354456431982");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 965394583456 subtract 89534", function () {
        var firstNumber = new Integer("965394583456");
        var secondNumber = new Integer("89534");
        var expected = new Integer("965394493922");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of 354456436346345745645684965394583456 subtract 4364565454645823653489534", function () {
        var firstNumber = new Integer("354456436346345745645684965394583456");
        var secondNumber = new Integer("4364565454645823653489534");
        var expected = new Integer("354456436341981180191039141741093922");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("of -1 subtract -1000000000000", function () {
        var firstNumber = new Integer("-1");
        var secondNumber = new Integer("-1000000000000");
        var expected = new Integer("999999999999");

        var actual = Integer.subtract(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});