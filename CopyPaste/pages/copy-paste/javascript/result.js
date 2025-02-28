function result() {
    resultObj = { ...defaultResultObj }
    rvgObj = { ...defaultRvgObj }
    resultPageRemoveClass();
    resultPageAddClasses();
    $("#mainPage").hide();
    $("#sonuc").show();
    rvgFunc();
    setDateInputValue();

    resultObj.customerExperience = $("#customerExperience").val()

    //950 durumu cihaz sağlamsa
    if ($("#yes1").is(":checked")) {
        resultObj.repairCodes = ["N00"];
        resultObj.deviceSituation = ""; // null
        resultObj.runInTestResult = "DEVICE 16 RUN IN TEST PASSED WITHOUT FAIL";
        resultObj.findings = ["THE TEST NO PROBLEM FOUND"];
        resultObj.changedParts = ["N/A"];
        resultObj.analysisCodes = ["950"];
        resultObj.investigationCodes = ["950"];
        resultObj.isApproved = false;
        resultObj.moreComment = ["NO PROBLEM FOUND"];
        resultObj.probableCauses = ["NO PROBABLE CAUSE"];
        if (resultObj.customerExperience.length < 4) {
            resultObj.errorHistoryLogs = resultObj.customerExperience + " CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE.";
            resultObj.firstSentence = resultObj.customerExperience + " CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE. NO PROBABLE CAUSE. ";
        }
        else {
            resultObj.errorHistoryLogs = resultObj.customerExperience + " ERROR CODE WAS NOT SEEN IN HISTORY LOG.";
            resultObj.firstSentence = "DURING LEVEL 1 PCI CUSTOMER EXPERIENCE " + resultObj.customerExperience + " ERROR CODE WAS NOT SEEN. NO PROBABLE CAUSE. ";
        }
        resultObj.comment = [resultObj.firstSentence];
    }
    //cihazda arıza varsa
    else {
        if (damaged.length != 0) {
            resultObj.findings.push("VISUAL INSPECTION FAIL");
            visualPrint();
        }
        // Comment
        if (errorCodes.CATCodes.length != 0) {
            resultObj.findings.push("CASSETTE ALARM TEST FAIL");
            resultObj.comment = `WHILE TESTING ${errorCodes.CATCodes.join(", ")} ERROR CODE${errorCodes.CATCodes.length > 1 ? "S" : ""} WERE OBSERVED ON CASSETTE ALARM TEST.`
            console.log(resultObj.comment)
        }
        else if (errorCodes.POTCode.length != 0) {
            resultObj.findings.push("PROXIMAL OCCLUSION TEST FAIL");
            if (errorCodes.CATCodes.length != 0) {
                resultObj.comment += `AND ${mechanismObj.errorCode} ERROR CODE ON PROXIMAL OCCLUSION TEST.`
            }
            else {
                resultObj.comment = `WHILE TESTING ${mechanismObj.errorCode} ERROR CODE WERE OBSERVED ON PROXIMAL OCCLUSION TEST.`
            }
        }
        if (mechanismObj.errorCode != 0) {
            resultObj.comment += `\nFOR THE ${mechanismObj.errorCode} ERROR ${mechanismObj.errorCode == 503 ? "" : "CODE"}, MECHANISM CALIBRATION STARTED. ${mechanismObj.replaced.join(", ")} ${mechanismObj.replaced.length > 1 ? "WERE REPLACED AND" : "WAS REPLACED AND"} ${mechanismObj.calibrated.length != 0 ? mechanismObj.calibrated + " WAS CALIBRATED AND" : ""} MECHANISM CALIBRATION COMPLETED.`
        }

        if ($("#selfTestFail").is(":checked")) {
            findingsArray.push("CASSETTE ALARM TEST FAIL");
            if (battery.checked) selfTestPrint(selfTestBatteryObj);
            if (sDBattery.checked) {
                noReplacedCounter = 1;
                selfTestPrint(selfTestSDBatteryObj);
            }
            if (n252.checked) {
                selfTestPrint(selfTestN252Obj);
            }
            if (n250Asmdoor.checked) selfTestPrint(selfTestN250AsmdoorObj);
            if (n250Shield.checked) selfTestPrint(selfTestN250ShieldObj);
            if (n251Asmdoor.checked) selfTestPrint(selfTestN251AsmdoorObj);
            if (n251Shield.checked) selfTestPrint(selfTestN251ShieldObj);
            if (n250pivot.checked) selfTestPrint(selfTestN250PivotObj);
            if (n251pivot.checked) selfTestPrint(selfTestN251PivotObj);
            if (n250handle.checked) selfTestPrint(selfTestN250HandleObj);
            if (n251handle.checked) selfTestPrint(selfTestN251HandleObj);
            if (n250link.checked) selfTestPrint(selfTestN250LinkObj);
            if (n251link.checked) selfTestPrint(selfTestN251LinkObj);
            if (e439.checked) selfTestPrint(selfTestE439Obj);
            if (e302.checked) selfTestPrint(selfTestE302Obj);
            // POWER
            if (power.checked) {
                if (powerErrorCode.value == 503) {
                    selfTestPowerObj.code = " ";
                }
                selfTestPowerCpuCounter = 1;
                selfTestPrint(selfTestPowerObj);
            }
            // CPU
            if (cpu.checked) {
                if (cpuErrorCode.value == 503) {
                    selfTestCpuObj.code = " ";
                }
                selfTestPowerCpuCounter = 1;
                selfTestPrint(selfTestCpuObj);
            }
            // PERIPHERAL
            if (peripheral.checked) {
                if (peripheralErrorCode.value == 503) {
                    selfTestPeripheralObj.code = " ";
                }
                selfTestPowerCpuCounter = 1;
                selfTestPrint(selfTestPeripheralObj);
            }
            // Cables
            if (cables.checked) {
                if (cablesErrorCode.value == 503) {
                    selfTestPeripheralObj.code = " ";
                }
                selfTestPowerCpuCounter = 1;
                if (powerCableReplaced.checked) selfTestPrint(powerCableObj);
                if (cpuDriverCableReplaced.checked) selfTestPrint(cpuDriverCableObj);
                if (cableFlat20Replaced.checked) selfTestPrint(cableFlat20Obj);
                if (cablePowerBatteryReplaced.checked) selfTestPrint(cablePowerBatteryObj);
                if (cableMotorPowerReplaced.checked) selfTestPrint(cableMotorPowerObj);
                if (cableFlat8Replaced.checked) selfTestPrint(cableFlat8Obj);
            }

            //MECHANISM
            if (selfTestMechanism.checked) {
                var lastSentence = "";
                if (selfTestMechanismReplaced.checked) {
                    selfTestPowerCpuCounter = 1;
                    selfTestPrint(selfTestMechObj);
                    lastSentence = "WHILE TESTING FLUID INGRESS IN MECHANISM CORROSION WAS SEEN " +
                        "ALL ELECTRONIC PCBS, MOTORS AND COMPONENTS. MECHANISM WILL BE TOTAL LOSS.THE MECHANISM " +
                        "WAS REPLACED AND CASSETTE ALARM TEST WAS REPEATED AND PASSED WITHOUT GIVING ANY ALARM. " +
                        "THE PROBABLE CAUSE OF THE FAILED CASSETTE ALARM TEST WAS DEFECTIVE MECHANISM."
                }
                else if (selfTestPressureReplaced.checked) selfTestPrint(selfTestPressRepObj);
                else if (selfTestPressureCalibrated.checked) {
                    noReplacedCounter = 1;
                    selfTestPrint(selfTestPressCalObj);
                }
                if (selfTestAppReplaced.checked) selfTestPrint(selfTestAppObj);
                if (selfTestDRPCalibrated.checked) {
                    noReplacedCounter = 1;
                    selfTestPrint(selfTestDriverPwaCalObj);
                }
                if (selfTestDRPReplaced.checked) selfTestPrint(selfTestDriverPwaObj);
                if (selfTestLSMReplaced.checked) selfTestPrint(selfTestLSMotorObj);
                if (selfTestSpringReplaced.checked) selfTestPrint(selfTestSpringObj);
                if (selfTestIOMReplaced.checked) selfTestPrint(selfTestIOMotorObj);
                if (selfTestPLMReplaced.checked) selfTestPrint(selfTestPlungerMotorObj);
                if (selfTestSWPReplaced.checked) selfTestPrint(selfTestSwitchPwaObj);
                commentSelfTest = commentSelfTest.join("") + "DEVICE PASSED WITHOUT GIVING ANY ALARM." +
                    " THE PROBABLE CAUSE OF THE FAILED CASSETTE ALARM TEST WAS " + selfTestprobableCauseArray.join(", ") + ". " + lastSentence;
            }
            else {
                commentSelfTest = commentSelfTest.join("") + "DEVICE PASSED WITHOUT GIVING ANY ALARM." +
                    " THE PROBABLE CAUSE OF THE FAILED CASSETTE ALARM TEST WAS " + selfTestprobableCauseArray.join(", ") + ". ";
            }
        }
        resultObj.isApproved = null;
    }
    $(function () {
        if (resultObj.customerExperience.length < 4) {
            $("#randomdate").hide();
            $("#dateResult").text("N/A");
        }
        else {
            $("#randomdate").show();
            $("#dateResult").text("");
        }
    })
    AAcodes();
    print();
}
const setDateInputValue = () => {
    let date2;
    if (localStorage.getItem("date")) {
        date2 = localStorage.getItem("date");
    }
    else {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        date2 = `${date.getFullYear()}-${month.toString().padStart(2, 0)}-${day.toString().padStart(2, 0)}`;
    }
    $("#date1").val(date2);
}
const resultPageAddClasses = () => {
    var resultButtons = document.getElementsByName("resultButtons");
    for (i = 0; i < resultButtons.length; i++) {
        resultButtons[i].classList.add("btn");
        resultButtons[i].classList.add("btn-outline-light");
        resultButtons[i].classList.add("align-self-center");
    }
    var resultTextareas = document.getElementsByName("resultTextareas");
    for (i = 0; i < resultTextareas.length; i++) {
        resultTextareas[i].classList.add("form-control");
        resultTextareas[i].classList.add("bg-light");
        resultTextareas[i].classList.add("text-uppercase");
        resultTextareas[i].classList.add("align-self-center");
    }
    var resulth6 = document.getElementsByName("resulth6");
    for (i = 0; i < resulth6.length; i++) {
        resulth6[i].classList.add("align-self-center");
    }
}
const resultPageRemoveClass = () => {
    $("[name='resultButtons']").removeClass();
    $("[name='resultTextareas']").removeClass();
    $("[name='resulth6']").removeClass();
}

function rvgFunc(x) {
    while (true) {
        let random = Math.random() * (8 - 5) + 5;
        rvgObj.rv6psi = random.toFixed(2);
        random = Math.random() * (12 - 10) + 10;
        rvgObj.rv10psi = random.toFixed(2);
        if (rvgObj.rv10psi - rvgObj.rv6psi > 3.5 && rvgObj.rv10psi - rvgObj.rv6psi < 5) {
            break;
        }
    }
    rvgObj.rv3 = Math.floor(Math.random() * (17 - 10) + 10);
    rvgObj.rv4 = Math.floor(Math.random() * (50 - 30) + 30);
    rvgObj.rv5 = Math.floor(Math.random() * (120 - 70) + 70);
}

const dateFunc = () => {
    let date = document.getElementById("date1").value;
    date = date.replace(/-/g, "");
    var year = parseInt(date.slice(0, 4));
    var month = parseInt(date.slice(4, 6));
    var day = parseInt(date.slice(6, 8));
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function randomDate() {
        if (month == 1) {
            randomMonth = Math.floor((Math.random() * 3) + 10);
            randomDay = Math.floor((Math.random() * 28) + 1);
            return `${randomDay} ${months[randomMonth - 1]} ${year - 1}`;
        }
        else {
            while (true) {
                randomMonth = Math.floor((Math.random() * month) + 1);
                randomDay = Math.floor((Math.random() * 28) + 1);
                if ((randomMonth < month && randomMonth > month - 3) || (randomMonth == month && randomDay < day)) {
                    return `${randomDay} ${months[randomMonth - 1]} ${year}`;
                }
            }

        }
    }
    localStorage.setItem("date", year + "-" + month.toString().padStart(2, 0) + "-" + day.toString().padStart(2, 0))
    $("#dateResult").text(`${randomDate()} TO ${day} ${months[month - 1]} ${year}`);
}
function AAcodes() {
    function analysis(x) {
        if (!resultObj.analysisCodes.includes(x)) {
            resultObj.analysisCodes.push(x);
        }
    }
    function investigation(x) {
        if (!resultObj.investigationCodes.includes(x)) {
            resultObj.investigationCodes.push(x);
        }
    }
    function repair(x) {
        if (!resultObj.repairCodes.includes(x)) {
            resultObj.repairCodes.push(x);
        }
    }

    if (resultObj.probableCauses.includes("NO PROBABLE CAUSE")) {
        repair("N00");
        investigation("950");
        analysis("950");
    }
    if (resultObj.probableCauses.includes("DEFECTIVE PRESSURE DEDECTOR")) {
        repair("E87");
        // analysis("M86");
        analysis("EE02");
        if (distalOccFail.checked) {
            if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
            else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
        }
    }
    if (probableCauseArray.includes("CALIBRATION PRESSURE DEDECTOR") || selfTestprobableCauseArray.includes("CALIBRATION PRESSURE DEDECTOR")) {
        repair("E87");
        // analysis("M86");
        var m95 = ["N180", "N181", "N186", "N187", "N251", "E343", "E344", "E345", "E346", "E458", "503"];
        var m93 = ["N182", "N183", "N184", "N185", "N188", "N189", "N190", "N191", "E430", "E431", "E432", "E433"];

        for (i = 0; i < m95.length; i++) {
            if ($("#selfTestMechanismErrorCode").val().toUpperCase() == m95[i]) analysis("M95");
        }
        for (i = 0; i < m93.length; i++) {
            if ($("#selfTestMechanismErrorCode").val().toUpperCase() == m93[i]) analysis("M93");
        }
        if (distalOccFail.checked) {
            if (experience == "716" || experience == "N180" || experience == "N186") investigation("SXC");
            else investigation("716");
            analysis("M95");
        }
        else {
            if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
            else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
        }
    }
    if (probableCauseArray.includes("DEFECTIVE MECHANISM") || selfTestprobableCauseArray.includes("DEFECTIVE MECHANISM")) {
        repair("A70");
        analysis("M86");
        analysis("888");
        if (selfTestFail.checked) {
            if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
            else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
        }
        if (proximalOccFail.checked) {
            if (experience == $("#proximalTestErrorCode").val()) investigation("SXC");
            else investigation($("#proximalTestErrorCode").val());
        }
        if (distalOccFail.checked) {
            if (experience == "716" || experience == "N180" || experience == "N186") investigation("SXC");
            else investigation("716");
        }
    }
    if (probableCauseArray.includes("DEFECTIVE APP PWA") || selfTestprobableCauseArray.includes("DEFECTIVE APP PWA")) {
        repair("K67");
        // analysis("M86");
        analysis("E73");
        if (probableCauseArray.includes("DEFECTIVE APP PWA")) {
            if (experience == $("#proximalTestErrorCode").val().toUpperCase()) investigation("SXC");
            else investigation($("#proximalTestErrorCode").val().toUpperCase());
        }
        if (selfTestprobableCauseArray.includes("DEFECTIVE APP PWA")) {
            if (selfTestPressureCalibrated.checked || selfTestPressureReplaced.checked);
            else {
                if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
                else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
            }
        }
    }
    if (probableCauseArray.includes("CALIBRATION APP PWA")) {
        repair("E67");
        // analysis("M86");
        analysis("975");
        if (experience == $("#proximalTestErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#proximalTestErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE POWER PWA")) {
        repair("K01");
        analysis("E01");
        analysis("973");
        if (experience == $("#powerErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#powerErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE CPU PWA")) {
        repair("K05");
        analysis("E05");
        analysis("973");
        if (experience == $("#cpuErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#cpuErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE PERIPHERAL PWA")) {
        repair("K156");
        analysis("E156");
        analysis("973");
        if (experience == $("#peripheralErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#peripheralErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("CALIBRATION DRIVER PWA, MECHANISM PRESSURE DEDECTOR OUT OF CALIBRATION")) {
        repair("K11");
        // analysis("M86");
        analysis("E11");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE DRIVER PWA")) {
        repair("K11");
        // analysis("M86");
        analysis("E11");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE SPRING")) {
        repair("M104");
        analysis("E56");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE L/S MOTOR")) {
        repair("M100");
        analysis("M110");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    } if (selfTestprobableCauseArray.includes("DEFECTIVE I/O MOTOR")) {
        repair("M101");
        analysis("M110");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    } if (selfTestprobableCauseArray.includes("DEFECTIVE PLUNGER MOTOR")) {
        repair("M103");
        analysis("M01");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    } if (selfTestprobableCauseArray.includes("DEFECTIVE SWITCH PWA")) {
        repair("K158");
        analysis("E158");
        if (experience == $("#selfTestMechanismErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#selfTestMechanismErrorCode").val().toUpperCase());
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE POWER CABLE") ||
        selfTestprobableCauseArray.includes("DEFECTIVE CPU DRIVER CABLE") ||
        selfTestprobableCauseArray.includes("DEFECTIVE CABLE FLAT 20 COND") ||
        selfTestprobableCauseArray.includes("DEFECTIVE CABLE POWER/BATTERY") ||
        selfTestprobableCauseArray.includes("DEFECTIVE CABLE MOTOR POWER") ||
        selfTestprobableCauseArray.includes("DEFECTIVE CABLE FLAT 8 COND")
    ) {
        repair("M82");
        analysis("E55");
        if (experience == $("#cablesErrorCode").val().toUpperCase()) investigation("SXC");
        else investigation($("#cablesErrorCode").val().toUpperCase());
    }
    if (damaged != 0) {
        analysis("901");
        if (damaged.includes("CASE ASSEMBLY")) {
            repair("M26");
            if (experience == "122") investigation("SXC");
            else if (experience == "141") investigation("SXC");
            else if (experience == "809") investigation("SXC");
            else investigation("809");
        }
        else {
            if (damaged.includes("FRONT CASE")) {
                repair("M92");
                if (experience == "122") investigation("SXC");
                else investigation("809");
            }
            if (damaged.includes("REAR CASE")) {
                repair("M93");
                if (experience == "141") investigation("SXC");
                else investigation("809");
            }
            if (damaged.includes("MAIN CHASIS")) {
                repair("M37");
                investigation("809");
            }
        }
        if (damaged.includes("ASM DOOR")) {
            repair("M38");
            if (experience == "122") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("SHIELD")) {
            repair("E314");
            if (experience == "122") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("KEYPAD")) {
            repair("E65");
            if (experience == "122") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("DISPLAY")) {
            repair("K84");
            if (experience == "122") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("HANDLE DOOR")) {
            repair("A13");
            if (experience == "122") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("BATTERY DOOR")) {
            repair("M97");
            investigation("781");
        }
        if (damaged.includes("POLE CLAMP ASS")) {
            repair("M20");
            if (experience == "141") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("POLE CLAMP KNOB")) {
            repair("M24");
            if (experience == "141") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("RETAINER CORD")) {
            repair("E28");
            if (experience == "141") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("COVER PERIPHERAL")) {
            repair("E56");
            if (experience == "141") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("BRACKET HANDLE")) {
            repair("E56");
            if (experience == "141") investigation("SXC");
            else investigation("781");
        }
        if (damaged.includes("TUBING GUIDE")) {
            repair("E56");
            if (experience == "122") investigation("SXC");
            else investigation("781");
        }
    }
    if (battery.checked || sDBattery.checked) {
        repair("E27");
        analysis("E27");
        if (experience == "305") {
            investigation("SXC");
        }
        else investigation("305");
    }
    if (n252.checked) {
        repair("E27");
        analysis("E27");
        if (experience == "N252") {
            investigation("SXC");
        }
        else investigation("N252");
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE SHIELD")) {
        repair("E314");
        analysis("314");
        analysis("973");
        if (n250Shield.checked) {
            if (experience == "N250") investigation("SXC");
            else investigation("N250");
        }
        else if (n251Shield.checked) {
            if (experience == "N251") investigation("SXC");
            else investigation("N251");
        }
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE ASM DOOR")) {
        repair("M38");
        analysis("M38");
        analysis("973");
        if (n250Asmdoor.checked) {
            if (experience == "N250") investigation("SXC");
            else investigation("N250");
        }
        else if (n251Asmdoor.checked) {
            if (experience == "N251") investigation("SXC");
            else investigation("N251");
        }
    }
    if (selfTestprobableCauseArray.includes("BROKEN PIVOT")) {
        repair("M23");
        analysis("M23");
        analysis("894");
        if (n250pivot.checked) {
            if (experience == "N250") investigation("SXC");
            else investigation("N250");
        }
        else if (n251pivot.checked) {
            if (experience == "N251") investigation("SXC");
            else investigation("N251");
        }
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE HANDLE DOOR")) {
        repair("A13");
        analysis("M38");
        analysis("973");
        if (n250handle.checked) {
            if (experience == "N250") investigation("SXC");
            else investigation("N250");
        }
        else if (n251handle.checked) {
            if (experience == "N251") investigation("SXC");
            else investigation("N251");
        }
    }
    if (selfTestprobableCauseArray.includes("BROKEN LINK DOOR")) {
        repair("A13");
        analysis("E56");
        if (n250link.checked) {
            if (experience == "N250") investigation("SXC");
            else investigation("N250");
        }
        else if (n251link.checked) {
            if (experience == "N251") investigation("SXC");
            else investigation("N251");
        }
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE KEYPAD")) {
        repair("E65");
        analysis("E19");
        analysis("973");
        if (experience == "E439") investigation("SXC");
        else investigation("E439");
    }
    if (selfTestprobableCauseArray.includes("DEFECTIVE DISPLAY")) {
        repair("K84");
        analysis("E75");
        analysis("973");
        if (experience == "E302") investigation("SXC");
        else investigation("E302");
    }


    var plumaPumpTests = {
        // Plum A tests
        166: "VISUAL INSPECTION TEST",
        167: "TEST SETUP TEST",
        168: "SELF TEST",
        169: "CASSETTE ALARM TEST",
        170: "FREE FLOW",
        171: "DISPLAY",
        172: "KEYPAD VERIFICATION",
        173: "ALARM LOUDNESS",
        174: "LOCKOUT SWITCH",
        175: "PROXIMAL OCCLUSION TEST",
        176: "PROXIMAL AIR-IN-LINE",
        177: "DISTAL AIR-IN-LINE",
        178: "DISTAL OCCLUSION (3-9 PSI)",
        179: "DISTAL OCCLUSION (7-13 PSI)",
        180: "DELIVERY ACCURACY (19ML-21ML)",
        181: "NURSE CALL",
    }
    var plum360PumpTests = {
        //Plum 360 tests
        257: "TEST SETUP",
        258: "CASSETTE ALARM TEST",
        259: "DISTAL OCCLUSION (3-9 PSI)",
        260: "DISTAL OCCLUSION (7-13 PSI)",
        261: "UNRESTRICTED FLOW TEST",
        262: "DISPLAY TEST",
        263: "KEYPAD VERIFICATION",
        264: "PROXIMAL OCCLUSION TEST",
        265: "ALARM LOUDNESS TEST",
        266: "DISTAL AIR-IN-LINE TEST",
        267: "PROXIMAL AIR-IN-LINE TEST",
        268: "DELIVERY ACCURACY (19-21)"
    }
    var mechanismTestsObj = {
        246: "VISUAL INSPECTION",
        247: "TEST SETUP",
        248: "SELF TEST",
        249: "CASSETTE ALARM TEST",
        250: "FREE FLOW TEST",
        251: "PROXIMAL OCCLUSION TEST",
        252: "PROXIMAL AIR-IN-LINE",
        253: "DISTAL AIR-IN-LINE",
        254: "DISTAL OCCLUSION (3-9 PSI)",
        255: "DISTAL OCCLUSION (7-13 PSI)",
        256: "DELIVERY ACCURACY (19ML-21ML)"
    }

    if ($("#plum360").is(":checked")) {
        pumpTestsArray = ["257", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269"];
        if ($("#selfTestFail").is(":checked")) pompTestAddFunc("258");
        if ($("#proximalOccFail").is(":checked")) pompTestAddFunc("264");
        if ($("#distalOccFail").is(":checked")) pompTestAddFunc("259");
    }
    else {
        pumpTestsArray = ["166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181"];
        if ($("#selfTestFail").is(":checked")) pompTestAddFunc("169");
        if ($("#proximalOccFail").is(":checked")) pompTestAddFunc("175");
        if ($("#distalOccFail").is(":checked")) pompTestAddFunc("178");
    }
    if (sxcvarmı()) {
        if ($("#plum360").is(":checked")) {
            if ($("#proximalOccFail").is(":checked")) pompTestRemoveFunc("264");
            else if ($("#distalOccFail").is(":checked")) pompTestRemoveFunc("259");
            else if ($("#selfTestFail").is(":checked")) pompTestRemoveFunc("258");
        }
        else {
            if ($("#distalOccFail").is(":checked")) pompTestRemoveFunc("178");
            else if ($("#proximalOccFail").is(":checked")) pompTestRemoveFunc("175");
            else if ($("#selfTestFail").is(":checked")) pompTestRemoveFunc("169");
        }
        function pompTestRemoveFunc(x) {
            for (i = pumpTestsArray.length - 1; i > 0; i--) {
                if (pumpTestsArray[i] == x) {
                    break;
                }
                pumpTestsArray.pop();
            }
        }
    }
    if ($("#selfTestMechanism").is(":checked") ||
        $("#proximalOccFail").is(":checked") ||
        $("#distalOccFail").is(":checked")) {
        mechanismTestsArray.push("246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256");
        function mechanismTestFunc(x) {
            for (i = 0; i < mechanismTestsArray.length; i++) {
                if (mechanismTestsArray[i] == x) {
                    mechanismTestsArray.splice(i, 0, x);
                    break;
                }
            }
        }
        if ($("#selfTestMechanism").is(":checked")) {
            mechanismTestFunc("249");
        }
        if ($("#proximalOccFail").is(":checked")) {
            mechanismTestFunc("251");
        }
        if ($("#distalOccFail").is(":checked")) {
            mechanismTestFunc("254");
        }
    }
    else {
        mechanismTestsArray = ["Mekanizma Test Bilgileri Boş Bırakılacak"]
    }
    $("#pumpTests").empty();
    var x, y;
    if ($("#plum360").is(":checked")) x = plum360PumpTests;
    else x = plumaPumpTests;
    for (i = 0; i < pumpTestsArray.length; i++) {
        var item = pumpTestsArray[i];
        for (j = 0; j < Object.keys(x).length; j++) {
            if (Object.keys(x)[j] == item) {
                $("#pumpTests").append("<p>" + Object.keys(x)[j] + " - " + Object.values(x)[j] + "</p>");
                if (y == Object.keys(x)[j]) {
                    $("#pumpTests > p:eq(" + (i - 1) + ")").addClass("red");
                    $("#pumpTests > p:eq(" + i + ")").addClass("green");
                }
                if ((pumpTestsArray[i] == 166) && (damaged.length != 0)) {
                    $("#pumpTests > p:eq(" + (i) + ")").addClass("red");
                }
                y = item;
                break;
            }
        }
    }
    $("#mechanismTests").empty();
    var x, y;
    x = mechanismTestsObj;
    for (i = 0; i < mechanismTestsArray.length; i++) {
        var item = mechanismTestsArray[i];
        for (j = 0; j < Object.keys(x).length; j++) {
            if (Object.keys(x)[j] == item) {
                $("#mechanismTests").append("<p>" + Object.keys(x)[j] + " - " + Object.values(x)[j] + "</p>");
                if (y == Object.keys(x)[j]) {
                    $("#mechanismTests > p:eq(" + (i - 1) + ")").addClass("red");
                    $("#mechanismTests > p:eq(" + i + ")").addClass("green");
                }
                y = item;
                break;
            }
        }
    }
    function pompTestAddFunc(x) {
        for (i = 0; i < pumpTestsArray.length; i++) {
            if (pumpTestsArray[i] == x) {
                pumpTestsArray.splice(i, 0, x);
                break;
            }
        }
    }
    function sxcvarmı() {
        for (i = 0; i < investigationCode.length; i++) {
            if (investigationCode[i] == "SXC") {
                resultRadioReset();
                resultObj.isApproved = true;
                return true;
            }
        }
    }
}
function printerrorHistoryLogs() {
    // Hata Geçmiş Kayıtları ve First Sentence
    if (resultObj.customerExperience.length < 4) {
        resultObj.errorHistoryLogs = "N/A";
        resultObj.firstSentence = `${resultObj.customerExperience} CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE.`;
    }
    else {
        if (errorCodes.CATCodes.includes(503)) {
            resultObj.errorHistoryLogs = `${resultObj.customerExperience} ERROR CODE WAS NOT SEEN IN HISTORY LOG DUE TO DEVICE WILL NOT TURN ON PROBLEM.`;
            resultObj.firstSentence = `${resultObj.customerExperience} ERROR CODE WAS NOT SEEN IN HISTORY LOG DUE TO DEVICE WILL NOT TURN ON PROBLEM.`;
        }
        else if (resultObj.investigationCodes.includes("SXC")) {
            const randomDay = () => {
                return Math.floor(Math.random() * 10) + 3;
            }
            resultObj.errorHistoryLogs = `${resultObj.customerExperience} ERROR CODE WAS SEEN ${randomDay()} TIMES IN HISTORY LOG.`;
            resultObj.firstSentence = `DURING LEVEL 1 PCI CUSTOMER EXPERIENCE ${resultObj.customerExperience} ERROR CODE WAS SEEN.`;
        }
        else if (!resultObj.investigationCodes.includes("SXC")) {
            resultObj.errorHistoryLogs = `${resultObj.customerExperience} ERROR CODE WAS NOT SEEN IN HISTORY LOG.`;
            resultObj.firstSentence = `DURING LEVEL 1 PCI CUSTOMER EXPERIENCE ${resultObj.customerExperience} ERROR CODE WAS NOT SEEN.`;
        }
    }
    // Cihazın Durumu
    if (damaged.length != 0) {
        resultObj.deviceSituation = damaged.join(", ") + " DAMAGED";
        $("#cihazinDurumu").show();
    }
    else $("#cihazinDurumu").hide();
    //Değişen Parça Açıklaması
    if (resultObj.changedParts == 0) resultObj.changedParts.push("N/A");

}