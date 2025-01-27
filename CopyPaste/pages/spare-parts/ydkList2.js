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
    pivot: () => {
        return littlePartsObj.pivot.fullName();
    },
    handledoor: () => {
        return plum360SparePartsObj.handledoor.fullName();
    },
    linkdoor: () => {
        return littlePartsObj.linkdoor.fullName();
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
    peripheral: () => {
        return plum360SparePartsObj.peripheral.fullName();
    },
    spring: () => {
        return littlePartsObj.spring.fullName();
    },
    cableMotorPower: () => {
        return littlePartsObj.cableMotorPower.fullName();
    },
    cableCpuDriver: () => {
        return littlePartsObj.cableCpuDriver.fullName();
    },
    cablePowerBattery: () => {
        return littlePartsObj.cablePowerBattery.fullName();
    },
    cableCableFlat20: () => {
        return littlePartsObj.cableCableFlat20.fullName();
    },
    cableFlat8: () => {
        return littlePartsObj.cableFlat8.fullName();
    },
    powerCable: () => {
        return littlePartsObj.powerCable.fullName();
    },
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
    handledoor: () => {
        return plumaSparePartsObj.handledoor.fullName();
    },
    power: () => {
        return plumaSparePartsObj.powerpwa.fullName();
    },
    mechanism: () => {
        return mechanismSparePartsObj.mechanism.fullName();
    },
    peripheral: () => {
        return plumaSparePartsObj.peripheral.fullName();
    }
};
