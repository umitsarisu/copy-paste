function enterKeyPress(e) {
    /*Enter tuşuna basıldığında fonksiyonu çalıştırıp false döndürdüğü için sayfayı yenilemiyor.*/
    if (e.keyCode === 13) return false;
}
//Yine bekleriz fonksiyonu
function pageReset() {
    document.location.reload();
}
//Seri Numarası girilen yerlerde auto complate kapalı//
$(function () {
    $("input[placeholder='Seri Numarası'").attr('autocomplete', 'off');
})
// Background Color Atamaları
$(function () {
    var color = {
        plumTr: "linear-gradient(to bottom, #7abcff 0%,#4096ee 17%,#4096ee 17%,#4096ee 31%,#4096ee 44%,#4096ee 53%,#60abf8 76%,#4096ee 94%)",
        plumEn: "linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 15%,rgba(0,174,255,1) 53%,rgba(43,136,217,1) 86%,rgba(43,136,217,1) 88%,rgba(43,136,217,1) 92%,rgba(43,136,217,1) 100%)",
        plum360: "linear-gradient(to bottom, rgba(147,83,163,1) 0%,rgba(173,109,214,1) 20%,rgba(173,109,214,1) 29%,rgba(147,83,163,1) 52%,rgba(173,109,214,1) 75%,rgba(173,109,214,1) 83%,rgba(147,83,163,1) 100%)",
        contentColor: "rgba(202, 211, 200,0.5)"
    }
    $(".bgColor").css("background", color.plumTr);
    $(".models:nth(0)").css("background", color.plumTr);
    $(".models:nth(1)").css("background", color.plumEn);
    $(".models:nth(2)").css("background", color.plum360);
    $(".contentBgColor").css("background", color.contentColor);
    $(function () {
        $("#plumTr").click(function () {
            $(".bgColor").css("background", color.plumTr);
            $("#coverperipheral").prop("disabled", false);
        })
        $("#plumEn").click(function () {
            $(".bgColor").css("background", color.plumEn);
            $("#coverperipheral").prop("disabled", false);
        })
        $("#plum360").click(function () {
            $(".bgColor").css("background", color.plum360);
            $("#coverperipheral").prop("disabled", true);
        })
    })
})
// Main Page Buttons
var forwardCounter = 0;
$(function () {
    $("#backwardSpan1").hide();
    $("#forward").click(function () {
        if (forwardCounter == 0) {
            $("#mainPage").hide();
            $("#sonuc").show();
            forwardCounter++;
            $("#backwardSpan1").show();
            $("#forwardSpan1").hide();
            $("#forwardSpan2").show();
        }
        // else if (forwardCounter == 1) {
        //     $("#sonuc").hide();
        //     $("#ydkPage").show();
        //     forwardCounter++;
        //     $("#backwardSpan1").hide();
        //     $("#backwardSpan2").show();
        //     $("#forwardSpan2").hide();
        // }
    })
    $("#backward").click(function () {
        if (forwardCounter == 1) {
            $("#mainPage").show();
            $("#sonuc").hide();
            forwardCounter--;
            $("#backwardSpan1").hide();
            $("#forwardSpan1").show();
            $("#forwardSpan2").hide();
        }
    })
    $("#customerExperienceForm").submit(function () {
        experience = $("#customerExperience").val().toUpperCase();
        $("#question1").text(experience + " Görüldü Mü?");
        $("#isIt950").show();
        // 122, 141 visual settings.
        $(function () {
            for (k = 0; k < sparePartsVisual.length; k++) sparePartsVisual.options[k].style.display = "block";
            for (i = 0; i < sparePartsVisual.length; i++) {
                if (experience == "122") {
                    for (j = 0; j < spareParts122.length; j++) {
                        if (sparePartsVisual[i].value == spareParts122[j].value) sparePartsVisual.options[i].style.display = "none";
                    }
                    $("#divSpareParts122").show();
                    $("#divSpareParts141").hide();
                }
                else if (experience == "141") {
                    for (j = 0; j < spareParts141.length; j++) {
                        if (sparePartsVisual[i].value == spareParts141[j].value) sparePartsVisual.options[i].style.display = "none";
                    }
                    $("#divSpareParts122").hide();
                    $("#divSpareParts141").show();
                }
                else {
                    $("#divSpareParts122").hide();
                    $("#divSpareParts141").hide();
                }
            }
        })
    })
    // Cihaz sağlam
    $("#yes2").click(function () {
        $("#findings").hide();
        $("#theTests").hide();
        $("#footer1").show();
    })
    // Cihazda arıza görüldü
    $("#no2").click(function () {
        $("#findings").show();
        $("#theTests").show();
    })
    // Bulgular 
    $("#liVI").click(function () { testStandart.dropdownShow("#visualInspection") })
    $("#liST").click(function () { testStandart.dropdownShow("#selfTest") })
    $("#liPO").click(function () { testStandart.dropdownShow("#proximalOcclusion") })
    $("#liDO").click(function () { testStandart.dropdownShow("#distalOcclusion") })
})
var testStandart = {
    standartShow: function (x, y) {
        $(x).show();
        $("#dropdownMenu").show();
        $("#theTests").show();
        $("#footer1").show();

        $("#visualInspection").hide();
        $("#selfTest").hide();
        $("#proximalOcclusion").hide();
        $("#distalOcclusion").hide();
        $(y).show();
    },
    standartHide: function (x, y) {
        $(x).hide();
        $(y).hide();
        if (visualInspectionFail.checked) $("#visualInspection").show();
        else if (selfTestFail.checked) $("#selfTest").show();
        else if (proximalOccFail.checked) $("#proximalOcclusion").show();
        else if (distalOccFail.checked) $("#distalOcclusion").show();
        else {
            $("#dropdownMenu").hide();
            $("#theTests").hide();
        }
    },
    dropdownShow: function (x) {
        $("#visualInspection").hide();
        $("#selfTest").hide();
        $("#proximalOcclusion").hide();
        $("#distalOcclusion").hide();
        $(x).show();
    }
}
// Visual Inspection Start//
$(function () {
    $("#visualInspectionFail").click(function () {
        if ($(this).is(":checked")) {
            visualBool = false;
            testStandart.standartShow("#liVI", "#visualInspection");
        }
        else if ($(this).is(":not(:checked)")) {
            $("#visualInspection").find(":reset").click();
            visualBool = true;
            testStandart.standartHide("#liVI", "#visualInspection");
        }
    })
    $("#visualInspection").find(":submit").click(function () {
        damaged = show122Dizisi.concat(show141Dizisi).concat(showVisualDizisi);
        if (damaged.length == 0) {
            alert("Hasarlı yedek parçayı seçin!");
            return false;
        }
        else visualBool = true;
    })
    $("#visualInspection").find(":reset").click(function () {
        visualBool = false;
        $("#checkicon1").hide();
        $("#checkicon11").hide();
        // Değişkenleri sıfırlama
        yorumVisual = "";
        showVisualDizisi = [];
        show122Dizisi = [];
        show141Dizisi = [];
        damaged = [];
        show122.innerHTML = "";
        showVisual.innerHTML = "";
        show141.innerHTML = "";
        // Seçimleri Sıfırlama   
        for (i = 0; i < sparePartsVisual.length; i++) {
            sparePartsVisual[i].selected = false;
            sparePartsVisual[i].disabled = false;
        }
        for (i = 0; i < spareParts122.length; i++) {
            spareParts122[i].selected = false;
            spareParts122[i].disabled = false;
        }
        for (i = 0; i < spareParts141.length; i++) {
            spareParts141[i].selected = false;
            spareParts141[i].disabled = false;
        }
    })
})
function selectedVisual(x) {
    if (x == 1) {
        for (i = 0; i < spareParts122.length; i++) {
            if (spareParts122[i].selected) {
                for (j = 0; j < sparePartsVisual.length; j++) {
                    if (spareParts122[i].value == sparePartsVisual[j].value) {
                        sparePartsVisual[j].setAttribute("disabled", true);
                    }
                }
                var a = [];
                a.push(spareParts122[i].value);
                for (k = 0; k < a.length; k++) {
                    if (show122Dizisi.includes(a[k])) { }
                    else show122Dizisi = show122Dizisi.concat(a);
                }
                show122.innerHTML = show122Dizisi.join(", ");
            }
        }
    }
    if (x == 2) {
        for (i = 0; i < spareParts141.length; i++) {
            if (spareParts141[i].selected) {
                for (j = 0; j < sparePartsVisual.length; j++) {
                    if (spareParts141[i].value == sparePartsVisual[j].value) {
                        sparePartsVisual[j].setAttribute("disabled", true);
                    }
                }
                var a = [];
                a.push(spareParts141[i].value);
                for (k = 0; k < a.length; k++) {
                    if (show141Dizisi.includes(a[k])) { }
                    else show141Dizisi = show141Dizisi.concat(a);
                }
                show141.innerHTML = show141Dizisi.join(", ");
            }
        }
    }
    if (x == 3) {
        for (i = 0; i < sparePartsVisual.length; i++) {
            if (sparePartsVisual[i].selected) {
                for (j = 0; j < spareParts122.length; j++) {
                    if (spareParts122[j].value == sparePartsVisual[i].value) {
                        spareParts122[j].setAttribute("disabled", true);
                    }
                }
                for (k = 0; k < spareParts141.length; k++) {
                    if (spareParts141[k].value == sparePartsVisual[i].value) {
                        spareParts141[k].setAttribute("disabled", true);
                    }
                }
                var a = [];
                a.push(sparePartsVisual[i].value);
                for (k = 0; k < a.length; k++) {
                    if (showVisualDizisi.includes(a[k])) { }
                    else showVisualDizisi = showVisualDizisi.concat(a);
                }
                showVisual.innerHTML = showVisualDizisi.join(", ");
            }
        }
    }
} // Visual Inspection End//

// Self Test Fail Start//
$(function () {
    $("#selfTestFail").click(function () {
        if ($(this).is(":checked")) {
            testStandart.standartShow("#liST", "#selfTest");
        }
        else if ($(this).is(":not(:checked)")) {
            testStandart.standartHide("#liST", "#selfTest");
            battery.checked = false;
            sDBattery.checked = false;
            n252.checked = false;
            n250Shield.checked = false;
            n250Asmdoor.checked = false;
            n251Asmdoor.checked = false;
            n251Shield.checked = false;
            e439.checked = false;
            e302.checked = false;
            powerBool = true;
            cpuBool = true;
            selfMechanismBool = true;
            $("#power").prop("checked", false);
            $("#cpu").prop("checked", false);
            $("#selfTestMechanism").prop("checked", false);
            $("#selfTestForMechanismPCI").prop("checked", false);
            $("#powerForm").hide();
            $("#cpuForm").hide();
            $("#selfTestMechanismForm").hide();
            $("#powerForm").find(":reset").click();
            $("#cpuForm").find(":reset").click();
            $("#selfTestMechanismForm").find(":reset").click();
        }
    })
    // Battery //
    $(function () {
        $("#n252").click(function () {
            if ($("#sDBattery").is(":checked")) {
                alert("Stok Dışı 305 ile aynı anda seçilemez!");
                $("#n252").prop("checked", false);
            }
            else if ($("#battery").is(":checked")) {
                alert("305 ile aynı anda seçilemez!");
                $("#n252").prop("checked", false);
            }
        })
        $("#sDBattery").click(function () {
            if ($("#n252").is(":checked")) {
                alert("N252 ile aynı anda seçilemez!");
                $("#sDBattery").prop("checked", false);
            }
            else if ($("#battery").is(":checked")) {
                alert("305 ile aynı anda seçilemez!");
                $("#sDBattery").prop("checked", false);
            }
        })
        $("#battery").click(function () {
            if ($("#n252").is(":checked")) {
                alert("N252 ile aynı anda seçilemez!");
                $("#battery").prop("checked", false);
            }
            else if ($("#sDBattery").is(":checked")) {
                alert("Stok Dışı 305 ile aynı anda seçilemez!");
                $("#battery").prop("checked", false);
            }
        })
        $("#n250Asmdoor").click(function () {
            if ($("#n251Asmdoor").is(":checked")) {
                alert("n251Asmdoor ile aynı anda seçilemez!");
                $("#n250Asmdoor").prop("checked", false);
            }
            if ($(this).is(":checked")) {
                n250.classList.add("hoverUpDownli")
            }
            else if ($(this).is(":not(:checked)")) {
                if (n250Shield.checked != true) {
                    n250.classList.remove("hoverUpDownli");
                }
            }
        })
        $("#n251Asmdoor").click(function () {
            if ($("#n250Asmdoor").is(":checked")) {
                alert("n250Asmdoor ile aynı anda seçilemez!");
                $("#n251Asmdoor").prop("checked", false);
            }
            if ($(this).is(":checked")) {
                n251.classList.add("hoverUpDownli")
            }
            else if ($(this).is(":not(:checked)")) {
                if (n251Shield.checked != true) {
                    n251.classList.remove("hoverUpDownli");
                }
            }
        })
        $("#n250Shield").click(function () {
            if ($("#n251Shield").is(":checked")) {
                alert("n251Shield ile aynı anda seçilemez!");
                $("#n250Shield").prop("checked", false);
            }
            if ($(this).is(":checked")) {
                n250.classList.add("hoverUpDownli")
            }
            else if ($(this).is(":not(:checked)")) {
                if (n250Asmdoor.checked != true) {
                    n250.classList.remove("hoverUpDownli");
                }
            }
        })
        $("#n251Shield").click(function () {
            if ($("#n250Shield").is(":checked")) {
                alert("n250Shield ile aynı anda seçilemez!");
                $("#n251Shield").prop("checked", false);
            }
            if ($(this).is(":checked")) {
                n251.classList.add("hoverUpDownli")
            }
            else if ($(this).is(":not(:checked)")) {
                if (n251Asmdoor.checked != true) {
                    n251.classList.remove("hoverUpDownli");
                }
            }
        })
    }) // Battery //
    // Power Start //
    $(function () {
        $("#power").click(function () {
            if ($(this).is(":checked")) {
                powerBool = false;
                $("#powerForm").show();
            }
            else if ($(this).is(":not(:checked)")) {
                $("#powerForm").find(":reset").click();
                powerBool = true;
                $("#powerForm").hide();
            }
        })
        $("#powerForm").find(":submit").click(function () {
            if ($("#powerErrorCode").val() == 0) {
                alert("Power hata kodunu girin!");
                return false;
            } else {
                if ($("#powerSN").val() == 0) {
                    alert("Power seri numarasını girin!");
                    return false;
                }
            }
        })
        $("#powerForm").find(":reset").click(function () {
            $("#checkicon2").hide();
        })
    }) // Power End //
    // Cpu Start //
    $(function () {
        $("#cpu").click(function () {
            if ($(this).is(":checked")) {
                cpuBool = false;
                $("#cpuForm").show();
            }
            else if ($(this).is(":not(:checked)")) {
                $("#cpuForm").find(":reset").click();
                cpuBool = true;
                $("#cpuForm").hide();
            }
        })
        $("#cpuForm").find(":submit").click(function () {
            if ($("#cpuErrorCode").val() == 0) {
                alert("CPU hata kodunu girin!");
                return false;
            } else {
                if ($("#cpuSN").val() == 0) {
                    alert("CPU seri numarasını girin!");
                    return false;
                }
            }
        })
        $("#cpuForm").find(":reset").click(function () {
            $("#checkicon3").hide();
        })
    }) // Cpu End //
    // Self Test Mechanism Start //
    $(function () {
        $("#selfTestMechanism").click(function () {
            if ($(this).is(":checked")) {
                selfMechanismBool = false;
                $("#selfTestMechanismForm").show();
            }
            else if ($(this).is(":not(:checked)")) {
                $("#selfTestMechanismForm").find(":reset").click();
                selfMechanismBool = true;
                $("#selfTestMechanismForm").hide();
            }
        })
        $("#selfTestForMechanismPCI").click(function () {
            if ($(this).is(":checked")) {
                $("#forMechanismPCI").show();
            }
            else if ($(this).is(":not(:checked)")) {
                $("#forMechanismPCI").hide();
            }
        })
        $("#selfTestMechanismReplaced").click(function () {
            selfMechanismBool = false;
            $("#ifSelfTestAppChecked").hide();
            $("#ifSelfTestMechanismChecked").show();
            $("#selfTestAppSN").val("");
            selfTestAppReplaced.checked = false;
        })
        $("#selfTestAppReplaced").click(function () {
            if ($(this).is(":checked")) {
                $("#ifSelfTestAppChecked").show();
                removeMechanism();
            }
            else if ($(this).is(":not(:checked)")) {
                $("#ifSelfTestAppChecked").hide();
                $("#selfTestAppSN").val("");
            }
        })
        $("#selfTestDRPReplaced").click(function () {
            if ($(this).is(":checked")) {
                $("#ifSelfTestDriverPwaChecked").show();
                removeMechanism();
            }
            else if ($(this).is(":not(:checked)")) {
                $("#ifSelfTestDriverPwaChecked").hide();
                $("#selfTestDriverPwaSN").val("");
            }
        })
        function removeMechanism() {
            selfMechanismBool = false;
            $("#ifSelfTestMechanismChecked").hide();
            $("#selfTestMechanismSN").val("");
            selfTestMechanismReplaced.checked = false;
        }
        $("#selfTestLSMReplaced").click(function () {
            removeMechanism();
        })
        $("#selfTestIOMReplaced").click(function () {
            removeMechanism();
        })
        $("#selfTestDRPCalibrated").click(function () {
            removeMechanism();
        })
        $("#selfTestPLMReplaced").click(function () {
            removeMechanism();
        })
        $("#selfTestSWPReplaced").click(function () {
            removeMechanism();
        })
        $("#selfTestPressureReplaced").click(function () {
            removeMechanism();
        })
        $("#selfTestPressureCalibrated").click(function () {
            removeMechanism();
        })
        $("#selfTestMechanismForm").find(":submit").click(function () {
            if ($("#selfTestMechanismErrorCode").val() == 0) {
                alert("Mekanizma hata kodunu girin!");
                return false;
            } else {
                if (selfTestMechanismReplaced.checked ||
                    selfTestAppReplaced.checked || selfTestPressureReplaced.checked ||
                    selfTestPressureCalibrated.checked || selfTestDRPReplaced.checked ||
                    selfTestLSMReplaced.checked || selfTestIOMReplaced.checked ||
                    selfTestPLMReplaced.checked || selfTestSWPReplaced.checked ||
                    selfTestDRPCalibrated.checked) {
                    if (selfTestMechanismReplaced.checked) {
                        if ($("#selfTestMechanismSN").val() == 0) {
                            alert("Mekanizma seri numarasını girin!");
                            return false;
                        }
                    } else if (selfTestAppReplaced.checked) {
                        if ($("#selfTestAppSN").val() == 0) {
                            alert("APP seri numarasını girin!");
                            return false;
                        }
                    } else if (selfTestDRPReplaced.checked) {
                        if ($("#selfTestDriverPwaSN").val() == 0) {
                            alert("Driver PWA seri numarasını girin!");
                            return false;
                        }
                    }
                } else {
                    alert("Mekanizma ile ilgili bir seçim yapın!");
                    return false;
                }
            }
        })
        $("#selfTestMechanismForm").find(":reset").click(function () {
            $("#checkicon4").hide();
            $("#ifSelfTestAppChecked").hide();
            $("#ifSelfTestMechanismChecked").hide();
            $("#ifSelfTestDriverPwaChecked").hide();
            $("#forMechanismPCI").hide();
        })
    }) // Self Test Mechanism End //
}) // Self Test End //
// Proximal Test Start //
$(function () {
    $("#proximalOccFail").click(function () {
        if ($(this).is(":checked")) {
            proximalBool = false;
            testStandart.standartShow("#liPO", "#proximalOcclusion");
        }
        else if ($(this).is(":not(:checked)")) {
            $("#proximalOcclusion").find(":reset").click();
            proximalBool = true;
            testStandart.standartHide("#liPO", "#proximalOcclusion");
        }
    })
    $("#proximalTestMechanismReplaced").click(function () {
        $("#ifProxTestAppChecked").hide();
        $("#ifProxTestMechanismChecked").show();
        $("#proximalAppSN").val("");
        $("#checkicon5").hide();
        proximalBool = false;
    })
    $("#proximalTestAppReplaced").click(function () {
        $("#ifProxTestAppChecked").show();
        $("#ifProxTestMechanismChecked").hide();
        $("#proximalMechanismSN").val("");
        $("#checkicon5").hide();
        proximalBool = false;
    })
    $("#proximalTestAppCalibrated").click(function () {
        $("#ifProxTestAppChecked").hide();
        $("#ifProxTestMechanismChecked").hide();
        $("#proximalAppSN").val("");
        $("#proximalMechanismSN").val("");
        $("#checkicon5").hide();
        proximalBool = false;
    })
    $("#proximalOcclusion").submit(function () {
        if ($("#proximalTestErrorCode").val() == 0) {
            alert("Mekanizma hata kodunu girin!");
            return false;
        } else {
            if (proximalTestMechanismReplaced.checked) {
                if ($("#proximalMechanismSN").val() == 0) {
                    alert("Mekanizma seri numarasını girin!");
                    return false;
                }
            } else if (proximalTestAppReplaced.checked) {
                if ($("#proximalAppSN").val() == 0) {
                    alert("APP seri numarasını girin!");
                    return false;
                }
            }
        }
    })
    $("#proximalOcclusion").find(":reset").click(function () {
        $("#checkicon5").hide();
        $("#ifProxTestAppChecked").hide();
        $("#ifProxTestMechanismChecked").hide();
    })
})// Proximal End //
// Distal Test Start //
$(function () {
    $("#distalOccFail").click(function () {
        if ($(this).is(":checked")) {
            distalBool = false;
            testStandart.standartShow("#liDO", "#distalOcclusion");
        }
        else if ($(this).is(":not(:checked)")) {
            $("#distalOcclusion").find(":reset").click();
            distalBool = true;
            testStandart.standartHide("#liDO", "#distalOcclusion");
        }
    })
    $("#distalTestMechanismReplaced").click(function () {
        $("#ifDistalTestMechanismChecked").show();
        $("#checkicon6").hide();
        distalBool = false;
    })
    $("#distalTestPressureReplaced").click(function () {
        $("#ifDistalTestMechanismChecked").hide();
        $("#distalMechanismSN").val("");
        $("#checkicon6").hide();
        distalBool = false;
    })
    $("#distalTestPressureCalibrated").click(function () {
        $("#ifDistalTestMechanismChecked").hide();
        $("#distalMechanismSN").val("");
        $("#checkicon6").hide();
        distalBool = false;
    })
    $("#distalOcclusion").submit(function () {
        if (distalTestMechanismReplaced.checked) {
            if ($("#distalMechanismSN").val() == 0) {
                alert("Distal Occlusion mekanizma seri numarasını girin!");
                return false;
            }
        }
    })
    $("#distalOcclusion").find(":reset").click(function () {
        $("#checkicon6").hide();
        $("#ifDistalTestMechanismChecked").hide();
    })
}) // Distal Test End //

function mainPageFormsVerification() {
    if ($("#no2").is(":checked")) {
        if (visualInspectionFail.checked || selfTestFail.checked || proximalOccFail.checked || distalOccFail.checked) {
            if (visualBool == true) {
                if (selfTestFail.checked) {
                    if (battery.checked || sDBattery.checked || n252.checked || e439.checked || e302.checked || power.checked || cpu.checked || n250Shield.checked || n250Asmdoor.checked || n251Asmdoor.checked || n251Shield.checked || selfTestMechanism.checked) {
                        verificationContinue();
                    }
                    else alert("Cassette Alarm Testte herhangi bir işaretleme yapmadınız.\nCassette Alarm Testte bir arıza yoksa kutucuğundaki işareti kaldırınız.");
                }
                else {
                    verificationContinue();
                }
                function verificationContinue() {
                    if (powerBool == true) {
                        if (cpuBool == true) {
                            if (selfMechanismBool == true) {
                                if (proximalBool == true) {
                                    if (distalBool == true) {
                                        result();
                                    }
                                    else alert("Distal Occlusion Test bilgileri gönderilmemiştir!")
                                }
                                else alert("Proximal Occlusion Test bilgileri gönderilmemiştir!")
                            }
                            else alert("Mekanizma bilgileri gönderilmemiştir!")
                        }
                        else alert("Cpu bilgileri gönderilmemiştir!");
                    }
                    else alert("Power bilgileri gönderilmemiştir!");
                }
            }
            else alert("Visual Inspection Test bilgileri gönderilmemiştir!");
        }
    }
    else {
        if ($("#yes2").is(":checked")) result();
        else alert("\nHiçbir hata belirtilmedi! \n\nCihaz 950 olarak kapatılacaksa \"Cihaz sağlam mı?\" sorusunu \"Evet\" olarak cevaplayın!");
    }
}
function resetFindings() {
    visualInspectionFail.checked = false;
    selfTestFail.checked = false;
    proximalOccFail.checked = false;
    distalOccFail.checked = false;
    resetVisual();
    $("#proximalOcclusion").find(":reset").click();
    $("#distalOcclusion").find(":reset").click();
    testStandart.standartHide("#liST", "#selfTest");
    battery.checked = false;
    sDBattery.checked = false;
    n252.checked = false;
    e439.checked = false;
    e302.checked = false;
    n250Shield.checked = false;
    n250Asmdoor.checked = false;
    n251Asmdoor.checked = false;
    n251Shield.checked = false;
    $("#power").prop("checked", false);
    $("#cpu").prop("checked", false);
    $("#selfTestMechanism").prop("checked", false);
    $("#powerForm").hide();
    $("#cpuForm").hide();
    $("#selfTestMechanismForm").hide();
    $("#powerForm").find(":reset").click();
    $("#cpuForm").find(":reset").click();
    $("#selfTestMechanismForm").find(":reset").click();
}
