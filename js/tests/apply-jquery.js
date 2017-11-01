function applyJQuery() {
    var jsdom = require('jsdom-global')();
    $ = require('jquery');
    jsdom();
}

module.exports = applyJQuery;