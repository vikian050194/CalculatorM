const cookieReducer = (previousState, action) => {
    switch (action.type) {
        case "changePositiveCookie":
            return {
                ...previousState,
                positiveCookie: action.value
            };

        case "changeModuleCookie":
            return {
                ...previousState,
                moduleCookie: action.value
            };
        default:
            return previousState;
    }
};

export { cookieReducer };