var TestState = require('./test-state'),
    HistoryReducer = require('./../history/history-reducer'),
    combineReducers = require('./../engine/reducers/combine-reducers'),
    CookieReducer = require('./../engine/reducers/cookie-reducer'),
    ClearingReducer = require('./../engine/reducers/clearing-reducer'),
    DigitReducer = require('./../engine/reducers/digit-reducer'),
    MemoryReducer = require('./../engine/reducers/memory-reducer'),
    OperatorReducer = require('./../engine/reducers/operator-reducer'),
    QueryReducer = require('./../engine/reducers/query-reducer'),
    createAction = require('./../engine/action-creator');

var assert = require('assert');

var initialState = TestState;
var Reducer = combineReducers({
    cookie: CookieReducer,
    clearing: ClearingReducer,
    digit: DigitReducer,
    memory: MemoryReducer,
    operator: OperatorReducer,
    query: QueryReducer
});

describe('History', function () {

    before(function () {
        this.jsdom = require('jsdom-global')();
        $ = require('jquery');
    });

    after(function () {
        this.jsdom()
    });

    it('undo', function () {
        var actualHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
                query: '42 add 0_'
            })
        ];

        var expectedHistory = [
            $.extend({}, $.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, $.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
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
});