var commonYdkObj = {
    battery: function (x) {
        return plum360SparePartsObj.battery.fullName();
    },
    pressurededector: function (x) {
        return mechanismSparePartsObj.pressurededector.fullName();
    },
    app: function (x) {
        return mechanismSparePartsObj.apppwa.fullName();
    },
    cpu: function (x) {
        return plum360SparePartsObj.cpu.fullName();
    },
}
var plum360YdkObj = {
    asmdoor: function (x) {
        return plum360SparePartsObj.asmdoor.fullName();
    },
    shield: function (x) {
        return plum360SparePartsObj.shield.fullName();
    },
    keypad360: function (x) {
        return plum360SparePartsObj.keypad.fullName();
    },
    display: function (x) {
        return plum360SparePartsObj.display.fullName();
    },
    power: function (x) {
        return plum360SparePartsObj.powerpwa.fullName();
    },
    mechanism: function (x) {
        return mechanismSparePartsObj.mechanism360.fullName();
    },
    driverPwa: function (x) {
        return mechanismSparePartsObj.driverpwa.fullName();
    },
    lsMotor: function (x) {
        return mechanismSparePartsObj.lsmotor.fullName();
    },
    ioMotor: function (x) {
        return mechanismSparePartsObj.iomotor.fullName();
    },
    plungerMotor: function (x) {
        return mechanismSparePartsObj.plungermotor.fullName();
    },
    switchPwa: function (x) {
        return mechanismSparePartsObj.switchpwa.fullName();
    },
    peripheralPwa: function (x) {
        return plum360SparePartsObj.peripheralpwa.fullName();
    }
}
var plumaYdkObj = {
    asmdoor: function (x) {
        return plumaSparePartsObj.asmdoor.fullName();
    },
    shield: function (x) {
        return plumaSparePartsObj.shield.fullName();
    },
    keypadTr: function (x) {
        return plumaSparePartsObj.keypadtr.fullName();
    },
    keypadEn: function (x) {
        return plumaSparePartsObj.keypaden.fullName();
    },
    display: function (x) {
        return plum360SparePartsObj.display.fullName();
    },
    power: function (x) {
        return plumaSparePartsObj.powerpwa.fullName();
    },
    mechanism: function (x) {
        return mechanismSparePartsObj.mechanism.fullName();
    },
}
