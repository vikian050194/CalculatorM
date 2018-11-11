import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: pow", function () {
    it("2 to the pow of 6", function () {
        const firstNumber = new Integer("2");
        const secondNumber = new Integer("6");
        const expected = new Integer("64");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
    
    it("13 to the pow of 3", function () {
        const firstNumber = new Integer("13");
        const secondNumber = new Integer("3");
        const expected = new Integer("2197");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("15 to the pow of 2", function () {
        const firstNumber = new Integer("15");
        const secondNumber = new Integer("2");
        const expected = new Integer("225");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("20 to the pow of 4", function () {
        const firstNumber = new Integer("20");
        const secondNumber = new Integer("4");
        const expected = new Integer("160000");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 to the pow of 12", function () {
        const firstNumber = new Integer("12");
        const secondNumber = new Integer("12");
        const expected = new Integer("8916100448256");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 to the pow of 11", function () {
        const firstNumber = new Integer("12");
        const secondNumber = new Integer("11");
        const expected = new Integer("743008370688");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 to the pow of 5", function () {
        const firstNumber = new Integer("12");
        const secondNumber = new Integer("5");
        const expected = new Integer("248832");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("2 to the pow of 10", function () {
        const firstNumber = new Integer("2");
        const secondNumber = new Integer("10");
        const expected = new Integer("1024");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("2 to the pow of 11", function () {
        const firstNumber = new Integer("2");
        const secondNumber = new Integer("11");
        const expected = new Integer("2048");

        const actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});