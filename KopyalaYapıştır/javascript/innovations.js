var i = 1;
$("#innovations").append("<marquee scrollamount='1' direction='up' scrolldelay='200' class='shadow' onmouseover='this.stop();'"
    + "onmouseout='this.start();'>"
    + "<h6 style='margin: 0 0 0 -15px'>17.05.2021 tarihli yenilikler</h6>"
    + ordinal() + "Kopyala Yapıştır, yeni sayfası ile diğer sayfaları da içine alacak şekilde yepyeni bir görünüme kavuştu.<br>"
    + ordinal() + "Yeni eklenen Yedek Parçalar sayfası ile bütün yedek parçaların resimli listesine ulaşabilirsiniz.<br>"
    + ordinal() + "Cari Kodlar sayfasından İstanbul hastanelerinin cari kodlarına ulaşabilirsiniz. Talep olursa diğer bölgelerin cari kodları da eklenebilir.<br>"
    + ordinal() + "Cihaz Kayıt Formu ile cihazları hastane adları ve servislerini listeden seçerek panoya kaydedebilirsiniz. Şimdilik sadece İstanbul hastaneleri ile sınırlı.<br>"
    + ordinal() + "Büyüteç programı ile metin kutusuna küçük harfler ile yazılan yazıları büyük harflere dönüştürebilirsiniz.<br>"
    + ordinal() + "Kopyala-Yapıştır'a rastgele geçmiş tarih aralığı üreten bölüm eklendi. Çağrı açılış tarihini ilgili yere girip çalıştıra basın.<br>"
    + ordinal() + "Sallamasyon programının ismi Rastgele Değer Üretici olarak değişti ve görsel açıdan zenginleştirildi.<br>"
    + ordinal() + "Kopyala-Yapıştır'ın içerisine Rastgele Değer kısımı eklendi.<br>"
    + ordinal() + "Kopyala-Yapıştır'a cihazın hangi test numaralarından kaldığını gösteren test bilgileri eklendi.<br>"

    //+ ordinal() + "<br>"
    + "</marquee>")
function ordinal() {
    return i++ + ". ";
}