function enterKeyPress(e) {
    /*Enter tuşuna basıldığında fonksiyonu çalıştırıp false döndürdüğü için sayfayı yenilemiyor.*/
    if (e.keyCode === 13) return false;
}
//Yine bekleriz fonksiyonu
function pageReset() {
    document.location.reload();
}
const checkPassword = () => {
    password_text = localStorage.getItem("password_text");
    password_text == "berkcan" ? $("#rvgContent").show() : $("#rvgContent").hide();
}
checkPassword();
//Seri Numarası girilen yerlerde auto complate kapalı//
$(function () {
    $("input[placeholder='Seri Numarası'").attr('autocomplete', 'off');
})
// Background Color Atamaları
const color = {
    // plumA: "linear-gradient(to bottom, #7abcff 0%,#4096ee 17%,#4096ee 17%,#4096ee 31%,#4096ee 44%,#4096ee 53%,#60abf8 76%,#4096ee 94%)",
    plumA: "linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 15%,rgba(0,174,255,1) 53%,rgba(43,136,217,1) 86%,rgba(43,136,217,1) 88%,rgba(43,136,217,1) 92%,rgba(43,136,217,1) 100%)",
    plum360: "linear-gradient(to bottom, rgba(147,83,163,1) 0%,rgba(173,109,214,1) 20%,rgba(173,109,214,1) 29%,rgba(147,83,163,1) 52%,rgba(173,109,214,1) 75%,rgba(173,109,214,1) 83%,rgba(147,83,163,1) 100%)",
    contentColor: "rgba(202, 211, 200,0.5)"
}
$(".bgColor").css("background", color.plumA);
$(".bgColor").css("background", color.plumA);
$(".models:nth(0)").css("background", color.plumA);
// $(".models:nth(0)").css("background", color.plumA);
$(".models:nth(1)").css("background", color.plum360);
$(".contentBgColor").css("background", color.contentColor);

const getAllPreviousForms = () => {
    return JSON.parse(localStorage.getItem("printObj"));
}
const setPreviousForms = (payload) => {
    let previousForms = [];
    if (localStorage.getItem("printObj") != null
        && localStorage.getItem("printObj") != undefined) {
        previousForms = getAllPreviousForms();
    }
    previousForms.push(payload);
    if (previousForms.length == 6) {
        previousForms.splice(0, 1);
    }
    localStorage.setItem("printObj", JSON.stringify(previousForms));
    writePreviousForms();
}
const writePreviousForms = () => {
    $("#dropdownOptions").empty();
    let previousForms = getAllPreviousForms();
    if (previousForms != null) {
        previousForms.reverse();
        previousForms.map(form => {
            let previousArr = [form.date_previous_form, form.repair_codes.join(", ")]
            $("#dropdownOptions").append(`
                <li>
                    <button class="btn btn-primary m-1" value="${previousArr.join()}" onclick="previousForm('${previousArr.join()}')">
                        <span class="text-warning">${previousArr[1]}</span>
                        <span>${previousArr[0]}</span>
                    </button>
                </li>
            `)
        })
    }
}
writePreviousForms();
const getPreviousForms = (repair_codes) => {
    let previousForms = getAllPreviousForms();
    previousForms.filter(form => {
        if (repair_codes == [form.date_previous_form, form.repair_codes.join(", ")].join()) {
            return PrintObj = form;
        }
    })
    print();
}
const previousForm = (payload) => {
    getPreviousForms(payload);
}
$("ul#dropdownOptions li button").on("click", function () {
    getPreviousForms($(this).val());
})
const plum360Click = () => {
    $(".bgColor").css("background", color.plum360);
    setVisualOptions();
    VisualObj.damaged_parts = [];
    VisualObj.damaged_part_names = [];
    setOtherParts("Plum 360");
    $("#showVisual").val("")
    $("#checkicon2").hide();
}
const plumAClick = () => {
    $(".bgColor").css("background", color.plumA);
    setVisualOptions();
    VisualObj.damaged_parts = [];
    VisualObj.damaged_part_names = [];
    setOtherParts("Plum A");
    $("#showVisual").val("")
    $("#checkicon2").hide();
}
$("#plumA").click(() => plumAClick())
$("#plum360").click(() => plum360Click())

// Main Page Buttons
$(function () {
    $("#forwardButton").click(function () {
        $("#mainPage").hide();
        $("#sonuc").show();
        $("#backwardButton").show();
        $("#previousFormsButton").show();
        $("#forwardButton").hide();
    })
    $("#backwardButton").click(function () {
        $("#mainPage").show();
        $("#sonuc").hide();
        $("#backwardButton").hide();
        $("#previousFormsButton").hide();
        $("#forwardButton").show();
        $("#dropdownOptions").hide();
    })
    $("#previousFormsButton").click(function () {
        $("#dropdownOptions").toggle();
    })
    $("#deviceİnfoForm").submit(function () {
        $("#isIt950").css("display", "flex");
    })
    // Cihaz sağlam
    $("#yes1").click(function () {
        $("#findings").hide();
        $("#theTests").hide();
        $("#footer1").show();
        $("#plumA").click(() => plumAClick())
        $("#plum360").click(() => plum360Click())
    })
    // Cihazda arıza görüldü
    $("#no1").click(function () {
        $("#findings").show();
        $("#theTests").show();
        $("#liVI").click();
        $("#footer1").show();
        $("#plum360").is(":checked") ? plum360Click() : plumAClick();
        $("#deviceİnfoForm").show();
    })
    // Bulgular
    function active(x) {
        $("#liVI").removeClass("bg-success text-light");
        $("#liOP").removeClass("bg-success text-light");
        $("#liMC").removeClass("bg-success text-light");
        $(x).addClass("bg-success text-light");
    }
    $("#liVI").click(function () {
        active(this);
        testShow("#visualInspection");
    })
    $("#liOP").click(function () {
        active(this);
        testShow("#otherSpareParts")
    })
    $("#liMC").click(function () {
        active(this);
        testShow("#mechanismForm")
    })
    $("#otherPartsToggle").click(function () {
        $("#otherForm").toggle();
    })
})
let testShow = (x) => {
    $("#visualInspection").hide();
    $("#mechanismForm").hide();
    $("#otherSpareParts").hide();
    $(x).show();
}
function mainPageFormsVerification() {
    $("#previousFormsButton").show();
    if ($("#no1").is(":checked")) {
        if (VisualObj.visual_bool == true) {
            if (mechanismBool == true) {
                if (otherPartsBool == true) {
                    $("#backwardButton").show();
                    $("#forwardButton").hide();
                    result();
                }
            }
            else alert("Mekanizma bilgileri gönderilmedi!")
        }
        else alert("Visual Inspection bilgileri gönderilmedi!")
    }
    else if ($("#yes1").is(":checked")) {
        $("#backwardButton").show();
        $("#forwardButton").hide();
        result();
    }
}
$(function () {
    const tableHeaders = [
        "Kod",
        "Alan",
        "Copy",
        "Değer"
    ]
    const thead = document.querySelector("#table1 thead");

    // tableHeaders dizisindeki her bir elemanı <th> etiketine sarıp birleştiriyoruz
    const headerRow = `
        <tr>
            ${tableHeaders.map(title => `<th>${title}</th>`).join('')}
        </tr>
    `;
    thead.innerHTML = headerRow;
    const tableData = [
        // Hata / Geçmiş Kayıtları
        { id: "errorHistoryLogs", code: "10", label: "Hata / Geçmiş Kayıtları", value: "N/A" },
        { id: "cihazinDurumu", code: "30", label: "Cihazın Durumu", value: "N/A" },
        { id: "runInTestResult", code: "40", label: "16 Run in Test Sonuçları", value: "N/A" },
        { id: "", code: "5", label: "Çağrı Açılış Tarihini Girin!" },
        { id: "dateResult", code: "50", label: "Geçmiş Tarih Aralığı", value: "N/A" },
        { id: "bulgular", code: "80", label: "Bulgular", value: "N/A" },
        { id: "yorum", code: "90", label: "Yorum", value: "N/A" },
        { id: "ekYorum", code: "100", label: "Ek Yorum", value: "N/A" },
        { id: "probableCause", code: "110", label: "Temel Sebep", value: "N/A" },
        { id: "onay", code: "120", label: "Şikayet Onaylandı" },
        { id: "degisenParca", code: "130", label: "Değiştirilen Parçalar", value: "N/A" },
    ];
    const tbody = document.querySelector("#table1 tbody");
    tbody.innerHTML = ""; // Önce tabloyu temizle

    tableData.forEach(item => {
        let rightContent = ''; // Sağ tarafa gelecek HTML içeriği
        // Özel içerikleri burada belirliyoruz
        switch (item.code.toString()) {
            case "5":
                rightContent = `
                        <td class="value-cell" colspan="2">
                            <form action="javascript: dateFunc()" style="display: flex;">
                                <input type="date" id="date1" class="form-control p-0"
                                        style="width: 130px; align-self: center;" value="2024-01-02"
                                        min="2022-01-02" max="2050-12-31" required>
                                <button type="submit" class="btn btn-outline-secondary" name="">Çalıştır</button>
                            </form>
                        </td>`;
                break;
            // case "120":
            //     const onay = [
            //         {
            //             id: "resultYes",
            //             status: "EVET",
            //         },
            //         {
            //             id: "resultNo",
            //             status: "HAYIR",
            //         },
            //         {
            //             id: "resultDifferent",
            //             status: "FARKLI",
            //         }
            //     ]
            //     rightContent = `
            //             <td colspan="2" class="align-middle">
            //                 <div class="radio-group">
            //                     ${onay.map(opt => `
            //                         <label for="${opt.id}" class="resultLabel">
            //                             <input type="radio" name="resultRadio" id="${opt.id}" value="${opt.status}"> ${opt.status}
            //                         </label>
            //                     `).join('')}
            //                 </div>
            //             </td>`;
            //     break;
            default:
                // Standart satır yapısı (Copy Butonu + Textarea)
                rightContent = `
                        <td class="p-0 copy-cell">
                        <button type="button" class="btn btn-outline-secondary" onclick="copyFromTextarea(this)">Copy</button>
                        </td>
                        <td class="value-cell">
                            <textarea id="${item.id}" class="table-textarea form-control" name="resultTextareas" readonly>${item.value || 'N/A'}</textarea>
                        </td>`;
                break;
        }

        // Ortak şablonu tek seferde oluşturuyoruz
        const row = `
        <tr>
            <td>${item.code}</td>
            <td>${item.label}</td>
            ${rightContent}
        </tr>`;

        tbody.insertAdjacentHTML('beforeend', row);
    });
})

/* |||||||||||||||||||||||||||||
Tablo 2 Analiz ve Araştırma Kodları
|||||||||||||||||||||||||||||||||*/
const tableHeaders2 = [
    "Analiz Kodları",
    "Araştırma Kodları",
    "Tamir Kodları"
];

// Bu fonksiyonu print() fonksiyonunun içinden çağırabilirsin
const renderTable2 = () => {
    const thead = document.querySelector("#table2 thead");
    const tbody = document.querySelector("#table2 tbody");

    // 1. Başlıkları (Header) Oluştur
    thead.innerHTML = `
        <tr>
            ${tableHeaders2.map(title => `<th>${title}</th>`).join('')}
        </tr>
    `;

    // 2. Verileri Al (Eğer undefined ise boş dizi [] olarak kabul et ki hata vermesin)
    const analysis = PrintObj.analysis_codes || [];
    const investigation = PrintObj.investigation_codes || [];
    const repair = PrintObj.repair_codes || [];

    // 3. En uzun dizinin eleman sayısını bul
    const maxRows = Math.max(analysis.length, investigation.length, repair.length);

    let rowsHtml = '';

    // 4. En uzun dizi kadar döngü oluştur
    for (let i = 0; i < maxRows; i++) {
        // Eğer o indekste veri yoksa (undefined), hücreyi boş bırak ("" veya "-")
        const val1 = analysis[i] !== undefined ? analysis[i] : "";
        const val2 = investigation[i] !== undefined ? investigation[i] : "";
        const val3 = repair[i] !== undefined ? repair[i] : "";

        rowsHtml += `
            <tr>
                <td>${val1}</td>
                <td>${val2}</td>
                <td>${val3}</td>
            </tr>
        `;
    }

    // (Opsiyonel) Eğer her iki liste de boşsa bilgi mesajı göster
    if (maxRows === 0) {
        rowsHtml = `
            <tr>
                <td colspan="2" style="text-align:center; color:gray;">
                    Kayıt bulunamadı.
                </td>
            </tr>
        `;
    }

    // 5. Satırları tabloya bas
    tbody.innerHTML = rowsHtml;
}
renderTable2();