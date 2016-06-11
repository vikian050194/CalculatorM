function Themer() {
    var themes = ['blue', 'gray', 'multi', 'pastel', 'russia', 'light'];
    var loader = new Loader();
    function saveInCookies() {
        $.cookie("theme", currentThemeIndex, { expires: 31 });
    }
    function nextIndex() {
        currentThemeIndex++;
        currentThemeIndex %= themes.length;
    }
    function getHref() {
        var result = 'css/themes/' + themes[currentThemeIndex] + '.css';
        return result;
    }
    function loadCurrentTheme() {
        var href = getHref();
        var filetype = 'css';
        var id = 'theme';
        $('#' + id).remove();
        loader.load(href, filetype, id);
    }

    this.next = function () {
        nextIndex();
        saveInCookies();
        loadCurrentTheme();
    }

    var currentThemeIndex = $.cookie("theme");
    if (currentThemeIndex == undefined) {
        currentThemeIndex = 0;
        saveInCookies();
        loadCurrentTheme();
    }
    if (currentThemeIndex != 0) {
        loadCurrentTheme();
    }
}