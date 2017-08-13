function CalculatorUI() {
    //var calculator = new Calculator();
	var pageHandler = new PageHandler();

    var init = function () {
        var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var operators = ['add', 'mul', 'sub', 'div', 'mod', 'pow', 'calc'];
        var memory = ['memoryAdd', 'memoryClear', 'memoryRecall'];

        var foo = function (method, values) {
            for (var i = 0; i <= values.length; i++) {
                (function () {
                    var value = values[i];
                    var id = '#' + value;
                    $(id).on('click', function (e) {
                        //calculator[method](value);
                    });
                })();
            }
        };

        //foo('digit', digits);
        //foo('operator', operators);
        //foo('memory', memory);
        
        // $('#clear').on('click', function () {
        //     $(document).trigger('clear');
        // });

        // $('#backward').on('click', function () {
        //     $(document).trigger('backward');
        // });

        // $('#nextTheme').on('click', function () {
        //     $(document).trigger(commonAction, args('theme'));
        // });

        // $('#setMod').on('click', function () {
        //     $(document).trigger(commonAction, args('setMod'));
        // });
		
		
		$('#left-arrow').on('click', function() {
			pageHandler.setPage(pageHandler.getCurrentPageNumber() - 1);
		});
		$('#right-arrow').on('click', function() {
			pageHandler.setPage(pageHandler.getCurrentPageNumber() + 1);
		});
    }

    init();
}