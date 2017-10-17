const characterWidthScale = 0.6;
const characterHeightScale = 0.66;

function AutoresizeText() {
    var elements = $('.resize');
    if (elements.length < 0) {
        return;
    }

    for (_i = 0, _len = elements.length; _i < _len; _i++) {
        var element = elements[_i];

        (function (element) {
            var reduceText = function () {
                var elNewFontSize = (parseInt($(element).css('font-size').slice(0, -2)) - 1) + 'px';
                return $(element).css('font-size', elNewFontSize);
            };
            var enlargeText = function () {
                var elNewFontSize = (parseInt($(element).css('font-size').slice(0, -2)) + 1) + 'px';
                return $(element).css('font-size', elNewFontSize);
            };

            var fontSize = parseInt($(element).css('font-size').slice(0, -2));
            var elementWidth = element.clientWidth;
            var elementHeight = element.clientHeight;
            var charactersCount = element.value.length;

            while (fontSize * characterWidthScale * charactersCount > elementWidth) {
                reduceText();
                fontSize = parseInt($(element).css('font-size').slice(0, -2));
            }
            while (fontSize * characterWidthScale * charactersCount < elementWidth && fontSize < elementHeight * characterHeightScale) {
                enlargeText();
                fontSize = parseInt($(element).css('font-size').slice(0, -2));
            }
        })(element);
    }
}

module.exports = AutoresizeText;