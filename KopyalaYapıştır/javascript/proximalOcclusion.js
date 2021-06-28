var proximalMechObj = {
    replaced: "MECHANISM",
    itWas: "REPLACED WITH GOOD KNOWN MECHANISM",
    probableCause: "DEFECTIVE MECHANISM",
    changedPart: function () {
        if (plum360.checked) {
            changedPartsArray.push(plum360YdkObj.mechanism(1) + $("#proximalMechanismSN").val() + ")");
        }
        else {
            changedPartsArray.push(plumaYdkObj.mechanism(1) + $("#proximalMechanismSN").val() + ")");
        }
    },
    lastSentence: "",
}
var proximalAppRepObj = {
    replaced: "APP PWA",
    itWas: "REPLACED",
    probableCause: "DEFECTIVE APP PWA",
    changedPart: function () {
        return commonYdkObj.app(1) + $("#proximalAppSN").val() + ")";
    },
    lastSentence: "",
}
var proximalAppCalObj = {
    replaced: "APP PWA",
    itWas: "CALIBRATED",
    probableCause: "CALIBRATION APP PWA",
    lastSentence: "",
}
function proximalPrint(x) {
    probableCauseArray.push(x.probableCause);
    if (proximalTestAppCalibrated.checked) {
        calibratedArray.push(x.replaced);
    }
    else {
        changedPartsArray.push(x.changedPart());
        replacedArray.push(x.replaced);
    }
    commentProximal = "WHILE TESTING " + $("#proximalTestErrorCode").val() + " ERROR CODE WAS SEEN DURING PROXIMAL OCCLUSION TEST. THE " + x.replaced +
        " WAS " + x.itWas + " AND THE TEST WAS REPEATED AND DEVICE PASSED WITHOUT GIVING ANY ALARM. " +
        "THE PROBABLE CAUSE OF THE FAILED PROXIMAL OCC. TEST WAS " + x.probableCause + ". " + x.lastSentence;
}