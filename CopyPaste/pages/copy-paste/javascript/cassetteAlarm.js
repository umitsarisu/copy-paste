var selfTestCommentCounter = 0;
var noReplacedCounter = 0;
var selfTestPowerCpuCounter = 0;
var selfTestBatteryObj = {
    replaced: "BATTERY",
    errorCode: function () {
        return "DEAD BATTERY";
    },
    code: " ",
    itWas: "REPLACED",
    probableCause: "DEAD BATTERY",
    changedPart: function () {
        return commonYdkObj.battery(1);
    },
}
var selfTestSDBatteryObj = {
    replaced: "CHANGED BATTERY BUTTON",
    sDBattery: "CHANGED BATTERY BUTTON WAS USED IN THE BIOMED MENU",
    errorCode: function () {
        return "LOW BATTERY";
    },
    code: " ",
    itWas: "USED IN THE BIOMED MENU",
    probableCause: "LOW BATTERY",
}
var selfTestBatteryObj = {
    replaced: "BATTERY",
    errorCode: function () {
        return "DEAD BATTERY";
    },
    code: " ",
    itWas: "REPLACED",
    probableCause: "DEAD BATTERY",
    changedPart: function () {
        return commonYdkObj.battery(1);
    },
}
var selfTestN252Obj = {
    replaced: "BATTERY",
    errorCode: function () {
        return "N252";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEAD BATTERY",
    changedPart: function () {
        return commonYdkObj.battery(1);
    },
}
var selfTestN250AsmdoorObj = {
    replaced: "ASM DOOR",
    errorCode: function () {
        return "N250";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE ASM DOOR",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.asmdoor(1);
        else return plumaYdkObj.asmdoor(1);
    },
}
var selfTestN250ShieldObj = {
    replaced: "SHIELD",
    errorCode: function () {
        return "N250";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE SHIELD",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.shield(1);
        else return plumaYdkObj.shield(1);
    },
}
var selfTestN250PivotObj = {
    replaced: "PIVOT",
    errorCode: function () {
        return "N250";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "BROKEN PIVOT",
    changedPart: function () {
        return plum360YdkObj.pivot(1);
    },
}
var selfTestN251PivotObj = {
    replaced: "PIVOT",
    errorCode: function () {
        return "N251";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "BROKEN PIVOT",
    changedPart: function () {
        return plum360YdkObj.pivot(1);
    },
}
var selfTestN250HandleObj = {
    replaced: "HANDLE DOOR",
    errorCode: function () {
        return "N250";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE HANDLE DOOR",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.handledoor(1);
        else return plumaYdkObj.handledoor(1);
    },
}
var selfTestN251HandleObj = {
    replaced: "HANDLE DOOR",
    errorCode: function () {
        return "N251";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE HANDLE DOOR",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.handledoor(1);
        else return plumaYdkObj.handledoor(1);
    },
}
var selfTestN250LinkObj = {
    replaced: "LINK DOOR",
    errorCode: function () {
        return "N250";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "BROKEN LINK DOOR",
    changedPart: function () {
        return plum360YdkObj.linkdoor(1);
    },
}
var selfTestN251LinkObj = {
    replaced: "LINK DOOR",
    errorCode: function () {
        return "N251";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "BROKEN LINK DOOR",
    changedPart: function () {
        return plum360YdkObj.linkdoor(1);
    },
}
var selfTestN251ShieldObj = {
    replaced: "SHIELD",
    errorCode: function () {
        return "N251";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE SHIELD",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.shield(1);
        else return plumaYdkObj.shield(1);
    },
}
var selfTestN251AsmdoorObj = {
    replaced: "ASM DOOR",
    errorCode: function () {
        return "N251";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE ASM DOOR",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.asmdoor(1);
        else return plumaYdkObj.asmdoor(1);
    },
}
var selfTestE439Obj = {
    replaced: "KEYPAD",
    errorCode: function () {
        return "E439";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE KEYPAD",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.keypad360(1);
        else if (plumTr.checked) return plumaYdkObj.keypadTr(1);
        // else return plumaYdkObj.keypadEn(1);
    },
}
var selfTestE302Obj = {
    replaced: "DISPLAY",
    errorCode: function () {
        return "E302";
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE DISPLAY",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.display(1);
        else return plumaYdkObj.display(1);
    },
}
var selfTestPowerObj = {
    replaced: "POWER PWA",
    errorCode: function () {
        if ($("#powerErrorCode").val() == 503) return "DEVICE WILL NOT TURN ON";
        else return $("#powerErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE POWER PWA",
    changedPart: function () {
        if (plum360.checked) return plum360YdkObj.power(1) + $("#powerSN").val().toUpperCase() + ")";
        else return plumaYdkObj.power(1) + " SN: " + $("#powerSN").val().toUpperCase() + ")";
    },
}
var selfTestCpuObj = {
    replaced: "CPU PWA",
    errorCode: function () {
        if ($("#cpuErrorCode").val() == 503) return "DEVICE WILL NOT TURN ON";
        else return $("#cpuErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE CPU PWA",
    changedPart: function () {
        return commonYdkObj.cpu(1) + $("#cpuSN").val().toUpperCase() + ")";
    },
}
var selfTestMechObj = {
    replaced: "MECHANISM",
    errorCode: function () {
        if ($("#selfTestMechanismErrorCode").val() == 503) return "DEVICE WILL NOT TURN ON";
        else return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " ",
    itWas: "REPLACED WITH GOOD KNOWN MECHANISM",
    probableCause: "DEFECTIVE MECHANISM",
    changedPart: function () {
        if (plum360.checked) {
            return plum360YdkObj.mechanism(1) + $("#selfTestMechanismSN").val() + ")";
        }
        else {
            return plumaYdkObj.mechanism(1) + $("#selfTestMechanismSN").val() + ")";
        }
    },
}
var selfTestPressRepObj = {
    replaced: "PRESSURE DEDECTOR",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE PRESSURE DEDECTOR",
    changedPart: function () {
        return commonYdkObj.pressurededector(1);
    },
}
var selfTestPressCalObj = {
    replaced: "PRESSURE DEDECTOR",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "CALIBRATED",
    probableCause: "CALIBRATION PRESSURE DEDECTOR",
}
var selfTestAppObj = {
    replaced: "APP PWA",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE APP PWA",
    changedPart: function () {
        return commonYdkObj.app(1) + $("#selfTestAppSN").val().toUpperCase() + ")";
    },
}
var selfTestDriverPwaCalObj = {
    replaced: "DRIVER PWA",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "CALIBRATED",
    probableCause: "CALIBRATION DRIVER PWA, MECHANISM PRESSURE DEDECTOR OUT OF CALIBRATION",
}
var selfTestDriverPwaObj = {
    replaced: "DRIVER PWA",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE DRIVER PWA",
    changedPart: function () {
        return plum360YdkObj.driverPwa(1) + $("#selfTestDriverPwaSN").val().toUpperCase() + ")";
    },
}
var selfTestLSMotorObj = {
    replaced: "L/S MOTOR",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE L/S MOTOR",
    changedPart: function () {
        return plum360YdkObj.lsMotor(1);
    },
}
var selfTestIOMotorObj = {
    replaced: "I/O MOTOR",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE I/O MOTOR",
    changedPart: function () {
        return plum360YdkObj.ioMotor(1);
    },
}
var selfTestPlungerMotorObj = {
    replaced: "PLUNGER MOTOR",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE PLUNGER MOTOR",
    changedPart: function () {
        return plum360YdkObj.plungerMotor(1);
    },
}
var selfTestSwitchPwaObj = {
    replaced: "SWITCH PWA",
    errorCode: function () {
        return $("#selfTestMechanismErrorCode").val().toUpperCase();
    },
    code: " CODE ",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE SWITCH PWA",
    changedPart: function () {
        return plum360YdkObj.switchPwa(1);
    },
}
function selfTestPrint(x) {
    var comment = x.errorCode() + " ERROR" + x.code + "WAS SEEN" + duringSelfTest() + ". THE " + x.replaced +
        " WAS " + x.itWas + " AND THE TEST WAS REPEATED AND ";
    if (selfTestCommentCounter == 0) {
        commentSelfTest.push("WHILE TESTING ");
        selfTestCommentCounter++;
    }
    if (noReplacedCounter == 1) {
        if (sDBattery.checked) sDBatteryArray.push(x.sDBattery);
        if (selfTestPressureCalibrated.checked) calibratedArray.push(x.replaced);
        else if (selfTestDRPCalibrated.checked) calibratedArray.push(x.replaced);
        noReplacedCounter--;
    }
    else {
        replacedArray.push(x.replaced);
        changedPartsArray.push(x.changedPart());
    }
    if (selfTestPowerCpuCounter == 1) {
        if ((powerErrorCode.value == 503 || cpuErrorCode.value == 503 || selfTestMechanismErrorCode.value == 503) &&
            (battery.checked || sDBattery.checked)) commentSelfTest.splice(2, 0, comment);
        else if (powerErrorCode.value == 503 || cpuErrorCode.value == 503 || selfTestMechanismErrorCode.value == 503) commentSelfTest.splice(1, 0, comment);
        else {
            if (selfTestPressureCalibrated.checked) {}
            else commentSelfTest.push(comment);
        }
        selfTestPowerCpuCounter--;
    }
    else commentSelfTest.push(comment);
    selfTestprobableCauseArray.push(x.probableCause);
    function duringSelfTest() {
        if (commentSelfTest.length == 0) {
            return duringSelfTestSentence = " DURING CASSETTE ALARM TEST";
        }
        else return "";
    }
}