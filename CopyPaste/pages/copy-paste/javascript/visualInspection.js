const visualParts = SpareParts.filter((item) => {
    if (item.test == "true" && item.isAvailable == "true") return item
})
let selectedVisualParts = [];
let selected122Parts = [];
let selected141Parts = [];
$("#deviceİnfoForm").submit(function () {
    let experience = $("#customerExperience").val().toUpperCase();
    $("#spareParts122").empty();
    $("#spareParts141").empty();
    damaged = [];
    $("#show122").empty();
    $("#show141").empty();

    $("#sparePartsVisual").empty();
    visualParts.map((part) => {
        if (experience == 122) {
            $("#divSpareParts122").show();
            $("#divSpareParts141").hide();
            if (part.viCode == 122) {
                $("#spareParts122").append(`<option id="${part.id}">${part.name}</option>`)
            }
            else $("#sparePartsVisual").append(`<option id="${part.id}">${part.name}</option>`)
        } else if (experience == 141) {
            $("#divSpareParts122").hide();
            $("#divSpareParts141").show();
            if (part.viCode == 141) {
                $("#spareParts141").append(`<option id="${part.id}">${part.name}</option>`)
            }
            else $("#sparePartsVisual").append(`<option id="${part.id}">
                <img src='${images[0][1]}'>
                ${part.name}
                </option>`)
        }
        else {
            $("#divSpareParts122").hide();
            $("#divSpareParts141").hide();
            return $("#sparePartsVisual").append(`<option id="${part.id}">${part.name}</option>`)
        }
        if ($("#plumA").is(":checked")) {
            $(".bgColor").css("background", color.plumA);
            $("#brackethandle").prop("disabled", true);
            $("#tubingguide").prop("disabled", true);
        }
        if ($("#plum360").is(":checked")) {
            $(".bgColor").css("background", color.plum360);
            $("#brackethandle").prop("disabled", false);
            $("#tubingguide").prop("disabled", false);
        }
    })
})
// EventListeners dblclick
$(function () {
    sparePartsVisual.addEventListener("dblclick", (event) => {
        if (!selectedVisualParts.includes(event.target.value)) {
            selectedVisualParts.push(event.target.value);
            visualBool = false;
            $("#checkicon2").hide();
        }
        showVisual.innerHTML = selectedVisualParts.join(", ")
    })
    spareParts122.addEventListener("dblclick", (event) => {
        if (!selected122Parts.includes(event.target.value)) {
            selected122Parts.push(event.target.value);
            visualBool = false;
            $("#checkicon2").hide();
        }
        show122.innerHTML = selected122Parts.join(", ")
    })
    spareParts141.addEventListener("dblclick", (event) => {
        if (!selected141Parts.includes(event.target.value)) {
            selected141Parts.push(event.target.value);
            visualBool = false;
            $("#checkicon2").hide();
        }
        show141.innerHTML = selected141Parts.join(", ")
    })
})
//Visual Inspection Submit
$("#visualInspection").find(":submit").click(function () {
    damaged = selected122Parts.concat(selected141Parts).concat(selectedVisualParts);
    $('#checkicon2').show();
    visualBool = true;
})
// Visual Reset
$("#visualInspection").find(":reset").click(function () {
    visualBool = false;
    $("#checkicon2").hide();
    // Değişkenleri sıfırlama
    yorumVisual = "";
    selectedVisualParts = [];
    selected122Parts = [];
    selected141Parts = [];
    damaged = [];
    showVisual.innerHTML = "";
    show122.innerHTML = "";
    show141.innerHTML = "";
})

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
            else if ($("#plumA").is(":checked")) changedPartsArray.push(plumaSparePartsObj.keypadtr.fullName());
            // else if ($("#plumA").is(":checked")) changedPartsArray.push(plumaSparePartsObj.keypaden.fullName());
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
    c = "THE PROBABLE CAUSE OF THE FAILED VISUAL INSPECTION WAS CUSTOMER ABUSE.";
    if (selected122Parts.length != 0) {
        a = "WHILE TESTING DAMAGED " + selected122Parts.join(", ") + " WAS SEEN ON FRONT PANEL ";
        if (selectedVisualParts.length != 0) {
            b = "AND ALSO DAMAGED " + selectedVisualParts.join(", ") + " WAS SEEN. ";
        }
        yorumVisual = a + b + c;
    }
    else if (selected141Parts.length != 0) {
        a = "WHILE TESTING DAMAGED " + selected141Parts.join(", ") + " ON REAR PANEL WAS SEEN DURING VISUAL INSPECTION";
        if (selectedVisualParts.length != 0) {
            b = "AND ALSO DAMAGED " + selectedVisualParts.join(", ") + " WAS SEEN. ";
        }
        yorumVisual = a + b + c;
    }
    else {
        yorumVisual = "WHILE TESTING DAMAGED " + selectedVisualParts.join(", ") + " WAS SEEN. " + c;
    }
    probableCauseArray.push("CUSTOMER ABUSE");
}