function print() {
    $("#tamirKodu").val(PrintObj.repair_codes.join(" - ").toLocaleUpperCase("en"))
    $("#errorHistoryLogs").val(PrintObj.error_history_logs.toLocaleUpperCase("en"))
    $("#cihazinDurumu").val(PrintObj.device_situation.toLocaleUpperCase("en"));
    $("#cihazinDurumu").val() != "" ? $("#cihazinDurumu").show() : $("#cihazinDurumu").hide();
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
    // Mekanizma Tamir ve Olağandışı Durum Bilgisi
    $("#repairedMechanism").hide();
    $("#unusualSituation").show();
    if (PrintObj.repairedMechanism == true) {
        $("#repairedMechanism").show();
    }
    if (PrintObj.unusualSituation == false) {
        $("#unusualSituation").hide();
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
    const makeRVGHtml = (range, psi) => {
        return `
            <div class="d-flex justify-content-between">
                <div style="width:95px" class="d-flex justify-content-between">
                    <span class="font-monospace">${range}</span>
                    <span>=></span>
                </div>
                <button onclick="copyPsi(${psi})" style="width: 80px; text-align: center" 
                class="btn btn-outline-dark fw-bold">${psi}</button>                    
            </div>`
    }
    const makeEGTHtml = (range, value) => {
        return `
            <div class="d-flex justify-content-between">
                <div style="width:75px" class="d-flex justify-content-between">
                    <span class="font-monospace">${range}</span>
                    <span>=></span>
                </div>
                <span class="fw-bold">${value}</span>
            </div>`
    }
    $(".rvg").append(makeRVGHtml("3-9 PSI", PrintObj.rv6psi));
    $(".rvg").append(makeRVGHtml("7-13 PSI", PrintObj.rv10psi));
    $(".egt").append(makeEGTHtml("100µA", PrintObj.rv1));
    $(".egt").append(makeEGTHtml("500µA", PrintObj.rv2));
    $(".egt").append(makeEGTHtml("500µA", PrintObj.rv3));
    $(".egt").append(makeEGTHtml("1000µA", PrintObj.rv4));
    $(".egt").append(makeEGTHtml("200mΩ", PrintObj.rv5));
}
const copyPsi = (psi) => {
    let clipboard = document.createElement("textarea");
    clipboard.value = psi.toFixed(2) + " PSI";
    document.body.appendChild(clipboard);
    clipboard.select();
    document.execCommand("copy");
    document.body.removeChild(clipboard);
}
