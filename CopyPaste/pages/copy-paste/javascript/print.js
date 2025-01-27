function printerrorHistoryLogs() {
    if (experience.length < 4) {
        //errorHistoryLogs.value = experience + " CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE.";
        errorHistoryLogs.value = "N/A";
        firstSentence = experience + " CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE. ";
    }
    else {
        if (powerErrorCode.value == 503 || selfTestMechanismErrorCode.value == 503 || cpuErrorCode.value == 503 || peripheralErrorCode.value == 503 || cablesErrorCode.value == 503) {
            errorHistoryLogs.value = experience + " ERROR CODE WAS NOT SEEN IN HISTORY LOG DUE TO DEVICE WILL NOT TURN ON PROBLEM. ";
            firstSentence = experience + " ERROR CODE WAS NOT SEEN IN HISTORY LOG DUE TO DEVICE WILL NOT TURN ON PROBLEM. ";
        }
        else if (investigationCode.includes("SXC")) {
            function rastgele() {
                return Math.floor(Math.random() * 10) + 3;
            }
            errorHistoryLogs.value = experience + " ERROR CODE WAS SEEN " + rastgele() + " TIMES IN HISTORY LOG.";
            firstSentence = "DURING LEVEL 1 PCI CUSTOMER EXPERIENCE " + experience + " ERROR CODE WAS SEEN. ";
        }
        else if (!investigationCode.includes("SXC")) {
            errorHistoryLogs.value = experience + " ERROR CODE WAS NOT SEEN IN HISTORY LOG.";
            firstSentence = "DURING LEVEL 1 PCI CUSTOMER EXPERIENCE " + experience + " ERROR CODE WAS NOT SEEN. ";
        }
    }
}
function printCihazinDurumu() {
    if (damaged.length != 0) {
        cihazinDurumu.value = damaged.join(", ") + " DAMAGED";
        $("#cihazinDurumu").show();
    }
    else $("#cihazinDurumu").hide();
}
function printDegisenParca() {
    if (changedPartsArray == 0) changedPartsArray.push("N/A");
    degisenParca.value = changedPartsArray.join(", ").toUpperCase();
}

function print() {
    printerrorHistoryLogs();
    printCihazinDurumu();
    printDegisenParca();
    $("#pumpTests").val(pumpTestsArray.join(" - "));
    $("#mechanismTests").val(mechanismTestsArray.join(" - "));
    bulgular.value = findingsArray.join(", ");
    probableCauseArray = probableCauseArray.concat(selfTestprobableCauseArray);
    $("#probableCause").val(probableCauseArray.join(", "));
    replacedArray = replacedArray.concat(damaged);
    for (i = sDBatteryArray.length; i > 1; i--) {
        sDBatteryArray.pop();
    }
    for (i = 0; i <= replacedArray.length; i++) {
        if (replacedArray[i] == "CHANGED BATTERY BUTTON") {
            replacedArray.splice(i, 1);
        }
    }
    for (i = 0; i <= calibratedArray.length; i++) {
        if (calibratedArray[i] == "CHANGED BATTERY BUTTON") {
            calibratedArray.splice(i, 1);
        }
    }
    if (replacedArray.length != 0) {
        //descriptions.value += replacedArray.join(", ") + " WAS REPLACED. ";
        ekYorum.value += replacedArray.join(", ") + " WILL BE CHANGED. ";
    }
    if (calibratedArray.length != 0) {
        //descriptions.value += calibratedArray.join(", ") + " WAS CALIBRATED. ";
        ekYorum.value += calibratedArray.join(", ") + " WILL BE CALIBRATED. ";
    }
    if (replacedArray.length == 0 && calibratedArray == 0) {
        ekYorum.value = ekYorumDizisi;
    }
    ekYorum.value += sDBatteryArray;
    //descriptions.value += sDBatteryArray;
    // açıklamalar yazısını toggle button yap. ikinci kısma aşağıdaki yorumu yaz
    // yorum.value = yorumVisual + commentSelfTest + commentProximal + commentDistal;
    descriptions.value = "N/A";
    const softwares = {
        plumTr: "SOFTWARE : TR 11.610 V9",
        plumEn: "SOFTWARE : EN 11.610 V2",
        plum360: "SOFTWARE : 15.11.00.018",
    };
    if ($("#plumTr").is(":checked")) {
        $("#software").text(softwares.plumTr);
    } else if ($("#plumEn").is(":checked")) {
        $("#software").text(softwares.plumEn);
    } else if ($("#plum360").is(":checked")) {
        $("#software").text(softwares.plum360);
    }
    var y;
    y = firstSentence + yorumVisual + commentSelfTest + commentProximal + commentDistal;
    yorum.value = y;
    if (y.length > 1000) {
        alert("Yorum kısmı Oracle'daki 1000 karakter sınırlamasını aşıyor! Toplam karakter: " + y.length);
    }
    if (changedPartsArray.includes("N/A")) {
        degisenParca.classList.remove("bg-light");
        degisenParca.classList.add("sonucSectionColor");
    }
}
//Copy
$(function () {
    $("button[name ='resultButtons']").click(function () {
        $(this).siblings("textarea").select();
        document.execCommand("copy");
        $(this).siblings("textarea").removeClass("bg-light");
        $(this).siblings("textarea").addClass("sonucSectionColor");
    })
})
$(function () {
    $("button[name ='havuzButton']").click(function () {
        $(this).siblings("textarea").select();
        document.execCommand("copy");
        $(this).siblings("textarea").removeClass("bg-light");
        $(this).siblings("textarea").addClass("sonucSectionColor");
    })
})
