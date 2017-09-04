function Themer() {
    var themes = ['blue', 'gray', 'russia'];
    var id = 'theme';

    function saveInCookies() {
        Cookies.set(id, currentThemeIndex, {expires: 31});
    }

    function changeTheme(themeIndex) {
        var calc = $('#calculator');
        var oldTheme = calc.attr('class');
        calc.removeClass(oldTheme).addClass('calculator-' + themes[themeIndex]);
    }

    this.setTheme = function (theme) {
        if (themes.indexOf(theme) < 0) {
            return;
        }
        saveInCookies();
        changeTheme(themes.indexOf(theme));
    };

    var currentThemeIndex = Cookies.get(id);

    if (currentThemeIndex == undefined || currentThemeIndex != undefined && currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
        saveInCookies();
    }
    else if (currentThemeIndex != 0) {
        changeTheme(currentThemeIndex);
    }

    var changeThemeSelect = $('#changeTheme');
    changeThemeSelect[0].selectedIndex = currentThemeIndex;
}