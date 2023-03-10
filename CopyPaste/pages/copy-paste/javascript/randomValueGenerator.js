function dateFunc() {
    let date = document.getElementById("date1").value;
    date = date.replace(/-/g, "");
    var year = parseInt(date.slice(0, 4));
    var month = parseInt(date.slice(4, 6));
    var day = parseInt(date.slice(6, 8));
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function randomDate() {
        if (month == 1) {
            randomMonth = Math.floor((Math.random() * 3) + 10);
            randomDay = Math.floor((Math.random() * 28) + 1);
            return `${randomDay} ${months[randomMonth - 1]} ${year - 1}`;
        }
        else {
            while (true) {
                randomMonth = Math.floor((Math.random() * month) + 1);
                randomDay = Math.floor((Math.random() * 28) + 1);
                if ((randomMonth < month && randomMonth > month - 3) || (randomMonth == month && randomDay < day)) {
                    return `${randomDay} ${months[randomMonth - 1]} ${year}`;
                }
            }

        }
    }
    $("#dateResult").text(`${randomDate()} TO ${day} ${months[month - 1]} ${year}`);
}
function rvgFunc(x) {
    var psi6, psi10, egt1, egt2, egt3, egt4, egt5;
    while (true) {
        psi6 = Math.random() * (8 - 5) + 5;
        psi6 = psi6.toFixed(2);
        psi10 = Math.random() * (12 - 10) + 10;
        psi10 = psi10.toFixed(2);
        if (psi10 - psi6 > 3.5 && psi10 - psi6 < 5) {
            break;
        }
    }
    egt1 = 0;
    egt2 = 0;
    egt3 = Math.floor(Math.random() * (17 - 10) + 10);
    egt4 = Math.floor(Math.random() * (50 - 30) + 30);
    egt5 = Math.floor(Math.random() * (120 - 70) + 70);
    if (x == 0) {
        //Home Page
        $("#rvg2").empty();
        $("#egt2").empty();
        $("#rvg2").append('<p class="rvg2p m-auto"><button onclick="copyPsi(' + psi6 + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + psi6 + '</button></p>');
        $("#rvg2").append('<p class="rvg2p m-auto mt-3"><button onclick="copyPsi(' + psi10 + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + psi10 + '</button></p>');
        $("#egt2").append('<h5>PVT</h5><hr>')
        $("#egt2").append('<p class="egt2p">' + egt1 + '</p><p class="egt2p">' + egt2 + '</p><p class="egt2p">' + egt3 + '</p><p class="egt2p">' + egt4 + '</p><p class="egt2p">' + egt5 + '</p>');
    }
    else {
        //Kopyala Yapıştır
        $(".rvg").append('<p class="rvg2p m-auto"><button onclick="copyPsi(' + psi6 + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + psi6 + '</button></p>');
        $(".rvg").append('<p class="rvg2p m-auto"><button onclick="copyPsi(' + psi10 + ')" style="width: 80px; text-align: center" class="btn btn-outline-dark align-self-center">' + psi10 + '</button></p>');
        $(".egt").append('<p class="egt2p">' + egt1 + '</p><p class="egt2p">' + egt2 + '</p><p class="egt2p">' + egt3 + '</p><p class="egt2p">' + egt4 + '</p><p class="egt2p">' + egt5 + '</p>');
    }
}
function copyPsi(psi) {
    let clipboard = document.createElement("textarea");
    clipboard.value = psi.toFixed(2) + " PSI";
    document.body.appendChild(clipboard);
    clipboard.select();
    document.execCommand("copy");
    document.body.removeChild(clipboard);
}