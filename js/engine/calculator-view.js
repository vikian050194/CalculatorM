import CalculatorStore from "./calculator-store";
import Themer from "../ui/themer";
import applyMenu from "./applicators/menu-applicator";
import applyDigits from "./applicators/digit-applicator";
import applyOperators from "./applicators/operator-applicator";
import applyClearing from "./applicators/clearing-applicator";
import applyMemory from "./applicators/memory-applicator";
import applyHistory from "./applicators/history-applicator";
import PageHandler from "../ui/page-handler";
import initialState from "./initial-state";
import { SETTINGS, DEFAULT_SETTINGS } from "../constants";

const calculatorView = () => {
    new PageHandler();

    const cookiesSettings = {
        expires: DEFAULT_SETTINGS.EXPIRES
    };

    let positive = Cookies.get(SETTINGS.POSITIVE);

    if (positive === undefined) {
        positive = DEFAULT_SETTINGS.POSITIVE;
        Cookies.set(SETTINGS.POSITIVE, positive, cookiesSettings);
    }
    else {
        positive = positive == true;
    }

    let module = Cookies.get(SETTINGS.MODULE);

    if (module === undefined) {
        module = DEFAULT_SETTINGS.MODULE;
        Cookies.set(SETTINGS.MODULE, module, cookiesSettings);
    }
    else {
        module = module == true;
    }

    const state = {
        ...initialState,
        settings: { positive: positive, module: module }
    };

    // const state = {
    //     ...initialState,
    //     settings: { positive: positive, module: module },
    //     query: {
    //         ...initialState.query, items: ["1", "add"],
    //         index: 2
    //     }
    // };

    const calculatorStore = new CalculatorStore(state);
    const themer = new Themer();

    const init = () => {
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
    $("#positive").prop("checked", positive);
    $("#module").checkboxpicker();
    $("#module").prop("checked", module);
};

export default calculatorView;