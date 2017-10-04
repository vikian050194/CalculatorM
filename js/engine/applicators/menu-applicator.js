function applyMenu(calculatorStore, themer) {
    $('#changeTheme').on('change', function () {
        var optionIndex = this.selectedIndex;
        themer.setTheme(optionIndex);
    });

    $("#positive").change(function () {
		calculatorStore.dispatch(createAction('changePositiveCookie')(this.checked));
    });

    $("#module").change(function () {
		calculatorStore.dispatch(createAction('changeModuleCookie')(this.checked));
    });
}