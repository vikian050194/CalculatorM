import AutoresizeText from "./../ui/autoresize-text";
import { SETTINGS } from "../constants";

function UpdateUI(state) {
    var queries = [];
    if (state.query.indexOf(" = ") >= 0) {
        queries = (state.query).split(" = ");
        queries[0] += " =";
        queries[1] = "= " + queries[1];
    } else {
        if (state.query.indexOf(" \u2630 ") >= 0) {
            queries = (state.query).split(" \u2630 ");
            queries[0] += " \u2630";
            queries[1] = "\u2630 " + queries[1];
        } else {
            var modIndex = state.query.indexOf("mod");
            if (modIndex >= 0) {
                queries[0] = state.query.slice(0, modIndex - 1);
                queries[1] = state.query.slice(modIndex);
            } else {
                queries[0] = state.query;
            }
        }
    }

    $("#query").val(queries[0]);

    if (queries[1] !== undefined) {
        $("#result").val(queries[1]);
    } else {
        $("#result").val("");
    }
    AutoresizeText();

    var cookiesSettings = {
        expires: 31
    };

    Cookies.set(SETTINGS.POSITIVE, state.positiveCookie, cookiesSettings);
    Cookies.set(SETTINGS.MODULE, state.moduleCookie, cookiesSettings);
}

export default UpdateUI;