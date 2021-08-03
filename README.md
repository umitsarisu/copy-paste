# Kopyala-Yapıştır Uygulaması

## Açıklama

Bu uygulama, teknik serviste tamir edilen cihazlar ile ilgili doldurulması gereken formlar için hazır veriler sunmaktadır. 

---

__Uygulama Responsive tasarımlıdır. 500px üzerindeki bütün ekran boyutlarında stabil çalışmaktadır.__<br>
__Daha düşük ekran boyutu olan cihazlar için tasarlanmamıştır.__

---

### Kullanım 
  
__Kullanıcı__;
- tamir ettiği cihaz türünü seçer,
- çağrı formu hangi kod ile açıldıysa o kodu müşteri şikayeti bölümüne girer,
- cihazın sağlam olup olmadığı sorusunu cevaplar,
- bulgular bölümünde cihazın hangi testlerden kaldığını seçer,
- açılan sekmede ilgili testlerin altında hangi yedek parçaların kullanıldığını seçer,
- seri numarası olan parçaların seri numarası bilgilerini doldurur,
- en son __Sonuç Sayfasına Gitmek İçin Tıklayın__  butonuna tıklar,

__Not: Uygulama bütün sekmeleri kontrol eder ve herhangi bir yanlışlık ya da eksiklik olması durumunda kullanıcıyı uyarır.__

- eğer her şey yolundaysa sonuç sayfası açılır.
- __uygulama, kullanıcının doldurduğu bilgileri javascript dosyalarında bulunan objeler içerisindeki veriler ile harmanlayarak ilgili sekmelere yazar__
- kullanıcı bu bilgileri sekmelerin solunda bulunan copy butonu ile kopyalayıp veri tabanına yapıştırarak formunu doldurur.

## Amaç

- Formlar ingilizce doldurulması gerekmektedir. Ancak teknisyenlerin ingilizce bilgisi yeterli değildir.
- Bu formlar İrlanda'ya ve Amerika'ya raporlanmaktadır. 
- Kullanıcıdan kaynaklanan eksik ya da hatalı doldurulmuş formlar olumsuz bir skor olarak Amerika'dan geri dönmektedir.
- Bir cihaz formu için çok sayıda alan doldurulması gerekmektedir. 
- Çok sayıda yedek parça kullanıldığı zaman her birinin bilgilerini doldurmak karmaşaya neden olmaktadır. 
- __Kullanıcıdan kaynaklanan sorunların minimuma indirilmesi, Amerika'dan hatalı formların geri dönmemesi,__
- __dikkat ve konsantrasyon dağılmasının önüne geçilmesi ve zamandan tasarruf edilmesi amaçlanmıştır.__

---

![kopyalayapistir_ornek](/KopyalaYapıştır/images/readme/readme-kopyala-yapistir.jpg)

![kopyalayapistir_ornek](/KopyalaYapıştır/images/readme/readme-sonuc.jpg)
