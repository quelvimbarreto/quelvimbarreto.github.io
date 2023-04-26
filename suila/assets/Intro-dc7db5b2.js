import { g as yt, r as mt, c as gt, j as I } from "./index-07f5077d.js";
var K = {},
  bt = {
    get exports() {
      return K;
    },
    set exports(G) {
      K = G;
    },
  };
(function (G, xt) {
  (function (Z, W) {
    G.exports = W(mt);
  })(typeof self < "u" ? self : gt, (Z) =>
    (() => {
      var W = {
          7403: (e, o, t) => {
            t.d(o, { default: () => $ });
            var r = t(4087),
              s = t.n(r);
            const a = function (E) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(E);
              },
              n = function (E) {
                var m = document.createElement("div");
                return (m.innerHTML = E), m.childNodes;
              },
              u = function (E, m) {
                return Math.floor(Math.random() * (m - E + 1)) + E;
              };
            var c = "TYPE_CHARACTER",
              p = "REMOVE_CHARACTER",
              h = "REMOVE_ALL",
              l = "REMOVE_LAST_VISIBLE_NODE",
              v = "PAUSE_FOR",
              b = "CALL_FUNCTION",
              T = "ADD_HTML_TAG_ELEMENT",
              d = "CHANGE_DELETE_SPEED",
              f = "CHANGE_DELAY",
              g = "CHANGE_CURSOR",
              _ = "PASTE_STRING",
              S = "HTML_TAG";
            function w(E, m) {
              var N = Object.keys(E);
              if (Object.getOwnPropertySymbols) {
                var x = Object.getOwnPropertySymbols(E);
                m &&
                  (x = x.filter(function (z) {
                    return Object.getOwnPropertyDescriptor(E, z).enumerable;
                  })),
                  N.push.apply(N, x);
              }
              return N;
            }
            function C(E) {
              for (var m = 1; m < arguments.length; m++) {
                var N = arguments[m] != null ? arguments[m] : {};
                m % 2
                  ? w(Object(N), !0).forEach(function (x) {
                      A(E, x, N[x]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      E,
                      Object.getOwnPropertyDescriptors(N)
                    )
                  : w(Object(N)).forEach(function (x) {
                      Object.defineProperty(
                        E,
                        x,
                        Object.getOwnPropertyDescriptor(N, x)
                      );
                    });
              }
              return E;
            }
            function O(E) {
              return (
                (function (m) {
                  if (Array.isArray(m)) return j(m);
                })(E) ||
                (function (m) {
                  if (
                    (typeof Symbol < "u" && m[Symbol.iterator] != null) ||
                    m["@@iterator"] != null
                  )
                    return Array.from(m);
                })(E) ||
                (function (m, N) {
                  if (m) {
                    if (typeof m == "string") return j(m, N);
                    var x = Object.prototype.toString.call(m).slice(8, -1);
                    return (
                      x === "Object" &&
                        m.constructor &&
                        (x = m.constructor.name),
                      x === "Map" || x === "Set"
                        ? Array.from(m)
                        : x === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)
                        ? j(m, N)
                        : void 0
                    );
                  }
                })(E) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function j(E, m) {
              (m == null || m > E.length) && (m = E.length);
              for (var N = 0, x = new Array(m); N < m; N++) x[N] = E[N];
              return x;
            }
            function P(E, m) {
              for (var N = 0; N < m.length; N++) {
                var x = m[N];
                (x.enumerable = x.enumerable || !1),
                  (x.configurable = !0),
                  "value" in x && (x.writable = !0),
                  Object.defineProperty(E, x.key, x);
              }
            }
            function A(E, m, N) {
              return (
                m in E
                  ? Object.defineProperty(E, m, {
                      value: N,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (E[m] = N),
                E
              );
            }
            const $ = (function () {
              function E(x, z) {
                var i = this;
                if (
                  ((function (y, D) {
                    if (!(y instanceof D))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, E),
                  A(this, "state", {
                    cursorAnimation: null,
                    lastFrameTime: null,
                    pauseUntil: null,
                    eventQueue: [],
                    eventLoop: null,
                    eventLoopPaused: !1,
                    reverseCalledEvents: [],
                    calledEvents: [],
                    visibleNodes: [],
                    initialOptions: null,
                    elements: {
                      container: null,
                      wrapper: document.createElement("span"),
                      cursor: document.createElement("span"),
                    },
                  }),
                  A(this, "options", {
                    strings: null,
                    cursor: "|",
                    delay: "natural",
                    pauseFor: 1500,
                    deleteSpeed: "natural",
                    loop: !1,
                    autoStart: !1,
                    devMode: !1,
                    skipAddStyles: !1,
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor",
                    stringSplitter: null,
                    onCreateTextNode: null,
                    onRemoveNode: null,
                  }),
                  A(this, "setupWrapperElement", function () {
                    i.state.elements.container &&
                      ((i.state.elements.wrapper.className =
                        i.options.wrapperClassName),
                      (i.state.elements.cursor.className =
                        i.options.cursorClassName),
                      (i.state.elements.cursor.innerHTML = i.options.cursor),
                      (i.state.elements.container.innerHTML = ""),
                      i.state.elements.container.appendChild(
                        i.state.elements.wrapper
                      ),
                      i.state.elements.container.appendChild(
                        i.state.elements.cursor
                      ));
                  }),
                  A(this, "start", function () {
                    return (i.state.eventLoopPaused = !1), i.runEventLoop(), i;
                  }),
                  A(this, "pause", function () {
                    return (i.state.eventLoopPaused = !0), i;
                  }),
                  A(this, "stop", function () {
                    return (
                      i.state.eventLoop &&
                        ((0, r.cancel)(i.state.eventLoop),
                        (i.state.eventLoop = null)),
                      i
                    );
                  }),
                  A(this, "pauseFor", function (y) {
                    return i.addEventToQueue(v, { ms: y }), i;
                  }),
                  A(this, "typeOutAllStrings", function () {
                    return typeof i.options.strings == "string"
                      ? (i
                          .typeString(i.options.strings)
                          .pauseFor(i.options.pauseFor),
                        i)
                      : (i.options.strings.forEach(function (y) {
                          i.typeString(y)
                            .pauseFor(i.options.pauseFor)
                            .deleteAll(i.options.deleteSpeed);
                        }),
                        i);
                  }),
                  A(this, "typeString", function (y) {
                    var D =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (a(y)) return i.typeOutHTMLString(y, D);
                    if (y) {
                      var R = i.options || {},
                        M = R.stringSplitter,
                        L = typeof M == "function" ? M(y) : y.split("");
                      i.typeCharacters(L, D);
                    }
                    return i;
                  }),
                  A(this, "pasteString", function (y) {
                    var D =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return a(y)
                      ? i.typeOutHTMLString(y, D, !0)
                      : (y && i.addEventToQueue(_, { character: y, node: D }),
                        i);
                  }),
                  A(this, "typeOutHTMLString", function (y) {
                    var D =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      R = arguments.length > 2 ? arguments[2] : void 0,
                      M = n(y);
                    if (M.length > 0)
                      for (var L = 0; L < M.length; L++) {
                        var F = M[L],
                          Q = F.innerHTML;
                        F && F.nodeType !== 3
                          ? ((F.innerHTML = ""),
                            i.addEventToQueue(T, { node: F, parentNode: D }),
                            R ? i.pasteString(Q, F) : i.typeString(Q, F))
                          : F.textContent &&
                            (R
                              ? i.pasteString(F.textContent, D)
                              : i.typeString(F.textContent, D));
                      }
                    return i;
                  }),
                  A(this, "deleteAll", function () {
                    var y =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return i.addEventToQueue(h, { speed: y }), i;
                  }),
                  A(this, "changeDeleteSpeed", function (y) {
                    if (!y) throw new Error("Must provide new delete speed");
                    return i.addEventToQueue(d, { speed: y }), i;
                  }),
                  A(this, "changeDelay", function (y) {
                    if (!y) throw new Error("Must provide new delay");
                    return i.addEventToQueue(f, { delay: y }), i;
                  }),
                  A(this, "changeCursor", function (y) {
                    if (!y) throw new Error("Must provide new cursor");
                    return i.addEventToQueue(g, { cursor: y }), i;
                  }),
                  A(this, "deleteChars", function (y) {
                    if (!y)
                      throw new Error(
                        "Must provide amount of characters to delete"
                      );
                    for (var D = 0; D < y; D++) i.addEventToQueue(p);
                    return i;
                  }),
                  A(this, "callFunction", function (y, D) {
                    if (!y || typeof y != "function")
                      throw new Error("Callbak must be a function");
                    return i.addEventToQueue(b, { cb: y, thisArg: D }), i;
                  }),
                  A(this, "typeCharacters", function (y) {
                    var D =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!y || !Array.isArray(y))
                      throw new Error("Characters must be an array");
                    return (
                      y.forEach(function (R) {
                        i.addEventToQueue(c, { character: R, node: D });
                      }),
                      i
                    );
                  }),
                  A(this, "removeCharacters", function (y) {
                    if (!y || !Array.isArray(y))
                      throw new Error("Characters must be an array");
                    return (
                      y.forEach(function () {
                        i.addEventToQueue(p);
                      }),
                      i
                    );
                  }),
                  A(this, "addEventToQueue", function (y, D) {
                    var R =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return i.addEventToStateProperty(y, D, R, "eventQueue");
                  }),
                  A(this, "addReverseCalledEvent", function (y, D) {
                    var R =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      M = i.options.loop;
                    return M
                      ? i.addEventToStateProperty(
                          y,
                          D,
                          R,
                          "reverseCalledEvents"
                        )
                      : i;
                  }),
                  A(this, "addEventToStateProperty", function (y, D) {
                    var R =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      M = arguments.length > 3 ? arguments[3] : void 0,
                      L = { eventName: y, eventArgs: D || {} };
                    return (
                      (i.state[M] = R
                        ? [L].concat(O(i.state[M]))
                        : [].concat(O(i.state[M]), [L])),
                      i
                    );
                  }),
                  A(this, "runEventLoop", function () {
                    i.state.lastFrameTime ||
                      (i.state.lastFrameTime = Date.now());
                    var y = Date.now(),
                      D = y - i.state.lastFrameTime;
                    if (!i.state.eventQueue.length) {
                      if (!i.options.loop) return;
                      (i.state.eventQueue = O(i.state.calledEvents)),
                        (i.state.calledEvents = []),
                        (i.options = C({}, i.state.initialOptions));
                    }
                    if (
                      ((i.state.eventLoop = s()(i.runEventLoop)),
                      !i.state.eventLoopPaused)
                    ) {
                      if (i.state.pauseUntil) {
                        if (y < i.state.pauseUntil) return;
                        i.state.pauseUntil = null;
                      }
                      var R,
                        M = O(i.state.eventQueue),
                        L = M.shift();
                      if (
                        !(
                          D <=
                          (R =
                            L.eventName === l || L.eventName === p
                              ? i.options.deleteSpeed === "natural"
                                ? u(40, 80)
                                : i.options.deleteSpeed
                              : i.options.delay === "natural"
                              ? u(120, 160)
                              : i.options.delay)
                        )
                      ) {
                        var F = L.eventName,
                          Q = L.eventArgs;
                        switch (
                          (i.logInDevMode({
                            currentEvent: L,
                            state: i.state,
                            delay: R,
                          }),
                          F)
                        ) {
                          case _:
                          case c:
                            var V = Q.character,
                              nt = Q.node,
                              ot = document.createTextNode(V),
                              H = ot;
                            i.options.onCreateTextNode &&
                              typeof i.options.onCreateTextNode == "function" &&
                              (H = i.options.onCreateTextNode(V, ot)),
                              H &&
                                (nt
                                  ? nt.appendChild(H)
                                  : i.state.elements.wrapper.appendChild(H)),
                              (i.state.visibleNodes = [].concat(
                                O(i.state.visibleNodes),
                                [{ type: "TEXT_NODE", character: V, node: H }]
                              ));
                            break;
                          case p:
                            M.unshift({
                              eventName: l,
                              eventArgs: { removingCharacterNode: !0 },
                            });
                            break;
                          case v:
                            var ut = L.eventArgs.ms;
                            i.state.pauseUntil = Date.now() + parseInt(ut);
                            break;
                          case b:
                            var at = L.eventArgs,
                              ct = at.cb,
                              pt = at.thisArg;
                            ct.call(pt, { elements: i.state.elements });
                            break;
                          case T:
                            var st = L.eventArgs,
                              Y = st.node,
                              q = st.parentNode;
                            q
                              ? q.appendChild(Y)
                              : i.state.elements.wrapper.appendChild(Y),
                              (i.state.visibleNodes = [].concat(
                                O(i.state.visibleNodes),
                                [
                                  {
                                    type: S,
                                    node: Y,
                                    parentNode: q || i.state.elements.wrapper,
                                  },
                                ]
                              ));
                            break;
                          case h:
                            var lt = i.state.visibleNodes,
                              J = Q.speed,
                              U = [];
                            J &&
                              U.push({
                                eventName: d,
                                eventArgs: { speed: J, temp: !0 },
                              });
                            for (var it = 0, ft = lt.length; it < ft; it++)
                              U.push({
                                eventName: l,
                                eventArgs: { removingCharacterNode: !1 },
                              });
                            J &&
                              U.push({
                                eventName: d,
                                eventArgs: {
                                  speed: i.options.deleteSpeed,
                                  temp: !0,
                                },
                              }),
                              M.unshift.apply(M, U);
                            break;
                          case l:
                            var vt = L.eventArgs.removingCharacterNode;
                            if (i.state.visibleNodes.length) {
                              var X = i.state.visibleNodes.pop(),
                                dt = X.type,
                                B = X.node,
                                ht = X.character;
                              i.options.onRemoveNode &&
                                typeof i.options.onRemoveNode == "function" &&
                                i.options.onRemoveNode({
                                  node: B,
                                  character: ht,
                                }),
                                B && B.parentNode.removeChild(B),
                                dt === S &&
                                  vt &&
                                  M.unshift({ eventName: l, eventArgs: {} });
                            }
                            break;
                          case d:
                            i.options.deleteSpeed = L.eventArgs.speed;
                            break;
                          case f:
                            i.options.delay = L.eventArgs.delay;
                            break;
                          case g:
                            (i.options.cursor = L.eventArgs.cursor),
                              (i.state.elements.cursor.innerHTML =
                                L.eventArgs.cursor);
                        }
                        i.options.loop &&
                          (L.eventName === l ||
                            (L.eventArgs && L.eventArgs.temp) ||
                            (i.state.calledEvents = [].concat(
                              O(i.state.calledEvents),
                              [L]
                            ))),
                          (i.state.eventQueue = M),
                          (i.state.lastFrameTime = y);
                      }
                    }
                  }),
                  x)
                )
                  if (typeof x == "string") {
                    var rt = document.querySelector(x);
                    if (!rt)
                      throw new Error("Could not find container element");
                    this.state.elements.container = rt;
                  } else this.state.elements.container = x;
                z && (this.options = C(C({}, this.options), z)),
                  (this.state.initialOptions = C({}, this.options)),
                  this.init();
              }
              var m, N;
              return (
                (m = E),
                (N = [
                  {
                    key: "init",
                    value: function () {
                      var x, z;
                      this.setupWrapperElement(),
                        this.addEventToQueue(
                          g,
                          { cursor: this.options.cursor },
                          !0
                        ),
                        this.addEventToQueue(h, null, !0),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((x =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (z = document.createElement("style")).appendChild(
                            document.createTextNode(x)
                          ),
                          document.head.appendChild(z),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                        this.options.autoStart === !0 &&
                          this.options.strings &&
                          this.typeOutAllStrings().start();
                    },
                  },
                  {
                    key: "logInDevMode",
                    value: function (x) {
                      this.options.devMode && console.log(x);
                    },
                  },
                ]) && P(m.prototype, N),
                Object.defineProperty(m, "prototype", { writable: !1 }),
                E
              );
            })();
          },
          8552: (e, o, t) => {
            var r = t(852)(t(5639), "DataView");
            e.exports = r;
          },
          1989: (e, o, t) => {
            var r = t(1789),
              s = t(401),
              a = t(7667),
              n = t(1327),
              u = t(1866);
            function c(p) {
              var h = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++h < l; ) {
                var v = p[h];
                this.set(v[0], v[1]);
              }
            }
            (c.prototype.clear = r),
              (c.prototype.delete = s),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c);
          },
          8407: (e, o, t) => {
            var r = t(7040),
              s = t(4125),
              a = t(2117),
              n = t(7518),
              u = t(4705);
            function c(p) {
              var h = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++h < l; ) {
                var v = p[h];
                this.set(v[0], v[1]);
              }
            }
            (c.prototype.clear = r),
              (c.prototype.delete = s),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c);
          },
          7071: (e, o, t) => {
            var r = t(852)(t(5639), "Map");
            e.exports = r;
          },
          3369: (e, o, t) => {
            var r = t(4785),
              s = t(1285),
              a = t(6e3),
              n = t(9916),
              u = t(5265);
            function c(p) {
              var h = -1,
                l = p == null ? 0 : p.length;
              for (this.clear(); ++h < l; ) {
                var v = p[h];
                this.set(v[0], v[1]);
              }
            }
            (c.prototype.clear = r),
              (c.prototype.delete = s),
              (c.prototype.get = a),
              (c.prototype.has = n),
              (c.prototype.set = u),
              (e.exports = c);
          },
          3818: (e, o, t) => {
            var r = t(852)(t(5639), "Promise");
            e.exports = r;
          },
          8525: (e, o, t) => {
            var r = t(852)(t(5639), "Set");
            e.exports = r;
          },
          8668: (e, o, t) => {
            var r = t(3369),
              s = t(619),
              a = t(2385);
            function n(u) {
              var c = -1,
                p = u == null ? 0 : u.length;
              for (this.__data__ = new r(); ++c < p; ) this.add(u[c]);
            }
            (n.prototype.add = n.prototype.push = s),
              (n.prototype.has = a),
              (e.exports = n);
          },
          6384: (e, o, t) => {
            var r = t(8407),
              s = t(7465),
              a = t(3779),
              n = t(7599),
              u = t(4758),
              c = t(4309);
            function p(h) {
              var l = (this.__data__ = new r(h));
              this.size = l.size;
            }
            (p.prototype.clear = s),
              (p.prototype.delete = a),
              (p.prototype.get = n),
              (p.prototype.has = u),
              (p.prototype.set = c),
              (e.exports = p);
          },
          2705: (e, o, t) => {
            var r = t(5639).Symbol;
            e.exports = r;
          },
          1149: (e, o, t) => {
            var r = t(5639).Uint8Array;
            e.exports = r;
          },
          577: (e, o, t) => {
            var r = t(852)(t(5639), "WeakMap");
            e.exports = r;
          },
          4963: (e) => {
            e.exports = function (o, t) {
              for (
                var r = -1, s = o == null ? 0 : o.length, a = 0, n = [];
                ++r < s;

              ) {
                var u = o[r];
                t(u, r, o) && (n[a++] = u);
              }
              return n;
            };
          },
          4636: (e, o, t) => {
            var r = t(2545),
              s = t(5694),
              a = t(1469),
              n = t(4144),
              u = t(5776),
              c = t(6719),
              p = Object.prototype.hasOwnProperty;
            e.exports = function (h, l) {
              var v = a(h),
                b = !v && s(h),
                T = !v && !b && n(h),
                d = !v && !b && !T && c(h),
                f = v || b || T || d,
                g = f ? r(h.length, String) : [],
                _ = g.length;
              for (var S in h)
                (!l && !p.call(h, S)) ||
                  (f &&
                    (S == "length" ||
                      (T && (S == "offset" || S == "parent")) ||
                      (d &&
                        (S == "buffer" ||
                          S == "byteLength" ||
                          S == "byteOffset")) ||
                      u(S, _))) ||
                  g.push(S);
              return g;
            };
          },
          2488: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, s = t.length, a = o.length; ++r < s; )
                o[a + r] = t[r];
              return o;
            };
          },
          2908: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, s = o == null ? 0 : o.length; ++r < s; )
                if (t(o[r], r, o)) return !0;
              return !1;
            };
          },
          8470: (e, o, t) => {
            var r = t(7813);
            e.exports = function (s, a) {
              for (var n = s.length; n--; ) if (r(s[n][0], a)) return n;
              return -1;
            };
          },
          8866: (e, o, t) => {
            var r = t(2488),
              s = t(1469);
            e.exports = function (a, n, u) {
              var c = n(a);
              return s(a) ? c : r(c, u(a));
            };
          },
          4239: (e, o, t) => {
            var r = t(2705),
              s = t(9607),
              a = t(2333),
              n = r ? r.toStringTag : void 0;
            e.exports = function (u) {
              return u == null
                ? u === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : n && n in Object(u)
                ? s(u)
                : a(u);
            };
          },
          9454: (e, o, t) => {
            var r = t(4239),
              s = t(7005);
            e.exports = function (a) {
              return s(a) && r(a) == "[object Arguments]";
            };
          },
          939: (e, o, t) => {
            var r = t(2492),
              s = t(7005);
            e.exports = function a(n, u, c, p, h) {
              return (
                n === u ||
                (n == null || u == null || (!s(n) && !s(u))
                  ? n != n && u != u
                  : r(n, u, c, p, a, h))
              );
            };
          },
          2492: (e, o, t) => {
            var r = t(6384),
              s = t(7114),
              a = t(8351),
              n = t(6096),
              u = t(4160),
              c = t(1469),
              p = t(4144),
              h = t(6719),
              l = "[object Arguments]",
              v = "[object Array]",
              b = "[object Object]",
              T = Object.prototype.hasOwnProperty;
            e.exports = function (d, f, g, _, S, w) {
              var C = c(d),
                O = c(f),
                j = C ? v : u(d),
                P = O ? v : u(f),
                A = (j = j == l ? b : j) == b,
                $ = (P = P == l ? b : P) == b,
                E = j == P;
              if (E && p(d)) {
                if (!p(f)) return !1;
                (C = !0), (A = !1);
              }
              if (E && !A)
                return (
                  w || (w = new r()),
                  C || h(d) ? s(d, f, g, _, S, w) : a(d, f, j, g, _, S, w)
                );
              if (!(1 & g)) {
                var m = A && T.call(d, "__wrapped__"),
                  N = $ && T.call(f, "__wrapped__");
                if (m || N) {
                  var x = m ? d.value() : d,
                    z = N ? f.value() : f;
                  return w || (w = new r()), S(x, z, g, _, w);
                }
              }
              return !!E && (w || (w = new r()), n(d, f, g, _, S, w));
            };
          },
          8458: (e, o, t) => {
            var r = t(3560),
              s = t(5346),
              a = t(3218),
              n = t(346),
              u = /^\[object .+?Constructor\]$/,
              c = Function.prototype,
              p = Object.prototype,
              h = c.toString,
              l = p.hasOwnProperty,
              v = RegExp(
                "^" +
                  h
                    .call(l)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              );
            e.exports = function (b) {
              return !(!a(b) || s(b)) && (r(b) ? v : u).test(n(b));
            };
          },
          8749: (e, o, t) => {
            var r = t(4239),
              s = t(1780),
              a = t(7005),
              n = {};
            (n["[object Float32Array]"] =
              n["[object Float64Array]"] =
              n["[object Int8Array]"] =
              n["[object Int16Array]"] =
              n["[object Int32Array]"] =
              n["[object Uint8Array]"] =
              n["[object Uint8ClampedArray]"] =
              n["[object Uint16Array]"] =
              n["[object Uint32Array]"] =
                !0),
              (n["[object Arguments]"] =
                n["[object Array]"] =
                n["[object ArrayBuffer]"] =
                n["[object Boolean]"] =
                n["[object DataView]"] =
                n["[object Date]"] =
                n["[object Error]"] =
                n["[object Function]"] =
                n["[object Map]"] =
                n["[object Number]"] =
                n["[object Object]"] =
                n["[object RegExp]"] =
                n["[object Set]"] =
                n["[object String]"] =
                n["[object WeakMap]"] =
                  !1),
              (e.exports = function (u) {
                return a(u) && s(u.length) && !!n[r(u)];
              });
          },
          280: (e, o, t) => {
            var r = t(5726),
              s = t(6916),
              a = Object.prototype.hasOwnProperty;
            e.exports = function (n) {
              if (!r(n)) return s(n);
              var u = [];
              for (var c in Object(n))
                a.call(n, c) && c != "constructor" && u.push(c);
              return u;
            };
          },
          2545: (e) => {
            e.exports = function (o, t) {
              for (var r = -1, s = Array(o); ++r < o; ) s[r] = t(r);
              return s;
            };
          },
          1717: (e) => {
            e.exports = function (o) {
              return function (t) {
                return o(t);
              };
            };
          },
          4757: (e) => {
            e.exports = function (o, t) {
              return o.has(t);
            };
          },
          4429: (e, o, t) => {
            var r = t(5639)["__core-js_shared__"];
            e.exports = r;
          },
          7114: (e, o, t) => {
            var r = t(8668),
              s = t(2908),
              a = t(4757);
            e.exports = function (n, u, c, p, h, l) {
              var v = 1 & c,
                b = n.length,
                T = u.length;
              if (b != T && !(v && T > b)) return !1;
              var d = l.get(n),
                f = l.get(u);
              if (d && f) return d == u && f == n;
              var g = -1,
                _ = !0,
                S = 2 & c ? new r() : void 0;
              for (l.set(n, u), l.set(u, n); ++g < b; ) {
                var w = n[g],
                  C = u[g];
                if (p) var O = v ? p(C, w, g, u, n, l) : p(w, C, g, n, u, l);
                if (O !== void 0) {
                  if (O) continue;
                  _ = !1;
                  break;
                }
                if (S) {
                  if (
                    !s(u, function (j, P) {
                      if (!a(S, P) && (w === j || h(w, j, c, p, l)))
                        return S.push(P);
                    })
                  ) {
                    _ = !1;
                    break;
                  }
                } else if (w !== C && !h(w, C, c, p, l)) {
                  _ = !1;
                  break;
                }
              }
              return l.delete(n), l.delete(u), _;
            };
          },
          8351: (e, o, t) => {
            var r = t(2705),
              s = t(1149),
              a = t(7813),
              n = t(7114),
              u = t(8776),
              c = t(1814),
              p = r ? r.prototype : void 0,
              h = p ? p.valueOf : void 0;
            e.exports = function (l, v, b, T, d, f, g) {
              switch (b) {
                case "[object DataView]":
                  if (
                    l.byteLength != v.byteLength ||
                    l.byteOffset != v.byteOffset
                  )
                    return !1;
                  (l = l.buffer), (v = v.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    l.byteLength != v.byteLength || !f(new s(l), new s(v))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return a(+l, +v);
                case "[object Error]":
                  return l.name == v.name && l.message == v.message;
                case "[object RegExp]":
                case "[object String]":
                  return l == v + "";
                case "[object Map]":
                  var _ = u;
                case "[object Set]":
                  var S = 1 & T;
                  if ((_ || (_ = c), l.size != v.size && !S)) return !1;
                  var w = g.get(l);
                  if (w) return w == v;
                  (T |= 2), g.set(l, v);
                  var C = n(_(l), _(v), T, d, f, g);
                  return g.delete(l), C;
                case "[object Symbol]":
                  if (h) return h.call(l) == h.call(v);
              }
              return !1;
            };
          },
          6096: (e, o, t) => {
            var r = t(8234),
              s = Object.prototype.hasOwnProperty;
            e.exports = function (a, n, u, c, p, h) {
              var l = 1 & u,
                v = r(a),
                b = v.length;
              if (b != r(n).length && !l) return !1;
              for (var T = b; T--; ) {
                var d = v[T];
                if (!(l ? d in n : s.call(n, d))) return !1;
              }
              var f = h.get(a),
                g = h.get(n);
              if (f && g) return f == n && g == a;
              var _ = !0;
              h.set(a, n), h.set(n, a);
              for (var S = l; ++T < b; ) {
                var w = a[(d = v[T])],
                  C = n[d];
                if (c) var O = l ? c(C, w, d, n, a, h) : c(w, C, d, a, n, h);
                if (!(O === void 0 ? w === C || p(w, C, u, c, h) : O)) {
                  _ = !1;
                  break;
                }
                S || (S = d == "constructor");
              }
              if (_ && !S) {
                var j = a.constructor,
                  P = n.constructor;
                j == P ||
                  !("constructor" in a) ||
                  !("constructor" in n) ||
                  (typeof j == "function" &&
                    j instanceof j &&
                    typeof P == "function" &&
                    P instanceof P) ||
                  (_ = !1);
              }
              return h.delete(a), h.delete(n), _;
            };
          },
          1957: (e, o, t) => {
            var r =
              typeof t.g == "object" && t.g && t.g.Object === Object && t.g;
            e.exports = r;
          },
          8234: (e, o, t) => {
            var r = t(8866),
              s = t(9551),
              a = t(3674);
            e.exports = function (n) {
              return r(n, a, s);
            };
          },
          5050: (e, o, t) => {
            var r = t(7019);
            e.exports = function (s, a) {
              var n = s.__data__;
              return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
            };
          },
          852: (e, o, t) => {
            var r = t(8458),
              s = t(7801);
            e.exports = function (a, n) {
              var u = s(a, n);
              return r(u) ? u : void 0;
            };
          },
          9607: (e, o, t) => {
            var r = t(2705),
              s = Object.prototype,
              a = s.hasOwnProperty,
              n = s.toString,
              u = r ? r.toStringTag : void 0;
            e.exports = function (c) {
              var p = a.call(c, u),
                h = c[u];
              try {
                c[u] = void 0;
                var l = !0;
              } catch {}
              var v = n.call(c);
              return l && (p ? (c[u] = h) : delete c[u]), v;
            };
          },
          9551: (e, o, t) => {
            var r = t(4963),
              s = t(479),
              a = Object.prototype.propertyIsEnumerable,
              n = Object.getOwnPropertySymbols,
              u = n
                ? function (c) {
                    return c == null
                      ? []
                      : ((c = Object(c)),
                        r(n(c), function (p) {
                          return a.call(c, p);
                        }));
                  }
                : s;
            e.exports = u;
          },
          4160: (e, o, t) => {
            var r = t(8552),
              s = t(7071),
              a = t(3818),
              n = t(8525),
              u = t(577),
              c = t(4239),
              p = t(346),
              h = "[object Map]",
              l = "[object Promise]",
              v = "[object Set]",
              b = "[object WeakMap]",
              T = "[object DataView]",
              d = p(r),
              f = p(s),
              g = p(a),
              _ = p(n),
              S = p(u),
              w = c;
            ((r && w(new r(new ArrayBuffer(1))) != T) ||
              (s && w(new s()) != h) ||
              (a && w(a.resolve()) != l) ||
              (n && w(new n()) != v) ||
              (u && w(new u()) != b)) &&
              (w = function (C) {
                var O = c(C),
                  j = O == "[object Object]" ? C.constructor : void 0,
                  P = j ? p(j) : "";
                if (P)
                  switch (P) {
                    case d:
                      return T;
                    case f:
                      return h;
                    case g:
                      return l;
                    case _:
                      return v;
                    case S:
                      return b;
                  }
                return O;
              }),
              (e.exports = w);
          },
          7801: (e) => {
            e.exports = function (o, t) {
              return o == null ? void 0 : o[t];
            };
          },
          1789: (e, o, t) => {
            var r = t(4536);
            e.exports = function () {
              (this.__data__ = r ? r(null) : {}), (this.size = 0);
            };
          },
          401: (e) => {
            e.exports = function (o) {
              var t = this.has(o) && delete this.__data__[o];
              return (this.size -= t ? 1 : 0), t;
            };
          },
          7667: (e, o, t) => {
            var r = t(4536),
              s = Object.prototype.hasOwnProperty;
            e.exports = function (a) {
              var n = this.__data__;
              if (r) {
                var u = n[a];
                return u === "__lodash_hash_undefined__" ? void 0 : u;
              }
              return s.call(n, a) ? n[a] : void 0;
            };
          },
          1327: (e, o, t) => {
            var r = t(4536),
              s = Object.prototype.hasOwnProperty;
            e.exports = function (a) {
              var n = this.__data__;
              return r ? n[a] !== void 0 : s.call(n, a);
            };
          },
          1866: (e, o, t) => {
            var r = t(4536);
            e.exports = function (s, a) {
              var n = this.__data__;
              return (
                (this.size += this.has(s) ? 0 : 1),
                (n[s] = r && a === void 0 ? "__lodash_hash_undefined__" : a),
                this
              );
            };
          },
          5776: (e) => {
            var o = /^(?:0|[1-9]\d*)$/;
            e.exports = function (t, r) {
              var s = typeof t;
              return (
                !!(r = r ?? 9007199254740991) &&
                (s == "number" || (s != "symbol" && o.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < r
              );
            };
          },
          7019: (e) => {
            e.exports = function (o) {
              var t = typeof o;
              return t == "string" ||
                t == "number" ||
                t == "symbol" ||
                t == "boolean"
                ? o !== "__proto__"
                : o === null;
            };
          },
          5346: (e, o, t) => {
            var r,
              s = t(4429),
              a = (r = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + r
                : "";
            e.exports = function (n) {
              return !!a && a in n;
            };
          },
          5726: (e) => {
            var o = Object.prototype;
            e.exports = function (t) {
              var r = t && t.constructor;
              return t === ((typeof r == "function" && r.prototype) || o);
            };
          },
          7040: (e) => {
            e.exports = function () {
              (this.__data__ = []), (this.size = 0);
            };
          },
          4125: (e, o, t) => {
            var r = t(8470),
              s = Array.prototype.splice;
            e.exports = function (a) {
              var n = this.__data__,
                u = r(n, a);
              return !(
                u < 0 ||
                (u == n.length - 1 ? n.pop() : s.call(n, u, 1), --this.size, 0)
              );
            };
          },
          2117: (e, o, t) => {
            var r = t(8470);
            e.exports = function (s) {
              var a = this.__data__,
                n = r(a, s);
              return n < 0 ? void 0 : a[n][1];
            };
          },
          7518: (e, o, t) => {
            var r = t(8470);
            e.exports = function (s) {
              return r(this.__data__, s) > -1;
            };
          },
          4705: (e, o, t) => {
            var r = t(8470);
            e.exports = function (s, a) {
              var n = this.__data__,
                u = r(n, s);
              return (
                u < 0 ? (++this.size, n.push([s, a])) : (n[u][1] = a), this
              );
            };
          },
          4785: (e, o, t) => {
            var r = t(1989),
              s = t(8407),
              a = t(7071);
            e.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new r(),
                  map: new (a || s)(),
                  string: new r(),
                });
            };
          },
          1285: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s) {
              var a = r(this, s).delete(s);
              return (this.size -= a ? 1 : 0), a;
            };
          },
          6e3: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s) {
              return r(this, s).get(s);
            };
          },
          9916: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s) {
              return r(this, s).has(s);
            };
          },
          5265: (e, o, t) => {
            var r = t(5050);
            e.exports = function (s, a) {
              var n = r(this, s),
                u = n.size;
              return n.set(s, a), (this.size += n.size == u ? 0 : 1), this;
            };
          },
          8776: (e) => {
            e.exports = function (o) {
              var t = -1,
                r = Array(o.size);
              return (
                o.forEach(function (s, a) {
                  r[++t] = [a, s];
                }),
                r
              );
            };
          },
          4536: (e, o, t) => {
            var r = t(852)(Object, "create");
            e.exports = r;
          },
          6916: (e, o, t) => {
            var r = t(5569)(Object.keys, Object);
            e.exports = r;
          },
          1167: (e, o, t) => {
            e = t.nmd(e);
            var r = t(1957),
              s = o && !o.nodeType && o,
              a = s && e && !e.nodeType && e,
              n = a && a.exports === s && r.process,
              u = (function () {
                try {
                  return (
                    (a && a.require && a.require("util").types) ||
                    (n && n.binding && n.binding("util"))
                  );
                } catch {}
              })();
            e.exports = u;
          },
          2333: (e) => {
            var o = Object.prototype.toString;
            e.exports = function (t) {
              return o.call(t);
            };
          },
          5569: (e) => {
            e.exports = function (o, t) {
              return function (r) {
                return o(t(r));
              };
            };
          },
          5639: (e, o, t) => {
            var r = t(1957),
              s =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
              a = r || s || Function("return this")();
            e.exports = a;
          },
          619: (e) => {
            e.exports = function (o) {
              return this.__data__.set(o, "__lodash_hash_undefined__"), this;
            };
          },
          2385: (e) => {
            e.exports = function (o) {
              return this.__data__.has(o);
            };
          },
          1814: (e) => {
            e.exports = function (o) {
              var t = -1,
                r = Array(o.size);
              return (
                o.forEach(function (s) {
                  r[++t] = s;
                }),
                r
              );
            };
          },
          7465: (e, o, t) => {
            var r = t(8407);
            e.exports = function () {
              (this.__data__ = new r()), (this.size = 0);
            };
          },
          3779: (e) => {
            e.exports = function (o) {
              var t = this.__data__,
                r = t.delete(o);
              return (this.size = t.size), r;
            };
          },
          7599: (e) => {
            e.exports = function (o) {
              return this.__data__.get(o);
            };
          },
          4758: (e) => {
            e.exports = function (o) {
              return this.__data__.has(o);
            };
          },
          4309: (e, o, t) => {
            var r = t(8407),
              s = t(7071),
              a = t(3369);
            e.exports = function (n, u) {
              var c = this.__data__;
              if (c instanceof r) {
                var p = c.__data__;
                if (!s || p.length < 199)
                  return p.push([n, u]), (this.size = ++c.size), this;
                c = this.__data__ = new a(p);
              }
              return c.set(n, u), (this.size = c.size), this;
            };
          },
          346: (e) => {
            var o = Function.prototype.toString;
            e.exports = function (t) {
              if (t != null) {
                try {
                  return o.call(t);
                } catch {}
                try {
                  return t + "";
                } catch {}
              }
              return "";
            };
          },
          7813: (e) => {
            e.exports = function (o, t) {
              return o === t || (o != o && t != t);
            };
          },
          5694: (e, o, t) => {
            var r = t(9454),
              s = t(7005),
              a = Object.prototype,
              n = a.hasOwnProperty,
              u = a.propertyIsEnumerable,
              c = r(
                (function () {
                  return arguments;
                })()
              )
                ? r
                : function (p) {
                    return s(p) && n.call(p, "callee") && !u.call(p, "callee");
                  };
            e.exports = c;
          },
          1469: (e) => {
            var o = Array.isArray;
            e.exports = o;
          },
          8612: (e, o, t) => {
            var r = t(3560),
              s = t(1780);
            e.exports = function (a) {
              return a != null && s(a.length) && !r(a);
            };
          },
          4144: (e, o, t) => {
            e = t.nmd(e);
            var r = t(5639),
              s = t(5062),
              a = o && !o.nodeType && o,
              n = a && e && !e.nodeType && e,
              u = n && n.exports === a ? r.Buffer : void 0,
              c = (u ? u.isBuffer : void 0) || s;
            e.exports = c;
          },
          8446: (e, o, t) => {
            var r = t(939);
            e.exports = function (s, a) {
              return r(s, a);
            };
          },
          3560: (e, o, t) => {
            var r = t(4239),
              s = t(3218);
            e.exports = function (a) {
              if (!s(a)) return !1;
              var n = r(a);
              return (
                n == "[object Function]" ||
                n == "[object GeneratorFunction]" ||
                n == "[object AsyncFunction]" ||
                n == "[object Proxy]"
              );
            };
          },
          1780: (e) => {
            e.exports = function (o) {
              return (
                typeof o == "number" &&
                o > -1 &&
                o % 1 == 0 &&
                o <= 9007199254740991
              );
            };
          },
          3218: (e) => {
            e.exports = function (o) {
              var t = typeof o;
              return o != null && (t == "object" || t == "function");
            };
          },
          7005: (e) => {
            e.exports = function (o) {
              return o != null && typeof o == "object";
            };
          },
          6719: (e, o, t) => {
            var r = t(8749),
              s = t(1717),
              a = t(1167),
              n = a && a.isTypedArray,
              u = n ? s(n) : r;
            e.exports = u;
          },
          3674: (e, o, t) => {
            var r = t(4636),
              s = t(280),
              a = t(8612);
            e.exports = function (n) {
              return a(n) ? r(n) : s(n);
            };
          },
          479: (e) => {
            e.exports = function () {
              return [];
            };
          },
          5062: (e) => {
            e.exports = function () {
              return !1;
            };
          },
          75: function (e) {
            (function () {
              var o, t, r, s, a, n;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (e.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                ? ((e.exports = function () {
                    return (o() - a) / 1e6;
                  }),
                  (t = process.hrtime),
                  (s = (o = function () {
                    var u;
                    return 1e9 * (u = t())[0] + u[1];
                  })()),
                  (n = 1e9 * process.uptime()),
                  (a = s - n))
                : Date.now
                ? ((e.exports = function () {
                    return Date.now() - r;
                  }),
                  (r = Date.now()))
                : ((e.exports = function () {
                    return new Date().getTime() - r;
                  }),
                  (r = new Date().getTime()));
            }).call(this);
          },
          4087: (e, o, t) => {
            for (
              var r = t(75),
                s = typeof window > "u" ? t.g : window,
                a = ["moz", "webkit"],
                n = "AnimationFrame",
                u = s["request" + n],
                c = s["cancel" + n] || s["cancelRequest" + n],
                p = 0;
              !u && p < a.length;
              p++
            )
              (u = s[a[p] + "Request" + n]),
                (c = s[a[p] + "Cancel" + n] || s[a[p] + "CancelRequest" + n]);
            if (!u || !c) {
              var h = 0,
                l = 0,
                v = [];
              (u = function (b) {
                if (v.length === 0) {
                  var T = r(),
                    d = Math.max(0, 16.666666666666668 - (T - h));
                  (h = d + T),
                    setTimeout(function () {
                      var f = v.slice(0);
                      v.length = 0;
                      for (var g = 0; g < f.length; g++)
                        if (!f[g].cancelled)
                          try {
                            f[g].callback(h);
                          } catch (_) {
                            setTimeout(function () {
                              throw _;
                            }, 0);
                          }
                    }, Math.round(d));
                }
                return v.push({ handle: ++l, callback: b, cancelled: !1 }), l;
              }),
                (c = function (b) {
                  for (var T = 0; T < v.length; T++)
                    v[T].handle === b && (v[T].cancelled = !0);
                });
            }
            (e.exports = function (b) {
              return u.call(s, b);
            }),
              (e.exports.cancel = function () {
                c.apply(s, arguments);
              }),
              (e.exports.polyfill = function (b) {
                b || (b = s),
                  (b.requestAnimationFrame = u),
                  (b.cancelAnimationFrame = c);
              });
          },
          8156: (e) => {
            e.exports = Z;
          },
        },
        tt = {};
      function k(e) {
        var o = tt[e];
        if (o !== void 0) return o.exports;
        var t = (tt[e] = { id: e, loaded: !1, exports: {} });
        return (
          W[e].call(t.exports, t, t.exports, k), (t.loaded = !0), t.exports
        );
      }
      (k.n = (e) => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return k.d(o, { a: o }), o;
      }),
        (k.d = (e, o) => {
          for (var t in o)
            k.o(o, t) &&
              !k.o(e, t) &&
              Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
        }),
        (k.g = (function () {
          if (typeof globalThis == "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        })()),
        (k.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
        (k.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
      var et = {};
      return (
        (() => {
          k.d(et, { default: () => T });
          var e = k(8156),
            o = k.n(e),
            t = k(7403),
            r = k(8446),
            s = k.n(r);
          function a(d) {
            return (
              (a =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (f) {
                      return typeof f;
                    }
                  : function (f) {
                      return f &&
                        typeof Symbol == "function" &&
                        f.constructor === Symbol &&
                        f !== Symbol.prototype
                        ? "symbol"
                        : typeof f;
                    }),
              a(d)
            );
          }
          function n(d, f) {
            if (!(d instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(d, f) {
            for (var g = 0; g < f.length; g++) {
              var _ = f[g];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(d, _.key, _);
            }
          }
          function c(d, f) {
            return (
              (c = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (g, _) {
                    return (g.__proto__ = _), g;
                  }),
              c(d, f)
            );
          }
          function p(d, f) {
            if (f && (a(f) === "object" || typeof f == "function")) return f;
            if (f !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return h(d);
          }
          function h(d) {
            if (d === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return d;
          }
          function l(d) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (f) {
                    return f.__proto__ || Object.getPrototypeOf(f);
                  }),
              l(d)
            );
          }
          function v(d, f, g) {
            return (
              f in d
                ? Object.defineProperty(d, f, {
                    value: g,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (d[f] = g),
              d
            );
          }
          var b = (function (d) {
            (function (O, j) {
              if (typeof j != "function" && j !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (O.prototype = Object.create(j && j.prototype, {
                constructor: { value: O, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(O, "prototype", { writable: !1 }),
                j && c(O, j);
            })(C, d);
            var f,
              g,
              _,
              S,
              w =
                ((_ = C),
                (S = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var O,
                    j = l(_);
                  if (S) {
                    var P = l(this).constructor;
                    O = Reflect.construct(j, arguments, P);
                  } else O = j.apply(this, arguments);
                  return p(this, O);
                });
            function C() {
              var O;
              n(this, C);
              for (
                var j = arguments.length, P = new Array(j), A = 0;
                A < j;
                A++
              )
                P[A] = arguments[A];
              return (
                v(h((O = w.call.apply(w, [this].concat(P)))), "state", {
                  instance: null,
                }),
                O
              );
            }
            return (
              (f = C),
              (g = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var O = this,
                      j = new t.default(this.typewriter, this.props.options);
                    this.setState({ instance: j }, function () {
                      var P = O.props.onInit;
                      P && P(j);
                    });
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (O) {
                    s()(this.props.options, O.options) ||
                      this.setState({
                        instance: new t.default(
                          this.typewriter,
                          this.props.options
                        ),
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.instance && this.state.instance.stop();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var O = this,
                      j = this.props.component;
                    return o().createElement(j, {
                      ref: function (P) {
                        return (O.typewriter = P);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper",
                    });
                  },
                },
              ]) && u(f.prototype, g),
              Object.defineProperty(f, "prototype", { writable: !1 }),
              C
            );
          })(e.Component);
          b.defaultProps = { component: "div" };
          const T = b;
        })(),
        et.default
      );
    })()
  );
})(bt);
const _t = yt(K),
  wt = "suila/assets/woman-0f006029.png";
function Et() {
  return I.jsx("div", {
    className: "intro",
    id: "intro",
    children: I.jsxs("div", {
      className: "wrapper",
      children: [
        I.jsx("div", {
          className: "left",
          children: I.jsx("div", {
            className: "imgContainer",
            children: I.jsx("img", { src: wt, alt: "" }),
          }),
        }),
        I.jsx("div", {
          className: "right",
          children: I.jsxs("div", {
            className: "text",
            children: [
              I.jsx("h1", { children: "Suila Alencar" }),
              I.jsx(_t, {
                options: {
                  strings: ["FOTOGRAFIA", "EDIÇÃO DE IMAGENS"],
                  autoStart: !0,
                  loop: !0,
                  skipAddStyles: !0,
                  wrapperClassName: "typewriter",
                  cursorClassName: "typewriter-cursor",
                },
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
export { Et as default };
