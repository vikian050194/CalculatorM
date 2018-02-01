var TestState = require('./test-state'),
    HistoryReducer = require('./../history/history-reducer'),
    combineReducers = require('./../engine/reducers/combine-reducers'),
    CookieReducer = require('./../engine/reducers/cookie-reducer'),
    ClearingReducer = require('./../engine/reducers/clearing-reducer'),
    DigitReducer = require('./../engine/reducers/digit-reducer'),
    MemoryReducer = require('./../engine/reducers/memory-reducer'),
    OperatorReducer = require('./../engine/reducers/operator-reducer'),
    QueryReducer = require('./../engine/reducers/query-reducer'),
    createAction = require('./../engine/action-creator'),
    Integer = require('./../integer/integer');

var assert = require('assert');

var applyJQuery = require('./apply-jquery');
applyJQuery();

describe('History', function () {

    var initialState = new TestState();
    var Reducer = combineReducers({
        cookie: CookieReducer,
        clearing: ClearingReducer,
        digit: DigitReducer,
        memory: MemoryReducer,
        operator: OperatorReducer,
        query: QueryReducer
    });

    it('undo', function () {
        var actualHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('42'), query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('0'),
                query: '42 add 0_'
            })
        ];

        var expectedHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('42'), query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('0'),
                query: '42 add 0_'
            })
        ];

        assert.deepEqual(HistoryReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction('undo')()), {
            history: expectedHistory,
            currentIndex: 0
        });
    });

    it('undo with new digit', function () {
        var actualHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('42'), query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('0'),
                query: '42 add 0_'
            })
        ];
        var actualStateBeforeAddingNum = HistoryReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction('undo')());

        var expectedHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('42'), query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('421'), query: '421_'})
        ];

        assert.deepEqual(HistoryReducer(Reducer)(actualStateBeforeAddingNum, createAction('addDigit')(1)), {
            history: expectedHistory,
            currentIndex: 1
        });
    });

    it('redo', function () {
        var actualHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('42'), query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('0'),
                query: '42 add 0_'
            }),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('21'),
                query: '42 add 21_'
            })
        ];

        var expectedHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: new Integer('42'), query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('0'),
                query: '42 add 0_'
            }),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: new Integer('42'),
                operator: 'add',
                secondArgument: new Integer('21'),
                query: '42 add 21_'
            })
        ];

        assert.deepEqual(HistoryReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction('redo')()), {
            history: expectedHistory,
            currentIndex: 2
        });
    });
});