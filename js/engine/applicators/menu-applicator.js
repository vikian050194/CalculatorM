function applyMenu(calculatorStore, themer) {
    $('#changeTheme').on('change', function () {
        var optionIndex = this.selectedIndex;
        themer.setTheme(optionIndex);
    });

	var positiveCheckbox = $("#positive");
	if (positiveCheckbox[0].checked) {
		calculatorStore.dispatch(createAction('changePositiveCookie')(true));
    }
    positiveCheckbox.change(function () {
		calculatorStore.dispatch(createAction('changePositiveCookie')(this.checked));
    });

	var moduleCheckbox = $("#module");
	if (moduleCheckbox[0].checked) {
		calculatorStore.dispatch(createAction('changeModuleCookie')(true));
    }
    moduleCheckbox.change(function () {
		calculatorStore.dispatch(createAction('changeModuleCookie')(this.checked));
    });
}