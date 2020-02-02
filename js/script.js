//#region Start functions
loadStyleSheet();
//#endregion

//#region Style functions
function loadStyleSheet() {
    var got = localStorage.getItem("theme");
    if (got == "white") {
        swapStyleSheet("css/styleWhite.css");
        styleSheetWhite = true;
    } else {
        swapStyleSheet("css/styleDark.css");
        styleSheetWhite = false;
    }
}

var styleSheetWhite;
function toggleStyleSheet() {
    styleSheetWhite = !styleSheetWhite;
    if (styleSheetWhite) {
        swapStyleSheet("css/styleWhite.css");
        localStorage.setItem("theme", "white");
    } else {
        swapStyleSheet("css/styleDark.css");
        localStorage.setItem("theme", "dark");
    }
}

function swapStyleSheet(sheet) {
    document.getElementById("stylesheetBase").setAttribute("href", sheet);
}
//#endregion

