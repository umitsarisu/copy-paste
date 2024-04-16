"use strict";
// Özel Hastanelerin Bilgileri
const privateHospitals = [
    ["M17M001", "Meditera"],
    ["M04K001", "Koç Üniversitesi"],
    ["M05M021", "Moment, Amerikan Hastanesi"],
    ["M05I002", "Memorial Şişli-Okmeydanı"],
    ["M05I008", "Memorial Ataşehir"],
    ["M05I017", "Memorial Bahçelievler"],
    ["M05T003", "TBV, Memorial Hastanesi"],
    ["M05G002", "Grup Florence Nightingale"],
    ["M05I012", "istanbul Florence Nightingale"],
    ["M05K006", "Kadıköy Florence Nightingale"],
    ["M05F002", "Gayrettepe Florence Nıghtıngale & Fulya Sağlık"],
    ["M04Y001", "Yeditepe Üniversitesi"],
    ["M05R001", "Rahmet Sağlık, Özel Güngören Hastanesi"],
    ["M05Y001", "Yedikule Ermeni Hastanesi"],
    ["M05A005", "Anadolu Sağlık Merkezi, ASM"],
    ["M05E006", "Emsey Sağlık Hizmetleri"],
    ["M01S072", "istanbul Medeniyet Üniversitesi, Göztepe"],
    ["M01İ007", "Başakşehir Şehir Hastanesi, Çam ve Sakura"],
    ["M01S076", "Cemil Taşçıoğlu Şehir Hastanesi, Okmeydanı"],
    ["M04A001", "Beykent Üniversitesi Hastanesi"],
    ["M05M038", "Medikal Park İstanbul, Pendik"]
];
// İstanbul İçi Hastanelerin Bilgileri
const istanbulHospitals = [
    ["M03I013", "istanbul Üniversitesi Cerrahpaşa Tıp Fakültesi"],
    ["M03I003", "istanbul Üniversitesi İstanbul Çapa Tıp Fakültesi"],
    ["M03I009", "istanbul Üniversitesi Onkoloji Enstitüsü"],
    ["M01S068", "istanbul Eğitim ve Araştırma Hastanesi, Samatya"],
    ["M01H002", "Haseki EAH"],
    ["M01B003", "Sadi Konuk, Bakırköy Devlet Hastanesi"],
    ["M01İ014", "Kanuni Sultan Süleyman Hastanesi, KSS"],
    ["M01T027", "Sultanbeyli Devlet Hastanesi"],
    ["M01G007", "Gaziosmanpaşa EAH, GOP"],
    ["M01T084", "Taksim EAH"],
    ["M01E019", "Eyüp Devlet Hastanesi"],
    ["M01S138", "Şişli Etfal EAH"],
    ["M01I010", "Haydarpaşa Numune Hastanesi"],
    ["M01G001", "Sultan Abdülhamit EAH,Haydarpaşa"],
    ["M01U001", "Ümraniye EAH"],
    ["M01T025", "Marmara Üniversitesi"],
    ["M01T017", "Kartal Koşuyolu Hastanesi"],
    ["M01D022", "Lütfi Kırdar Hastanesi"],
    ["M01T065", "Tuzla Devlet Hastanesi"],
    ["M01S075", "istanbul Kartal Devlet Hastanesi"],
    ["M01S151", "Süreyyapaşa Gögüs Hastanesi"],
    ["M01B001", "Bağcılar EAH"],
    ["M01B055", "Beylikdüzü Devlet Hastanesi"]
];
// İstanbul Dışı Hastanelerin Bilgileri
const hospitalsOutsideOfIstanbul = [
    ["M03K002", "Kocaeli Üniversitesi"],
    ["M01S094", "Kocaeli Derince Devlet"],
    ["M01S006", "Sakarya Üniversitesi"],
    ["M01S106", "Sakarya Yenikent Devlet Hastanesi"],
    ["M01S008", "Sakarya Kadın Doğum ve Çocuk Hastanesi"],
    ["M01T080", "Sakarya Toyotosa"],
    ["M03T004", "Trakya Üniversitesi"],
    ["M01E001", "Edirne Sultan 1.Murat  Devlet Hastanesi"],
    ["M01T085", "Tekirdağ Şehir Hastanesi"],
    ["M01B005", "Balıkesir Devlet Hastanesi"],
    ["M03B001", "Bolu İzzet Baysal Hastanesi"],
    ["M03U001", "Uludağ Üniversitesi"],
    ["M01S050", "Bursa Çekirge Devlet Hastanesi"],
    ["M03N001", "Namık Kemal Üniversitesi"],
    ["M03D005", "Düzce Üniversitesi"],
    ["M01K126", "Kocaeli Şehir Hastanesi"],
];
// Servis isimleri
const departments = [
    ["Acil"],
    ["Acil Ameliyathane"],
    ["Acil Cerrahi"],
    ["Acil Cerrahi Özel Servisi"],
    ["Acil Dahiliye"],
    ["Acil Dahiliye YB"],
    ["Acil Göğüs Cerrahisi"],
    ["Acil YB"],
    ["Ameliyathane"],
    ["Anestezi ve Reanimasyon"],
    ["Anestezi ve R. YB"],
    ["Anestezi ve R.-1"],
    ["Anestezi ve R.-2"],
    ["Anestezi ve R.-3"],
    ["Anestezi ve R.-4"],
    ["Anestezi ve R.- A"],
    ["Anestezi ve R.- B"],
    ["Anjio"],
    ["Ayaktan Kemoterapi"],
    ["Beyin Cerrahisi Ameliyathane"],
    ["Beyin Cerrahisi YB"],
    ["Biyomedikal"],
    ["Cerrahi YB"],
    ["Cerrahi 1"],
    ["Cerrahi 2"],
    ["Çocuk"],
    ["Çocuk Acil"],
    ["Çocuk Cerrahi"],
    ["Çocuk Cerrahisi YB"],
    ["Çocuk Dahiliye"],
    ["Çocuk Hastalıkları"],
    ["Çocuk Hematoloji"],
    ["Çocuk YB"],
    ["Çocuk 1"],
    ["Çocuk 2"],
    ["Dahiliye"],
    ["Dahiliye YB"],
    ["Damar Cerrahisi 1"],
    ["Damar Cerrahisi 2"],
    ["Doğumhane"],
    ["Erişkin Hematoloji"],
    ["Erişkin Onkoloji"],
    ["Fizik Tedavi ve Rehabilitasyon"],
    ["Gastroenteroloji"],
    ["Genel Cerrahi"],
    ["Genel Cerrahi Ameliyathane"],
    ["Genel Cerrahi YB"],
    ["Genel Dahiliye"],
    ["Genel YB"],
    ["Geriatri"],
    ["Göğüs Cerrahi"],
    ["Göğüs Cerrahi YB"],
    ["Hematoloji"],
    ["Hematoloji Ayaktan"],
    ["Hematoloji Onkoloji"],
    ["Hematoloji Poliklinik"],
    ["Hemodiyaliz"],
    ["İç Hastalıkları"],
    ["İmmünoloji"],
    ["İnme"],
    ["Jinekoloji"],
    ["Kadın Doğum Ameliyathane"],
    ["Kadın Doğum YB"],
    ["Kadın Doğum 1"],
    ["Kadın Doğum 2"],
    ["Kadın Hastalıkları ve Doğum"],
    ["Kalp Damar Cerr. Ameliyathane"],
    ["Kalp Damar Cerr. YB"],
    ["Kalp Damar Cerrahisi"],
    ["Kan Transfüzyon"],
    ["Kardiyoloji"],
    ["Kardiyoloji YB"],
    ["Kardiyoloji 1"],
    ["Kardiyoloji 2"],
    ["Kemoterapi"],
    ["Kit Transplantasyon"],
    ["Koroner YB"],
    ["Kritik YB"],
    ["Kronik YB"],
    ["Kulak Burun Boğaz"],
    ["KVC Pediatrik 2"],
    ["KVC Yetişkin 2"],
    ["KVC Yetişkin 3"],
    ["Medikal Onkoloji"],
    ["Merkez Ameliyathane"],
    ["Merkez YB"],
    ["Mikrobiyoloji"],
    ["Nefroloji"],
    ["Nefroloji Ayaktan Tedavi"],
    ["Nöroloji"],
    ["Nöroloji Acil"],
    ["Nöroloji YB"],
    ["Nöroloji 1"],
    ["Nöroloji 2"],
    ["Nöroloji 3"],
    ["Nöroşirurji"],
    ["Nöroşirurji Acil"],
    ["Nöroşirurji YB"],
    ["Nükleer Tıp"],
    ["Onkoloji"],
    ["Onkoloji Ayaktan Tedavi"],
    ["Onkoloji Poliklinik"],
    ["Onkoloji YB"],
    ["Onkoloji-1"],
    ["Onkoloji-2"],
    ["Organ Nakli"],
    ["Ortopedi"],
    ["Ortopedi Ameliyathane"],
    ["Ortopedi YB"],
    ["Patoloji"],
    ["Pediatri"],
    ["Pediatri Acil"],
    ["Pediatri Acil YB"],
    ["Pediatri Ayaktan Kemoterapi"],
    ["Pediatri Dahiliye"],
    ["Pediatri Gastro"],
    ["Pediatri Hematoloji Polikliniği"],
    ["Pediatri Nöroşirurji"],
    ["Pediatri Onkoloji Polikliniği"],
    ["Pediatrik Cerrahi"],
    ["Pediatrik Endokrinoloji"],
    ["Pediatrik Enfeksiyon"],
    ["Pediatrik Hematoloji"],
    ["Pediatrik Kardiyoloji"],
    ["Pediatrik Kit Transplantasyon"],
    ["Pediatrik Kök Hücre"],
    ["Pediatrik Nefroloji"],
    ["Pediatrik Nöroloji"],
    ["Pediatrik Onkoloji"],
    ["Pediatrik YB"],
    ["Pediatri-2"],
    ["Plastik Cerrahi"],
    ["Plastik Cerrahi Ameliyathane"],
    ["Post-Up YB"],
    ["Prematüre"],
    ["Psikiyatri"],
    ["Radyasyon Onkolojisi"],
    ["Radyoloji"],
    ["Reanimasyon YB"],
    ["Romatoloji"],
    ["Solunum YB"],
    ["Süt Çocuğu"],
    ["Süt Çocuğu 1"],
    ["Süt Çocuğu 2"],
    ["Üroloji"],
    ["Üroloji Ameliyathane"],
    ["Yanık"],
    ["Yanık Ameliyathane"],
    ["Yanık YB"],
    ["Yeni Doğan"],
    ["Yeni Doğan Özel Bakım"],
    ["Yeni Doğan YB"],
    ["Yetişkin YB"],
    ["Yoğun Bakım"],
    ["Yoğun Bakım 1. Basamak"],
    ["Yoğun Bakım 2. Basamak"],
    ["Yoğun Bakım 3. Basamak"]
];
const deviceListNo = [
    ["30010-06-05"],
    ["11971-36-03"],
    ["12391-06-01"],
    ["12391-36-01"]
];
//Hastaneleri Listeleme
$(function () {
    const listingOfHeaders = (title) => {
        return (
            $("#hospitalTable").append(`
                <tr>
                    <th colspan="5" class="title">${title}</th>
                </tr>
            `)
        )
    }
    const listingOfHospitals = (hospital, i) => {
        return (
            `<tr>
                <th>${i + 1}.</th>
                <td><button type="button" class="btn btn-outline-primary" name="cariButtons">Copy</button></td>
                <td name="hospitalCode">${hospital[0]}</td>
                <td><button type="button" class="btn btn-outline-danger" name="hastaneButtons">Copy</button></td>
                <td name="hospitalName">${hospital[1]}</td>
            </tr>`
        )
    }
    //Özel Hastanelerin Listelenmesi
    listingOfHeaders("Özel Hastaneler")
    privateHospitals.map((hospital, i) => {
        $("#hospitalTable").append(listingOfHospitals(hospital, i))
    })
    //İstanbul Hastanelerinin Listelenmesi
    listingOfHeaders("İstanbul Hastaneleri")
    istanbulHospitals.map((hospital, i) => {
        $("#hospitalTable").append(listingOfHospitals(hospital, i))
    })
    // İstanbul Dışı Hastanelerin Listelenmesi
    listingOfHeaders("İstanbul Dışı Hastaneler")
    hospitalsOutsideOfIstanbul.map((hospital, i) => {
        $("#hospitalTable").append(listingOfHospitals(hospital, i))
    })
});

// Filtreleme işlemi
function myFunction() {
    let table = document.getElementById("hospitalTable");
    let tr = table.getElementsByTagName("tr");
    let input = document.getElementById("myInput");
    let filter = input.value.toLowerCase();
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Copy Butonları
$(function () {
    $("button[name ='cariButtons']").click(function () {
        let clipboard = document.createElement("textarea");
        clipboard.value = $(this).parents("td").siblings("td:first()").text();
        document.body.appendChild(clipboard);
        clipboard.select();
        document.execCommand("copy");
        document.body.removeChild(clipboard);
    })
    $("button[name ='hastaneButtons']").click(function () {
        let clipboard = document.createElement("textarea");
        document.body.appendChild(clipboard);
        clipboard.value = $(this).parents("td").siblings("td:last()").text();
        clipboard.select();
        document.execCommand("copy");
        document.body.removeChild(clipboard);
    })
})