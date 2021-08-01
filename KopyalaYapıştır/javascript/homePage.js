$("#büyüteçButton").click(function () {
    var a = "";
    a = $("#büyüteçTextarea").val().toUpperCase();
    $("#büyüteçTextarea").val(a);
})
$("#microscopeButton").click(function () {
    var a = "";
    a = $("#büyüteçTextarea").val().toLowerCase();
    $("#büyüteçTextarea").val(a);
})
$("#capitalButton").click(function () {
    var str = $("#büyüteçTextarea").val();
    str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    $("#büyüteçTextarea").val(str);
})