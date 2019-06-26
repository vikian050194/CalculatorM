import { SETTINGS, THEMES, DEFAULT_SETTINGS } from "../constants";

class Themer {
    constructor() {
        let theme = Cookies.get(SETTINGS.THEME);

        if (!this.isValidTheme(theme)) {
            theme = DEFAULT_SETTINGS.THEME;
        }

        this.setTheme(theme);

        $("#changeTheme").val(theme);
    }

    isValidTheme(theme) {
        return theme && THEMES.includes(theme) !== -1;
    }

    saveInCookies(theme) {
        Cookies.set(SETTINGS.THEME, theme, {
            expires: 31
        });
    }

    changeTheme(theme) {
        const calc = $(".calculator");

        THEMES.forEach((t) => { calc.removeClass(`calculator-${t}`); });

        calc.addClass("calculator-" + theme);
    }

    setTheme(theme) {
        if (!this.isValidTheme(theme)) {
            return;
        }

        this.saveInCookies(theme);
        this.changeTheme(theme);
    }
}

export default Themer;