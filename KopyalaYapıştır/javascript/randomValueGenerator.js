function dateFunc() {
    var b = document.getElementById("date1").value;
    var day = parseInt(b[8] + b[9]);
    var month = parseInt(b[5] + b[6]);
    var year = parseInt(b[0] + b[1] + b[2] + b[3]);
    var day1, month1, monthtext, x;
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function monthFunc() {
        while (true) {
            x = Math.floor((Math.random() * 12) + 1);
            if (x <= month && x > month - 3) {
                month1 = x;
                return months[x - 1];
                break;
            }
        }
    }
    function dayFunc() {
        while (true) {
            x = Math.floor((Math.random() * 28) + 1);
            if (month1 < month) {
                return x;
                break;
            }
            else if (month1 == month) {
                if (x < day) {
                    return x;
                    break;
                }
            }
        }
    }
    monthtext = monthFunc();
    day1 = dayFunc();
    document.getElementById("dateResult").innerHTML = (day1 + " " + monthtext + " " + year + " TO " + day + " " + months[month - 1] + " " + year);
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
    egt1=0;
    egt2=0;
    egt3=Math.floor(Math.random() * (17 - 10) + 10);
    egt4=Math.floor(Math.random() * (50 - 30) + 30);
    egt5=Math.floor(Math.random() * (120 - 70) + 70);
    if (x == 0) {
        //Home Page
        $("#rvg2").empty();
        $("#egt2").empty();
        $("#rvg2").append('<p class="rvg2p">' + psi6 + '</p> <p class="rvg2p">' + psi10 + '</p>');
        $("#egt2").append('<h5>PVT</h5><hr>')
        $("#egt2").append('<p class="egt2p">'+egt1+'</p><p class="egt2p">'+egt2+'</p><p class="egt2p">' + egt3 + '</p><p class="egt2p">' + egt4 + '</p><p class="egt2p">' + egt5 + '</p>');
    }
    else {
        //Kopyala Yapıştır
        $(".rvg").append('<p class="rvg2p">' + psi6 + '</p> <p class="rvg2p">' + psi10 + '</p>');
        $(".egt").append('<p class="egt2p">'+egt1+'</p><p class="egt2p">'+egt2+'</p><p class="egt2p">' + egt3 + '</p><p class="egt2p">' + egt4 + '</p><p class="egt2p">' + egt5 + '</p>');        
    }
}