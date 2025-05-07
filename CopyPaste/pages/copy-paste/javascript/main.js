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

const getAllPreviousForms = () => {
    return JSON.parse(localStorage.getItem("printObj"));
}
const setPreviousForms = (payload) => {
    let previousForms = [];
    if (localStorage.getItem("printObj") != null
        && localStorage.getItem("printObj") != undefined) {
        previousForms = getAllPreviousForms();
    }
    previousForms.push(payload);
    if (previousForms.length == 6) {
        previousForms.splice(0, 1);
    }
    localStorage.setItem("printObj", JSON.stringify(previousForms));
    writePreviousForms();
}
const writePreviousForms = () => {
    $("#dropdownOptions").empty();
    let previousForms = getAllPreviousForms();
    if (previousForms != null) {
        previousForms.reverse();
        previousForms.map(form => {
            let previousArr = [form.date_previous_form, form.repair_codes.join(", ")]
            $("#dropdownOptions").append(`
                <li>
                    <button class="btn btn-primary m-1" value="${previousArr.join()}" onclick="previousForm('${previousArr.join()}')">
                        <span class="text-warning">${previousArr[1]}</span>
                        <span>${previousArr[0]}</span>
                    </button>
                </li>
            `)
        })
    }
}
writePreviousForms();
const getPreviousForms = (repair_codes) => {
    let previousForms = getAllPreviousForms();
    previousForms.filter(form => {
        if (repair_codes == [form.date_previous_form, form.repair_codes.join(", ")].join()) {
            return PrintObj = form;
        }
    })
    print();
}
const previousForm = (payload) => {
    getPreviousForms(payload);
}
$("ul#dropdownOptions li button").on("click", function () {
    getPreviousForms($(this).val());
})
const plum360Click = () => {
    $(".bgColor").css("background", color.plum360);
    setVisualOptions();
    VisualObj.damaged_parts = [];
    VisualObj.damaged_part_names = [];
    setOtherParts("Plum 360");
    $("#showVisual").val("")
    $("#checkicon2").hide();
}
const plumAClick = () => {
    $(".bgColor").css("background", color.plumA);
    setVisualOptions();
    VisualObj.damaged_parts = [];
    VisualObj.damaged_part_names = [];
    setOtherParts("Plum A");
    $("#showVisual").val("")
    $("#checkicon2").hide();
}
$("#plumA").click(() => plumAClick())
$("#plum360").click(() => plum360Click())

// Main Page Buttons
$(function () {
    $("#forwardButton").click(function () {
        $("#mainPage").hide();
        $("#sonuc").show();
        $("#backwardButton").show();
        $("#previousFormsButton").show();
        $("#forwardButton").hide();
    })
    $("#backwardButton").click(function () {
        $("#mainPage").show();
        $("#sonuc").hide();
        $("#backwardButton").hide();
        $("#previousFormsButton").hide();
        $("#forwardButton").show();
        $("#dropdownOptions").hide();
    })
    $("#previousFormsButton").click(function () {
        $("#dropdownOptions").toggle();
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
        $("#liVI").click();
        $("#footer1").show();
        $("#plum360").is(":checked") ? plum360Click() : plumAClick();
        $("#deviceİnfoForm").show();
    })
    // Bulgular
    function active(x) {
        $("#liVI").removeClass("bg-success text-light");
        $("#liOP").removeClass("bg-success text-light");
        $("#liMC").removeClass("bg-success text-light");
        $(x).addClass("bg-success text-light");
    }
    $("#liVI").click(function () {
        active(this);
        testShow("#visualInspection");
    })
    $("#liOP").click(function () {
        active(this);
        testShow("#otherSpareParts")
    })
    $("#liMC").click(function () {
        active(this);
        testShow("#mechanismForm")
    })
    $("#otherPartsToggle").click(function () {
        $("#otherForm").toggle();
    })
})
let testShow = (x) => {
    $("#visualInspection").hide();
    $("#mechanismForm").hide();
    $("#otherSpareParts").hide();
    $(x).show();
}
function mainPageFormsVerification() {
    $("#previousFormsButton").show();
    if ($("#no1").is(":checked")) {
        if (VisualObj.visual_bool == true) {
            if (mechanismBool == true) {
                if (otherPartsBool == true) {
                    $("#backwardButton").show();
                    $("#forwardButton").hide();
                    result();
                }
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