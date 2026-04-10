function print() {
    // Hata Geçmiş Kayıtları
    $("#errorHistoryLogs").val(PrintObj.error_history_logs.toLocaleUpperCase("en"))
    // Cihazın Durumu
    $("#cihazinDurumu").val(PrintObj.device_situation.toLocaleUpperCase("en") || "N/A");
    // Run in Test Sonuçları
    $("#runInTestResult").val(PrintObj.run_in_test_result.toLocaleUpperCase("en"));
    // Bulgular
    $("#bulgular").val(PrintObj.findings.join(", ").toLocaleUpperCase("en"));
    // Değişen Parça açıklaması
    $("#degisenParca").val(PrintObj.changed_parts.length != 0 ? PrintObj.changed_parts.join(", ").toLocaleUpperCase("en") : "N/A");
    // Analiz ve Araştırma Kodları
    renderTable2();
    // Referans Değerler
    printRvg();
    // Temel Sebep
    $("#probableCause").val(PrintObj.probable_causes.join(", ").toLocaleUpperCase("en"));
    // Ek Yorum
    $("#ekYorum").val(PrintObj.more_comment.join(", ").toLocaleUpperCase("en"));
    // Yorum
    $("#yorum").val(PrintObj.first_sentence + "\n" + PrintObj.comment.join("\n").toLocaleUpperCase("en"));
    // Tamir Kodları
    $("#tamirKodu").val(PrintObj.repair_codes.join(" - ").toLocaleUpperCase("en"))
    // Şikayet Onaylandı mı?
    $("#onay").val(PrintObj.is_approved === true ? "Evet" : (PrintObj.is_approved === false ? "Hayır" : "Farklı"));
    // Tablo Renklerini Sıfırlama
    document.querySelectorAll('.table-textarea').forEach(el => {
    el.style.backgroundColor = ""; // CSS'deki orijinal rengine (kağıt rengi) döner
    el.style.borderColor = "";
    el.style.color = "";
});
}
//Copy
const copyFromTextarea = async (btn) => {
    const row = btn.closest('tr');
    const textarea = row.querySelector('.table-textarea');

    if (!textarea) return;

    const textToCopy = textarea.value;

    try {
        // Modern Clipboard kopyalama
        await navigator.clipboard.writeText(textToCopy);

        // --- TEXTAREA RENGİ (SABİT) ---
        // Sayfa yenilenene kadar bu renk kalır
        textarea.style.backgroundColor = "#d4edda";
        textarea.style.borderColor = "#c3e6cb";
        textarea.style.color = "#155724"; // Yazı rengini de koyu yeşil yapalım

        // --- BUTON GERİ BİLDİRİMİ (GEÇİCİ) ---
        const originalText = btn.innerText;

        // Butonun rengini yeşil yapıyoruz (Bootstrap sınıfları ile)
        btn.classList.replace("btn-outline-secondary", "btn-success");
        btn.innerText = "Kopyalandı!";

        // Buton 1.5 saniye sonra eski haline döner ama textarea yeşil kalmaya devam eder
        setTimeout(() => {
            btn.classList.replace("btn-success", "btn-outline-secondary");
            btn.innerText = originalText;
        }, 1500);

    } catch (err) {
        // Yedek kopyalama yöntemi
        textarea.select();
        document.execCommand("copy");

        textarea.style.backgroundColor = "#fff3cd"; // Hata durumunda sarı sabit kalsın
    }
}

const printRvg = () => {
    $(".rvg").empty();
    $(".egt").empty();

    const makeRVGHtml = (range, psi) => {
        return `
            <div class="d-flex justify-content-between">
                <div style="width:95px" class="d-flex justify-content-between">
                    <span class="font-monospace">${range}</span>
                    <span>=></span>
                </div>
                <button onclick="copyPsi('${psi}')" style="width: 80px; text-align: center" 
                class="btn btn-outline-dark fw-bold">${psi}</button>                    
            </div>`
    }
    const makeEGTHtml = (range, value) => {
        return `
            <div class="d-flex justify-content-between">
                <div style="width:75px" class="d-flex justify-content-between">
                    <span class="font-monospace">${range}</span>
                    <span>=></span>
                </div>
                <span class="fw-bold">${value}</span>
            </div>`
    }
    $(".rvg").append(makeRVGHtml("3-9 PSI", PrintObj.rv6psi));
    $(".rvg").append(makeRVGHtml("7-13 PSI", PrintObj.rv10psi));
    $(".egt").append(makeEGTHtml("100µA", PrintObj.rv1));
    $(".egt").append(makeEGTHtml("500µA", PrintObj.rv2));
    $(".egt").append(makeEGTHtml("500µA", PrintObj.rv3));
    $(".egt").append(makeEGTHtml("1000µA", PrintObj.rv4));
    $(".egt").append(makeEGTHtml("200mΩ", PrintObj.rv5));
}
const copyPsi = async (psi) => {
    try {
        let textToCopy = String(psi).replace('.', ',');
        await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
        let clipboard = document.createElement("textarea");
        clipboard.value = String(psi).replace('.', ',');
        document.body.appendChild(clipboard);
        clipboard.select();
        document.execCommand("copy");
        document.body.removeChild(clipboard);
    }
}
const copyPriSec = async (btn) => {
    // Butonun içindeki metni (Örn: 13850921) alıyoruz
    const textToCopy = btn.innerText;

    try {
        // Modern kopyalama yöntemi
        await navigator.clipboard.writeText(textToCopy);

        // Kullanıcıya görsel geri bildirim verelim
        const originalText = btn.innerText;
        btn.innerText = "Kopyalandı!";
        btn.classList.replace("btn-outline-secondary", "btn-success"); // Butonu yeşil yap

        // 1 saniye sonra eski haline döndür
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace("btn-success", "btn-outline-secondary");
        }, 1000);

    } catch (err) {
        // Yedek kopyalama yöntemi (Eski tarayıcılar için)
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = textToCopy;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        btn.innerText = "OK!";
        setTimeout(() => { btn.innerText = textToCopy; }, 1000);
    }
}