var distalMechObj = {
    replaced: "MECHANISM",
    itWas: "REPLACED WITH GOOD KNOWN MECHANISM",
    probableCause: "DEFECTIVE MECHANISM",
    changedPart: function () {
        if (plum360.checked) {
            return plum360YdkObj.mechanism(1) + $("#distalMechanismSN").val() + ")";
        }
        else {
            return plumaYdkObj.mechanism(1) + $("#distalMechanismSN").val() + ")";
        }
    },
    lastSentence: "",
}
var distalPressRepObj = {
    replaced: "PRESSURE DEDECTOR",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE PRESSURE DEDECTOR",
    changedPart: function () {
        return commonYdkObj.pressurededector(1);
    },
    lastSentence: "",
}
var distalPressCalObj = {
    replaced: "PRESSURE DEDECTOR",
    itWas: "CALIBRATED",
    probableCause: "CALIBRATION PRESSURE DEDECTOR",
    lastSentence: "",
}
function distalPrint(x) {
    probableCauseArray.push(x.probableCause);
    if (distalTestPressureCalibrated.checked) {
        calibratedArray.push(x.replaced);
    }
    else {
        changedPartsArray.push(x.changedPart());
        replacedArray.push(x.replaced);
    }
    commentDistal = "DURING DISTAL OCC. TEST IT WAS SEEN THAT THE VALUES MEASURE WERE OUT OF RANGE PROBLEM. THE " + x.replaced +
        " WAS " + x.itWas + " AND THE TEST WAS REPEATED AND DEVICE PASSED WITHOUT GIVING ANY ALARM. " +
        "THE PROBABLE CAUSE OF THE FAILED DISTAL OCC. TEST WAS " + x.probableCause + ". " + x.lastSentence;
}