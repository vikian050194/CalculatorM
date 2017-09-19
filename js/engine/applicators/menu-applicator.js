function applyMenu(calculatorStore, themer) {
    $('#changeTheme').on('change', function () {
        var optionIndex = this.selectedIndex;

        themer.setTheme(optionIndex);
    });

	var positiveCheckbox = $("#positive");	
	if (positiveCheckbox.checked) {
		calculatorStore.dispatch(createAction('changePositiveCookie')(true));
    } else {
		calculatorStore.dispatch(createAction('changePositiveCookie')(false));
    }
    positiveCheckbox.change(function () {
        if (this.checked) {
            Cookies.set('positive', true, {expires: 31});
			calculatorStore.dispatch(createAction('changePositiveCookie')(true));
        } else {
            Cookies.set('positive', false, {expires: 31});
			calculatorStore.dispatch(createAction('changePositiveCookie')(false));
        }
    });

	var moduleCheckbox = $("#module");	
	if (moduleCheckbox.checked) {
		calculatorStore.dispatch(createAction('changeModuleCookie')(true));
    } else {
		calculatorStore.dispatch(createAction('changeModuleCookie')(false));
    }
    moduleCheckbox.change(function () {
        if (this.checked) {
            Cookies.set('module', true, {expires: 31});
			calculatorStore.dispatch(createAction('changeModuleCookie')(true));
        } else {
            Cookies.set('module', false, {expires: 31});
			calculatorStore.dispatch(createAction('changeModuleCookie')(false));
        }
    });
}