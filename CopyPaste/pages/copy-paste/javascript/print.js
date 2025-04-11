function print() {
    $("#tamirKodu").val(PrintObj.repair_codes.join(" - ").toLocaleUpperCase("en"))
    $("#errorHistoryLogs").val(PrintObj.error_history_logs.toLocaleUpperCase("en"))
    $("#cihazinDurumu").val(PrintObj.device_situation.toLocaleUpperCase("en"));
    if (VisualObj.damaged_part_names.length == 0) {
        $("#cihazinDurumu").hide();
    }
    else {
        $("#cihazinDurumu").show();
    }
    $("#runInTestResult").val(PrintObj.run_in_test_result.toLocaleUpperCase("en"));
    $("#bulgular").val(PrintObj.findings.join(", ").toLocaleUpperCase("en"));
    $("#primary").val(PrintObj.primary.toLocaleUpperCase("en"));
    $("#secondary").val(PrintObj.secondary.toLocaleUpperCase("en"));
    $("#degisenParca").val(PrintObj.changed_parts.length != 0 ? PrintObj.changed_parts.join(", ").toLocaleUpperCase("en") : "N/A");
    $("#analizKodu").val(PrintObj.analysis_codes.join(" - ").toLocaleUpperCase("en"));
    $("#arastirmaKodu").val(PrintObj.investigation_codes.join(" - ").toLocaleUpperCase("en"));
    printRvg();
    $("#probableCause").val(PrintObj.probable_causes.join(", ").toLocaleUpperCase("en"));
    $("#ekYorum").val(PrintObj.more_comment.join(", ").toLocaleUpperCase("en"));
    $("#yorum").val(PrintObj.first_sentence + "\n" + PrintObj.comment.join("\n").toLocaleUpperCase("en"));
    let count = 0;
    PrintObj.comment.map(item => count += item.length)
    $("#charactersCount").text(count + PrintObj.first_sentence.length + " characters");
    if (PrintObj.changed_parts.includes("N/A")) {
        degisenParca.classList.remove("bg-light");
        degisenParca.classList.add("sonucSectionColor");
    }
    // result page radio buttons
    for (i = 0; i < $('[name = "resultRadio"]').length; i++) {
        $('[name = "resultRadio"]').eq(i).prop("checked", false).attr("disabled", "disabled")
    }
    if (PrintObj.is_approved == true) {
        $("#resultYes").prop("checked", true).prop("disabled", false);
    }
    else if (PrintObj.is_approved == false) {
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
    $(".rvg").append('<p class="rvg2p m-auto"><button onclick="copyPsi(' + RvgObj.rv6psi + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + RvgObj.rv6psi + '</button></p>');
    $(".rvg").append('<p class="rvg2p m-auto mt-3"><button onclick="copyPsi(' + RvgObj.rv10psi + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + RvgObj.rv10psi + '</button></p>');
    $(".egt").append('<p class="egt2p">' + RvgObj.rv1 + '</p><p class="egt2p">' + RvgObj.rv2 + '</p><p class="egt2p">' + RvgObj.rv3 + '</p><p class="egt2p">' + RvgObj.rv4 + '</p><p class="egt2p">' + RvgObj.rv5 + '</p>');
}
const copyPsi = (psi) => {
    let clipboard = document.createElement("textarea");
    clipboard.value = psi.toFixed(2) + " PSI";
    document.body.appendChild(clipboard);
    clipboard.select();
    document.execCommand("copy");
    document.body.removeChild(clipboard);
}
