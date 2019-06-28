import CalculatorStore from "./calculator-store";
import Themer from "../ui/themer";
import applyMenu from "./applicators/menu-applicator";
import applyDigits from "./applicators/digit-applicator";
import applyOperators from "./applicators/operator-applicator";
import applyClearing from "./applicators/clearing-applicator";
import applyMemory from "./applicators/memory-applicator";
import applyHistory from "./applicators/history-applicator";
import PageHandler from "../ui/page-handler";
import Integer from "../integer";
import { SETTINGS, DEFAULT_SETTINGS } from "../constants";

const calculatorView = () => {
    new PageHandler();

    const cookiesSettings = {
        expires: DEFAULT_SETTINGS.EXPIRES
    };

    let positiveCookie = Cookies.get(SETTINGS.POSITIVE);
    
    if (positiveCookie === undefined) {
        positiveCookie = DEFAULT_SETTINGS.POSITIVE;
        Cookies.set(SETTINGS.POSITIVE, positiveCookie, cookiesSettings);
    }
    else {
        positiveCookie = positiveCookie == true;
    }

    let moduleCookie = Cookies.get(SETTINGS.MODULE);

    if (moduleCookie === undefined) {
        moduleCookie = DEFAULT_SETTINGS.MODULE;
        Cookies.set(SETTINGS.MODULE, moduleCookie, cookiesSettings);
    }
    else {
        moduleCookie = moduleCookie == true;
    }

    const initialState = {
        firstArgument: new Integer(),
        secondArgument: null,
        operator: null,
        module: null,
        memory: null,
        result: null,
        positiveCookie,
        moduleCookie
    };

    const calculatorStore = new CalculatorStore(initialState);
    const themer = new Themer();

    const init =  () => {
        applyMenu(calculatorStore, themer);

        applyDigits(calculatorStore);
        applyOperators(calculatorStore);
        applyClearing(calculatorStore);
        applyMemory(calculatorStore);
        applyHistory(calculatorStore);
    };

    init();

    $("[data-value=\"nothing\"]").attr("disabled", true);
    $("#positive").checkboxpicker();
    $("#positive").prop("checked", positiveCookie);
    $("#module").checkboxpicker();
    $("#module").prop("checked", moduleCookie);
};

export default calculatorView;