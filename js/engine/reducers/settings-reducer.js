const settingsReducer = (previousState, action) => {
    switch (action.type) {
        case "changeSetting":
            // eslint-disable-next-line no-case-declarations
            let newSettings = { ...previousState.settings };
            newSettings[action.value.name] = action.value.value;

            return {
                ...previousState,
                settings: newSettings
            };
        default:
            return previousState;
    }
};

export { settingsReducer };