import { R as k, r as be } from "./index-07f5077d.js";
const Sa = "assets/logo-2112ce49.png";
function g() {
  return (
    (g = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var e in n)
              Object.prototype.hasOwnProperty.call(n, e) && (r[e] = n[e]);
          }
          return r;
        }),
    g.apply(this, arguments)
  );
}
function G(r) {
  return (
    (G =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    G(r)
  );
}
function Se(r) {
  return r && G(r) === "object" && r.constructor === Object;
}
function U(r, t) {
  var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { clone: !0 },
    e = n.clone ? g({}, r) : r;
  return (
    Se(r) &&
      Se(t) &&
      Object.keys(t).forEach(function (i) {
        i !== "__proto__" &&
          (Se(t[i]) && i in r ? (e[i] = U(r[i], t[i], n)) : (e[i] = t[i]));
      }),
    e
  );
}
function cr(r, t) {
  if (G(r) !== "object" || r === null) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var e = n.call(r, t || "default");
    if (G(e) !== "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function zt(r) {
  var t = cr(r, "string");
  return G(t) === "symbol" ? t : String(t);
}
function xe(r, t, n) {
  return (
    (t = zt(t)),
    t in r
      ? Object.defineProperty(r, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[t] = n),
    r
  );
}
function re(r) {
  for (
    var t = "https://mui.com/production-error/?code=" + r, n = 1;
    n < arguments.length;
    n += 1
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified Material-UI error #" +
    r +
    "; visit " +
    t +
    " for the full message."
  );
}
function ut(r) {
  if (typeof r != "string") throw new Error(re(7));
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Wt(r, t) {
  if (r == null) return {};
  var n = {},
    e = Object.keys(r),
    i,
    a;
  for (a = 0; a < e.length; a++)
    (i = e[a]), !(t.indexOf(i) >= 0) && (n[i] = r[i]);
  return n;
}
function T(r, t) {
  if (r == null) return {};
  var n = Wt(r, t),
    e,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (i = 0; i < a.length; i++)
      (e = a[i]),
        !(t.indexOf(e) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, e) &&
          (n[e] = r[e]);
  }
  return n;
}
function Vt(r) {
  var t,
    n,
    e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (t = 0; t < r.length; t++)
        r[t] && (n = Vt(r[t])) && (e && (e += " "), (e += n));
    else for (t in r) r[t] && (e && (e += " "), (e += t));
  return e;
}
function dr() {
  for (var r, t, n = 0, e = ""; n < arguments.length; )
    (r = arguments[n++]) && (t = Vt(r)) && (e && (e += " "), (e += t));
  return e;
}
var hr = typeof Symbol == "function" && Symbol.for;
const pr = hr ? Symbol.for("mui.nested") : "__THEME_NESTED__";
var gr = [
  "checked",
  "disabled",
  "error",
  "focused",
  "focusVisible",
  "required",
  "expanded",
  "selected",
];
function vr() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = r.disableGlobal,
    n = t === void 0 ? !1 : t,
    e = r.productionPrefix,
    i = e === void 0 ? "jss" : e,
    a = r.seed,
    s = a === void 0 ? "" : a,
    o = s === "" ? "" : "".concat(s, "-"),
    f = 0,
    l = function () {
      return (f += 1), f;
    };
  return function (c, d) {
    var p = d.options.name;
    if (p && p.indexOf("Mui") === 0 && !d.options.link && !n) {
      if (gr.indexOf(c.key) !== -1) return "Mui-".concat(c.key);
      var h = "".concat(o).concat(p, "-").concat(c.key);
      return !d.options.theme[pr] || s !== ""
        ? h
        : "".concat(h, "-").concat(l());
    }
    return "".concat(o).concat(i).concat(l());
  };
}
function mr(r) {
  var t = r.theme,
    n = r.name,
    e = r.props;
  if (!t || !t.props || !t.props[n]) return e;
  var i = t.props[n],
    a;
  for (a in i) e[a] === void 0 && (e[a] = i[a]);
  return e;
}
var ft =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (r) {
          return typeof r;
        }
      : function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        },
  X =
    (typeof window > "u" ? "undefined" : ft(window)) === "object" &&
    (typeof document > "u" ? "undefined" : ft(document)) === "object" &&
    document.nodeType === 9;
function lt(r, t) {
  for (var n = 0; n < t.length; n++) {
    var e = t[n];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(r, zt(e.key), e);
  }
}
function Ft(r, t, n) {
  return (
    t && lt(r.prototype, t),
    n && lt(r, n),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    r
  );
}
function Ve(r, t) {
  return (
    (Ve = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, i) {
          return (e.__proto__ = i), e;
        }),
    Ve(r, t)
  );
}
function Lt(r, t) {
  (r.prototype = Object.create(t.prototype)),
    (r.prototype.constructor = r),
    Ve(r, t);
}
function ct(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
var yr = {}.constructor;
function Fe(r) {
  if (r == null || typeof r != "object") return r;
  if (Array.isArray(r)) return r.map(Fe);
  if (r.constructor !== yr) return r;
  var t = {};
  for (var n in r) t[n] = Fe(r[n]);
  return t;
}
function Ze(r, t, n) {
  r === void 0 && (r = "unnamed");
  var e = n.jss,
    i = Fe(t),
    a = e.plugins.onCreateRule(r, i, n);
  return a || (r[0], null);
}
var dt = function (t, n) {
    for (var e = "", i = 0; i < t.length && t[i] !== "!important"; i++)
      e && (e += n), (e += t[i]);
    return e;
  },
  z = function (t) {
    if (!Array.isArray(t)) return t;
    var n = "";
    if (Array.isArray(t[0]))
      for (var e = 0; e < t.length && t[e] !== "!important"; e++)
        n && (n += ", "), (n += dt(t[e], " "));
    else n = dt(t, ", ");
    return t[t.length - 1] === "!important" && (n += " !important"), n;
  };
function B(r) {
  return r && r.format === !1
    ? { linebreak: "", space: "" }
    : {
        linebreak: `
`,
        space: " ",
      };
}
function q(r, t) {
  for (var n = "", e = 0; e < t; e++) n += "  ";
  return n + r;
}
function Q(r, t, n) {
  n === void 0 && (n = {});
  var e = "";
  if (!t) return e;
  var i = n,
    a = i.indent,
    s = a === void 0 ? 0 : a,
    o = t.fallbacks;
  n.format === !1 && (s = -1 / 0);
  var f = B(n),
    l = f.linebreak,
    c = f.space;
  if ((r && s++, o))
    if (Array.isArray(o))
      for (var d = 0; d < o.length; d++) {
        var p = o[d];
        for (var h in p) {
          var m = p[h];
          m != null && (e && (e += l), (e += q(h + ":" + c + z(m) + ";", s)));
        }
      }
    else
      for (var y in o) {
        var S = o[y];
        S != null && (e && (e += l), (e += q(y + ":" + c + z(S) + ";", s)));
      }
  for (var C in t) {
    var w = t[C];
    w != null &&
      C !== "fallbacks" &&
      (e && (e += l), (e += q(C + ":" + c + z(w) + ";", s)));
  }
  return (!e && !n.allowEmpty) || !r
    ? e
    : (s--, e && (e = "" + l + e + l), q("" + r + c + "{" + e, s) + q("}", s));
}
var br = /([[\].#*$><+~=|^:(),"'`\s])/g,
  ht = typeof CSS < "u" && CSS.escape,
  Qe = function (r) {
    return ht ? ht(r) : r.replace(br, "\\$1");
  },
  Gt = (function () {
    function r(n, e, i) {
      (this.type = "style"), (this.isProcessed = !1);
      var a = i.sheet,
        s = i.Renderer;
      (this.key = n),
        (this.options = i),
        (this.style = e),
        a ? (this.renderer = a.renderer) : s && (this.renderer = new s());
    }
    var t = r.prototype;
    return (
      (t.prop = function (e, i, a) {
        if (i === void 0) return this.style[e];
        var s = a ? a.force : !1;
        if (!s && this.style[e] === i) return this;
        var o = i;
        (!a || a.process !== !1) &&
          (o = this.options.jss.plugins.onChangeValue(i, e, this));
        var f = o == null || o === !1,
          l = e in this.style;
        if (f && !l && !s) return this;
        var c = f && l;
        if (
          (c ? delete this.style[e] : (this.style[e] = o),
          this.renderable && this.renderer)
        )
          return (
            c
              ? this.renderer.removeProperty(this.renderable, e)
              : this.renderer.setProperty(this.renderable, e, o),
            this
          );
        var d = this.options.sheet;
        return d && d.attached, this;
      }),
      r
    );
  })(),
  Le = (function (r) {
    Lt(t, r);
    function t(e, i, a) {
      var s;
      s = r.call(this, e, i, a) || this;
      var o = a.selector,
        f = a.scoped,
        l = a.sheet,
        c = a.generateId;
      return (
        o
          ? (s.selectorText = o)
          : f !== !1 &&
            ((s.id = c(ct(ct(s)), l)), (s.selectorText = "." + Qe(s.id))),
        s
      );
    }
    var n = t.prototype;
    return (
      (n.applyTo = function (i) {
        var a = this.renderer;
        if (a) {
          var s = this.toJSON();
          for (var o in s) a.setProperty(i, o, s[o]);
        }
        return this;
      }),
      (n.toJSON = function () {
        var i = {};
        for (var a in this.style) {
          var s = this.style[a];
          typeof s != "object" ? (i[a] = s) : Array.isArray(s) && (i[a] = z(s));
        }
        return i;
      }),
      (n.toString = function (i) {
        var a = this.options.sheet,
          s = a ? a.options.link : !1,
          o = s ? g({}, i, { allowEmpty: !0 }) : i;
        return Q(this.selectorText, this.style, o);
      }),
      Ft(t, [
        {
          key: "selector",
          set: function (i) {
            if (i !== this.selectorText) {
              this.selectorText = i;
              var a = this.renderer,
                s = this.renderable;
              if (!(!s || !a)) {
                var o = a.setSelector(s, i);
                o || a.replaceRule(s, this);
              }
            }
          },
          get: function () {
            return this.selectorText;
          },
        },
      ]),
      t
    );
  })(Gt),
  Sr = {
    onCreateRule: function (t, n, e) {
      return t[0] === "@" || (e.parent && e.parent.type === "keyframes")
        ? null
        : new Le(t, n, e);
    },
  },
  Re = { indent: 1, children: !0 },
  xr = /@([\w-]+)/,
  Rr = (function () {
    function r(n, e, i) {
      (this.type = "conditional"), (this.isProcessed = !1), (this.key = n);
      var a = n.match(xr);
      (this.at = a ? a[1] : "unknown"),
        (this.query = i.name || "@" + this.at),
        (this.options = i),
        (this.rules = new ae(g({}, i, { parent: this })));
      for (var s in e) this.rules.add(s, e[s]);
      this.rules.process();
    }
    var t = r.prototype;
    return (
      (t.getRule = function (e) {
        return this.rules.get(e);
      }),
      (t.indexOf = function (e) {
        return this.rules.indexOf(e);
      }),
      (t.addRule = function (e, i, a) {
        var s = this.rules.add(e, i, a);
        return s ? (this.options.jss.plugins.onProcessRule(s), s) : null;
      }),
      (t.replaceRule = function (e, i, a) {
        var s = this.rules.replace(e, i, a);
        return s && this.options.jss.plugins.onProcessRule(s), s;
      }),
      (t.toString = function (e) {
        e === void 0 && (e = Re);
        var i = B(e),
          a = i.linebreak;
        if (
          (e.indent == null && (e.indent = Re.indent),
          e.children == null && (e.children = Re.children),
          e.children === !1)
        )
          return this.query + " {}";
        var s = this.rules.toString(e);
        return s ? this.query + " {" + a + s + a + "}" : "";
      }),
      r
    );
  })(),
  wr = /@container|@media|@supports\s+/,
  Pr = {
    onCreateRule: function (t, n, e) {
      return wr.test(t) ? new Rr(t, n, e) : null;
    },
  },
  we = { indent: 1, children: !0 },
  Cr = /@keyframes\s+([\w-]+)/,
  Ge = (function () {
    function r(n, e, i) {
      (this.type = "keyframes"),
        (this.at = "@keyframes"),
        (this.isProcessed = !1);
      var a = n.match(Cr);
      a && a[1] ? (this.name = a[1]) : (this.name = "noname"),
        (this.key = this.type + "-" + this.name),
        (this.options = i);
      var s = i.scoped,
        o = i.sheet,
        f = i.generateId;
      (this.id = s === !1 ? this.name : Qe(f(this, o))),
        (this.rules = new ae(g({}, i, { parent: this })));
      for (var l in e) this.rules.add(l, e[l], g({}, i, { parent: this }));
      this.rules.process();
    }
    var t = r.prototype;
    return (
      (t.toString = function (e) {
        e === void 0 && (e = we);
        var i = B(e),
          a = i.linebreak;
        if (
          (e.indent == null && (e.indent = we.indent),
          e.children == null && (e.children = we.children),
          e.children === !1)
        )
          return this.at + " " + this.id + " {}";
        var s = this.rules.toString(e);
        return (
          s && (s = "" + a + s + a), this.at + " " + this.id + " {" + s + "}"
        );
      }),
      r
    );
  })(),
  Or = /@keyframes\s+/,
  kr = /\$([\w-]+)/g,
  Ue = function (t, n) {
    return typeof t == "string"
      ? t.replace(kr, function (e, i) {
          return i in n ? n[i] : e;
        })
      : t;
  },
  pt = function (t, n, e) {
    var i = t[n],
      a = Ue(i, e);
    a !== i && (t[n] = a);
  },
  Ar = {
    onCreateRule: function (t, n, e) {
      return typeof t == "string" && Or.test(t) ? new Ge(t, n, e) : null;
    },
    onProcessStyle: function (t, n, e) {
      return (
        n.type !== "style" ||
          !e ||
          ("animation-name" in t && pt(t, "animation-name", e.keyframes),
          "animation" in t && pt(t, "animation", e.keyframes)),
        t
      );
    },
    onChangeValue: function (t, n, e) {
      var i = e.options.sheet;
      if (!i) return t;
      switch (n) {
        case "animation":
          return Ue(t, i.keyframes);
        case "animation-name":
          return Ue(t, i.keyframes);
        default:
          return t;
      }
    },
  },
  jr = (function (r) {
    Lt(t, r);
    function t() {
      return r.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.toString = function (i) {
        var a = this.options.sheet,
          s = a ? a.options.link : !1,
          o = s ? g({}, i, { allowEmpty: !0 }) : i;
        return Q(this.key, this.style, o);
      }),
      t
    );
  })(Gt),
  $r = {
    onCreateRule: function (t, n, e) {
      return e.parent && e.parent.type === "keyframes" ? new jr(t, n, e) : null;
    },
  },
  Tr = (function () {
    function r(n, e, i) {
      (this.type = "font-face"),
        (this.at = "@font-face"),
        (this.isProcessed = !1),
        (this.key = n),
        (this.style = e),
        (this.options = i);
    }
    var t = r.prototype;
    return (
      (t.toString = function (e) {
        var i = B(e),
          a = i.linebreak;
        if (Array.isArray(this.style)) {
          for (var s = "", o = 0; o < this.style.length; o++)
            (s += Q(this.at, this.style[o])), this.style[o + 1] && (s += a);
          return s;
        }
        return Q(this.at, this.style, e);
      }),
      r
    );
  })(),
  Ir = /@font-face/,
  _r = {
    onCreateRule: function (t, n, e) {
      return Ir.test(t) ? new Tr(t, n, e) : null;
    },
  },
  Mr = (function () {
    function r(n, e, i) {
      (this.type = "viewport"),
        (this.at = "@viewport"),
        (this.isProcessed = !1),
        (this.key = n),
        (this.style = e),
        (this.options = i);
    }
    var t = r.prototype;
    return (
      (t.toString = function (e) {
        return Q(this.key, this.style, e);
      }),
      r
    );
  })(),
  Er = {
    onCreateRule: function (t, n, e) {
      return t === "@viewport" || t === "@-ms-viewport"
        ? new Mr(t, n, e)
        : null;
    },
  },
  Nr = (function () {
    function r(n, e, i) {
      (this.type = "simple"),
        (this.isProcessed = !1),
        (this.key = n),
        (this.value = e),
        (this.options = i);
    }
    var t = r.prototype;
    return (
      (t.toString = function (e) {
        if (Array.isArray(this.value)) {
          for (var i = "", a = 0; a < this.value.length; a++)
            (i += this.key + " " + this.value[a] + ";"),
              this.value[a + 1] &&
                (i += `
`);
          return i;
        }
        return this.key + " " + this.value + ";";
      }),
      r
    );
  })(),
  zr = { "@charset": !0, "@import": !0, "@namespace": !0 },
  Wr = {
    onCreateRule: function (t, n, e) {
      return t in zr ? new Nr(t, n, e) : null;
    },
  },
  gt = [Sr, Pr, Ar, $r, _r, Er, Wr],
  Vr = { process: !0 },
  vt = { force: !0, process: !0 },
  ae = (function () {
    function r(n) {
      (this.map = {}),
        (this.raw = {}),
        (this.index = []),
        (this.counter = 0),
        (this.options = n),
        (this.classes = n.classes),
        (this.keyframes = n.keyframes);
    }
    var t = r.prototype;
    return (
      (t.add = function (e, i, a) {
        var s = this.options,
          o = s.parent,
          f = s.sheet,
          l = s.jss,
          c = s.Renderer,
          d = s.generateId,
          p = s.scoped,
          h = g(
            {
              classes: this.classes,
              parent: o,
              sheet: f,
              jss: l,
              Renderer: c,
              generateId: d,
              scoped: p,
              name: e,
              keyframes: this.keyframes,
              selector: void 0,
            },
            a
          ),
          m = e;
        e in this.raw && (m = e + "-d" + this.counter++),
          (this.raw[m] = i),
          m in this.classes && (h.selector = "." + Qe(this.classes[m]));
        var y = Ze(m, i, h);
        if (!y) return null;
        this.register(y);
        var S = h.index === void 0 ? this.index.length : h.index;
        return this.index.splice(S, 0, y), y;
      }),
      (t.replace = function (e, i, a) {
        var s = this.get(e),
          o = this.index.indexOf(s);
        s && this.remove(s);
        var f = a;
        return o !== -1 && (f = g({}, a, { index: o })), this.add(e, i, f);
      }),
      (t.get = function (e) {
        return this.map[e];
      }),
      (t.remove = function (e) {
        this.unregister(e),
          delete this.raw[e.key],
          this.index.splice(this.index.indexOf(e), 1);
      }),
      (t.indexOf = function (e) {
        return this.index.indexOf(e);
      }),
      (t.process = function () {
        var e = this.options.jss.plugins;
        this.index.slice(0).forEach(e.onProcessRule, e);
      }),
      (t.register = function (e) {
        (this.map[e.key] = e),
          e instanceof Le
            ? ((this.map[e.selector] = e), e.id && (this.classes[e.key] = e.id))
            : e instanceof Ge &&
              this.keyframes &&
              (this.keyframes[e.name] = e.id);
      }),
      (t.unregister = function (e) {
        delete this.map[e.key],
          e instanceof Le
            ? (delete this.map[e.selector], delete this.classes[e.key])
            : e instanceof Ge && delete this.keyframes[e.name];
      }),
      (t.update = function () {
        var e, i, a;
        if (
          (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string"
            ? ((e = arguments.length <= 0 ? void 0 : arguments[0]),
              (i = arguments.length <= 1 ? void 0 : arguments[1]),
              (a = arguments.length <= 2 ? void 0 : arguments[2]))
            : ((i = arguments.length <= 0 ? void 0 : arguments[0]),
              (a = arguments.length <= 1 ? void 0 : arguments[1]),
              (e = null)),
          e)
        )
          this.updateOne(this.get(e), i, a);
        else
          for (var s = 0; s < this.index.length; s++)
            this.updateOne(this.index[s], i, a);
      }),
      (t.updateOne = function (e, i, a) {
        a === void 0 && (a = Vr);
        var s = this.options,
          o = s.jss.plugins,
          f = s.sheet;
        if (e.rules instanceof r) {
          e.rules.update(i, a);
          return;
        }
        var l = e.style;
        if ((o.onUpdate(i, e, f, a), a.process && l && l !== e.style)) {
          o.onProcessStyle(e.style, e, f);
          for (var c in e.style) {
            var d = e.style[c],
              p = l[c];
            d !== p && e.prop(c, d, vt);
          }
          for (var h in l) {
            var m = e.style[h],
              y = l[h];
            m == null && m !== y && e.prop(h, null, vt);
          }
        }
      }),
      (t.toString = function (e) {
        for (
          var i = "",
            a = this.options.sheet,
            s = a ? a.options.link : !1,
            o = B(e),
            f = o.linebreak,
            l = 0;
          l < this.index.length;
          l++
        ) {
          var c = this.index[l],
            d = c.toString(e);
          (!d && !s) || (i && (i += f), (i += d));
        }
        return i;
      }),
      r
    );
  })(),
  Ut = (function () {
    function r(n, e) {
      (this.attached = !1),
        (this.deployed = !1),
        (this.classes = {}),
        (this.keyframes = {}),
        (this.options = g({}, e, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes,
        })),
        e.Renderer && (this.renderer = new e.Renderer(this)),
        (this.rules = new ae(this.options));
      for (var i in n) this.rules.add(i, n[i]);
      this.rules.process();
    }
    var t = r.prototype;
    return (
      (t.attach = function () {
        return this.attached
          ? this
          : (this.renderer && this.renderer.attach(),
            (this.attached = !0),
            this.deployed || this.deploy(),
            this);
      }),
      (t.detach = function () {
        return this.attached
          ? (this.renderer && this.renderer.detach(),
            (this.attached = !1),
            this)
          : this;
      }),
      (t.addRule = function (e, i, a) {
        var s = this.queue;
        this.attached && !s && (this.queue = []);
        var o = this.rules.add(e, i, a);
        return o
          ? (this.options.jss.plugins.onProcessRule(o),
            this.attached
              ? (this.deployed &&
                  (s
                    ? s.push(o)
                    : (this.insertRule(o),
                      this.queue &&
                        (this.queue.forEach(this.insertRule, this),
                        (this.queue = void 0)))),
                o)
              : ((this.deployed = !1), o))
          : null;
      }),
      (t.replaceRule = function (e, i, a) {
        var s = this.rules.get(e);
        if (!s) return this.addRule(e, i, a);
        var o = this.rules.replace(e, i, a);
        return (
          o && this.options.jss.plugins.onProcessRule(o),
          this.attached
            ? (this.deployed &&
                this.renderer &&
                (o
                  ? s.renderable && this.renderer.replaceRule(s.renderable, o)
                  : this.renderer.deleteRule(s)),
              o)
            : ((this.deployed = !1), o)
        );
      }),
      (t.insertRule = function (e) {
        this.renderer && this.renderer.insertRule(e);
      }),
      (t.addRules = function (e, i) {
        var a = [];
        for (var s in e) {
          var o = this.addRule(s, e[s], i);
          o && a.push(o);
        }
        return a;
      }),
      (t.getRule = function (e) {
        return this.rules.get(e);
      }),
      (t.deleteRule = function (e) {
        var i = typeof e == "object" ? e : this.rules.get(e);
        return !i || (this.attached && !i.renderable)
          ? !1
          : (this.rules.remove(i),
            this.attached && i.renderable && this.renderer
              ? this.renderer.deleteRule(i.renderable)
              : !0);
      }),
      (t.indexOf = function (e) {
        return this.rules.indexOf(e);
      }),
      (t.deploy = function () {
        return (
          this.renderer && this.renderer.deploy(), (this.deployed = !0), this
        );
      }),
      (t.update = function () {
        var e;
        return (e = this.rules).update.apply(e, arguments), this;
      }),
      (t.updateOne = function (e, i, a) {
        return this.rules.updateOne(e, i, a), this;
      }),
      (t.toString = function (e) {
        return this.rules.toString(e);
      }),
      r
    );
  })(),
  Fr = (function () {
    function r() {
      (this.plugins = { internal: [], external: [] }), (this.registry = {});
    }
    var t = r.prototype;
    return (
      (t.onCreateRule = function (e, i, a) {
        for (var s = 0; s < this.registry.onCreateRule.length; s++) {
          var o = this.registry.onCreateRule[s](e, i, a);
          if (o) return o;
        }
        return null;
      }),
      (t.onProcessRule = function (e) {
        if (!e.isProcessed) {
          for (
            var i = e.options.sheet, a = 0;
            a < this.registry.onProcessRule.length;
            a++
          )
            this.registry.onProcessRule[a](e, i);
          e.style && this.onProcessStyle(e.style, e, i), (e.isProcessed = !0);
        }
      }),
      (t.onProcessStyle = function (e, i, a) {
        for (var s = 0; s < this.registry.onProcessStyle.length; s++)
          i.style = this.registry.onProcessStyle[s](i.style, i, a);
      }),
      (t.onProcessSheet = function (e) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++)
          this.registry.onProcessSheet[i](e);
      }),
      (t.onUpdate = function (e, i, a, s) {
        for (var o = 0; o < this.registry.onUpdate.length; o++)
          this.registry.onUpdate[o](e, i, a, s);
      }),
      (t.onChangeValue = function (e, i, a) {
        for (var s = e, o = 0; o < this.registry.onChangeValue.length; o++)
          s = this.registry.onChangeValue[o](s, i, a);
        return s;
      }),
      (t.use = function (e, i) {
        i === void 0 && (i = { queue: "external" });
        var a = this.plugins[i.queue];
        a.indexOf(e) === -1 &&
          (a.push(e),
          (this.registry = []
            .concat(this.plugins.external, this.plugins.internal)
            .reduce(
              function (s, o) {
                for (var f in o) f in s && s[f].push(o[f]);
                return s;
              },
              {
                onCreateRule: [],
                onProcessRule: [],
                onProcessStyle: [],
                onProcessSheet: [],
                onChangeValue: [],
                onUpdate: [],
              }
            )));
      }),
      r
    );
  })(),
  Lr = (function () {
    function r() {
      this.registry = [];
    }
    var t = r.prototype;
    return (
      (t.add = function (e) {
        var i = this.registry,
          a = e.options.index;
        if (i.indexOf(e) === -1) {
          if (i.length === 0 || a >= this.index) {
            i.push(e);
            return;
          }
          for (var s = 0; s < i.length; s++)
            if (i[s].options.index > a) {
              i.splice(s, 0, e);
              return;
            }
        }
      }),
      (t.reset = function () {
        this.registry = [];
      }),
      (t.remove = function (e) {
        var i = this.registry.indexOf(e);
        this.registry.splice(i, 1);
      }),
      (t.toString = function (e) {
        for (
          var i = e === void 0 ? {} : e,
            a = i.attached,
            s = Wt(i, ["attached"]),
            o = B(s),
            f = o.linebreak,
            l = "",
            c = 0;
          c < this.registry.length;
          c++
        ) {
          var d = this.registry[c];
          (a != null && d.attached !== a) ||
            (l && (l += f), (l += d.toString(s)));
        }
        return l;
      }),
      Ft(r, [
        {
          key: "index",
          get: function () {
            return this.registry.length === 0
              ? 0
              : this.registry[this.registry.length - 1].options.index;
          },
        },
      ]),
      r
    );
  })(),
  Y = new Lr(),
  De =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u" && window.Math === Math
      ? window
      : typeof self < "u" && self.Math === Math
      ? self
      : Function("return this")(),
  Be = "2f1acc6c3a606b082e5eef5e54414ffb";
De[Be] == null && (De[Be] = 0);
var mt = De[Be]++,
  yt = function (t) {
    t === void 0 && (t = {});
    var n = 0,
      e = function (a, s) {
        n += 1;
        var o = "",
          f = "";
        return (
          s &&
            (s.options.classNamePrefix && (f = s.options.classNamePrefix),
            s.options.jss.id != null && (o = String(s.options.jss.id))),
          t.minify
            ? "" + (f || "c") + mt + o + n
            : f + a.key + "-" + mt + (o ? "-" + o : "") + "-" + n
        );
      };
    return e;
  },
  Dt = function (t) {
    var n;
    return function () {
      return n || (n = t()), n;
    };
  },
  Gr = function (t, n) {
    try {
      return t.attributeStyleMap
        ? t.attributeStyleMap.get(n)
        : t.style.getPropertyValue(n);
    } catch {
      return "";
    }
  },
  Ur = function (t, n, e) {
    try {
      var i = e;
      if ((Array.isArray(e) && (i = z(e)), t.attributeStyleMap))
        t.attributeStyleMap.set(n, i);
      else {
        var a = i ? i.indexOf("!important") : -1,
          s = a > -1 ? i.substr(0, a - 1) : i;
        t.style.setProperty(n, s, a > -1 ? "important" : "");
      }
    } catch {
      return !1;
    }
    return !0;
  },
  Dr = function (t, n) {
    try {
      t.attributeStyleMap
        ? t.attributeStyleMap.delete(n)
        : t.style.removeProperty(n);
    } catch {}
  },
  Br = function (t, n) {
    return (t.selectorText = n), t.selectorText === n;
  },
  Bt = Dt(function () {
    return document.querySelector("head");
  });
function Kr(r, t) {
  for (var n = 0; n < r.length; n++) {
    var e = r[n];
    if (
      e.attached &&
      e.options.index > t.index &&
      e.options.insertionPoint === t.insertionPoint
    )
      return e;
  }
  return null;
}
function qr(r, t) {
  for (var n = r.length - 1; n >= 0; n--) {
    var e = r[n];
    if (e.attached && e.options.insertionPoint === t.insertionPoint) return e;
  }
  return null;
}
function Hr(r) {
  for (var t = Bt(), n = 0; n < t.childNodes.length; n++) {
    var e = t.childNodes[n];
    if (e.nodeType === 8 && e.nodeValue.trim() === r) return e;
  }
  return null;
}
function Jr(r) {
  var t = Y.registry;
  if (t.length > 0) {
    var n = Kr(t, r);
    if (n && n.renderer)
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element,
      };
    if (((n = qr(t, r)), n && n.renderer))
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element.nextSibling,
      };
  }
  var e = r.insertionPoint;
  if (e && typeof e == "string") {
    var i = Hr(e);
    if (i) return { parent: i.parentNode, node: i.nextSibling };
  }
  return !1;
}
function Yr(r, t) {
  var n = t.insertionPoint,
    e = Jr(t);
  if (e !== !1 && e.parent) {
    e.parent.insertBefore(r, e.node);
    return;
  }
  if (n && typeof n.nodeType == "number") {
    var i = n,
      a = i.parentNode;
    a && a.insertBefore(r, i.nextSibling);
    return;
  }
  Bt().appendChild(r);
}
var Zr = Dt(function () {
    var r = document.querySelector('meta[property="csp-nonce"]');
    return r ? r.getAttribute("content") : null;
  }),
  bt = function (t, n, e) {
    try {
      "insertRule" in t
        ? t.insertRule(n, e)
        : "appendRule" in t && t.appendRule(n);
    } catch {
      return !1;
    }
    return t.cssRules[e];
  },
  St = function (t, n) {
    var e = t.cssRules.length;
    return n === void 0 || n > e ? e : n;
  },
  Qr = function () {
    var t = document.createElement("style");
    return (
      (t.textContent = `
`),
      t
    );
  },
  Xr = (function () {
    function r(n) {
      (this.getPropertyValue = Gr),
        (this.setProperty = Ur),
        (this.removeProperty = Dr),
        (this.setSelector = Br),
        (this.hasInsertedRules = !1),
        (this.cssRules = []),
        n && Y.add(n),
        (this.sheet = n);
      var e = this.sheet ? this.sheet.options : {},
        i = e.media,
        a = e.meta,
        s = e.element;
      (this.element = s || Qr()),
        this.element.setAttribute("data-jss", ""),
        i && this.element.setAttribute("media", i),
        a && this.element.setAttribute("data-meta", a);
      var o = Zr();
      o && this.element.setAttribute("nonce", o);
    }
    var t = r.prototype;
    return (
      (t.attach = function () {
        if (!(this.element.parentNode || !this.sheet)) {
          Yr(this.element, this.sheet.options);
          var e = !!(this.sheet && this.sheet.deployed);
          this.hasInsertedRules &&
            e &&
            ((this.hasInsertedRules = !1), this.deploy());
        }
      }),
      (t.detach = function () {
        if (this.sheet) {
          var e = this.element.parentNode;
          e && e.removeChild(this.element),
            this.sheet.options.link &&
              ((this.cssRules = []),
              (this.element.textContent = `
`));
        }
      }),
      (t.deploy = function () {
        var e = this.sheet;
        if (e) {
          if (e.options.link) {
            this.insertRules(e.rules);
            return;
          }
          this.element.textContent =
            `
` +
            e.toString() +
            `
`;
        }
      }),
      (t.insertRules = function (e, i) {
        for (var a = 0; a < e.index.length; a++)
          this.insertRule(e.index[a], a, i);
      }),
      (t.insertRule = function (e, i, a) {
        if ((a === void 0 && (a = this.element.sheet), e.rules)) {
          var s = e,
            o = a;
          if (e.type === "conditional" || e.type === "keyframes") {
            var f = St(a, i);
            if (((o = bt(a, s.toString({ children: !1 }), f)), o === !1))
              return !1;
            this.refCssRule(e, f, o);
          }
          return this.insertRules(s.rules, o), o;
        }
        var l = e.toString();
        if (!l) return !1;
        var c = St(a, i),
          d = bt(a, l, c);
        return d === !1
          ? !1
          : ((this.hasInsertedRules = !0), this.refCssRule(e, c, d), d);
      }),
      (t.refCssRule = function (e, i, a) {
        (e.renderable = a),
          e.options.parent instanceof Ut && this.cssRules.splice(i, 0, a);
      }),
      (t.deleteRule = function (e) {
        var i = this.element.sheet,
          a = this.indexOf(e);
        return a === -1
          ? !1
          : (i.deleteRule(a), this.cssRules.splice(a, 1), !0);
      }),
      (t.indexOf = function (e) {
        return this.cssRules.indexOf(e);
      }),
      (t.replaceRule = function (e, i) {
        var a = this.indexOf(e);
        return a === -1
          ? !1
          : (this.element.sheet.deleteRule(a),
            this.cssRules.splice(a, 1),
            this.insertRule(i, a));
      }),
      (t.getRules = function () {
        return this.element.sheet.cssRules;
      }),
      r
    );
  })(),
  en = 0,
  tn = (function () {
    function r(n) {
      (this.id = en++),
        (this.version = "10.10.0"),
        (this.plugins = new Fr()),
        (this.options = {
          id: { minify: !1 },
          createGenerateId: yt,
          Renderer: X ? Xr : null,
          plugins: [],
        }),
        (this.generateId = yt({ minify: !1 }));
      for (var e = 0; e < gt.length; e++)
        this.plugins.use(gt[e], { queue: "internal" });
      this.setup(n);
    }
    var t = r.prototype;
    return (
      (t.setup = function (e) {
        return (
          e === void 0 && (e = {}),
          e.createGenerateId &&
            (this.options.createGenerateId = e.createGenerateId),
          e.id && (this.options.id = g({}, this.options.id, e.id)),
          (e.createGenerateId || e.id) &&
            (this.generateId = this.options.createGenerateId(this.options.id)),
          e.insertionPoint != null &&
            (this.options.insertionPoint = e.insertionPoint),
          "Renderer" in e && (this.options.Renderer = e.Renderer),
          e.plugins && this.use.apply(this, e.plugins),
          this
        );
      }),
      (t.createStyleSheet = function (e, i) {
        i === void 0 && (i = {});
        var a = i,
          s = a.index;
        typeof s != "number" && (s = Y.index === 0 ? 0 : Y.index + 1);
        var o = new Ut(
          e,
          g({}, i, {
            jss: this,
            generateId: i.generateId || this.generateId,
            insertionPoint: this.options.insertionPoint,
            Renderer: this.options.Renderer,
            index: s,
          })
        );
        return this.plugins.onProcessSheet(o), o;
      }),
      (t.removeStyleSheet = function (e) {
        return e.detach(), Y.remove(e), this;
      }),
      (t.createRule = function (e, i, a) {
        if (
          (i === void 0 && (i = {}),
          a === void 0 && (a = {}),
          typeof e == "object")
        )
          return this.createRule(void 0, e, i);
        var s = g({}, a, {
          name: e,
          jss: this,
          Renderer: this.options.Renderer,
        });
        s.generateId || (s.generateId = this.generateId),
          s.classes || (s.classes = {}),
          s.keyframes || (s.keyframes = {});
        var o = Ze(e, i, s);
        return o && this.plugins.onProcessRule(o), o;
      }),
      (t.use = function () {
        for (
          var e = this, i = arguments.length, a = new Array(i), s = 0;
          s < i;
          s++
        )
          a[s] = arguments[s];
        return (
          a.forEach(function (o) {
            e.plugins.use(o);
          }),
          this
        );
      }),
      r
    );
  })(),
  Kt = function (t) {
    return new tn(t);
  },
  Xe = typeof CSS == "object" && CSS != null && "number" in CSS;
function qt(r) {
  var t = null;
  for (var n in r) {
    var e = r[n],
      i = typeof e;
    if (i === "function") t || (t = {}), (t[n] = e);
    else if (i === "object" && e !== null && !Array.isArray(e)) {
      var a = qt(e);
      a && (t || (t = {}), (t[n] = a));
    }
  }
  return t;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */ Kt();
var Ht = Date.now(),
  Pe = "fnValues" + Ht,
  Ce = "fnStyle" + ++Ht,
  rn = function () {
    return {
      onCreateRule: function (n, e, i) {
        if (typeof e != "function") return null;
        var a = Ze(n, {}, i);
        return (a[Ce] = e), a;
      },
      onProcessStyle: function (n, e) {
        if (Pe in e || Ce in e) return n;
        var i = {};
        for (var a in n) {
          var s = n[a];
          typeof s == "function" && (delete n[a], (i[a] = s));
        }
        return (e[Pe] = i), n;
      },
      onUpdate: function (n, e, i, a) {
        var s = e,
          o = s[Ce];
        o && (s.style = o(n) || {});
        var f = s[Pe];
        if (f) for (var l in f) s.prop(l, f[l](n), a);
      },
    };
  };
const nn = rn;
var M = "@global",
  Ke = "@global ",
  an = (function () {
    function r(n, e, i) {
      (this.type = "global"),
        (this.at = M),
        (this.isProcessed = !1),
        (this.key = n),
        (this.options = i),
        (this.rules = new ae(g({}, i, { parent: this })));
      for (var a in e) this.rules.add(a, e[a]);
      this.rules.process();
    }
    var t = r.prototype;
    return (
      (t.getRule = function (e) {
        return this.rules.get(e);
      }),
      (t.addRule = function (e, i, a) {
        var s = this.rules.add(e, i, a);
        return s && this.options.jss.plugins.onProcessRule(s), s;
      }),
      (t.replaceRule = function (e, i, a) {
        var s = this.rules.replace(e, i, a);
        return s && this.options.jss.plugins.onProcessRule(s), s;
      }),
      (t.indexOf = function (e) {
        return this.rules.indexOf(e);
      }),
      (t.toString = function (e) {
        return this.rules.toString(e);
      }),
      r
    );
  })(),
  sn = (function () {
    function r(n, e, i) {
      (this.type = "global"),
        (this.at = M),
        (this.isProcessed = !1),
        (this.key = n),
        (this.options = i);
      var a = n.substr(Ke.length);
      this.rule = i.jss.createRule(a, e, g({}, i, { parent: this }));
    }
    var t = r.prototype;
    return (
      (t.toString = function (e) {
        return this.rule ? this.rule.toString(e) : "";
      }),
      r
    );
  })(),
  on = /\s*,\s*/g;
function Jt(r, t) {
  for (var n = r.split(on), e = "", i = 0; i < n.length; i++)
    (e += t + " " + n[i].trim()), n[i + 1] && (e += ", ");
  return e;
}
function un(r, t) {
  var n = r.options,
    e = r.style,
    i = e ? e[M] : null;
  if (i) {
    for (var a in i)
      t.addRule(a, i[a], g({}, n, { selector: Jt(a, r.selector) }));
    delete e[M];
  }
}
function fn(r, t) {
  var n = r.options,
    e = r.style;
  for (var i in e)
    if (!(i[0] !== "@" || i.substr(0, M.length) !== M)) {
      var a = Jt(i.substr(M.length), r.selector);
      t.addRule(a, e[i], g({}, n, { selector: a })), delete e[i];
    }
}
function ln() {
  function r(n, e, i) {
    if (!n) return null;
    if (n === M) return new an(n, e, i);
    if (n[0] === "@" && n.substr(0, Ke.length) === Ke) return new sn(n, e, i);
    var a = i.parent;
    return (
      a &&
        (a.type === "global" ||
          (a.options.parent && a.options.parent.type === "global")) &&
        (i.scoped = !1),
      !i.selector && i.scoped === !1 && (i.selector = n),
      null
    );
  }
  function t(n, e) {
    n.type !== "style" || !e || (un(n, e), fn(n, e));
  }
  return { onCreateRule: r, onProcessRule: t };
}
var xt = /\s*,\s*/g,
  cn = /&/g,
  dn = /\$([\w-]+)/g;
function hn() {
  function r(i, a) {
    return function (s, o) {
      var f = i.getRule(o) || (a && a.getRule(o));
      return f ? f.selector : o;
    };
  }
  function t(i, a) {
    for (var s = a.split(xt), o = i.split(xt), f = "", l = 0; l < s.length; l++)
      for (var c = s[l], d = 0; d < o.length; d++) {
        var p = o[d];
        f && (f += ", "),
          (f += p.indexOf("&") !== -1 ? p.replace(cn, c) : c + " " + p);
      }
    return f;
  }
  function n(i, a, s) {
    if (s) return g({}, s, { index: s.index + 1 });
    var o = i.options.nestingLevel;
    o = o === void 0 ? 1 : o + 1;
    var f = g({}, i.options, { nestingLevel: o, index: a.indexOf(i) + 1 });
    return delete f.name, f;
  }
  function e(i, a, s) {
    if (a.type !== "style") return i;
    var o = a,
      f = o.options.parent,
      l,
      c;
    for (var d in i) {
      var p = d.indexOf("&") !== -1,
        h = d[0] === "@";
      if (!(!p && !h)) {
        if (((l = n(o, f, l)), p)) {
          var m = t(d, o.selector);
          c || (c = r(f, s)), (m = m.replace(dn, c));
          var y = o.key + "-" + d;
          "replaceRule" in f
            ? f.replaceRule(y, i[d], g({}, l, { selector: m }))
            : f.addRule(y, i[d], g({}, l, { selector: m }));
        } else
          h &&
            f.addRule(d, {}, l).addRule(o.key, i[d], { selector: o.selector });
        delete i[d];
      }
    }
    return i;
  }
  return { onProcessStyle: e };
}
var pn = /[A-Z]/g,
  gn = /^ms-/,
  Oe = {};
function vn(r) {
  return "-" + r.toLowerCase();
}
function Yt(r) {
  if (Oe.hasOwnProperty(r)) return Oe[r];
  var t = r.replace(pn, vn);
  return (Oe[r] = gn.test(t) ? "-" + t : t);
}
function ne(r) {
  var t = {};
  for (var n in r) {
    var e = n.indexOf("--") === 0 ? n : Yt(n);
    t[e] = r[n];
  }
  return (
    r.fallbacks &&
      (Array.isArray(r.fallbacks)
        ? (t.fallbacks = r.fallbacks.map(ne))
        : (t.fallbacks = ne(r.fallbacks))),
    t
  );
}
function mn() {
  function r(n) {
    if (Array.isArray(n)) {
      for (var e = 0; e < n.length; e++) n[e] = ne(n[e]);
      return n;
    }
    return ne(n);
  }
  function t(n, e, i) {
    if (e.indexOf("--") === 0) return n;
    var a = Yt(e);
    return e === a ? n : (i.prop(a, n), null);
  }
  return { onProcessStyle: r, onChangeValue: t };
}
var u = Xe && CSS ? CSS.px : "px",
  te = Xe && CSS ? CSS.ms : "ms",
  V = Xe && CSS ? CSS.percent : "%",
  yn = {
    "animation-delay": te,
    "animation-duration": te,
    "background-position": u,
    "background-position-x": u,
    "background-position-y": u,
    "background-size": u,
    border: u,
    "border-bottom": u,
    "border-bottom-left-radius": u,
    "border-bottom-right-radius": u,
    "border-bottom-width": u,
    "border-left": u,
    "border-left-width": u,
    "border-radius": u,
    "border-right": u,
    "border-right-width": u,
    "border-top": u,
    "border-top-left-radius": u,
    "border-top-right-radius": u,
    "border-top-width": u,
    "border-width": u,
    "border-block": u,
    "border-block-end": u,
    "border-block-end-width": u,
    "border-block-start": u,
    "border-block-start-width": u,
    "border-block-width": u,
    "border-inline": u,
    "border-inline-end": u,
    "border-inline-end-width": u,
    "border-inline-start": u,
    "border-inline-start-width": u,
    "border-inline-width": u,
    "border-start-start-radius": u,
    "border-start-end-radius": u,
    "border-end-start-radius": u,
    "border-end-end-radius": u,
    margin: u,
    "margin-bottom": u,
    "margin-left": u,
    "margin-right": u,
    "margin-top": u,
    "margin-block": u,
    "margin-block-end": u,
    "margin-block-start": u,
    "margin-inline": u,
    "margin-inline-end": u,
    "margin-inline-start": u,
    padding: u,
    "padding-bottom": u,
    "padding-left": u,
    "padding-right": u,
    "padding-top": u,
    "padding-block": u,
    "padding-block-end": u,
    "padding-block-start": u,
    "padding-inline": u,
    "padding-inline-end": u,
    "padding-inline-start": u,
    "mask-position-x": u,
    "mask-position-y": u,
    "mask-size": u,
    height: u,
    width: u,
    "min-height": u,
    "max-height": u,
    "min-width": u,
    "max-width": u,
    bottom: u,
    left: u,
    top: u,
    right: u,
    inset: u,
    "inset-block": u,
    "inset-block-end": u,
    "inset-block-start": u,
    "inset-inline": u,
    "inset-inline-end": u,
    "inset-inline-start": u,
    "box-shadow": u,
    "text-shadow": u,
    "column-gap": u,
    "column-rule": u,
    "column-rule-width": u,
    "column-width": u,
    "font-size": u,
    "font-size-delta": u,
    "letter-spacing": u,
    "text-decoration-thickness": u,
    "text-indent": u,
    "text-stroke": u,
    "text-stroke-width": u,
    "word-spacing": u,
    motion: u,
    "motion-offset": u,
    outline: u,
    "outline-offset": u,
    "outline-width": u,
    perspective: u,
    "perspective-origin-x": V,
    "perspective-origin-y": V,
    "transform-origin": V,
    "transform-origin-x": V,
    "transform-origin-y": V,
    "transform-origin-z": V,
    "transition-delay": te,
    "transition-duration": te,
    "vertical-align": u,
    "flex-basis": u,
    "shape-margin": u,
    size: u,
    gap: u,
    grid: u,
    "grid-gap": u,
    "row-gap": u,
    "grid-row-gap": u,
    "grid-column-gap": u,
    "grid-template-rows": u,
    "grid-template-columns": u,
    "grid-auto-rows": u,
    "grid-auto-columns": u,
    "box-shadow-x": u,
    "box-shadow-y": u,
    "box-shadow-blur": u,
    "box-shadow-spread": u,
    "font-line-height": u,
    "text-shadow-x": u,
    "text-shadow-y": u,
    "text-shadow-blur": u,
  };
function Zt(r) {
  var t = /(-[a-z])/g,
    n = function (s) {
      return s[1].toUpperCase();
    },
    e = {};
  for (var i in r) (e[i] = r[i]), (e[i.replace(t, n)] = r[i]);
  return e;
}
var bn = Zt(yn);
function Z(r, t, n) {
  if (t == null) return t;
  if (Array.isArray(t)) for (var e = 0; e < t.length; e++) t[e] = Z(r, t[e], n);
  else if (typeof t == "object")
    if (r === "fallbacks") for (var i in t) t[i] = Z(i, t[i], n);
    else for (var a in t) t[a] = Z(r + "-" + a, t[a], n);
  else if (typeof t == "number" && isNaN(t) === !1) {
    var s = n[r] || bn[r];
    return s && !(t === 0 && s === u)
      ? typeof s == "function"
        ? s(t).toString()
        : "" + t + s
      : t.toString();
  }
  return t;
}
function Sn(r) {
  r === void 0 && (r = {});
  var t = Zt(r);
  function n(i, a) {
    if (a.type !== "style") return i;
    for (var s in i) i[s] = Z(s, i[s], t);
    return i;
  }
  function e(i, a) {
    return Z(a, i, t);
  }
  return { onProcessStyle: n, onChangeValue: e };
}
function qe(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
  return e;
}
function xn(r) {
  if (Array.isArray(r)) return qe(r);
}
function Rn(r) {
  if (
    (typeof Symbol < "u" && r[Symbol.iterator] != null) ||
    r["@@iterator"] != null
  )
    return Array.from(r);
}
function wn(r, t) {
  if (r) {
    if (typeof r == "string") return qe(r, t);
    var n = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (n === "Object" && r.constructor && (n = r.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(r);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return qe(r, t);
  }
}
function Pn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cn(r) {
  return xn(r) || Rn(r) || wn(r) || Pn();
}
var H = "",
  He = "",
  Qt = "",
  Xt = "",
  On = X && "ontouchstart" in document.documentElement;
if (X) {
  var ke = { Moz: "-moz-", ms: "-ms-", O: "-o-", Webkit: "-webkit-" },
    kn = document.createElement("p"),
    Ae = kn.style,
    An = "Transform";
  for (var je in ke)
    if (je + An in Ae) {
      (H = je), (He = ke[je]);
      break;
    }
  H === "Webkit" &&
    "msHyphens" in Ae &&
    ((H = "ms"), (He = ke.ms), (Xt = "edge")),
    H === "Webkit" && "-apple-trailing-word" in Ae && (Qt = "apple");
}
var v = { js: H, css: He, vendor: Qt, browser: Xt, isTouch: On };
function jn(r) {
  return r[1] === "-" || v.js === "ms"
    ? r
    : "@" + v.css + "keyframes" + r.substr(10);
}
var $n = {
    noPrefill: ["appearance"],
    supportedProperty: function (t) {
      return t !== "appearance"
        ? !1
        : v.js === "ms"
        ? "-webkit-" + t
        : v.css + t;
    },
  },
  Tn = {
    noPrefill: ["color-adjust"],
    supportedProperty: function (t) {
      return t !== "color-adjust"
        ? !1
        : v.js === "Webkit"
        ? v.css + "print-" + t
        : t;
    },
  },
  In = /[-\s]+(.)?/g;
function _n(r, t) {
  return t ? t.toUpperCase() : "";
}
function et(r) {
  return r.replace(In, _n);
}
function E(r) {
  return et("-" + r);
}
var Mn = {
    noPrefill: ["mask"],
    supportedProperty: function (t, n) {
      if (!/^mask/.test(t)) return !1;
      if (v.js === "Webkit") {
        var e = "mask-image";
        if (et(e) in n) return t;
        if (v.js + E(e) in n) return v.css + t;
      }
      return t;
    },
  },
  En = {
    noPrefill: ["text-orientation"],
    supportedProperty: function (t) {
      return t !== "text-orientation"
        ? !1
        : v.vendor === "apple" && !v.isTouch
        ? v.css + t
        : t;
    },
  },
  Nn = {
    noPrefill: ["transform"],
    supportedProperty: function (t, n, e) {
      return t !== "transform" ? !1 : e.transform ? t : v.css + t;
    },
  },
  zn = {
    noPrefill: ["transition"],
    supportedProperty: function (t, n, e) {
      return t !== "transition" ? !1 : e.transition ? t : v.css + t;
    },
  },
  Wn = {
    noPrefill: ["writing-mode"],
    supportedProperty: function (t) {
      return t !== "writing-mode"
        ? !1
        : v.js === "Webkit" || (v.js === "ms" && v.browser !== "edge")
        ? v.css + t
        : t;
    },
  },
  Vn = {
    noPrefill: ["user-select"],
    supportedProperty: function (t) {
      return t !== "user-select"
        ? !1
        : v.js === "Moz" || v.js === "ms" || v.vendor === "apple"
        ? v.css + t
        : t;
    },
  },
  Fn = {
    supportedProperty: function (t, n) {
      if (!/^break-/.test(t)) return !1;
      if (v.js === "Webkit") {
        var e = "WebkitColumn" + E(t);
        return e in n ? v.css + "column-" + t : !1;
      }
      if (v.js === "Moz") {
        var i = "page" + E(t);
        return i in n ? "page-" + t : !1;
      }
      return !1;
    },
  },
  Ln = {
    supportedProperty: function (t, n) {
      if (!/^(border|margin|padding)-inline/.test(t)) return !1;
      if (v.js === "Moz") return t;
      var e = t.replace("-inline", "");
      return v.js + E(e) in n ? v.css + e : !1;
    },
  },
  Gn = {
    supportedProperty: function (t, n) {
      return et(t) in n ? t : !1;
    },
  },
  Un = {
    supportedProperty: function (t, n) {
      var e = E(t);
      return t[0] === "-" || (t[0] === "-" && t[1] === "-")
        ? t
        : v.js + e in n
        ? v.css + t
        : v.js !== "Webkit" && "Webkit" + e in n
        ? "-webkit-" + t
        : !1;
    },
  },
  Dn = {
    supportedProperty: function (t) {
      return t.substring(0, 11) !== "scroll-snap"
        ? !1
        : v.js === "ms"
        ? "" + v.css + t
        : t;
    },
  },
  Bn = {
    supportedProperty: function (t) {
      return t !== "overscroll-behavior"
        ? !1
        : v.js === "ms"
        ? v.css + "scroll-chaining"
        : t;
    },
  },
  Kn = {
    "flex-grow": "flex-positive",
    "flex-shrink": "flex-negative",
    "flex-basis": "flex-preferred-size",
    "justify-content": "flex-pack",
    order: "flex-order",
    "align-items": "flex-align",
    "align-content": "flex-line-pack",
  },
  qn = {
    supportedProperty: function (t, n) {
      var e = Kn[t];
      return e && v.js + E(e) in n ? v.css + e : !1;
    },
  },
  er = {
    flex: "box-flex",
    "flex-grow": "box-flex",
    "flex-direction": ["box-orient", "box-direction"],
    order: "box-ordinal-group",
    "align-items": "box-align",
    "flex-flow": ["box-orient", "box-direction"],
    "justify-content": "box-pack",
  },
  Hn = Object.keys(er),
  Jn = function (t) {
    return v.css + t;
  },
  Yn = {
    supportedProperty: function (t, n, e) {
      var i = e.multiple;
      if (Hn.indexOf(t) > -1) {
        var a = er[t];
        if (!Array.isArray(a)) return v.js + E(a) in n ? v.css + a : !1;
        if (!i) return !1;
        for (var s = 0; s < a.length; s++)
          if (!(v.js + E(a[0]) in n)) return !1;
        return a.map(Jn);
      }
      return !1;
    },
  },
  tr = [$n, Tn, Mn, En, Nn, zn, Wn, Vn, Fn, Ln, Gn, Un, Dn, Bn, qn, Yn],
  Rt = tr
    .filter(function (r) {
      return r.supportedProperty;
    })
    .map(function (r) {
      return r.supportedProperty;
    }),
  Zn = tr
    .filter(function (r) {
      return r.noPrefill;
    })
    .reduce(function (r, t) {
      return r.push.apply(r, Cn(t.noPrefill)), r;
    }, []),
  J,
  N = {};
if (X) {
  J = document.createElement("p");
  var $e = window.getComputedStyle(document.documentElement, "");
  for (var Te in $e) isNaN(Te) || (N[$e[Te]] = $e[Te]);
  Zn.forEach(function (r) {
    return delete N[r];
  });
}
function Je(r, t) {
  if ((t === void 0 && (t = {}), !J)) return r;
  if (N[r] != null) return N[r];
  (r === "transition" || r === "transform") && (t[r] = r in J.style);
  for (var n = 0; n < Rt.length && ((N[r] = Rt[n](r, J.style, t)), !N[r]); n++);
  try {
    J.style[r] = "";
  } catch {
    return !1;
  }
  return N[r];
}
var F = {},
  Qn = {
    transition: 1,
    "transition-property": 1,
    "-webkit-transition": 1,
    "-webkit-transition-property": 1,
  },
  Xn = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,
  _;
function ei(r, t, n) {
  if (t === "var") return "var";
  if (t === "all") return "all";
  if (n === "all") return ", all";
  var e = t ? Je(t) : ", " + Je(n);
  return e || t || n;
}
X && (_ = document.createElement("p"));
function wt(r, t) {
  var n = t;
  if (!_ || r === "content") return t;
  if (typeof n != "string" || !isNaN(parseInt(n, 10))) return n;
  var e = r + n;
  if (F[e] != null) return F[e];
  try {
    _.style[r] = n;
  } catch {
    return (F[e] = !1), !1;
  }
  if (Qn[r]) n = n.replace(Xn, ei);
  else if (
    _.style[r] === "" &&
    ((n = v.css + n),
    n === "-ms-flex" && (_.style[r] = "-ms-flexbox"),
    (_.style[r] = n),
    _.style[r] === "")
  )
    return (F[e] = !1), !1;
  return (_.style[r] = ""), (F[e] = n), F[e];
}
function ti() {
  function r(i) {
    if (i.type === "keyframes") {
      var a = i;
      a.at = jn(a.at);
    }
  }
  function t(i) {
    for (var a in i) {
      var s = i[a];
      if (a === "fallbacks" && Array.isArray(s)) {
        i[a] = s.map(t);
        continue;
      }
      var o = !1,
        f = Je(a);
      f && f !== a && (o = !0);
      var l = !1,
        c = wt(f, z(s));
      c && c !== s && (l = !0),
        (o || l) && (o && delete i[a], (i[f || a] = c || s));
    }
    return i;
  }
  function n(i, a) {
    return a.type !== "style" ? i : t(i);
  }
  function e(i, a) {
    return wt(a, z(i)) || i;
  }
  return { onProcessRule: r, onProcessStyle: n, onChangeValue: e };
}
function ri() {
  var r = function (n, e) {
    return n.length === e.length ? (n > e ? 1 : -1) : n.length - e.length;
  };
  return {
    onProcessStyle: function (n, e) {
      if (e.type !== "style") return n;
      for (var i = {}, a = Object.keys(n).sort(r), s = 0; s < a.length; s++)
        i[a[s]] = n[a[s]];
      return i;
    },
  };
}
function ni() {
  return {
    plugins: [
      nn(),
      ln(),
      hn(),
      mn(),
      Sn(),
      typeof window > "u" ? null : ti(),
      ri(),
    ],
  };
}
function rr() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = r.baseClasses,
    n = r.newClasses;
  if ((r.Component, !n)) return t;
  var e = g({}, t);
  return (
    Object.keys(n).forEach(function (i) {
      n[i] && (e[i] = "".concat(t[i], " ").concat(n[i]));
    }),
    e
  );
}
var ii = {
  set: function (t, n, e, i) {
    var a = t.get(n);
    a || ((a = new Map()), t.set(n, a)), a.set(e, i);
  },
  get: function (t, n, e) {
    var i = t.get(n);
    return i ? i.get(e) : void 0;
  },
  delete: function (t, n, e) {
    var i = t.get(n);
    i.delete(e);
  },
};
const L = ii;
var ai = k.createContext(null);
const si = ai;
function nr() {
  var r = k.useContext(si);
  return r;
}
var oi = Kt(ni()),
  ui = vr(),
  fi = new Map(),
  li = {
    disableGeneration: !1,
    generateClassName: ui,
    jss: oi,
    sheetsCache: null,
    sheetsManager: fi,
    sheetsRegistry: null,
  },
  ci = k.createContext(li),
  Pt = -1e9;
function di() {
  return (Pt += 1), Pt;
}
var hi = {};
const pi = hi;
function gi(r) {
  var t = typeof r == "function";
  return {
    create: function (e, i) {
      var a;
      try {
        a = t ? r(e) : r;
      } catch (f) {
        throw f;
      }
      if (!i || !e.overrides || !e.overrides[i]) return a;
      var s = e.overrides[i],
        o = g({}, a);
      return (
        Object.keys(s).forEach(function (f) {
          o[f] = U(o[f], s[f]);
        }),
        o
      );
    },
    options: {},
  };
}
function vi(r, t, n) {
  var e = r.state,
    i = r.stylesOptions;
  if (i.disableGeneration) return t || {};
  e.cacheClasses ||
    (e.cacheClasses = { value: null, lastProp: null, lastJSS: {} });
  var a = !1;
  return (
    e.classes !== e.cacheClasses.lastJSS &&
      ((e.cacheClasses.lastJSS = e.classes), (a = !0)),
    t !== e.cacheClasses.lastProp && ((e.cacheClasses.lastProp = t), (a = !0)),
    a &&
      (e.cacheClasses.value = rr({
        baseClasses: e.cacheClasses.lastJSS,
        newClasses: t,
        Component: n,
      })),
    e.cacheClasses.value
  );
}
function mi(r, t) {
  var n = r.state,
    e = r.theme,
    i = r.stylesOptions,
    a = r.stylesCreator,
    s = r.name;
  if (!i.disableGeneration) {
    var o = L.get(i.sheetsManager, a, e);
    o ||
      ((o = { refs: 0, staticSheet: null, dynamicStyles: null }),
      L.set(i.sheetsManager, a, e, o));
    var f = g({}, a.options, i, {
      theme: e,
      flip: typeof i.flip == "boolean" ? i.flip : e.direction === "rtl",
    });
    f.generateId = f.serverGenerateClassName || f.generateClassName;
    var l = i.sheetsRegistry;
    if (o.refs === 0) {
      var c;
      i.sheetsCache && (c = L.get(i.sheetsCache, a, e));
      var d = a.create(e, s);
      c ||
        ((c = i.jss.createStyleSheet(d, g({ link: !1 }, f))),
        c.attach(),
        i.sheetsCache && L.set(i.sheetsCache, a, e, c)),
        l && l.add(c),
        (o.staticSheet = c),
        (o.dynamicStyles = qt(d));
    }
    if (o.dynamicStyles) {
      var p = i.jss.createStyleSheet(o.dynamicStyles, g({ link: !0 }, f));
      p.update(t),
        p.attach(),
        (n.dynamicSheet = p),
        (n.classes = rr({
          baseClasses: o.staticSheet.classes,
          newClasses: p.classes,
        })),
        l && l.add(p);
    } else n.classes = o.staticSheet.classes;
    o.refs += 1;
  }
}
function yi(r, t) {
  var n = r.state;
  n.dynamicSheet && n.dynamicSheet.update(t);
}
function bi(r) {
  var t = r.state,
    n = r.theme,
    e = r.stylesOptions,
    i = r.stylesCreator;
  if (!e.disableGeneration) {
    var a = L.get(e.sheetsManager, i, n);
    a.refs -= 1;
    var s = e.sheetsRegistry;
    a.refs === 0 &&
      (L.delete(e.sheetsManager, i, n),
      e.jss.removeStyleSheet(a.staticSheet),
      s && s.remove(a.staticSheet)),
      t.dynamicSheet &&
        (e.jss.removeStyleSheet(t.dynamicSheet), s && s.remove(t.dynamicSheet));
  }
}
function Si(r, t) {
  var n = k.useRef([]),
    e,
    i = k.useMemo(function () {
      return {};
    }, t);
  n.current !== i && ((n.current = i), (e = r())),
    k.useEffect(
      function () {
        return function () {
          e && e();
        };
      },
      [i]
    );
}
function xi(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.name,
    e = t.classNamePrefix,
    i = t.Component,
    a = t.defaultTheme,
    s = a === void 0 ? pi : a,
    o = T(t, ["name", "classNamePrefix", "Component", "defaultTheme"]),
    f = gi(r),
    l = n || e || "makeStyles";
  f.options = { index: di(), name: n, meta: l, classNamePrefix: l };
  var c = function () {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      h = nr() || s,
      m = g({}, k.useContext(ci), o),
      y = k.useRef(),
      S = k.useRef();
    Si(
      function () {
        var w = {
          name: n,
          state: {},
          stylesCreator: f,
          stylesOptions: m,
          theme: h,
        };
        return (
          mi(w, p),
          (S.current = !1),
          (y.current = w),
          function () {
            bi(w);
          }
        );
      },
      [h, f]
    ),
      k.useEffect(function () {
        S.current && yi(y.current, p), (S.current = !0);
      });
    var C = vi(y.current, p.classes, i);
    return C;
  };
  return c;
}
var Ye = {},
  Ri = {
    get exports() {
      return Ye;
    },
    set exports(r) {
      Ye = r;
    },
  },
  b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P = typeof Symbol == "function" && Symbol.for,
  tt = P ? Symbol.for("react.element") : 60103,
  rt = P ? Symbol.for("react.portal") : 60106,
  se = P ? Symbol.for("react.fragment") : 60107,
  oe = P ? Symbol.for("react.strict_mode") : 60108,
  ue = P ? Symbol.for("react.profiler") : 60114,
  fe = P ? Symbol.for("react.provider") : 60109,
  le = P ? Symbol.for("react.context") : 60110,
  nt = P ? Symbol.for("react.async_mode") : 60111,
  ce = P ? Symbol.for("react.concurrent_mode") : 60111,
  de = P ? Symbol.for("react.forward_ref") : 60112,
  he = P ? Symbol.for("react.suspense") : 60113,
  wi = P ? Symbol.for("react.suspense_list") : 60120,
  pe = P ? Symbol.for("react.memo") : 60115,
  ge = P ? Symbol.for("react.lazy") : 60116,
  Pi = P ? Symbol.for("react.block") : 60121,
  Ci = P ? Symbol.for("react.fundamental") : 60117,
  Oi = P ? Symbol.for("react.responder") : 60118,
  ki = P ? Symbol.for("react.scope") : 60119;
function A(r) {
  if (typeof r == "object" && r !== null) {
    var t = r.$$typeof;
    switch (t) {
      case tt:
        switch (((r = r.type), r)) {
          case nt:
          case ce:
          case se:
          case ue:
          case oe:
          case he:
            return r;
          default:
            switch (((r = r && r.$$typeof), r)) {
              case le:
              case de:
              case ge:
              case pe:
              case fe:
                return r;
              default:
                return t;
            }
        }
      case rt:
        return t;
    }
  }
}
function ir(r) {
  return A(r) === ce;
}
b.AsyncMode = nt;
b.ConcurrentMode = ce;
b.ContextConsumer = le;
b.ContextProvider = fe;
b.Element = tt;
b.ForwardRef = de;
b.Fragment = se;
b.Lazy = ge;
b.Memo = pe;
b.Portal = rt;
b.Profiler = ue;
b.StrictMode = oe;
b.Suspense = he;
b.isAsyncMode = function (r) {
  return ir(r) || A(r) === nt;
};
b.isConcurrentMode = ir;
b.isContextConsumer = function (r) {
  return A(r) === le;
};
b.isContextProvider = function (r) {
  return A(r) === fe;
};
b.isElement = function (r) {
  return typeof r == "object" && r !== null && r.$$typeof === tt;
};
b.isForwardRef = function (r) {
  return A(r) === de;
};
b.isFragment = function (r) {
  return A(r) === se;
};
b.isLazy = function (r) {
  return A(r) === ge;
};
b.isMemo = function (r) {
  return A(r) === pe;
};
b.isPortal = function (r) {
  return A(r) === rt;
};
b.isProfiler = function (r) {
  return A(r) === ue;
};
b.isStrictMode = function (r) {
  return A(r) === oe;
};
b.isSuspense = function (r) {
  return A(r) === he;
};
b.isValidElementType = function (r) {
  return (
    typeof r == "string" ||
    typeof r == "function" ||
    r === se ||
    r === ce ||
    r === ue ||
    r === oe ||
    r === he ||
    r === wi ||
    (typeof r == "object" &&
      r !== null &&
      (r.$$typeof === ge ||
        r.$$typeof === pe ||
        r.$$typeof === fe ||
        r.$$typeof === le ||
        r.$$typeof === de ||
        r.$$typeof === Ci ||
        r.$$typeof === Oi ||
        r.$$typeof === ki ||
        r.$$typeof === Pi))
  );
};
b.typeOf = A;
(function (r) {
  r.exports = b;
})(Ri);
var it = Ye,
  Ai = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  ji = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  $i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  ar = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  at = {};
at[it.ForwardRef] = $i;
at[it.Memo] = ar;
function Ct(r) {
  return it.isMemo(r) ? ar : at[r.$$typeof] || Ai;
}
var Ti = Object.defineProperty,
  Ii = Object.getOwnPropertyNames,
  Ot = Object.getOwnPropertySymbols,
  _i = Object.getOwnPropertyDescriptor,
  Mi = Object.getPrototypeOf,
  kt = Object.prototype;
function sr(r, t, n) {
  if (typeof t != "string") {
    if (kt) {
      var e = Mi(t);
      e && e !== kt && sr(r, e, n);
    }
    var i = Ii(t);
    Ot && (i = i.concat(Ot(t)));
    for (var a = Ct(r), s = Ct(t), o = 0; o < i.length; ++o) {
      var f = i[o];
      if (!ji[f] && !(n && n[f]) && !(s && s[f]) && !(a && a[f])) {
        var l = _i(t, f);
        try {
          Ti(r, f, l);
        } catch {}
      }
    }
  }
  return r;
}
var Ei = sr,
  Ni = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function (e) {
      var i = n.defaultTheme,
        a = n.withTheme,
        s = a === void 0 ? !1 : a,
        o = n.name,
        f = T(n, ["defaultTheme", "withTheme", "name"]),
        l = o,
        c = xi(
          t,
          g(
            {
              defaultTheme: i,
              Component: e,
              name: o || e.displayName,
              classNamePrefix: l,
            },
            f
          )
        ),
        d = k.forwardRef(function (h, m) {
          h.classes;
          var y = h.innerRef,
            S = T(h, ["classes", "innerRef"]),
            C = c(g({}, e.defaultProps, h)),
            w,
            j = S;
          return (
            (typeof o == "string" || s) &&
              ((w = nr() || i),
              o && (j = mr({ theme: w, name: o, props: S })),
              s && !j.theme && (j.theme = w)),
            k.createElement(e, g({ ref: y || m, classes: C }, j))
          );
        });
      return Ei(d, e), d;
    };
  };
const zi = Ni;
var I = ["xs", "sm", "md", "lg", "xl"];
function Wi(r) {
  var t = r.values,
    n = t === void 0 ? { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } : t,
    e = r.unit,
    i = e === void 0 ? "px" : e,
    a = r.step,
    s = a === void 0 ? 5 : a,
    o = T(r, ["values", "unit", "step"]);
  function f(h) {
    var m = typeof n[h] == "number" ? n[h] : h;
    return "@media (min-width:".concat(m).concat(i, ")");
  }
  function l(h) {
    var m = I.indexOf(h) + 1,
      y = n[I[m]];
    if (m === I.length) return f("xs");
    var S = typeof y == "number" && m > 0 ? y : h;
    return "@media (max-width:".concat(S - s / 100).concat(i, ")");
  }
  function c(h, m) {
    var y = I.indexOf(m);
    return y === I.length - 1
      ? f(h)
      : "@media (min-width:"
          .concat(typeof n[h] == "number" ? n[h] : h)
          .concat(i, ") and ") +
          "(max-width:"
            .concat(
              (y !== -1 && typeof n[I[y + 1]] == "number" ? n[I[y + 1]] : m) -
                s / 100
            )
            .concat(i, ")");
  }
  function d(h) {
    return c(h, h);
  }
  function p(h) {
    return n[h];
  }
  return g(
    { keys: I, values: n, up: f, down: l, between: c, only: d, width: p },
    o
  );
}
function Vi(r, t, n) {
  var e;
  return g(
    {
      gutters: function () {
        var a =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (
          console.warn(
            [
              "Material-UI: theme.mixins.gutters() is deprecated.",
              "You can use the source of the mixin directly:",
              `
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      `,
            ].join(`
`)
          ),
          g(
            { paddingLeft: t(2), paddingRight: t(2) },
            a,
            xe(
              {},
              r.up("sm"),
              g({ paddingLeft: t(3), paddingRight: t(3) }, a[r.up("sm")])
            )
          )
        );
      },
      toolbar:
        ((e = { minHeight: 56 }),
        xe(e, "".concat(r.up("xs"), " and (orientation: landscape)"), {
          minHeight: 48,
        }),
        xe(e, r.up("sm"), { minHeight: 64 }),
        e),
    },
    n
  );
}
var Fi = { black: "#000", white: "#fff" };
const ie = Fi;
var Li = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161",
};
const st = Li;
var Gi = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe",
};
const Ie = Gi;
var Ui = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162",
};
const _e = Ui;
var Di = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000",
};
const Me = Di;
var Bi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00",
};
const Ee = Bi;
var Ki = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff",
};
const Ne = Ki;
var qi = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853",
};
const ze = qi;
function or(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.min(Math.max(t, r), n);
}
function Hi(r) {
  r = r.substr(1);
  var t = new RegExp(".{1,".concat(r.length >= 6 ? 2 : 1, "}"), "g"),
    n = r.match(t);
  return (
    n &&
      n[0].length === 1 &&
      (n = n.map(function (e) {
        return e + e;
      })),
    n
      ? "rgb".concat(n.length === 4 ? "a" : "", "(").concat(
          n
            .map(function (e, i) {
              return i < 3
                ? parseInt(e, 16)
                : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3;
            })
            .join(", "),
          ")"
        )
      : ""
  );
}
function Ji(r) {
  r = D(r);
  var t = r,
    n = t.values,
    e = n[0],
    i = n[1] / 100,
    a = n[2] / 100,
    s = i * Math.min(a, 1 - a),
    o = function (d) {
      var p =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : (d + e / 30) % 12;
      return a - s * Math.max(Math.min(p - 3, 9 - p, 1), -1);
    },
    f = "rgb",
    l = [
      Math.round(o(0) * 255),
      Math.round(o(8) * 255),
      Math.round(o(4) * 255),
    ];
  return (
    r.type === "hsla" && ((f += "a"), l.push(n[3])), ot({ type: f, values: l })
  );
}
function D(r) {
  if (r.type) return r;
  if (r.charAt(0) === "#") return D(Hi(r));
  var t = r.indexOf("("),
    n = r.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(n) === -1)
    throw new Error(re(3, r));
  var e = r.substring(t + 1, r.length - 1).split(",");
  return (
    (e = e.map(function (i) {
      return parseFloat(i);
    })),
    { type: n, values: e }
  );
}
function ot(r) {
  var t = r.type,
    n = r.values;
  return (
    t.indexOf("rgb") !== -1
      ? (n = n.map(function (e, i) {
          return i < 3 ? parseInt(e, 10) : e;
        }))
      : t.indexOf("hsl") !== -1 &&
        ((n[1] = "".concat(n[1], "%")), (n[2] = "".concat(n[2], "%"))),
    "".concat(t, "(").concat(n.join(", "), ")")
  );
}
function Yi(r, t) {
  var n = At(r),
    e = At(t);
  return (Math.max(n, e) + 0.05) / (Math.min(n, e) + 0.05);
}
function At(r) {
  r = D(r);
  var t = r.type === "hsl" ? D(Ji(r)).values : r.values;
  return (
    (t = t.map(function (n) {
      return (
        (n /= 255),
        n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
      );
    })),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Zi(r, t) {
  if (((r = D(r)), (t = or(t)), r.type.indexOf("hsl") !== -1))
    r.values[2] *= 1 - t;
  else if (r.type.indexOf("rgb") !== -1)
    for (var n = 0; n < 3; n += 1) r.values[n] *= 1 - t;
  return ot(r);
}
function Qi(r, t) {
  if (((r = D(r)), (t = or(t)), r.type.indexOf("hsl") !== -1))
    r.values[2] += (100 - r.values[2]) * t;
  else if (r.type.indexOf("rgb") !== -1)
    for (var n = 0; n < 3; n += 1) r.values[n] += (255 - r.values[n]) * t;
  return ot(r);
}
var jt = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ie.white, default: st[50] },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  We = {
    text: {
      primary: ie.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: st[800], default: "#303030" },
    action: {
      active: ie.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function $t(r, t, n, e) {
  var i = e.light || e,
    a = e.dark || e * 1.5;
  r[t] ||
    (r.hasOwnProperty(n)
      ? (r[t] = r[n])
      : t === "light"
      ? (r.light = Qi(r.main, i))
      : t === "dark" && (r.dark = Zi(r.main, a)));
}
function Xi(r) {
  var t = r.primary,
    n = t === void 0 ? { light: Ie[300], main: Ie[500], dark: Ie[700] } : t,
    e = r.secondary,
    i = e === void 0 ? { light: _e.A200, main: _e.A400, dark: _e.A700 } : e,
    a = r.error,
    s = a === void 0 ? { light: Me[300], main: Me[500], dark: Me[700] } : a,
    o = r.warning,
    f = o === void 0 ? { light: Ee[300], main: Ee[500], dark: Ee[700] } : o,
    l = r.info,
    c = l === void 0 ? { light: Ne[300], main: Ne[500], dark: Ne[700] } : l,
    d = r.success,
    p = d === void 0 ? { light: ze[300], main: ze[500], dark: ze[700] } : d,
    h = r.type,
    m = h === void 0 ? "light" : h,
    y = r.contrastThreshold,
    S = y === void 0 ? 3 : y,
    C = r.tonalOffset,
    w = C === void 0 ? 0.2 : C,
    j = T(r, [
      "primary",
      "secondary",
      "error",
      "warning",
      "info",
      "success",
      "type",
      "contrastThreshold",
      "tonalOffset",
    ]);
  function ee(K) {
    var R = Yi(K, We.text.primary) >= S ? We.text.primary : jt.text.primary;
    return R;
  }
  var $ = function (R) {
      var W =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500,
        me =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300,
        ye =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
      if (((R = g({}, R)), !R.main && R[W] && (R.main = R[W]), !R.main))
        throw new Error(re(4, W));
      if (typeof R.main != "string")
        throw new Error(re(5, JSON.stringify(R.main)));
      return (
        $t(R, "light", me, w),
        $t(R, "dark", ye, w),
        R.contrastText || (R.contrastText = ee(R.main)),
        R
      );
    },
    O = { dark: We, light: jt },
    ve = U(
      g(
        {
          common: ie,
          type: m,
          primary: $(n),
          secondary: $(i, "A400", "A200", "A700"),
          error: $(s),
          warning: $(f),
          info: $(c),
          success: $(p),
          grey: st,
          contrastThreshold: S,
          getContrastText: ee,
          augmentColor: $,
          tonalOffset: w,
        },
        O[m]
      ),
      j
    );
  return ve;
}
function ur(r) {
  return Math.round(r * 1e5) / 1e5;
}
function ea(r) {
  return ur(r);
}
var Tt = { textTransform: "uppercase" },
  It = '"Roboto", "Helvetica", "Arial", sans-serif';
function ta(r, t) {
  var n = typeof t == "function" ? t(r) : t,
    e = n.fontFamily,
    i = e === void 0 ? It : e,
    a = n.fontSize,
    s = a === void 0 ? 14 : a,
    o = n.fontWeightLight,
    f = o === void 0 ? 300 : o,
    l = n.fontWeightRegular,
    c = l === void 0 ? 400 : l,
    d = n.fontWeightMedium,
    p = d === void 0 ? 500 : d,
    h = n.fontWeightBold,
    m = h === void 0 ? 700 : h,
    y = n.htmlFontSize,
    S = y === void 0 ? 16 : y,
    C = n.allVariants,
    w = n.pxToRem,
    j = T(n, [
      "fontFamily",
      "fontSize",
      "fontWeightLight",
      "fontWeightRegular",
      "fontWeightMedium",
      "fontWeightBold",
      "htmlFontSize",
      "allVariants",
      "pxToRem",
    ]),
    ee = s / 14,
    $ =
      w ||
      function (K) {
        return "".concat((K / S) * ee, "rem");
      },
    O = function (R, W, me, ye, lr) {
      return g(
        { fontFamily: i, fontWeight: R, fontSize: $(W), lineHeight: me },
        i === It ? { letterSpacing: "".concat(ur(ye / W), "em") } : {},
        lr,
        C
      );
    },
    ve = {
      h1: O(f, 96, 1.167, -1.5),
      h2: O(f, 60, 1.2, -0.5),
      h3: O(c, 48, 1.167, 0),
      h4: O(c, 34, 1.235, 0.25),
      h5: O(c, 24, 1.334, 0),
      h6: O(p, 20, 1.6, 0.15),
      subtitle1: O(c, 16, 1.75, 0.15),
      subtitle2: O(p, 14, 1.57, 0.1),
      body1: O(c, 16, 1.5, 0.15),
      body2: O(c, 14, 1.43, 0.15),
      button: O(p, 14, 1.75, 0.4, Tt),
      caption: O(c, 12, 1.66, 0.4),
      overline: O(c, 12, 2.66, 1, Tt),
    };
  return U(
    g(
      {
        htmlFontSize: S,
        pxToRem: $,
        round: ea,
        fontFamily: i,
        fontSize: s,
        fontWeightLight: f,
        fontWeightRegular: c,
        fontWeightMedium: p,
        fontWeightBold: m,
      },
      ve
    ),
    j,
    { clone: !1 }
  );
}
var ra = 0.2,
  na = 0.14,
  ia = 0.12;
function x() {
  return [
    ""
      .concat(arguments.length <= 0 ? void 0 : arguments[0], "px ")
      .concat(arguments.length <= 1 ? void 0 : arguments[1], "px ")
      .concat(arguments.length <= 2 ? void 0 : arguments[2], "px ")
      .concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,")
      .concat(ra, ")"),
    ""
      .concat(arguments.length <= 4 ? void 0 : arguments[4], "px ")
      .concat(arguments.length <= 5 ? void 0 : arguments[5], "px ")
      .concat(arguments.length <= 6 ? void 0 : arguments[6], "px ")
      .concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,")
      .concat(na, ")"),
    ""
      .concat(arguments.length <= 8 ? void 0 : arguments[8], "px ")
      .concat(arguments.length <= 9 ? void 0 : arguments[9], "px ")
      .concat(arguments.length <= 10 ? void 0 : arguments[10], "px ")
      .concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,")
      .concat(ia, ")"),
  ].join(",");
}
var aa = [
  "none",
  x(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  x(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  x(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  x(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  x(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  x(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  x(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  x(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  x(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  x(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  x(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  x(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  x(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  x(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  x(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  x(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  x(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  x(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  x(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  x(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  x(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  x(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  x(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  x(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];
const sa = aa;
var oa = { borderRadius: 4 };
const ua = oa;
function fa(r) {
  var t = r.spacing || 8;
  return typeof t == "number"
    ? function (n) {
        return t * n;
      }
    : Array.isArray(t)
    ? function (n) {
        return t[n];
      }
    : typeof t == "function"
    ? t
    : function () {};
}
function la() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
  if (r.mui) return r;
  var t = fa({ spacing: r }),
    n = function () {
      for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
        a[s] = arguments[s];
      return a.length === 0
        ? t(1)
        : a.length === 1
        ? t(a[0])
        : a
            .map(function (o) {
              if (typeof o == "string") return o;
              var f = t(o);
              return typeof f == "number" ? "".concat(f, "px") : f;
            })
            .join(" ");
    };
  return (
    Object.defineProperty(n, "unit", {
      get: function () {
        return r;
      },
    }),
    (n.mui = !0),
    n
  );
}
var _t = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Mt = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Et(r) {
  return "".concat(Math.round(r), "ms");
}
const ca = {
  easing: _t,
  duration: Mt,
  create: function () {
    var t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : ["all"],
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      e = n.duration,
      i = e === void 0 ? Mt.standard : e,
      a = n.easing,
      s = a === void 0 ? _t.easeInOut : a,
      o = n.delay,
      f = o === void 0 ? 0 : o;
    return (
      T(n, ["duration", "easing", "delay"]),
      (Array.isArray(t) ? t : [t])
        .map(function (l) {
          return ""
            .concat(l, " ")
            .concat(typeof i == "string" ? i : Et(i), " ")
            .concat(s, " ")
            .concat(typeof f == "string" ? f : Et(f));
        })
        .join(",")
    );
  },
  getAutoHeightDuration: function (t) {
    if (!t) return 0;
    var n = t / 36;
    return Math.round((4 + 15 * Math.pow(n, 0.25) + n / 5) * 10);
  },
};
var da = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
const ha = da;
function pa() {
  for (
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = r.breakpoints,
      n = t === void 0 ? {} : t,
      e = r.mixins,
      i = e === void 0 ? {} : e,
      a = r.palette,
      s = a === void 0 ? {} : a,
      o = r.spacing,
      f = r.typography,
      l = f === void 0 ? {} : f,
      c = T(r, ["breakpoints", "mixins", "palette", "spacing", "typography"]),
      d = Xi(s),
      p = Wi(n),
      h = la(o),
      m = U(
        {
          breakpoints: p,
          direction: "ltr",
          mixins: Vi(p, h, i),
          overrides: {},
          palette: d,
          props: {},
          shadows: sa,
          typography: ta(d, l),
          spacing: h,
          shape: ua,
          transitions: ca,
          zIndex: ha,
        },
        c
      ),
      y = arguments.length,
      S = new Array(y > 1 ? y - 1 : 0),
      C = 1;
    C < y;
    C++
  )
    S[C - 1] = arguments[C];
  return (
    (m = S.reduce(function (w, j) {
      return U(w, j);
    }, m)),
    m
  );
}
var ga = pa();
const va = ga;
function ma(r, t) {
  return zi(r, g({ defaultTheme: va }, t));
}
var ya = function (t) {
    return {
      root: {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        fontSize: t.typography.pxToRem(24),
        transition: t.transitions.create("fill", {
          duration: t.transitions.duration.shorter,
        }),
      },
      colorPrimary: { color: t.palette.primary.main },
      colorSecondary: { color: t.palette.secondary.main },
      colorAction: { color: t.palette.action.active },
      colorError: { color: t.palette.error.main },
      colorDisabled: { color: t.palette.action.disabled },
      fontSizeInherit: { fontSize: "inherit" },
      fontSizeSmall: { fontSize: t.typography.pxToRem(20) },
      fontSizeLarge: { fontSize: t.typography.pxToRem(35) },
    };
  },
  fr = be.forwardRef(function (t, n) {
    var e = t.children,
      i = t.classes,
      a = t.className,
      s = t.color,
      o = s === void 0 ? "inherit" : s,
      f = t.component,
      l = f === void 0 ? "svg" : f,
      c = t.fontSize,
      d = c === void 0 ? "medium" : c,
      p = t.htmlColor,
      h = t.titleAccess,
      m = t.viewBox,
      y = m === void 0 ? "0 0 24 24" : m,
      S = T(t, [
        "children",
        "classes",
        "className",
        "color",
        "component",
        "fontSize",
        "htmlColor",
        "titleAccess",
        "viewBox",
      ]);
    return be.createElement(
      l,
      g(
        {
          className: dr(
            i.root,
            a,
            o !== "inherit" && i["color".concat(ut(o))],
            d !== "default" && d !== "medium" && i["fontSize".concat(ut(d))]
          ),
          focusable: "false",
          viewBox: y,
          color: p,
          "aria-hidden": h ? void 0 : !0,
          role: h ? "img" : void 0,
          ref: n,
        },
        S
      ),
      e,
      h ? be.createElement("title", null, h) : null
    );
  });
fr.muiName = "SvgIcon";
const Nt = ma(ya, { name: "MuiSvgIcon" })(fr);
function xa(r, t) {
  var n = function (i, a) {
    return k.createElement(Nt, g({ ref: a }, i), r);
  };
  return (n.muiName = Nt.muiName), k.memo(k.forwardRef(n));
}
export { Sa as L, xa as c };
