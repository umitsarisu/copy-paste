"use strict";
let panoArr = [];
let a = [];
let definition = {
    cases: "Kasalar",
    screws: "Vidalar",
    cards: "Kartlar",
    labels: "Etiketler",
    cables: "Kablolar",
    littleParts: "Küçük Parçalar",
    other: "Diğer..."
};
function backToTop() {
    if (document.documentElement.scrollTop > 300) {
        window.scrollTo(0, 0);
    }
}
$(function () {
    $("#filter").append(`
        <option value="${definition.cases}">${definition.cases}</option>
        <option value="${definition.screws}">${definition.screws}</option>
        <option value="${definition.cards}">${definition.cards}</option>
        <option value="${definition.labels}">${definition.labels}</option>
        <option value="${definition.cables}">${definition.cables}</option>
        <option value="${definition.littleParts}">${definition.littleParts}</option>
        <option value="${definition.other}">${definition.other}</option>
    `);
});
let model = {
    pluma: "(Plum A)",
    plum360: "(Plum 360)",
    mechanism: "(Mekanizma)",
    littleParts: "Küçük Parçalar"
};
//Plum A yedek parçaları
let plumaSparePartsObj = {
    frontcase: {
        name: "Front Case",
        code: "YDK-712-95086-009",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Ön kasa",
        model: model.pluma,
        definition: definition.cases
    },
    rearcase: {
        name: "Rear Case",
        code: "YDK-712-95087-010",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Arka kasa",
        model: model.pluma,
        definition: definition.cases
    },
    mainchasis: {
        name: "Maın Chasıs",
        code: "YDK-712-95085-009",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "İç kasa main chasis",
        model: model.pluma,
        definition: definition.cases
    },
    asmdoor: {
        name: "Asm Door",
        code: "YDK-841-12388-001",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Kaset kapağı",
        model: model.pluma,
        definition: definition.other
    },
    shield: {
        name: "Shıeld",
        code: "YDK-840-95012-016",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Sıvı kalkanı shield",
        model: model.pluma,
        definition: definition.other
    },
    handledoor: {
        name: "Handle Door",
        code: "YDK-712-95076-001",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Kaset kolu",
        model: model.pluma,
        definition: definition.other
    },
    batterydoor: {
        name: "Battery Door",
        code: "YDK-712-95088-003",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Batarya kapağı",
        model: model.pluma,
        definition: definition.cases
    },
    retainercord: {
        name: "Retaıner Cord",
        code: "YDK-712-95065-006",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Power kablo tutucu retainer cord",
        model: model.pluma,
        definition: definition.other
    },
    coverperipheral: {
        name: "Cover Perıpheral",
        code: "YDK-712-95090-006",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Peripheral kasası",
        model: model.pluma,
        definition: definition.cases
    },
    shoefrontenclosure: {
        name: "Shoe Front Enclosure",
        code: "YDK-712-95084-004",
        explanation: "Front Case parçası",
        model: model.pluma,
        definition: definition.cases
    },
    keypadtr: {
        name: "Keypad TR",
        code: "YDK-840-95015-017",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Türkçe tuş takımı",
        model: model.pluma,
        definition: definition.other
    },
    keypaden: {
        name: "Keypad EN",
        code: "YDK-840-95015-008",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "İngilizce tuş takımı",
        model: model.pluma,
        definition: definition.other
    },
    powerpwa: {
        name: "Power PWA",
        code: "YDK-810-95242-027",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Güç kartı, elektrik",
        model: model.pluma,
        definition: definition.cards
    },
    poleclampass: {
        name: "Pole Clamp Assembly",
        code: "YDK-840-95115-003",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Demirli sıkma kolu",
        model: model.pluma,
        definition: definition.other
    },
    poleclampknob: {
        name: "Pole Clamp Knob",
        code: "YDK-820-95443-008",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Demirsiz sıkma kolu",
        model: model.pluma,
        definition: definition.other
    },
    baghanger: {
        name: "Bag Hanger",
        code: "YDK-707-95092-001",
        explanation: "Askı demiri",
        model: model.pluma,
        definition: definition.other
    },
    peripheralpwa2: {
        name: "Peripheral PWA",
        code: "YDK-810-11820-007",
        explanation: "Peripheral kartı",
        model: model.pluma,
        definition: definition.cards
    },
    peripheralpwa3: {
        name: "Peripheral PWA",
        code: "YDK-810-95006-011",
        explanation: "Peripheral kartı",
        model: model.pluma,
        definition: definition.cards
    },
    peripheralpwa4: {
        name: "Peripheral PWA",
        code: "YDK-810-95006-013",
        explanation: "Peripheral kartı",
        model: model.pluma,
        definition: definition.cards
    }
};
//mechanism Parçaları
let mechanismSparePartsObj = {
    pressurededector: {
        name: "Pressure Dedector",
        code: "YDK-SUB0000538",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Basınç sensörü strain gauge",
        model: model.mechanism,
        definition: definition.other
    },
    apppwa: {
        name: "App PWA",
        code: "YDK-830-95044-515",
        fullName: function () {
            return this.name + " (" + this.code + " SN: ";
        },
        explanation: "Hava sensörü kartı",
        model: model.mechanism,
        definition: definition.cards
    },
    mechanism: {
        name: "Mechanısm",
        code: "YDK-855-95004-010",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "mechanism mechanism",
        model: model.mechanism,
        definition: definition.other
    },
    mechanism360: {
        name: "Mechanısm Plum 360",
        code: "YDK-855-95715-015",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Plum 360 mechanism mechanism",
        model: model.mechanism,
        definition: definition.other
    },
    driverpwa: {
        name: "Drıver PWA",
        code: "YDK-810-95018-510",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Arka kart driver pwa",
        model: model.mechanism,
        definition: definition.cards
    },
    lsmotor: {
        name: "L/S Motor",
        code: "YDK-830-95101-001",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Sol motor",
        model: model.mechanism,
        definition: definition.other
    },
    iomotor: {
        name: "I/O Motor",
        code: "YDK-830-95102-001",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Alt motor",
        model: model.mechanism,
        definition: definition.other
    },
    plungermotor: {
        name: "Plunger Motor",
        code: "YDK-830-95097-002",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Arka motor",
        model: model.mechanism,
        definition: definition.other
    },
    switchpwa: {
        name: "Switches PWA",
        code: "YDK-SUB0000170",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Yan kart switch pwa",
        model: model.mechanism,
        definition: definition.cards
    }
};
//Plum360 Yedek Parçaları
let plum360SparePartsObj = {
    frontcase: {
        name: "Housıng Front",
        code: "YDK-MEC0000925",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Ön kasa",
        model: model.plum360,
        definition: definition.cases
    },
    rearcase: {
        name: "Housıng Back",
        code: "YDK-MEC0000923",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Arka kasa",
        model: model.plum360,
        definition: definition.cases
    },
    mainchasis: {
        name: "Maın Chasıs",
        code: "YDK-712-94860-405",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "İç Kasa",
        model: model.plum360,
        definition: definition.cases
    },
    asmdoor: {
        name: "Asm Door",
        code: "YDK-840-94850-407",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Kaset kapağı",
        model: model.plum360,
        definition: definition.other
    },
    shield: {
        name: "Shıeld",
        code: "YDK-840-94852-404",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Sıvı kalkanı shield",
        model: model.plum360,
        definition: definition.other
    },
    batterydoor: {
        name: "Battery Door",
        code: "YDK-712-94855-403",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Batarya kapağı",
        model: model.plum360,
        definition: definition.cases
    },
    handledoor: {
        name: "Handle Door",
        code: "YDK-712-94858-405",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Kaset kolu",
        model: model.plum360,
        definition: definition.other
    },
    retainercord: {
        name: "Retaıner Cord",
        code: "YDK-712-95065-407",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Power kablo tutucu retainer cord",
        model: model.plum360,
        definition: definition.other
    },
    poleclampknob: {
        name: "Pole Clamp Knob",
        code: "YDK-840-94075-402",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Sıkma kolu",
        model: model.plum360,
        definition: definition.other
    },
    coverperipheral: {
        name: "Cover Peripheral",
        code: "YDK-712-94869-402",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Peripheral Kasası",
        model: model.plum360,
        definition: definition.cases
    },
    keypad: {
        name: "Keypad",
        code: "YDK-840-97669-401",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Tuş takımı",
        model: model.plum360,
        definition: definition.other
    },
    display: {
        name: "Dısplay",
        code: "YDK-692-95036-514",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Ekran display",
        model: model.plum360,
        definition: definition.cards
    },
    cpu: {
        name: "CPU",
        code: "YDK-EE0000118",
        fullName: function () {
            return this.name + " (" + this.code + " SN: ";
        },
        explanation: "CPU kartı",
        model: model.plum360,
        definition: definition.cards
    },
    powerpwa: {
        name: "Power PWA",
        code: "YDK-810-95242-531",
        fullName: function () {
            return this.name + " (" + this.code + " SN: ";
        },
        explanation: "Güç kartı, elektrik",
        model: model.plum360,
        definition: definition.cards
    },
    peripheralpwa: {
        name: "Perıpheral PWA",
        code: "YDK-810-97400-506",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Peripheral kartı",
        model: model.plum360,
        definition: definition.cards
    },
    peripheralpwa1: {
        name: "Bom PWA Common A+ CE3",
        code: "YDK-810-97401-503",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Peripheral parçası",
        model: model.plum360,
        definition: definition.cards
    },
    battery: {
        name: "Battery",
        code: "YDK-SUB0000864",
        fullName: function () {
            return `${this.name} ${this.code}`;
        },
        explanation: "Batarya",
        model: model.plum360,
        definition: definition.other
    },
    speaker: {
        name: "Piezo Alarm",
        code: "YDK-830-03329-506",
        explanation: "Hoparlör Buzzer",
        model: model.plum360,
        definition: definition.other
    },
    plum360anten: {
        name: "Pwa Antenna Plum CE3.0, SNGL CH",
        code: "YDK-810-94108-401",
        explanation: "Anten",
        model: model.plum360,
        definition: definition.cards
    }
};
let littlePartsObj = {
    knobgray18pa: {
        name: "Knob Gray 1/8",
        code: "YDK-710-10621-001",
        explanation: "Plum A Ses açma plastiği",
        model: model.littleParts,
        definition: definition.littleParts
    },
    knobcovergraypa: {
        name: "Knob Cover Gray",
        code: "YDK-710-10621-002",
        explanation: "Plum A Ses açma plastiği altı",
        model: model.littleParts,
        definition: definition.littleParts
    },
    knobcapgraypa: {
        name: "Knob Cap Gray",
        code: "YDK-710-10621-003",
        explanation: "Plum A Ses açma plastiği kapağı",
        model: model.littleParts,
        definition: definition.littleParts
    },
    knobgray18: {
        name: "Knob Gray 1/8",
        code: "YDK-710-10621-401",
        explanation: "Ses açma plastiği",
        model: model.littleParts,
        definition: definition.littleParts
    },
    knobcovergray: {
        name: "Knob Cover Gray",
        code: "YDK-710-10621-402",
        explanation: "Plum 360 Ses açma plastiği altı",
        model: model.littleParts,
        definition: definition.littleParts
    },
    knobcapgray: {
        name: "Knob Cap Gray",
        code: "YDK-710-10621-403",
        explanation: "Plum 360 Ses açma plastiği kapağı",
        model: model.littleParts,
        definition: definition.littleParts
    },
    cable1: {
        name: "Cable Flat 8 Cond",
        code: "YDK-683-67000-401",
        explanation: "switch pwa kablosu beyaz",
        model: model.mechanism,
        definition: definition.cables
    },
    cable2: {
        name: "Cable Flat 20 Cond",
        code: "YDK-683-67000-402",
        explanation: "mechanism, üstteki beyaz kablo",
        model: model.mechanism,
        definition: definition.cables
    },
    cable3: {
        name: "Cable Flex 14 Conductor",
        code: "YDK-683-67000-403",
        explanation: "Cpu, beyaz kablo",
        model: model.plum360,
        definition: definition.cables
    },
    cable4: {
        name: "Asm Cable Power Sply/Btry",
        code: "YDK-826-95058-402",
        explanation: "Power batarya arasındaki kablo",
        model: model.plum360,
        definition: definition.cables
    },
    cable5: {
        name: "Cpu Driver",
        code: "YDK-826-95059-402",
        explanation: "Cpu mechanism gri kablo",
        model: model.plum360,
        definition: definition.cables
    },
    cable6: {
        name: "Asm Cable Motor Power",
        code: "YDK-826-95060-401",
        explanation: "Power mechanism kırmızı kablo",
        model: model.plum360,
        definition: definition.cables
    },
    cable7: {
        name: "Asm Cable Battery",
        code: "YDK-826-95062-001",
        explanation: "Batarya kablosu",
        model: model.plum360,
        definition: definition.cables
    },
    cable8: {
        name: "Power Kablo",
        code: "YDK-804",
        explanation: "Power kablo",
        model: model.plum360,
        definition: definition.cables
    },

    littlepart1: {
        name: "Fılter Gm1 Rbn Ca",
        code: "YDK-687-69103-402",
        explanation: "Üstteki beyaz kablo demiri",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart2: {
        name: "Cap Vınyl 1/2 Long Blk",
        code: "YDK-711-10619-001",
        explanation: "Peripheral parçaları siyah",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart3: {
        name: "Cap F Black Conductıve 15-PI",
        code: "YDK-711-16004-005",
        explanation: "Peripheral parçaları siyah",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart4: {
        name: "Valve Pın P/S Valve",
        code: "YDK-712-00547-405",
        explanation: "Üstteki valf pinleri",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart5: {
        name: "Valve Pıns I/O Valve",
        code: "YDK-712-00554-406",
        explanation: "Alttaki valf pinleri",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart6: {
        name: "Tıp Shaft Pole Clamp",
        code: "YDK-712-00631-401",
        explanation: "Pole clamp siyah parça",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart7: {
        name: "Sft Opener Regulator",
        code: "YDK-712-00654-402",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart8: {
        name: "Rocker Regulator Opener",
        code: "YDK-712-00655-002",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart9: {
        name: "Rocker Regulator Closer",
        code: "YDK-717-95093-001",
        explanation: "Askı demiri parçaları",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart10: {
        name: "Cam Stac, Pri",
        code: "YDK-712-00658-003",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart11: {
        name: "Cam Stac, I/O",
        code: "YDK-712-00659-002",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart12: {
        name: "Support Pri/Sec Valve",
        code: "YDK-712-00660-402",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart13: {
        name: "Rocker Pri Valve",
        code: "YDK-712-00669-403",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart14: {
        name: "Rocker Sec Valve",
        code: "YDK-712-00671-403",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart15: {
        name: "Rkr Inlet Valve (CC)",
        code: "YDK-712-00672-403",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart16: {
        name: "Rkr Outlet Valve",
        code: "YDK-712-00673-403",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart17: {
        name: "Sprt Bot Spr",
        code: "YDK-712-00681-404",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart18: {
        name: "Bshg Mot",
        code: "YDK-712-00703-006",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart19: {
        name: "Bumper Chassıs",
        code: "YDK-712-00714-401",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart20: {
        name: "Housing Clutch",
        code: "YDK-712-03402-002",
        explanation: "Askı demiri plastiği siyah",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart21: {
        name: "Bracket Pole Clamp",
        code: "YDK-712-94070-402",
        explanation: "Pole Clamp kasa parçaları",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart22: {
        name: "Lever Cover",
        code: "YDK-712-94071-401",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart23: {
        name: "Holder Proximal Tubing",
        code: "YDK-SUB0000558",
        explanation: "Ön kasa mor parça",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart24: {
        name: "Cover USB Ce3.0",
        code: "YDK-712-94104-401",
        explanation: "Peripheral parçaları",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart25: {
        name: "Bracket Handle",
        code: "YDK-712-94861-402",
        explanation: "Arka Kapak Mor Parça",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart26: {
        name: "Cover Antennal Lcm CE 3.0",
        code: "YDK-712-94866-402",
        explanation: "Peripheral parçaları",
        model: model.plum360,
        definition: definition.other
    },
    littlepart27: {
        name: "Plate Clmpg Pressure Sensor",
        code: "YDK-712-95021-003",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart28: {
        name: "Tıp Dıstal Pressure Sensor",
        code: "YDK-712-95028-001",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart29: {
        name: "Spcr Pressure Sensor",
        code: "YDK-712-95030-001",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart30: {
        name: "Block Pressure Sensor",
        code: "YDK-712-95031-001",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart31: {
        name: "O-Ring Pressure Sensor",
        code: "YDK-712-95033-001",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart32: {
        name: "Lever Door",
        code: "YDK-712-95040-401",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart33: {
        name: "Cap Switch Pwa",
        code: "YDK-712-95041-401",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart34: {
        name: "Opener Regulator",
        code: "YDK-712-95048-401",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart35: {
        name: "Closer Regulator",
        code: "YDK-712-95049-406",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart36: {
        name: "Pıvot",
        code: "YDK-712-95067-401",
        explanation: "Turuncu parça",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart37: {
        name: "Pl Rear Mech",
        code: "YDK-712-95100-404",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart38: {
        name: "Plunger",
        code: "YDK-712-95105-404",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart39: {
        name: "Retainer Plunger",
        code: "YDK-712-95107-402",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart40: {
        name: "Body Coupler",
        code: "YDK-712-95109-001",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart41: {
        name: "Nest Coupler",
        code: "YDK-712-95110-402",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart43: {
        name: "Shaft Ext Coupler",
        code: "YDK-712-95111-003",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart44: {
        name: "Link Door",
        code: "YDK-712-97667-401",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart45: {
        name: "Clip Hairpin",
        code: "YDK-713-90726-002",
        explanation: "Askı demiri parçası",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart46: {
        name: "Shoe I/O Rocker",
        code: "YDK-714-00670-403",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart47: {
        name: "Bracket Handle",
        code: "YDK-714-94076-401",
        explanation: "Pole clamp parçası siyah",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart48: {
        name: "Plate Backing Pole Clamp",
        code: "YDK-714-95117-001",
        explanation: "Pole clamp parçası",
        model: model.pluma,
        definition: definition.littleParts
    },
    littlepart49: {
        name: "Plate Dampening Rear",
        code: "YDK-714-95166-402",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart50: {
        name: "Bracket Rear Plate Right",
        code: "YDK-714-95202-402",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart51: {
        name: "Bracket Rear Plate Left",
        code: "YDK-714-95203-402",
        explanation: "mechanism Parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart52: {
        name: "Clip Regulator Closer",
        code: "YDK-714-98658-401",
        explanation: "",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart53: {
        name: "Pin Prox/Distal Pressure Sensor",
        code: "YDK-715-95027-001",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart54: {
        name: "Retainer Pressure Sensor",
        code: "YDK-715-95032-001",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart55: {
        name: "Pin Fixed Cassette Locator",
        code: "YDK-715-95195-402",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart56: {
        name: "Pad Handle Door Stop",
        code: "YDK-716-00725-402",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart57: {
        name: "Pad Dampening Rear Plate",
        code: "YDK-716-95153-403",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart58: {
        name: "Vibraiton Isolator",
        code: "YDK-716-95261-401",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart60: {
        name: "Sprinf Inlet Valveleaf",
        code: "YDK-717-00683-408",
        explanation: "",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart61: {
        name: "Spring Outlet Valve Leaf (CCLT)",
        code: "YDK-717-00684-404",
        explanation: "mechanism parçaları",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart62: {
        name: "Spring Extension 0.063 DIA, 0.25 LG",
        code: "YDK-717-23000-403",
        explanation: "Plunger küçük yay",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart63: {
        name: "Spring Skt Extension 1.0 LSS",
        code: "YDK-717-23016-401",
        explanation: "Handle door yayı",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart64: {
        name: "SPRING, STK, EXTENSION, 0.180 DIA, SS",
        code: "YDK-717-23017-402",
        explanation: "Plunger yayı",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart65: {
        name: "Pri/Sec Valve Leaf Spring",
        code: "YDK-717-95011-402",
        explanation: "",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart66: {
        name: "Spring Cassette Guide",
        code: "YDK-717-95017-003",
        explanation: "Asmdoor demiri",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart67: {
        name: "Rivet Push Plastic",
        code: "YDK-718-15007-402",
        explanation: "Siyah plastik",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart68: {
        name: "Emi Spring Lcm CE3.0, Upper",
        code: "YDK-717-94872-401",
        explanation: "Peripheral parçası",
        model: model.plum360,
        definition: definition.other
    },
    littlepart69: {
        name: "Ring Rtng .188 x.025 SST",
        code: "YDK-721-13112-401",
        explanation: "Handle door parçası",
        model: model.pluma,
        definition: definition.other
    },
    littlepart70: {
        name: "Ring Rtng .312 x.025 SST",
        code: "YDK-721-13113-401",
        explanation: "Plunger parçası",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart71: {
        name: "Ring Rtng 0.140 x  .015 SST",
        code: "YDK-721-13116-401",
        explanation: "Handle door parçası",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart72: {
        name: "Washer Shldr #4 Nylon",
        code: "YDK-721-14138-002",
        explanation: "Peripheral parçası",
        model: model.pluma,
        definition: definition.littleParts
    },
    littlepart73: {
        name: "Washer Cprsn .121ID .045THK STL",
        code: "YDK-721-14171-402",
        explanation: "Makanizma parçası",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart74: {
        name: "Washer Flat .253 ID .050 Thk",
        code: "YDK-721-14181-410",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart75: {
        name: "Nut 1/4 Hex",
        code: "YDK-722-10257-001",
        explanation: "Peripheral parçası",
        model: model.pluma,
        definition: definition.littleParts
    },
    littlepart76: {
        name: "Ring Retainer",
        code: "YDK-722-10260-001",
        explanation: "Peripheral parçası",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart77: {
        name: "Nut 4-40 Hex Stl Zn Sml S",
        code: "YDK-722-12081-401",
        explanation: "?",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart78: {
        name: "Spacer Display",
        code: "YDK-723-10676-402",
        explanation: "Display parçası",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart79: {
        name: "Strap Velcro AC Power Cord",
        code: "YDK-725-36531-406",
        explanation: "Kablo bağı",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart80: {
        name: "Cable Ties",
        code: "YDK-725-72261-401",
        explanation: "Klips",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart81: {
        name: "Ca Tie Plastic Adh Back RW",
        code: "YDK-725-72283-402",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart82: {
        name: "Tape Ins 3M 1350 2Mil Wht 1.5",
        code: "YDK-729-38320-001",
        explanation: "Bant",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart83: {
        name: "Psa Dampening",
        code: "YDK-729-95171-402",
        explanation: "mechanism parçası",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart84: {
        name: "Cover IO Lcm CE3",
        code: "YDK-730-97249-401",
        explanation: "Peripheral parçası siyah kauçuk",
        model: model.plum360,
        definition: definition.other
    },
    littlepart85: {
        name: "Insulator CPU",
        code: "YDK-765-10922-402",
        explanation: "Siyah",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart86: {
        name: "Enclosure Gasket",
        code: "YDK-765-11388-001",
        explanation: "Gasket",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart87: {
        name: "Gasket Tape Switch Board",
        code: "YDK-765-12664-001",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart88: {
        name: "Insulator Batt Comp",
        code: "YDK-765-93923-401",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart89: {
        name: "Gasket Power Supply",
        code: "YDK-765-93925-401",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart90: {
        name: "Gskt Display Seal (CCLT)",
        code: "YDK-765-93926-401",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart91: {
        name: "Tape Gskt",
        code: "YDK-765-94079-401",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart92: {
        name: "Insulator Lcm Ce3.0",
        code: "YDK-765-94106-401",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart93: {
        name: "Splashguard",
        code: "YDK-765-94870-402",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart94: {
        name: "Insulator Bracket Handle",
        code: "YDK-765-94874-403",
        explanation: "Siyah",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart95: {
        name: "Gskt Front/Rear Enclosure",
        code: "YDK-765-94875-401",
        explanation: "Gasket",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart96: {
        name: "Gskt Handle",
        code: "YDK-765-95081-001",
        explanation: "Gasket",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart97: {
        name: "Splash Guard (Piezo)",
        code: "YDK-765-95154-001",
        explanation: "",
        model: model.littleParts,
        definition: definition.littleParts
    },
    littlepart98: {
        name: "Insulator Backing Plate",
        code: "YDK-765-95541-003",
        explanation: "",
        model: model.pluma,
        definition: definition.littleParts
    },
    littlepart99: {
        name: "Insulator Secondary",
        code: "YDK-765-97669-401",
        explanation: "Siyah",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart100: {
        name: "Gskt Fluid Shield",
        code: "YDK-765-97672-401",
        explanation: "Shield gasket",
        model: model.plum360,
        definition: definition.littleParts
    },
    littlepart101: {
        name: "Asm Coupler Body/Lead Screw",
        code: "YDK-820-95251-403",
        explanation: "",
        model: model.mechanism,
        definition: definition.littleParts
    },
    littlepart102: {
        name: "Base W/Rubber",
        code: "YDK-820-95542-003",
        explanation: "Pole clamp demiri",
        model: model.pluma,
        definition: definition.other
    },
    littlepart103: {
        name: "Base W/Rubber",
        code: "YDK-820-95720-402",
        explanation: "Pole clamp demiri",
        model: model.plum360,
        definition: definition.other
    },
    //screws
    screw1: {
        name: "Term Equıpotentıal",
        code: "YDK-678-72366-401",
        explanation: "Topraklama vidası",
        model: model.littleParts,
        definition: definition.screws
    },
    screw2: {
        name: "Rivet 125 Christmas Tree Black",
        code: "YDK-718-97671-401",
        explanation: "Peripheral parçası",
        model: model.littleParts,
        definition: definition.screws
    },
    screw3: {
        name: "Screw 4-24 1/4 Phh Pnh Hilo 18-8sst",
        code: "YDK-720-10031-001",
        explanation: "Keypad ve Asmdoor vidası",
        model: model.pluma,
        definition: definition.screws
    },
    screw4: {
        name: "Screw Jack 4-40, 7/16",
        code: "YDK-720-10062-402",
        explanation: "Retainer Cord vidası",
        model: model.littleParts,
        definition: definition.screws
    },
    screw5: {
        name: "Screw Lock Conn 4-40",
        code: "YDK-720-10039-001",
        explanation: "Retainer Cord vidası?",
        model: model.littleParts,
        definition: definition.screws
    },
    screw6: {
        name: "Screw 6-32, 5/8, Pan Head Philips With Washer",
        code: "YDK-720-10066-402",
        explanation: "Retainer Cord vidası?",
        model: model.littleParts,
        definition: definition.screws
    },
    screw7: {
        name: "Screw 6-32, X3, 1/4, Pan Head",
        code: "YDK-720-10068-001",
        explanation: "Arka kapak uzun vida",
        model: model.pluma,
        definition: definition.screws
    },
    screw8: {
        name: "SCREW, 6-32, X2, 1/2, PAN HEAD, PHILIPS",
        code: "YDK-720-10068-403",
        explanation: "Plum 360 arka kapak kısa vida",
        model: model.plum360,
        definition: definition.screws
    },
    screw9: {
        name: "SCREW, 6-32, X2, 1/2, PAN HEAD, PHILIPS",
        code: "YDK-720-10068-404",
        explanation: "Plum 360 arka kapak uzun vida",
        model: model.plum360,
        definition: definition.screws
    },
    screw10: {
        name: "Screw Holds Back Case",
        code: "YDK-720-10181-009",
        explanation: "Arka kapak kısa vida",
        model: model.pluma,
        definition: definition.screws
    },
    screw11: {
        name: "Screw 4-40, 5/8, Pan Head Philips",
        code: "YDK-720-10211-402",
        explanation: "Peripheral vidası",
        model: model.plum360,
        definition: definition.screws
    },
    screw12: {
        name: "Screw 4-40, 1/4, Hex Nylon",
        code: "YDK-720-10214-002",
        explanation: "Peripheral parçaları",
        model: model.littleParts,
        definition: definition.screws
    },
    screw13: {
        name: "Screw 4-40, 3/8, Button Head SS",
        code: "YDK-720-10233-407",
        explanation: "Peripheral vidası",
        model: model.plum360,
        definition: definition.screws
    },
    screw14: {
        name: "Screw 6-32, 3/8, Sltd Hwh Type T D",
        code: "YDK-720-10318-001",
        explanation: "",
        model: model.plum360,
        definition: definition.screws
    },
    screw15: {
        name: "Screw 4-40, 1/4, Hex Head Sltd W/Washer",
        code: "YDK-720-10323-402",
        explanation: "Pivot vidası",
        model: model.littleParts,
        definition: definition.screws
    },
    screw16: {
        name: "Screw 6-32, 3/8, Hex Head Slotted W/Washer",
        code: "YDK-720-10325-404",
        explanation: "Batarya kapağı vidası",
        model: model.plum360,
        definition: definition.screws
    },
    screw17: {
        name: "Emi Spring LCM CE3.0, Lower",
        code: "YDK-717-94876-401",
        explanation: "Peripheral parçası",
        model: model.plum360,
        definition: definition.littleParts
    },
    screw18: {
        name: "Screw 4-40, 3/8, Inhh Sqcn Sl Sem",
        code: "YDK-720-10323-404",
        explanation: "",
        model: model.plum360,
        definition: definition.screws
    },
    screw19: {
        name: "Screw 4-20 1/4 Pan Head Philips",
        code: "YDK-720-98348-401",
        explanation: "Ön kapak mor parça vidası",
        model: model.littleParts,
        definition: definition.screws
    },
    screw20: {
        name: "Screw M2X6 Pnh Sltd Nylon",
        code: "YDK-720-10748-003",
        explanation: "Peripheral parçası",
        model: model.pluma,
        definition: definition.screws
    },
    //labels
    labels1: {
        name: "Serial Number Cover (Mac Address)",
        code: "YDK-729-99155-401",
        explanation: "Peripheral etiketi",
        model: model.plum360,
        definition: definition.labels
    },
    labels2: {
        name: "Lbl Caution Intl Uk",
        code: "YDK-735-00569-001",
        explanation: "İngilizce üst etiket",
        model: model.pluma,
        definition: definition.labels
    },
    labels3: {
        name: "Ops Instr Lbl IE",
        code: "YDK-735-10861-002",
        explanation: "İngilizce yan labels",
        model: model.pluma,
        definition: definition.labels
    },
    labels4: {
        name: "Rear Caution Lbl IE",
        code: "YDK-735-10864-002",
        explanation: "İngilizce arka etiket",
        model: model.pluma,
        definition: definition.labels
    },
    labels5: {
        name: "Switch/Port Lbl IE",
        code: "YDK-735-10865-001",
        explanation: "12391-36 ingilizce peripheral etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels6: {
        name: "Switch/Port Cbl Turkey",
        code: "YDK-735-10937-001",
        explanation: "12391-06 türkçe peripheral etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels7: {
        name: "Switch Port Label",
        code: "YDK-735-95228-002",
        explanation: "11971-36 ingilizce peripheral etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels8: {
        name: "Lbl Set Ops/Alarms V11 Turkey",
        code: "YDK-735-10930-001",
        explanation: "Türkçe yan labels",
        model: model.pluma,
        definition: definition.labels
    },
    labels9: {
        name: "Caution Label Turkey",
        code: "YDK-735-10933-001",
        explanation: "Türkçe üst etiket",
        model: model.pluma,
        definition: definition.labels
    },
    labels10: {
        name: "Lbl Rear Caution Turkey",
        code: "YDK-735-10934-002",
        explanation: "Türkçe arka etiket",
        model: model.pluma,
        definition: definition.labels
    },
    labels11: {
        name: "Lbl Close Lever Turkey",
        code: "YDK-735-10935-001",
        explanation: "Kolu kapat etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels12: {
        name: "Lbl Close Lever W/Arrow Ef Trk",
        code: "YDK-735-10936-001",
        explanation: "Kolu kapat etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels13: {
        name: "Label Battery 6V",
        code: "YDK-735-95131-003",
        explanation: "Batarya etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels14: {
        name: "Label Logo",
        code: "YDK-735-95133-005",
        explanation: "Plum A etiketi",
        model: model.pluma,
        definition: definition.labels
    },
    labels15: {
        name: "Lbl Close Lever",
        code: "YDK-735-95235-001",
        explanation: "Close lever Kolu kapat",
        model: model.pluma,
        definition: definition.labels
    },
    labels16: {
        name: "Close Lever W/Arrow",
        code: "YDK-735-95236-001",
        explanation: "Close lever Kolu kapat",
        model: model.pluma,
        definition: definition.labels
    },
    labels17: {
        name: "Rear Caution Int'L ENG",
        code: "YDK-735-95244-002",
        explanation: "İngilizce arka etiket",
        model: model.pluma,
        definition: definition.labels
    },
    labels18: {
        name: "Ops Instr Intl Set",
        code: "YDK-735-95248-001",
        explanation: "İngilizce yan etiket",
        model: model.pluma,
        definition: definition.labels
    },
    labels19: {
        name: "Lbl High-Low English",
        code: "YDK-735-97264-001",
        explanation: "Volume etiketi sol+",
        model: model.pluma,
        definition: definition.labels
    },
    labels20: {
        name: "Lbl High-Low Turkish",
        code: "YDK-735-97264-002",
        explanation: "Ses etiketi sol+",
        model: model.pluma,
        definition: definition.labels
    },
    labels21: {
        name: "Lbl Low-High English",
        code: "YDK-735-97265-001",
        explanation: "Volum etiketi sağ+",
        model: model.pluma,
        definition: definition.labels
    },
    labels22: {
        name: "Lbl Low-High Turkish",
        code: "YDK-735-97265-002",
        explanation: "Ses etiketi sağ+",
        model: model.pluma,
        definition: definition.labels
    },
    labels23: {
        name: "Lbl Set Tubing Guide Labels",
        code: "YDK-735-97275-401",
        explanation: "AB labelsi",
        model: model.plum360,
        definition: definition.labels
    },
    labels24: {
        name: "Lbl Power Cord",
        code: "YDK-735-98155-401",
        explanation: "Power kablo etiketi",
        model: model.plum360,
        definition: definition.labels
    },
    labels25: {
        name: "Lbl Door Lever",
        code: "YDK-735-98156-401",
        explanation: "Kolu kapatın etiketi",
        model: model.plum360,
        definition: definition.labels
    },
    labels26: {
        name: "Lbl Close Lever",
        code: "YDK-735-98157-401",
        explanation: "Kolu kapatın etiketi",
        model: model.plum360,
        definition: definition.labels
    },
    labels27: {
        name: "Lbl Close Clamps",
        code: "YDK-735-98158-401",
        explanation: "Pembe etiket",
        model: model.plum360,
        definition: definition.labels
    },
    labels28: {
        name: "Product Rating Label (Turkey)",
        code: "YDK-735-98159-403",
        explanation: "Peripheral etiketi",
        model: model.plum360,
        definition: definition.labels
    },
    labels29: {
        name: "Lbl Switch Port",
        code: "YDK-735-98160-401",
        explanation: "Arka etiket",
        model: model.plum360,
        definition: definition.labels
    },
    labels30: {
        name: "Lbl Follow Instructions For Use",
        code: "YDK-735-98163-401",
        explanation: "Ön kapak gri etiket",
        model: model.plum360,
        definition: definition.labels
    },
    labels31: {
        name: "Brg Thrust",
        code: "YDK-745-19076-402",
        explanation: "plunger pulları",
        model: model.mechanism,
        definition: definition.labels
    }
};
//JSON üretim merkezi
let allSparePartsJSON = [];
function madeJson(x) {
    for (let i = 0; i < Object.keys(x).length; i++) {
        allSparePartsJSON.push({
            "name": Object.values(x)[i].name,
            "code": Object.values(x)[i].code,
            "resim": function () {
                return "../../../imagesYdk/" + this.code + ".jpg"
            },
            "model": Object.values(x)[i].model,
            "definition": Object.values(x)[i].definition,
            "explanation": Object.values(x)[i].explanation,
            "alt": "(" + Object.values(x)[i].name + ") ",
            "fullName": function () {
                return `${this.name} ${this.code}`;
            }
        })
    }
}
madeJson(plumaSparePartsObj);
madeJson(mechanismSparePartsObj);
madeJson(plum360SparePartsObj);
madeJson(littlePartsObj);