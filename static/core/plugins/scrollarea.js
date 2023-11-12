/*
	krpano 1.20.11 ScrollArea Plugin (build 2022-03-07)
	https://krpano.com/plugins/scrollarea/
*/
var krpanoplugin = function () {
  function J(a) {
    return "boolean" == typeof a
      ? a
      : 0 <= "yesontrue1".indexOf(String(a).toLowerCase());
  }
  function ba(a) {
    if (a && n && ca) {
      var f = n.timertick,
        d = 0;
      0 == R && (R = f);
      var b = (f - R) | 0;
      R = f;
      "wheel" == a.type
        ? (d = a.deltaY)
        : "mousewheel" == a.type
        ? (d = -a.wheelDelta)
        : "DOMMouseScroll" == a.type && (d = a.detail);
      1 == g && a.webkitDirectionInvertedFromDevice && (d = -d);
      d = -d;
      500 < b
        ? (S = 1 == a.deltaMode || 0 == d % 20 ? 0 : 1)
        : 66 > b && 0 == S && 0 != d % 40 && 6 < Math.abs(d) && (S = 1);
      a.preventDefault();
      a.stopPropagation();
      0 != d &&
        (0 == S
          ? (d = 0 > d ? -5 : 5)
          : ((d /= 20), -10 > d ? (d = -10) : 10 < d && (d = 10)),
        1 == g ? T(d * A, 0) : 2 == g ? T(0, d * y) : 3 == g && T(0, d * y));
    }
  }
  function p(a, f, b, k, e) {
    var c = null;
    e = (!0 === e ? "remove" : "add") + "EventListener";
    var h = U.browser.events;
    if (
      h.touch &&
      ("down" == f
        ? (c = h.touchstart)
        : "move" == f
        ? (c = h.touchmove)
        : "up" == f && (c = h.touchend),
      U.ie &&
        0 == h.mouse &&
        ("over" == f
          ? (c = h.pointerover ? h.pointerover : "MSPointerOver")
          : "out" == f && (c = h.pointerout ? h.pointerout : "MSPointerOut")),
      c)
    )
      a[e](c, b, k);
    if (
      h.mouse &&
      ("down" == f
        ? (c = "mousedown")
        : "move" == f
        ? (c = "mousemove")
        : "up" == f
        ? (c = "mouseup")
        : "over" == f
        ? (c = "mouseover")
        : "out" == f && (c = "mouseout"),
      c)
    )
      a[e](c, b, k);
  }
  function da() {
    if (b) {
      var a = b.sprite.parentNode;
      a &&
        (a = a.kobject) &&
        ((a.maskchildren = b.parentmaskchildren),
        a.poschanged && a.updatepluginpos(),
        b.poschanged && b.updatepluginpos(),
        (ea = a),
        (t = a.pixelwidth),
        (u = a.pixelheight),
        isNaN(t) && (t = 0),
        isNaN(u) && (u = 0),
        (D = 0 < t || 0 < u));
    }
  }
  function F() {
    e = Number(b.x);
    c = Number(b.y);
    isNaN(fa) && (e = 0);
    isNaN(ga) && (c = 0);
  }
  function G(a) {
    if (
      b &&
      ((a = void 0 === a ? !1 : a),
      1 == (g & 1) ? b.x != e && ((b.x = e), (a = !0)) : (e = 0),
      2 == (g & 2) ? b.y != c && ((b.y = c), (a = !0)) : (c = 0),
      !D || (V[0] == v && V[1] == w) || ((V[0] = v), (V[1] = w), (a = !0)),
      a && b && D)
    ) {
      a = t - v;
      var f = u - w,
        d = e,
        k = c;
      isNaN(d) && (d = 0);
      isNaN(k) && (k = 0);
      d += a * q;
      k += f * r;
      b.woverflow = -a;
      b.hoverflow = -f;
      b.loverflow = Math.round((-d + H * a) * A);
      b.roverflow = Math.round((+d - (1 - H) * a) * A);
      b.toverflow = Math.round((-k + I * f) * y);
      b.boverflow = Math.round((+k - (1 - I) * f) * y);
      b.onscroll && b.triggerevent("onscroll");
    }
  }
  function la(a) {
    for (; 0 < z.length && !(100 >= a - z[0].time); ) z.shift();
  }
  function K() {
    if (b) {
      da();
      var a = ("" + b.align).toLowerCase();
      if ("" == a || "null" == a) a = "lefttop";
      y = A = 1;
      r = q = 0.5;
      I = H = 0;
      0 <= a.indexOf("left") && ((q = H = 0), (A = 1));
      0 <= a.indexOf("top") && ((r = I = 0), (y = 1));
      0 <= a.indexOf("right") && ((H = 1), (q = 0), (A = -1));
      0 <= a.indexOf("bottom") && ((I = 1), (r = 0), (y = -1));
    }
  }
  function W(a) {
    K();
    z = [];
    if (0 == L) x = !1;
    else {
      p(window, "up", ha, !0);
      p(window, "move", ia, !0);
      var f = n.stagescale,
        b =
          a.changedTouches && 0 < a.changedTouches.length
            ? a.changedTouches[0]
            : a;
      a = b.pageX / f;
      f = b.pageY / f;
      x = !1;
      X = a;
      Y = f;
      return !1;
    }
  }
  function ma(a) {
    (void 0 === a.pointerType ||
      4 == a.pointerType ||
      "mouse" == a.pointerType) &&
      ja &&
      (K(), 0 != D && ((a = u - w), 0 > t - v || 0 > a)) &&
      ((M = !0), p(b.sprite, "move", na, !0), p(b.sprite, "out", oa, !0));
  }
  function na(a) {
    M &&
      0 == x &&
      ea &&
      ((a = ea.getmouse()),
      Z((a.x / t) * b.pixelwidth, (a.y / u) * b.pixelheight, !0));
  }
  function oa(a) {
    p(b.sprite, "move", na, !0, !0);
    p(b.sprite, "out", oa, !0, !0);
    M = !1;
  }
  function ia(a) {
    if (0 == L) return (x = !1);
    var f = n.stagescale,
      b =
        a.changedTouches && 0 < a.changedTouches.length
          ? a.changedTouches[0]
          : a;
    a = b.pageX / f;
    f = b.pageY / f;
    0 == x &&
      ((g & 1 && 5 < Math.abs(a - X)) || (g & 2 && 5 < Math.abs(f - Y))) &&
      (B && ((l = m = 0), (B = !1)),
      null != h && (clearInterval(h), (h = null)),
      (x = !0),
      (M = !1),
      (X = a),
      (Y = f),
      F(),
      (fa = e),
      (ga = c));
    x &&
      ((b = n.timertick),
      la(b),
      z.push({ time: b, x: a, y: f }),
      (e = fa + (a - X) * A),
      (c = ga + (f - Y) * y),
      (a = -(v - t)),
      (f = -(w - u)),
      (e += a * q),
      (c += f * r),
      (b = 1 / (1 + E * E)),
      (e =
        0 < a ? e - (e - a * q) * b : e - (0 < e ? e : e < a ? e - a : 0) * b),
      (c =
        0 < f ? c - (c - f * r) * b : c - (0 < c ? c : c < f ? c - f : 0) * b),
      (e -= a * q),
      (c -= f * r),
      G());
    return !1;
  }
  function ha(a) {
    p(window, "up", ha, !0, !0);
    p(window, "move", ia, !0, !0);
    if (0 == L) (l = m = 0), (x = !1);
    else if (x) {
      la(n.timertick);
      if (1 < z.length) {
        a = z[0];
        var f = z[z.length - 1],
          b = f.y - a.y,
          c = (f.time - a.time) * aa;
        m = ((f.x - a.x) / c) * A * E;
        l = (b / c) * y * E;
      } else l = m = 0;
      h = setInterval(N, 1e3 / 60);
      x = !1;
    }
  }
  function ra() {
    setTimeout(function () {
      da();
      G(!0);
      null == h && (h = setInterval(N, 1e3 / 60));
    }, 100);
  }
  function sa() {
    b && (da(), F(), G(!0));
  }
  function N() {
    e += m;
    c += l;
    m *= O;
    l *= O;
    var a = 0,
      b = 0,
      d = -(v - t),
      k = -(w - u);
    e += d * q;
    c += k * r;
    0 < d
      ? (a = e - d * q)
      : B
      ? (a = e - pa)
      : e < d
      ? (a = e - d)
      : 0 < e && (a = e);
    0.1 > a * a && (a = 0);
    0 < k
      ? (b = c - k * r)
      : B
      ? (b = c - qa)
      : c < k
      ? (b = c - k)
      : 0 < c && (b = c);
    0.1 > b * b && (b = 0);
    e -= d * q;
    c -= k * r;
    0 == (g & 1) && (m = a = 0);
    0 == (g & 2) && (l = b = 0);
    0 != a && ((a *= -1), (m = 0 >= a * m ? m + a * P : a * Q));
    0 != b && ((b *= -1), (l = 0 >= b * l ? l + b * P : b * Q));
    0 == a &&
      0 == b &&
      0.05 > Math.sqrt(m * m + l * l) &&
      ((B = !1), (l = m = 0), clearInterval(h), (h = null));
    G();
  }
  function Z(a, b, d) {
    K();
    F();
    if (0 == D)
      setTimeout(function () {
        Z(a, b, d);
      }, 10);
    else {
      a = Number(a);
      isNaN(a) && (a = 0);
      b = Number(b);
      isNaN(b) && (b = 0);
      var k = t - v,
        g = u - w;
      a = H * v + a * A;
      b = I * w + b * y;
      a *= -1;
      b *= -1;
      a += t / 2;
      0 < a && (a = 0);
      a < k && (a = k);
      b += u / 2;
      0 < b && (b = 0);
      b < g && (b = g);
      !0 === d
        ? ((B = !0),
          (pa = a),
          (qa = b),
          null == h && (h = setInterval(N, 1e3 / 60)))
        : (h && (clearInterval(h), (h = null)),
          (k = -(v - t)),
          (g = -(w - u)),
          (a = 0 > k ? a - k * q : 0),
          (b = 0 > g ? b - g * r : 0),
          (e = a),
          (c = b),
          G());
    }
  }
  function ta(a, b) {
    Z(a, b, !0);
  }
  function ua() {
    x && (p(window, "up", ha, !0, !0), p(window, "move", ia, !0, !0));
    null != h && (clearInterval(h), (h = null));
    M = x = !1;
    z = [];
    l = m = 0;
    B = !1;
    F();
  }
  function T(a, b) {
    B = !1;
    a = Number(a);
    isNaN(a) && (a = 0);
    b = Number(b);
    isNaN(b) && (b = 0);
    K();
    F();
    if (0 != D) {
      var d = t - v,
        k = u - w,
        g = !1;
      0 > d &&
        ((e += d * q),
        0 < a && 0 > e
          ? ((g = !0), (m += a))
          : 0 > a && e > d && ((g = !0), (m += a)),
        (e -= d * q));
      0 > k &&
        ((c += k * r),
        0 < b && 0 > c
          ? ((g = !0), (l += b))
          : 0 > b && c > k && ((g = !0), (l += b)),
        (c -= k * r));
      g && null == h && (h = setInterval(N, 1e3 / 60));
    }
  }
  var n = null,
    b = null,
    U = null,
    g = 3,
    v = 0,
    w = 0,
    V = [0, 0],
    D = !1,
    ea = null,
    t = 0,
    u = 0,
    B = !1,
    pa = 0,
    qa = 0,
    A = 1,
    y = 1,
    q = 0,
    r = 0,
    H = 0,
    I = 0,
    E = 1,
    O = 0.95,
    P = 0.08,
    Q = 0.15,
    aa = 1 / 15,
    L = !0,
    ca = !0,
    x = !1,
    X = 0,
    Y = 0,
    e = 0,
    c = 0,
    fa = 0,
    ga = 0,
    h = null,
    z = [],
    m = 0,
    l = 0,
    C = !0,
    ka = !0,
    M = !1,
    ja = !1;
  this.registerplugin = function (a, c, d) {
    n = a;
    b = d;
    "1.20" > n.version || "2019-09-01" > n.build
      ? (n.trace(
          3,
          "Scrollarea Plugin - too old krpano version (min. version 1.20)"
        ),
        (b = n = null))
      : ((U = n.device),
        b.registerattribute(
          "direction",
          "all",
          function (a) {
            a = String(a).toLowerCase();
            g = 0;
            g |= 1 * (0 <= a.indexOf("h"));
            g |= 2 * (0 <= a.indexOf("v"));
            g |= 3 * (0 <= a.indexOf("all"));
          },
          function () {
            return 3 == (g & 3) ? "all" : 1 == (g & 1) ? "h" : "v";
          }
        ),
        b.registerattribute(
          "overscroll",
          E,
          function (a) {
            E = 0 > a ? 0 : 1 < a ? 1 : a;
          },
          function () {
            return E;
          }
        ),
        b.registerattribute(
          "friction",
          O,
          function (a) {
            O = Number(a);
          },
          function () {
            return O;
          }
        ),
        b.registerattribute(
          "acceleration",
          P,
          function (a) {
            P = Number(a);
          },
          function () {
            return P;
          }
        ),
        b.registerattribute(
          "returnacceleration",
          Q,
          function (a) {
            Q = Number(a);
          },
          function () {
            return Q;
          }
        ),
        b.registerattribute(
          "momentum",
          aa,
          function (a) {
            aa = Number(a);
          },
          function () {
            return aa;
          }
        ),
        b.registerattribute("parentmaskchildren", !0),
        b.registerattribute("onscroll", null),
        b.registerattribute("woverflow", 0),
        b.registerattribute("hoverflow", 0),
        b.registerattribute("loverflow", 0),
        b.registerattribute("roverflow", 0),
        b.registerattribute("toverflow", 0),
        b.registerattribute("boverflow", 0),
        b.registerattribute(
          "draggable",
          !0,
          function (a) {
            L = J(a);
          },
          function () {
            return L;
          }
        ),
        b.registerattribute(
          "mwheel",
          !0,
          function (a) {
            ca = J(a);
          },
          function () {
            return ca;
          }
        ),
        b.registerattribute(
          "onhover_autoscrolling",
          !1,
          function (a) {
            ja = J(a);
          },
          function () {
            return ja;
          }
        ),
        b.registerattribute(
          "capturechildren",
          C,
          function (a) {
            C = J(a);
            ka != C &&
              (p(b.sprite, "down", W, ka, !0),
              p(b.sprite, "down", W, C),
              (ka = C));
          },
          function () {
            return C;
          }
        ),
        b.registerattribute("csshardwareacceleration", "auto"),
        (b.setcenter = Z),
        (b.scrolltocenter = ta),
        (b.stopscrolling = ua),
        (b.scrollby = T),
        (b.update = sa),
        1 == J(b.csshardwareacceleration) &&
          (b.sprite.style[U.browser.css.transform + "Style"] = "preserve-3d"),
        b.sprite.addEventListener("DOMMouseScroll", ba, !0),
        b.sprite.addEventListener("mousewheel", ba, !0),
        b.sprite.addEventListener("wheel", ba, !0),
        p(b.sprite, "down", W, C),
        p(b.sprite, "over", ma, !0),
        n.set("events[" + b.name + "_scrollarea].keep", !0),
        n.set("events[" + b.name + "_scrollarea].onresize", ra));
  };
  var R = 0,
    S = 0;
  this.onresize = function (a, b) {
    if (!n) return !1;
    v = a;
    w = b;
    var d;
    B = !1;
    K();
    F();
    if (0 == D) d = !1;
    else {
      d = t - v;
      var k = u - w,
        g = !1;
      e += d * q;
      if (0 > d) {
        if (0 > e || e > d) g = !0;
      } else 0 != e && (g = !0);
      e -= d * q;
      c += k * r;
      if (0 > k) {
        if (0 > c || c > k) g = !0;
      } else 0 != c && (g = !0);
      c -= k * r;
      g && null == h && (h = setInterval(N, 1e3 / 60));
      d = g;
    }
    0 == d && G(!0);
    return !1;
  };
  this.unloadplugin = function () {
    n &&
      b &&
      (n.set("events[" + b.name + "_scrollarea].name", null),
      null != h && (clearInterval(h), (h = null)),
      p(b.sprite, "down", W, C, !0),
      p(b.sprite, "over", ma, !0, !0));
    n = b = null;
  };
};
