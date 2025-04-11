function result() {
    ResultObj = JSON.parse(JSON.stringify(defaultResultObj))
    PrintObj = JSON.parse(JSON.stringify(defaultPrintObj))
    RvgObj = JSON.parse(JSON.stringify(defaultRvgObj))
    TestFail = JSON.parse(JSON.stringify(defaultTestFail))
    ResultObj.customer_experience = $("#customerExperience").val().toLocaleUpperCase("en")
    resultPageRemoveClass();
    resultPageAddClasses();
    $("#mainPage").hide();
    $("#sonuc").show();
    rvgFunc();
    setDateInputValue();
    //950 durumu cihaz sağlamsa
    if ($("#yes1").is(":checked")) {
        notRequired();
    }
    //cihazda arıza varsa
    else {
        visualResult();
        if (MechanismObj.error_code != "") mechanismResult();
        otherPartsResult();
        setErrorCodesObj();
        firstSentence();
        PrintObj.comment.push("THE TESTS WAS REPEATED AND DEVICE PASSED WITHOUT GIVING ANY ALARM.");
        if ($("#lowbattery").is(":checked")) {
            PrintObj.more_comment.push("CHANGED BATTERY BUTTON WAS USED IN THE BIOMED MENU");
            PrintObj.probable_causes.push("LOW BATTERY")
        }
        if (ResultObj.replaced.length != 0) {
            PrintObj.more_comment.push(ResultObj.replaced.join(", ") + " WILL BE CHANGED");
        }
        if (ResultObj.calibrated != "") {
            PrintObj.more_comment.push(ResultObj.calibrated + " WILL BE CALIBRATED");
        }
        if (TestFail.ca_test.fail == true) {
            PrintObj.comment.push(`THE PROBABLE CAUSE OF THE FAILED CASSETTE ALARM TEST WAS ${PrintObj.probable_causes.join(", ")}.`)
        }
        if (TestFail.po_test.fail == true) {
            PrintObj.comment.push(`THE PROBABLE CAUSE OF THE FAILED PROXIMAL OCCLUSION TEST WAS ${PrintObj.probable_causes.join(", ")}.`)
        }
    }
    AAcodes();
    pumpTests();
    print();
}
// Cihaz Sağlamsa
const notRequired = () => {
    PrintObj.repair_codes = ["N00"];
    PrintObj.device_situation = ""; // null
    PrintObj.run_in_test_result = "DEVICE 16 RUN IN TEST PASSED WITHOUT FAIL";
    PrintObj.findings = ["THE TEST NO PROBLEM FOUND"];
    PrintObj.changed_parts = ["N/A"];
    PrintObj.analysis_codes = ["950"];
    PrintObj.investigation_codes = ["950"];
    PrintObj.is_approved = false;
    PrintObj.more_comment = ["NO PROBLEM FOUND"];
    PrintObj.probable_causes = ["NO PROBABLE CAUSE"];
    if (ResultObj.customer_experience.length < 4) {
        PrintObj.error_history_logs = ResultObj.customer_experience + " CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE.";
        PrintObj.first_sentence = ResultObj.customer_experience + " CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE. NO PROBABLE CAUSE. ";
    }
    else {
        PrintObj.error_history_logs = ResultObj.customer_experience + " ERROR CODE WAS NOT SEEN IN HISTORY LOG.";
        PrintObj.first_sentence = "DURING LEVEL 1 PCI,\nTHE CUSTOMER EXPERIENCE " + ResultObj.customer_experience + " ERROR CODE WAS NOT SEEN. NO PROBABLE CAUSE. ";
    }
}
const setErrorCodesObj = () => {
    ErrorCodesObj = JSON.parse(JSON.stringify(defaultErrorCodesObj));
    // Mekanizma Arızası Varsa
    if (MechanismObj.error_code != "") {
        if (MechanismObj.test_fail == "CASSETTE ALARM TEST") {
            ErrorCodesObj.cassette_alarm_test_error_codes.push(MechanismObj.error_code.toLocaleUpperCase("en"))
        }
        else {
            ErrorCodesObj.proximal_occlusion_test_error_code = MechanismObj.error_code.toLocaleUpperCase("en");
        }
    }
    // Other Parts Hata Varsa
    if (OtherPartsObj.error_code != "") {
        ErrorCodesObj.cassette_alarm_test_error_codes.push(...OtherPartsObj.error_code);
    }
    if (ErrorCodesObj.cassette_alarm_test_error_codes.includes(ResultObj.customer_experience)) {
        PrintObj.investigation_codes.push("SXC");
        TestFail.ca_test.sxc = true;
    }
    if (ErrorCodesObj.proximal_occlusion_test_error_code == ResultObj.customer_experience) {
        PrintObj.investigation_codes.push("SXC");
        TestFail.po_test.sxc = true;
    }
}
const firstSentence = () => {
    // Customer Experience 3 Karakterli İse
    if (ResultObj.customer_experience.length < 4) {
        PrintObj.error_history_logs = "N/A";
        PrintObj.first_sentence = `${ResultObj.customer_experience} CAN'T BE SHOWN ON A PUMP AS AN ERROR CODE.`;
        // Tarih inputunu gizle
        $("#randomdate").hide();
        $("#dateResult").text("N/A");
    }
    // Customer Experience 4 Karakterli İse
    else {
        // Tarih inputunu göster
        $("#randomdate").show();
        $("#dateResult").text("");
        // Cihaz Açılmıyor Arızası Varsa
        if (ErrorCodesObj.cassette_alarm_test_error_codes.includes("503")) {
            PrintObj.error_history_logs = `THE ${ResultObj.customer_experience} ERROR CODE WAS NOT SEEN IN THE HISTORY LOG DUE TO THE DEVICE WILL NOT TURN ON PROBLEM.`;
            PrintObj.first_sentence = `THE ${ResultObj.customer_experience} ERROR CODE WAS NOT SEEN IN THE HISTORY LOG DUE TO THE DEVICE WILL NOT TURN ON PROBLEM.`;
        }
        // Customer Experience Görüldüyse
        else if (PrintObj.investigation_codes.includes("SXC")) {
            const randomDay = () => {
                return Math.floor(Math.random() * 10) + 3;
            }
            PrintObj.error_history_logs = `THE ${ResultObj.customer_experience} ERROR CODE WAS SEEN ${randomDay()} TIMES IN THE HISTORY LOG.`;
            PrintObj.first_sentence = `DURING LEVEL 1 PCI,\nCUSTOMER EXPERIENCE ${ResultObj.customer_experience} ERROR CODE WAS SEEN.`;
        }
        // Customer Experience Görülmediyse
        else if (!PrintObj.investigation_codes.includes("SXC")) {
            PrintObj.error_history_logs = `THE ${ResultObj.customer_experience} ERROR CODE WAS NOT SEEN IN HISTORY LOG.`;
            PrintObj.first_sentence = `DURING LEVEL 1 PCI,\nCUSTOMER EXPERIENCE ${ResultObj.customer_experience} ERROR CODE WAS NOT SEEN.`;
        }
    }
    let catTestLength = ErrorCodesObj.cassette_alarm_test_error_codes.length;
    let catTestValue = ErrorCodesObj.cassette_alarm_test_error_codes;
    let proxTestValue = ErrorCodesObj.proximal_occlusion_test_error_code;
    // firstSentence while testing
    if (catTestLength > 0) {
        PrintObj.first_sentence += ` WHILE THE TESTS WERE PERFORMING, ERROR CODE${catTestLength > 1 ? "S" : ""} ${catTestValue.join(", ")} ${catTestLength > 1 ? "WERE" : "WAS"} OBSERVED IN THE CASSETTE ALARM TEST${proxTestValue == "" ? "." : ""}`
    }
    if (proxTestValue != "") {
        PrintObj.first_sentence += `${catTestLength > 0 ? " AND" : " WHILE THE TESTS WERE PERFORMING"} ${proxTestValue} ERROR CODE WAS OBSERVED IN THE PROXIMAL OCCLUSION TEST.`
    }
}
const visualResult = () => {
    if (VisualObj.damaged_parts.length != 0) {
        TestFail.vi_test.fail = true;
        // Cihazın Durumu
        PrintObj.device_situation = VisualObj.damaged_part_names.join(", ") + " DAMAGED";
        $("#cihazinDurumu").show();
        PrintObj.findings.push("VISUAL INSPECTION FAIL");
        PrintObj.comment.push(`WHILE TESTING DAMAGED ${VisualObj.damaged_part_names.join(", ")} WAS SEEN DURING VISUAL INSPECTION${$("#plum360").is(":checked") ? "" : " TEST"}. THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION${$("#plum360").is(":checked") ? " " : " TEST "}WAS CUSTOMER ABUSE.`)
        PrintObj.changed_parts.push(...VisualObj.damaged_parts.map(part => part.name + ": " + part.code))
        ResultObj.replaced.push(...VisualObj.damaged_part_names)
        PrintObj.probable_causes.push("CUSTOMER ABUSE")
    }
    else $("#cihazinDurumu").hide();
    if (ResultObj.customer_experience == 122) {
        VisualObj.damaged_parts.map(part => {
            if (part.viCode == 122) {
                PrintObj.investigation_codes.push("SXC")
                TestFail.vi_test.sxc = true;
            }
        })
    }
    else if (ResultObj.customer_experience == 141) {
        VisualObj.damaged_parts.map(part => {
            if (part.viCode == 141) {
                PrintObj.investigation_codes.push("SXC")
                TestFail.vi_test.sxc = true;
            }
        })
    }
}
const mechanismResult = () => {
    if (MechanismObj.test_fail == "CASSETTE ALARM TEST"
        && !PrintObj.findings.includes(MechanismObj.test_fail + " FAIL")) {
        PrintObj.findings.push(MechanismObj.test_fail + " FAIL")
        TestFail.po_test.fail = false;
        TestFail.ca_test.fail = true;
    }
    else {
        PrintObj.findings.push(MechanismObj.test_fail + " FAIL")
        TestFail.po_test.fail = true;
    }
    PrintObj.changed_parts.push(...MechanismObj.replaced.map(part => {
        if (part.name == "App Pwa") {
            return `${part.name}: (${part.code} SN: ${MechanismObj.app_sn})`
        }
        else if (part.name == "Driver Pwa") {
            return `${part.name}: (${part.code} SN: ${MechanismObj.driver_pwa_sn})`
        }
        else {
            return `${part.name}: ${part.code}`
        }
    }))
    PrintObj.comment.push(`FOR THE ${MechanismObj.error_code} ERROR CODE, MECHANISM CALIBRATION STARTED.`);
    let mechanismComment = [];
    if (MechanismObj.replaced.length != 0) {
        mechanismComment.push(`THE ${MechanismObj.replaced.map(item => item.name).join(", ")} WAS REPLACED`);
        ResultObj.replaced.push(...MechanismObj.replaced.map(item => item.name));
        MechanismObj.replaced.map(item => {
            PrintObj.probable_causes.push("DEFECTIVE " + item.name.toLocaleUpperCase("en"));
        })
    }
    if (MechanismObj.calibrated != "" && MechanismObj.calibrated != undefined) {
        mechanismComment.push(`THE ${MechanismObj.calibrated} WAS CALIBRATED`);
        ResultObj.calibrated = MechanismObj.calibrated;
        PrintObj.probable_causes.push("CALIBRATION " + MechanismObj.calibrated.toLocaleUpperCase("en"));
    }
    PrintObj.comment.push(mechanismComment.join(", "));
    PrintObj.comment.push("AND MECHANISM CALIBRATION COMPLETED.")
}
const otherPartsResult = () => {
    OtherPartsObj = JSON.parse(JSON.stringify(defaultOtherPartsObj));
    // Parça seri numaralarını nesneye işliyor
    OtherPartsObj.power.serial_number = $("#powerSN").val().toLocaleUpperCase("en");
    OtherPartsObj.cpu.serial_number = $("#cpuSN").val().toLocaleUpperCase("en");
    OtherPartsObj.peripheral.serial_number = $("#peripheralSN").val().toLocaleUpperCase("en");
    // Other parts sayfasındaki checkbox grouplardan gelen değişen parçaların isimlerini replaced array'in de topluyor
    const replaced1 = $("input:checkbox[name=ospCheckbox]:checked").map(function () {
        return $(this).val();
    }).toArray();
    const batteryReplaced = $("input:checkbox[name=ospBatteryCheckbox]:checked").map(function () {
        return $(this).val();
    }).toArray();
    const n250Replaced = $("input:checkbox[name=ospN250Checkbox]:checked").map(function () {
        return $(this).val();
    }).toArray();
    const n251Replaced = $("input:checkbox[name=ospN251Checkbox]:checked").map(function () {
        return $(this).val();
    }).toArray();
    const replaced4 = $("input:checkbox[name=otherPartsReplaced]:checked").map(function () {
        return $(this).val();
    }).toArray();
    const replaced5 = $("input:checkbox[name=otherPartsCableReplaced]:checked").map(function () {
        return $(this).val();
    }).toArray();
    const replaced = [...replaced1, ...batteryReplaced, ...n250Replaced, ...n251Replaced, ...replaced4, ...replaced5];
    // Değişen parçaları nesne şeklinde yedek parça listesinden bulup otherpartsobj nesnesinde nesne olarak saklıyor. Aynı döngüde probable_causes defective part listesini de oluşturuyor.
    replaced.map(rep_part => {
        OtherParts.map(part => {
            if (rep_part == "KEYPAD" && $("#plumA").is(":checked")) {
                rep_part = "KEYPAD TR";
            }
            if (part.name.toLocaleUpperCase("en") == rep_part) {
                OtherPartsObj.replaced.push(part)
                if (rep_part == "BATTERY") {
                    PrintObj.probable_causes.push("DEAD " + part.name.toLocaleUpperCase("en"))
                    ResultObj.replaced.push(part.name)
                }
                else {
                    PrintObj.probable_causes.push("DEFECTIVE " + part.name.toLocaleUpperCase("en"))
                    ResultObj.replaced.push(part.name)
                }
            }
        })
    });
    // Eğer Cassette Alarm Test daha önce fail olarak işlenmediyse bulgulara işliyor.
    if (replaced.length != 0 && !PrintObj.findings.includes("CASSETTE ALARM TEST FAIL")) {
        PrintObj.findings.push("CASSETTE ALARM TEST FAIL");
        TestFail.ca_test.fail = true;
    }
    // Değişen parçaları PrintObj içindeki yazdırma alanına gönderiyor.
    PrintObj.changed_parts.push(...OtherPartsObj.replaced.map(part => {
        if (part.name == "Power Pwa") {
            return `${part.name}: (${part.code} SN: ${OtherPartsObj.power.serial_number})`
        }
        else if (part.name == "Cpu Pwa") {
            return `${part.name}: (${part.code} SN: ${OtherPartsObj.cpu.serial_number})`
        }
        else if (part.name == "Peripheral Pwa") {
            return `${part.name}: (${part.code} SN: ${OtherPartsObj.peripheral.serial_number})`
        }
        else {
            return `${part.name}: ${part.code}`
        }
    }))
    // Other Parts için error_codeların alınması.
    const setErrorCode = (code) => {
        if (!OtherPartsObj.error_code.includes(code)) {
            OtherPartsObj.error_code.push(code);
        }
    }
    const otherPartsComment = () => {
        const setComment = (error_code, replacedList) => {
            PrintObj.comment.push(`FOR THE ${error_code} ERROR CODE, THE ${replacedList.join(", ")} ${$("#lowbattery").is(":checked") ? "" : "WAS REPLACED"}`)
        }
        if (replaced4.length != 0 || replaced5.length != 0) {
            const error_code = $("#otherFormErrorCode").val();
            setErrorCode(error_code);
            if (replaced4.length != 0 && replaced5.length == 0) {
                setComment(error_code, [...replaced4]);
            }
            else if (replaced5.length != 0 && replaced4.length == 0) {
                setComment(error_code, [...replaced5]);
            }
            else {
                setComment(error_code, [...replaced4, ...replaced5]);
            }
        }
        if ($("#chasis").is(":checked")) {
            const error_code = "503";
            setErrorCode(error_code);
            setComment(error_code, [$("#chasis").val().toLocaleUpperCase("en")])
        }
        if ($("#305").is(":checked")) {
            const error_code = "305";
            setErrorCode(error_code);
            setComment(error_code, [$("#305").val().toLocaleUpperCase("en")])
        }
        if ($("#n252").is(":checked")) {
            const error_code = "N252";
            setErrorCode(error_code);
            setComment(error_code, [$("#n252").val().toLocaleUpperCase("en")])
        }
        if ($("#e439").is(":checked")) {
            const error_code = "E439";
            setErrorCode(error_code);
            setComment(error_code, [$("#e439").val().toLocaleUpperCase("en")])
        }
        if ($("#e302").is(":checked")) {
            const error_code = "E302";
            setErrorCode(error_code);
            setComment(error_code, [$("#e302").val().toLocaleUpperCase("en")])
        }
        if (n250Replaced.length != "") {
            const error_code = "N250";
            setErrorCode(error_code);
            setComment(error_code, n250Replaced)
        }
        if (n251Replaced.length != "") {
            const error_code = "N251";
            setErrorCode(error_code);
            setComment(error_code, n251Replaced)
        }
        if ($("#lowbattery").is(":checked")) {
            let error_code = "305";
            setErrorCode(error_code);
            setComment(error_code, ["CHANGED BATTERY BUTTON WAS USED IN THE BIOMED MENU."])
        }
    }
    otherPartsComment();
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
        date2 = `${date.getFullYear()} -${month.toString().padStart(2, 0)} -${day.toString().padStart(2, 0)} `;
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
// commentSelfTest = commentSelfTest.join("") + "DEVICE PASSED WITHOUT GIVING ANY ALARM." +
//     " THE PROBABLE CAUSE OF THE FAILED CASSETTE ALARM TEST WAS " + selfTestprobableCauseArray.join(", ") + ". ";
const rvgFunc = (x) => {
    while (true) {
        let random = Math.random() * (8 - 5) + 5;
        RvgObj.rv6psi = random.toFixed(2);
        random = Math.random() * (12 - 10) + 10;
        RvgObj.rv10psi = random.toFixed(2);
        if (RvgObj.rv10psi - RvgObj.rv6psi > 3.5 && RvgObj.rv10psi - RvgObj.rv6psi < 5) {
            break;
        }
    }
    RvgObj.rv3 = Math.floor(Math.random() * (17 - 10) + 10);
    RvgObj.rv4 = Math.floor(Math.random() * (50 - 30) + 30);
    RvgObj.rv5 = Math.floor(Math.random() * (120 - 70) + 70);
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
            return `${randomDay} ${months[randomMonth - 1]} ${year - 1} `;
        }
        else {
            while (true) {
                randomMonth = Math.floor((Math.random() * month) + 1);
                randomDay = Math.floor((Math.random() * 28) + 1);
                if ((randomMonth < month && randomMonth > month - 3) || (randomMonth == month && randomDay < day)) {
                    return `${randomDay} ${months[randomMonth - 1]} ${year} `;
                }
            }

        }
    }
    localStorage.setItem("date", year + "-" + month.toString().padStart(2, 0) + "-" + day.toString().padStart(2, 0))
    $("#dateResult").text(`${randomDate()} TO ${day} ${months[month - 1]} ${year} `);
}
const AAcodes = () => {
    const analysis = (x) => {
        if (!PrintObj.analysis_codes.includes(x)) {
            PrintObj.analysis_codes.push(x);
        }
    }
    const investigation = (x) => {
        if (!PrintObj.investigation_codes.includes(x)) {
            PrintObj.investigation_codes.push(x);
        }
    }
    const repair = (x) => {
        if (!PrintObj.repair_codes.includes(x)) {
            PrintObj.repair_codes.push(x);
        }
    }
    // Visual Inspection Parçaları Analiz ve Araştırma Kodları
    if (VisualObj.damaged_part_names != 0) {
        analysis("901");
        if (VisualObj.damaged_part_names.includes("FRONT CASE") ||
            VisualObj.damaged_part_names.includes("HOUSING FRONT")) {
            repair("M92");
            investigation("809");
        }
        if (VisualObj.damaged_part_names.includes("REAR CASE") ||
            VisualObj.damaged_part_names.includes("HOUSING BACK")) {
            repair("M93");
            investigation("809");
        }
        if (VisualObj.damaged_part_names.includes("MAIN CHASIS")) {
            repair("M37");
            investigation("809");
        }
        if (VisualObj.damaged_part_names.includes("ASM DOOR") ||
            VisualObj.damaged_part_names.includes("DOOR COVER AND SCREW")) {
            repair("M38");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("SHIELD")) {
            repair("E314")
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("KEYPAD TR") ||
            VisualObj.damaged_part_names.includes("KEYPAD")) {
            repair("E65");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("DISPLAY")) {
            repair("K84");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("HANDLE DOOR")) {
            repair("A13");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("BATTERY DOOR")) {
            repair("M97");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("COVER ANTENNAL LCM CE 3.0")) {
            repair("E56");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("PROXIMAL TUBING GUIDE")) {
            repair("E56");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("COVER ANTENNAL LCM CE 3.0")) {
            repair("E56");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("BASE W/RUBBER")) {
            repair("M24");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("POLE CLAMP KNOB")) {
            repair("M24");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("RETAINER CORD")) {
            repair("E28");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("COVER PERIPHERAL")) {
            repair("E56");
            investigation("781");
        }
        if (VisualObj.damaged_part_names.includes("BRACKET HANDLE")) {
            repair("E56");
            investigation("781");
        }
    }
    // Mekanizma Parçaları Analiz ve Araştırma Kodları
    if (MechanismObj.error_code != "") {
        investigation(MechanismObj.error_code.toLocaleUpperCase("en"));
        if (PrintObj.probable_causes.includes("DEFECTIVE PRESSURE DEDECTOR")) {
            repair("E87");
            analysis("EE02");
        }
        if (PrintObj.probable_causes.includes("CALIBRATION PRESSURE DEDECTOR")) {
            repair("E87");
            var m95 = ["N180", "N181", "N186", "N187", "N251", "E343", "E344", "E345", "E346", "E458", "503"];
            var m93 = ["N182", "N183", "N184", "N185", "N188", "N189", "N190", "N191", "E430", "E431", "E432", "E433"];
            if (m95.includes(MechanismObj.error_code)) analysis("M95");
            if (m93.includes(MechanismObj.error_code)) analysis("M93");
        }
        if (PrintObj.probable_causes.includes("DEFECTIVE APP PWA")) {
            repair("K67");
            analysis("E73");
        }
        if (PrintObj.probable_causes.includes("CALIBRATION APP PWA")) {
            repair("E67");
            analysis("975");
        }
        if (PrintObj.probable_causes.includes("CALIBRATION DRIVER PWA, MECHANISM PRESSURE DEDECTOR OUT OF CALIBRATION") ||
            PrintObj.probable_causes.includes("DEFECTIVE DRIVER PWA")) {
            repair("K11");
            analysis("E11");
        }
        if (PrintObj.probable_causes.includes("DEFECTIVE SPRING EXTENSION 0.063 DIA, 0.25 LG")) {
            repair("M104");
            analysis("E56");
        }
        if (PrintObj.probable_causes.includes("DEFECTIVE L/S MOTOR")) {
            repair("M100");
            analysis("M110");
        } if (PrintObj.probable_causes.includes("DEFECTIVE I/O MOTOR")) {
            repair("M101");
            analysis("M110");
        } if (PrintObj.probable_causes.includes("DEFECTIVE PLUNGER MOTOR")) {
            repair("M103");
            analysis("M01");
        } if (PrintObj.probable_causes.includes("DEFECTIVE SWITCH PWA")) {
            repair("K158");
            analysis("E158");
        }
    }
    // Other Parts Analiz ve Araştırma Kodları
    if (PrintObj.probable_causes.includes("DEFECTIVE POWER PWA")) {
        repair("K01");
        analysis("E01");
        analysis("973");
        investigation(OtherPartsObj.power.error_code.toLocaleUpperCase("en"));
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE CPU PWA")) {
        repair("K05");
        analysis("E05");
        analysis("973");
        investigation(OtherPartsObj.cpu.error_code.toLocaleUpperCase("en"));
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE PERIPHERAL PWA")) {
        repair("K156");
        analysis("E156");
        analysis("973");
        investigation(OtherPartsObj.peripheral.error_code.toLocaleUpperCase("en"));
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE POWER CABLE") ||
        PrintObj.probable_causes.includes("DEFECTIVE CPU DRIVER CABLE") ||
        PrintObj.probable_causes.includes("DEFECTIVE CABLE FLAT 20 COND") ||
        PrintObj.probable_causes.includes("DEFECTIVE CABLE POWER/BATTERY") ||
        PrintObj.probable_causes.includes("DEFECTIVE CABLE MOTOR POWER") ||
        PrintObj.probable_causes.includes("DEFECTIVE CABLE FLAT 8 COND")
    ) {
        repair("M82");
        analysis("E55");
        investigation(OtherPartsObj.cable.error_code.toLocaleUpperCase("en"));
    }

    if (PrintObj.probable_causes.includes("DEAD BATTERY")
        || PrintObj.probable_causes.includes("LOW BATTERY")) {
        repair("E27");
        analysis("E27");
        $("#n252").is(":checked") ? investigation("N252") : investigation("305");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE SHIELD")) {
        repair("E314");
        analysis("314");
        analysis("973");
        $("#n250Shield").is(":checked") ? investigation("N250") : investigation("N251");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE ASM DOOR")) {
        repair("M38");
        analysis("M38");
        analysis("973");
        $("#n250Asmdoor").is(":checked") ? investigation("N250") : investigation("N251");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE PIVOT")) {
        repair("M23");
        analysis("M23");
        analysis("894");
        $("#n250Pivot").is(":checked") ? investigation("N250") : investigation("N251");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE HANDLE DOOR")) {
        repair("A13");
        analysis("M38");
        analysis("973");
        $("#n250Handledoor").is(":checked") ? investigation("N250") : investigation("N251");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE LINK DOOR")) {
        repair("A13");
        analysis("E56");
        $("#n250Linkdoor").is(":checked") ? investigation("N250") : investigation("N251");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE KEYPAD")) {
        repair("E65");
        analysis("E19");
        analysis("973");
        investigation("E439");
    }
    if (PrintObj.probable_causes.includes("DEFECTIVE DISPLAY")) {
        repair("K84");
        analysis("E75");
        analysis("973");
        investigation("E302");
    }
    // SXC silme
    if (PrintObj.investigation_codes.includes("SXC")) {
        PrintObj.is_approved = true;
        investigation(ResultObj.customer_experience);
        PrintObj.investigation_codes = PrintObj.investigation_codes.filter(item => item != "SXC");
    }
}
const pumpTests = () => {
    // Plum A tests
    const PlumAPumpTests = [
        {
            number: 166,
            name: "VISUAL INSPECTION TEST",
        },
        {
            number: 167,
            name: "TEST SETUP TEST",
        },
        {
            number: 168,
            name: "SELF TEST",
        },
        {
            number: 169,
            name: "CASSETTE ALARM TEST",
        },
        {
            number: 170,
            name: "FREE FLOW",
        },
        {
            number: 171,
            name: "DISPLAY",
        },
        {
            number: 172,
            name: "KEYPAD VERIFICATION",
        },
        {
            number: 173,
            name: "ALARM LOUDNESS",
        },
        {
            number: 174,
            name: "LOCKOUT SWITCH",
        },
        {
            number: 175,
            name: "PROXIMAL OCCLUSION TEST",
        },
        {
            number: 176,
            name: "PROXIMAL AIR-IN-LINE",
        },
        {
            number: 177,
            name: "DISTAL AIR-IN-LINE",
        },
        {
            number: 178,
            name: "DISTAL OCCLUSION (3-9 PSI)",
        },
        {
            number: 179,
            name: "DISTAL OCCLUSION (7-13 PSI)",
        },
        {
            number: 180,
            name: "DELIVERY ACCURACY (19ML-21ML)",
        },
    ]
    //Plum 360 tests
    const Plum360PumpTests = [
        {
            number: 257,
            name: "TEST SETUP",
        },
        {
            number: 258,
            name: "CASSETTE ALARM TEST",
        },
        {
            number: 259,
            name: "DISTAL OCCLUSION (3-9 PSI)",
        },
        {
            number: 260,
            name: "DISTAL OCCLUSION (7-13 PSI)",
        },
        {
            number: 261,
            name: "UNRESTRICTED FLOW TEST",
        },
        {
            number: 262,
            name: "DISPLAY TEST",
        },
        {
            number: 263,
            name: "KEYPAD VERIFICATION",
        },
        {
            number: 264,
            name: "PROXIMAL OCCLUSION TEST",
        },
        {
            number: 265,
            name: "ALARM LOUDNESS TEST",
        },
        {
            number: 266,
            name: "DISTAL AIR-IN-LINE TEST",
        },
        {
            number: 267,
            name: "PROXIMAL AIR-IN-LINE TEST",
        },
        {
            number: 268,
            name: "DELIVERY ACCURACY (19-21)"
        },
    ]
    let PumpTestsObj = {};
    if ($("#plum360").is(":checked")) {
        PumpTestsObj = JSON.parse(JSON.stringify(Plum360PumpTests));
    }
    else {
        PumpTestsObj = JSON.parse(JSON.stringify(PlumAPumpTests))
    }
    $("#pumpTests").empty();
    let stop = false;
    $.each(PumpTestsObj, (i, test) => {
        if (stop) return false;  // Eğer testler durdurulmuşsa, döngüyü bitir
        // --- 1. Eğer hiçbir checkbox seçilmediyse, tüm testleri yazdır ---
        if (!TestFail.vi_test.fail && !TestFail.ca_test.fail && !TestFail.po_test.fail) {
            $('#pumpTests').append(`<p>${test.number}- ${test.name}</p>`);
            return;
        }
        // --- 2. Visual Inspection Test Kuralları ---
        if (test.name === "VISUAL INSPECTION TEST" && TestFail.vi_test.fail) {
            $('#pumpTests').append(`<p class="red">${test.name}</p>`);
            if (TestFail.vi_test.sxc && !TestFail.ca_test.fail && !TestFail.po_test.fail) {
                return false; // Müşteri şikayeti görüldüğü için döngüyü durdur 
            }
            return; // Bu test zaten işlendi, diğerlerine geç
        }
        // --- 3. Cassette Alarm Test Kuralları ---
        if (test.name === "CASSETTE ALARM TEST" && TestFail.ca_test.fail) {
            $('#pumpTests').append(`<p class="red">${test.name}</p>`);
            $('#pumpTests').append(`<p class="green">${test.name}</p>`);
            if ((TestFail.ca_test.sxc || TestFail.vi_test.sxc) && !TestFail.po_test.fail) {
                return false; // Müşteri şikayeti görüldüğü için döngüyü durdur 
            }
            return;  // Bu test zaten işlendi, diğerlerine geç
        }
        // --- 4. Proximal Occlusion Test Kuralları ---
        if (test.name === "PROXIMAL OCCLUSION TEST" && TestFail.po_test.fail) {
            $('#pumpTests').append(`<p class="red">${test.name}</p>`);
            $('#pumpTests').append(`<p class="green">${test.name}</p>`);
            if ((TestFail.ca_test.sxc || TestFail.vi_test.sxc || TestFail.po_test.sxc)) {
                return false; // Müşteri şikayeti görüldüğü için döngüyü durdur 
            }
            return;  // Bu test işlendi, diğerlerine geç
        }
        // --- Diğer testler ---
        $('#pumpTests').append(`<p>${test.name}</p>`);
    });
}