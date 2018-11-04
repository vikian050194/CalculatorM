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

    it("100000 div by 10", function () {
        var firstNumber = new Integer("100000");
        var secondNumber = new Integer("10");
        var expected = new Integer("10000");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("81 div by 27", function () {
        var firstNumber = new Integer("81");
        var secondNumber = new Integer("3");
        var expected = new Integer("27");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("83 div by 3", function () {
        var firstNumber = new Integer("83");
        var secondNumber = new Integer("3");
        var expected = new Integer("27");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("0 div by 27", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("27");
        var expected = new Integer("0");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("9 div by 3", function () {
        var firstNumber = new Integer("9");
        var secondNumber = new Integer("3");
        var expected = new Integer("3");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("10 div by 3", function () {
        var firstNumber = new Integer("10");
        var secondNumber = new Integer("3");
        var expected = new Integer("3");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("8 div by 3", function () {
        var firstNumber = new Integer("8");
        var secondNumber = new Integer("3");
        var expected = new Integer("2");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("0 div by 3", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("3");
        var expected = new Integer("0");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("1 div by 3", function () {
        var firstNumber = new Integer("1");
        var secondNumber = new Integer("3");
        var expected = new Integer("0");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("8655288755589632247 div by 4555534522452", function () {
        var firstNumber = new Integer("8655288755589632247");
        var secondNumber = new Integer("4555534522452");
        var expected = new Integer("1899950");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("-8 div by -3", function () {
        var firstNumber = new Integer("-8");
        var secondNumber = new Integer("-3");
        var expected = new Integer("2");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 div by 2", function () {
        var firstNumber = new Integer("12");
        var secondNumber = new Integer("2");
        var expected = new Integer("6");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("0 div by -3", function () {
        var firstNumber = new Integer("0");
        var secondNumber = new Integer("-3");
        var expected = new Integer("0");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("-1 div by 3", function () {
        var firstNumber = new Integer("-1");
        var secondNumber = new Integer("3");
        var expected = new Integer("0");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("8655288755589632247 div by -4555534522452", function () {
        var firstNumber = new Integer("8655288755589632247");
        var secondNumber = new Integer("-4555534522452");
        var expected = new Integer("-1899950");

        var actual = Integer.div(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("remainder of division 100 by 12", function () {
        var firstNumber = new Integer("100");
        var secondNumber = new Integer("12");
        var expected = new Integer("4");

        var actual = Integer.mod(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("remainder of division 3379 by 52", function () {
        var firstNumber = new Integer("3379");
        var secondNumber = new Integer("52");
        var expected = new Integer("51");

        var actual = Integer.mod(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("remainder of division 9 by 3", function () {
        var firstNumber = new Integer("9");
        var secondNumber = new Integer("3");
        var expected = new Integer("0");

        var actual = Integer.mod(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("remainder of division 3 by 2", function () {
        var firstNumber = new Integer("3");
        var secondNumber = new Integer("2");
        var expected = new Integer("1");

        var actual = Integer.mod(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("remainder of division 4 by 10", function () {
        var firstNumber = new Integer("4");
        var secondNumber = new Integer("10");
        var expected = new Integer("4");

        var actual = Integer.mod(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("13 to the power of 3", function () {
        var firstNumber = new Integer("13");
        var secondNumber = new Integer("3");
        var expected = new Integer("2197");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("2 to the power of 6", function () {
        var firstNumber = new Integer("2");
        var secondNumber = new Integer("6");
        var expected = new Integer("64");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("15 to the power of 2", function () {
        var firstNumber = new Integer("15");
        var secondNumber = new Integer("2");
        var expected = new Integer("225");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("20 to the power of 4", function () {
        var firstNumber = new Integer("20");
        var secondNumber = new Integer("4");
        var expected = new Integer("160000");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 to the power of 12", function () {
        var firstNumber = new Integer("12");
        var secondNumber = new Integer("12");
        var expected = new Integer("8916100448256");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 to the power of 11", function () {
        var firstNumber = new Integer("12");
        var secondNumber = new Integer("11");
        var expected = new Integer("743008370688");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("12 to the power of 5", function () {
        var firstNumber = new Integer("12");
        var secondNumber = new Integer("5");
        var expected = new Integer("248832");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("2 to the power of 10", function () {
        var firstNumber = new Integer("2");
        var secondNumber = new Integer("10");
        var expected = new Integer("1024");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });

    it("2 to the power of 11", function () {
        var firstNumber = new Integer("2");
        var secondNumber = new Integer("11");
        var expected = new Integer("2048");

        var actual = Integer.pow(firstNumber, secondNumber);

        assert.deepEqual(actual, expected);
    });