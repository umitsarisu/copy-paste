"use strict";
function pageTransition(x) {
    $("iframe").hide();
    $("a[name='navlink-a']").removeClass("nav-active");
    $("a[name='navlink-a']").eq(x).addClass("nav-active");

    if (x == 0) { $("iframe[id='home']").show() }
    else if (x == 1) { $("iframe[id='copyPasteFrame']").show() }
    else if (x == 2) { $("iframe[name='iframeSpareParts']").show(); }
    else if (x == 3) { $("iframe[name='iframeCari']").show(); }
    else if (x == 4) { $("iframe[name='iframeRandom']").show(); }
    else if (x == 5) { $("iframe[name='iframeRunin']").show(); }
    else if (x == 6) { $("iframe[name='iframeBuyutec']").show(); }
}
