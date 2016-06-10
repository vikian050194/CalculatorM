function Themer() {
    var themes = ['blue', 'gray', 'multi', 'pastel'];
    var loader = new Loader();

    function nextIndex() {
        currentThemeIndex++;
        currentThemeIndex %= themes.length;
        $.cookie("theme", currentThemeIndex);
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
        loadCurrentTheme();
    }

    var currentThemeIndex = $.cookie("theme");
    if (currentThemeIndex != undefined) {
        loadCurrentTheme();
    } else {
        currentThemeIndex = 0;
        $.cookie("theme", currentThemeIndex);
    }
}