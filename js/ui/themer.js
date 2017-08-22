function Themer() {
    var themes = ['blue', 'gray', 'russia'];
    var id = 'theme';

    function saveInCookies() {
        Cookies.set(id, currentThemeIndex, {expires: 31});
    }

    function nextIndex() {
        currentThemeIndex++;
        currentThemeIndex %= themes.length;
    }

    function getClass() {
        var result = 'calculator-' + themes[currentThemeIndex];
        return result;
    }

    function changeTheme() {
        var calc = $('#calculator');
        var oldTheme = calc.attr('class');
        var newTheme = getClass();
        calc.removeClass(oldTheme).addClass(newTheme);
    }

    this.next = function () {
        nextIndex();
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
}