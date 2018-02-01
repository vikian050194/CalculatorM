var TestState = require('./test-state'),
    QueryBuilder = require('./../engine/query-builder'),
    Integer = require('./../integer/integer');

var assert = require('assert');

var applyJQuery = require('./apply-jquery');
applyJQuery();

describe('Query builder', function () {

    var initialState = new TestState();
    var queryBuilder = new QueryBuilder();

    it('empty query', function () {
        var actualState = $.extend(true, {}, initialState,  {
            firstArgument: new Integer('0'),
            module: new Integer('0')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '_');
    });

    it('one argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('3'),
            module: new Integer('0')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '3_');
    });

    it('one argument and operation', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('7'),
            operator: "add",
            secondArgument: new Integer('0'),
            module: new Integer('0')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '7 add 0_');
    });

    it('two arguments and operation', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('7'),
            operator: "add",
            secondArgument: new Integer('32'),
            module: new Integer('0')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '7 add 32_');
    });

    it('query with module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('0'),
            module: new Integer('100')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '_ mod 100');
    });

    it('query with module and first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('72'),
            module: new Integer('100')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '72_ mod 100');
    });

    it('query with module, first argument, operator and second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('72'),
            operator: "sub",
            secondArgument: new Integer('5'),
            module: new Integer('100')
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '72 sub 5_ mod 100');
    });
});