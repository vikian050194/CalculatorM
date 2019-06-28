import Integer from "../../../integer";

import assert from "assert";

describe("Integer: mul", function () {
    it("mul 9 by 1", function () {
        var firstNumber = new Integer("9");
        var secondNumber = new Integer("10");
        var expected = new Integer("90");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 935345 by 0", function () {
        var firstNumber = new Integer("935345");
        var secondNumber = new Integer("0");
        var expected = new Integer("0");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 0 by 0", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("0");
        var expected = new Integer("0");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 4 by 4", function () {
        var firstNumber = new Integer("4");
        var secondNumber = new Integer("4");
        var expected = new Integer("16");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 32 by 32", function () {
        var firstNumber = new Integer("32");
        var secondNumber = new Integer("32");
        var expected = new Integer("1024");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 0 by 54364365345436", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("54364365345436");
        var expected = new Integer("0");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 9187 by 189", function () {
        var firstNumber = new Integer("9187");
        var secondNumber = new Integer("189");
        var expected = new Integer("1736343");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 9187 by -189", function () {
        var firstNumber = new Integer("9187");
        var secondNumber = new Integer("-189");
        var expected = new Integer("-1736343");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul -9187 by 189", function () {
        var firstNumber = new Integer("-9187");
        var secondNumber = new Integer("189");
        var expected = new Integer("-1736343");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul -91874214143 by -32534563000", function () {
        var firstNumber = new Integer("-91874214143");
        var secondNumber = new Integer("-32534563000");
        var expected = new Integer("2989087408110924509000");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("mul 324144744621 by 1000000000000", function () {
        var firstNumber = new Integer("324144744621");
        var secondNumber = new Integer("1000000000000");
        var expected = new Integer("324144744621000000000000");

        var actual = Integer.mul(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});