"use strict";
const commonYdkObj = {
    battery: () => {
        return plum360SparePartsObj.battery.fullName();
    },
    pressurededector: () => {
        return mechanismSparePartsObj.pressurededector.fullName();
    },
    app: () => {
        return mechanismSparePartsObj.apppwa.fullName();
    },
    cpu: () => {
        return plum360SparePartsObj.cpu.fullName();
    }
};
const plum360YdkObj = {
    asmdoor: () => {
        return plum360SparePartsObj.asmdoor.fullName();
    },
    shield: () => {
        return plum360SparePartsObj.shield.fullName();
    },
    keypad360: () => {
        return plum360SparePartsObj.keypad.fullName();
    },
    display: () => {
        return plum360SparePartsObj.display.fullName();
    },
    power: () => {
        return plum360SparePartsObj.powerpwa.fullName();
    },
    mechanism: () => {
        return mechanismSparePartsObj.mechanism360.fullName();
    },
    driverPwa: () => {
        return mechanismSparePartsObj.driverpwa.fullName();
    },
    lsMotor: () => {
        return mechanismSparePartsObj.lsmotor.fullName();
    },
    ioMotor: () => {
        return mechanismSparePartsObj.iomotor.fullName();
    },
    plungerMotor: () => {
        return mechanismSparePartsObj.plungermotor.fullName();
    },
    switchPwa: () => {
        return mechanismSparePartsObj.switchpwa.fullName();
    },
    peripheralPwa: () => {
        return plum360SparePartsObj.peripheralpwa.fullName();
    }
};
const plumaYdkObj = {
    asmdoor: () => {
        return plumaSparePartsObj.asmdoor.fullName();
    },
    shield: () => {
        return plumaSparePartsObj.shield.fullName();
    },
    keypadTr: () => {
        return plumaSparePartsObj.keypadtr.fullName();
    },
    keypadEn: () => {
        return plumaSparePartsObj.keypaden.fullName();
    },
    display: () => {
        return plum360SparePartsObj.display.fullName();
    },
    power: () => {
        return plumaSparePartsObj.powerpwa.fullName();
    },
    mechanism: () => {
        return mechanismSparePartsObj.mechanism.fullName();
    }
};
