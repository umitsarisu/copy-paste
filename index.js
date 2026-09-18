"use strict";

const ADMIN_PASSWORD = "2318";

function pageTransition(x) {
    // 1. ŞİFRE KONTROLÜ (Yedek Parça Sayfası -> x == 5)
    if (x == 5) {
        const pwd = prompt("Yedek Parça Sistemine erişmek için şifreyi giriniz:");

        // Şifre yanlış girildiyse veya iptal basıldıysa
        if (pwd !== ADMIN_PASSWORD) {
            if (pwd !== null) {
                alert("❌ Hatalı şifre! Ana sayfaya yönlendiriliyorsunuz.");
            }
            // Doğrudan Ana Sayfaya (x = 0) yönlendir ve geçişi durdur
            pageTransition(1);
            return;
        }

        // Şifre doğruysa verileri yükle
        if (typeof loadParts === "function") {
            loadParts();
        }
    }

    // 2. TÜM ARAYÜZ ELEMANLARINI GİZLE
    $("iframe").hide();
    $("#rvgContent").hide();
    $("#sparePartsModule").hide(); // Yeni eklenen yedek parça alanını da gizliyoruz
    $("a[name='navlink-a']").removeClass("nav-active");

    // Menüdeki aktif sekme vurgusunu ayarla
    $("a[name='navlink-a']").eq(x).addClass("nav-active");

    // 3. SEÇİLEN SAYFAYI GÖSTER
    if (x == 0) { $("iframe[id='home']").show(); }
    else if (x == 1) { $("iframe[id='copyPasteFrame']").show(); }
    else if (x == 2) { $("iframe[name='iframeSpareParts']").show(); } 
    else if (x == 3) { $("iframe[name='iframeCari']").show(); }
    else if (x == 4) { $("#rvgContent").show(); }
    else if (x == 5) { $("#iframeCost").show(); }
    else if (x == 6) { $("iframe[name='iframeRunin']").show(); }
    else if (x == 7) { $("iframe[name='iframeBuyutec']").show(); }
}
const setPassword = () => {
    localStorage.setItem("password_text", $("#password_id").val().toLowerCase());
    checkPassword();
}
$("#password_id").val(localStorage.getItem("password_text") ? localStorage.getItem("password_text") : "");
const deletePassword = () => {
    $("#password_id").val("")
    localStorage.setItem("password_text", "");
}