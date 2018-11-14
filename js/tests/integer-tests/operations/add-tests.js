import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: add", function () {
    it("add 210 to 95", function () {
        var firstNumber = new Integer("210");
        var secondNumber = new Integer("95");
        var expected = new Integer("305");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add 0 to 0", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("0");
        var expected = new Integer("0");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add -87 to -59", function () {
        var firstNumber = new Integer("-87");
        var secondNumber = new Integer("-59");
        var expected = new Integer("-146");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add 87 to -59", function () {
        var firstNumber = new Integer("87");
        var secondNumber = new Integer("-59");
        var expected = new Integer("28");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add -87 to 59", function () {
        var firstNumber = new Integer("-87");
        var secondNumber = new Integer("59");
        var expected = new Integer("-28");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add 21037831813 to 959", function () {
        var firstNumber = new Integer("21037831813");
        var secondNumber = new Integer("959");
        var expected = new Integer("21037832772");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add 21037831813453466456745765767525 to 46457656765756756465656756", function () {
        var firstNumber = new Integer("21037831813453466456745765767525");
        var secondNumber = new Integer("46457656765756756465656756");
        var expected = new Integer("21037878271110232213502231424281");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("add -210378318130 to 959", function () {
        var firstNumber = new Integer("-21037831813");
        var secondNumber = new Integer("959");
        var expected = new Integer("-21037830854");

        var actual = Integer.add(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });
});