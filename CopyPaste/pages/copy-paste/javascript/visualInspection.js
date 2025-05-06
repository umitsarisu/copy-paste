let VisualParts = SpareParts.filter((item) => {
    if (item.test == "true" && item.isAvailable == "true") return item
})
VisualParts.sort((a, b) => a.code.localeCompare(b.code));
const VisualObj = {
    damaged_parts: [],
    damaged_part_names: [],
    visual_bool: true
}
$("#deviceİnfoForm").submit(function () {
    setVisualOptions();
})
const setVisualOptions = () => {
    $("#sparePartsVisual").empty();
    const appendVisual = (part) => {
        images.map((image) => {
            if (part.id == image[0]) {
                $("#sparePartsVisual").append(`
                    <div class="visualPart">
                        <div class="hover-left">
                            <img src='${image[1]}'>
                        </div>
                        <p id="${part.id}" value="${part.name}" ondblclick="damagedPart(this)">         
                            ${part.name}
                        </p>
                    </div>
                `)
            }
        })
    }
    VisualParts.map((part) => {
        if ($("#plumA").is(":checked")) {
            if (part.model == "Plum A") {
                appendVisual(part);
            }
        }
        else if ($("#plum360").is(":checked")) {
            if (part.model == "Plum 360") {
                appendVisual(part);
            }
        }
    })
}
const damagedPart = (element) => {
    const ids = VisualObj.damaged_parts.map(part => part.id)
    if (!ids.includes(element.id)) {
        VisualParts.map(part => {
            if (part.id == element.id) {
                VisualObj.damaged_parts.push(part)
                VisualObj.damaged_part_names.push(part.name.toLocaleUpperCase("en"));
            }
        })
        VisualObj.visual_bool = false;
        $("#checkicon2").hide();
    }
    $("#showVisual").val(VisualObj.damaged_part_names.join(", "));
}
//Visual Inspection Submit
$("#visualInspection").find(":submit").click(function () {
    if (VisualObj.damaged_parts.length != 0) {
        $('#checkicon2').show();
    }
    VisualObj.visual_bool = true;
})
// Visual Reset
$("#visualInspection").find(":reset").click(function () {
    VisualObj.visual_bool = true;
    $("#checkicon2").hide();
    // Değişkenleri sıfırlama
    yorumVisual = "";
    VisualObj.damaged_parts = [];
    VisualObj.damaged_part_names = [];
    $("#showVisual").val("")
})