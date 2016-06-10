function Themer() {
    var themes = ['blue', 'gray'];
    var index = 0;
    var loader = new Loader();
    var nextIndex = function () {
        index++;
        index %= themes.length;
    }
    var getHref = function () {
        var result = 'css/themes/' + themes[index] + '.css';
        return result;
    }
    this.next = function () {
        nextIndex();
        var href = getHref();
        var filetype = 'css';
        var id = 'theme';
        $('#' + id).remove();
        loader.load(href, filetype, id);
    }
}