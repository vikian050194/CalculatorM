var TestState = require('./test-state'),
    QueryBuilder = require('./../engine/query-builder');

var assert = require('assert');

describe('Query builder', function () {

    var initialState = new TestState();
    var queryBuilder = new QueryBuilder();

    before(function () {
        this.jsdom = require('jsdom-global')();
        $ = require('jquery');
    });

    after(function () {
        this.jsdom()
    });

    it('empty query', function () {
        var actualState = $.extend(true, {}, initialState);

        assert.deepEqual(queryBuilder.getQuery(actualState), '_');
    });

    it('one argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 3
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '3_');
    });

    it('one argument and operation', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 7,
            operator: 'add',
            secondArgument: 0
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '7 add 0_');
    });

    it('two arguments and operation', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 7,
            operator: 'add',
            secondArgument: 32
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '7 add 32_');
    });

    it('query with module', function () {
        var actualState = $.extend(true, {}, initialState, {
            module: 100
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '_ mod 100');
    });

    it('query with module and first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 72,
            module: 100
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '72_ mod 100');
    });

    it('query with module, first argument, operator and second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 72,
            module: 100,
            operator: 'sub',
            secondArgument: 5
        });

        assert.deepEqual(queryBuilder.getQuery(actualState), '72 sub 5_ mod 100');
    });
});