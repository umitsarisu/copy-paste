"use strict";
$("#büyüteçButton").on("click", function () {
    var a = "";
    a = $("#büyüteçTextarea").val().toUpperCase();
    $("#büyüteçTextarea").val(a);
});
$("#microscopeButton").click(function () {
    var a = "";
    a = $("#büyüteçTextarea").val().toLowerCase();
    $("#büyüteçTextarea").val(a);
});
$("#capitalButton").click(function () {
    var str = $("#büyüteçTextarea").val();
    str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    $("#büyüteçTextarea").val(str);
});
function pageTransition(x) {
    $("iframe").addClass("none");
    $("section").addClass("none");
    if (x == 0) { $("section").removeClass("none"); }
    else if (x == 1) { $("iframe[src='CopyPaste/pages/copy-paste/copy-paste.html']").removeClass("none"); }
    else if (x == 2) { $("iframe[src='CopyPaste/pages/spare-parts/spare-parts.html']").removeClass("none"); }
    else if (x == 3) { $("iframe[src='CopyPaste/pages/cari-kodlar/cari-kodlar.html']").removeClass("none"); }
    else if (x == 4) { $("iframe[src='CopyPaste/pages/forms/device-register-form.html']").removeClass("none"); }
    else if (x == 5) { $("iframe[src='CopyPaste/pages/forms/run-in-form.html']").removeClass("none"); }
}