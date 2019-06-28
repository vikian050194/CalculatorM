import { SETTINGS } from "../../constants";

function updateCookies(state) {
    var cookiesSettings = {
        expires: 31
    };

    Cookies.set(SETTINGS.POSITIVE, state.positiveCookie, cookiesSettings);
    Cookies.set(SETTINGS.MODULE, state.moduleCookie, cookiesSettings);
}

export { updateCookies };