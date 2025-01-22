function visualPrint() {
    for (i = 0; i < damaged.length; i++) {
        if (damaged[i] == "FRONT CASE") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.frontcase.fullName())
            else changedPartsArray.push(plumaSparePartsObj.frontcase.fullName());
        }
        if (damaged[i] == "REAR CASE") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.rearcase.fullName())
            else changedPartsArray.push(plumaSparePartsObj.rearcase.fullName());
        }
        if (damaged[i] == "MAIN CHASIS") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.mainchasis.fullName());
            else changedPartsArray.push(plumaSparePartsObj.mainchasis.fullName());
        }
        if (damaged[i] == "ASM DOOR") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.asmdoor.fullName());
            else changedPartsArray.push(plumaSparePartsObj.asmdoor.fullName());
        }
        if (damaged[i] == "SHIELD") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.shield.fullName());
            else changedPartsArray.push(plumaSparePartsObj.shield.fullName());
        }
        if (damaged[i] == "KEYPAD") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.keypad.fullName());
            else if ($("#plumTr").is(":checked")) changedPartsArray.push(plumaSparePartsObj.keypadtr.fullName());
            else if ($("#plumEn").is(":checked")) changedPartsArray.push(plumaSparePartsObj.keypaden.fullName());
        }
        if (damaged[i] == "DISPLAY") {
            changedPartsArray.push(plum360SparePartsObj.display.fullName());
        }
        if (damaged[i] == "HANDLE DOOR") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.handledoor.fullName());
            else changedPartsArray.push(plumaSparePartsObj.handledoor.fullName());
        }
        if (damaged[i] == "BATTERY DOOR") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.batterydoor.fullName());
            else changedPartsArray.push(plumaSparePartsObj.batterydoor.fullName());
        }
        if (damaged[i] == "RETAINER CORD") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.retainercord.fullName());
            else changedPartsArray.push(plumaSparePartsObj.retainercord.fullName());
        }
        if (damaged[i] == "POLE CLAMP ASS") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.poleclampknob.fullName());
            else changedPartsArray.push(plumaSparePartsObj.poleclampass.fullName());
        }
        if (damaged[i] == "POLE CLAMP KNOB") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.poleclampknob.fullName());
            else changedPartsArray.push(plumaSparePartsObj.poleclampknob.fullName());
        }
        if (damaged[i] == "COVER PERIPHERAL") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(plum360SparePartsObj.coverperipheral.fullName());
            else changedPartsArray.push(plumaSparePartsObj.coverperipheral.fullName());
        }
        if (damaged[i] == "BRACKET HANDLE") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(littlePartsObj.bracketHandle.fullName());
        }
        if (damaged[i] == "TUBING GUIDE") {
            if ($("#plum360").is(":checked")) changedPartsArray.push(littlePartsObj.tubingGuide.fullName());
        }
    }
    // case assembly situation start //
    if (damaged.includes("FRONT CASE") && damaged.includes("REAR CASE") && damaged.includes("MAIN CHASIS")) {
        function caseAssembly(x) {
            for (i = 0; i < damaged.length; i++) {
                if (damaged[i] == x) damaged.splice(i, 1);
            }
        }
        caseAssembly("FRONT CASE");
        caseAssembly("REAR CASE");
        caseAssembly("MAIN CHASIS");
        damaged.push("CASE ASSEMBLY");
    } // case assembly situation end //
    if (show122Dizisi.length != 0) {
        a = "WHILE TESTING DAMAGED " + show122Dizisi.join(", ") + " ON FRONT PANEL WAS SEEN DURING VISUAL INSPECTION";
        if (showVisualDizisi.length != 0) {
            b = " AND ALSO DAMAGED " + showVisualDizisi.join(", ") + " WAS SEEN. THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION WAS CUSTOMER ABUSE. ";
        }
        else {
            b = ". THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION WAS CUSTOMER ABUSE. ";
        }
        yorumVisual = a + b;
    }
    else if (show141Dizisi.length != 0) {
        a = "WHILE TESTING DAMAGED " + show141Dizisi.join(", ") + " ON REAR PANEL WAS SEEN DURING VISUAL INSPECTION";
        if (showVisualDizisi.length != 0) {
            b = " AND ALSO DAMAGED " + showVisualDizisi.join(", ") + " WAS SEEN. THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION WAS CUSTOMER ABUSE. ";
        }
        else {
            b = ". THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION WAS CUSTOMER ABUSE. ";
        }
        yorumVisual = a + b;
    }
    else {
        yorumVisual = "WHILE TESTING DAMAGED " + showVisualDizisi.join(", ") + " WAS SEEN DURING VISUAL INSPECTION. THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION WAS CUSTOMER ABUSE. ";
    }
    probableCauseArray.push("CUSTOMER ABUSE");
}