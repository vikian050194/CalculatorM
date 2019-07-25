import createAction from "./../action-creator";
import { ACTIONS } from "../../constants";

function menuApplicator(calculatorStore, themer) {
    $("#changeTheme").on("change", function () {
        themer.setTheme(this.selectedOptions[0].value);
    });

    const positiveCheckbox = $("#positive");
    if (positiveCheckbox.checked) {
        calculatorStore.dispatch(createAction(ACTIONS.CHANGE_SETTING)({ name: "positive", value: true }));
    }
    positiveCheckbox.change(function () {
        calculatorStore.dispatch(createAction(ACTIONS.CHANGE_SETTING)({ name: "positive", value: this.checked }));
    });

    const moduleCheckbox = $("#module");
    if (moduleCheckbox.checked) {
        calculatorStore.dispatch(createAction(ACTIONS.CHANGE_SETTING)({ name: "module", value: true }));
    }
    moduleCheckbox.change(function () {
        calculatorStore.dispatch(createAction(ACTIONS.CHANGE_SETTING)({ name: "module", value: this.checked }));
    });

    $("#menu").on("click", function () {
        $(".page").each(function (i, e) {
            $(e).hide();
        });
        $(".menu-page").show();
    });

    $("#ok").on("click", function () {
        $(".page").each(function (i, e) {
            $(e).show();
        });
        $(".menu-page").hide();
    });
}

export { menuApplicator };