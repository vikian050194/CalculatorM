import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: mul", function () {
    it("9 mul by 1", function () {
        var firstNumber = new Integer("9");
        var secondNumber = new Integer("10");
        var expected = new Integer("90");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("935345 mul by 0", function () {
        var firstNumber = new Integer("935345");
        var secondNumber = new Integer("0");
        var expected = new Integer("0");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("0 mul by 0", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("0");
        var expected = new Integer("0");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("4 mul by 4", function () {
        var firstNumber = new Integer("4");
        var secondNumber = new Integer("4");
        var expected = new Integer("16");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("32 mul by 32", function () {
        var firstNumber = new Integer("32");
        var secondNumber = new Integer("32");
        var expected = new Integer("1024");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("0 mul by 54364365345436", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("54364365345436");
        var expected = new Integer("0");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("9187 mul by 189", function () {
        var firstNumber = new Integer("9187");
        var secondNumber = new Integer("189");
        var expected = new Integer("1736343");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("9187 mul by -189", function () {
        var firstNumber = new Integer("9187");
        var secondNumber = new Integer("-189");
        var expected = new Integer("-1736343");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("-9187 mul by 189", function () {
        var firstNumber = new Integer("-9187");
        var secondNumber = new Integer("189");
        var expected = new Integer("-1736343");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("-91874214143 mul by -32534563000", function () {
        var firstNumber = new Integer("-91874214143");
        var secondNumber = new Integer("-32534563000");
        var expected = new Integer("2989087408110924509000");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("324144744621 mul by 1000000000000", function () {
        var firstNumber = new Integer("324144744621");
        var secondNumber = new Integer("1000000000000");
        var expected = new Integer("324144744621000000000000");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});