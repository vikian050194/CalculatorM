var TestState = require('./../test-state'),
    MemoryReducer = require('./../../engine/reducers/memory-reducer'),
    createAction = require('./../../engine/action-creator');

var assert = require('assert');

var applyJQuery = require('./../apply-jquery');
applyJQuery();

describe('Memory reducer', function () {

    var initialState = new TestState();

    it('add to zero memory', function () {
        var actualState = $.extend(true, {}, initialState);

        var expectedState = $.extend(true, {}, initialState, {memory: 0});

        assert.deepEqual(MemoryReducer(actualState, createAction('addToMemory')()), expectedState);
    });

    it('add to memory', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });

        var expectedState = $.extend(true, {}, initialState, {
            memory: 42,
            firstArgument: 42
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('addToMemory')()), expectedState);
    });

    it('add zero to memory from second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 0
        });

        var expectedState = $.extend(true, {}, initialState, {
            memory: 0,
            firstArgument: 42,
            operator: 'add',
            secondArgument: 0
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('addToMemory')()), expectedState);
    });

    it('add to memory from second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 21
        });

        var expectedState = $.extend(true, {}, initialState, {
            memory: 21,
            firstArgument: 42,
            operator: 'add',
            secondArgument: 21
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('addToMemory')()), expectedState);
    });

    it('try memory recall from empty memory', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('getFromMemory')()), expectedState);
    });

    it('memory recall', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            memory: 21
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 21,
            memory: 21
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('getFromMemory')()), expectedState);
    });

    it('memory recall to second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            memory: 21,
            operator: 'add',
            secondArgument: 3
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            memory: 21,
            operator: 'add',
            secondArgument: 21
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('getFromMemory')()), expectedState);
    });

    it('clear memory', function () {
        var actualState = $.extend(true, {}, initialState, {
            memory: 21
        });

        var expectedState = $.extend(true, {}, initialState);

        assert.deepEqual(MemoryReducer(actualState, createAction('clearMemory')()), expectedState);
    });

    it('clear empty memory', function () {
        var actualState = $.extend(true, {}, initialState);

        var expectedState = $.extend(true, {}, initialState);

        assert.deepEqual(MemoryReducer(actualState, createAction('clearMemory')()), expectedState);
    });

    it('clear memory with arguments and operator', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            memory: 21,
            operator: 'add',
            secondArgument: 21
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 21
        });

        assert.deepEqual(MemoryReducer(actualState, createAction('clearMemory')()), expectedState);
    });
});