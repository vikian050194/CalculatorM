function applyMenu(themer) {
    $('#changeTheme').on('change', function () {
        var option = this.selectedOptions[0].innerHTML;

        themer.setTheme(option.toLowerCase());
    });

    $("#positive").change(function () {
        if (this.checked) {
            Cookies.set('positive', true, {expires: 31});
        } else {
            Cookies.set('positive', false, {expires: 31});
        }
    });

    $("#module").change(function () {
        if (this.checked) {
            Cookies.set('module', true, {expires: 31});
        } else {
            Cookies.set('module', false, {expires: 31});
        }
    });
}