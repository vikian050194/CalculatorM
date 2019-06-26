import CalculatorStore from "./calculator-store";
import Themer from "./../ui/themer";
import applyMenu from "./applicators/menu-applicator";
import applyDigits from "./applicators/digit-applicator";
import applyOperators from "./applicators/operator-applicator";
import applyClearing from "./applicators/clearing-applicator";
import applyMemory from "./applicators/memory-applicator";
import applyHistory from "./applicators/history-applicator";
import PageHandler from "./../ui/page-handler";
import { SETTINGS, DEFAULT_SETTINGS } from "../constants";

function CalculatorUI() {
    new PageHandler();

    const cookiesSettings = {
        expires: DEFAULT_SETTINGS.EXPIRES
    };

    let positiveCookie = Cookies.get(SETTINGS.POSITIVE);
    if (!positiveCookie) {
        positiveCookie = DEFAULT_SETTINGS.POSITIVE;
        Cookies.set(SETTINGS.POSITIVE, positiveCookie, cookiesSettings);
    }
    else {
        positiveCookie = positiveCookie == true;
    }

    let moduleCookie = Cookies.get(SETTINGS.MODULE);
    if (!moduleCookie) {
        moduleCookie = DEFAULT_SETTINGS.MODULE;
        Cookies.set(SETTINGS.MODULE, moduleCookie, cookiesSettings);
    }
    else {
        moduleCookie = moduleCookie == true;
    }

    var initialState = {
        firstArgument: 0,
        secondArgument: null,
        operator: "",
        module: 0,
        memory: null,
        query: "_",
        result: null,
        positiveCookie,
        moduleCookie
    };

    var calculatorStore = new CalculatorStore(initialState); //send initstate
    var themer = new Themer();

    var init = function () {
        applyMenu(calculatorStore, themer);

        applyDigits(calculatorStore);
        applyOperators(calculatorStore);
        applyClearing(calculatorStore);
        applyMemory(calculatorStore);
        applyHistory(calculatorStore);
    };

    init();

    $("[data-value=\"nothing\"]").attr("disabled", true);
}

export default CalculatorUI;