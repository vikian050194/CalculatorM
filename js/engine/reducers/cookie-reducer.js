function CookieReducer(previousState, action) {
    switch (action.type) {
        case 'changePositiveCookie':
            return $.extend({}, previousState, {positiveCookie: action.value});
            break;

        case 'changeModuleCookie':
            return $.extend({}, previousState, {moduleCookie: action.value});
            break;

        default:
            return previousState;
    }
}