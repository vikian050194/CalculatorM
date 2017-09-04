function applyMenu(themer) {
    $('#changeTheme').on('change', function () {
        var optionIndex = this.selectedIndex;

        themer.setTheme(optionIndex);
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