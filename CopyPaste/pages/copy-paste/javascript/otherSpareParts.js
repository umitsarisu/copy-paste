let OtherParts = [];
const setOtherParts = (model) => {
    OtherParts = SpareParts.filter((item) => {
        if (item.model == "Ortak" && item.isAvailable == "true") return item;
        else if (item.model == model && item.isAvailable == "true") return item;
    });
}
const defaultOtherPartsObj = {
    replaced: [],
    error_code: [],
    power: {
        serial_number: "",
    },
    cpu: {
        serial_number: "",
    },
    peripheral: {
        serial_number: "",
    }
}
let OtherPartsObj = JSON.parse(JSON.stringify(defaultOtherPartsObj));
$("input:checkbox[name=ospN250Checkbox]").on("click", (e) => {
    if ($("input:checkbox[name=ospN250Checkbox]:checked").length != 0) {
        $("#n250").addClass("bg-danger");
    }
    else {
        $("#n250").removeClass("bg-danger");
    }
    if ($("input:checkbox[name=ospN251Checkbox]:checked").length != 0) {
        e.preventDefault()
        $(this).prop("checked", false)
        alert("N250 üzerinden parça düşmek için N251 parçalarını iptal edin!")
        $("#n250").removeClass("bg-danger");
    }
})
$("input:checkbox[name=ospN251Checkbox]").on("click", (e) => {
    if ($("input:checkbox[name=ospN251Checkbox]:checked").length != 0) {
        $("#n251").addClass("bg-danger");
    }
    else {
        $("#n251").removeClass("bg-danger");
    }
    if ($("input:checkbox[name=ospN250Checkbox]:checked").length != 0) {
        e.preventDefault()
        $(this).prop("checked", false)
        alert("N251 üzerinden parça düşmek için N250 parçalarını iptal edin!")
        $("#n251").removeClass("bg-danger");
    }
})
$("input:checkbox[name=ospBatteryCheckbox]").on("click", (e) => {
    if ($("input:checkbox[name=ospBatteryCheckbox]:checked").length != 0) {
        $("#battery").addClass("bg-danger");
    }
    else {
        $("#battery").removeClass("bg-danger");
    }
})
$("input:checkbox[name=osp503Checkbox]").on("click", (e) => {
    if ($("input:checkbox[name=osp503Checkbox]:checked").length != 0) {
        $("#503Parts").addClass("bg-danger");
    }
    else {
        $("#503Parts").removeClass("bg-danger");
    }
})
// Power
$("#power").click(() => {
    $("#powerForm").toggle();
    if ($('#power').is(":not(:checked)")) {
        OtherPartsObj.power.serial_number = "";
        $("#powerSN").val("");
    }
})
$("#powerForm").change(() => {
    $('#checkicon4').hide();
})
// Cpu
$("#cpu").click(() => {
    $("#cpuForm").toggle();
    if ($('#cpu').is(":not(:checked)")) {
        OtherPartsObj.cpu.serial_number = "";
        $("#cpuSN").val("");
    }
})
$("#cpuForm").change(() => {
    $('#checkicon4').hide();
})
// Peripheral
$("#peripheral").click(() => {
    $("#peripheralForm").toggle();
    if ($('#peripheral').is(":not(:checked)")) {
        OtherPartsObj.peripheral.serial_number = "";
        $("#peripheralSN").val("");
    }
})
$("#peripheralForm").change(() => {
    $('#checkicon4').hide();
})
$("#otherForm").submit(function (e) {
    e.preventDefault();
    if ($("#otherFormErrorCode").val() == "") {
        return alert("Other Parts Hata Kodunu Girin!")
    }
    if ($("#power").is(":checked")) {
        if ($("#powerSN").val() == "") {
            return alert("Power Seri Numarasını Girin!")
        }
    }
    if ($("#cpu").is(":checked")) {
        if ($("#cpuSN").val() == "") {
            return alert("Cpu Seri Numarasını Girin!")
        }
    }
    if ($("#peripheral").is(":checked")) {
        if ($("#peripheralSN").val() == "") {
            return alert("Peripheral Seri Numarasını Girin!")
        }
    }
    $('#checkicon4').show();
    otherPartsBool = true;
});
$("#otherForm").find(":reset").click(function () {
    otherPartsBool = true;
    $("#checkicon4").hide();
    $("#powerForm").hide();
    $("#cpuForm").hide();
    $("#peripheralForm").hide();
})
$("#305").click(() => {
    if ($('#lowbattery').is(":checked") || $('#n252').is(":checked")) {
        alert("Diğer batarya arızaları ile aynı anda seçilemez!")
        $('#305').prop('checked', false)
    }
})
$("#lowbattery").click(() => {
    if ($('#305').is(":checked") || $('#n252').is(":checked")) {
        alert("Diğer batarya arızaları ile aynı anda seçilemez!")
        $('#lowbattery').prop('checked', false)
    }
})
$("#n252").click(() => {
    if ($('#lowbattery').is(":checked") || $('#305').is(":checked")) {
        alert("Diğer batarya arızaları ile aynı anda seçilemez!")
        $('#n252').prop('checked', false)
    }
})