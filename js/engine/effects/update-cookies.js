import { SETTINGS } from "../../constants";

function updateCookies(state) {
    var cookiesSettings = {
        expires: 31
    };

    Cookies.set(SETTINGS.POSITIVE, state.settings.positive, cookiesSettings);
    Cookies.set(SETTINGS.MODULE, state.settings.module, cookiesSettings);
}

export { updateCookies };