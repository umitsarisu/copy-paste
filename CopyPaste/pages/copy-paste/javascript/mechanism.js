const MechanismParts = SpareParts.filter((item) => {
    if (item.definition == "Mekanizma" && item.isAvailable == "true") return item
});
const defaultMechanismObj = {
    error_code: "",
    test_fail: "",
    calibrated: "",
    replaced: [],
    app_sn: "",
    driver_pwa_sn: ""
}
let MechanismObj = JSON.parse(JSON.stringify(defaultMechanismObj))
const mechanism = () => {
    MechanismObj = JSON.parse(JSON.stringify(defaultMechanismObj))
    MechanismObj.error_code = $("#mechanismErrorCode").val().toUpperCase();
    MechanismObj.test_fail = $("#testFail").val();
    MechanismObj.calibrated = $('input[name="calibration"]:checked').val();
    const replaced = $("input:checkbox[name=replacedParts]:checked").map(function () {
        return $(this).val();
    }).toArray();
    replaced.map(rep_part => {
        MechanismParts.map(part => {
            if (part.name == rep_part) {
                MechanismObj.replaced.push(part)
            }
        })
    });
    MechanismObj.app_sn = $("#appSN").val().toUpperCase();
    MechanismObj.driver_pwa_sn = $("#driverPwaSN").val().toUpperCase();
}

$("#mechanismForm").submit(function (e) {
    e.preventDefault();
    if ($("#appReplaced").is(":checked") && $("#appSN").val() == "") {
        return alert("App Seri Numarasını Girin!");
    }
    if ($("#driverPwaReplaced").is(":checked") && $("#driverPwaSN").val() == "") {
        return alert("Driver Pwa Seri Numarasını Girin!");
    }
    mechanism();
    if (MechanismObj.calibrated == "" || MechanismObj.calibrated == undefined) {
        if (MechanismObj.replaced.length == 0){
            return alert("Mekanizmada Herhangi bir işlem yapmadınız. Mekanizma bilgilerini sıfırlamak için Reset'e basınız.")
        }
    }
    password_text = localStorage.getItem("password_text");
    if (password_text != "Berkcan") {
        if (MechanismObj.error_code.includes("N23")) {
            if (MechanismObj.test_fail != "PROXIMAL OCCLUSION TEST") {
                return alert("Bir şeyler yanlış görünüyor! Hava alarmlarında Proximal Occlusion Test Fail seçilmelidir.")
            }
            if (!($("#appCalibrated").is(":checked") || $("#appReplaced").is(":checked"))) {
                return alert("Proximal Occlusion Testte App ile ilgili bir işlem yapılması gerekmektedir. Eğer App arızalı değilse Cassette Alarm Testi seçin!")
            }
        }
        else {
            if (MechanismObj.test_fail != "CASSETTE ALARM TEST") {
                return alert("Bir şeyler yanlış görünüyor! Hava alarmı yoksa Cassette Alarm Test Fail seçilmelidir!")
            }
        }
    }
    $('#checkicon3').show();
    mechanismBool = true;
})
$("#mechanismForm").find(":reset").click(() => {
    $('#checkicon3').hide();
    mechanismBool = true;
    MechanismObj = JSON.parse(JSON.stringify(defaultMechanismObj));
})
$("#mechanismForm").change(() => {
    $('#checkicon3').hide();
    mechanismBool = false;
})

// Aynı anda seçilemez uyarıları
$(function () {
    $("#pressureCalibrated").click(() => {
        if ($("#pressureReplaced").is(":checked")) {
            calibratedReset();
            alert("Pressure Replaced ile aynı anda seçilemez");
        }
    })
    $("#appCalibrated").click(() => {
        if ($("#appReplaced").is(":checked")) {
            calibratedReset();
            alert("App Replaced ile aynı anda seçilemez");
        }
    })
    $("#driverPwaCalibrated").click(() => {
        if ($("#driverPwaReplaced").is(":checked")) {
            calibratedReset();
            alert("Driver Pwa Replaced ile aynı anda seçilemez");
        }
    })
    $("#pressureReplaced").click(() => {
        if ($("#pressureCalibrated").is(":checked")) {
            $('#pressureReplaced').prop('checked', false)
            alert("Pressure Calibrated ile aynı anda seçilemez");
        }
    })
    $("#appReplaced").click(() => {
        if ($("#appCalibrated").is(":checked")) {
            $('#appReplaced').prop('checked', false)
            alert("App Calibrated ile aynı anda seçilemez");
        }
        else $(".appSNDiv").toggle();
    })
    $("#driverPwaReplaced").click(() => {
        if ($("#driverPwaCalibrated").is(":checked")) {
            $('#driverPwaReplaced').prop('checked', false)
            alert("Driver Pwa Calibrated ile aynı anda seçilemez");
        }
        else $(".driverPwaSNDiv").toggle();
    })
})

const calibratedReset = () => {
    $('#pressureCalibrated').prop('checked', false)
    $('#appCalibrated').prop('checked', false)
    $('#driverPwaCalibrated').prop('checked', false)
    $('#checkicon3').hide();
    mechanismBool = false;
}
