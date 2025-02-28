otherPartsObj = {
    checkboxReplaced: [],
    power: {
        errorCode: "",
        serialNumber: ""
    },
    cpu: {
        errorCode: "",
        serialNumber: ""
    },
    peripheral: {
        errorCode: "",
        serialNumber: ""
    },
    cable: {
        errorCode: "",
        replaced: []
    },
}
const otherSpareParts = () => {
    otherSpareParts.power.errorCode = $("#powerErrorCode").val().toUpperCase();
    otherSpareParts.power.serialNumber = $("#powerSN").val().toUpperCase();
    otherSpareParts.cpu.errorCode = $("#cpuErrorCode").val().toUpperCase();
    otherSpareParts.cpu.serialNumber = $("#cpuSN").val().toUpperCase();
    otherSpareParts.peripheral.errorCode = $("#peripheralErrorCode").val().toUpperCase();
    otherSpareParts.peripheral.serialNumber = $("#peripheralSN").val().toUpperCase();
    otherSpareParts.cable.errorCode = $("#cablesErrorCode").val().toUpperCase();
    otherSpareParts.cable.replaced = $("input:checkbox[name=cableReplaced]:checked").map(function () {
        return $(this).val();
    }).toArray();;
    if ($('#battery').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: 305,
            partName: $('#battery').val()
        })
    }
    if ($('#n250Asmdoor').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N250",
            partName: $('#n250Asmdoor').val()
        })
    }
    if ($('#n250Shield').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N250",
            partName: $('#n250Shield').val()
        })
    }
    if ($('#n250pivot').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N250",
            partName: $('#n250pivot').val()
        })
    }
    if ($('#n250handle').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N250",
            partName: $('#n250handle').val()
        })
    }
    if ($('#n250link').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N250",
            partName: $('#n250link').val()
        })
    }
    if ($('#n252').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N252",
            partName: $('#n252').val()
        })
    }
    if ($('#n251Asmdoor').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N251",
            partName: $('#n251Asmdoor').val()
        })
    }
    if ($('#n251Shield').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N251",
            partName: $('#n251Shield').val()
        })
    }
    if ($('#n251pivot').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N251",
            partName: $('#n251pivot').val()
        })
    }
    if ($('#n251handle').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N251",
            partName: $('#n251handle').val()
        })
    }
    if ($('#n251link').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "N251",
            partName: $('#n251link').val()
        })
    }
    if ($('#e439').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "E439",
            partName: $('#e439').val()
        })
    }
    if ($('#e302').is(":checked")) {
        otherSpareParts.checkboxReplaced.push({
            errorCode: "E302",
            partName: $('#e302').val()
        })
    }
}
// Power
$("#power").click(() => {
    $("#powerForm").toggle();
    if ($('#power').is(":not(:checked)")) {
        $("#powerForm").find(":reset").click()
    }
})
$("#powerForm").submit(function (e) {
    e.preventDefault();
    $('#checkicon4').show();
    powerBool = true;
})
$("#powerForm").find(":reset").click(() => {
    $('#checkicon4').hide();
    powerBool = true;
})
$("#powerForm").change(() => {
    $('#checkicon4').hide();
    powerBool = false;
})
// Cpu
$("#cpu").click(() => {
    $("#cpuForm").toggle();
    if ($('#cpu').is(":not(:checked)")) {
        $("#cpuForm").find(":reset").click()
    }
})
$("#cpuForm").submit(function (e) {
    e.preventDefault();
    $('#checkicon5').show();
    cpuBool = true;
});
$("#cpuForm").find(":reset").click(() => {
    $('#checkicon5').hide();
    cpuBool = true;
})
$("#cpuForm").change(() => {
    $('#checkicon5').hide();
    cpuBool = false;
})
// Peripheral
$("#peripheral").click(() => {
    $("#peripheralForm").toggle();
    if ($('#peripheral').is(":not(:checked)")) {
        $("#peripheralForm").find(":reset").click()
    }
})
$("#peripheralForm").submit(function (e) {
    e.preventDefault();
    $('#checkicon6').show();
    peripheralBool = true;
});
$("#peripheralForm").find(":reset").click(() => {
    $('#checkicon6').hide();
    peripheralBool = true;
})
$("#peripheralForm").change(() => {
    $('#checkicon6').hide();
    peripheralBool = false;
})
// Cables
$("#cables").click(() => {
    $("#cablesForm").toggle();
    if ($('#cables').is(":not(:checked)")) {
        $("#cablesForm").find(":reset").click()
    }
})
$("#cablesForm").submit(function (e) {
    e.preventDefault();
    $('#checkicon7').show();
    cablesBool = true;
});
$("#cablesForm").find(":reset").click(() => {
    $('#checkicon7').hide();
    cablesBool = true;
})
$("#cablesForm").change(() => {
    $('#checkicon7').hide();
    cablesBool = false;
})

$("#appReplaced").click(() => {
    $(".appSNDiv").toggle();
})
$("#driverPwaReplaced").click(() => {
    $(".driverPwaSNDiv").toggle();
})