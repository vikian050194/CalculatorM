function AutoresizeText() {
    var elements = $('.resize');
    if (elements.length < 0) {
        return;
    }
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
        var el = elements[_i];
        (function(el) {
            var reduceText = function() {
                var elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
                return $(el).css('font-size', elNewFontSize);
            };
            var enlargeText = function() {
                var elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) + 1) + 'px';
                return $(el).css('font-size', elNewFontSize);
            };
            var size = parseInt($(el).css('font-size').slice(0, -2));
            while (size / 1.65 * el.value.length > el.clientWidth) {
                reduceText();
                size = parseInt($(el).css('font-size').slice(0, -2));
            }
            while (size / 1.65 * el.value.length < el.clientWidth && size < el.clientHeight / 1.5) {
                enlargeText();
                size = parseInt($(el).css('font-size').slice(0, -2));
            }
        })(el);
    }
}