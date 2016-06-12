function Themer() {
    var themes = ['blue', 'gray', 'russia-dark', 'russia-light', 'green-light'];
    var loader = new Loader();
    function saveInCookies() {
        Cookies.set("theme", currentThemeIndex, { expires: 31 });
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

    var currentThemeIndex = Cookies.get("theme");

    if (currentThemeIndex == undefined || currentThemeIndex != undefined && currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
        saveInCookies();
    }
    loadCurrentTheme();
}