import createAction from "./../action-creator";

function applyMenu(calculatorStore, themer) {
    $("#changeTheme").on("change", function () {
        var optionIndex = this.selectedIndex;
        themer.setTheme(optionIndex);
    });

    var positiveCheckbox = $("#positive");
    if (positiveCheckbox[0].checked) {
        calculatorStore.dispatch(createAction("changePositiveCookie")(true));
    }
    positiveCheckbox.change(function () {
        calculatorStore.dispatch(createAction("changePositiveCookie")(this.checked));
    });

    var moduleCheckbox = $("#module");
    if (moduleCheckbox[0].checked) {
        calculatorStore.dispatch(createAction("changeModuleCookie")(true));
    }
    moduleCheckbox.change(function () {
        calculatorStore.dispatch(createAction("changeModuleCookie")(this.checked));
    });

    $("#menu").on("click", function () {
        $(".page").each(function (i, e) {
            $(e).hide();
        });
        $(".menu-page").show();
    });

    $("#ok").on("click", function(){
        $(".page").each(function (i, e) {
            $(e).show();
        });
        $(".menu-page").hide();
    });
}

export default applyMenu;