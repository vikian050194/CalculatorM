Date.prototype.addDays = function(days)
{
    var result = new Date(this.valueOf());
    result.setDate(result.getDate() + days);
    return result;
}

function Cookier() {
    this.getCookie = function (name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    this.setCookie = function (name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    this.deleteCookie = function (name) {
        setCookie(name, "", {
            expires: -1
        })
    }
}

function Themer() {
    var themes = ['blue', 'gray', 'multi', 'pastel', 'russia-dark', 'russia-light', 'light'];
    var loader = new Loader();
    var cookier = new Cookier();
    function saveInCookies() {
        cookier.setCookie("theme", currentThemeIndex, { expires: new Date().addDays(31) });
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

    var currentThemeIndex = cookier.getCookie("theme");
    if (currentThemeIndex == undefined) {
        currentThemeIndex = 0;
        saveInCookies();
        loadCurrentTheme();
    }
    if (currentThemeIndex != 0) {
        loadCurrentTheme();
    }
}