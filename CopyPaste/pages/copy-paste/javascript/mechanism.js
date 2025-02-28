mechanismObj = {
    errorCode: "",
    testFail: "",
    calibrated: "",
    replaced: [],
    appSN: "",
    driverPwaSN: ""
}
errorCodes = {
    CATCodes: [],
    POTCode: ""
}
const mechanism = () => {
    mechanismObj.errorCode = $("#mechanismErrorCode").val().toUpperCase();
    mechanismObj.testFail = $("#testFail").val();
    mechanismObj.calibrated = $('input[name="calibration"]:checked').val();
    mechanismObj.replaced = $("input:checkbox[name=replacedParts]:checked").map(function () {
        return $(this).val();
    }).toArray();;
    mechanismObj.appSN = $("#appSN").val().toUpperCase();
    mechanismObj.driverPwaSN = $("#driverPwaSN").val().toUpperCase();
    if (mechanismObj.testFail == "CASSETTE ALARM TEST") {
        errorCodes.CATCodes.push(mechanismObj.errorCode)
    }
    else {
        errorCodes.POTCode = mechanismObj.errorCode;
    }
}

$("#mechanismForm").submit(function (e) {
    e.preventDefault();
    $('#checkicon3').show();
    mechanismBool = true;
})
$("#mechanismForm").find(":reset").click(() => {
    $('#checkicon3').hide();
    mechanismBool = true;
})
$("#mechanismForm").change(() => {
    $('#checkicon3').hide();
    mechanismBool = false;
})
