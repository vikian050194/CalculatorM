import Integer from "../../../integer";

import assert from "assert";

describe("Integer: sub", function () {
    it("subtract 1 from 1", function () {
        var firstNumber = new Integer("1");
        var secondNumber = new Integer("1");
        var expected = new Integer("0");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 9 from 100", function () {
        var firstNumber = new Integer("100");
        var secondNumber = new Integer("9");
        var expected = new Integer("91");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 30 from 21", function () {
        var firstNumber = new Integer("21");
        var secondNumber = new Integer("30");
        var expected = new Integer("-9");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 999 from 1000", function () {
        var firstNumber = new Integer("1000");
        var secondNumber = new Integer("999");
        var expected = new Integer("1");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 999999999999 from 1000000000000", function () {
        var firstNumber = new Integer("1000000000000");
        var secondNumber = new Integer("999999999999");
        var expected = new Integer("1");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract -30 from -21", function () {
        var firstNumber = new Integer("-21");
        var secondNumber = new Integer("-30");
        var expected = new Integer("9");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract  30 from -21", function () {
        var firstNumber = new Integer("-21");
        var secondNumber = new Integer("30");
        var expected = new Integer("-51");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract -30 from 21", function () {
        var firstNumber = new Integer("21");
        var secondNumber = new Integer("-30");
        var expected = new Integer("51");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 1 from 100000000", function () {
        var firstNumber = new Integer("100000000");
        var secondNumber = new Integer("1");
        var expected = new Integer("99999999");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 343255465768768798 from 645645776578", function () {
        var firstNumber = new Integer("-645645776578");
        var secondNumber = new Integer("343255465768768798");
        var expected = new Integer("-343256111414545376");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 4364 from 354456436346", function () {
        var firstNumber = new Integer("354456436346");
        var secondNumber = new Integer("4364");
        var expected = new Integer("354456431982");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 89534 from 965394583456", function () {
        var firstNumber = new Integer("965394583456");
        var secondNumber = new Integer("89534");
        var expected = new Integer("965394493922");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract 4364565454645823653489534 from 354456436346345745645684965394583456", function () {
        var firstNumber = new Integer("354456436346345745645684965394583456");
        var secondNumber = new Integer("4364565454645823653489534");
        var expected = new Integer("354456436341981180191039141741093922");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("subtract -1000000000000 from -1", function () {
        var firstNumber = new Integer("-1");
        var secondNumber = new Integer("-1000000000000");
        var expected = new Integer("999999999999");

        var actual = Integer.sub(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });
});