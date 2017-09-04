function Themer() {
    var themes = ['blue', 'gray', 'russia'];
    var id = 'theme';

    function saveInCookies() {
        Cookies.set(id, currentThemeIndex, {expires: 31});
    }

    function changeTheme() {
        var calc = $('#calculator');
        var oldTheme = calc.attr('class');
        calc.removeClass(oldTheme).addClass('calculator-' + themes[currentThemeIndex]);
    }

    this.setTheme = function (themeIndex) {
        if (themeIndex < 0 || themeIndex >= themes.length) {
            return;
        }
		currentThemeIndex = themeIndex;
        saveInCookies();
        changeTheme();
    };

    var currentThemeIndex = Cookies.get(id);

    if (currentThemeIndex == undefined || currentThemeIndex != undefined && currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
        saveInCookies();
    }
    else if (currentThemeIndex != 0) {
        changeTheme();
    }

    var changeThemeSelect = $('#changeTheme');
    changeThemeSelect[0].selectedIndex = currentThemeIndex;
}