import Integer from "../../../integer";

import assert from "assert";

describe("Integer: pow", function () {
    it("2 to the 0 power", function () {
        const a = new Integer("2");
        const power = new Integer();
        const expected = new Integer("1");

        const actual = Integer.pow(a, power);

        assert.deepStrictEqual(actual, expected);
    });
    
    it("2 to the 1 power", function () {
        const a = new Integer("2");
        const power = new Integer("1");
        const expected = new Integer("2");

        const actual = Integer.pow(a, power);

        assert.deepStrictEqual(actual, expected);
    });

    it("2 to the 6 power", function () {
        const firstNumber = new Integer("2");
        const secondNumber = new Integer("6");
        const expected = new Integer("64");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });
    
    it("13 to the 3 power", function () {
        const firstNumber = new Integer("13");
        const secondNumber = new Integer("3");
        const expected = new Integer("2197");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("15 to the 2 power", function () {
        const firstNumber = new Integer("15");
        const secondNumber = new Integer("2");
        const expected = new Integer("225");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("20 to the 4 power", function () {
        const firstNumber = new Integer("20");
        const secondNumber = new Integer("4");
        const expected = new Integer("160000");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("12 to the 12 power", function () {
        const firstNumber = new Integer("12");
        const secondNumber = new Integer("12");
        const expected = new Integer("8916100448256");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("12 to the 11 power", function () {
        const firstNumber = new Integer("12");
        const secondNumber = new Integer("11");
        const expected = new Integer("743008370688");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("12 to the 5 power", function () {
        const firstNumber = new Integer("12");
        const secondNumber = new Integer("5");
        const expected = new Integer("248832");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("2 to the 10 power", function () {
        const firstNumber = new Integer("2");
        const secondNumber = new Integer("10");
        const expected = new Integer("1024");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });

    it("2 to the 11 power", function () {
        const firstNumber = new Integer("2");
        const secondNumber = new Integer("11");
        const expected = new Integer("2048");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepStrictEqual(actual, expected);
    });
});