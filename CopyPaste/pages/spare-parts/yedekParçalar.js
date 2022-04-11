"use strict";
//Sayfaya Yazdırma
$(function () {
    allSparePartsJSON.map((spareParts, i) => {
        let cardValue = (`
        <div class="card shadow">
            <div class="imgContainer">
                <img src="${spareParts.resim()}" class="card-img-top image normal-zoom img-thumbnail" alt="${spareParts.alt}">
            </div>
            <div class="card-body">
                <div class="card-header text-center hoverAlert">
                    <span>Adet: <input type="number" class="inputNumbers" min="0" value="0"></span>
                    <label class="form-check-label" for="switch${i}">
                        <div class="form-check form-control my-2 form-switch">
                            <input class="form-check-input switch" type="checkbox" id="switch${i}">Panoya Ekle
                        </div>
                    </label>
                    <button name="ydkNameButtons" class="btn btn-outline-success btn-lg">${spareParts.name}</button>
                    <div class="alert alert-success alertText" role="alert">Butona tıklayarak kopyalaya bilirsiniz.
                    </div>
                </div>
                <p class="card-text text-center fw-bold"
                name="ydkCode">${spareParts.code}</p>
                <p class="card-text text-center"
                name="ydkDescription">${spareParts.explanation}</p>
            </div>
            <div class="card-footer"
            name="ydkDefinition">${spareParts.definition}</div>
        </div>
        `);
        if (spareParts.model == model.pluma) { $("#plumAYdk").append(cardValue); }
        else if (spareParts.model == model.plum360) { $("#plum360Ydk").append(cardValue); }
        else if (spareParts.model == model.mechanism) { $("#mechanismYdk").append(cardValue); }
        else if (spareParts.model == model.littleParts) { $("#küçükYdk").append(cardValue); }
        else { $("body").append(cardValue); }
    });
});
// Excel
$("#excelBtn").click(function () {
    function ExportToExcel(type, fn, dl) {
        let elt = document.getElementById('pano');
        let wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
        return dl ?
            XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
            XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
    }
    ExportToExcel('xlsx');
});
//Yazdır Butonu
$("#yazdır").on("click", () => {
    const divToPrint = document.getElementById("pano");
    let htmlToPrint = `
        <style type="text/css">
            table, tr, th, td {
                border:1px solid #999;
                border-collapse: collapse;
                padding:0.5em;
            }
        </style>
    `;
    htmlToPrint += divToPrint.outerHTML;
    let newWin = window.open("");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
});
//Search bölümü filtreleme
$("#search").on("keyup", () => {
    const filter = $("#search").val().toLowerCase();
    for (let i = 0; i < $(".card").length; i++) {
        if ($("button[name*='ydkNameButtons']")[i].innerHTML.toLocaleLowerCase().indexOf(filter) > -1 ||
            $("p[name*='ydkCode']")[i].innerHTML.toLocaleLowerCase().indexOf(filter) > -1 ||
            $("p[name*='ydkDescription']")[i].innerHTML.toLocaleLowerCase().indexOf(filter) > -1) {
            $(".card")[i].style.display = "";
        }
        else {
            $(".card")[i].style.display = "none";
        }
    }
})
//Select Menu Filtreleme
$("#filter").on("change", () => {
    let card = document.getElementsByClassName("card");
    let filter = document.getElementById("filter").value;
    let ydkDefinition = document.getElementsByName("ydkDefinition");
    for (let i = 0; i < card.length; i++) {
        let ydkDefinitions = ydkDefinition[i].innerHTML;
        if (filter == "allParts") {
            card[i].style.display = "";
        }
        else if (filter == ydkDefinitions) {
            card[i].style.display = "";
        }
        else {
            card[i].style.display = "none";
        }
    }
})
//Panoya Ekleme
$(function () {
    $(".switch,.inputNumbers").on('click keyup', function () {
        $("#pano").empty();
        $("#pano").append(`
            <tr>
                <th>Parça Adı</th>
                <th>Stok Kodu</th>
                <th>Adet</th>
            </tr>
        `);
        for (let i = 0; i < $(".switch").length; i++) {
            let x = "#switch" + i;
            if ($(x).is(":checked")) {
                const numberValue = $(x).parents("label").siblings("span").find("input").val();
                $("#pano").append(`
                    <tr>
                        <td>${allSparePartsJSON[i].name}</td>
                        <td>${allSparePartsJSON[i].code}</td>
                        <td>${numberValue}</td>
                    </tr>
                `);
            }
        }
    })
})
//copy function
$(function () {
    $("button[name ='ydkNameButtons']").click(function () {
        let b = $(this).parents("div.card-header").siblings("p:first()").text();
        let c = $(this).siblings("span").find("input").val();
        for (let i = 0; i < allSparePartsJSON.length; i++) {
            if (allSparePartsJSON[i].code == b) {
                let ydkListCopy = document.createElement("textarea");
                document.body.appendChild(ydkListCopy);
                let a;
                a = allSparePartsJSON[i].fullName()
                a += " Adet: " + c;
                ydkListCopy.value = a;
                ydkListCopy.select();
                document.execCommand("copy");
                document.body.removeChild(ydkListCopy);
            }
        }
    })
})
//resim üzerinde mouse ile gezinme
$(function () {
    // Zoom in/out clothing img
    $('.image').on("click", function () {
        $(this).toggleClass('normal-zoom zoom-in');
    });
    $('.image').on('mousemove', function (event) {
        // This gives you the position of the image on the page
        var bbox = event.target.getBoundingClientRect();
        // Then we measure how far into the image the mouse is in both x and y directions
        var mouseX = event.clientX - bbox.left;
        var mouseY = event.clientY - bbox.top;
        // Then work out how far through the image as a percentage the mouse is
        var xPercent = (mouseX / bbox.width) * 100;
        var yPercent = (mouseY / bbox.height) * 100;
        // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
        //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
        // It's a bit clearer in jQuery:
        $(this).css('transform-origin', (xPercent + '% ' + yPercent + '%'));
        // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.
    });
    // and stop when not hovering
    $('.image').on('mouseleave', function () {
        $(this).addClass('normal-zoom');
        $(this).removeClass('zoom-in');
    });
})