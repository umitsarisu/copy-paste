//Sayfaya Yazdırma
$(function () {
    for (i = 0; i < allSparePartsJSON.length; i++) {
        var cardValue = (
            '<div class="card shadow" style="width: 15rem;">'
            + '<div class="imgContainer">'
            + '  <img src="' + allSparePartsJSON[i].resim() + '"'
            + '  class="card-img-top image normal-zoom img-thumbnail"'
            + '  alt="' + allSparePartsJSON[i].alt + '">'
            + '</div>'
            + '<div class="card-body">'
            + '  <div class="card-header text-center hoverAlert">'
            + '    <span>Adet: <input type="number" class="inputNumbers" min="0" value="0"></span>'
            + '    <label class="form-check-label" for="switch' + i + '">'
            + '      <div class="form-check form-control my-2 form-switch">'
            + '        <input class="form-check-input switch" type="checkbox"'
            + '        id="switch' + i + '">Panoya Ekle'
            + '      </div></label>'
            + '    <button name="ydkNameButtons"'
            + '    class="btn btn-outline-success btn-lg">'
            + allSparePartsJSON[i].ad + '</button>'
            + '  <div class="alert alert-success alertText"'
            + '     role="alert">Butona tıklayarak kopyalaya bilirsiniz.'
            + '</div></div>'
            + '<p class="card-text text-center fw-bold" name="ydkCode">'
            + allSparePartsJSON[i].kod + '</p>'
            + '<p class="card-text text-center" name="ydkDescription">'
            + allSparePartsJSON[i].açıklama + '</p></div>'
            + '<div class="card-footer" name="ydkDefinition">'
            + allSparePartsJSON[i].tanım + '</div></div>'
        );
        if (allSparePartsJSON[i].model == model.pluma) $("#plumAYdk").append(cardValue);
        else if (allSparePartsJSON[i].model == model.plum360) $("#plum360Ydk").append(cardValue);
        else if (allSparePartsJSON[i].model == model.mekanizma) $("#mechanismYdk").append(cardValue);
        else if (allSparePartsJSON[i].model == model.küçükparçalar) $("#küçükYdk").append(cardValue);
        else $("body").append(cardValue)
    }
})
// Excel 
$("#excel").click(function () {
    $("#pano").table2excel({
        name: "Yedek Parçalar", // Çalışma sayfası adı - Worksheet
        filename: "dosya.xls" // Dosya Adı
    });
})
//Yazdır Butonu
$("#yazdır").click(function () {
    var divToPrint = document.getElementById("pano");
    var htmlToPrint = '' +
        '<style type="text/css">' +
        'table, tr, th, td {' +
        'border:1px solid #999;' +
        'border-collapse: collapse;' +
        'padding:0.5em;' +
        '}' +
        '</style>';
    htmlToPrint += divToPrint.outerHTML;
    newWin = window.open("");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
})
//Search bölümü filtreleme
$("#search").keyup(function () {
    var filter = $("#search").val().toLowerCase();
    for (i = 0; i < $(".card").length; i++) {
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
$("#filter").change(function () {
    card = document.getElementsByClassName("card");
    filter2 = document.getElementById("filter").value;
    ydkDefinition = document.getElementsByName("ydkDefinition");
    for (i = 0; i < card.length; i++) {
        ydkDefinitions = ydkDefinition[i].innerHTML;
        if (filter2 == "allParts") {
            card[i].style.display = "";
        }
        else if (filter2 == ydkDefinitions) {
            card[i].style.display = "";
        }
        else {
            card[i].style.display = "none";
        }
    }
})
//Panoya Ekleme
$(function () {
    $(".switch,.inputNumbers").bind('click keyup', function () {
        $("#pano").empty();
        $("#pano").append("<tr><th>Parça Adı</th><th>Stok Kodu</th><th>Adet</th></tr>");
        for (i = 0; i < $(".switch").length; i++) {
            var x = "#switch" + i;
            if ($("" + x + "").is(":checked")) {
                var item = $("" + x + "").parents("div.card-header").siblings("p.fw-bold").text();
                var numberValue = $("" + x + "").parents("label").siblings("span").find("input").val();
                for (j = 0; j < allSparePartsJSON.length; j++) {
                    if (allSparePartsJSON[j].kod == item) {
                        $("#pano").append("<tr><td>" + allSparePartsJSON[i].ad + "</td><td>" + allSparePartsJSON[i].kod + "</td><td>" + numberValue + "</td></tr>");
                    }
                }
            }
        }
    })
})
//copy function
$(function () {
    $("button[name ='ydkNameButtons']").click(function () {
        var b = $(this).parents("div.card-header").siblings("p:first()").text();
        var c = $(this).siblings("span").find("input").val();
        for (i = 0; i < allSparePartsJSON.length; i++) {
            if (allSparePartsJSON[i].kod == b) {
                var ydkListCopy = document.createElement("textarea");
                document.body.appendChild(ydkListCopy);
                var inputNumbers = document.getElementsByClassName("inputNumbers");
                var a;
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
    $('.image').click(function () {
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