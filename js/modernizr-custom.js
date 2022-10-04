/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-prefixes-setclasses-shiv !*/
!(function (e, n, t) {
  function a(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, r, c, l;
    for (var f in s)
      if (s.hasOwnProperty(f)) {
        if (((e = []), (n = s[f]), n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (o = a(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++)
          (c = e[r]),
            (l = c.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            i.push((o ? "" : "no-") + l.join("-"));
      }
  }
  function r(e) {
    var n = f.className,
      t = Modernizr._config.classPrefix || "";
    if ((u && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var a = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(a, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses && ((n += " " + t + e.join(" " + t)), u ? (f.className.baseVal = n) : (f.className = n));
  }
  var i = [],
    s = [],
    c = {
      _version: "3.6.0",
      _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        s.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        s.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = c), (Modernizr = new Modernizr());
  var l = c._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  c._prefixes = l;
  var f = n.documentElement,
    u = "svg" === f.nodeName.toLowerCase();
  u ||
    !(function (e, n) {
      function t(e, n) {
        var t = e.createElement("p"),
          a = e.getElementsByTagName("head")[0] || e.documentElement;
        return (t.innerHTML = "x<style>" + n + "</style>"), a.insertBefore(t.lastChild, a.firstChild);
      }
      function a() {
        var e = E.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, n) {
        var t = E.elements;
        "string" != typeof t && (t = t.join(" ")), "string" != typeof e && (e = e.join(" ")), (E.elements = t + " " + e), l(n);
      }
      function r(e) {
        var n = y[e[g]];
        return n || ((n = {}), v++, (e[g] = v), (y[v] = n)), n;
      }
      function i(e, t, a) {
        if ((t || (t = n), u)) return t.createElement(e);
        a || (a = r(t));
        var o;
        return (
          (o = a.cache[e] ? a.cache[e].cloneNode() : p.test(e) ? (a.cache[e] = a.createElem(e)).cloneNode() : a.createElem(e)),
          !o.canHaveChildren || h.test(e) || o.tagUrn ? o : a.frag.appendChild(o)
        );
      }
      function s(e, t) {
        if ((e || (e = n), u)) return e.createDocumentFragment();
        t = t || r(e);
        for (var o = t.frag.cloneNode(), i = 0, s = a(), c = s.length; c > i; i++) o.createElement(s[i]);
        return o;
      }
      function c(e, n) {
        n.cache || ((n.cache = {}), (n.createElem = e.createElement), (n.createFrag = e.createDocumentFragment), (n.frag = n.createFrag())),
          (e.createElement = function (t) {
            return E.shivMethods ? i(t, e, n) : n.createElem(t);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              a()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")';
                }) +
              ");return n}"
          )(E, n.frag));
      }
      function l(e) {
        e || (e = n);
        var a = r(e);
        return (
          !E.shivCSS ||
            f ||
            a.hasCSS ||
            (a.hasCSS = !!t(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          u || c(e, a),
          e
        );
      }
      var f,
        u,
        m = "3.7.3",
        d = e.html5 || {},
        h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        y = {};
      !(function () {
        try {
          var e = n.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (f = "hidden" in e),
            (u =
              1 == e.childNodes.length ||
              (function () {
                n.createElement("a");
                var e = n.createDocumentFragment();
                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
              })());
        } catch (t) {
          (f = !0), (u = !0);
        }
      })();
      var E = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: m,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: u,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: l,
        createElement: i,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = E), l(n), "object" == typeof module && module.exports && (module.exports = E);
    })("undefined" != typeof e ? e : this, n),
    o(),
    r(i),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var m = 0; m < Modernizr._q.length; m++) Modernizr._q[m]();
  e.Modernizr = Modernizr;
})(window, document);
