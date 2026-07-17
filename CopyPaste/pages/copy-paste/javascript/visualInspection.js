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
    const visualContainer = $("#sparePartsVisual");
    visualContainer.empty(); // Temizle

    // Seçili modeli belirle
    const selectedModel = $("#plumA").is(":checked") ? "Plum A" : ($("#plum360").is(":checked") ? "Plum 360" : null);

    if (!selectedModel) return;

    VisualParts.forEach((part) => {
        // Model kontrolü
        if (part.model === selectedModel) {
            // images dizisinden bu parçaya ait resmi BUL 
            // image[0] = ID, image[1] = URL varsayımıyla:
            const partImage = images.find(img => img[0] == part.id);
            console.warn(`Resim bulunamadı: ${part.name} (ID: ${part.id}) + ${partImage}`);
            // Eğer resim bulunduysa ekrana bas
            if (partImage) {
                visualContainer.append(`
                    <div class="visualPart">
                        <div class="hover-left">
                            <img src='${partImage[1]}'>
                        </div>
                        <p id="${part.id}" value="${part.name}" ondblclick="damagedPart(this)">         
                            ${part.name}
                        </p>
                    </div>
                `);
            } else {
                console.warn(`Resim bulunamadı: ${part.name} (ID: ${part.id})`);
            }
        }
    });
}
const damagedPart = (element) => {
    const targetId = String(element.id);

    // Zaten eklenmiş mi kontrolü (Performans için some kullanımı)
    const isAlreadyAdded = VisualObj.damaged_parts.some(part => String(part.id) === targetId);

    if (!isAlreadyAdded) {
        // VisualParts içinde ilgili parçayı bul
        const part = VisualParts.find(p => String(p.id) === targetId);

        if (part) {
            VisualObj.damaged_parts.push(part);
            VisualObj.damaged_part_names.push(part.name.toLocaleUpperCase("en"));

            // Durum güncellemeleri
            VisualObj.visual_bool = false;
            $("#checkicon2").hide();
        }
    }

    // Input alanını güncelle
    $("#showVisual").val(VisualObj.damaged_part_names.join(", "));
};

// Visual Inspection Submit
$("#visualInspection").find(":submit").on("click", function (e) {
    // Eğer buton gerçek bir submit ise sayfa yenilenmesini durdurmak gerekebilir:
    // e.preventDefault(); 

    if (VisualObj.damaged_parts.length > 0) {
        $('#checkicon2').show();
    }
    VisualObj.visual_bool = true;
});

// Visual Reset
$("#visualInspection").find(":reset").on("click", function () {
    // Objeyi ve UI'ı tek seferde sıfırlama
    VisualObj.visual_bool = true;
    VisualObj.damaged_parts = [];
    VisualObj.damaged_part_names = [];

    // Global değişken
    yorumVisual = "";

    // DOM Güncellemeleri (Zincirleme kullanım)
    $("#checkicon2").hide();
    $("#showVisual").val("");
});