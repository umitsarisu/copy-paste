function print() {
    console.log(resultObj)
    $("#tamirKodu").val(resultObj.repairCodes.join(" - "))
    $("#errorHistoryLogs").val(resultObj.errorHistoryLogs)
    $("#cihazinDurumu").val(resultObj.deviceSituation);
    if (damaged.length == 0) {
        $("#cihazinDurumu").hide();
    }
    else {
        $("#cihazinDurumu").show();
    }
    $("#runInTestResult").val(resultObj.runInTestResult);
    $("#bulgular").val(resultObj.findings.join(", "));
    $("#primary").val(resultObj.primary);
    $("#secondary").val(resultObj.secondary);
    $("#degisenParca").val(resultObj.changedParts.join(", ").toUpperCase());
    $("#analizKodu").val(resultObj.analysisCodes.join(" - "));
    $("#arastirmaKodu").val(resultObj.investigationCodes.map((item) => {
        if (item == "SXC") return resultObj.customerExperience;
        else return item;
    }).join(" - "));
    $("#pumpTests").val(pumpTestsArray.join(" - "));
    printRvg();
    $("#probableCause").val(resultObj.probableCauses.join(", "));
    $("#ekYorum").val(resultObj.moreComment.join(", "));
    $("#yorum").val(resultObj.comment.join(", "));
    if (changedPartsArray.includes("N/A")) {
        degisenParca.classList.remove("bg-light");
        degisenParca.classList.add("sonucSectionColor");
    }
    // result page radio buttons
    for (i = 0; i < $('[name = "resultRadio"]').length; i++) {
        $('[name = "resultRadio"]').eq(i).prop("checked", false).attr("disabled", "disabled")
    }
    if (resultObj.isApproved == true) {
        $("#resultYes").prop("checked", true).prop("disabled", false);
    }
    else if (resultObj.isApproved == false) {
        $("#resultNo").prop("checked", true).prop("disabled", false);
    }
    else {
        $("#resultDifferent").prop("checked", true).prop("disabled", false);
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

const printRvg = () => {
    $(".rvg").empty();
    $(".egt").empty();
    $(".rvg").append('<p class="rvg2p m-auto"><button onclick="copyPsi(' + rvgObj.rv6psi + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + rvgObj.rv6psi + '</button></p>');
    $(".rvg").append('<p class="rvg2p m-auto mt-3"><button onclick="copyPsi(' + rvgObj.rv10psi + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + rvgObj.rv10psi + '</button></p>');
    $(".egt").append('<p class="egt2p">' + rvgObj.rv1 + '</p><p class="egt2p">' + rvgObj.rv2 + '</p><p class="egt2p">' + rvgObj.rv3 + '</p><p class="egt2p">' + rvgObj.rv4 + '</p><p class="egt2p">' + rvgObj.rv4 + '</p>');
}
const copyPsi = (psi) => {
    let clipboard = document.createElement("textarea");
    clipboard.value = psi.toFixed(2) + " PSI";
    document.body.appendChild(clipboard);
    clipboard.select();
    document.execCommand("copy");
    document.body.removeChild(clipboard);
}
