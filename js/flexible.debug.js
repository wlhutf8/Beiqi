! function(e, t) {
    var i, a = e.document,
        r = a.documentElement,
        n = a.querySelector('meta[name="viewport"]'),
        o = a.querySelector('meta[name="flexible"]'),
        l = 0,
        m = 0,
        s = t.flexible || (t.flexible = {});
    if(n) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var d = n.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        d && (m = parseFloat(d[1]), l = parseInt(1 / m))
    } else if(o) {
        var p = o.getAttribute("content");
        if(p) {
            var c = p.match(/initial\-dpr=([\d\.]+)/),
                u = p.match(/maximum\-dpr=([\d\.]+)/);
            c && (l = parseFloat(c[1]), m = parseFloat((1 / l).toFixed(2))), u && (l = parseFloat(u[1]), m = parseFloat((1 / l).toFixed(2)))
        }
    }
    if(!l && !m) {
        e.navigator.appVersion.match(/android/gi);
        var f = e.navigator.appVersion.match(/iphone/gi),
            v = e.devicePixelRatio;
        m = 1 / (l = f ? v >= 3 && (!l || l >= 3) ? 3 : v >= 2 && (!l || l >= 2) ? 2 : 1 : 1)
    }
    if(r.setAttribute("data-dpr", l), !n)
        if((n = a.createElement("meta")).setAttribute("name", "viewport"), n.setAttribute("content", "initial-scale=" + m + ", maximum-scale=" + m + ", minimum-scale=" + m + ", user-scalable=no"), r.firstElementChild) r.firstElementChild.appendChild(n);
        else {
            var h = a.createElement("div");
            h.appendChild(n), a.write(h.innerHTML)
        }
    function x() {
        var t = r.getBoundingClientRect().width;
        t / l > 540 && (t = 540 * l);
        var i = t / 10;
        r.style.fontSize = i + "px", s.rem = e.rem = i
    }
    e.addEventListener("resize", function() {
        clearTimeout(i), i = setTimeout(x, 300)
    }, !1), e.addEventListener("pageshow", function(e) {
        e.persisted && (clearTimeout(i), i = setTimeout(x, 300))
    }, !1), x(), s.dpr = e.dpr = l, s.refreshRem = x, s.rem2px = function(e) {
        var t = parseFloat(e) * this.rem;
        return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
    }, s.px2rem = function(e) {
        var t = parseFloat(e) / this.rem;
        return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
    }
}(window, window.lib || (window.lib = {}));
