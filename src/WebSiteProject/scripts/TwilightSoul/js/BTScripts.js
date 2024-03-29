(function () {
    (function (d) {
        var f = false; function e() {
            var a = window, b = "inner"; if (!("innerWidth" in window)) { b = "client"; a = document.documentElement || document.body }
            return { width: a[b + "Width"], height: a[b + "Height"] }
        }
        showDefaultMenu = function (a, n, c, b) {
            d("ul:first", c).children("ul").show();
            if (d(c).find("ul").is(".submenu")) {
                var l = d(c).children("ul.submenu");
                if (n.Orientation.toLowerCase() == "vertical" || d(c).parent().is(".submenu")) {
                    l.css("left", l.parent().outerWidth(true));
                    d(c).css("position", "relative");
                    var o = d(c).children("a,span").offset().top - d(c).offset().top; o = o + d(c).children("a,span").outerHeight(true);
                    if (!d("#MenuH em").hasClass("sf-sub-indicator") && d("#MenuH select")) {
                        l.css("margin-top", "-" + o + "px");
                        l.css("margin-left", "0px");
                        var p = d(c).offset().left + d(c).outerWidth(true);
                        if (p + l.outerWidth() > d(window).width()) { l.css("left", "0px").css("left", "-" + l.outerWidth() + "px") }
                    }
                }
                else {
                    var m = d(c).children("a,span").offset().left - d(c).offset().left; if (m > 0) { l.css("margin-left", "-" + m + "px") }
                }
            }
            d("ul:first", c).fadeIn(b)
        };
        hideDefaultMenu = function (a, h, c, b) { d("ul:first", c).hide() };
        showAccordionMenu = function (a, h, c, b) {
            if (h.Event == "hover") {
                if (d(c).siblings().parent().is(".menu")) { d(c).siblings().children("ul").slideUp(b).parent("li").removeClass("has-children-open").addClass("has-children-close") }
                d("ul", c).slideDown(b).css({ position: "relative", display: "block" })
            }
            else {
                if (d("ul.submenu", c).is(".submenu")) { d(c).children("ul").slideDown(b).css({ position: "relative", display: "block" }) }
            }
            if (d(c).is(".has-children-close")) { d(c).removeClass("has-children-close").addClass("has-children-open") }
        };
        hideAccordionMenu = function (a, h, c, b) {
            if (h.Event == "hover") {
                if (d(c).parent("ul").is(".menu")) { d("ul", c).slideUp(b) }
            }
            else {
                if (d("ul.submenu", c).is(".submenu")) {
                    d(c).children("ul").slideUp(b);
                    if (d(c).parent("ul").css("display") != "none") { d("ul.submenu", c).slideUp(b).parent("li").removeClass("has-children-open").addClass("has-children-close") }
                }
            }
            if (d(c).is(".has-children-open")) { d(c).removeClass("has-children-open").addClass("has-children-close") }
        };
        showMegaMenu = function (L, J, c, y) {
            d("ul.submenu", L).hide();
            d("ul.submenu", L).css({ left: "" });
            var G = d(".container").outerWidth();
            if (d(c).children("ul").is(".submenu")) {
                var F = d(c).children("ul.submenu");
                F.css("position", "absolute");
                if (J.Orientation.toLowerCase() == "vertical") {
                    F.css("left", F.parent().outerWidth(true));
                    d(c).css("position", "relative");
                    var M = d(c).children("a,span").offset().top - d(c).offset().top; M = M + d(c).children("a,span").outerHeight(true);
                    F.css("margin-top", "-" + M + "px");
                    F.css("margin-left", "0px");
                    var A = d(c).offset().left + d(c).outerWidth(true);
                    if (A > d(window).width() / 2) { F.css("left", "0px").css("left", "-" + F.outerWidth() + "px") }
                }
                else {
                    var I = d(c).find("a,span").offset().left - d(c).offset().left; if (I > 0 && d(c).hasClass("mega")) { F.css("margin-left", "-" + I + "px") }
                    var B = d(c).find("a,span").offset().top - d(c).offset().top; if (B > 0) { F.css("margin-top", B + "px") }
                    if (J.Orientation.toLowerCase() == "horizontal") {
                        var H = parseInt(d(".container").css("padding-left").split("px")[0]);
                        var N = parseInt(d(".container").css("padding-right").split("px")[0]);
                        var D = d(".container").width() + H + N; var a = Math.floor(((d(window).width() - D) / 2));
                        var K = F.width();
                        var z = (K - d(c).width()) / 2; var b = d(c).width();
                        var E = Math.floor(d(c).offset().left - a);
                        var C = D - E - b; if (E + b + z > D) { var x = K - b - C; F.css("left", "-" + x + "px") }
                        else {
                            if (z > E) { F.css("left", "-" + E + "px") }
                            else {
                                if (d(c).hasClass("mega")) { F.css("left", "-" + z + "px") }
                            }
                        }
                    }
                }
            }
            d("ul.submenu", c).fadeIn(y)
        };
        hideMegaMenu = function (a, h, c, b) { d("ul.submenu", a).hide() };
        megaMenuWithColumns = function (v, t, C, A, y, B, b, z, a) {
            z = z.toLowerCase();
            if (z == "vertical") {
                var i = d("#MenuV").width();
                var c = parseInt(d(".container").css("padding-left").split("px")[0]);
                var w = parseInt(d(".container").css("padding-right").split("px")[0]);
                var x = d(".container").width() - c - w; if (v > A) { A = x - i }
                else { A = v }
            }
            var D = C.children("li");
            if (y == true) { C = C.parent() }
            else {
                for (var u = 0; u < D.length; u += t) { D.slice(u, u + t).wrapAll("<div class='megamenu-row'></div>") }
            }
            C.css("width", a * t + "px");
            C.children(".megamenu-row").children("li").css({ display: "table-cell", "max-width": b + "px", "min-width": B + "px", width: v / t + "px" })
        };
        megaMenuNoColumns = function (t, z, x, y, b, r, a, s, w) {
            w = w.toLowerCase();
            if (w == "vertical") {
                var q = d("#MenuV").width();
                var c = parseInt(d(".container").css("padding-left").split("px")[0]);
                var u = parseInt(d(".container").css("padding-right").split("px")[0]);
                var v = d(".container").width() - c - u; x = v - q
            }
            if (t <= x) {
                z.css("width", t);
                z.children("li").css({ "min-height": a + "px", width: s + "px", "min-width": y + "px", "max-width": b + "px" })
            }
            else {
                s = parseInt(x / r);
                maxCol = (100 * s) / x; z.css("width", s * r);
                z.children("li").css({ "max-width": b + "px", "min-height": a + "px", "min-width": y + "px", width: maxCol + "%" })
            }
        };
        showMobileMenu = function (c, a, j, i, b) {
            if (c == "select") {
                if (f == false) {
                    d(".menu").parent().each(function () {
                        if (d(this).is("#MenuH")) {
                            d("<select></select><span></span>").appendTo(this);
                            d("<option />", { selected: "selected", value: "", text: "Go to..." }).appendTo("#MenuH select");
                            var l = d("select", this);
                            var h = d("select + span", this);
                            d("ul li", this).each(function () {
                                var s = d(this),
                                v = s.children("a:first, span:first"),
                                r = s.parents("li"),
                                k = new Array(r.length + 1).join("-");
                                if (v.html() !== "") {
                                    var t = v.text();
                                    var u = d("<option>").text(k + " " + t);
                                    u.text().replace("?", "-");
                                    u.val(v.attr("href"));
                                    if (u.val() == "") { u.attr("disabled", "disabled") }
                                    u.appendTo(l);
                                    if (s.hasClass("sel")) {
                                        u.attr("selected", "selected");
                                        h.text(t)
                                    }
                                }
                            });
                            h.text(l.find("option:selected").text().replace(/^-+/, "").trim());
                            l.change(function () { window.location = d(this).find("option:selected").val() });
                            var g = d("#MenuH .menu > li:not(.sel) > a").css("color");
                            h.css("color", g)
                        }
                    });
                    f = true
                }
            }
            else {
                if (c == "toggle") {
                    d("li > ul", a).each(function () {
                        var g = d(this).parent().children("a, span");
                        if (g.find(".sf-sub-indicator").length <= 0) { g.append('<em class="sf-sub-indicator closed"></em>') }
                        else { g.find(".sf-sub-indicator").removeClass("opened").addClass("closed") }
                    });
                    d("em.sf-sub-indicator", a).click(function () {
                        var g = d(this).parent().parent("li");
                        if (d(this).hasClass("closed")) {
                            d(this).removeClass("closed").addClass("opened");
                            showDefaultMenu(a, j, g, b)
                        }
                        else {
                            d(this).removeClass("opened").addClass("closed");
                            hideDefaultMenu(a, j, g, b);
                            d(g.children("ul").children("li")).find("em.sf-sub-indicator").removeClass("opened").addClass("closed");
                            hideDefaultMenu(a, j, g.children("ul").children("li"),
                            b);
                            d(g.children("ul").children(".megamenu-row").children("li")).find("em.sf-sub-indicator").removeClass("opened").addClass("closed");
                            hideDefaultMenu(a, j, g.children("ul").children(".megamenu-row").children("li"),
                            b)
                        }
                        return false
                    })
                }
            }
        };
        d.fn.BindMENU = function (a) {
            var y = "fast"; var x = "hover"; var B = d(this);
            var A = "toggle"; var z = "768"; if (a.Speed != null) { y = a.Speed.toLowerCase() }
            if (a.Event != null) {
                if ((a.Event.toLowerCase() == "hover") || (a.Event.toLowerCase() == "mouseover")) { x = "hover" }
                else {
                    if ((a.Event.toLowerCase() == "click") || (a.Event.toLowerCase() == "mouseclick")) { x = "click" }
                }
            }
            d("ul", this).addClass("submenu");
            d(".submenu", this).css("display", "none");
            if (navigator.userAgent.indexOf("MSIE 7") != -1) { d("ul.submenu", this).before('<div style="height: 0px; line-height: 0px; clear: both; overflow: hidden; font-size:0px; position:fixed" />') }
            eventOpenDefaultMenu = function (i, g, j, h) {
                if (x == "hover") {
                    d("li", i).hover(function () { showDefaultMenu(g, j, this, h) },
                     function () { hideDefaultMenu(g, j, this, h) })
                }
                else {
                    d("li > a, li > span", i).click(function (k) {
                        var l = d(this).parent("li");
                        if (d(l).children("ul").is(".submenu")) {
                            k.preventDefault();
                            if (d(l).children("ul").css("display") != "none") { hideDefaultMenu(g, j, l, h) }
                            else {
                                d(this).closest("ul").children("li").children("a, span").not(this).parent().find("ul").hide();
                                showDefaultMenu(g, j, l, h)
                            }
                        }
                        else { d(g).find("ul.submenu").hide() }
                    })
                }
            };
            eventOpenAccordionMenu = function (g) {
                if (x == "hover") {
                    d("li", g).hover(function (h) {
                        h.stopPropagation();
                        showAccordionMenu(B, a, this, y)
                    },
                    function (h) {
                        h.stopPropagation();
                        hideAccordionMenu(B, a, this, y)
                    })
                }
                else {
                    d("li > a, li > span", g).click(function (h) {
                        var i = d(this).parent("li");
                        if (d(i).children("ul").is(".submenu")) {
                            h.preventDefault();
                            h.stopPropagation();
                            if (d(i).children("ul").css("display") != "none") { hideAccordionMenu(B, a, i, y) }
                            else { showAccordionMenu(B, a, i, y) }
                        }
                    })
                }
            };
            eventOpenMegaMenu = function (i, g, j, h) {
                if (x == "hover") {
                    d(i).children("li").hover(function () { showMegaMenu(g, j, this, h) },
                    function () { hideMegaMenu(g, j, this, h) })
                }
                else {
                    d("li > a, li > span", i).click(function (k) {
                        var l = d(this).parent("li");
                        if (d(l).children("ul").is(".submenu")) {
                            k.preventDefault();
                            if (d(l).children("ul").css("display") != "none") { hideMegaMenu(g, j, l, h) }
                            else { showMegaMenu(g, j, l, h) }
                        }
                        else { d(g).find("ul.submenu").hide() }
                    })
                }
            };
            if ((a.Orientation.toLowerCase() == "horizontal" && a.MenuStyle.toLowerCase() == "accordion") || a.MenuStyle.toLowerCase() == "defaultmenu") {
                d("ul.submenu", this).hide().css({ "min-width": "180px", position: "absolute" });
                d("ul.submenu", this).children("li").each(function () {
                    if (d(this).children().is("ul")) { d(this).addClass("has-children") }
                    d(this).children(".submenu").css("min-width", "180px")
                });
                eventOpenDefaultMenu(this, B, a, y)
            }
            if (a.Orientation.toLowerCase() == "vertical" && a.MenuStyle.toLowerCase() == "accordion") {
                d(this).closest("#MenuV").addClass("accordion");
                d(this).children("li").children("ul").hide();
                if (typeof (a.Event) !== "undefined") { a.Event = a.Event.toLowerCase() }
                else { a.Event = x }
                if (a.Event == "click") { d("li", this).children("ul").each(function () { d(this).parent("li").addClass("has-children has-children-close") }) }
                else {
                    d("li", this).each(function () {
                        if (d(this).children().is("ul")) {
                            if (d(this).parent("ul").is(".menu")) { d(this).addClass("has-children has-children-close") }
                        }
                    })
                }
                eventOpenAccordionMenu(this)
            }
            if (a.MenuStyle.toLowerCase() == "megamenu") {
                d(this).parents("#MenuH, #MenuV").addClass("megamenu");
                d("head").append('<link id="styles-mobile-megamenu" rel="stylesheet" href="' + style_mobile_path + '/mobile-megamenu.css" type="text/css" />');
                d(this).children("li").children("ul").each(function () {
                    if (d(this).children("li").children("ul").is(".submenu")) { d(this).parent().addClass("mega") }
                });
                d(this).children("li:not(.mega)").each(function () { d(this).children(".submenu").css("min-width", "180px") });
                var b = 0; var c = 0; a.MinWidth = parseInt(a.MinWidth);
                a.MaxWidth = parseInt(a.MaxWidth);
                if (a.MinWidth > 0) {
                    if (a.MinWidth > a.MaxWidth) { a.MinWidth = 150; a.MaxWidth = 250 }
                    else { a.MinWidth }
                }
                else { a.MinWidth = 150 }
                if (a.MaxWidth > 0) { a.MaxWidth }
                else { a.MaxWidth = 250 }
                d(".submenu", this).css({ left: "-9999px", display: "block", visibility: "hidden" });
                d(".mega > .submenu", this).each(function () {
                    var g = 0; d(this).children("li").each(function () { g++ });
                    d("li", this).each(function () {
                        if (d(this).width() > b) {
                            var q = parseInt(d(this).css("padding-left").split("px")[0]);
                            var p = parseInt(d(this).css("padding-right").split("px")[0]);
                            var o = parseInt(d(this).css("margin-left").split("px")[0]);
                            var n = parseInt(d(this).css("margin-right").split("px")[0]);
                            b = d(this).width() + q + p + o + n; if (b > a.MaxWidth) { b = a.MaxWidth; d(".menu-item-text", this).css("white-space", "normal") }
                            else {
                                if (b < a.MinWidth) { b = a.MinWidth }
                                else { b }
                            }
                            if (d(this).outerHeight(true) > c) { c = d(this).outerHeight(true) }
                        }
                    });
                    var j = parseInt(d(".container").css("padding-left").split("px")[0]);
                    var h = parseInt(d(".container").css("padding-right").split("px")[0]);
                    var l = d(".container").width() + j + h; if (a.MaxColumns && a.MaxColumns > 0 && a.MaxColumns <= g) {
                        var k = d(this);
                        var m = parseInt(b * g);
                        megaMenuWithColumns(m, parseInt(a.MaxColumns),
                        k, l, false, a.MinWidth, a.MaxWidth, a.Orientation, b);
                        var i = d(this).children(".megamenu-row");
                        d(window).resize(function () {
                            if (d(window).width() >= z) {
                                var o = parseInt(d(".container").css("padding-left").split("px")[0]);
                                var n = parseInt(d(".container").css("padding-right").split("px")[0]);
                                var p = d(".container").width() + o + n; megaMenuWithColumns(m, parseInt(a.MaxColumns),
                                i, p, true, a.MinWidth, a.MaxWidth, a.Orientation, b)
                            }
                            else {
                                d("#MenuH .submenu, #MenuH .megamenu-row > li").removeAttr("style");
                                d("#MenuH .submenu").css("display", "none")
                            }
                        })
                    }
                    else {
                        var k = d(this);
                        var m = parseInt(b * g);
                        megaMenuNoColumns(m, d(this),
                        l, a.MinWidth, a.MaxWidth, g, c, b, a.Orientation);
                        var k = d(this);
                        d(window).resize(function () {
                            if (d(window).width() >= z) {
                                var o = parseInt(d(".container").css("padding-left").split("px")[0]);
                                var n = parseInt(d(".container").css("padding-right").split("px")[0]);
                                var p = d(".container").width() + o + n; megaMenuNoColumns(m, k, p, a.MinWidth, a.MaxWidth, g, c, b, a.Orientation)
                            }
                            else {
                                d("#MenuH .submenu, #MenuH .submenu > li").removeAttr("style");
                                d("#MenuH .submenu").css("display", "none")
                            }
                        })
                    }
                });
                d(".submenu", this).css({ display: "", visibility: "" });
                d(this).children("li").children("ul").hide();
                eventOpenMegaMenu(this, B, a, y)
            }
            if (a.Orientation.toLowerCase() == "vertical") {
                var B = d(this);
                var r = a.MenuStyle.toLowerCase();
                if (e().width <= 991) {
                    d("li", B).unbind();
                    d(".submenu", B).css("position", "");
                    B.closest("#MenuV").removeClass().addClass("accordion");
                    d("ul.submenu, ul.submenu > li, li > ul.submenu", B).attr("style", "");
                    d("li.mega", B).removeClass("mega");
                    a.MenuStyle = "Accordion"; var t = B.closest("#MenuV");
                    var s = t.parent();
                    t.appendTo(s);
                    eventOpenAccordionMenu(this)
                }
                d(window).resize(function () {
                    if (e().width <= 991) {
                        d("li", B).unbind();
                        d("ul.submenu", B).css("position", "");
                        B.closest("#MenuV").removeClass().addClass("accordion");
                        d("ul.submenu, ul.submenu > li, li > ul.submenu", B).removeAttr("style");
                        d("li.mega", B).removeClass("mega");
                        a.MenuStyle = "Accordion"; var h = B.closest("#MenuV");
                        var g = h.parent();
                        h.appendTo(g);
                        eventOpenAccordionMenu(B)
                    }
                    else {
                        var h = B.closest("#MenuV");
                        var g = h.parent();
                        h.prependTo(g);
                        d("ul.submenu, li", B).unbind();
                        B.closest("#MenuV").removeClass();
                        switch (r) {
                            case "accordion": a.MenuStyle = "Accordion"; B.closest("#MenuV").addClass("accordion");
                                eventOpenAccordionMenu(B);
                                break; case "defaultmenu": a.MenuStyle = "DefaultMenu"; d("ul.submenu", B).css("position", "absolute");
                                    d("ul.submenu", B).each(function () { d(this).css("min-width", "180px") });
                                    eventOpenDefaultMenu(B, this, a, y);
                                    break; case "megamenu": a.MenuStyle = "MegaMenu"; B.closest("#MenuV").addClass("megamenu");
                                        B.children("li").children("ul").each(function () {
                                            if (d(this).children("li").children("ul").is(".submenu")) { d(this).parent().addClass("mega") }
                                            if (d(this).children().hasClass("megamenu-row")) { d(this).parent().addClass("mega") }
                                        });
                                        B.children("li:not(.mega)").each(function () { d(this).children(".submenu").css("min-width", "180px") });
                                        d("li.mega > ul.submenu", B).css("display", "none");
                                        eventOpenMegaMenu(B, B, a, y);
                                        break
                        }
                    }
                })
            }
            if (A && a.Orientation.toLowerCase() == "horizontal") {
                var w = A.toLowerCase();
                var v = z.match(/^[0-9]*$/) ? z : 768; var B = d(this);
                var u = false; mobileMenu_MediaQuery = function () {
                    d("head").append('<link id="styles-mobile" rel="stylesheet" href="' + style_mobile_path + "/mobile-" + w + '.css" type="text/css" />');
                    d('link[id="styles-mobile-megamenu"]').remove();
                    if (a.MenuStyle.toLowerCase() == "megamenu" && a.Orientation.toLowerCase() == "horizontal") {
                        B.children("li.mega").removeClass("mega");
                        B.closest("#MenuH").removeClass("megamenu");
                        d(".menu > li, .submenu, .submenu > li, .megamenu-row > li", B).removeAttr("style");
                        d(".submenu", B).css("display", "none")
                    }
                };
                if (e().width < v) {
                    mobileMenu_MediaQuery();
                    d("li", B).unbind();
                    showMobileMenu(w, B, a, this, y);
                    u = true
                }
                d(window).resize(function () {
                    if (e().width >= v) {
                        if (u == true) {
                            d('#MenuH em.sf-sub-indicator, link[id="styles-mobile"]').remove();
                            B.closest("#MenuH").children("select, select + span").css("display", "none");
                            d("li", B).children("ul.submenu").css("display", "none");
                            if (a.Orientation.toLowerCase() == "horizontal") {
                                if (a.MenuStyle.toLowerCase() == "defaultmenu") {
                                    d("li", B).children("ul.submenu").css({ display: "none", "min-width": "180px", position: "absolute" });
                                    eventOpenDefaultMenu(B, B, a, y)
                                }
                                else {
                                    B.closest("#MenuH").addClass("megamenu");
                                    B.children("li").children("ul").each(function () {
                                        if (d(this).children("li").children("ul").is(".submenu")) { d(this).parent().addClass("mega") }
                                        if (d(this).children().hasClass("megamenu-row")) { d(this).parent().addClass("mega") }
                                    });
                                    B.children("li:not(.mega)").each(function () { d(this).children(".submenu").css("min-width", "180px") });
                                    d("li").children("ul.submenu").css({ display: "none" });
                                    d("head").append('<link id="styles-mobile-megamenu" rel="stylesheet" href="' + style_mobile_path + '/mobile-megamenu.css" type="text/css" />');
                                    eventOpenMegaMenu(B, B, a, y)
                                }
                            }
                            u = false
                        }
                    }
                    else {
                        if (u == false) {
                            mobileMenu_MediaQuery();
                            B.closest("#MenuH").children("select, select + span").css("display", "");
                            d("li", B).unbind();
                            showMobileMenu(w, B, a, this, y);
                            u = true
                        }
                    }
                })
            }
        }
    })(jQuery)
})();
(function () {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var b = document.createElement("style");
        b.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.getElementsByTagName("head")[0].appendChild(b)
    }
})();
(function () {
    !function (b) {
        b(document).ready(function () {
            b("*[data-toggle=tooltip]").tooltip();
            b("*[data-toggle=popover]").popover({ trigger: "hover" });
            if (typeof g_disableCheckoutInEditMode != "undefined" && !g_disableCheckoutInEditMode) { b(".MoveToSliderZone").appendTo("#bt-slider") }
            if (typeof g_disableCheckoutInEditMode != "undefined" && !g_disableCheckoutInEditMode) { b(".MoveToTitleZone").appendTo("#bt-pagetitle") }
        })
    }(window.jQuery)
})();
