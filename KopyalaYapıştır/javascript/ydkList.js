var panoArr = [];
var a = [];
var tanım = {
    kasalar: "Kasalar",
    vidalar: "Vidalar",
    kartlar: "Kartlar",
    etiketler: "Etiketler",
    kablolar: "Kablolar",
    küçükparçalar: "Küçük Parçalar",
    diğer: "Diğer..."
}
$(function () {
    $("#filter").append('<option value="' + tanım.kasalar + '">' + tanım.kasalar + '</option>'
        + '<option value="' + tanım.vidalar + '">' + tanım.vidalar + '</option>'
        + '<option value="' + tanım.kartlar + '">' + tanım.kartlar + '</option>'
        + '<option value="' + tanım.etiketler + '">' + tanım.etiketler + '</option>'
        + '<option value="' + tanım.kablolar + '">' + tanım.kablolar + '</option>'
        + '<option value="' + tanım.küçükparçalar + '">' + tanım.küçükparçalar + '</option>'
        + '<option value="' + tanım.diğer + '">' + tanım.diğer + '</option>')
})
var model = {
    pluma: "(Plum A)",
    plum360: "(Plum 360)",
    mekanizma: "(Mekanizma)",
    küçükparçalar: "Küçük Parçalar"
}
//Plum A yedek parçaları
var plumaSparePartsObj = {
    frontcase: {
        ad: "Front Case",
        kod: "YDK-712-95086-009",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Ön kasa",
        model: model.pluma,
        tanım: tanım.kasalar
    },
    rearcase: {
        ad: "Rear Case",
        kod: "YDK-712-95087-010",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Arka kasa",
        model: model.pluma,
        tanım: tanım.kasalar
    },
    mainchasis: {
        ad: "Maın Chasıs",
        kod: "YDK-712-95085-009",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "İç kasa main chasis",
        model: model.pluma,
        tanım: tanım.kasalar
    },
    asmdoor: {
        ad: "Asm Door",
        kod: "YDK-841-12388-001",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Kaset kapağı",
        model: model.pluma,
        tanım: tanım.diğer
    },
    shield: {
        ad: "Shıeld",
        kod: "YDK-840-95012-016",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Sıvı kalkanı shield",
        model: model.pluma,
        tanım: tanım.diğer
    },
    handledoor: {
        ad: "Handle Door",
        kod: "YDK-712-95076-001",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Kaset kolu",
        model: model.pluma,
        tanım: tanım.diğer
    },
    batterydoor: {
        ad: "Battery Door",
        kod: "YDK-712-95088-003",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Batarya kapağı",
        model: model.pluma,
        tanım: tanım.kasalar
    },
    retainercord: {
        ad: "Retaıner Cord",
        kod: "YDK-712-95065-006",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Power kablo tutucu retainer cord",
        model: model.pluma,
        tanım: tanım.diğer
    },
    coverperipheral: {
        ad: "Cover Perıpheral",
        kod: "YDK-712-95090-006",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Peripheral kasası",
        model: model.pluma,
        tanım: tanım.kasalar
    },
    shoefrontenclosure: {
        ad: "Shoe Front Enclosure",
        kod: "YDK-712-95084-004",
        açıklama: "Front Case parçası",
        model: model.pluma,
        tanım: tanım.kasalar
    },
    keypadtr: {
        ad: "Keypad TR",
        kod: "YDK-840-95015-017",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Türkçe tuş takımı",
        model: model.pluma,
        tanım: tanım.diğer
    },
    keypaden: {
        ad: "Keypad EN",
        kod: "YDK-840-95015-008",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "İngilizce tuş takımı",
        model: model.pluma,
        tanım: tanım.diğer
    },
    powerpwa: {
        ad: "Power PWA",
        kod: "YDK-810-95242-027",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Güç kartı, elektrik",
        model: model.pluma,
        tanım: tanım.kartlar
    },
    poleclampass: {
        ad: "Pole Clamp Assembly",
        kod: "YDK-840-95115-003",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Demirli sıkma kolu",
        model: model.pluma,
        tanım: tanım.diğer
    },
    poleclampknob: {
        ad: "Pole Clamp Knob",
        kod: "YDK-820-95443-008",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Demirsiz sıkma kolu",
        model: model.pluma,
        tanım: tanım.diğer
    },
    baghanger: {
        ad: "Bag Hanger",
        kod: "YDK-707-95092-001",
        açıklama: "Askı demiri",
        model: model.pluma,
        tanım: tanım.diğer
    },
    peripheralpwa2: {
        ad: "Peripheral PWA",
        kod: "YDK-810-11820-007",
        açıklama: "Peripheral kartı",
        model: model.pluma,
        tanım: tanım.kartlar
    },
    peripheralpwa3: {
        ad: "Peripheral PWA",
        kod: "YDK-810-95006-011",
        açıklama: "Peripheral kartı",
        model: model.pluma,
        tanım: tanım.kartlar
    },
    peripheralpwa4: {
        ad: "Peripheral PWA",
        kod: "YDK-810-95006-013",
        açıklama: "Peripheral kartı",
        model: model.pluma,
        tanım: tanım.kartlar
    },
}
//Mekanizma Parçaları
var mechanismSparePartsObj = {
    pressurededector: {
        ad: "Pressure Dedector",
        kod: "YDK-840-95019-409",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Basınç sensörü strain gauge",
        model: model.mekanizma,
        tanım: tanım.diğer
    },
    apppwa: {
        ad: "App PWA",
        kod: "YDK-830-95044-515",
        fullName: function () {
            return this.ad + " (" + this.kod + " SN: ";
        },
        açıklama: "Hava sensörü kartı",
        model: model.mekanizma,
        tanım: tanım.kartlar
    },
    mechanism: {
        ad: "Mechanısm",
        kod: "YDK-855-95004-010",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Mekanizma mechanism",
        model: model.mekanizma,
        tanım: tanım.diğer
    },
    mechanism360: {
        ad: "Mechanısm Plum 360",
        kod: "YDK-855-95715-015",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Plum 360 Mekanizma mechanism",
        model: model.mekanizma,
        tanım: tanım.diğer
    },
    driverpwa: {
        ad: "Drıver PWA",
        kod: "YDK-810-95018-510",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Arka kart driver pwa",
        model: model.mekanizma,
        tanım: tanım.kartlar
    },
    lsmotor: {
        ad: "L/S Motor",
        kod: "YDK-830-95101-001",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Sol motor",
        model: model.mekanizma,
        tanım: tanım.diğer
    },
    iomotor: {
        ad: "I/O Motor",
        kod: "YDK-830-95102-001",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Alt motor",
        model: model.mekanizma,
        tanım: tanım.diğer
    },
    plungermotor: {
        ad: "Plunger Motor",
        kod: "YDK-830-95097-002",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Arka motor",
        model: model.mekanizma,
        tanım: tanım.diğer
    },
    switchpwa: {
        ad: "Swıtch PWA",
        kod: "YDK-810-95022-404",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Yan kart switch pwa",
        model: model.mekanizma,
        tanım: tanım.kartlar
    },
}
//Plum360 Yedek Parçaları
var plum360SparePartsObj = {
    frontcase: {
        ad: "Housıng Front",
        kod: "YDK-MEC0000925",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Ön kasa",
        model: model.plum360,
        tanım: tanım.kasalar
    },
    rearcase: {
        ad: "Rear Case",
        kod: "YDK-712-94862-404",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Arka kasa",
        model: model.plum360,
        tanım: tanım.kasalar
    },
    mainchasis: {
        ad: "Maın Chasıs",
        kod: "YDK-712-94860-405",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "İç Kasa",
        model: model.plum360,
        tanım: tanım.kasalar
    },
    asmdoor: {
        ad: "Asm Door",
        kod: "YDK-840-94850-407",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Kaset kapağı",
        model: model.plum360,
        tanım: tanım.diğer
    },
    shield: {
        ad: "Shıeld",
        kod: "YDK-840-94852-404",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Sıvı kalkanı shield",
        model: model.plum360,
        tanım: tanım.diğer
    },
    handledoor: {
        ad: "Handle Door",
        kod: "YDK-712-94858-405",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Kaset kolu",
        model: model.plum360,
        tanım: tanım.diğer
    },
    batterydoor: {
        ad: "Battery Door",
        kod: "YDK-712-94855-403",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Batarya kapağı",
        model: model.plum360,
        tanım: tanım.kasalar
    },
    retainercord: {
        ad: "Retaıner Cord",
        kod: "YDK-712-95065-407",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Power kablo tutucu retainer cord",
        model: model.plum360,
        tanım: tanım.diğer
    },
    poleclampknob: {
        ad: "Pole Clamp Knob",
        kod: "YDK-840-94075-402",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Sıkma kolu",
        model: model.plum360,
        tanım: tanım.diğer
    },
    coverperipheral: {
        ad: "Cover Peripheral",
        kod: "YDK-712-94869-402",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Peripheral Kasası",
        model: model.plum360,
        tanım: tanım.kasalar
    },
    keypad: {
        ad: "Keypad",
        kod: "YDK-840-97669-401",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Tuş takımı",
        model: model.plum360,
        tanım: tanım.diğer
    },
    display: {
        ad: "Dısplay",
        kod: "YDK-692-95036-514",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Ekran display",
        model: model.plum360,
        tanım: tanım.kartlar
    },
    cpu: {
        ad: "CPU",
        kod: "YDK-810-11949-506",
        fullName: function () {
            return this.ad + " (" + this.kod + " SN: ";
        },
        açıklama: "CPU kartı",
        model: model.plum360,
        tanım: tanım.kartlar
    },
    powerpwa: {
        ad: "Power PWA",
        kod: "YDK-810-95242-531",
        fullName: function () {
            return this.ad + " (" + this.kod + " SN: ";
        },
        açıklama: "Güç kartı, elektrik",
        model: model.plum360,
        tanım: tanım.kartlar
    },
    peripheralpwa: {
        ad: "Perıpheral PWA",
        kod: "YDK-810-97400-506",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Peripheral kartı",
        model: model.plum360,
        tanım: tanım.kartlar
    },
    peripheralpwa1: {
        ad: "Bom PWA Common A+ CE3",
        kod: "YDK-810-97401-503",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Peripheral parçası",
        model: model.plum360,
        tanım: tanım.kartlar
    },
    battery: {
        ad: "Battery",
        kod: "YDK-840-95066-405",
        fullName: function () {
            return this.ad + " (" + this.kod + ")";
        },
        açıklama: "Batarya",
        model: model.plum360,
        tanım: tanım.diğer
    },
    hoparlör: {
        ad: "Piezo Alarm",
        kod: "YDK-830-03329-506",
        açıklama: "Hoparlör Buzzer",
        model: model.plum360,
        tanım: tanım.diğer
    },
    plum360anten: {
        ad: "Pwa Antenna Plum CE3.0, SNGL CH",
        kod: "YDK-810-94108-401",
        açıklama: "Anten",
        model: model.plum360,
        tanım: tanım.kartlar
    },
}
var littlePartsObj = {
    knobgray18pa: {
        ad: "Knob Gray 1/8",
        kod: "YDK-710-10621-001",
        açıklama: "Plum A Ses açma plastiği",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    knobcovergraypa: {
        ad: "Knob Cover Gray",
        kod: "YDK-710-10621-002",
        açıklama: "Plum A Ses açma plastiği altı",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    knobcapgraypa: {
        ad: "Knob Cap Gray",
        kod: "YDK-710-10621-003",
        açıklama: "Plum A Ses açma plastiği kapağı",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    knobgray18: {
        ad: "Knob Gray 1/8",
        kod: "YDK-710-10621-401",
        açıklama: "Ses açma plastiği",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    knobcovergray: {
        ad: "Knob Cover Gray",
        kod: "YDK-710-10621-402",
        açıklama: "Plum 360 Ses açma plastiği altı",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    knobcapgray: {
        ad: "Knob Cap Gray",
        kod: "YDK-710-10621-403",
        açıklama: "Plum 360 Ses açma plastiği kapağı",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    cable1: {
        ad: "Cable Flat 8 Cond",
        kod: "YDK-683-67000-401",
        açıklama: "switch pwa kablosu beyaz",
        model: model.mekanizma,
        tanım: tanım.kablolar
    },
    cable2: {
        ad: "Cable Flat 20 Cond",
        kod: "YDK-683-67000-402",
        açıklama: "Mekanizma, üstteki beyaz kablo",
        model: model.mekanizma,
        tanım: tanım.kablolar
    },
    cable3: {
        ad: "Cable Flex 14 Conductor",
        kod: "YDK-683-67000-403",
        açıklama: "Cpu, beyaz kablo",
        model: model.plum360,
        tanım: tanım.kablolar
    },
    cable4: {
        ad: "Asm Cable Power Sply/Btry",
        kod: "YDK-826-95058-402",
        açıklama: "Power batarya arasındaki kablo",
        model: model.plum360,
        tanım: tanım.kablolar
    },
    cable5: {
        ad: "Cpu Driver",
        kod: "YDK-826-95059-402",
        açıklama: "Cpu mekanizma gri kablo",
        model: model.plum360,
        tanım: tanım.kablolar
    },
    cable6: {
        ad: "Asm Cable Motor Power",
        kod: "YDK-826-95060-401",
        açıklama: "Power mekanizma kırmızı kablo",
        model: model.plum360,
        tanım: tanım.kablolar
    },
    cable7: {
        ad: "Asm Cable Battery",
        kod: "YDK-826-95062-001",
        açıklama: "Batarya kablosu",
        model: model.plum360,
        tanım: tanım.kablolar
    },
    cable8: {
        ad: "Power Kablo",
        kod: "YDK-804",
        açıklama: "Power kablo",
        model: model.plum360,
        tanım: tanım.kablolar
    },

    littlepart1: {
        ad: "Fılter Gm1 Rbn Ca",
        kod: "YDK-687-69103-402",
        açıklama: "Üstteki beyaz kablo demiri",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart2: {
        ad: "Cap Vınyl 1/2 Long Blk",
        kod: "YDK-711-10619-001",
        açıklama: "Peripheral parçaları siyah",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart3: {
        ad: "Cap F Black Conductıve 15-PI",
        kod: "YDK-711-16004-005",
        açıklama: "Peripheral parçaları siyah",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart4: {
        ad: "Valve Pın P/S Valve",
        kod: "YDK-712-00547-405",
        açıklama: "Üstteki valf pinleri",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart5: {
        ad: "Valve Pıns I/O Valve",
        kod: "YDK-712-00554-406",
        açıklama: "Alttaki valf pinleri",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart6: {
        ad: "Tıp Shaft Pole Clamp",
        kod: "YDK-712-00631-401",
        açıklama: "Pole clamp siyah parça",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart7: {
        ad: "Sft Opener Regulator",
        kod: "YDK-712-00654-402",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart8: {
        ad: "Rocker Regulator Opener",
        kod: "YDK-712-00655-002",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart9: {
        ad: "Rocker Regulator Closer",
        kod: "YDK-717-95093-001",
        açıklama: "Askı demiri parçaları",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart10: {
        ad: "Cam Stac, Pri",
        kod: "YDK-712-00658-003",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart11: {
        ad: "Cam Stac, I/O",
        kod: "YDK-712-00659-002",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart12: {
        ad: "Support Pri/Sec Valve",
        kod: "YDK-712-00660-402",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart13: {
        ad: "Rocker Pri Valve",
        kod: "YDK-712-00669-403",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart14: {
        ad: "Rocker Sec Valve",
        kod: "YDK-712-00671-403",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart15: {
        ad: "Rkr Inlet Valve (CC)",
        kod: "YDK-712-00672-403",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart16: {
        ad: "Rkr Outlet Valve",
        kod: "YDK-712-00673-403",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart17: {
        ad: "Sprt Bot Spr",
        kod: "YDK-712-00681-404",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart18: {
        ad: "Bshg Mot",
        kod: "YDK-712-00703-006",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart19: {
        ad: "Bumper Chassıs",
        kod: "YDK-712-00714-401",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart20: {
        ad: "Housing Clutch",
        kod: "YDK-712-03402-002",
        açıklama: "Askı demiri plastiği siyah",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart21: {
        ad: "Bracket Pole Clamp",
        kod: "YDK-712-94070-402",
        açıklama: "Pole Clamp kasa parçaları",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart22: {
        ad: "Lever Cover",
        kod: "YDK-712-94071-401",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart23: {
        ad: "Proxımal Tubıng Guıde",
        kod: "YDK-712-94072-402",
        açıklama: "Ön kasa mor parça",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart24: {
        ad: "Cover USB Ce3.0",
        kod: "YDK-712-94104-401",
        açıklama: "Peripheral parçaları",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart25: {
        ad: "Bracket Handle",
        kod: "YDK-712-94861-402",
        açıklama: "Arka Kapak Mor Parça",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart26: {
        ad: "Cover Antennal Lcm CE 3.0",
        kod: "YDK-712-94866-402",
        açıklama: "Peripheral parçaları",
        model: model.plum360,
        tanım: tanım.diğer
    },
    littlepart27: {
        ad: "Plate Clmpg Pressure Sensor",
        kod: "YDK-712-95021-003",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart28: {
        ad: "Tıp Dıstal Pressure Sensor",
        kod: "YDK-712-95028-001",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart29: {
        ad: "Spcr Pressure Sensor",
        kod: "YDK-712-95030-001",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart30: {
        ad: "Block Pressure Sensor",
        kod: "YDK-712-95031-001",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart31: {
        ad: "O-Ring Pressure Sensor",
        kod: "YDK-712-95033-001",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart32: {
        ad: "Lever Door",
        kod: "YDK-712-95040-401",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart33: {
        ad: "Cap Switch Pwa",
        kod: "YDK-712-95041-401",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart34: {
        ad: "Opener Regulator",
        kod: "YDK-712-95048-401",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart35: {
        ad: "Closer Regulator",
        kod: "YDK-712-95049-406",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart36: {
        ad: "Pıvot",
        kod: "YDK-712-95067-401",
        açıklama: "Turuncu parça",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart37: {
        ad: "Pl Rear Mech",
        kod: "YDK-712-95100-404",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart38: {
        ad: "Plunger",
        kod: "YDK-712-95105-404",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart39: {
        ad: "Retainer Plunger",
        kod: "YDK-712-95107-402",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart40: {
        ad: "Body Coupler",
        kod: "YDK-712-95109-001",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart41: {
        ad: "Nest Coupler",
        kod: "YDK-712-95110-402",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart43: {
        ad: "Shaft Ext Coupler",
        kod: "YDK-712-95111-003",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart44: {
        ad: "Link Door",
        kod: "YDK-712-97667-401",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart45: {
        ad: "Clip Hairpin",
        kod: "YDK-713-90726-002",
        açıklama: "Askı demiri parçası",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart46: {
        ad: "Shoe I/O Rocker",
        kod: "YDK-714-00670-403",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart47: {
        ad: "Bracket Handle",
        kod: "YDK-714-94076-401",
        açıklama: "Pole clamp parçası siyah",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart48: {
        ad: "Plate Backing Pole Clamp",
        kod: "YDK-714-95117-001",
        açıklama: "Pole clamp parçası",
        model: model.pluma,
        tanım: tanım.küçükparçalar
    },
    littlepart49: {
        ad: "Plate Dampening Rear",
        kod: "YDK-714-95166-402",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart50: {
        ad: "Bracket Rear Plate Right",
        kod: "YDK-714-95202-402",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart51: {
        ad: "Bracket Rear Plate Left",
        kod: "YDK-714-95203-402",
        açıklama: "Mekanizma Parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart52: {
        ad: "Clip Regulator Closer",
        kod: "YDK-714-98658-401",
        açıklama: "",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart53: {
        ad: "Pin Prox/Distal Pressure Sensor",
        kod: "YDK-715-95027-001",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart54: {
        ad: "Retainer Pressure Sensor",
        kod: "YDK-715-95032-001",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart55: {
        ad: "Pin Fixed Cassette Locator",
        kod: "YDK-715-95195-402",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart56: {
        ad: "Pad Handle Door Stop",
        kod: "YDK-716-00725-402",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart57: {
        ad: "Pad Dampening Rear Plate",
        kod: "YDK-716-95153-403",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart58: {
        ad: "Vibraiton Isolator",
        kod: "YDK-716-95261-401",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart60: {
        ad: "Sprinf Inlet Valveleaf",
        kod: "YDK-717-00683-408",
        açıklama: "",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart61: {
        ad: "Spring Outlet Valve Leaf (CCLT)",
        kod: "YDK-717-00684-404",
        açıklama: "Mekanizma parçaları",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart62: {
        ad: "Spring Extension 0.063 DIA, 0.25 LG",
        kod: "YDK-717-23000-403",
        açıklama: "Plunger küçük yay",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart63: {
        ad: "Spring Skt Extension 1.0 LSS",
        kod: "YDK-717-23016-401",
        açıklama: "Handle door yayı",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart64: {
        ad: "SPRING, STK, EXTENSION, 0.180 DIA, SS",
        kod: "YDK-717-23017-402",
        açıklama: "Plunger yayı",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart65: {
        ad: "Pri/Sec Valve Leaf Spring",
        kod: "YDK-717-95011-402",
        açıklama: "",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart66: {
        ad: "Spring Cassette Guide",
        kod: "YDK-717-95017-003",
        açıklama: "Asmdoor demiri",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart67: {
        ad: "Rivet Push Plastic",
        kod: "YDK-718-15007-402",
        açıklama: "Siyah plastik",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart68: {
        ad: "Emi Spring Lcm CE3.0, Upper",
        kod: "YDK-717-94872-401",
        açıklama: "Peripheral parçası",
        model: model.plum360,
        tanım: tanım.diğer
    },
    littlepart69: {
        ad: "Ring Rtng .188 x.025 SST",
        kod: "YDK-721-13112-401",
        açıklama: "Handle door parçası",
        model: model.pluma,
        tanım: tanım.diğer
    },
    littlepart70: {
        ad: "Ring Rtng .312 x.025 SST",
        kod: "YDK-721-13113-401",
        açıklama: "Plunger parçası",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart71: {
        ad: "Ring Rtng 0.140 x  .015 SST",
        kod: "YDK-721-13116-401",
        açıklama: "Handle door parçası",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart72: {
        ad: "Washer Shldr #4 Nylon",
        kod: "YDK-721-14138-002",
        açıklama: "Peripheral parçası",
        model: model.pluma,
        tanım: tanım.küçükparçalar
    },
    littlepart73: {
        ad: "Washer Cprsn .121ID .045THK STL",
        kod: "YDK-721-14171-402",
        açıklama: "Makanizma parçası",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart74: {
        ad: "Washer Flat .253 ID .050 Thk",
        kod: "YDK-721-14181-410",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart75: {
        ad: "Nut 1/4 Hex",
        kod: "YDK-722-10257-001",
        açıklama: "Peripheral parçası",
        model: model.pluma,
        tanım: tanım.küçükparçalar
    },
    littlepart76: {
        ad: "Ring Retainer",
        kod: "YDK-722-10260-001",
        açıklama: "Peripheral parçası",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart77: {
        ad: "Nut 4-40 Hex Stl Zn Sml S",
        kod: "YDK-722-12081-401",
        açıklama: "?",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart78: {
        ad: "Spacer Display",
        kod: "YDK-723-10676-402",
        açıklama: "Display parçası",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart79: {
        ad: "Strap Velcro AC Power Cord",
        kod: "YDK-725-36531-406",
        açıklama: "Kablo bağı",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart80: {
        ad: "Cable Ties",
        kod: "YDK-725-72261-401",
        açıklama: "Klips",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart81: {
        ad: "Ca Tie Plastic Adh Back RW",
        kod: "YDK-725-72283-402",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart82: {
        ad: "Tape Ins 3M 1350 2Mil Wht 1.5",
        kod: "YDK-729-38320-001",
        açıklama: "Bant",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart83: {
        ad: "Psa Dampening",
        kod: "YDK-729-95171-402",
        açıklama: "Mekanizma parçası",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart84: {
        ad: "Cover IO Lcm CE3",
        kod: "YDK-730-97249-401",
        açıklama: "Peripheral parçası siyah kauçuk",
        model: model.plum360,
        tanım: tanım.diğer
    },
    littlepart85: {
        ad: "Insulator CPU",
        kod: "YDK-765-10922-402",
        açıklama: "Siyah",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart86: {
        ad: "Enclosure Gasket",
        kod: "YDK-765-11388-001",
        açıklama: "Gasket",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart87: {
        ad: "Gasket Tape Switch Board",
        kod: "YDK-765-12664-001",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart88: {
        ad: "Insulator Batt Comp",
        kod: "YDK-765-93923-401",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart89: {
        ad: "Gasket Power Supply",
        kod: "YDK-765-93925-401",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart90: {
        ad: "Gskt Display Seal (CCLT)",
        kod: "YDK-765-93926-401",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart91: {
        ad: "Tape Gskt",
        kod: "YDK-765-94079-401",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart92: {
        ad: "Insulator Lcm Ce3.0",
        kod: "YDK-765-94106-401",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart93: {
        ad: "Splashguard",
        kod: "YDK-765-94870-402",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart94: {
        ad: "Insulator Bracket Handle",
        kod: "YDK-765-94874-403",
        açıklama: "Siyah",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart95: {
        ad: "Gskt Front/Rear Enclosure",
        kod: "YDK-765-94875-401",
        açıklama: "Gasket",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart96: {
        ad: "Gskt Handle",
        kod: "YDK-765-95081-001",
        açıklama: "Gasket",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart97: {
        ad: "Splash Guard (Piezo)",
        kod: "YDK-765-95154-001",
        açıklama: "",
        model: model.küçükparçalar,
        tanım: tanım.küçükparçalar
    },
    littlepart98: {
        ad: "Insulator Backing Plate",
        kod: "YDK-765-95541-003",
        açıklama: "",
        model: model.pluma,
        tanım: tanım.küçükparçalar
    },
    littlepart99: {
        ad: "Insulator Secondary",
        kod: "YDK-765-97669-401",
        açıklama: "Siyah",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart100: {
        ad: "Gskt Fluid Shield",
        kod: "YDK-765-97672-401",
        açıklama: "Shield gasket",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    littlepart101: {
        ad: "Asm Coupler Body/Lead Screw",
        kod: "YDK-820-95251-403",
        açıklama: "",
        model: model.mekanizma,
        tanım: tanım.küçükparçalar
    },
    littlepart102: {
        ad: "Base W/Rubber",
        kod: "YDK-820-95542-003",
        açıklama: "Pole clamp demiri",
        model: model.pluma,
        tanım: tanım.diğer
    },
    littlepart103: {
        ad: "Base W/Rubber",
        kod: "YDK-820-95720-402",
        açıklama: "Pole clamp demiri",
        model: model.plum360,
        tanım: tanım.diğer
    },

    //Vidalar
    screw1: {
        ad: "Term Equıpotentıal",
        kod: "YDK-678-72366-401",
        açıklama: "Topraklama vidası",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw2: {
        ad: "Rivet 125 Christmas Tree Black",
        kod: "YDK-718-97671-401",
        açıklama: "Peripheral parçası",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw3: {
        ad: "Screw 4-24 1/4 Phh Pnh Hilo 18-8sst",
        kod: "YDK-720-10031-001",
        açıklama: "Keypad ve Asmdoor vidası",
        model: model.pluma,
        tanım: tanım.vidalar
    },
    screw4: {
        ad: "Screw Jack 4-40, 7/16",
        kod: "YDK-720-10062-402",
        açıklama: "Retainer Cord vidası",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw5: {
        ad: "Screw Lock Conn 4-40",
        kod: "YDK-720-10039-001",
        açıklama: "Retainer Cord vidası?",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw6: {
        ad: "Screw 6-32, 5/8, Pan Head Philips With Washer",
        kod: "YDK-720-10066-402",
        açıklama: "Retainer Cord vidası?",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw7: {
        ad: "Screw 6-32, X3, 1/4, Pan Head",
        kod: "YDK-720-10068-001",
        açıklama: "Arka kapak uzun vida",
        model: model.pluma,
        tanım: tanım.vidalar
    },
    screw8: {
        ad: "SCREW, 6-32, X2, 1/2, PAN HEAD, PHILIPS",
        kod: "YDK-720-10068-403",
        açıklama: "Plum 360 arka kapak kısa vida",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw9: {
        ad: "SCREW, 6-32, X2, 1/2, PAN HEAD, PHILIPS",
        kod: "YDK-720-10068-404",
        açıklama: "Plum 360 arka kapak uzun vida",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw10: {
        ad: "Screw Holds Back Case",
        kod: "YDK-720-10181-009",
        açıklama: "Arka kapak kısa vida",
        model: model.pluma,
        tanım: tanım.vidalar
    },
    screw11: {
        ad: "Screw 4-40, 5/8, Pan Head Philips",
        kod: "YDK-720-10211-402",
        açıklama: "Peripheral vidası",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw12: {
        ad: "Screw 4-40, 1/4, Hex Nylon",
        kod: "YDK-720-10214-002",
        açıklama: "Peripheral parçaları",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw13: {
        ad: "Screw 4-40, 3/8, Button Head SS",
        kod: "YDK-720-10233-407",
        açıklama: "Peripheral vidası",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw14: {
        ad: "Screw 6-32, 3/8, Sltd Hwh Type T D",
        kod: "YDK-720-10318-001",
        açıklama: "",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw15: {
        ad: "Screw 4-40, 1/4, Hex Head Sltd W/Washer",
        kod: "YDK-720-10323-402",
        açıklama: "Pivot vidası",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw16: {
        ad: "Screw 6-32, 3/8, Hex Head Slotted W/Washer",
        kod: "YDK-720-10325-404",
        açıklama: "Batarya kapağı vidası",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw17: {
        ad: "Emi Spring LCM CE3.0, Lower",
        kod: "YDK-717-94876-401",
        açıklama: "Peripheral parçası",
        model: model.plum360,
        tanım: tanım.küçükparçalar
    },
    screw18: {
        ad: "Screw 4-40, 3/8, Inhh Sqcn Sl Sem",
        kod: "YDK-720-10323-404",
        açıklama: "",
        model: model.plum360,
        tanım: tanım.vidalar
    },
    screw19: {
        ad: "Screw 4-20 1/4 Pan Head Philips",
        kod: "YDK-720-98348-401",
        açıklama: "Ön kapak mor parça vidası",
        model: model.küçükparçalar,
        tanım: tanım.vidalar
    },
    screw20: {
        ad: "Screw M2X6 Pnh Sltd Nylon",
        kod: "YDK-720-10748-003",
        açıklama: "Peripheral parçası",
        model: model.pluma,
        tanım: tanım.vidalar
    },

    //Etiketler
    labels1: {
        ad: "Serial Number Cover (Mac Address)",
        kod: "YDK-729-99155-401",
        açıklama: "Peripheral etiketi",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels2: {
        ad: "Lbl Caution Intl Uk",
        kod: "YDK-735-00569-001",
        açıklama: "İngilizce üst etiket",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels3: {
        ad: "Ops Instr Lbl IE",
        kod: "YDK-735-10861-002",
        açıklama: "İngilizce yan etiketler",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels4: {
        ad: "Rear Caution Lbl IE",
        kod: "YDK-735-10864-002",
        açıklama: "İngilizce arka etiket",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels5: {
        ad: "Switch/Port Lbl IE",
        kod: "YDK-735-10865-001",
        açıklama: "12391-36 ingilizce peripheral etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels6: {
        ad: "Switch/Port Cbl Turkey",
        kod: "YDK-735-10937-001",
        açıklama: "12391-06 türkçe peripheral etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels7: {
        ad: "Switch Port Label",
        kod: "YDK-735-95228-002",
        açıklama: "11971-36 ingilizce peripheral etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels8: {
        ad: "Lbl Set Ops/Alarms V11 Turkey",
        kod: "YDK-735-10930-001",
        açıklama: "Türkçe yan etiketler",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels9: {
        ad: "Caution Label Turkey",
        kod: "YDK-735-10933-001",
        açıklama: "Türkçe üst etiket",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels10: {
        ad: "Lbl Rear Caution Turkey",
        kod: "YDK-735-10934-002",
        açıklama: "Türkçe arka etiket",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels11: {
        ad: "Lbl Close Lever Turkey",
        kod: "YDK-735-10935-001",
        açıklama: "Kolu kapat etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels12: {
        ad: "Lbl Close Lever W/Arrow Ef Trk",
        kod: "YDK-735-10936-001",
        açıklama: "Kolu kapat etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels13: {
        ad: "Label Battery 6V",
        kod: "YDK-735-95131-003",
        açıklama: "Batarya etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels14: {
        ad: "Label Logo",
        kod: "YDK-735-95133-005",
        açıklama: "Plum A etiketi",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels15: {
        ad: "Lbl Close Lever",
        kod: "YDK-735-95235-001",
        açıklama: "Close lever Kolu kapat",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels16: {
        ad: "Close Lever W/Arrow",
        kod: "YDK-735-95236-001",
        açıklama: "Close lever Kolu kapat",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels17: {
        ad: "Rear Caution Int'L ENG",
        kod: "YDK-735-95244-002",
        açıklama: "İngilizce arka etiket",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels18: {
        ad: "Ops Instr Intl Set",
        kod: "YDK-735-95248-001",
        açıklama: "İngilizce yan etiket",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels19: {
        ad: "Lbl High-Low English",
        kod: "YDK-735-97264-001",
        açıklama: "Volume etiketi sol+",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels20: {
        ad: "Lbl High-Low Turkish",
        kod: "YDK-735-97264-002",
        açıklama: "Ses etiketi sol+",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels21: {
        ad: "Lbl Low-High English",
        kod: "YDK-735-97265-001",
        açıklama: "Volum etiketi sağ+",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels22: {
        ad: "Lbl Low-High Turkish",
        kod: "YDK-735-97265-002",
        açıklama: "Ses etiketi sağ+",
        model: model.pluma,
        tanım: tanım.etiketler
    },
    labels23: {
        ad: "Lbl Set Tubing Guide Labels",
        kod: "YDK-735-97275-401",
        açıklama: "AB etiketleri",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels24: {
        ad: "Lbl Power Cord",
        kod: "YDK-735-98155-401",
        açıklama: "Power kablo etiketi",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels25: {
        ad: "Lbl Door Lever",
        kod: "YDK-735-98156-401",
        açıklama: "Kolu kapatın etiketi",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels26: {
        ad: "Lbl Close Lever",
        kod: "YDK-735-98157-401",
        açıklama: "Kolu kapatın etiketi",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels27: {
        ad: "Lbl Close Clamps",
        kod: "YDK-735-98158-401",
        açıklama: "Pembe etiket",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels28: {
        ad: "Product Rating Label (Turkey)",
        kod: "YDK-735-98159-403",
        açıklama: "Peripheral etiketi",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels29: {
        ad: "Lbl Switch Port",
        kod: "YDK-735-98160-401",
        açıklama: "Arka etiket",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels30: {
        ad: "Lbl Follow Instructions For Use",
        kod: "YDK-735-98163-401",
        açıklama: "Ön kapak gri etiket",
        model: model.plum360,
        tanım: tanım.etiketler
    },
    labels31: {
        ad: "Brg Thrust",
        kod: "YDK-745-19076-402",
        açıklama: "plunger pulları",
        model: model.mekanizma,
        tanım: tanım.etiketler
    },
}
//JSON üretim merkezi
var allSparePartsJSON = [];
function madeJson(x) {
    for (i = 0; i < Object.keys(x).length; i++) {
        allSparePartsJSON.push({
            "ad": Object.values(x)[i].ad,
            "kod": Object.values(x)[i].kod,
            "resim": function () {
                return "../imagesYdk/" + this.kod + ".jpg"
            },
            "model": Object.values(x)[i].model,
            "tanım": Object.values(x)[i].tanım,
            "açıklama": Object.values(x)[i].açıklama,
            "alt": "(" + Object.values(x)[i].ad + ") ",
            "fullName": function () {
                return this.ad + " (" + this.kod + ")";
            }
        })
    }
}
madeJson(plumaSparePartsObj);
madeJson(mechanismSparePartsObj);
madeJson(plum360SparePartsObj);
madeJson(littlePartsObj);
console.log(allSparePartsJSON.length);