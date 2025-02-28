function enterKeyPress(e) {
    /*Enter tuşuna basıldığında fonksiyonu çalıştırıp false döndürdüğü için sayfayı yenilemiyor.*/
    if (e.keyCode === 13) return false;
}
//Yine bekleriz fonksiyonu
function pageReset() {
    document.location.reload();
}
//Seri Numarası girilen yerlerde auto complate kapalı//
$(function () {
    $("input[placeholder='Seri Numarası'").attr('autocomplete', 'off');
})
// Background Color Atamaları
const color = {
    // plumA: "linear-gradient(to bottom, #7abcff 0%,#4096ee 17%,#4096ee 17%,#4096ee 31%,#4096ee 44%,#4096ee 53%,#60abf8 76%,#4096ee 94%)",
    plumA: "linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 15%,rgba(0,174,255,1) 53%,rgba(43,136,217,1) 86%,rgba(43,136,217,1) 88%,rgba(43,136,217,1) 92%,rgba(43,136,217,1) 100%)",
    plum360: "linear-gradient(to bottom, rgba(147,83,163,1) 0%,rgba(173,109,214,1) 20%,rgba(173,109,214,1) 29%,rgba(147,83,163,1) 52%,rgba(173,109,214,1) 75%,rgba(173,109,214,1) 83%,rgba(147,83,163,1) 100%)",
    contentColor: "rgba(202, 211, 200,0.5)"
}
$(".bgColor").css("background", color.plumA);
$(".bgColor").css("background", color.plumA);
$(".models:nth(0)").css("background", color.plumA);
// $(".models:nth(0)").css("background", color.plumA);
$(".models:nth(1)").css("background", color.plum360);
$(".contentBgColor").css("background", color.contentColor);

const plum360Click = () => {
    $(".bgColor").css("background", color.plum360);
    $("#brackethandle").prop("disabled", false);
    $("#tubingguide").prop("disabled", false);
}
const plumAClick = () => {
    $(".bgColor").css("background", color.plumA);
    $("#brackethandle").prop("disabled", true);
    $("#tubingguide").prop("disabled", true);
}
$("#plumA").click(() => plumAClick())
$("#plum360").click(() => plum360Click())

// Main Page Buttons
$(function () {
    $("#forwardButton").click(function () {
        $("#mainPage").hide();
        $("#sonuc").show();
        $("#backwardButton").show();
        $("#forwardButton").hide();
    })
    $("#backwardButton").click(function () {
        $("#mainPage").show();
        $("#sonuc").hide();
        $("#backwardButton").hide();
        $("#forwardButton").show();
    })
    $("#deviceİnfoForm").submit(function () {
        $("#isIt950").css("display", "flex");
    })
    // Cihaz sağlam
    $("#yes1").click(function () {
        $("#findings").hide();
        $("#theTests").hide();
        $("#footer1").show();
        $("#plumA").click(() => plumAClick())
        $("#plum360").click(() => plum360Click())
    })
    // Cihazda arıza görüldü
    $("#no1").click(function () {
        $("#findings").show();
        $("#theTests").show();
        $("#visualInspection").show();
        active("#liVI");
        $("#footer1").show();
        $("#plum360").is(":checked") ? plum360Click() : plumAClick();
    })
    // Bulgular
    function active(x) {
        $("#liVI").removeClass("bg-success text-light");
        $("#liOT").removeClass("bg-success text-light");
        $("#liMC").removeClass("bg-success text-light");
        $(x).addClass("bg-success text-light");
    }
    $("#liVI").click(function () {
        active(this);
        testShow("#visualInspection");
    })
    $("#liOT").click(function () {
        active(this);
        testShow("#otherSpareParts")
    })
    $("#liMC").click(function () {
        active(this);
        testShow("#mechanismForm")
    })
})
let testShow = (x) => {
    $("#visualInspection").hide();
    $("#mechanismForm").hide();
    $("#otherSpareParts").hide();
    $(x).show();
}
$("#battery").click(() => {
    if ($('#sDBattery').is(":checked") || $('#n252').is(":checked")) {
        alert("S.D. 305 ve N252 ile aynı anda seçilemez!")
        $('#battery').prop('checked', false)
    }
})
$("#sDBattery").click(() => {
    if ($('#battery').is(":checked") || $('#n252').is(":checked")) {
        alert("305 ve N252 ile aynı anda seçilemez!")
        $('#sDBattery').prop('checked', false)
    }
})
$("#n252").click(() => {
    if ($('#sDBattery').is(":checked") || $('#battery').is(":checked")) {
        alert("S.D. 305 ve 305 ile aynı anda seçilemez!")
        $('#n252').prop('checked', false)
    }
})
function mainPageFormsVerification() {
    if ($("#no1").is(":checked")) {
        if (visualBool == true) {
            if (mechanismBool == true) {
                if (powerBool == true) {
                    if (cpuBool == true) {
                        if (peripheralBool == true) {
                            if (cablesBool == true) {
                                $("#backwardButton").show();
                                $("#forwardButton").hide();
                                result();
                            }
                            else alert("Cables bilgileri gönderilmedi!")
                        }
                        else alert("Peripheral bilgileri gönderilmedi!")
                    }
                    else alert("CPU bilgileri gönderilmedi!")
                }
                else alert("Power bilgileri gönderilmedi!")
            }
            else alert("Mekanizma bilgileri gönderilmedi!")
        }
        else alert("Visual Inspection bilgileri gönderilmedi!")
    }
    else if ($("#yes1").is(":checked")) {
        $("#backwardButton").show();
        $("#forwardButton").hide();
        result();
    }
}
const resetFindings = () => {
    $("#visualInspection").find(":reset").click()
    $('#battery').prop('checked', false)
    $('#sDBattery').prop('checked', false)
    $('#n252').prop('checked', false)
    $('#e439').prop('checked', false)
    $('#e302').prop('checked', false)
    $('#n250Shield').prop('checked', false)
    $('#n250Asmdoor').prop('checked', false)
    $('#n250pivot').prop('checked', false)
    $('#n250handle').prop('checked', false)
    $('#n250link').prop('checked', false)
    $('#n251Asmdoor').prop('checked', false)
    $('#n251Shield').prop('checked', false)
    $('#n251pivot').prop('checked', false)
    $('#n251handle').prop('checked', false)
    $('#n251link').prop('checked', false)
    $('#power').prop('checked', false)
    $('#cpu').prop('checked', false)
    $('#peripheral').prop('checked', false)
    $('#cables').prop('checked', false)
    $('#battery').prop('checked', false)
    $('#battery').prop('checked', false)
    $('#battery').prop('checked', false)
    $('#battery').prop('checked', false)
    $('#battery').prop('checked', false)
    $("#powerForm").hide();
    $("#cpuForm").hide();
    $("#peripheralForm").hide();
    $("#cablesForm").hide();
    $("#powerForm").find(":reset").click();
    $("#cpuForm").find(":reset").click();
    $("#peripheralForm").find(":reset").click();
    $("#cablesForm").find(":reset").click();
    $("#mechanismForm").find(":reset").click();
}