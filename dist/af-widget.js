var wf = Object.defineProperty;
var Af = (r, t, e) => t in r ? wf(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var w = (r, t, e) => (Af(r, typeof t != "symbol" ? t + "" : t, e), e), Ao = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var l = (r, t, e) => (Ao(r, t, "read from private field"), e ? e.call(r) : t.get(r)), b = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, d = (r, t, e, n) => (Ao(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
var vs = (r, t, e, n) => ({
  set _(s) {
    d(r, t, s, e);
  },
  get _() {
    return l(r, t, n);
  }
}), I = (r, t, e) => (Ao(r, t, "access private method"), e);
import fu, { useState as Pi, useEffect as hu } from "react";
var Mo = { exports: {} }, hr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bo, Xa;
function du() {
  if (Xa)
    return bo;
  Xa = 1;
  var r = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bo = s() ? Object.assign : function(i, o) {
    for (var a, c = n(i), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var h in a)
        t.call(a, h) && (c[h] = a[h]);
      if (r) {
        u = r(a);
        for (var g = 0; g < u.length; g++)
          e.call(a, u[g]) && (c[u[g]] = a[u[g]]);
      }
    }
    return c;
  }, bo;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function bf() {
  if (qa)
    return hr;
  qa = 1, du();
  var r = fu, t = 60103;
  if (hr.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var e = Symbol.for;
    t = e("react.element"), hr.Fragment = e("react.fragment");
  }
  var n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, u) {
    var f, h = {}, g = null, A = null;
    u !== void 0 && (g = "" + u), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (A = c.ref);
    for (f in c)
      s.call(c, f) && !i.hasOwnProperty(f) && (h[f] = c[f]);
    if (a && a.defaultProps)
      for (f in c = a.defaultProps, c)
        h[f] === void 0 && (h[f] = c[f]);
    return { $$typeof: t, type: a, key: g, ref: A, props: h, _owner: n.current };
  }
  return hr.jsx = o, hr.jsxs = o, hr;
}
var Eo = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function Ef() {
  return $a || ($a = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var t = fu, e = du(), n = 60103, s = 60106;
      r.Fragment = 60107;
      var i = 60108, o = 60114, a = 60109, c = 60110, u = 60112, f = 60113, h = 60120, g = 60115, A = 60116, E = 60121, m = 60122, v = 60117, x = 60129, B = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var C = Symbol.for;
        n = C("react.element"), s = C("react.portal"), r.Fragment = C("react.fragment"), i = C("react.strict_mode"), o = C("react.profiler"), a = C("react.provider"), c = C("react.context"), u = C("react.forward_ref"), f = C("react.suspense"), h = C("react.suspense_list"), g = C("react.memo"), A = C("react.lazy"), E = C("react.block"), m = C("react.server.block"), v = C("react.fundamental"), C("react.scope"), C("react.opaque.id"), x = C("react.debug_trace_mode"), C("react.offscreen"), B = C("react.legacy_hidden");
      }
      var _ = typeof Symbol == "function" && Symbol.iterator, G = "@@iterator";
      function U(p) {
        if (p === null || typeof p != "object")
          return null;
        var N = _ && p[_] || p[G];
        return typeof N == "function" ? N : null;
      }
      var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function S(p) {
        {
          for (var N = arguments.length, O = new Array(N > 1 ? N - 1 : 0), Q = 1; Q < N; Q++)
            O[Q - 1] = arguments[Q];
          ot("error", p, O);
        }
      }
      function ot(p, N, O) {
        {
          var Q = L.ReactDebugCurrentFrame, $ = Q.getStackAddendum();
          $ !== "" && (N += "%s", O = O.concat([$]));
          var tt = O.map(function(j) {
            return "" + j;
          });
          tt.unshift("Warning: " + N), Function.prototype.apply.call(console[p], console, tt);
        }
      }
      var Y = !1;
      function K(p) {
        return !!(typeof p == "string" || typeof p == "function" || p === r.Fragment || p === o || p === x || p === i || p === f || p === h || p === B || Y || typeof p == "object" && p !== null && (p.$$typeof === A || p.$$typeof === g || p.$$typeof === a || p.$$typeof === c || p.$$typeof === u || p.$$typeof === v || p.$$typeof === E || p[0] === m));
      }
      function Ot(p, N, O) {
        var Q = N.displayName || N.name || "";
        return p.displayName || (Q !== "" ? O + "(" + Q + ")" : O);
      }
      function bt(p) {
        return p.displayName || "Context";
      }
      function ht(p) {
        if (p == null)
          return null;
        if (typeof p.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof p == "function")
          return p.displayName || p.name || null;
        if (typeof p == "string")
          return p;
        switch (p) {
          case r.Fragment:
            return "Fragment";
          case s:
            return "Portal";
          case o:
            return "Profiler";
          case i:
            return "StrictMode";
          case f:
            return "Suspense";
          case h:
            return "SuspenseList";
        }
        if (typeof p == "object")
          switch (p.$$typeof) {
            case c:
              var N = p;
              return bt(N) + ".Consumer";
            case a:
              var O = p;
              return bt(O._context) + ".Provider";
            case u:
              return Ot(p, p.render, "ForwardRef");
            case g:
              return ht(p.type);
            case E:
              return ht(p._render);
            case A: {
              var Q = p, $ = Q._payload, tt = Q._init;
              try {
                return ht(tt($));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var T = 0, k, H, q, Z, ct, Et, vt;
      function oe() {
      }
      oe.__reactDisabledLog = !0;
      function Ae() {
        {
          if (T === 0) {
            k = console.log, H = console.info, q = console.warn, Z = console.error, ct = console.group, Et = console.groupCollapsed, vt = console.groupEnd;
            var p = {
              configurable: !0,
              enumerable: !0,
              value: oe,
              writable: !0
            };
            Object.defineProperties(console, {
              info: p,
              log: p,
              warn: p,
              error: p,
              group: p,
              groupCollapsed: p,
              groupEnd: p
            });
          }
          T++;
        }
      }
      function rn() {
        {
          if (T--, T === 0) {
            var p = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: e({}, p, {
                value: k
              }),
              info: e({}, p, {
                value: H
              }),
              warn: e({}, p, {
                value: q
              }),
              error: e({}, p, {
                value: Z
              }),
              group: e({}, p, {
                value: ct
              }),
              groupCollapsed: e({}, p, {
                value: Et
              }),
              groupEnd: e({}, p, {
                value: vt
              })
            });
          }
          T < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Be = L.ReactCurrentDispatcher, Wt;
      function sn(p, N, O) {
        {
          if (Wt === void 0)
            try {
              throw Error();
            } catch ($) {
              var Q = $.stack.trim().match(/\n( *(at )?)/);
              Wt = Q && Q[1] || "";
            }
          return `
` + Wt + p;
        }
      }
      var ae = !1, ce;
      {
        var hi = typeof WeakMap == "function" ? WeakMap : Map;
        ce = new hi();
      }
      function Re(p, N) {
        if (!p || ae)
          return "";
        {
          var O = ce.get(p);
          if (O !== void 0)
            return O;
        }
        var Q;
        ae = !0;
        var $ = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var tt;
        tt = Be.current, Be.current = null, Ae();
        try {
          if (N) {
            var j = function() {
              throw Error();
            };
            if (Object.defineProperty(j.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(j, []);
              } catch (Se) {
                Q = Se;
              }
              Reflect.construct(p, [], j);
            } else {
              try {
                j.call();
              } catch (Se) {
                Q = Se;
              }
              p.call(j.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Se) {
              Q = Se;
            }
            p();
          }
        } catch (Se) {
          if (Se && Q && typeof Se.stack == "string") {
            for (var J = Se.stack.split(`
`), It = Q.stack.split(`
`), ut = J.length - 1, ft = It.length - 1; ut >= 1 && ft >= 0 && J[ut] !== It[ft]; )
              ft--;
            for (; ut >= 1 && ft >= 0; ut--, ft--)
              if (J[ut] !== It[ft]) {
                if (ut !== 1 || ft !== 1)
                  do
                    if (ut--, ft--, ft < 0 || J[ut] !== It[ft]) {
                      var ke = `
` + J[ut].replace(" at new ", " at ");
                      return typeof p == "function" && ce.set(p, ke), ke;
                    }
                  while (ut >= 1 && ft >= 0);
                break;
              }
          }
        } finally {
          ae = !1, Be.current = tt, rn(), Error.prepareStackTrace = $;
        }
        var fr = p ? p.displayName || p.name : "", Za = fr ? sn(fr) : "";
        return typeof p == "function" && ce.set(p, Za), Za;
      }
      function Dt(p, N, O) {
        return Re(p, !1);
      }
      function on(p) {
        var N = p.prototype;
        return !!(N && N.isReactComponent);
      }
      function Rn(p, N, O) {
        if (p == null)
          return "";
        if (typeof p == "function")
          return Re(p, on(p));
        if (typeof p == "string")
          return sn(p);
        switch (p) {
          case f:
            return sn("Suspense");
          case h:
            return sn("SuspenseList");
        }
        if (typeof p == "object")
          switch (p.$$typeof) {
            case u:
              return Dt(p.render);
            case g:
              return Rn(p.type, N, O);
            case E:
              return Dt(p._render);
            case A: {
              var Q = p, $ = Q._payload, tt = Q._init;
              try {
                return Rn(tt($), N, O);
              } catch {
              }
            }
          }
        return "";
      }
      var bs = {}, Ha = L.ReactDebugCurrentFrame;
      function di(p) {
        if (p) {
          var N = p._owner, O = Rn(p.type, p._source, N ? N.type : null);
          Ha.setExtraStackFrame(O);
        } else
          Ha.setExtraStackFrame(null);
      }
      function tf(p, N, O, Q, $) {
        {
          var tt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var j in p)
            if (tt(p, j)) {
              var J = void 0;
              try {
                if (typeof p[j] != "function") {
                  var It = Error((Q || "React class") + ": " + O + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw It.name = "Invariant Violation", It;
                }
                J = p[j](N, j, Q, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ut) {
                J = ut;
              }
              J && !(J instanceof Error) && (di($), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", O, j, typeof J), di(null)), J instanceof Error && !(J.message in bs) && (bs[J.message] = !0, di($), S("Failed %s type: %s", O, J.message), di(null));
            }
        }
      }
      var Es = L.ReactCurrentOwner, po = Object.prototype.hasOwnProperty, ef = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, _a, Va, go;
      go = {};
      function nf(p) {
        if (po.call(p, "ref")) {
          var N = Object.getOwnPropertyDescriptor(p, "ref").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return p.ref !== void 0;
      }
      function rf(p) {
        if (po.call(p, "key")) {
          var N = Object.getOwnPropertyDescriptor(p, "key").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return p.key !== void 0;
      }
      function sf(p, N) {
        if (typeof p.ref == "string" && Es.current && N && Es.current.stateNode !== N) {
          var O = ht(Es.current.type);
          go[O] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ht(Es.current.type), p.ref), go[O] = !0);
        }
      }
      function of(p, N) {
        {
          var O = function() {
            _a || (_a = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
          };
          O.isReactWarning = !0, Object.defineProperty(p, "key", {
            get: O,
            configurable: !0
          });
        }
      }
      function af(p, N) {
        {
          var O = function() {
            Va || (Va = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
          };
          O.isReactWarning = !0, Object.defineProperty(p, "ref", {
            get: O,
            configurable: !0
          });
        }
      }
      var cf = function(p, N, O, Q, $, tt, j) {
        var J = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: p,
          key: N,
          ref: O,
          props: j,
          // Record the component responsible for creating this element.
          _owner: tt
        };
        return J._store = {}, Object.defineProperty(J._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(J, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q
        }), Object.defineProperty(J, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
      };
      function uf(p, N, O, Q, $) {
        {
          var tt, j = {}, J = null, It = null;
          O !== void 0 && (J = "" + O), rf(N) && (J = "" + N.key), nf(N) && (It = N.ref, sf(N, $));
          for (tt in N)
            po.call(N, tt) && !ef.hasOwnProperty(tt) && (j[tt] = N[tt]);
          if (p && p.defaultProps) {
            var ut = p.defaultProps;
            for (tt in ut)
              j[tt] === void 0 && (j[tt] = ut[tt]);
          }
          if (J || It) {
            var ft = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
            J && of(j, ft), It && af(j, ft);
          }
          return cf(p, J, It, $, Q, Es.current, j);
        }
      }
      var yo = L.ReactCurrentOwner, Ja = L.ReactDebugCurrentFrame;
      function lr(p) {
        if (p) {
          var N = p._owner, O = Rn(p.type, p._source, N ? N.type : null);
          Ja.setExtraStackFrame(O);
        } else
          Ja.setExtraStackFrame(null);
      }
      var mo;
      mo = !1;
      function wo(p) {
        return typeof p == "object" && p !== null && p.$$typeof === n;
      }
      function ja() {
        {
          if (yo.current) {
            var p = ht(yo.current.type);
            if (p)
              return `

Check the render method of \`` + p + "`.";
          }
          return "";
        }
      }
      function lf(p) {
        {
          if (p !== void 0) {
            var N = p.fileName.replace(/^.*[\\\/]/, ""), O = p.lineNumber;
            return `

Check your code at ` + N + ":" + O + ".";
          }
          return "";
        }
      }
      var za = {};
      function ff(p) {
        {
          var N = ja();
          if (!N) {
            var O = typeof p == "string" ? p : p.displayName || p.name;
            O && (N = `

Check the top-level render call using <` + O + ">.");
          }
          return N;
        }
      }
      function Ka(p, N) {
        {
          if (!p._store || p._store.validated || p.key != null)
            return;
          p._store.validated = !0;
          var O = ff(N);
          if (za[O])
            return;
          za[O] = !0;
          var Q = "";
          p && p._owner && p._owner !== yo.current && (Q = " It was passed a child from " + ht(p._owner.type) + "."), lr(p), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, Q), lr(null);
        }
      }
      function Wa(p, N) {
        {
          if (typeof p != "object")
            return;
          if (Array.isArray(p))
            for (var O = 0; O < p.length; O++) {
              var Q = p[O];
              wo(Q) && Ka(Q, N);
            }
          else if (wo(p))
            p._store && (p._store.validated = !0);
          else if (p) {
            var $ = U(p);
            if (typeof $ == "function" && $ !== p.entries)
              for (var tt = $.call(p), j; !(j = tt.next()).done; )
                wo(j.value) && Ka(j.value, N);
          }
        }
      }
      function hf(p) {
        {
          var N = p.type;
          if (N == null || typeof N == "string")
            return;
          var O;
          if (typeof N == "function")
            O = N.propTypes;
          else if (typeof N == "object" && (N.$$typeof === u || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          N.$$typeof === g))
            O = N.propTypes;
          else
            return;
          if (O) {
            var Q = ht(N);
            tf(O, p.props, "prop", Q, p);
          } else if (N.PropTypes !== void 0 && !mo) {
            mo = !0;
            var $ = ht(N);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
          }
          typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function df(p) {
        {
          for (var N = Object.keys(p.props), O = 0; O < N.length; O++) {
            var Q = N[O];
            if (Q !== "children" && Q !== "key") {
              lr(p), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), lr(null);
              break;
            }
          }
          p.ref !== null && (lr(p), S("Invalid attribute `ref` supplied to `React.Fragment`."), lr(null));
        }
      }
      function Ya(p, N, O, Q, $, tt) {
        {
          var j = K(p);
          if (!j) {
            var J = "";
            (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var It = lf($);
            It ? J += It : J += ja();
            var ut;
            p === null ? ut = "null" : Array.isArray(p) ? ut = "array" : p !== void 0 && p.$$typeof === n ? (ut = "<" + (ht(p.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ut = typeof p, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ut, J);
          }
          var ft = uf(p, N, O, $, tt);
          if (ft == null)
            return ft;
          if (j) {
            var ke = N.children;
            if (ke !== void 0)
              if (Q)
                if (Array.isArray(ke)) {
                  for (var fr = 0; fr < ke.length; fr++)
                    Wa(ke[fr], p);
                  Object.freeze && Object.freeze(ke);
                } else
                  S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Wa(ke, p);
          }
          return p === r.Fragment ? df(ft) : hf(ft), ft;
        }
      }
      function pf(p, N, O) {
        return Ya(p, N, O, !0);
      }
      function gf(p, N, O) {
        return Ya(p, N, O, !1);
      }
      var yf = gf, mf = pf;
      r.jsx = yf, r.jsxs = mf;
    }();
  }(Eo)), Eo;
}
process.env.NODE_ENV === "production" ? Mo.exports = bf() : Mo.exports = Ef();
var et = Mo.exports;
const vf = "6.8.0";
function xf(r, t, e) {
  const n = t.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (t) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === t)
          return;
    }
  const s = new Error(`invalid value for type ${t}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${e}`, s.value = r, s;
}
async function Bt(r) {
  const t = Object.keys(r);
  return (await Promise.all(t.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[t[i]] = s, n), {});
}
function M(r, t, e) {
  for (let n in t) {
    let s = t[n];
    const i = e ? e[n] : null;
    i && xf(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function Ar(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(Ar).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const t = "0123456789abcdef";
    let e = "0x";
    for (let n = 0; n < r.length; n++)
      e += t[r[n] >> 4], e += t[r[n] & 15];
    return e;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return Ar(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
      return BigInt(r).toString();
    case "number":
      return r.toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const t = Object.keys(r);
      return t.sort(), "{ " + t.map((e) => `${Ar(e)}: ${Ar(r[e])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function se(r, t) {
  return r && r.code === t;
}
function ma(r) {
  return se(r, "CALL_EXCEPTION");
}
function dt(r, t, e) {
  let n = r;
  {
    const i = [];
    if (e) {
      if ("message" in e || "code" in e || "name" in e)
        throw new Error(`value will overwrite populated values: ${Ar(e)}`);
      for (const o in e) {
        if (o === "shortMessage")
          continue;
        const a = e[o];
        i.push(o + "=" + Ar(a));
      }
    }
    i.push(`code=${t}`), i.push(`version=${vf}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (t) {
    case "INVALID_ARGUMENT":
      s = new TypeError(r);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(r);
      break;
    default:
      s = new Error(r);
  }
  return M(s, { code: t }), e && Object.assign(s, e), s.shortMessage == null && M(s, { shortMessage: n }), s;
}
function P(r, t, e, n) {
  if (!r)
    throw dt(t, e, n);
}
function y(r, t, e, n) {
  P(r, t, "INVALID_ARGUMENT", { argument: e, value: n });
}
function pu(r, t, e) {
  e == null && (e = ""), e && (e = ": " + e), P(r >= t, "missing arguemnt" + e, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: t
  }), P(r <= t, "too many arguemnts" + e, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: t
  });
}
const Pf = ["NFD", "NFC", "NFKD", "NFKC"].reduce((r, t) => {
  try {
    if ("test".normalize(t) !== "test")
      throw new Error("bad");
    if (t === "NFD") {
      const e = String.fromCharCode(233).normalize("NFD"), n = String.fromCharCode(101, 769);
      if (e !== n)
        throw new Error("broken");
    }
    r.push(t);
  } catch {
  }
  return r;
}, []);
function Nf(r) {
  P(Pf.indexOf(r) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
    operation: "String.prototype.normalize",
    info: { form: r }
  });
}
function $i(r, t, e) {
  if (e == null && (e = ""), r !== t) {
    let n = e, s = "new";
    e && (n += ".", s += " " + e), P(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function gu(r, t, e) {
  if (r instanceof Uint8Array)
    return e ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  y(!1, "invalid BytesLike value", t || "value", r);
}
function X(r, t) {
  return gu(r, t, !1);
}
function Ht(r, t) {
  return gu(r, t, !0);
}
function it(r, t) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && r.length !== 2 + 2 * t || t === !0 && r.length % 2 !== 0);
}
function Tf(r) {
  return it(r, !0) || r instanceof Uint8Array;
}
const tc = "0123456789abcdef";
function D(r) {
  const t = X(r);
  let e = "0x";
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    e += tc[(s & 240) >> 4] + tc[s & 15];
  }
  return e;
}
function pt(r) {
  return "0x" + r.map((t) => D(t).substring(2)).join("");
}
function Tr(r) {
  return it(r, !0) ? (r.length - 2) / 2 : X(r).length;
}
function at(r, t, e) {
  const n = X(r);
  return e != null && e > n.length && P(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: e
  }), D(n.slice(t ?? 0, e ?? n.length));
}
function yu(r, t, e) {
  const n = X(r);
  P(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: t,
    offset: t + 1
  });
  const s = new Uint8Array(t);
  return s.fill(0), e ? s.set(n, t - n.length) : s.set(n, 0), D(s);
}
function sr(r, t) {
  return yu(r, t, !0);
}
function Cf(r, t) {
  return yu(r, t, !1);
}
const to = BigInt(0), ge = BigInt(1), br = 9007199254740991;
function Of(r, t) {
  const e = eo(r, "value"), n = BigInt(V(t, "width"));
  if (P(e >> n === to, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), e >> n - ge) {
    const s = (ge << n) - ge;
    return -((~e & s) + ge);
  }
  return e;
}
function mu(r, t) {
  let e = F(r, "value");
  const n = BigInt(V(t, "width")), s = ge << n - ge;
  if (e < to) {
    e = -e, P(e <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (ge << n) - ge;
    return (~e & i) + ge;
  } else
    P(e < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return e;
}
function Ns(r, t) {
  const e = eo(r, "value"), n = BigInt(V(t, "bits"));
  return e & (ge << n) - ge;
}
function F(r, t) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return y(Number.isInteger(r), "underflow", t || "value", r), y(r >= -br && r <= br, "overflow", t || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (e) {
        y(!1, `invalid BigNumberish string: ${e.message}`, t || "value", r);
      }
  }
  y(!1, "invalid BigNumberish value", t || "value", r);
}
function eo(r, t) {
  const e = F(r, t);
  return P(e >= to, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), e;
}
const ec = "0123456789abcdef";
function wa(r) {
  if (r instanceof Uint8Array) {
    let t = "0x0";
    for (const e of r)
      t += ec[e >> 4], t += ec[e & 15];
    return BigInt(t);
  }
  return F(r);
}
function V(r, t) {
  switch (typeof r) {
    case "bigint":
      return y(r >= -br && r <= br, "overflow", t || "value", r), Number(r);
    case "number":
      return y(Number.isInteger(r), "underflow", t || "value", r), y(r >= -br && r <= br, "overflow", t || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return V(BigInt(r), t);
      } catch (e) {
        y(!1, `invalid numeric string: ${e.message}`, t || "value", r);
      }
  }
  y(!1, "invalid numeric value", t || "value", r);
}
function If(r) {
  return V(wa(r));
}
function On(r, t) {
  let n = eo(r, "value").toString(16);
  if (t == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = V(t, "width");
    for (P(s * 2 >= n.length, `value exceeds width (${s} bits)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function Kt(r) {
  const t = eo(r, "value");
  if (t === to)
    return new Uint8Array([]);
  let e = t.toString(16);
  e.length % 2 && (e = "0" + e);
  const n = new Uint8Array(e.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(e.substring(i, i + 2), 16);
  }
  return n;
}
function Er(r) {
  let t = D(Tf(r) ? r : Kt(r)).substring(2);
  for (; t.startsWith("0"); )
    t = t.substring(1);
  return t === "" && (t = "0"), "0x" + t;
}
const Bf = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const nc = BigInt(58);
function Rf(r) {
  let t = wa(X(r)), e = "";
  for (; t; )
    e = Bf[Number(t % nc)] + e, t /= nc;
  return e;
}
function kf(r) {
  r = atob(r);
  const t = new Uint8Array(r.length);
  for (let e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return X(t);
}
function Sf(r) {
  const t = X(r);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += String.fromCharCode(t[n]);
  return btoa(e);
}
var Or;
class wu {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(t, e, n) {
    /**
     *  The event filter.
     */
    w(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    w(this, "emitter");
    b(this, Or, void 0);
    d(this, Or, e), M(this, { emitter: t, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    l(this, Or) != null && await this.emitter.off(this.filter, l(this, Or));
  }
}
Or = new WeakMap();
function Uf(r, t, e, n, s) {
  y(!1, `invalid codepoint at offset ${t}; ${r}`, "bytes", e);
}
function Au(r, t, e, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = t + 1; o < e.length && e[o] >> 6 === 2; o++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? e.length - t - 1 : 0;
}
function Df(r, t, e, n, s) {
  return r === "OVERLONG" ? (y(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Au(r, t, e));
}
const Ff = Object.freeze({
  error: Uf,
  ignore: Au,
  replace: Df
});
function Lf(r, t) {
  t == null && (t = Ff.error);
  const e = X(r, "bytes"), n = [];
  let s = 0;
  for (; s < e.length; ) {
    const i = e[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let o = null, a = null;
    if ((i & 224) === 192)
      o = 1, a = 127;
    else if ((i & 240) === 224)
      o = 2, a = 2047;
    else if ((i & 248) === 240)
      o = 3, a = 65535;
    else {
      (i & 192) === 128 ? s += t("UNEXPECTED_CONTINUE", s - 1, e, n) : s += t("BAD_PREFIX", s - 1, e, n);
      continue;
    }
    if (s - 1 + o >= e.length) {
      s += t("OVERRUN", s - 1, e, n);
      continue;
    }
    let c = i & (1 << 8 - o - 1) - 1;
    for (let u = 0; u < o; u++) {
      let f = e[s];
      if ((f & 192) != 128) {
        s += t("MISSING_CONTINUE", s, e, n), c = null;
        break;
      }
      c = c << 6 | f & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += t("OUT_OF_RANGE", s - 1 - o, e, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += t("UTF16_SURROGATE", s - 1 - o, e, n, c);
        continue;
      }
      if (c <= a) {
        s += t("OVERLONG", s - 1 - o, e, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function $e(r, t) {
  t != null && (Nf(t), r = r.normalize(t));
  let e = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      e.push(s);
    else if (s < 2048)
      e.push(s >> 6 | 192), e.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      y(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const o = 65536 + ((s & 1023) << 10) + (i & 1023);
      e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
    } else
      e.push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128);
  }
  return new Uint8Array(e);
}
function Mf(r) {
  return r.map((t) => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10 & 1023) + 55296, (t & 1023) + 56320))).join("");
}
function Aa(r, t) {
  return Mf(Lf(r, t));
}
function bu(r) {
  async function t(e, n) {
    const s = e.url.split(":")[0].toLowerCase();
    P(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
      info: { protocol: s },
      operation: "request"
    }), P(s === "https" || !e.credentials || e.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
      operation: "request"
    });
    let i;
    if (n) {
      const h = new AbortController();
      i = h.signal, n.addListener(() => {
        h.abort();
      });
    }
    const o = {
      method: e.method,
      headers: new Headers(Array.from(e)),
      body: e.body || void 0,
      signal: i
    }, a = await fetch(e.url, o), c = {};
    a.headers.forEach((h, g) => {
      c[g.toLowerCase()] = h;
    });
    const u = await a.arrayBuffer(), f = u == null ? null : new Uint8Array(u);
    return {
      statusCode: a.status,
      statusMessage: a.statusText,
      headers: c,
      body: f
    };
  }
  return t;
}
const Gf = 12, Qf = 250;
let rc = bu();
const Hf = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), _f = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let vo = !1;
async function Eu(r, t) {
  try {
    const e = r.match(Hf);
    if (!e)
      throw new Error("invalid data");
    return new Tn(200, "OK", {
      "content-type": e[1] || "text/plain"
    }, e[2] ? kf(e[3]) : Jf(e[3]));
  } catch {
    return new Tn(599, "BAD REQUEST (invalid data: URI)", {}, null, new In(r));
  }
}
function vu(r) {
  async function t(e, n) {
    try {
      const s = e.match(_f);
      if (!s)
        throw new Error("invalid link");
      return new In(`${r}${s[2]}`);
    } catch {
      return new Tn(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new In(e));
    }
  }
  return t;
}
const pi = {
  data: Eu,
  ipfs: vu("https://gateway.ipfs.io/ipfs/")
}, xu = /* @__PURE__ */ new WeakMap();
var Ln, fn;
class Vf {
  constructor(t) {
    b(this, Ln, void 0);
    b(this, fn, void 0);
    d(this, Ln, []), d(this, fn, !1), xu.set(t, () => {
      if (!l(this, fn)) {
        d(this, fn, !0);
        for (const e of l(this, Ln))
          setTimeout(() => {
            e();
          }, 0);
        d(this, Ln, []);
      }
    });
  }
  addListener(t) {
    P(!l(this, fn), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), l(this, Ln).push(t);
  }
  get cancelled() {
    return l(this, fn);
  }
  checkSignal() {
    P(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
Ln = new WeakMap(), fn = new WeakMap();
function gi(r) {
  if (r == null)
    throw new Error("missing signal; should not happen");
  return r.checkSignal(), r;
}
var Ir, Br, fe, Le, Rr, kr, gt, Jt, Me, Mn, Gn, Qn, Ee, Ge, hn, Hn, Ts;
const ji = class ji {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(t) {
    b(this, Hn);
    b(this, Ir, void 0);
    b(this, Br, void 0);
    b(this, fe, void 0);
    b(this, Le, void 0);
    b(this, Rr, void 0);
    b(this, kr, void 0);
    b(this, gt, void 0);
    b(this, Jt, void 0);
    b(this, Me, void 0);
    // Hooks
    b(this, Mn, void 0);
    b(this, Gn, void 0);
    b(this, Qn, void 0);
    b(this, Ee, void 0);
    b(this, Ge, void 0);
    b(this, hn, void 0);
    d(this, kr, String(t)), d(this, Ir, !1), d(this, Br, !0), d(this, fe, {}), d(this, Le, ""), d(this, Rr, 3e5), d(this, Ge, {
      slotInterval: Qf,
      maxAttempts: Gf
    }), d(this, hn, null);
  }
  /**
   *  The fetch URI to requrest.
   */
  get url() {
    return l(this, kr);
  }
  set url(t) {
    d(this, kr, String(t));
  }
  /**
   *  The fetch body, if any, to send as the request body. //(default: null)//
   *
   *  When setting a body, the intrinsic ``Content-Type`` is automatically
   *  set and will be used if **not overridden** by setting a custom
   *  header.
   *
   *  If %%body%% is null, the body is cleared (along with the
   *  intrinsic ``Content-Type``) and the .
   *
   *  If %%body%% is a string, the intrincis ``Content-Type`` is set to
   *  ``text/plain``.
   *
   *  If %%body%% is a Uint8Array, the intrincis ``Content-Type`` is set to
   *  ``application/octet-stream``.
   *
   *  If %%body%% is any other object, the intrincis ``Content-Type`` is
   *  set to ``application/json``.
   */
  get body() {
    return l(this, gt) == null ? null : new Uint8Array(l(this, gt));
  }
  set body(t) {
    if (t == null)
      d(this, gt, void 0), d(this, Jt, void 0);
    else if (typeof t == "string")
      d(this, gt, $e(t)), d(this, Jt, "text/plain");
    else if (t instanceof Uint8Array)
      d(this, gt, t), d(this, Jt, "application/octet-stream");
    else if (typeof t == "object")
      d(this, gt, $e(JSON.stringify(t))), d(this, Jt, "application/json");
    else
      throw new Error("invalid body");
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return l(this, gt) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    return l(this, Le) ? l(this, Le) : this.hasBody() ? "POST" : "GET";
  }
  set method(t) {
    t == null && (t = ""), d(this, Le, String(t).toUpperCase());
  }
  /**
   *  The headers that will be used when requesting the URI. All
   *  keys are lower-case.
   *
   *  This object is a copy, so any chnages will **NOT** be reflected
   *  in the ``FetchRequest``.
   *
   *  To set a header entry, use the ``setHeader`` method.
   */
  get headers() {
    const t = Object.assign({}, l(this, fe));
    return l(this, Me) && (t.authorization = `Basic ${Sf($e(l(this, Me)))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), t["content-type"] == null && l(this, Jt) && (t["content-type"] = l(this, Jt)), this.body && (t["content-length"] = String(this.body.length)), t;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(t, e) {
    l(this, fe)[String(t).toLowerCase()] = String(e);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    d(this, fe, {});
  }
  [Symbol.iterator]() {
    const t = this.headers, e = Object.keys(t);
    let n = 0;
    return {
      next: () => {
        if (n < e.length) {
          const s = e[n++];
          return {
            value: [s, t[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  The value that will be sent for the ``Authorization`` header.
   *
   *  To set the credentials, use the ``setCredentials`` method.
   */
  get credentials() {
    return l(this, Me) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(t, e) {
    y(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), d(this, Me, `${t}:${e}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return l(this, Br);
  }
  set allowGzip(t) {
    d(this, Br, !!t);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!l(this, Ir);
  }
  set allowInsecureAuthentication(t) {
    d(this, Ir, !!t);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complere response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return l(this, Rr);
  }
  set timeout(t) {
    y(t >= 0, "timeout must be non-zero", "timeout", t), d(this, Rr, t);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return l(this, Mn) || null;
  }
  set preflightFunc(t) {
    d(this, Mn, t);
  }
  /**
   *  This function is called after each response, offering an
   *  opportunity to provide client-level throttling or updating
   *  response data.
   *
   *  Any error thrown in this causes the ``send()`` to throw.
   *
   *  To schedule a retry attempt (assuming the maximum retry limit
   *  has not been reached), use [[response.throwThrottleError]].
   */
  get processFunc() {
    return l(this, Gn) || null;
  }
  set processFunc(t) {
    d(this, Gn, t);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return l(this, Qn) || null;
  }
  set retryFunc(t) {
    d(this, Qn, t);
  }
  /**
   *  This function is called to fetch content from HTTP and
   *  HTTPS URLs and is platform specific (e.g. nodejs vs
   *  browsers).
   *
   *  This is by default the currently registered global getUrl
   *  function, which can be changed using [[registerGetUrl]].
   *  If this has been set, setting is to ``null`` will cause
   *  this FetchRequest (and any future clones) to revert back to
   *  using the currently registered global getUrl function.
   *
   *  Setting this is generally not necessary, but may be useful
   *  for developers that wish to intercept requests or to
   *  configurege a proxy or other agent.
   */
  get getUrlFunc() {
    return l(this, hn) || rc;
  }
  set getUrlFunc(t) {
    d(this, hn, t);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${l(this, gt) ? D(l(this, gt)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(t) {
    t.slotInterval != null && (l(this, Ge).slotInterval = t.slotInterval), t.maxAttempts != null && (l(this, Ge).maxAttempts = t.maxAttempts);
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    return P(l(this, Ee) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), d(this, Ee, new Vf(this)), I(this, Hn, Ts).call(this, 0, sc() + this.timeout, 0, this, new Tn(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    P(l(this, Ee) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const t = xu.get(this);
    if (!t)
      throw new Error("missing signal; should not happen");
    t();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(t) {
    const e = this.url.split(":")[0].toLowerCase(), n = t.split(":")[0].toLowerCase();
    P(this.method === "GET" && (e !== "https" || n !== "http") && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
    });
    const s = new ji(t);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, d(s, fe, Object.assign({}, l(this, fe))), l(this, gt) && d(s, gt, new Uint8Array(l(this, gt))), d(s, Jt, l(this, Jt)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const t = new ji(this.url);
    return d(t, Le, l(this, Le)), l(this, gt) && d(t, gt, l(this, gt)), d(t, Jt, l(this, Jt)), d(t, fe, Object.assign({}, l(this, fe))), d(t, Me, l(this, Me)), this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), d(t, Mn, l(this, Mn)), d(t, Gn, l(this, Gn)), d(t, Qn, l(this, Qn)), d(t, hn, l(this, hn)), t;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    vo = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(t) {
    return pi[t.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(t, e) {
    if (t = t.toLowerCase(), t === "http" || t === "https")
      throw new Error(`cannot intercept ${t}; use registerGetUrl`);
    if (vo)
      throw new Error("gateways locked");
    pi[t] = e;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(t) {
    if (vo)
      throw new Error("gateways locked");
    rc = t;
  }
  /**
   *  Creates a getUrl function that fetches content from HTTP and
   *  HTTPS URLs.
   *
   *  The available %%options%% are dependent on the platform
   *  implementation of the default getUrl function.
   *
   *  This is not generally something that is needed, but is useful
   *  when trying to customize simple behaviour when fetching HTTP
   *  content.
   */
  static createGetUrlFunc(t) {
    return bu();
  }
  /**
   *  Creates a function that can "fetch" data URIs.
   *
   *  Note that this is automatically done internally to support
   *  data URIs, so it is not necessary to register it.
   *
   *  This is not generally something that is needed, but may
   *  be useful in a wrapper to perfom custom data URI functionality.
   */
  static createDataGateway() {
    return Eu;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(t) {
    return vu(t);
  }
};
Ir = new WeakMap(), Br = new WeakMap(), fe = new WeakMap(), Le = new WeakMap(), Rr = new WeakMap(), kr = new WeakMap(), gt = new WeakMap(), Jt = new WeakMap(), Me = new WeakMap(), Mn = new WeakMap(), Gn = new WeakMap(), Qn = new WeakMap(), Ee = new WeakMap(), Ge = new WeakMap(), hn = new WeakMap(), Hn = new WeakSet(), Ts = async function(t, e, n, s, i) {
  var f, h, g;
  if (t >= l(this, Ge).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  P(sc() <= e, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await jf(n);
  let o = this.clone();
  const a = (o.url.split(":")[0] || "").toLowerCase();
  if (a in pi) {
    const A = await pi[a](o.url, gi(l(s, Ee)));
    if (A instanceof Tn) {
      let E = A;
      if (this.processFunc) {
        gi(l(s, Ee));
        try {
          E = await this.processFunc(o, E);
        } catch (m) {
          (m.throttle == null || typeof m.stall != "number") && E.makeServerError("error in post-processing function", m).assertOk();
        }
      }
      return E;
    }
    o = A;
  }
  this.preflightFunc && (o = await this.preflightFunc(o));
  const c = await this.getUrlFunc(o, gi(l(s, Ee)));
  let u = new Tn(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (u.statusCode === 301 || u.statusCode === 302) {
    try {
      const A = u.headers.location || "";
      return I(f = o.redirect(A), Hn, Ts).call(f, t + 1, e, 0, s, u);
    } catch {
    }
    return u;
  } else if (u.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, u, t))) {
    const A = u.headers["retry-after"];
    let E = l(this, Ge).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
    return typeof A == "string" && A.match(/^[1-9][0-9]*$/) && (E = parseInt(A)), I(h = o.clone(), Hn, Ts).call(h, t + 1, e, E, s, u);
  }
  if (this.processFunc) {
    gi(l(s, Ee));
    try {
      u = await this.processFunc(o, u);
    } catch (A) {
      (A.throttle == null || typeof A.stall != "number") && u.makeServerError("error in post-processing function", A).assertOk();
      let E = l(this, Ge).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
      return A.stall >= 0 && (E = A.stall), I(g = o.clone(), Hn, Ts).call(g, t + 1, e, E, s, u);
    }
  }
  return u;
};
let In = ji;
var js, zs, Ks, he, Sr, _n;
const Ma = class Ma {
  constructor(t, e, n, s, i) {
    b(this, js, void 0);
    b(this, zs, void 0);
    b(this, Ks, void 0);
    b(this, he, void 0);
    b(this, Sr, void 0);
    b(this, _n, void 0);
    d(this, js, t), d(this, zs, e), d(this, Ks, Object.keys(n).reduce((o, a) => (o[a.toLowerCase()] = String(n[a]), o), {})), d(this, he, s == null ? null : new Uint8Array(s)), d(this, Sr, i || null), d(this, _n, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${l(this, he) ? D(l(this, he)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return l(this, js);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return l(this, zs);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, l(this, Ks));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return l(this, he) == null ? null : new Uint8Array(l(this, he));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return l(this, he) == null ? "" : Aa(l(this, he));
    } catch {
      P(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  /**
   *  The response body, decoded as JSON.
   *
   *  An error is thrown if the body is invalid JSON-encoded data
   *  or if there was no body.
   */
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch {
      P(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const t = this.headers, e = Object.keys(t);
    let n = 0;
    return {
      next: () => {
        if (n < e.length) {
          const s = e[n++];
          return {
            value: [s, t[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  Return a Response with matching headers and body, but with
   *  an error status code (i.e. 599) and %%message%% with an
   *  optional %%error%%.
   */
  makeServerError(t, e) {
    let n;
    t ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : (t = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${t})`);
    const s = new Ma(599, n, this.headers, this.body, l(this, Sr) || void 0);
    return d(s, _n, { message: t, error: e }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(t, e) {
    e == null ? e = -1 : y(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
    const n = new Error(t || "throttling requests");
    throw M(n, { stall: e, throttle: !0 }), n;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  /**
   *  Returns true of the response has a body.
   */
  hasBody() {
    return l(this, he) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return l(this, Sr);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return l(this, _n).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok())
      return;
    let { message: t, error: e } = l(this, _n);
    t === "" && (t = `server response ${this.statusCode} ${this.statusMessage}`), P(!1, t, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: e
    });
  }
};
js = new WeakMap(), zs = new WeakMap(), Ks = new WeakMap(), he = new WeakMap(), Sr = new WeakMap(), _n = new WeakMap();
let Tn = Ma;
function sc() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Jf(r) {
  return $e(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
}
function jf(r) {
  return new Promise((t) => setTimeout(t, r));
}
function zf(r) {
  let t = r.toString(16);
  for (; t.length < 2; )
    t = "0" + t;
  return "0x" + t;
}
function ic(r, t, e) {
  let n = 0;
  for (let s = 0; s < e; s++)
    n = n * 256 + r[t + s];
  return n;
}
function oc(r, t, e, n) {
  const s = [];
  for (; e < t + 1 + n; ) {
    const i = Pu(r, e);
    s.push(i.result), e += i.consumed, P(e <= t + 1 + n, "child data too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: n,
      offset: t
    });
  }
  return { consumed: 1 + n, result: s };
}
function Pu(r, t) {
  P(r.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: r,
    length: 0,
    offset: 1
  });
  const e = (n) => {
    P(n <= r.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: r.length,
      offset: n
    });
  };
  if (r[t] >= 248) {
    const n = r[t] - 247;
    e(t + 1 + n);
    const s = ic(r, t + 1, n);
    return e(t + 1 + n + s), oc(r, t, t + 1 + n, n + s);
  } else if (r[t] >= 192) {
    const n = r[t] - 192;
    return e(t + 1 + n), oc(r, t, t + 1, n);
  } else if (r[t] >= 184) {
    const n = r[t] - 183;
    e(t + 1 + n);
    const s = ic(r, t + 1, n);
    e(t + 1 + n + s);
    const i = D(r.slice(t + 1 + n, t + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (r[t] >= 128) {
    const n = r[t] - 128;
    e(t + 1 + n);
    const s = D(r.slice(t + 1, t + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: zf(r[t]) };
}
function ba(r) {
  const t = X(r, "data"), e = Pu(t, 0);
  return y(e.consumed === t.length, "unexpected junk after rlp payload", "data", r), e.result;
}
function ac(r) {
  const t = [];
  for (; r; )
    t.unshift(r & 255), r >>= 8;
  return t;
}
function Nu(r) {
  if (Array.isArray(r)) {
    let n = [];
    if (r.forEach(function(i) {
      n = n.concat(Nu(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = ac(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const t = Array.prototype.slice.call(X(r, "object"));
  if (t.length === 1 && t[0] <= 127)
    return t;
  if (t.length <= 55)
    return t.unshift(128 + t.length), t;
  const e = ac(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
const cc = "0123456789abcdef";
function Ds(r) {
  let t = "0x";
  for (const e of Nu(r))
    t += cc[e >> 4], t += cc[e & 15];
  return t;
}
const kt = 32, Go = new Uint8Array(kt), Kf = ["then"], yi = {};
function xs(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw e.error = t, e;
}
var dn;
const Ss = class Ss extends Array {
  /**
   *  @private
   */
  constructor(...e) {
    const n = e[0];
    let s = e[1], i = (e[2] || []).slice(), o = !0;
    n !== yi && (s = e, i = [], o = !1);
    super(s.length);
    b(this, dn, void 0);
    s.forEach((c, u) => {
      this[u] = c;
    });
    const a = i.reduce((c, u) => (typeof u == "string" && c.set(u, (c.get(u) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (d(this, dn, Object.freeze(s.map((c, u) => {
      const f = i[u];
      return f != null && a.get(f) === 1 ? f : null;
    }))), !!o)
      return Object.freeze(this), new Proxy(this, {
        get: (c, u, f) => {
          if (typeof u == "string") {
            if (u.match(/^[0-9]+$/)) {
              const g = V(u, "%index");
              if (g < 0 || g >= this.length)
                throw new RangeError("out of result range");
              const A = c[g];
              return A instanceof Error && xs(`index ${g}`, A), A;
            }
            if (Kf.indexOf(u) >= 0)
              return Reflect.get(c, u, f);
            const h = c[u];
            if (h instanceof Function)
              return function(...g) {
                return h.apply(this === f ? c : this, g);
              };
            if (!(u in c))
              return c.getValue.apply(this === f ? c : this, [u]);
          }
          return Reflect.get(c, u, f);
        }
      });
  }
  /**
   *  Returns the Result as a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray() {
    const e = [];
    return this.forEach((n, s) => {
      n instanceof Error && xs(`index ${s}`, n), e.push(n);
    }), e;
  }
  /**
   *  Returns the Result as an Object with each name-value pair.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject() {
    return l(this, dn).reduce((e, n, s) => (P(n != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
      operation: "toObject()"
    }), n in e || (e[n] = this.getValue(n)), e), {});
  }
  /**
   *  @_ignore
   */
  slice(e, n) {
    e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = [], i = [];
    for (let o = e; o < n; o++)
      s.push(this[o]), i.push(l(this, dn)[o]);
    return new Ss(yi, s, i);
  }
  /**
   *  @_ignore
   */
  filter(e, n) {
    const s = [], i = [];
    for (let o = 0; o < this.length; o++) {
      const a = this[o];
      a instanceof Error && xs(`index ${o}`, a), e.call(n, a, o, this) && (s.push(a), i.push(l(this, dn)[o]));
    }
    return new Ss(yi, s, i);
  }
  /**
   *  @_ignore
   */
  map(e, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const o = this[i];
      o instanceof Error && xs(`index ${i}`, o), s.push(e.call(n, o, i, this));
    }
    return s;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(e) {
    const n = l(this, dn).indexOf(e);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && xs(`property ${JSON.stringify(e)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(e, n) {
    return new Ss(yi, e, n);
  }
};
dn = new WeakMap();
let Ui = Ss;
function uc(r) {
  let t = Kt(r);
  return P(t.length <= kt, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: t, length: kt, offset: t.length }), t.length !== kt && (t = Ht(pt([Go.slice(t.length % kt), t]))), t;
}
class nn {
  constructor(t, e, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    w(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    w(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    w(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    w(this, "dynamic");
    M(this, { name: t, type: e, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(t, e) {
    y(!1, t, this.localName, e);
  }
}
var Qe, Vn, Ur, Ni;
class Qo {
  constructor() {
    b(this, Ur);
    // An array of WordSize lengthed objects to concatenation
    b(this, Qe, void 0);
    b(this, Vn, void 0);
    d(this, Qe, []), d(this, Vn, 0);
  }
  get data() {
    return pt(l(this, Qe));
  }
  get length() {
    return l(this, Vn);
  }
  appendWriter(t) {
    return I(this, Ur, Ni).call(this, Ht(t.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(t) {
    let e = Ht(t);
    const n = e.length % kt;
    return n && (e = Ht(pt([e, Go.slice(n)]))), I(this, Ur, Ni).call(this, e);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(t) {
    return I(this, Ur, Ni).call(this, uc(t));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const t = l(this, Qe).length;
    return l(this, Qe).push(Go), d(this, Vn, l(this, Vn) + kt), (e) => {
      l(this, Qe)[t] = uc(e);
    };
  }
}
Qe = new WeakMap(), Vn = new WeakMap(), Ur = new WeakSet(), Ni = function(t) {
  return l(this, Qe).push(t), d(this, Vn, l(this, Vn) + t.length), t.length;
};
var jt, $t, zi, Tu;
const Ga = class Ga {
  constructor(t, e) {
    b(this, zi);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    w(this, "allowLoose");
    b(this, jt, void 0);
    b(this, $t, void 0);
    M(this, { allowLoose: !!e }), d(this, jt, Ht(t)), d(this, $t, 0);
  }
  get data() {
    return D(l(this, jt));
  }
  get dataLength() {
    return l(this, jt).length;
  }
  get consumed() {
    return l(this, $t);
  }
  get bytes() {
    return new Uint8Array(l(this, jt));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(t) {
    return new Ga(l(this, jt).slice(l(this, $t) + t), this.allowLoose);
  }
  // Read bytes
  readBytes(t, e) {
    let n = I(this, zi, Tu).call(this, 0, t, !!e);
    return d(this, $t, l(this, $t) + n.length), n.slice(0, t);
  }
  // Read a numeric values
  readValue() {
    return wa(this.readBytes(kt));
  }
  readIndex() {
    return If(this.readBytes(kt));
  }
};
jt = new WeakMap(), $t = new WeakMap(), zi = new WeakSet(), Tu = function(t, e, n) {
  let s = Math.ceil(e / kt) * kt;
  return l(this, $t) + s > l(this, jt).length && (this.allowLoose && n && l(this, $t) + e <= l(this, jt).length ? s = e : P(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: Ht(l(this, jt)),
    length: l(this, jt).length,
    offset: l(this, $t) + s
  })), l(this, jt).slice(l(this, $t), l(this, $t) + s);
};
let Ho = Ga;
function Di(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function Ea(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function Wf(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Di(r.outputLen), Di(r.blockLen);
}
function ds(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function Cu(r, t) {
  Ea(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const xo = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ou = (r) => r instanceof Uint8Array, Yf = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Po = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), be = (r, t) => r << 32 - t | r >>> t, Zf = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Zf)
  throw new Error("Non little-endian hardware is not supported");
function Xf(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function no(r) {
  if (typeof r == "string" && (r = Xf(r)), !Ou(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function qf(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!Ou(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
class va {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Iu(r) {
  const t = (n) => r().update(no(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function $f(r = 32) {
  if (xo && typeof xo.getRandomValues == "function")
    return xo.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
class Bu extends va {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, Wf(t);
    const n = no(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return ds(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    ds(this), Ea(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: a } = this;
    return t = t, t.finished = s, t.destroyed = i, t.blockLen = o, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Ru = (r, t, e) => new Bu(r, t).update(e).digest();
Ru.create = (r, t) => new Bu(r, t);
function th(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(e >> s & i), a = Number(e & i), c = n ? 4 : 0, u = n ? 0 : 4;
  r.setUint32(t + c, o, n), r.setUint32(t + u, a, n);
}
class eh extends va {
  constructor(t, e, n, s) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Po(this.buffer);
  }
  update(t) {
    ds(this);
    const { view: e, buffer: n, blockLen: s } = this;
    t = no(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(s - this.pos, i - o);
      if (a === s) {
        const c = Po(t);
        for (; s <= i - o; o += s)
          this.process(c, o);
        continue;
      }
      n.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    ds(this), Cu(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    e[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let h = o; h < s; h++)
      e[h] = 0;
    th(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = Po(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let h = 0; h < u; h++)
      a.setUint32(4 * h, f[h], i);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: s, finished: i, destroyed: o, pos: a } = this;
    return t.length = s, t.pos = a, t.finished = i, t.destroyed = o, s % e && t.buffer.set(n), t;
  }
}
const nh = (r, t, e) => r & t ^ ~r & e, rh = (r, t, e) => r & t ^ r & e ^ t & e, sh = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), an = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), cn = /* @__PURE__ */ new Uint32Array(64);
class ih extends eh {
  constructor() {
    super(64, 32, 8, !1), this.A = an[0] | 0, this.B = an[1] | 0, this.C = an[2] | 0, this.D = an[3] | 0, this.E = an[4] | 0, this.F = an[5] | 0, this.G = an[6] | 0, this.H = an[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: s, E: i, F: o, G: a, H: c } = this;
    return [t, e, n, s, i, o, a, c];
  }
  // prettier-ignore
  set(t, e, n, s, i, o, a, c) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, e) {
    for (let h = 0; h < 16; h++, e += 4)
      cn[h] = t.getUint32(e, !1);
    for (let h = 16; h < 64; h++) {
      const g = cn[h - 15], A = cn[h - 2], E = be(g, 7) ^ be(g, 18) ^ g >>> 3, m = be(A, 17) ^ be(A, 19) ^ A >>> 10;
      cn[h] = m + cn[h - 7] + E + cn[h - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: a, F: c, G: u, H: f } = this;
    for (let h = 0; h < 64; h++) {
      const g = be(a, 6) ^ be(a, 11) ^ be(a, 25), A = f + g + nh(a, c, u) + sh[h] + cn[h] | 0, m = (be(n, 2) ^ be(n, 13) ^ be(n, 22)) + rh(n, s, i) | 0;
      f = u, u = c, c = a, a = o + A | 0, o = i, i = s, s = n, n = A + m | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(n, s, i, o, a, c, u, f);
  }
  roundClean() {
    cn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const oh = /* @__PURE__ */ Iu(() => new ih()), mi = /* @__PURE__ */ BigInt(2 ** 32 - 1), lc = /* @__PURE__ */ BigInt(32);
function ah(r, t = !1) {
  return t ? { h: Number(r & mi), l: Number(r >> lc & mi) } : { h: Number(r >> lc & mi) | 0, l: Number(r & mi) | 0 };
}
function ch(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: o } = ah(r[s], t);
    [e[s], n[s]] = [i, o];
  }
  return [e, n];
}
const uh = (r, t, e) => r << e | t >>> 32 - e, lh = (r, t, e) => t << e | r >>> 32 - e, fh = (r, t, e) => t << e - 32 | r >>> 64 - e, hh = (r, t, e) => r << e - 32 | t >>> 64 - e, [ku, Su, Uu] = [[], [], []], dh = /* @__PURE__ */ BigInt(0), Ps = /* @__PURE__ */ BigInt(1), ph = /* @__PURE__ */ BigInt(2), gh = /* @__PURE__ */ BigInt(7), yh = /* @__PURE__ */ BigInt(256), mh = /* @__PURE__ */ BigInt(113);
for (let r = 0, t = Ps, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], ku.push(2 * (5 * n + e)), Su.push((r + 1) * (r + 2) / 2 % 64);
  let s = dh;
  for (let i = 0; i < 7; i++)
    t = (t << Ps ^ (t >> gh) * mh) % yh, t & ph && (s ^= Ps << (Ps << /* @__PURE__ */ BigInt(i)) - Ps);
  Uu.push(s);
}
const [wh, Ah] = /* @__PURE__ */ ch(Uu, !0), fc = (r, t, e) => e > 32 ? fh(r, t, e) : uh(r, t, e), hc = (r, t, e) => e > 32 ? hh(r, t, e) : lh(r, t, e);
function bh(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      e[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = e[c], f = e[c + 1], h = fc(u, f, 1) ^ e[a], g = hc(u, f, 1) ^ e[a + 1];
      for (let A = 0; A < 50; A += 10)
        r[o + A] ^= h, r[o + A + 1] ^= g;
    }
    let s = r[2], i = r[3];
    for (let o = 0; o < 24; o++) {
      const a = Su[o], c = fc(s, i, a), u = hc(s, i, a), f = ku[o];
      s = r[f], i = r[f + 1], r[f] = c, r[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        e[a] = r[o + a];
      for (let a = 0; a < 10; a++)
        r[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    r[0] ^= wh[n], r[1] ^= Ah[n];
  }
  e.fill(0);
}
class xa extends va {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, e, n, s = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Di(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Yf(this.state);
  }
  keccak() {
    bh(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    ds(this);
    const { blockLen: e, state: n } = this;
    t = no(t);
    const s = t.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(e - this.pos, s - i);
      for (let a = 0; a < o; a++)
        n[this.pos++] ^= t[i++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: e, pos: n, blockLen: s } = this;
    t[n] ^= e, e & 128 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    ds(this, !1), Ea(t), this.finish();
    const e = this.state, { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      t.set(e.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Di(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (Cu(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: e, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return t || (t = new xa(e, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const Eh = (r, t, e) => Iu(() => new xa(t, r, e)), vh = /* @__PURE__ */ Eh(1, 136, 256 / 8);
let Du = !1;
const Fu = function(r) {
  return vh(r);
};
let Lu = Fu;
function st(r) {
  const t = X(r, "data");
  return D(Lu(t));
}
st._ = Fu;
st.lock = function() {
  Du = !0;
};
st.register = function(r) {
  if (Du)
    throw new TypeError("keccak256 is locked");
  Lu = r;
};
Object.freeze(st);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Mu = BigInt(0), ro = BigInt(1), xh = BigInt(2), so = (r) => r instanceof Uint8Array, Ph = /* @__PURE__ */ Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function ps(r) {
  if (!so(r))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += Ph[r[e]];
  return t;
}
function Gu(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function Pa(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
function gs(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const t = r.length;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const e = new Uint8Array(t / 2);
  for (let n = 0; n < e.length; n++) {
    const s = n * 2, i = r.slice(s, s + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    e[n] = o;
  }
  return e;
}
function nr(r) {
  return Pa(ps(r));
}
function Na(r) {
  if (!so(r))
    throw new Error("Uint8Array expected");
  return Pa(ps(Uint8Array.from(r).reverse()));
}
function ys(r, t) {
  return gs(r.toString(16).padStart(t * 2, "0"));
}
function Ta(r, t) {
  return ys(r, t).reverse();
}
function Nh(r) {
  return gs(Gu(r));
}
function le(r, t, e) {
  let n;
  if (typeof t == "string")
    try {
      n = gs(t);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (so(t))
    n = Uint8Array.from(t);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof e == "number" && s !== e)
    throw new Error(`${r} expected ${e} bytes, got ${s}`);
  return n;
}
function Fs(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!so(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
function Th(r, t) {
  if (r.length !== t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
function Ch(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Oh(r) {
  let t;
  for (t = 0; r > Mu; r >>= ro, t += 1)
    ;
  return t;
}
function Ih(r, t) {
  return r >> BigInt(t) & ro;
}
const Bh = (r, t, e) => r | (e ? ro : Mu) << BigInt(t), Ca = (r) => (xh << BigInt(r - 1)) - ro, No = (r) => new Uint8Array(r), dc = (r) => Uint8Array.from(r);
function Qu(r, t, e) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function")
    throw new Error("hmacFn must be a function");
  let n = No(r), s = No(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, a = (...h) => e(s, n, ...h), c = (h = No()) => {
    s = a(dc([0]), h), n = a(), h.length !== 0 && (s = a(dc([1]), h), n = a());
  }, u = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let h = 0;
    const g = [];
    for (; h < t; ) {
      n = a();
      const A = n.slice();
      g.push(A), h += n.length;
    }
    return Fs(...g);
  };
  return (h, g) => {
    o(), c(h);
    let A;
    for (; !(A = g(u())); )
      c();
    return o(), A;
  };
}
const Rh = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, t) => t.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function ci(r, t, e = {}) {
  const n = (s, i, o) => {
    const a = Rh[i];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = r[s];
    if (!(o && c === void 0) && !a(c, r))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(t))
    n(s, i, !1);
  for (const [s, i] of Object.entries(e))
    n(s, i, !0);
  return r;
}
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: Ih,
  bitLen: Oh,
  bitMask: Ca,
  bitSet: Bh,
  bytesToHex: ps,
  bytesToNumberBE: nr,
  bytesToNumberLE: Na,
  concatBytes: Fs,
  createHmacDrbg: Qu,
  ensureBytes: le,
  equalBytes: Th,
  hexToBytes: gs,
  hexToNumber: Pa,
  numberToBytesBE: ys,
  numberToBytesLE: Ta,
  numberToHexUnpadded: Gu,
  numberToVarBytesBE: Nh,
  utf8ToBytes: Ch,
  validateObject: ci
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const yt = BigInt(0), lt = BigInt(1), kn = BigInt(2), Sh = BigInt(3), _o = BigInt(4), pc = BigInt(5), gc = BigInt(8);
BigInt(9);
BigInt(16);
function Mt(r, t) {
  const e = r % t;
  return e >= yt ? e : t + e;
}
function Uh(r, t, e) {
  if (e <= yt || t < yt)
    throw new Error("Expected power/modulo > 0");
  if (e === lt)
    return yt;
  let n = lt;
  for (; t > yt; )
    t & lt && (n = n * r % e), r = r * r % e, t >>= lt;
  return n;
}
function Yt(r, t, e) {
  let n = r;
  for (; t-- > yt; )
    n *= n, n %= e;
  return n;
}
function Vo(r, t) {
  if (r === yt || t <= yt)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = Mt(r, t), n = t, s = yt, i = lt;
  for (; e !== yt; ) {
    const a = n / e, c = n % e, u = s - i * a;
    n = e, e = c, s = i, i = u;
  }
  if (n !== lt)
    throw new Error("invert: does not exist");
  return Mt(s, t);
}
function Dh(r) {
  const t = (r - lt) / kn;
  let e, n, s;
  for (e = r - lt, n = 0; e % kn === yt; e /= kn, n++)
    ;
  for (s = kn; s < r && Uh(s, t, r) !== r - lt; s++)
    ;
  if (n === 1) {
    const o = (r + lt) / _o;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const i = (e + lt) / kn;
  return function(a, c) {
    if (a.pow(c, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = n, f = a.pow(a.mul(a.ONE, s), e), h = a.pow(c, i), g = a.pow(c, e);
    for (; !a.eql(g, a.ONE); ) {
      if (a.eql(g, a.ZERO))
        return a.ZERO;
      let A = 1;
      for (let m = a.sqr(g); A < u && !a.eql(m, a.ONE); A++)
        m = a.sqr(m);
      const E = a.pow(f, lt << BigInt(u - A - 1));
      f = a.sqr(E), h = a.mul(h, E), g = a.mul(g, f), u = A;
    }
    return h;
  };
}
function Fh(r) {
  if (r % _o === Sh) {
    const t = (r + lt) / _o;
    return function(n, s) {
      const i = n.pow(s, t);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % gc === pc) {
    const t = (r - pc) / gc;
    return function(n, s) {
      const i = n.mul(s, kn), o = n.pow(i, t), a = n.mul(s, o), c = n.mul(n.mul(a, kn), o), u = n.mul(a, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return Dh(r);
}
const Lh = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Mh(r) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = Lh.reduce((n, s) => (n[s] = "function", n), t);
  return ci(r, e);
}
function Gh(r, t, e) {
  if (e < yt)
    throw new Error("Expected power > 0");
  if (e === yt)
    return r.ONE;
  if (e === lt)
    return t;
  let n = r.ONE, s = t;
  for (; e > yt; )
    e & lt && (n = r.mul(n, s)), s = r.sqr(s), e >>= lt;
  return n;
}
function Qh(r, t) {
  const e = new Array(t.length), n = t.reduce((i, o, a) => r.is0(o) ? i : (e[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
  return t.reduceRight((i, o, a) => r.is0(o) ? i : (e[a] = r.mul(i, e[a]), r.mul(i, o)), s), e;
}
function Hu(r, t) {
  const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: n };
}
function Hh(r, t, e = !1, n = {}) {
  if (r <= yt)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = Hu(r, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Fh(r), a = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: Ca(s),
    ZERO: yt,
    ONE: lt,
    create: (c) => Mt(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return yt <= c && c < r;
    },
    is0: (c) => c === yt,
    isOdd: (c) => (c & lt) === lt,
    neg: (c) => Mt(-c, r),
    eql: (c, u) => c === u,
    sqr: (c) => Mt(c * c, r),
    add: (c, u) => Mt(c + u, r),
    sub: (c, u) => Mt(c - u, r),
    mul: (c, u) => Mt(c * u, r),
    pow: (c, u) => Gh(a, c, u),
    div: (c, u) => Mt(c * Vo(u, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Vo(c, r),
    sqrt: n.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => Qh(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => e ? Ta(c, i) : ys(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return e ? Na(c) : nr(c);
    }
  });
  return Object.freeze(a);
}
function _u(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const t = r.toString(2).length;
  return Math.ceil(t / 8);
}
function Vu(r) {
  const t = _u(r);
  return t + Math.ceil(t / 2);
}
function _h(r, t, e = !1) {
  const n = r.length, s = _u(t), i = Vu(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const o = e ? nr(r) : Na(r), a = Mt(o, t - lt) + lt;
  return e ? Ta(a, s) : ys(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Vh = BigInt(0), To = BigInt(1);
function Jh(r, t) {
  const e = (s, i) => {
    const o = i.negate();
    return s ? o : i;
  }, n = (s) => {
    const i = Math.ceil(t / s) + 1, o = 2 ** (s - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: e,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let o = r.ZERO, a = s;
      for (; i > Vh; )
        i & To && (o = o.add(a)), a = a.double(), i >>= To;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, i) {
      const { windows: o, windowSize: a } = n(i), c = [];
      let u = s, f = u;
      for (let h = 0; h < o; h++) {
        f = u, c.push(f);
        for (let g = 1; g < a; g++)
          f = f.add(u), c.push(f);
        u = f.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, o) {
      const { windows: a, windowSize: c } = n(s);
      let u = r.ZERO, f = r.BASE;
      const h = BigInt(2 ** s - 1), g = 2 ** s, A = BigInt(s);
      for (let E = 0; E < a; E++) {
        const m = E * c;
        let v = Number(o & h);
        o >>= A, v > c && (v -= g, o += To);
        const x = m, B = m + Math.abs(v) - 1, C = E % 2 !== 0, _ = v < 0;
        v === 0 ? f = f.add(e(C, i[x])) : u = u.add(e(_, i[B]));
      }
      return { p: u, f };
    },
    wNAFCached(s, i, o, a) {
      const c = s._WINDOW_SIZE || 1;
      let u = i.get(s);
      return u || (u = this.precomputeWindow(s, c), c !== 1 && i.set(s, a(u))), this.wNAF(c, u, o);
    }
  };
}
function Ju(r) {
  return Mh(r.Fp), ci(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Hu(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function jh(r) {
  const t = Ju(r);
  ci(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: e, Fp: n, a: s } = t;
  if (e) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: zh, hexToBytes: Kh } = kh, Un = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(r) {
    const { Err: t } = Un;
    if (r.length < 2 || r[0] !== 2)
      throw new t("Invalid signature integer tag");
    const e = r[1], n = r.subarray(2, e + 2);
    if (!e || n.length !== e)
      throw new t("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: zh(n), l: r.subarray(e + 2) };
  },
  toSig(r) {
    const { Err: t } = Un, e = typeof r == "string" ? Kh(r) : r;
    if (!(e instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = e.length;
    if (n < 2 || e[0] != 48)
      throw new t("Invalid signature tag");
    if (e[1] !== n - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: s, l: i } = Un._parseInt(e.subarray(2)), { d: o, l: a } = Un._parseInt(i);
    if (a.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: s, s: o };
  },
  hexFromSig(r) {
    const t = (u) => Number.parseInt(u[0], 16) & 8 ? "00" + u : u, e = (u) => {
      const f = u.toString(16);
      return f.length & 1 ? `0${f}` : f;
    }, n = t(e(r.s)), s = t(e(r.r)), i = n.length / 2, o = s.length / 2, a = e(i), c = e(o);
    return `30${e(o + i + 4)}02${c}${s}02${a}${n}`;
  }
}, Ze = BigInt(0), re = BigInt(1);
BigInt(2);
const yc = BigInt(3);
BigInt(4);
function Wh(r) {
  const t = jh(r), { Fp: e } = t, n = t.toBytes || ((E, m, v) => {
    const x = m.toAffine();
    return Fs(Uint8Array.from([4]), e.toBytes(x.x), e.toBytes(x.y));
  }), s = t.fromBytes || ((E) => {
    const m = E.subarray(1), v = e.fromBytes(m.subarray(0, e.BYTES)), x = e.fromBytes(m.subarray(e.BYTES, 2 * e.BYTES));
    return { x: v, y: x };
  });
  function i(E) {
    const { a: m, b: v } = t, x = e.sqr(E), B = e.mul(x, E);
    return e.add(e.add(B, e.mul(E, m)), v);
  }
  if (!e.eql(e.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(E) {
    return typeof E == "bigint" && Ze < E && E < t.n;
  }
  function a(E) {
    if (!o(E))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(E) {
    const { allowedPrivateKeyLengths: m, nByteLength: v, wrapPrivateKey: x, n: B } = t;
    if (m && typeof E != "bigint") {
      if (E instanceof Uint8Array && (E = ps(E)), typeof E != "string" || !m.includes(E.length))
        throw new Error("Invalid key");
      E = E.padStart(v * 2, "0");
    }
    let C;
    try {
      C = typeof E == "bigint" ? E : nr(le("private key", E, v));
    } catch {
      throw new Error(`private key must be ${v} bytes, hex or bigint, not ${typeof E}`);
    }
    return x && (C = Mt(C, B)), a(C), C;
  }
  const u = /* @__PURE__ */ new Map();
  function f(E) {
    if (!(E instanceof h))
      throw new Error("ProjectivePoint expected");
  }
  class h {
    constructor(m, v, x) {
      if (this.px = m, this.py = v, this.pz = x, m == null || !e.isValid(m))
        throw new Error("x required");
      if (v == null || !e.isValid(v))
        throw new Error("y required");
      if (x == null || !e.isValid(x))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(m) {
      const { x: v, y: x } = m || {};
      if (!m || !e.isValid(v) || !e.isValid(x))
        throw new Error("invalid affine point");
      if (m instanceof h)
        throw new Error("projective point not allowed");
      const B = (C) => e.eql(C, e.ZERO);
      return B(v) && B(x) ? h.ZERO : new h(v, x, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(m) {
      const v = e.invertBatch(m.map((x) => x.pz));
      return m.map((x, B) => x.toAffine(v[B])).map(h.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(m) {
      const v = h.fromAffine(s(le("pointHex", m)));
      return v.assertValidity(), v;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(m) {
      return h.BASE.multiply(c(m));
    }
    // "Private method", don't use it directly
    _setWindowSize(m) {
      this._WINDOW_SIZE = m, u.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !e.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: m, y: v } = this.toAffine();
      if (!e.isValid(m) || !e.isValid(v))
        throw new Error("bad point: x or y not FE");
      const x = e.sqr(v), B = i(m);
      if (!e.eql(x, B))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: m } = this.toAffine();
      if (e.isOdd)
        return !e.isOdd(m);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(m) {
      f(m);
      const { px: v, py: x, pz: B } = this, { px: C, py: _, pz: G } = m, U = e.eql(e.mul(v, G), e.mul(C, B)), L = e.eql(e.mul(x, G), e.mul(_, B));
      return U && L;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new h(this.px, e.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: m, b: v } = t, x = e.mul(v, yc), { px: B, py: C, pz: _ } = this;
      let G = e.ZERO, U = e.ZERO, L = e.ZERO, S = e.mul(B, B), ot = e.mul(C, C), Y = e.mul(_, _), K = e.mul(B, C);
      return K = e.add(K, K), L = e.mul(B, _), L = e.add(L, L), G = e.mul(m, L), U = e.mul(x, Y), U = e.add(G, U), G = e.sub(ot, U), U = e.add(ot, U), U = e.mul(G, U), G = e.mul(K, G), L = e.mul(x, L), Y = e.mul(m, Y), K = e.sub(S, Y), K = e.mul(m, K), K = e.add(K, L), L = e.add(S, S), S = e.add(L, S), S = e.add(S, Y), S = e.mul(S, K), U = e.add(U, S), Y = e.mul(C, _), Y = e.add(Y, Y), S = e.mul(Y, K), G = e.sub(G, S), L = e.mul(Y, ot), L = e.add(L, L), L = e.add(L, L), new h(G, U, L);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(m) {
      f(m);
      const { px: v, py: x, pz: B } = this, { px: C, py: _, pz: G } = m;
      let U = e.ZERO, L = e.ZERO, S = e.ZERO;
      const ot = t.a, Y = e.mul(t.b, yc);
      let K = e.mul(v, C), Ot = e.mul(x, _), bt = e.mul(B, G), ht = e.add(v, x), T = e.add(C, _);
      ht = e.mul(ht, T), T = e.add(K, Ot), ht = e.sub(ht, T), T = e.add(v, B);
      let k = e.add(C, G);
      return T = e.mul(T, k), k = e.add(K, bt), T = e.sub(T, k), k = e.add(x, B), U = e.add(_, G), k = e.mul(k, U), U = e.add(Ot, bt), k = e.sub(k, U), S = e.mul(ot, T), U = e.mul(Y, bt), S = e.add(U, S), U = e.sub(Ot, S), S = e.add(Ot, S), L = e.mul(U, S), Ot = e.add(K, K), Ot = e.add(Ot, K), bt = e.mul(ot, bt), T = e.mul(Y, T), Ot = e.add(Ot, bt), bt = e.sub(K, bt), bt = e.mul(ot, bt), T = e.add(T, bt), K = e.mul(Ot, T), L = e.add(L, K), K = e.mul(k, T), U = e.mul(ht, U), U = e.sub(U, K), K = e.mul(ht, Ot), S = e.mul(k, S), S = e.add(S, K), new h(U, L, S);
    }
    subtract(m) {
      return this.add(m.negate());
    }
    is0() {
      return this.equals(h.ZERO);
    }
    wNAF(m) {
      return A.wNAFCached(this, u, m, (v) => {
        const x = e.invertBatch(v.map((B) => B.pz));
        return v.map((B, C) => B.toAffine(x[C])).map(h.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(m) {
      const v = h.ZERO;
      if (m === Ze)
        return v;
      if (a(m), m === re)
        return this;
      const { endo: x } = t;
      if (!x)
        return A.unsafeLadder(this, m);
      let { k1neg: B, k1: C, k2neg: _, k2: G } = x.splitScalar(m), U = v, L = v, S = this;
      for (; C > Ze || G > Ze; )
        C & re && (U = U.add(S)), G & re && (L = L.add(S)), S = S.double(), C >>= re, G >>= re;
      return B && (U = U.negate()), _ && (L = L.negate()), L = new h(e.mul(L.px, x.beta), L.py, L.pz), U.add(L);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(m) {
      a(m);
      let v = m, x, B;
      const { endo: C } = t;
      if (C) {
        const { k1neg: _, k1: G, k2neg: U, k2: L } = C.splitScalar(v);
        let { p: S, f: ot } = this.wNAF(G), { p: Y, f: K } = this.wNAF(L);
        S = A.constTimeNegate(_, S), Y = A.constTimeNegate(U, Y), Y = new h(e.mul(Y.px, C.beta), Y.py, Y.pz), x = S.add(Y), B = ot.add(K);
      } else {
        const { p: _, f: G } = this.wNAF(v);
        x = _, B = G;
      }
      return h.normalizeZ([x, B])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(m, v, x) {
      const B = h.BASE, C = (G, U) => U === Ze || U === re || !G.equals(B) ? G.multiplyUnsafe(U) : G.multiply(U), _ = C(this, v).add(C(m, x));
      return _.is0() ? void 0 : _;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(m) {
      const { px: v, py: x, pz: B } = this, C = this.is0();
      m == null && (m = C ? e.ONE : e.inv(B));
      const _ = e.mul(v, m), G = e.mul(x, m), U = e.mul(B, m);
      if (C)
        return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(U, e.ONE))
        throw new Error("invZ was invalid");
      return { x: _, y: G };
    }
    isTorsionFree() {
      const { h: m, isTorsionFree: v } = t;
      if (m === re)
        return !0;
      if (v)
        return v(h, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: m, clearCofactor: v } = t;
      return m === re ? this : v ? v(h, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(m = !0) {
      return this.assertValidity(), n(h, this, m);
    }
    toHex(m = !0) {
      return ps(this.toRawBytes(m));
    }
  }
  h.BASE = new h(t.Gx, t.Gy, e.ONE), h.ZERO = new h(e.ZERO, e.ONE, e.ZERO);
  const g = t.nBitLength, A = Jh(h, t.endo ? Math.ceil(g / 2) : g);
  return {
    CURVE: t,
    ProjectivePoint: h,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function Yh(r) {
  const t = Ju(r);
  return ci(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Zh(r) {
  const t = Yh(r), { Fp: e, n } = t, s = e.BYTES + 1, i = 2 * e.BYTES + 1;
  function o(T) {
    return Ze < T && T < e.ORDER;
  }
  function a(T) {
    return Mt(T, n);
  }
  function c(T) {
    return Vo(T, n);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: f, weierstrassEquation: h, isWithinCurveOrder: g } = Wh({
    ...t,
    toBytes(T, k, H) {
      const q = k.toAffine(), Z = e.toBytes(q.x), ct = Fs;
      return H ? ct(Uint8Array.from([k.hasEvenY() ? 2 : 3]), Z) : ct(Uint8Array.from([4]), Z, e.toBytes(q.y));
    },
    fromBytes(T) {
      const k = T.length, H = T[0], q = T.subarray(1);
      if (k === s && (H === 2 || H === 3)) {
        const Z = nr(q);
        if (!o(Z))
          throw new Error("Point is not on curve");
        const ct = h(Z);
        let Et = e.sqrt(ct);
        const vt = (Et & re) === re;
        return (H & 1) === 1 !== vt && (Et = e.neg(Et)), { x: Z, y: Et };
      } else if (k === i && H === 4) {
        const Z = e.fromBytes(q.subarray(0, e.BYTES)), ct = e.fromBytes(q.subarray(e.BYTES, 2 * e.BYTES));
        return { x: Z, y: ct };
      } else
        throw new Error(`Point of length ${k} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), A = (T) => ps(ys(T, t.nByteLength));
  function E(T) {
    const k = n >> re;
    return T > k;
  }
  function m(T) {
    return E(T) ? a(-T) : T;
  }
  const v = (T, k, H) => nr(T.slice(k, H));
  class x {
    constructor(k, H, q) {
      this.r = k, this.s = H, this.recovery = q, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(k) {
      const H = t.nByteLength;
      return k = le("compactSignature", k, H * 2), new x(v(k, 0, H), v(k, H, 2 * H));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(k) {
      const { r: H, s: q } = Un.toSig(le("DER", k));
      return new x(H, q);
    }
    assertValidity() {
      if (!g(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!g(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(k) {
      return new x(this.r, this.s, k);
    }
    recoverPublicKey(k) {
      const { r: H, s: q, recovery: Z } = this, ct = L(le("msgHash", k));
      if (Z == null || ![0, 1, 2, 3].includes(Z))
        throw new Error("recovery id invalid");
      const Et = Z === 2 || Z === 3 ? H + t.n : H;
      if (Et >= e.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const vt = Z & 1 ? "03" : "02", oe = u.fromHex(vt + A(Et)), Ae = c(Et), rn = a(-ct * Ae), Be = a(q * Ae), Wt = u.BASE.multiplyAndAddUnsafe(oe, rn, Be);
      if (!Wt)
        throw new Error("point at infinify");
      return Wt.assertValidity(), Wt;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return E(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new x(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return gs(this.toDERHex());
    }
    toDERHex() {
      return Un.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return gs(this.toCompactHex());
    }
    toCompactHex() {
      return A(this.r) + A(this.s);
    }
  }
  const B = {
    isValidPrivateKey(T) {
      try {
        return f(T), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: f,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const T = Vu(t.n);
      return _h(t.randomBytes(T), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(T = 8, k = u.BASE) {
      return k._setWindowSize(T), k.multiply(BigInt(3)), k;
    }
  };
  function C(T, k = !0) {
    return u.fromPrivateKey(T).toRawBytes(k);
  }
  function _(T) {
    const k = T instanceof Uint8Array, H = typeof T == "string", q = (k || H) && T.length;
    return k ? q === s || q === i : H ? q === 2 * s || q === 2 * i : T instanceof u;
  }
  function G(T, k, H = !0) {
    if (_(T))
      throw new Error("first arg must be private key");
    if (!_(k))
      throw new Error("second arg must be public key");
    return u.fromHex(k).multiply(f(T)).toRawBytes(H);
  }
  const U = t.bits2int || function(T) {
    const k = nr(T), H = T.length * 8 - t.nBitLength;
    return H > 0 ? k >> BigInt(H) : k;
  }, L = t.bits2int_modN || function(T) {
    return a(U(T));
  }, S = Ca(t.nBitLength);
  function ot(T) {
    if (typeof T != "bigint")
      throw new Error("bigint expected");
    if (!(Ze <= T && T < S))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return ys(T, t.nByteLength);
  }
  function Y(T, k, H = K) {
    if (["recovered", "canonical"].some((ae) => ae in H))
      throw new Error("sign() legacy options not supported");
    const { hash: q, randomBytes: Z } = t;
    let { lowS: ct, prehash: Et, extraEntropy: vt } = H;
    ct == null && (ct = !0), T = le("msgHash", T), Et && (T = le("prehashed msgHash", q(T)));
    const oe = L(T), Ae = f(k), rn = [ot(Ae), ot(oe)];
    if (vt != null) {
      const ae = vt === !0 ? Z(e.BYTES) : vt;
      rn.push(le("extraEntropy", ae));
    }
    const Be = Fs(...rn), Wt = oe;
    function sn(ae) {
      const ce = U(ae);
      if (!g(ce))
        return;
      const hi = c(ce), Re = u.BASE.multiply(ce).toAffine(), Dt = a(Re.x);
      if (Dt === Ze)
        return;
      const on = a(hi * a(Wt + Dt * Ae));
      if (on === Ze)
        return;
      let Rn = (Re.x === Dt ? 0 : 2) | Number(Re.y & re), bs = on;
      return ct && E(on) && (bs = m(on), Rn ^= 1), new x(Dt, bs, Rn);
    }
    return { seed: Be, k2sig: sn };
  }
  const K = { lowS: t.lowS, prehash: !1 }, Ot = { lowS: t.lowS, prehash: !1 };
  function bt(T, k, H = K) {
    const { seed: q, k2sig: Z } = Y(T, k, H), ct = t;
    return Qu(ct.hash.outputLen, ct.nByteLength, ct.hmac)(q, Z);
  }
  u.BASE._setWindowSize(8);
  function ht(T, k, H, q = Ot) {
    var Re;
    const Z = T;
    if (k = le("msgHash", k), H = le("publicKey", H), "strict" in q)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: ct, prehash: Et } = q;
    let vt, oe;
    try {
      if (typeof Z == "string" || Z instanceof Uint8Array)
        try {
          vt = x.fromDER(Z);
        } catch (Dt) {
          if (!(Dt instanceof Un.Err))
            throw Dt;
          vt = x.fromCompact(Z);
        }
      else if (typeof Z == "object" && typeof Z.r == "bigint" && typeof Z.s == "bigint") {
        const { r: Dt, s: on } = Z;
        vt = new x(Dt, on);
      } else
        throw new Error("PARSE");
      oe = u.fromHex(H);
    } catch (Dt) {
      if (Dt.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (ct && vt.hasHighS())
      return !1;
    Et && (k = t.hash(k));
    const { r: Ae, s: rn } = vt, Be = L(k), Wt = c(rn), sn = a(Be * Wt), ae = a(Ae * Wt), ce = (Re = u.BASE.multiplyAndAddUnsafe(oe, sn, ae)) == null ? void 0 : Re.toAffine();
    return ce ? a(ce.x) === Ae : !1;
  }
  return {
    CURVE: t,
    getPublicKey: C,
    getSharedSecret: G,
    sign: bt,
    verify: ht,
    ProjectivePoint: u,
    Signature: x,
    utils: B
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Xh(r) {
  return {
    hash: r,
    hmac: (t, ...e) => Ru(r, t, qf(...e)),
    randomBytes: $f
  };
}
function qh(r, t) {
  const e = (n) => Zh({ ...r, ...Xh(n) });
  return Object.freeze({ ...e(t), create: e });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ju = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), mc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), $h = BigInt(1), Jo = BigInt(2), wc = (r, t) => (r + t / Jo) / t;
function td(r) {
  const t = ju, e = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = r * r * r % t, f = u * u * r % t, h = Yt(f, e, t) * f % t, g = Yt(h, e, t) * f % t, A = Yt(g, Jo, t) * u % t, E = Yt(A, s, t) * A % t, m = Yt(E, i, t) * E % t, v = Yt(m, a, t) * m % t, x = Yt(v, c, t) * v % t, B = Yt(x, a, t) * m % t, C = Yt(B, e, t) * f % t, _ = Yt(C, o, t) * E % t, G = Yt(_, n, t) * u % t, U = Yt(G, Jo, t);
  if (!jo.eql(jo.sqr(U), r))
    throw new Error("Cannot find square root");
  return U;
}
const jo = Hh(ju, void 0, void 0, { sqrt: td }), un = qh({
  a: BigInt(0),
  b: BigInt(7),
  Fp: jo,
  n: mc,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const t = mc, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -$h * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, o = BigInt("0x100000000000000000000000000000000"), a = wc(i * r, t), c = wc(-n * r, t);
      let u = Mt(r - a * e - c * s, t), f = Mt(-a * n - c * i, t);
      const h = u > o, g = f > o;
      if (h && (u = t - u), g && (f = t - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: h, k1: u, k2neg: g, k2: f };
    }
  }
}, oh);
BigInt(0);
un.ProjectivePoint;
const zo = "0x0000000000000000000000000000000000000000", Ac = "0x0000000000000000000000000000000000000000000000000000000000000000", bc = BigInt(0), Ec = BigInt(1), vc = BigInt(2), xc = BigInt(27), Pc = BigInt(28), wi = BigInt(35), dr = {};
function Nc(r) {
  return sr(Kt(r), 32);
}
var Dr, Fr, Lr, Jn;
const ue = class ue {
  /**
   *  @private
   */
  constructor(t, e, n, s) {
    b(this, Dr, void 0);
    b(this, Fr, void 0);
    b(this, Lr, void 0);
    b(this, Jn, void 0);
    $i(t, dr, "Signature"), d(this, Dr, e), d(this, Fr, n), d(this, Lr, s), d(this, Jn, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return l(this, Dr);
  }
  set r(t) {
    y(Tr(t) === 32, "invalid r", "value", t), d(this, Dr, D(t));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return l(this, Fr);
  }
  set s(t) {
    y(Tr(t) === 32, "invalid s", "value", t);
    const e = D(t);
    y(parseInt(e.substring(0, 3)) < 8, "non-canonical s", "value", e), d(this, Fr, e);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return l(this, Lr);
  }
  set v(t) {
    const e = V(t, "value");
    y(e === 27 || e === 28, "invalid v", "v", t), d(this, Lr, e);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return l(this, Jn);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const t = this.networkV;
    return t == null ? null : ue.getChainId(t);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const t = X(this.s);
    return this.yParity && (t[0] |= 128), D(t);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return pt([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return pt([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const t = new ue(dr, this.r, this.s, this.v);
    return this.networkV && d(t, Jn, this.networkV), t;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const t = this.networkV;
    return {
      _type: "signature",
      networkV: t != null ? t.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(t) {
    const e = F(t, "v");
    return e == xc || e == Pc ? bc : (y(e >= wi, "invalid EIP-155 v", "v", t), (e - wi) / vc);
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(t, e) {
    return F(t) * vc + BigInt(35 + e - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(t) {
    const e = F(t);
    return e === bc || e === xc ? 27 : e === Ec || e === Pc ? 28 : (y(e >= wi, "invalid v", "v", t), e & Ec ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(t) {
    function e(u, f) {
      y(u, f, "signature", t);
    }
    if (t == null)
      return new ue(dr, Ac, Ac, 27);
    if (typeof t == "string") {
      const u = X(t, "signature");
      if (u.length === 64) {
        const f = D(u.slice(0, 32)), h = u.slice(32, 64), g = h[0] & 128 ? 28 : 27;
        return h[0] &= 127, new ue(dr, f, D(h), g);
      }
      if (u.length === 65) {
        const f = D(u.slice(0, 32)), h = u.slice(32, 64);
        e((h[0] & 128) === 0, "non-canonical s");
        const g = ue.getNormalizedV(u[64]);
        return new ue(dr, f, D(h), g);
      }
      e(!1, "invalid raw signature length");
    }
    if (t instanceof ue)
      return t.clone();
    const n = t.r;
    e(n != null, "missing r");
    const s = Nc(n), i = function(u, f) {
      if (u != null)
        return Nc(u);
      if (f != null) {
        e(it(f, 32), "invalid yParityAndS");
        const h = X(f);
        return h[0] &= 127, D(h);
      }
      e(!1, "missing s");
    }(t.s, t.yParityAndS);
    e((X(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: o, v: a } = function(u, f, h) {
      if (u != null) {
        const g = F(u);
        return {
          networkV: g >= wi ? g : void 0,
          v: ue.getNormalizedV(g)
        };
      }
      if (f != null)
        return e(it(f, 32), "invalid yParityAndS"), { v: X(f)[0] & 128 ? 28 : 27 };
      if (h != null) {
        switch (V(h, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        e(!1, "invalid yParity");
      }
      e(!1, "missing v");
    }(t.v, t.yParityAndS, t.yParity), c = new ue(dr, s, i, a);
    return o && d(c, Jn, o), e(t.yParity == null || V(t.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), e(t.yParityAndS == null || t.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
Dr = new WeakMap(), Fr = new WeakMap(), Lr = new WeakMap(), Jn = new WeakMap();
let ye = ue;
var He;
const Sn = class Sn {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(t) {
    b(this, He, void 0);
    y(Tr(t) === 32, "invalid private key", "privateKey", "[REDACTED]"), d(this, He, D(t));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return l(this, He);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return Sn.computePublicKey(l(this, He));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return Sn.computePublicKey(l(this, He), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(t) {
    y(Tr(t) === 32, "invalid digest length", "digest", t);
    const e = un.sign(Ht(t), Ht(l(this, He)), {
      lowS: !0
    });
    return ye.from({
      r: On(e.r, 32),
      s: On(e.s, 32),
      v: e.recovery ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(t) {
    const e = Sn.computePublicKey(t);
    return D(un.getSharedSecret(Ht(l(this, He)), X(e), !1));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(t, e) {
    let n = X(t, "key");
    if (n.length === 32) {
      const i = un.getPublicKey(n, !!e);
      return D(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = un.ProjectivePoint.fromHex(n);
    return D(s.toRawBytes(e));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(t, e) {
    y(Tr(t) === 32, "invalid digest length", "digest", t);
    const n = ye.from(e);
    let s = un.Signature.fromCompact(Ht(pt([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(Ht(t));
    return y(i != null, "invalid signautre for digest", "signature", e), "0x" + i.toHex(!1);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(t, e, n) {
    const s = un.ProjectivePoint.fromHex(Sn.computePublicKey(t).substring(2)), i = un.ProjectivePoint.fromHex(Sn.computePublicKey(e).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
He = new WeakMap();
let Ls = Sn;
const ed = BigInt(0), nd = BigInt(36);
function Tc(r) {
  r = r.toLowerCase();
  const t = r.substring(2).split(""), e = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    e[s] = t[s].charCodeAt(0);
  const n = X(st(e));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
  return "0x" + t.join("");
}
const Oa = {};
for (let r = 0; r < 10; r++)
  Oa[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  Oa[String.fromCharCode(65 + r)] = String(10 + r);
const Cc = 15;
function rd(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let t = r.split("").map((n) => Oa[n]).join("");
  for (; t.length >= Cc; ) {
    let n = t.substring(0, Cc);
    t = parseInt(n, 10) % 97 + t.substring(n.length);
  }
  let e = String(98 - parseInt(t, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
const sd = function() {
  const r = {};
  for (let t = 0; t < 36; t++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    r[e] = BigInt(t);
  }
  return r;
}();
function id(r) {
  r = r.toLowerCase();
  let t = ed;
  for (let e = 0; e < r.length; e++)
    t = t * nd + sd[r[e]];
  return t;
}
function W(r) {
  if (y(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const t = Tc(r);
    return y(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === r, "bad address checksum", "address", r), t;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    y(r.substring(2, 4) === rd(r), "bad icap checksum", "address", r);
    let t = id(r.substring(4)).toString(16);
    for (; t.length < 40; )
      t = "0" + t;
    return Tc("0x" + t);
  }
  y(!1, "invalid address", "address", r);
}
function od(r) {
  const t = W(r.from);
  let n = F(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, W(at(st(Ds([t, n])), 12));
}
function zu(r) {
  return r && typeof r.getAddress == "function";
}
async function Co(r, t) {
  const e = await t;
  return (e == null || e === "0x0000000000000000000000000000000000000000") && (P(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), y(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), W(e);
}
function St(r, t) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? W(r) : (P(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), Co(r, t.resolveName(r)));
  if (zu(r))
    return Co(r, r.getAddress());
  if (r && typeof r.then == "function")
    return Co(r, r);
  y(!1, "unsupported addressable value", "target", r);
}
const Ue = {};
function R(r, t) {
  let e = !1;
  return t < 0 && (e = !0, t *= -1), new Ct(Ue, `${e ? "" : "u"}int${t}`, r, { signed: e, width: t });
}
function z(r, t) {
  return new Ct(Ue, `bytes${t || ""}`, r, { size: t });
}
const Oc = Symbol.for("_ethers_typed");
var jn;
const De = class De {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    w(this, "type");
    /**
     *  The actual value.
     */
    w(this, "value");
    b(this, jn, void 0);
    /**
     *  @_ignore:
     */
    w(this, "_typedSymbol");
    s == null && (s = null), $i(Ue, t, "Typed"), M(this, { _typedSymbol: Oc, type: e, value: n }), d(this, jn, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((t) => t.format()).join(",")})` : this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple")
      throw TypeError("not a tuple");
    return l(this, jn);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array")
      throw TypeError("not an array");
    return l(this, jn) === !0 ? -1 : l(this, jn) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(t, e) {
    return new De(Ue, t, e);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(t) {
    return R(t, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(t) {
    return R(t, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(t) {
    return R(t, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(t) {
    return R(t, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(t) {
    return R(t, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(t) {
    return R(t, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(t) {
    return R(t, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(t) {
    return R(t, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(t) {
    return R(t, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(t) {
    return R(t, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(t) {
    return R(t, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(t) {
    return R(t, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(t) {
    return R(t, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(t) {
    return R(t, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(t) {
    return R(t, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(t) {
    return R(t, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(t) {
    return R(t, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(t) {
    return R(t, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(t) {
    return R(t, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(t) {
    return R(t, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(t) {
    return R(t, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(t) {
    return R(t, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(t) {
    return R(t, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(t) {
    return R(t, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(t) {
    return R(t, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(t) {
    return R(t, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(t) {
    return R(t, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(t) {
    return R(t, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(t) {
    return R(t, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(t) {
    return R(t, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(t) {
    return R(t, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(t) {
    return R(t, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(t) {
    return R(t, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(t) {
    return R(t, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(t) {
    return R(t, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(t) {
    return R(t, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(t) {
    return R(t, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(t) {
    return R(t, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(t) {
    return R(t, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(t) {
    return R(t, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(t) {
    return R(t, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(t) {
    return R(t, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(t) {
    return R(t, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(t) {
    return R(t, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(t) {
    return R(t, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(t) {
    return R(t, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(t) {
    return R(t, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(t) {
    return R(t, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(t) {
    return R(t, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(t) {
    return R(t, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(t) {
    return R(t, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(t) {
    return R(t, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(t) {
    return R(t, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(t) {
    return R(t, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(t) {
    return R(t, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(t) {
    return R(t, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(t) {
    return R(t, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(t) {
    return R(t, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(t) {
    return R(t, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(t) {
    return R(t, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(t) {
    return R(t, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(t) {
    return R(t, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(t) {
    return R(t, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(t) {
    return R(t, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(t) {
    return R(t, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(t) {
    return R(t, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(t) {
    return z(t, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(t) {
    return z(t, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(t) {
    return z(t, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(t) {
    return z(t, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(t) {
    return z(t, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(t) {
    return z(t, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(t) {
    return z(t, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(t) {
    return z(t, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(t) {
    return z(t, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(t) {
    return z(t, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(t) {
    return z(t, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(t) {
    return z(t, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(t) {
    return z(t, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(t) {
    return z(t, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(t) {
    return z(t, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(t) {
    return z(t, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(t) {
    return z(t, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(t) {
    return z(t, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(t) {
    return z(t, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(t) {
    return z(t, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(t) {
    return z(t, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(t) {
    return z(t, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(t) {
    return z(t, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(t) {
    return z(t, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(t) {
    return z(t, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(t) {
    return z(t, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(t) {
    return z(t, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(t) {
    return z(t, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(t) {
    return z(t, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(t) {
    return z(t, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(t) {
    return z(t, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(t) {
    return z(t, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(t) {
    return new De(Ue, "address", t);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(t) {
    return new De(Ue, "bool", !!t);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(t) {
    return new De(Ue, "bytes", t);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(t) {
    return new De(Ue, "string", t);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(t) {
    return new De(Ue, "overrides", Object.assign({}, t));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(t) {
    return t && typeof t == "object" && "_typedSymbol" in t && t._typedSymbol === Oc;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(t, e) {
    if (De.isTyped(t)) {
      if (t.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
      return t.value;
    }
    return t;
  }
};
jn = new WeakMap();
let Ct = De;
class ad extends nn {
  constructor(t) {
    super("address", "address", t, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(t, e) {
    let n = Ct.dereference(e, "string");
    try {
      n = W(n);
    } catch (s) {
      return this._throwError(s.message, e);
    }
    return t.writeValue(n);
  }
  decode(t) {
    return W(On(t.readValue(), 20));
  }
}
class cd extends nn {
  constructor(e) {
    super(e.name, e.type, "_", e.dynamic);
    w(this, "coder");
    this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, n) {
    return this.coder.encode(e, n);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
function Ku(r, t, e) {
  let n = [];
  if (Array.isArray(e))
    n = e;
  else if (e && typeof e == "object") {
    let c = {};
    n = t.map((u) => {
      const f = u.localName;
      return P(f, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), P(!c[f], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), c[f] = !0, e[f];
    });
  } else
    y(!1, "invalid tuple value", "tuple", e);
  y(t.length === n.length, "types/value length mismatch", "tuple", e);
  let s = new Qo(), i = new Qo(), o = [];
  t.forEach((c, u) => {
    let f = n[u];
    if (c.dynamic) {
      let h = i.length;
      c.encode(i, f);
      let g = s.writeUpdatableValue();
      o.push((A) => {
        g(A + h);
      });
    } else
      c.encode(s, f);
  }), o.forEach((c) => {
    c(s.length);
  });
  let a = r.appendWriter(s);
  return a += r.appendWriter(i), a;
}
function Wu(r, t) {
  let e = [], n = [], s = r.subReader(0);
  return t.forEach((i) => {
    let o = null;
    if (i.dynamic) {
      let a = r.readIndex(), c = s.subReader(a);
      try {
        o = i.decode(c);
      } catch (u) {
        if (se(u, "BUFFER_OVERRUN"))
          throw u;
        o = u, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    } else
      try {
        o = i.decode(r);
      } catch (a) {
        if (se(a, "BUFFER_OVERRUN"))
          throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    if (o == null)
      throw new Error("investigate");
    e.push(o), n.push(i.localName || null);
  }), Ui.fromItems(e, n);
}
class ud extends nn {
  constructor(e, n, s) {
    const i = e.type + "[" + (n >= 0 ? n : "") + "]", o = n === -1 || e.dynamic;
    super("array", i, s, o);
    w(this, "coder");
    w(this, "length");
    M(this, { coder: e, length: n });
  }
  defaultValue() {
    const e = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(e);
    return n;
  }
  encode(e, n) {
    const s = Ct.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, e.writeValue(s.length)), pu(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let o = [];
    for (let a = 0; a < s.length; a++)
      o.push(this.coder);
    return Ku(e, o, s);
  }
  decode(e) {
    let n = this.length;
    n === -1 && (n = e.readIndex(), P(n * kt <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: e.bytes, offset: n * kt, length: e.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new cd(this.coder));
    return Wu(e, s);
  }
}
class ld extends nn {
  constructor(t) {
    super("bool", "bool", t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    const n = Ct.dereference(e, "bool");
    return t.writeValue(n ? 1 : 0);
  }
  decode(t) {
    return !!t.readValue();
  }
}
class Yu extends nn {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(t, e) {
    e = Ht(e);
    let n = t.writeValue(e.length);
    return n += t.writeBytes(e), n;
  }
  decode(t) {
    return t.readBytes(t.readIndex(), !0);
  }
}
class fd extends Yu {
  constructor(t) {
    super("bytes", t);
  }
  decode(t) {
    return D(super.decode(t));
  }
}
class hd extends nn {
  constructor(e, n) {
    let s = "bytes" + String(e);
    super(s, s, n, !1);
    w(this, "size");
    M(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, n) {
    let s = Ht(Ct.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), e.writeBytes(s);
  }
  decode(e) {
    return D(e.readBytes(this.size));
  }
}
const dd = new Uint8Array([]);
class pd extends nn {
  constructor(t) {
    super("null", "", t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError("not null", e), t.writeBytes(dd);
  }
  decode(t) {
    return t.readBytes(0), null;
  }
}
const gd = BigInt(0), yd = BigInt(1), md = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class wd extends nn {
  constructor(e, n, s) {
    const i = (n ? "int" : "uint") + e * 8;
    super(i, i, s, !1);
    w(this, "size");
    w(this, "signed");
    M(this, { size: e, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, n) {
    let s = F(Ct.dereference(n, this.type)), i = Ns(md, kt * 8);
    if (this.signed) {
      let o = Ns(i, this.size * 8 - 1);
      (s > o || s < -(o + yd)) && this._throwError("value out-of-bounds", n), s = mu(s, 8 * kt);
    } else
      (s < gd || s > Ns(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return e.writeValue(s);
  }
  decode(e) {
    let n = Ns(e.readValue(), this.size * 8);
    return this.signed && (n = Of(n, this.size * 8)), n;
  }
}
class Ad extends Yu {
  constructor(t) {
    super("string", t);
  }
  defaultValue() {
    return "";
  }
  encode(t, e) {
    return super.encode(t, $e(Ct.dereference(e, "string")));
  }
  decode(t) {
    return Aa(super.decode(t));
  }
}
class Ai extends nn {
  constructor(e, n) {
    let s = !1;
    const i = [];
    e.forEach((a) => {
      a.dynamic && (s = !0), i.push(a.type);
    });
    const o = "tuple(" + i.join(",") + ")";
    super("tuple", o, n, s);
    w(this, "coders");
    M(this, { coders: Object.freeze(e.slice()) });
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((s) => {
      e.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const o = i.localName;
      return o && (s[o] || (s[o] = 0), s[o]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let o = s.localName;
      !o || n[o] !== 1 || (o === "length" && (o = "_length"), e[o] == null && (e[o] = e[i]));
    }), Object.freeze(e);
  }
  encode(e, n) {
    const s = Ct.dereference(n, "tuple");
    return Ku(e, this.coders, s);
  }
  decode(e) {
    return Wu(e, this.coders);
  }
}
function ir(r) {
  return st($e(r));
}
var bd = "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";
const Ic = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), Bc = 4;
function Ed(r) {
  let t = 0;
  function e() {
    return r[t++] << 8 | r[t++];
  }
  let n = e(), s = 1, i = [0, 1];
  for (let G = 1; G < n; G++)
    i.push(s += e());
  let o = e(), a = t;
  t += o;
  let c = 0, u = 0;
  function f() {
    return c == 0 && (u = u << 8 | r[t++], c = 8), u >> --c & 1;
  }
  const h = 31, g = 2 ** h, A = g >>> 1, E = A >> 1, m = g - 1;
  let v = 0;
  for (let G = 0; G < h; G++)
    v = v << 1 | f();
  let x = [], B = 0, C = g;
  for (; ; ) {
    let G = Math.floor(((v - B + 1) * s - 1) / C), U = 0, L = n;
    for (; L - U > 1; ) {
      let Y = U + L >>> 1;
      G < i[Y] ? L = Y : U = Y;
    }
    if (U == 0)
      break;
    x.push(U);
    let S = B + Math.floor(C * i[U] / s), ot = B + Math.floor(C * i[U + 1] / s) - 1;
    for (; !((S ^ ot) & A); )
      v = v << 1 & m | f(), S = S << 1 & m, ot = ot << 1 & m | 1;
    for (; S & ~ot & E; )
      v = v & A | v << 1 & m >>> 1 | f(), S = S << 1 ^ A, ot = (ot ^ A) << 1 | A | 1;
    B = S, C = 1 + ot - S;
  }
  let _ = n - 4;
  return x.map((G) => {
    switch (G - _) {
      case 3:
        return _ + 65792 + (r[a++] << 16 | r[a++] << 8 | r[a++]);
      case 2:
        return _ + 256 + (r[a++] << 8 | r[a++]);
      case 1:
        return _ + r[a++];
      default:
        return G - 1;
    }
  });
}
function vd(r) {
  let t = 0;
  return () => r[t++];
}
function Zu(r) {
  return vd(Ed(xd(r)));
}
function xd(r) {
  let t = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => t[s.charCodeAt(0)] = i);
  let e = r.length, n = new Uint8Array(6 * e >> 3);
  for (let s = 0, i = 0, o = 0, a = 0; s < e; s++)
    a = a << 6 | t[r.charCodeAt(s)], o += 6, o >= 8 && (n[i++] = a >> (o -= 8));
  return n;
}
function Pd(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function Nd(r, t) {
  let e = Array(r);
  for (let n = 0, s = 0; n < r; n++)
    e[n] = s += Pd(t());
  return e;
}
function Ms(r, t = 0) {
  let e = [];
  for (; ; ) {
    let n = r(), s = r();
    if (!s)
      break;
    t += n;
    for (let i = 0; i < s; i++)
      e.push(t + i);
    t += s + 1;
  }
  return e;
}
function Xu(r) {
  return Gs(() => {
    let t = Ms(r);
    if (t.length)
      return t;
  });
}
function qu(r) {
  let t = [];
  for (; ; ) {
    let e = r();
    if (e == 0)
      break;
    t.push(Td(e, r));
  }
  for (; ; ) {
    let e = r() - 1;
    if (e < 0)
      break;
    t.push(Cd(e, r));
  }
  return t.flat();
}
function Gs(r) {
  let t = [];
  for (; ; ) {
    let e = r(t.length);
    if (!e)
      break;
    t.push(e);
  }
  return t;
}
function $u(r, t, e) {
  let n = Array(r).fill().map(() => []);
  for (let s = 0; s < t; s++)
    Nd(r, e).forEach((i, o) => n[o].push(i));
  return n;
}
function Td(r, t) {
  let e = 1 + t(), n = t(), s = Gs(t);
  return $u(s.length, 1 + r, t).flatMap((o, a) => {
    let [c, ...u] = o;
    return Array(s[a]).fill().map((f, h) => {
      let g = h * n;
      return [c + h * e, u.map((A) => A + g)];
    });
  });
}
function Cd(r, t) {
  let e = 1 + t();
  return $u(e, 1 + r, t).map((s) => [s[0], s.slice(1)]);
}
function Od(r) {
  let t = [], e = Ms(r);
  return s(n([]), []), t;
  function n(i) {
    let o = r(), a = Gs(() => {
      let c = Ms(r).map((u) => e[u]);
      if (c.length)
        return n(c);
    });
    return { S: o, B: a, Q: i };
  }
  function s({ S: i, B: o }, a, c) {
    if (!(i & 4 && c === a[a.length - 1])) {
      i & 2 && (c = a[a.length - 1]), i & 1 && t.push(a);
      for (let u of o)
        for (let f of u.Q)
          s(u, [...a, f], c);
    }
  }
}
function Id(r) {
  return r.toString(16).toUpperCase().padStart(2, "0");
}
function tl(r) {
  return `{${Id(r)}}`;
}
function Bd(r) {
  let t = [];
  for (let e = 0, n = r.length; e < n; ) {
    let s = r.codePointAt(e);
    e += s < 65536 ? 1 : 2, t.push(s);
  }
  return t;
}
function ms(r) {
  let e = r.length;
  if (e < 4096)
    return String.fromCodePoint(...r);
  let n = [];
  for (let s = 0; s < e; )
    n.push(String.fromCodePoint(...r.slice(s, s += 4096)));
  return n.join("");
}
function Rd(r, t) {
  let e = r.length, n = e - t.length;
  for (let s = 0; n == 0 && s < e; s++)
    n = r[s] - t[s];
  return n;
}
var kd = "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";
const Qs = 44032, Fi = 4352, Li = 4449, Mi = 4519, el = 19, nl = 21, ws = 28, Gi = nl * ws, Sd = el * Gi, Ud = Qs + Sd, Dd = Fi + el, Fd = Li + nl, Ld = Mi + ws;
function Cs(r) {
  return r >> 24 & 255;
}
function rl(r) {
  return r & 16777215;
}
let Ko, Rc, Wo, Ti;
function Md() {
  let r = Zu(kd);
  Ko = new Map(Xu(r).flatMap((t, e) => t.map((n) => [n, e + 1 << 24]))), Rc = new Set(Ms(r)), Wo = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
  for (let [t, e] of qu(r)) {
    if (!Rc.has(t) && e.length == 2) {
      let [n, s] = e, i = Ti.get(n);
      i || (i = /* @__PURE__ */ new Map(), Ti.set(n, i)), i.set(s, t);
    }
    Wo.set(t, e.reverse());
  }
}
function sl(r) {
  return r >= Qs && r < Ud;
}
function Gd(r, t) {
  if (r >= Fi && r < Dd && t >= Li && t < Fd)
    return Qs + (r - Fi) * Gi + (t - Li) * ws;
  if (sl(r) && t > Mi && t < Ld && (r - Qs) % ws == 0)
    return r + (t - Mi);
  {
    let e = Ti.get(r);
    return e && (e = e.get(t), e) ? e : -1;
  }
}
function il(r) {
  Ko || Md();
  let t = [], e = [], n = !1;
  function s(i) {
    let o = Ko.get(i);
    o && (n = !0, i |= o), t.push(i);
  }
  for (let i of r)
    for (; ; ) {
      if (i < 128)
        t.push(i);
      else if (sl(i)) {
        let o = i - Qs, a = o / Gi | 0, c = o % Gi / ws | 0, u = o % ws;
        s(Fi + a), s(Li + c), u > 0 && s(Mi + u);
      } else {
        let o = Wo.get(i);
        o ? e.push(...o) : s(i);
      }
      if (!e.length)
        break;
      i = e.pop();
    }
  if (n && t.length > 1) {
    let i = Cs(t[0]);
    for (let o = 1; o < t.length; o++) {
      let a = Cs(t[o]);
      if (a == 0 || i <= a) {
        i = a;
        continue;
      }
      let c = o - 1;
      for (; ; ) {
        let u = t[c + 1];
        if (t[c + 1] = t[c], t[c] = u, !c || (i = Cs(t[--c]), i <= a))
          break;
      }
      i = Cs(t[o]);
    }
  }
  return t;
}
function Qd(r) {
  let t = [], e = [], n = -1, s = 0;
  for (let i of r) {
    let o = Cs(i), a = rl(i);
    if (n == -1)
      o == 0 ? n = a : t.push(a);
    else if (s > 0 && s >= o)
      o == 0 ? (t.push(n, ...e), e.length = 0, n = a) : e.push(a), s = o;
    else {
      let c = Gd(n, a);
      c >= 0 ? n = c : s == 0 && o == 0 ? (t.push(n), n = a) : (e.push(a), s = o);
    }
  }
  return n >= 0 && t.push(n, ...e), t;
}
function ol(r) {
  return il(r).map(rl);
}
function Hd(r) {
  return Qd(il(r));
}
const kc = 45, al = ".", cl = 65039, ul = 1, vr = (r) => Array.from(r);
function Hs(r, t) {
  return r.P.has(t) || r.Q.has(t);
}
class _d extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Yo, ll, Dn, Zo, fl, Cr, Oo, yr, hl, Sc, Xo;
function Ia() {
  if (Yo)
    return;
  let r = Zu(bd);
  const t = () => Ms(r), e = () => new Set(t());
  Yo = new Map(qu(r)), ll = e(), Dn = t(), Zo = new Set(t().map((f) => Dn[f])), Dn = new Set(Dn), fl = e(), e();
  let n = Xu(r), s = r();
  const i = () => new Set(t().flatMap((f) => n[f]).concat(t()));
  Cr = Gs((f) => {
    let h = Gs(r).map((g) => g + 96);
    if (h.length) {
      let g = f >= s;
      h[0] -= 32, h = ms(h), g && (h = `Restricted[${h}]`);
      let A = i(), E = i(), m = !r();
      return { N: h, P: A, Q: E, M: m, R: g };
    }
  }), Oo = e(), yr = /* @__PURE__ */ new Map();
  let o = t().concat(vr(Oo)).sort((f, h) => f - h);
  o.forEach((f, h) => {
    let g = r(), A = o[h] = g ? o[h - g] : { V: [], M: /* @__PURE__ */ new Map() };
    A.V.push(f), Oo.has(f) || yr.set(f, A);
  });
  for (let { V: f, M: h } of new Set(yr.values())) {
    let g = [];
    for (let E of f) {
      let m = Cr.filter((x) => Hs(x, E)), v = g.find(({ G: x }) => m.some((B) => x.has(B)));
      v || (v = { G: /* @__PURE__ */ new Set(), V: [] }, g.push(v)), v.V.push(E), m.forEach((x) => v.G.add(x));
    }
    let A = g.flatMap((E) => vr(E.G));
    for (let { G: E, V: m } of g) {
      let v = new Set(A.filter((x) => !E.has(x)));
      for (let x of m)
        h.set(x, v);
    }
  }
  let a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  const u = (f) => a.has(f) ? c.add(f) : a.add(f);
  for (let f of Cr) {
    for (let h of f.P)
      u(h);
    for (let h of f.Q)
      u(h);
  }
  for (let f of a)
    !yr.has(f) && !c.has(f) && yr.set(f, ul);
  hl = new Set(vr(a).concat(vr(ol(a)))), Sc = Od(r).map((f) => _d.from(f)).sort(Rd), Xo = /* @__PURE__ */ new Map();
  for (let f of Sc) {
    let h = [Xo];
    for (let g of f) {
      let A = h.map((E) => {
        let m = E.get(g);
        return m || (m = /* @__PURE__ */ new Map(), E.set(g, m)), m;
      });
      g === cl ? h.push(...A) : h = A;
    }
    for (let g of h)
      g.V = f;
  }
}
function Ba(r) {
  return (dl(r) ? "" : `${Ra(io([r]))} `) + tl(r);
}
function Ra(r) {
  return `"${r}"‎`;
}
function Vd(r) {
  if (r.length >= 4 && r[2] == kc && r[3] == kc)
    throw new Error(`invalid label extension: "${ms(r.slice(0, 4))}"`);
}
function Jd(r) {
  for (let e = r.lastIndexOf(95); e > 0; )
    if (r[--e] !== 95)
      throw new Error("underscore allowed only at start");
}
function jd(r) {
  let t = r[0], e = Ic.get(t);
  if (e)
    throw Rs(`leading ${e}`);
  let n = r.length, s = -1;
  for (let i = 1; i < n; i++) {
    t = r[i];
    let o = Ic.get(t);
    if (o) {
      if (s == i)
        throw Rs(`${e} + ${o}`);
      s = i + 1, e = o;
    }
  }
  if (s == n)
    throw Rs(`trailing ${e}`);
}
function io(r, t = tl) {
  let e = [];
  zd(r[0]) && e.push("◌");
  let n = 0, s = r.length;
  for (let i = 0; i < s; i++) {
    let o = r[i];
    dl(o) && (e.push(ms(r.slice(n, i))), e.push(t(o)), n = i + 1);
  }
  return e.push(ms(r.slice(n, s))), e.join("");
}
function zd(r) {
  return Ia(), Dn.has(r);
}
function dl(r) {
  return Ia(), fl.has(r);
}
function Kd(r) {
  return Xd(Wd(r, Hd, tp));
}
function Wd(r, t, e) {
  if (!r)
    return [];
  Ia();
  let n = 0;
  return r.split(al).map((s) => {
    let i = Bd(s), o = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let a = o.tokens = $d(i, t, e), c = a.length, u;
      if (!c)
        throw new Error("empty label");
      let f = o.output = a.flat();
      if (Jd(f), !(o.emoji = c > 1 || a[0].is_emoji) && f.every((g) => g < 128))
        Vd(f), u = "ASCII";
      else {
        let g = a.flatMap((A) => A.is_emoji ? [] : A);
        if (!g.length)
          u = "Emoji";
        else {
          if (Dn.has(f[0]))
            throw Rs("leading combining mark");
          for (let m = 1; m < c; m++) {
            let v = a[m];
            if (!v.is_emoji && Dn.has(v[0]))
              throw Rs(`emoji + combining mark: "${ms(a[m - 1])} + ${io([v[0]])}"`);
          }
          jd(f);
          let A = vr(new Set(g)), [E] = Zd(A);
          qd(E, g), Yd(E, A), u = E.N;
        }
      }
      o.type = u;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function Yd(r, t) {
  let e, n = [];
  for (let s of t) {
    let i = yr.get(s);
    if (i === ul)
      return;
    if (i) {
      let o = i.M.get(s);
      if (e = e ? e.filter((a) => o.has(a)) : vr(o), !e.length)
        return;
    } else
      n.push(s);
  }
  if (e) {
    for (let s of e)
      if (n.every((i) => Hs(s, i)))
        throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
  }
}
function Zd(r) {
  let t = Cr;
  for (let e of r) {
    let n = t.filter((s) => Hs(s, e));
    if (!n.length)
      throw Cr.some((s) => Hs(s, e)) ? gl(t[0], e) : pl(e);
    if (t = n, n.length == 1)
      break;
  }
  return t;
}
function Xd(r) {
  return r.map(({ input: t, error: e, output: n }) => {
    if (e) {
      let s = e.message;
      throw new Error(r.length == 1 ? s : `Invalid label ${Ra(io(t))}: ${s}`);
    }
    return ms(n);
  }).join(al);
}
function pl(r) {
  return new Error(`disallowed character: ${Ba(r)}`);
}
function gl(r, t) {
  let e = Ba(t), n = Cr.find((s) => s.P.has(t));
  return n && (e = `${n.N} ${e}`), new Error(`illegal mixture: ${r.N} + ${e}`);
}
function Rs(r) {
  return new Error(`illegal placement: ${r}`);
}
function qd(r, t) {
  for (let e of t)
    if (!Hs(r, e))
      throw gl(r, e);
  if (r.M) {
    let e = ol(t);
    for (let n = 1, s = e.length; n < s; n++)
      if (Zo.has(e[n])) {
        let i = n + 1;
        for (let o; i < s && Zo.has(o = e[i]); i++)
          for (let a = n; a < i; a++)
            if (e[a] == o)
              throw new Error(`duplicate non-spacing marks: ${Ba(o)}`);
        if (i - n > Bc)
          throw new Error(`excessive non-spacing marks: ${Ra(io(e.slice(n - 1, i)))} (${i - n}/${Bc})`);
        n = i;
      }
  }
}
function $d(r, t, e) {
  let n = [], s = [];
  for (r = r.slice().reverse(); r.length; ) {
    let i = ep(r);
    if (i)
      s.length && (n.push(t(s)), s = []), n.push(e(i));
    else {
      let o = r.pop();
      if (hl.has(o))
        s.push(o);
      else {
        let a = Yo.get(o);
        if (a)
          s.push(...a);
        else if (!ll.has(o))
          throw pl(o);
      }
    }
  }
  return s.length && n.push(t(s)), n;
}
function tp(r) {
  return r.filter((t) => t != cl);
}
function ep(r, t) {
  let e = Xo, n, s = r.length;
  for (; s && (e = e.get(r[--s]), !!e); ) {
    let { V: i } = e;
    i && (n = i, t && t.push(...r.slice(s).reverse()), r.length = s);
  }
  return n;
}
const yl = new Uint8Array(32);
yl.fill(0);
function Uc(r) {
  return y(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
}
function ml(r) {
  const t = $e(np(r)), e = [];
  if (r.length === 0)
    return e;
  let n = 0;
  for (let s = 0; s < t.length; s++)
    t[s] === 46 && (e.push(Uc(t.slice(n, s))), n = s + 1);
  return y(n < t.length, "invalid ENS name; empty component", "name", r), e.push(Uc(t.slice(n))), e;
}
function np(r) {
  try {
    if (r.length === 0)
      throw new Error("empty label");
    return Kd(r);
  } catch (t) {
    y(!1, `invalid ENS name (${t.message})`, "name", r);
  }
}
function qo(r) {
  y(typeof r == "string", "invalid ENS name; not a string", "name", r), y(r.length, "invalid ENS name (empty label)", "name", r);
  let t = yl;
  const e = ml(r);
  for (; e.length; )
    t = st(pt([t, st(e.pop())]));
  return D(t);
}
function rp(r) {
  return D(pt(ml(r).map((t) => {
    if (t.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const e = new Uint8Array(t.length + 1);
    return e.set(t, 1), e[0] = e.length - 1, e;
  }))) + "00";
}
function Io(r, t) {
  return {
    address: W(r),
    storageKeys: t.map((e, n) => (y(it(e, 32), "invalid slot", `storageKeys[${n}]`, e), e.toLowerCase()))
  };
}
function ur(r) {
  if (Array.isArray(r))
    return r.map((e, n) => Array.isArray(e) ? (y(e.length === 2, "invalid slot set", `value[${n}]`, e), Io(e[0], e[1])) : (y(e != null && typeof e == "object", "invalid address-slot set", "value", r), Io(e.address, e.storageKeys)));
  y(r != null && typeof r == "object", "invalid access list", "value", r);
  const t = Object.keys(r).map((e) => {
    const n = r[e].reduce((s, i) => (s[i] = !0, s), {});
    return Io(e, Object.keys(n).sort());
  });
  return t.sort((e, n) => e.address.localeCompare(n.address)), t;
}
function sp(r) {
  let t;
  return typeof r == "string" ? t = Ls.computePublicKey(r, !1) : t = r.publicKey, W(st("0x" + t.substring(4)).substring(26));
}
function ip(r, t) {
  return sp(Ls.recoverPublicKey(r, t));
}
const Gt = BigInt(0), op = BigInt(2), ap = BigInt(27), cp = BigInt(28), up = BigInt(35), lp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function ka(r) {
  return r === "0x" ? null : W(r);
}
function wl(r, t) {
  try {
    return ur(r);
  } catch (e) {
    y(!1, e.message, t, r);
  }
}
function oo(r, t) {
  return r === "0x" ? 0 : V(r, t);
}
function Rt(r, t) {
  if (r === "0x")
    return Gt;
  const e = F(r, t);
  return y(e <= lp, "value exceeds uint size", t, e), e;
}
function wt(r, t) {
  const e = F(r, "value"), n = Kt(e);
  return y(n.length <= 32, "value too large", `tx.${t}`, e), n;
}
function Al(r) {
  return ur(r).map((t) => [t.address, t.storageKeys]);
}
function fp(r) {
  const t = ba(r);
  y(Array.isArray(t) && (t.length === 9 || t.length === 6), "invalid field count for legacy transaction", "data", r);
  const e = {
    type: 0,
    nonce: oo(t[0], "nonce"),
    gasPrice: Rt(t[1], "gasPrice"),
    gasLimit: Rt(t[2], "gasLimit"),
    to: ka(t[3]),
    value: Rt(t[4], "value"),
    data: D(t[5]),
    chainId: Gt
  };
  if (t.length === 6)
    return e;
  const n = Rt(t[6], "v"), s = Rt(t[7], "r"), i = Rt(t[8], "s");
  if (s === Gt && i === Gt)
    e.chainId = n;
  else {
    let o = (n - up) / op;
    o < Gt && (o = Gt), e.chainId = o, y(o !== Gt || n === ap || n === cp, "non-canonical legacy v", "v", t[6]), e.signature = ye.from({
      r: sr(t[7], 32),
      s: sr(t[8], 32),
      v: n
    }), e.hash = st(r);
  }
  return e;
}
function Dc(r, t) {
  const e = [
    wt(r.nonce || 0, "nonce"),
    wt(r.gasPrice || 0, "gasPrice"),
    wt(r.gasLimit || 0, "gasLimit"),
    r.to != null ? W(r.to) : "0x",
    wt(r.value || 0, "value"),
    r.data || "0x"
  ];
  let n = Gt;
  if (r.chainId != Gt)
    n = F(r.chainId, "tx.chainId"), y(!t || t.networkV == null || t.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", t);
  else if (r.signature) {
    const i = r.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!t)
    return n !== Gt && (e.push(Kt(n)), e.push("0x"), e.push("0x")), Ds(e);
  let s = BigInt(27 + t.yParity);
  return n !== Gt ? s = ye.getChainIdV(n, t.v) : BigInt(t.v) !== s && y(!1, "tx.chainId/sig.v mismatch", "sig", t), e.push(Kt(s)), e.push(Kt(t.r)), e.push(Kt(t.s)), Ds(e);
}
function bl(r, t) {
  let e;
  try {
    if (e = oo(t[0], "yParity"), e !== 0 && e !== 1)
      throw new Error("bad yParity");
  } catch {
    y(!1, "invalid yParity", "yParity", t[0]);
  }
  const n = sr(t[1], 32), s = sr(t[2], 32), i = ye.from({ r: n, s, yParity: e });
  r.signature = i;
}
function hp(r) {
  const t = ba(X(r).slice(1));
  y(Array.isArray(t) && (t.length === 9 || t.length === 12), "invalid field count for transaction type: 2", "data", D(r));
  const e = Rt(t[2], "maxPriorityFeePerGas"), n = Rt(t[3], "maxFeePerGas"), s = {
    type: 2,
    chainId: Rt(t[0], "chainId"),
    nonce: oo(t[1], "nonce"),
    maxPriorityFeePerGas: e,
    maxFeePerGas: n,
    gasPrice: null,
    gasLimit: Rt(t[4], "gasLimit"),
    to: ka(t[5]),
    value: Rt(t[6], "value"),
    data: D(t[7]),
    accessList: wl(t[8], "accessList")
  };
  return t.length === 9 || (s.hash = st(r), bl(s, t.slice(9))), s;
}
function Fc(r, t) {
  const e = [
    wt(r.chainId || 0, "chainId"),
    wt(r.nonce || 0, "nonce"),
    wt(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    wt(r.maxFeePerGas || 0, "maxFeePerGas"),
    wt(r.gasLimit || 0, "gasLimit"),
    r.to != null ? W(r.to) : "0x",
    wt(r.value || 0, "value"),
    r.data || "0x",
    Al(r.accessList || [])
  ];
  return t && (e.push(wt(t.yParity, "yParity")), e.push(Kt(t.r)), e.push(Kt(t.s))), pt(["0x02", Ds(e)]);
}
function dp(r) {
  const t = ba(X(r).slice(1));
  y(Array.isArray(t) && (t.length === 8 || t.length === 11), "invalid field count for transaction type: 1", "data", D(r));
  const e = {
    type: 1,
    chainId: Rt(t[0], "chainId"),
    nonce: oo(t[1], "nonce"),
    gasPrice: Rt(t[2], "gasPrice"),
    gasLimit: Rt(t[3], "gasLimit"),
    to: ka(t[4]),
    value: Rt(t[5], "value"),
    data: D(t[6]),
    accessList: wl(t[7], "accessList")
  };
  return t.length === 8 || (e.hash = st(r), bl(e, t.slice(8))), e;
}
function Lc(r, t) {
  const e = [
    wt(r.chainId || 0, "chainId"),
    wt(r.nonce || 0, "nonce"),
    wt(r.gasPrice || 0, "gasPrice"),
    wt(r.gasLimit || 0, "gasLimit"),
    r.to != null ? W(r.to) : "0x",
    wt(r.value || 0, "value"),
    r.data || "0x",
    Al(r.accessList || [])
  ];
  return t && (e.push(wt(t.yParity, "recoveryParam")), e.push(Kt(t.r)), e.push(Kt(t.s))), pt(["0x01", Ds(e)]);
}
var _e, Mr, Gr, Qr, Hr, _r, Vr, Jr, jr, zr, Kr, Wr;
const ln = class ln {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    b(this, _e, void 0);
    b(this, Mr, void 0);
    b(this, Gr, void 0);
    b(this, Qr, void 0);
    b(this, Hr, void 0);
    b(this, _r, void 0);
    b(this, Vr, void 0);
    b(this, Jr, void 0);
    b(this, jr, void 0);
    b(this, zr, void 0);
    b(this, Kr, void 0);
    b(this, Wr, void 0);
    d(this, _e, null), d(this, Mr, null), d(this, Qr, 0), d(this, Hr, BigInt(0)), d(this, _r, null), d(this, Vr, null), d(this, Jr, null), d(this, Gr, "0x"), d(this, jr, BigInt(0)), d(this, zr, BigInt(0)), d(this, Kr, null), d(this, Wr, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return l(this, _e);
  }
  set type(t) {
    switch (t) {
      case null:
        d(this, _e, null);
        break;
      case 0:
      case "legacy":
        d(this, _e, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        d(this, _e, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        d(this, _e, 2);
        break;
      default:
        y(!1, "unsupported transaction type", "type", t);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    return l(this, Mr);
  }
  set to(t) {
    d(this, Mr, t == null ? null : W(t));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return l(this, Qr);
  }
  set nonce(t) {
    d(this, Qr, V(t, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return l(this, Hr);
  }
  set gasLimit(t) {
    d(this, Hr, F(t));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const t = l(this, _r);
    return t == null && (this.type === 0 || this.type === 1) ? Gt : t;
  }
  set gasPrice(t) {
    d(this, _r, t == null ? null : F(t, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const t = l(this, Vr);
    return t ?? (this.type === 2 ? Gt : null);
  }
  set maxPriorityFeePerGas(t) {
    d(this, Vr, t == null ? null : F(t, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const t = l(this, Jr);
    return t ?? (this.type === 2 ? Gt : null);
  }
  set maxFeePerGas(t) {
    d(this, Jr, t == null ? null : F(t, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return l(this, Gr);
  }
  set data(t) {
    d(this, Gr, D(t));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return l(this, jr);
  }
  set value(t) {
    d(this, jr, F(t, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return l(this, zr);
  }
  set chainId(t) {
    d(this, zr, F(t));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return l(this, Kr) || null;
  }
  set signature(t) {
    d(this, Kr, t == null ? null : ye.from(t));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const t = l(this, Wr) || null;
    return t ?? (this.type === 1 || this.type === 2 ? [] : null);
  }
  set accessList(t) {
    d(this, Wr, t == null ? null : ur(t));
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : st(this.serialized);
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return st(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : ip(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : Ls.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    switch (P(this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" }), this.inferType()) {
      case 0:
        return Dc(this, this.signature);
      case 1:
        return Lc(this, this.signature);
      case 2:
        return Fc(this, this.signature);
    }
    P(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    switch (this.inferType()) {
      case 0:
        return Dc(this);
      case 1:
        return Lc(this);
      case 2:
        return Fc(this);
    }
    P(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".unsignedSerialized" });
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    return this.inferTypes().pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const t = this.gasPrice != null, e = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null;
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && P(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), P(!e || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), P(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const s = [];
    return this.type != null ? s.push(this.type) : e ? s.push(2) : t ? (s.push(1), n || s.push(0)) : n ? (s.push(1), s.push(2)) : (s.push(0), s.push(1), s.push(2)), s.sort(), s;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return ln.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const t = (e) => e == null ? null : e.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: t(this.gasLimit),
      gasPrice: t(this.gasPrice),
      maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
      maxFeePerGas: t(this.maxFeePerGas),
      value: t(this.value),
      chainId: t(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(t) {
    if (t == null)
      return new ln();
    if (typeof t == "string") {
      const n = X(t);
      if (n[0] >= 127)
        return ln.from(fp(n));
      switch (n[0]) {
        case 1:
          return ln.from(dp(n));
        case 2:
          return ln.from(hp(n));
      }
      P(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const e = new ln();
    return t.type != null && (e.type = t.type), t.to != null && (e.to = t.to), t.nonce != null && (e.nonce = t.nonce), t.gasLimit != null && (e.gasLimit = t.gasLimit), t.gasPrice != null && (e.gasPrice = t.gasPrice), t.maxPriorityFeePerGas != null && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), t.maxFeePerGas != null && (e.maxFeePerGas = t.maxFeePerGas), t.data != null && (e.data = t.data), t.value != null && (e.value = t.value), t.chainId != null && (e.chainId = t.chainId), t.signature != null && (e.signature = ye.from(t.signature)), t.accessList != null && (e.accessList = t.accessList), t.hash != null && (y(e.isSigned(), "unsigned transaction cannot define hash", "tx", t), y(e.hash === t.hash, "hash mismatch", "tx", t)), t.from != null && (y(e.isSigned(), "unsigned transaction cannot define from", "tx", t), y(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e;
  }
};
_e = new WeakMap(), Mr = new WeakMap(), Gr = new WeakMap(), Qr = new WeakMap(), Hr = new WeakMap(), _r = new WeakMap(), Vr = new WeakMap(), Jr = new WeakMap(), jr = new WeakMap(), zr = new WeakMap(), Kr = new WeakMap(), Wr = new WeakMap();
let Qi = ln;
const El = new Uint8Array(32);
El.fill(0);
const pp = BigInt(-1), vl = BigInt(0), xl = BigInt(1), gp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function yp(r) {
  const t = X(r), e = t.length % 32;
  return e ? pt([t, El.slice(e)]) : D(t);
}
const mp = On(xl, 32), wp = On(vl, 32), Mc = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, Bo = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function Gc(r) {
  return function(t) {
    return y(typeof t == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t), t;
  };
}
const Ap = {
  name: Gc("name"),
  version: Gc("version"),
  chainId: function(r) {
    const t = F(r, "domain.chainId");
    return y(t >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(t) ? Number(t) : Er(t);
  },
  verifyingContract: function(r) {
    try {
      return W(r).toLowerCase();
    } catch {
    }
    y(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
  },
  salt: function(r) {
    const t = X(r, "domain.salt");
    return y(t.length === 32, 'invalid domain value "salt"', "domain.salt", r), D(t);
  }
};
function Ro(r) {
  {
    const t = r.match(/^(u?)int(\d*)$/);
    if (t) {
      const e = t[1] === "", n = parseInt(t[2] || "256");
      y(n % 8 === 0 && n !== 0 && n <= 256 && (t[2] == null || t[2] === String(n)), "invalid numeric width", "type", r);
      const s = Ns(gp, e ? n - 1 : n), i = e ? (s + xl) * pp : vl;
      return function(o) {
        const a = F(o, "value");
        return y(a >= i && a <= s, `value out-of-bounds for ${r}`, "value", a), On(e ? mu(a, 256) : a, 32);
      };
    }
  }
  {
    const t = r.match(/^bytes(\d+)$/);
    if (t) {
      const e = parseInt(t[1]);
      return y(e !== 0 && e <= 32 && t[1] === String(e), "invalid bytes width", "type", r), function(n) {
        const s = X(n);
        return y(s.length === e, `invalid length for ${r}`, "value", n), yp(n);
      };
    }
  }
  switch (r) {
    case "address":
      return function(t) {
        return sr(W(t), 32);
      };
    case "bool":
      return function(t) {
        return t ? mp : wp;
      };
    case "bytes":
      return function(t) {
        return st(t);
      };
    case "string":
      return function(t) {
        return ir(t);
      };
  }
  return null;
}
function Qc(r, t) {
  return `${r}(${t.map(({ name: e, type: n }) => n + " " + e).join(",")})`;
}
var Ws, Ve, Yr, Ki, Pl;
const Xt = class Xt {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(t) {
    b(this, Ki);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    w(this, "primaryType");
    b(this, Ws, void 0);
    b(this, Ve, void 0);
    b(this, Yr, void 0);
    d(this, Ws, JSON.stringify(t)), d(this, Ve, /* @__PURE__ */ new Map()), d(this, Yr, /* @__PURE__ */ new Map());
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
    Object.keys(t).forEach((a) => {
      e.set(a, /* @__PURE__ */ new Set()), n.set(a, []), s.set(a, /* @__PURE__ */ new Set());
    });
    for (const a in t) {
      const c = /* @__PURE__ */ new Set();
      for (const u of t[a]) {
        y(!c.has(u.name), `duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(a)}`, "types", t), c.add(u.name);
        const f = u.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
        y(f !== a, `circular type reference to ${JSON.stringify(f)}`, "types", t), !Ro(f) && (y(n.has(f), `unknown type ${JSON.stringify(f)}`, "types", t), n.get(f).push(a), e.get(a).add(f));
      }
    }
    const i = Array.from(n.keys()).filter((a) => n.get(a).length === 0);
    y(i.length !== 0, "missing primary type", "types", t), y(i.length === 1, `ambiguous primary types or unused types: ${i.map((a) => JSON.stringify(a)).join(", ")}`, "types", t), M(this, { primaryType: i[0] });
    function o(a, c) {
      y(!c.has(a), `circular type reference to ${JSON.stringify(a)}`, "types", t), c.add(a);
      for (const u of e.get(a))
        if (n.has(u)) {
          o(u, c);
          for (const f of c)
            s.get(f).add(u);
        }
      c.delete(a);
    }
    o(this.primaryType, /* @__PURE__ */ new Set());
    for (const [a, c] of s) {
      const u = Array.from(c);
      u.sort(), l(this, Ve).set(a, Qc(a, t[a]) + u.map((f) => Qc(f, t[f])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(l(this, Ws));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(t) {
    let e = l(this, Yr).get(t);
    return e || (e = I(this, Ki, Pl).call(this, t), l(this, Yr).set(t, e)), e;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(t) {
    const e = l(this, Ve).get(t);
    return y(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(t, e) {
    return this.getEncoder(t)(e);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(t, e) {
    return st(this.encodeData(t, e));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(t) {
    return this.encodeData(this.primaryType, t);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(t) {
    return this.hashStruct(this.primaryType, t);
  }
  /**
   *  @_ignore:
   */
  _visit(t, e, n) {
    if (Ro(t))
      return n(t, e);
    const s = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (s)
      return y(!s[3] || parseInt(s[3]) === e.length, `array length mismatch; expected length ${parseInt(s[3])}`, "value", e), e.map((o) => this._visit(s[1], o, n));
    const i = this.types[t];
    if (i)
      return i.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, e[a], n), o), {});
    y(!1, `unknown type: ${t}`, "type", t);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(t, e) {
    return this._visit(this.primaryType, t, e);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(t) {
    return new Xt(t);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(t) {
    return Xt.from(t).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(t, e, n) {
    return Xt.from(e).hashStruct(t, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(t) {
    const e = [];
    for (const n in t) {
      if (t[n] == null)
        continue;
      const s = Mc[n];
      y(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), e.push({ name: n, type: s });
    }
    return e.sort((n, s) => Bo.indexOf(n.name) - Bo.indexOf(s.name)), Xt.hashStruct("EIP712Domain", { EIP712Domain: e }, t);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(t, e, n) {
    return pt([
      "0x1901",
      Xt.hashDomain(t),
      Xt.from(e).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(t, e, n) {
    return st(Xt.encode(t, e, n));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(t, e, n, s) {
    t = Object.assign({}, t);
    for (const a in t)
      t[a] == null && delete t[a];
    const i = {};
    t.verifyingContract && !it(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
    const o = Xt.from(e);
    o.visit(n, (a, c) => (a === "address" && !it(c, 20) && (i[c] = "0x"), c));
    for (const a in i)
      i[a] = await s(a);
    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), n = o.visit(n, (a, c) => a === "address" && i[c] ? i[c] : c), { domain: t, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(t, e, n) {
    Xt.hashDomain(t);
    const s = {}, i = [];
    Bo.forEach((c) => {
      const u = t[c];
      u != null && (s[c] = Ap[c](u), i.push({ name: c, type: Mc[c] }));
    });
    const o = Xt.from(e), a = Object.assign({}, e);
    return y(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", e), a.EIP712Domain = i, o.encode(n), {
      types: a,
      domain: s,
      primaryType: o.primaryType,
      message: o.visit(n, (c, u) => {
        if (c.match(/^bytes(\d*)/))
          return D(X(u));
        if (c.match(/^u?int/))
          return F(u).toString();
        switch (c) {
          case "address":
            return u.toLowerCase();
          case "bool":
            return !!u;
          case "string":
            return y(typeof u == "string", "invalid string", "value", u), u;
        }
        y(!1, "unsupported type", "type", c);
      })
    };
  }
};
Ws = new WeakMap(), Ve = new WeakMap(), Yr = new WeakMap(), Ki = new WeakSet(), Pl = function(t) {
  {
    const s = Ro(t);
    if (s)
      return s;
  }
  const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
  if (e) {
    const s = e[1], i = this.getEncoder(s);
    return (o) => {
      y(!e[3] || parseInt(e[3]) === o.length, `array length mismatch; expected length ${parseInt(e[3])}`, "value", o);
      let a = o.map(i);
      return l(this, Ve).has(s) && (a = a.map(st)), st(pt(a));
    };
  }
  const n = this.types[t];
  if (n) {
    const s = ir(l(this, Ve).get(t));
    return (i) => {
      const o = n.map(({ name: a, type: c }) => {
        const u = this.getEncoder(c)(i[a]);
        return l(this, Ve).has(c) ? st(u) : u;
      });
      return o.unshift(s), pt(o);
    };
  }
  y(!1, `unknown type: ${t}`, "type", t);
};
let Hi = Xt;
function Ut(r) {
  const t = /* @__PURE__ */ new Set();
  return r.forEach((e) => t.add(e)), Object.freeze(t);
}
const bp = "external public payable", Ep = Ut(bp.split(" ")), Nl = "constant external internal payable private public pure view", vp = Ut(Nl.split(" ")), Tl = "constructor error event fallback function receive struct", Cl = Ut(Tl.split(" ")), Ol = "calldata memory storage payable indexed", xp = Ut(Ol.split(" ")), Pp = "tuple returns", Np = [Tl, Ol, Pp, Nl].join(" "), Tp = Ut(Np.split(" ")), Cp = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, Op = new RegExp("^(\\s*)"), Ip = new RegExp("^([0-9]+)"), Bp = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), Il = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), Bl = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var mt, de, Ys, $o;
const Wi = class Wi {
  constructor(t) {
    b(this, Ys);
    b(this, mt, void 0);
    b(this, de, void 0);
    d(this, mt, 0), d(this, de, t.slice());
  }
  get offset() {
    return l(this, mt);
  }
  get length() {
    return l(this, de).length - l(this, mt);
  }
  clone() {
    return new Wi(l(this, de));
  }
  reset() {
    d(this, mt, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(t) {
    const e = this.peek();
    if (e.type !== "KEYWORD" || !t.has(e.text))
      throw new Error(`expected keyword ${e.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(t) {
    if (this.peek().type !== t)
      throw new Error(`expected ${t}; got ${JSON.stringify(this.peek())}`);
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = I(this, Ys, $o).call(this, l(this, mt) + 1, t.match + 1);
    return d(this, mt, t.match + 1), e;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = [];
    for (; l(this, mt) < t.match - 1; ) {
      const n = this.peek().linkNext;
      e.push(I(this, Ys, $o).call(this, l(this, mt) + 1, n)), d(this, mt, n);
    }
    return d(this, mt, t.match + 1), e;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (l(this, mt) >= l(this, de).length)
      throw new Error("out-of-bounds");
    return l(this, de)[l(this, mt)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(t) {
    const e = this.peekType("KEYWORD");
    return e != null && t.has(e) ? e : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(t) {
    if (this.length === 0)
      return null;
    const e = this.peek();
    return e.type === t ? e.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const t = this.peek();
    return vs(this, mt)._++, t;
  }
  toString() {
    const t = [];
    for (let e = l(this, mt); e < l(this, de).length; e++) {
      const n = l(this, de)[e];
      t.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${t.join(" ")}>`;
  }
};
mt = new WeakMap(), de = new WeakMap(), Ys = new WeakSet(), $o = function(t = 0, e = 0) {
  return new Wi(l(this, de).slice(t, e).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - t,
    linkBack: n.linkBack - t,
    linkNext: n.linkNext - t
  }))));
};
let me = Wi;
function Bn(r) {
  const t = [], e = (o) => {
    const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${a} at ${i}: ${o}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let o = r.substring(i), a = o.match(Op);
    a && (i += a[1].length, o = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    t.push(c);
    let u = Cp[o[0]] || "";
    if (u) {
      if (c.type = u, c.text = o[0], i++, u === "OPEN_PAREN")
        n.push(t.length - 1), s.push(t.length - 1);
      else if (u == "CLOSE_PAREN")
        n.length === 0 && e("no matching open bracket"), c.match = n.pop(), t[c.match].match = t.length - 1, c.depth--, c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1;
      else if (u === "COMMA")
        c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1, s.push(t.length - 1);
      else if (u === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (u === "CLOSE_BRACKET") {
        let f = t.pop().text;
        if (t.length > 0 && t[t.length - 1].type === "NUMBER") {
          const h = t.pop().text;
          f = h + f, t[t.length - 1].value = V(h);
        }
        if (t.length === 0 || t[t.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        t[t.length - 1].text += f;
      }
      continue;
    }
    if (a = o.match(Bp), a) {
      if (c.text = a[1], i += c.text.length, Tp.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(Bl)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (a = o.match(Ip), a) {
      c.text = a[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
  }
  return new me(t.map((o) => Object.freeze(o)));
}
function Hc(r, t) {
  let e = [];
  for (const n in t.keys())
    r.has(n) && e.push(n);
  if (e.length > 1)
    throw new Error(`conflicting types: ${e.join(", ")}`);
}
function ao(r, t) {
  if (t.peekKeyword(Cl)) {
    const e = t.pop().text;
    if (e !== r)
      throw new Error(`expected ${r}, got ${e}`);
  }
  return t.popType("ID");
}
function en(r, t) {
  const e = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || t && !t.has(n))
      break;
    if (r.pop(), e.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    e.add(n);
  }
  return Object.freeze(e);
}
function Rl(r) {
  let t = en(r, vp);
  return Hc(t, Ut("constant payable nonpayable".split(" "))), Hc(t, Ut("pure view payable nonpayable".split(" "))), t.has("view") ? "view" : t.has("pure") ? "pure" : t.has("payable") ? "payable" : t.has("nonpayable") ? "nonpayable" : t.has("constant") ? "view" : "nonpayable";
}
function tn(r, t) {
  return r.popParams().map((e) => At.from(e, t));
}
function kl(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return F(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function or(r) {
  if (r.length)
    throw new Error(`unexpected tokens: ${r.toString()}`);
}
const Rp = new RegExp(/^(.*)\[([0-9]*)\]$/);
function _c(r) {
  const t = r.match(Bl);
  if (y(t, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (t[2]) {
    const e = parseInt(t[2]);
    y(e !== 0 && e <= 32, "invalid bytes length", "type", r);
  } else if (t[3]) {
    const e = parseInt(t[3]);
    y(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const rt = {}, _t = Symbol.for("_ethers_internal"), Vc = "_ParamTypeInternal", Jc = "_ErrorInternal", jc = "_EventInternal", zc = "_ConstructorInternal", Kc = "_FallbackInternal", Wc = "_FunctionInternal", Yc = "_StructInternal";
var Zr, Ci;
const qt = class qt {
  /**
   *  @private
   */
  constructor(t, e, n, s, i, o, a, c) {
    b(this, Zr);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    w(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    w(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    w(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    w(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    w(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    w(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    w(this, "arrayChildren");
    if ($i(t, rt, "ParamType"), Object.defineProperty(this, _t, { value: Vc }), o && (o = Object.freeze(o.slice())), s === "array") {
      if (a == null || c == null)
        throw new Error("");
    } else if (a != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (o == null)
        throw new Error("");
    } else if (o != null)
      throw new Error("");
    M(this, {
      name: e,
      type: n,
      baseType: s,
      indexed: i,
      components: o,
      arrayLength: a,
      arrayChildren: c
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(t)))), JSON.stringify(s);
    }
    let e = "";
    return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? (t !== "sighash" && (e += this.type), e += "(" + this.components.map((n) => n.format(t)).join(t === "full" ? ", " : ",") + ")") : e += this.type, t !== "sighash" && (this.indexed === !0 && (e += " indexed"), t === "full" && this.name && (e += " " + this.name)), e;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(t, e) {
    if (this.isArray()) {
      if (!Array.isArray(t))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s) => n.arrayChildren.walk(s, e));
    }
    if (this.isTuple()) {
      if (!Array.isArray(t))
        throw new Error("invalid tuple value");
      if (t.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s, i) => n.components[i].walk(s, e));
    }
    return e(this.type, t);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(t, e) {
    const n = [], s = [t];
    return I(this, Zr, Ci).call(this, n, t, e, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(t, e) {
    if (qt.isParamType(t))
      return t;
    if (typeof t == "string")
      try {
        return qt.from(Bn(t), e);
      } catch {
        y(!1, "invalid param type", "obj", t);
      }
    else if (t instanceof me) {
      let a = "", c = "", u = null;
      en(t, Ut(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (c = "tuple", u = t.popParams().map((m) => qt.from(m)), a = `tuple(${u.map((m) => m.format()).join(",")})`) : (a = _c(t.popType("TYPE")), c = a);
      let f = null, h = null;
      for (; t.length && t.peekType("BRACKET"); ) {
        const m = t.pop();
        f = new qt(rt, "", a, c, null, u, h, f), h = m.value, a += m.text, c = "array", u = null;
      }
      let g = null;
      if (en(t, xp).has("indexed")) {
        if (!e)
          throw new Error("");
        g = !0;
      }
      const E = t.peekType("ID") ? t.pop().text : "";
      if (t.length)
        throw new Error("leftover tokens");
      return new qt(rt, E, a, c, g, u, h, f);
    }
    const n = t.name;
    y(!n || typeof n == "string" && n.match(Il), "invalid name", "obj.name", n);
    let s = t.indexed;
    s != null && (y(e, "parameter cannot be indexed", "obj.indexed", t.indexed), s = !!s);
    let i = t.type, o = i.match(Rp);
    if (o) {
      const a = parseInt(o[2] || "-1"), c = qt.from({
        type: o[1],
        components: t.components
      });
      return new qt(rt, n || "", i, "array", s, null, a, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const a = t.components != null ? t.components.map((u) => qt.from(u)) : null;
      return new qt(rt, n || "", i, "tuple", s, a, null, null);
    }
    return i = _c(t.type), new qt(rt, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(t) {
    return t && t[_t] === Vc;
  }
};
Zr = new WeakSet(), Ci = function(t, e, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(e))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && e.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const o = this.arrayChildren, a = e.slice();
    a.forEach((c, u) => {
      var f;
      I(f = o, Zr, Ci).call(f, t, c, n, (h) => {
        a[u] = h;
      });
    }), s(a);
    return;
  }
  if (this.isTuple()) {
    const o = this.components;
    let a;
    if (Array.isArray(e))
      a = e.slice();
    else {
      if (e == null || typeof e != "object")
        throw new Error("invalid tuple value");
      a = o.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in e))
          throw new Error(`missing value for component ${c.name}`);
        return e[c.name];
      });
    }
    if (a.length !== this.components.length)
      throw new Error("array is wrong length");
    a.forEach((c, u) => {
      var f;
      I(f = o[u], Zr, Ci).call(f, t, c, n, (h) => {
        a[u] = h;
      });
    }), s(a);
    return;
  }
  const i = n(this.type, e);
  i.then ? t.push(async function() {
    s(await i);
  }()) : s(i);
};
let At = qt;
class ar {
  /**
   *  @private
   */
  constructor(t, e, n) {
    /**
     *  The type of the fragment.
     */
    w(this, "type");
    /**
     *  The inputs for the fragment.
     */
    w(this, "inputs");
    $i(t, rt, "Fragment"), n = Object.freeze(n.slice()), M(this, { type: e, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(t) {
    if (typeof t == "string") {
      try {
        ar.from(JSON.parse(t));
      } catch {
      }
      return ar.from(Bn(t));
    }
    if (t instanceof me)
      switch (t.peekKeyword(Cl)) {
        case "constructor":
          return Xe.from(t);
        case "error":
          return Qt.from(t);
        case "event":
          return Oe.from(t);
        case "fallback":
        case "receive":
          return Fe.from(t);
        case "function":
          return Ie.from(t);
        case "struct":
          return rr.from(t);
      }
    else if (typeof t == "object") {
      switch (t.type) {
        case "constructor":
          return Xe.from(t);
        case "error":
          return Qt.from(t);
        case "event":
          return Oe.from(t);
        case "fallback":
        case "receive":
          return Fe.from(t);
        case "function":
          return Ie.from(t);
        case "struct":
          return rr.from(t);
      }
      P(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    y(!1, "unsupported frgament object", "obj", t);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(t) {
    return Xe.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(t) {
    return Qt.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(t) {
    return Oe.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(t) {
    return Ie.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(t) {
    return rr.isFragment(t);
  }
}
class co extends ar {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, n, i);
    /**
     *  The name of the fragment.
     */
    w(this, "name");
    y(typeof s == "string" && s.match(Il), "invalid identifier", "name", s), i = Object.freeze(i.slice()), M(this, { name: s });
  }
}
function _s(r, t) {
  return "(" + t.map((e) => e.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class Qt extends co {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "error", e, n), Object.defineProperty(this, _t, { value: Jc });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return ir(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
    const e = [];
    return t !== "sighash" && e.push("error"), e.push(this.name + _s(t, this.inputs)), e.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(t) {
    if (Qt.isFragment(t))
      return t;
    if (typeof t == "string")
      return Qt.from(Bn(t));
    if (t instanceof me) {
      const e = ao("error", t), n = tn(t);
      return or(t), new Qt(rt, e, n);
    }
    return new Qt(rt, t.name, t.inputs ? t.inputs.map(At.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(t) {
    return t && t[_t] === Jc;
  }
}
class Oe extends co {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    w(this, "anonymous");
    Object.defineProperty(this, _t, { value: jc }), M(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return ir(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("event"), n.push(this.name + _s(e, this.inputs)), e !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(e, n) {
    return n = (n || []).map((i) => At.from(i)), new Oe(rt, e, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(e) {
    if (Oe.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Oe.from(Bn(e));
      } catch {
        y(!1, "invalid event fragment", "obj", e);
      }
    else if (e instanceof me) {
      const n = ao("event", e), s = tn(e, !0), i = !!en(e, Ut(["anonymous"])).has("anonymous");
      return or(e), new Oe(rt, n, s, i);
    }
    return new Oe(rt, e.name, e.inputs ? e.inputs.map((n) => At.from(n, !0)) : [], !!e.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(e) {
    return e && e[_t] === jc;
  }
}
class Xe extends ar {
  /**
   *  @private
   */
  constructor(e, n, s, i, o) {
    super(e, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    w(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    w(this, "gas");
    Object.defineProperty(this, _t, { value: zc }), M(this, { payable: i, gas: o });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(e) {
    if (P(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), e === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [`constructor${_s(e, this.inputs)}`];
    return n.push(this.payable ? "payable" : "nonpayable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(e) {
    if (Xe.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Xe.from(Bn(e));
      } catch {
        y(!1, "invalid constuctor fragment", "obj", e);
      }
    else if (e instanceof me) {
      en(e, Ut(["constructor"]));
      const n = tn(e), s = !!en(e, Ep).has("payable"), i = kl(e);
      return or(e), new Xe(rt, "constructor", n, s, i);
    }
    return new Xe(rt, "constructor", e.inputs ? e.inputs.map(At.from) : [], !!e.payable, e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(e) {
    return e && e[_t] === zc;
  }
}
class Fe extends ar {
  constructor(e, n, s) {
    super(e, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    w(this, "payable");
    Object.defineProperty(this, _t, { value: Kc }), M(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(e) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (e === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(e) {
    if (Fe.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Fe.from(Bn(e));
      } catch {
        y(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof me) {
      const n = e.toString(), s = e.peekKeyword(Ut(["fallback", "receive"]));
      if (y(s, "type must be fallback or receive", "obj", n), e.popKeyword(Ut(["fallback", "receive"])) === "receive") {
        const c = tn(e);
        return y(c.length === 0, "receive cannot have arguments", "obj.inputs", c), en(e, Ut(["payable"])), or(e), new Fe(rt, [], !0);
      }
      let o = tn(e);
      o.length ? y(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map((c) => c.format("minimal")).join(", ")) : o = [At.from("bytes")];
      const a = Rl(e);
      if (y(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), en(e, Ut(["returns"])).has("returns")) {
        const c = tn(e);
        y(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((u) => u.format("minimal")).join(", "));
      }
      return or(e), new Fe(rt, o, a === "payable");
    }
    if (e.type === "receive")
      return new Fe(rt, [], !0);
    if (e.type === "fallback") {
      const n = [At.from("bytes")], s = e.stateMutability === "payable";
      return new Fe(rt, n, s);
    }
    y(!1, "invalid fallback description", "obj", e);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(e) {
    return e && e[_t] === Kc;
  }
}
class Ie extends co {
  /**
   *  @private
   */
  constructor(e, n, s, i, o, a) {
    super(e, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    w(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    w(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    w(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    w(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    w(this, "gas");
    Object.defineProperty(this, _t, { value: Wc }), o = Object.freeze(o.slice()), M(this, { constant: s === "view" || s === "pure", gas: a, outputs: o, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return ir(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("function"), n.push(this.name + _s(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(_s(e, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(e, n) {
    return n = (n || []).map((i) => At.from(i)), new Ie(rt, e, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(e) {
    if (Ie.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Ie.from(Bn(e));
      } catch {
        y(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof me) {
      const s = ao("function", e), i = tn(e), o = Rl(e);
      let a = [];
      en(e, Ut(["returns"])).has("returns") && (a = tn(e));
      const c = kl(e);
      return or(e), new Ie(rt, s, o, i, a, c);
    }
    let n = e.stateMutability;
    return n == null && (n = "payable", typeof e.constant == "boolean" ? (n = "view", e.constant || (n = "payable", typeof e.payable == "boolean" && !e.payable && (n = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (n = "nonpayable")), new Ie(rt, e.name, n, e.inputs ? e.inputs.map(At.from) : [], e.outputs ? e.outputs.map(At.from) : [], e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(e) {
    return e && e[_t] === Wc;
  }
}
class rr extends co {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "struct", e, n), Object.defineProperty(this, _t, { value: Yc });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(t) {
    if (typeof t == "string")
      try {
        return rr.from(Bn(t));
      } catch {
        y(!1, "invalid struct fragment", "obj", t);
      }
    else if (t instanceof me) {
      const e = ao("struct", t), n = tn(t);
      return or(t), new rr(rt, e, n);
    }
    return new rr(rt, t.name, t.inputs ? t.inputs.map(At.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(t) {
    return t && t[_t] === Yc;
  }
}
const we = /* @__PURE__ */ new Map();
we.set(0, "GENERIC_PANIC");
we.set(1, "ASSERT_FALSE");
we.set(17, "OVERFLOW");
we.set(18, "DIVIDE_BY_ZERO");
we.set(33, "ENUM_RANGE_ERROR");
we.set(34, "BAD_STORAGE_DATA");
we.set(49, "STACK_UNDERFLOW");
we.set(50, "ARRAY_RANGE_ERROR");
we.set(65, "OUT_OF_MEMORY");
we.set(81, "UNINITIALIZED_FUNCTION_CALL");
const kp = new RegExp(/^bytes([0-9]*)$/), Sp = new RegExp(/^(u?int)([0-9]*)$/);
let ko = null;
function Up(r, t, e, n) {
  let s = "missing revert data", i = null;
  const o = null;
  let a = null;
  if (e) {
    s = "execution reverted";
    const u = X(e);
    if (e = D(e), u.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (u.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (D(u.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], u.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (D(u.slice(0, 4)) === "0x4e487b71")
      try {
        const f = Number(n.decode(["uint256"], u.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [f]
        }, i = `Panic due to ${we.get(f) || "UNKNOWN"}(${f})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: t.to ? W(t.to) : null,
    data: t.data || "0x"
  };
  return t.from && (c.from = W(t.from)), dt(s, "CALL_EXCEPTION", {
    action: r,
    data: e,
    reason: i,
    transaction: c,
    invocation: o,
    revert: a
  });
}
var pn, mr;
const Yi = class Yi {
  constructor() {
    b(this, pn);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(t) {
    const e = t.map((s) => I(this, pn, mr).call(this, At.from(s)));
    return new Ai(e, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(t, e) {
    pu(e.length, t.length, "types/values length mismatch");
    const n = t.map((o) => I(this, pn, mr).call(this, At.from(o))), s = new Ai(n, "_"), i = new Qo();
    return s.encode(i, e), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(t, e, n) {
    const s = t.map((o) => I(this, pn, mr).call(this, At.from(o)));
    return new Ai(s, "_").decode(new Ho(e, n));
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return ko == null && (ko = new Yi()), ko;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(t, e, n) {
    return Up(t, e, n, Yi.defaultAbiCoder());
  }
};
pn = new WeakSet(), mr = function(t) {
  if (t.isArray())
    return new ud(I(this, pn, mr).call(this, t.arrayChildren), t.arrayLength, t.name);
  if (t.isTuple())
    return new Ai(t.components.map((n) => I(this, pn, mr).call(this, n)), t.name);
  switch (t.baseType) {
    case "address":
      return new ad(t.name);
    case "bool":
      return new ld(t.name);
    case "string":
      return new Ad(t.name);
    case "bytes":
      return new fd(t.name);
    case "":
      return new pd(t.name);
  }
  let e = t.type.match(Sp);
  if (e) {
    let n = parseInt(e[2] || "256");
    return y(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new wd(n / 8, e[1] === "int", t.name);
  }
  if (e = t.type.match(kp), e) {
    let n = parseInt(e[1]);
    return y(n !== 0 && n <= 32, "invalid bytes length", "param", t), new hd(n, t.name);
  }
  y(!1, "invalid type", "type", t.type);
};
let Vs = Yi;
class Dp {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    w(this, "fragment");
    /**
     *  The name of the Event.
     */
    w(this, "name");
    /**
     *  The full Event signature.
     */
    w(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    w(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    w(this, "args");
    const s = t.name, i = t.format();
    M(this, {
      fragment: t,
      name: s,
      signature: i,
      topic: e,
      args: n
    });
  }
}
class Fp {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    w(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    w(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    w(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    w(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    w(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    w(this, "value");
    const i = t.name, o = t.format();
    M(this, {
      fragment: t,
      name: i,
      args: n,
      signature: o,
      selector: e,
      value: s
    });
  }
}
class Lp {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment.
     */
    w(this, "fragment");
    /**
     *  The name of the Error.
     */
    w(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    w(this, "args");
    /**
     *  The full Error signature.
     */
    w(this, "signature");
    /**
     *  The selector for the Error.
     */
    w(this, "selector");
    const s = t.name, i = t.format();
    M(this, {
      fragment: t,
      name: s,
      args: n,
      signature: i,
      selector: e
    });
  }
}
class Zc {
  /**
   *  @_ignore:
   */
  constructor(t) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    w(this, "hash");
    /**
     *  @_ignore:
     */
    w(this, "_isIndexed");
    M(this, { hash: t, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const Xc = {
  0: "generic panic",
  1: "assert(false)",
  17: "arithmetic overflow",
  18: "division or modulo by zero",
  33: "enum overflow",
  34: "invalid encoded storage byte array accessed",
  49: "out-of-bounds array access; popping on an empty array",
  50: "out-of-bounds access of an array or bytesN",
  65: "out of memory",
  81: "uninitialized function"
}, qc = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (r) => {
      let t = "unknown panic code";
      return r >= 0 && r <= 255 && Xc[r.toString()] && (t = Xc[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${t})`;
    }
  }
};
var ve, xe, Pe, xt, Xr, Oi, qr, Ii;
const xr = class xr {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(t) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    b(this, Xr);
    // Find an event definition by any means necessary (unless it is ambiguous)
    b(this, qr);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    w(this, "fragments");
    /**
     *  The Contract constructor.
     */
    w(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    w(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    w(this, "receive");
    b(this, ve, void 0);
    b(this, xe, void 0);
    b(this, Pe, void 0);
    //    #structs: Map<string, StructFragment>;
    b(this, xt, void 0);
    let e = [];
    typeof t == "string" ? e = JSON.parse(t) : e = t, d(this, Pe, /* @__PURE__ */ new Map()), d(this, ve, /* @__PURE__ */ new Map()), d(this, xe, /* @__PURE__ */ new Map());
    const n = [];
    for (const o of e)
      try {
        n.push(ar.from(o));
      } catch (a) {
        console.log("EE", a);
      }
    M(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    d(this, xt, this.getAbiCoder()), this.fragments.forEach((o, a) => {
      let c;
      switch (o.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          M(this, { deploy: o });
          return;
        case "fallback":
          o.inputs.length === 0 ? i = !0 : (y(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
          return;
        case "function":
          c = l(this, Pe);
          break;
        case "event":
          c = l(this, xe);
          break;
        case "error":
          c = l(this, ve);
          break;
        default:
          return;
      }
      const u = o.format();
      c.has(u) || c.set(u, o);
    }), this.deploy || M(this, {
      deploy: Xe.from("constructor()")
    }), M(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(t) {
    const e = t ? "minimal" : "full";
    return this.fragments.map((s) => s.format(e));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const t = this.fragments.map((e) => e.format("json"));
    return JSON.stringify(t.map((e) => JSON.parse(e)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return Vs.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(t) {
    const e = I(this, Xr, Oi).call(this, t, null, !1);
    return y(e, "no matching function", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(t) {
    return !!I(this, Xr, Oi).call(this, t, null, !1);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(t, e) {
    return I(this, Xr, Oi).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(t) {
    const e = Array.from(l(this, Pe).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, Pe).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(t) {
    const e = I(this, qr, Ii).call(this, t, null, !1);
    return y(e, "no matching event", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(t) {
    return !!I(this, qr, Ii).call(this, t, null, !1);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(t, e) {
    return I(this, qr, Ii).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(t) {
    const e = Array.from(l(this, xe).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, xe).get(s), n);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(t, e) {
    if (it(t)) {
      const s = t.toLowerCase();
      if (qc[s])
        return Qt.from(qc[s].signature);
      for (const i of l(this, ve).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [i, o] of l(this, ve))
        i.split(
          "("
          /* fix:) */
        )[0] === t && s.push(o);
      if (s.length === 0)
        return t === "Error" ? Qt.from("error Error(string)") : t === "Panic" ? Qt.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((o) => JSON.stringify(o.format())).join(", ");
        y(!1, `ambiguous error description (i.e. ${i})`, "name", t);
      }
      return s[0];
    }
    if (t = Qt.from(t).format(), t === "Error(string)")
      return Qt.from("error Error(string)");
    if (t === "Panic(uint256)")
      return Qt.from("error Panic(uint256)");
    const n = l(this, ve).get(t);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(t) {
    const e = Array.from(l(this, ve).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, ve).get(s), n);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(t, e) {
    return l(this, xt).decode(t, e);
  }
  _encodeParams(t, e) {
    return l(this, xt).encode(t, e);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(t) {
    return this._encodeParams(this.deploy.inputs, t || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      y(n, "unknown error", "fragment", t), t = n;
    }
    return y(at(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, at(e, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      y(n, "unknown error", "fragment", t), t = n;
    }
    return pt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      y(n, "unknown function", "fragment", t), t = n;
    }
    return y(at(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, at(e, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      y(n, "unknown function", "fragment", t), t = n;
    }
    return pt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const i = this.getFunction(t);
      y(i, "unknown function", "fragment", t), t = i;
    }
    let n = "invalid length for result data";
    const s = Ht(e);
    if (s.length % 32 === 0)
      try {
        return l(this, xt).decode(t.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    P(!1, n, "BAD_DATA", {
      value: D(s),
      info: { method: t.name, signature: t.format() }
    });
  }
  makeError(t, e) {
    const n = X(t, "data"), s = Vs.getBuiltinCallException("call", e, n), i = "execution reverted (unknown custom error)";
    if (s.message.startsWith(i)) {
      const a = D(n.slice(0, 4)), c = this.getError(a);
      if (c)
        try {
          const u = l(this, xt).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: u
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const o = this.parseTransaction(e);
    return o && (s.invocation = {
      method: o.name,
      signature: o.signature,
      args: o.args
    }), s;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      y(n, "unknown function", "fragment", t), t = n;
    }
    return D(l(this, xt).encode(t.outputs, e || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(t, e) {
    if (typeof t == "string") {
      const i = this.getEvent(t);
      y(i, "unknown event", "eventFragment", t), t = i;
    }
    P(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", { count: e.length, expectedCount: t.inputs.length });
    const n = [];
    t.anonymous || n.push(t.topicHash);
    const s = (i, o) => i.type === "string" ? ir(o) : i.type === "bytes" ? st(D(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = On(o) : i.type.match(/^bytes/) ? o = Cf(o, 32) : i.type === "address" && l(this, xt).encode(["address"], [o]), sr(D(o), 32));
    for (e.forEach((i, o) => {
      const a = t.inputs[o];
      if (!a.indexed) {
        y(i == null, "cannot filter non-indexed parameters; must be null", "contract." + a.name, i);
        return;
      }
      i == null ? n.push(null) : a.baseType === "array" || a.baseType === "tuple" ? y(!1, "filtering with tuples or arrays not supported", "contract." + a.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(a, c))) : n.push(s(a, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(t, e) {
    if (typeof t == "string") {
      const o = this.getEvent(t);
      y(o, "unknown event", "eventFragment", t), t = o;
    }
    const n = [], s = [], i = [];
    return t.anonymous || n.push(t.topicHash), y(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((o, a) => {
      const c = e[a];
      if (o.indexed)
        if (o.type === "string")
          n.push(ir(c));
        else if (o.type === "bytes")
          n.push(st(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(l(this, xt).encode([o.type], [c]));
        }
      else
        s.push(o), i.push(c);
    }), {
      data: l(this, xt).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(t, e, n) {
    if (typeof t == "string") {
      const A = this.getEvent(t);
      y(A, "unknown event", "eventFragment", t), t = A;
    }
    if (n != null && !t.anonymous) {
      const A = t.topicHash;
      y(it(n[0], 32) && n[0].toLowerCase() === A, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], o = [];
    t.inputs.forEach((A, E) => {
      A.indexed ? A.type === "string" || A.type === "bytes" || A.baseType === "tuple" || A.baseType === "array" ? (s.push(At.from({ type: "bytes32", name: A.name })), o.push(!0)) : (s.push(A), o.push(!1)) : (i.push(A), o.push(!1));
    });
    const a = n != null ? l(this, xt).decode(s, pt(n)) : null, c = l(this, xt).decode(i, e, !0), u = [], f = [];
    let h = 0, g = 0;
    return t.inputs.forEach((A, E) => {
      let m = null;
      if (A.indexed)
        if (a == null)
          m = new Zc(null);
        else if (o[E])
          m = new Zc(a[g++]);
        else
          try {
            m = a[g++];
          } catch (v) {
            m = v;
          }
      else
        try {
          m = c[h++];
        } catch (v) {
          m = v;
        }
      u.push(m), f.push(A.name || null);
    }), Ui.fromItems(u, f);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(t) {
    const e = X(t.data, "tx.data"), n = F(t.value != null ? t.value : 0, "tx.value"), s = this.getFunction(D(e.slice(0, 4)));
    if (!s)
      return null;
    const i = l(this, xt).decode(s.inputs, e.slice(4));
    return new Fp(s, s.selector, i, n);
  }
  parseCallResult(t) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(t) {
    const e = this.getEvent(t.topics[0]);
    return !e || e.anonymous ? null : new Dp(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(t) {
    const e = D(t), n = this.getError(at(e, 0, 4));
    if (!n)
      return null;
    const s = l(this, xt).decode(n.inputs, at(e, 4));
    return new Lp(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(t) {
    return t instanceof xr ? t : typeof t == "string" ? new xr(JSON.parse(t)) : typeof t.format == "function" ? new xr(t.format("json")) : new xr(t);
  }
};
ve = new WeakMap(), xe = new WeakMap(), Pe = new WeakMap(), xt = new WeakMap(), Xr = new WeakSet(), Oi = function(t, e, n) {
  if (it(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, Pe).values())
      if (i === o.selector)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, Pe))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      const o = e.length > 0 ? e[e.length - 1] : null;
      let a = e.length, c = !0;
      Ct.isTyped(o) && o.type === "overrides" && (c = !1, a--);
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs.length;
        f !== a && (!c || f !== a - 1) && i.splice(u, 1);
      }
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs;
        for (let h = 0; h < e.length; h++)
          if (Ct.isTyped(e[h])) {
            if (h >= f.length) {
              if (e[h].type === "overrides")
                continue;
              i.splice(u, 1);
              break;
            }
            if (e[h].type !== f[h].baseType) {
              i.splice(u, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && e && e.length !== i[0].inputs.length) {
      const o = e[e.length - 1];
      (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      y(!1, `ambiguous function description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = l(this, Pe).get(Ie.from(t).format());
  return s || null;
}, qr = new WeakSet(), Ii = function(t, e, n) {
  if (it(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, xe).values())
      if (i === o.topicHash)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, xe))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      for (let o = i.length - 1; o >= 0; o--)
        i[o].inputs.length < e.length && i.splice(o, 1);
      for (let o = i.length - 1; o >= 0; o--) {
        const a = i[o].inputs;
        for (let c = 0; c < e.length; c++)
          if (Ct.isTyped(e[c]) && e[c].type !== a[c].baseType) {
            i.splice(o, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      y(!1, `ambiguous event description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = l(this, xe).get(Oe.from(t).format());
  return s || null;
};
let ta = xr;
const Sl = BigInt(0);
function ks(r) {
  return r ?? null;
}
function Tt(r) {
  return r == null ? null : r.toString();
}
class $c {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(t, e, n) {
    /**
     *  The gas price for legacy networks.
     */
    w(this, "gasPrice");
    /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    w(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    w(this, "maxPriorityFeePerGas");
    M(this, {
      gasPrice: ks(t),
      maxFeePerGas: ks(e),
      maxPriorityFeePerGas: ks(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: Tt(t),
      maxFeePerGas: Tt(e),
      maxPriorityFeePerGas: Tt(n)
    };
  }
}
function _i(r) {
  const t = {};
  r.to && (t.to = r.to), r.from && (t.from = r.from), r.data && (t.data = D(r.data));
  const e = "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of e)
    !(s in r) || r[s] == null || (t[s] = F(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (t[s] = V(r[s], `request.${s}`));
  return r.accessList && (t.accessList = ur(r.accessList)), "blockTag" in r && (t.blockTag = r.blockTag), "enableCcipRead" in r && (t.enableCcipRead = !!r.enableCcipRead), "customData" in r && (t.customData = r.customData), t;
}
var Je;
class Mp {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(t, e) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    w(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    w(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    w(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    w(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    w(this, "parentHash");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    w(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    w(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    w(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    w(this, "gasUsed");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    w(this, "miner");
    /**
     *  Any extra data the validator wished to include.
     */
    w(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    w(this, "baseFeePerGas");
    b(this, Je, void 0);
    d(this, Je, t.transactions.map((n) => typeof n != "string" ? new Js(n, e) : n)), M(this, {
      provider: e,
      hash: ks(t.hash),
      number: t.number,
      timestamp: t.timestamp,
      parentHash: t.parentHash,
      nonce: t.nonce,
      difficulty: t.difficulty,
      gasLimit: t.gasLimit,
      gasUsed: t.gasUsed,
      miner: t.miner,
      extraData: t.extraData,
      baseFeePerGas: ks(t.baseFeePerGas)
    });
  }
  /**
   *  Returns the list of transaction hashes, in the order
   *  they were executed within the block.
   */
  get transactions() {
    return l(this, Je).map((t) => typeof t == "string" ? t : t.hash);
  }
  /**
   *  Returns the complete transactions, in the order they
   *  were executed within the block.
   *
   *  This is only available for blocks which prefetched
   *  transactions, by passing ``true`` to %%prefetchTxs%%
   *  into [[Provider-getBlock]].
   */
  get prefetchedTransactions() {
    const t = l(this, Je).slice();
    return t.length === 0 ? [] : (P(typeof t[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    }), t);
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas: t, difficulty: e, extraData: n, gasLimit: s, gasUsed: i, hash: o, miner: a, nonce: c, number: u, parentHash: f, timestamp: h, transactions: g } = this;
    return {
      _type: "Block",
      baseFeePerGas: Tt(t),
      difficulty: Tt(e),
      extraData: n,
      gasLimit: Tt(s),
      gasUsed: Tt(i),
      hash: o,
      miner: a,
      nonce: c,
      number: u,
      parentHash: f,
      timestamp: h,
      transactions: g
    };
  }
  [Symbol.iterator]() {
    let t = 0;
    const e = this.transactions;
    return {
      next: () => t < this.length ? {
        value: e[t++],
        done: !1
      } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return l(this, Je).length;
  }
  /**
   *  The [[link-js-date]] this block was included at.
   */
  get date() {
    return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
  }
  /**
   *  Get the transaction at %%indexe%% within this block.
   */
  async getTransaction(t) {
    let e;
    if (typeof t == "number")
      e = l(this, Je)[t];
    else {
      const n = t.toLowerCase();
      for (const s of l(this, Je))
        if (typeof s == "string") {
          if (s !== n)
            continue;
          e = s;
          break;
        } else {
          if (s.hash === n)
            continue;
          e = s;
          break;
        }
    }
    if (e == null)
      throw new Error("no such tx");
    return typeof e == "string" ? await this.provider.getTransaction(e) : e;
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(t) {
    const e = this.prefetchedTransactions;
    if (typeof t == "number")
      return e[t];
    t = t.toLowerCase();
    for (const n of e)
      if (n.hash === t)
        return n;
    y(!1, "no matching transaction", "indexOrHash", t);
  }
  /**
   *  Returns true if this block been mined. This provides a type guard
   *  for all properties on a [[MinedBlock]].
   */
  isMined() {
    return !!this.hash;
  }
  /**
   *  Returns true if this block is an [[link-eip-2930]] block.
   */
  isLondon() {
    return !!this.baseFeePerGas;
  }
  /**
   *  @_ignore:
   */
  orphanedEvent() {
    if (!this.isMined())
      throw new Error("");
    return Gp(this);
  }
}
Je = new WeakMap();
class ui {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    w(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    w(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    w(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    w(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    w(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    w(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    w(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    w(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    w(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    w(this, "transactionIndex");
    this.provider = e;
    const n = Object.freeze(t.topics.slice());
    M(this, {
      transactionHash: t.transactionHash,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      removed: t.removed,
      address: t.address,
      data: t.data,
      topics: n,
      index: t.index,
      transactionIndex: t.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: t, blockHash: e, blockNumber: n, data: s, index: i, removed: o, topics: a, transactionHash: c, transactionIndex: u } = this;
    return {
      _type: "log",
      address: t,
      blockHash: e,
      blockNumber: n,
      data: s,
      index: i,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: u
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    return P(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.transactionHash);
    return P(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const t = await this.provider.getTransactionReceipt(this.transactionHash);
    return P(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Qp(this);
  }
}
var Zs;
class Ul {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    w(this, "provider");
    /**
     *  The address the transaction was send to.
     */
    w(this, "to");
    /**
     *  The sender of the transaction.
     */
    w(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    w(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    w(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    w(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    w(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    w(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    w(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    w(this, "gasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    w(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    w(this, "gasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    w(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    w(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    w(this, "root");
    b(this, Zs, void 0);
    d(this, Zs, Object.freeze(t.logs.map((s) => new ui(s, e))));
    let n = Sl;
    t.effectiveGasPrice != null ? n = t.effectiveGasPrice : t.gasPrice != null && (n = t.gasPrice), M(this, {
      provider: e,
      to: t.to,
      from: t.from,
      contractAddress: t.contractAddress,
      hash: t.hash,
      index: t.index,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      logsBloom: t.logsBloom,
      gasUsed: t.gasUsed,
      cumulativeGasUsed: t.cumulativeGasUsed,
      gasPrice: n,
      type: t.type,
      //byzantium: tx.byzantium,
      status: t.status,
      root: t.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return l(this, Zs);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: t,
      from: e,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: o,
      blockNumber: a,
      logsBloom: c,
      logs: u,
      //byzantium, 
      status: f,
      root: h
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: o,
      blockNumber: a,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: Tt(this.cumulativeGasUsed),
      from: e,
      gasPrice: Tt(this.gasPrice),
      gasUsed: Tt(this.gasUsed),
      hash: s,
      index: i,
      logs: u,
      logsBloom: c,
      root: h,
      status: f,
      to: t
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.length ? { value: this.logs[t++], done: !1 } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.hash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Fl(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(t) {
    return P(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), Dl(this, t);
  }
}
Zs = new WeakMap();
var gn;
const Qa = class Qa {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    w(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    w(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    w(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    w(this, "index");
    /**
     *  The transaction hash.
     */
    w(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    w(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    w(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    w(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    w(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    w(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    w(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    w(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    w(this, "maxFeePerGas");
    /**
     *  The data.
     */
    w(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    w(this, "value");
    /**
     *  The chain ID.
     */
    w(this, "chainId");
    /**
     *  The signature.
     */
    w(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    w(this, "accessList");
    b(this, gn, void 0);
    this.provider = e, this.blockNumber = t.blockNumber != null ? t.blockNumber : null, this.blockHash = t.blockHash != null ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = t.accessList != null ? t.accessList : null, d(this, gn, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: t, blockHash: e, index: n, hash: s, type: i, to: o, from: a, nonce: c, data: u, signature: f, accessList: h } = this;
    return {
      _type: "TransactionReceipt",
      accessList: h,
      blockNumber: t,
      blockHash: e,
      chainId: Tt(this.chainId),
      data: u,
      from: a,
      gasLimit: Tt(this.gasLimit),
      gasPrice: Tt(this.gasPrice),
      hash: s,
      maxFeePerGas: Tt(this.maxFeePerGas),
      maxPriorityFeePerGas: Tt(this.maxPriorityFeePerGas),
      nonce: c,
      signature: f,
      to: o,
      index: n,
      type: i,
      value: Tt(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let t = this.blockNumber;
    if (t == null) {
      const n = await this.getTransaction();
      n && (t = n.blockNumber);
    }
    if (t == null)
      return null;
    const e = this.provider.getBlock(t);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: e, blockNumber: n } = await Bt({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return e == null || e.blockNumber == null ? 0 : n - e.blockNumber + 1;
    }
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(t, e) {
    const n = t ?? 1, s = e ?? 0;
    let i = l(this, gn), o = -1, a = i === -1;
    const c = async () => {
      if (a)
        return null;
      const { blockNumber: g, nonce: A } = await Bt({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (A < this.nonce) {
        i = g;
        return;
      }
      if (a)
        return null;
      const E = await this.getTransaction();
      if (!(E && E.blockNumber != null))
        for (o === -1 && (o = i - 3, o < l(this, gn) && (o = l(this, gn))); o <= g; ) {
          if (a)
            return null;
          const m = await this.provider.getBlock(o, !0);
          if (m == null)
            return;
          for (const v of m)
            if (v === this.hash)
              return;
          for (let v = 0; v < m.length; v++) {
            const x = await m.getTransaction(v);
            if (x.from === this.from && x.nonce === this.nonce) {
              if (a)
                return null;
              const B = await this.provider.getTransactionReceipt(x.hash);
              if (B == null || g - B.blockNumber + 1 < n)
                return;
              let C = "replaced";
              x.data === this.data && x.to === this.to && x.value === this.value ? C = "repriced" : x.data === "0x" && x.from === x.to && x.value === Sl && (C = "cancelled"), P(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: C === "replaced" || C === "cancelled",
                reason: C,
                replacement: x.replaceableTransaction(i),
                hash: x.hash,
                receipt: B
              });
            }
          }
          o++;
        }
    }, u = (g) => {
      if (g == null || g.status !== 0)
        return g;
      P(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: g.to,
          from: g.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: g
      });
    }, f = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return u(f);
    if (f) {
      if (await f.confirmations() >= n)
        return u(f);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((g, A) => {
      const E = [], m = () => {
        E.forEach((x) => x());
      };
      if (E.push(() => {
        a = !0;
      }), s > 0) {
        const x = setTimeout(() => {
          m(), A(dt("wait for transaction timeout", "TIMEOUT"));
        }, s);
        E.push(() => {
          clearTimeout(x);
        });
      }
      const v = async (x) => {
        if (await x.confirmations() >= n) {
          m();
          try {
            g(u(x));
          } catch (B) {
            A(B);
          }
        }
      };
      if (E.push(() => {
        this.provider.off(this.hash, v);
      }), this.provider.on(this.hash, v), i >= 0) {
        const x = async () => {
          try {
            await c();
          } catch (B) {
            if (se(B, "TRANSACTION_REPLACED")) {
              m(), A(B);
              return;
            }
          }
          a || this.provider.once("block", x);
        };
        E.push(() => {
          this.provider.off("block", x);
        }), this.provider.once("block", x);
      }
    });
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    return P(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Fl(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(t) {
    return P(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), P(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Dl(this, t);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(t) {
    y(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
    const e = new Qa(this, this.provider);
    return d(e, gn, t), e;
  }
};
gn = new WeakMap();
let Js = Qa;
function Gp(r) {
  return { orphan: "drop-block", hash: r.hash, number: r.number };
}
function Dl(r, t) {
  return { orphan: "reorder-transaction", tx: r, other: t };
}
function Fl(r) {
  return { orphan: "drop-transaction", tx: r };
}
function Qp(r) {
  return { orphan: "drop-log", log: {
    transactionHash: r.transactionHash,
    blockHash: r.blockHash,
    blockNumber: r.blockNumber,
    address: r.address,
    data: r.data,
    topics: Object.freeze(r.topics.slice()),
    index: r.index
  } };
}
class Sa extends ui {
  /**
   * @_ignore:
   */
  constructor(e, n, s) {
    super(e, e.provider);
    /**
     *  The Contract Interface.
     */
    w(this, "interface");
    /**
     *  The matching event.
     */
    w(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    w(this, "args");
    const i = n.decodeEventLog(s, e.data, e.topics);
    M(this, { args: i, fragment: s, interface: n });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
class Ll extends ui {
  /**
   * @_ignore:
   */
  constructor(e, n) {
    super(e, e.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    w(this, "error");
    M(this, { error: n });
  }
}
var $r;
class Hp extends Ul {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    b(this, $r, void 0);
    d(this, $r, e);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((e) => {
      const n = e.topics.length ? l(this, $r).getEvent(e.topics[0]) : null;
      if (n)
        try {
          return new Sa(e, l(this, $r), n);
        } catch (s) {
          return new Ll(e, s);
        }
      return e;
    });
  }
}
$r = new WeakMap();
var Xs;
class Ua extends Js {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    b(this, Xs, void 0);
    d(this, Xs, e);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(e) {
    const n = await super.wait(e);
    return n == null ? null : new Hp(l(this, Xs), this.provider, n);
  }
}
Xs = new WeakMap();
class Ml extends wu {
  /**
   *  @_event:
   */
  constructor(e, n, s, i) {
    super(e, n, s);
    /**
     *  The log with no matching events.
     */
    w(this, "log");
    M(this, { log: i });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class _p extends Ml {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s, i) {
    super(t, e, n, new Sa(i, t.interface, s));
    const o = t.interface.decodeEventLog(s, this.log.data, this.log.topics);
    M(this, { args: o, fragment: s });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
const tu = BigInt(0);
function Gl(r) {
  return r && typeof r.call == "function";
}
function Ql(r) {
  return r && typeof r.estimateGas == "function";
}
function uo(r) {
  return r && typeof r.resolveName == "function";
}
function Hl(r) {
  return r && typeof r.sendTransaction == "function";
}
function _l(r) {
  if (r != null) {
    if (uo(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var qs;
class Vp {
  constructor(t, e, n) {
    b(this, qs, void 0);
    w(this, "fragment");
    if (M(this, { fragment: e }), e.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = cr(t.runner, "resolveName"), i = uo(s) ? s : null;
    d(this, qs, async function() {
      const o = await Promise.all(e.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (f, h) => f === "address" ? Array.isArray(h) ? Promise.all(h.map((g) => St(g, i))) : St(h, i) : h)));
      return t.interface.encodeFilterTopics(e, o);
    }());
  }
  getTopicFilter() {
    return l(this, qs);
  }
}
qs = new WeakMap();
function cr(r, t) {
  return r == null ? null : typeof r[t] == "function" ? r : r.provider && typeof r.provider[t] == "function" ? r.provider : null;
}
function Fn(r) {
  return r == null ? null : r.provider || null;
}
async function Vl(r, t) {
  const e = Ct.dereference(r, "overrides");
  y(typeof e == "object", "invalid overrides parameter", "overrides", r);
  const n = _i(e);
  return y(n.to == null || (t || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), y(n.data == null || (t || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function Jp(r, t, e) {
  const n = cr(r, "resolveName"), s = uo(n) ? n : null;
  return await Promise.all(t.map((i, o) => i.walkAsync(e[o], (a, c) => (c = Ct.dereference(c, a), a === "address" ? St(c, s) : c))));
}
function jp(r) {
  const t = async function(o) {
    const a = await Vl(o, ["data"]);
    a.to = await r.getAddress(), a.from && (a.from = await St(a.from, _l(r.runner)));
    const c = r.interface, u = F(a.value || tu, "overrides.value") === tu, f = (a.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !f && !u && y(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), y(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data);
    const h = c.receive || c.fallback && c.fallback.payable;
    return y(h || u, "cannot send value to non-payable fallback", "overrides.value", a.value), y(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data), a;
  }, e = async function(o) {
    const a = cr(r.runner, "call");
    P(Gl(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await t(o);
    try {
      return await a.call(c);
    } catch (u) {
      throw ma(u) && u.data ? r.interface.makeError(u.data, c) : u;
    }
  }, n = async function(o) {
    const a = r.runner;
    P(Hl(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await a.sendTransaction(await t(o)), u = Fn(r.runner);
    return new Ua(r.interface, u, c);
  }, s = async function(o) {
    const a = cr(r.runner, "estimateGas");
    return P(Ql(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await a.estimateGas(await t(o));
  }, i = async (o) => await n(o);
  return M(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: t,
    send: n,
    staticCall: e
  }), i;
}
function zp(r, t) {
  const e = function(...u) {
    const f = r.interface.getFunction(t, u);
    return P(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: u }
    }), f;
  }, n = async function(...u) {
    const f = e(...u);
    let h = {};
    if (f.inputs.length + 1 === u.length && (h = await Vl(u.pop()), h.from && (h.from = await St(h.from, _l(r.runner)))), f.inputs.length !== u.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const g = await Jp(r.runner, f.inputs, u);
    return Object.assign({}, h, await Bt({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(f, g)
    }));
  }, s = async function(...u) {
    const f = await a(...u);
    return f.length === 1 ? f[0] : f;
  }, i = async function(...u) {
    const f = r.runner;
    P(Hl(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const h = await f.sendTransaction(await n(...u)), g = Fn(r.runner);
    return new Ua(r.interface, g, h);
  }, o = async function(...u) {
    const f = cr(r.runner, "estimateGas");
    return P(Ql(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await f.estimateGas(await n(...u));
  }, a = async function(...u) {
    const f = cr(r.runner, "call");
    P(Gl(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const h = await n(...u);
    let g = "0x";
    try {
      g = await f.call(h);
    } catch (E) {
      throw ma(E) && E.data ? r.interface.makeError(E.data, h) : E;
    }
    const A = e(...u);
    return r.interface.decodeFunctionResult(A, g);
  }, c = async (...u) => e(...u).constant ? await s(...u) : await i(...u);
  return M(c, {
    name: r.interface.getFunctionName(t),
    _contract: r,
    _key: t,
    getFragment: e,
    estimateGas: o,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: a
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const u = r.interface.getFunction(t);
      return P(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), u;
    }
  }), c;
}
function Kp(r, t) {
  const e = function(...s) {
    const i = r.interface.getEvent(t, s);
    return P(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: s }
    }), i;
  }, n = function(...s) {
    return new Vp(r, e(...s), s);
  };
  return M(n, {
    name: r.interface.getEventName(t),
    _contract: r,
    _key: t,
    getFragment: e
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(t);
      return P(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), s;
    }
  }), n;
}
const Vi = Symbol.for("_ethersInternal_contract"), Jl = /* @__PURE__ */ new WeakMap();
function Wp(r, t) {
  Jl.set(r[Vi], t);
}
function Vt(r) {
  return Jl.get(r[Vi]);
}
function Yp(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function Da(r, t) {
  let e, n = null;
  if (Array.isArray(t)) {
    const i = function(o) {
      if (it(o, 32))
        return o;
      const a = r.interface.getEvent(o);
      return y(a, "unknown fragment", "name", o), a.topicHash;
    };
    e = t.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
  } else
    t === "*" ? e = [null] : typeof t == "string" ? it(t, 32) ? e = [t] : (n = r.interface.getEvent(t), y(n, "unknown fragment", "event", t), e = [n.topicHash]) : Yp(t) ? e = await t.getTopicFilter() : "fragment" in t ? (n = t.fragment, e = [n.topicHash]) : y(!1, "unknown event name", "event", t);
  e = e.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const o = Array.from(new Set(i.map((a) => a.toLowerCase())).values());
      return o.length === 1 ? o[0] : (o.sort(), o);
    }
    return i.toLowerCase();
  });
  const s = e.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: e };
}
async function Os(r, t) {
  const { subs: e } = Vt(r);
  return e.get((await Da(r, t)).tag) || null;
}
async function eu(r, t, e) {
  const n = Fn(r.runner);
  P(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: t });
  const { fragment: s, tag: i, topics: o } = await Da(r, e), { addr: a, subs: c } = Vt(r);
  let u = c.get(i);
  if (!u) {
    const h = { address: a || r, topics: o }, g = (v) => {
      let x = s;
      if (x == null)
        try {
          x = r.interface.getEvent(v.topics[0]);
        } catch {
        }
      if (x) {
        const B = x, C = s ? r.interface.decodeEventLog(s, v.data, v.topics) : [];
        na(r, e, C, (_) => new _p(r, _, e, B, v));
      } else
        na(r, e, [], (B) => new Ml(r, B, e, v));
    };
    let A = [];
    u = { tag: i, listeners: [], start: () => {
      A.length || A.push(n.on(h, g));
    }, stop: async () => {
      if (A.length == 0)
        return;
      let v = A;
      A = [], await Promise.all(v), n.off(h, g);
    } }, c.set(i, u);
  }
  return u;
}
let ea = Promise.resolve();
async function Zp(r, t, e, n) {
  await ea;
  const s = await Os(r, t);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: o, once: a }) => {
    const c = Array.from(e);
    n && c.push(n(a ? null : o));
    try {
      o.call(r, ...c);
    } catch {
    }
    return !a;
  }), s.listeners.length === 0 && (s.stop(), Vt(r).subs.delete(s.tag)), i > 0;
}
async function na(r, t, e, n) {
  try {
    await ea;
  } catch {
  }
  const s = Zp(r, t, e, n);
  return ea = s, await s;
}
const bi = ["then"];
var Kg;
const Us = class Us {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(t, e, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    w(this, "target");
    /**
     *  The contract Interface.
     */
    w(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    w(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    w(this, "filters");
    /**
     *  @_ignore:
     */
    w(this, Kg);
    /**
     *  The fallback or receive function if any.
     */
    w(this, "fallback");
    y(typeof t == "string" || zu(t), "invalid value for Contract target", "target", t), n == null && (n = null);
    const i = ta.from(e);
    M(this, { target: t, runner: n, interface: i }), Object.defineProperty(this, Vi, { value: {} });
    let o, a = null, c = null;
    if (s) {
      const h = Fn(n);
      c = new Ua(this.interface, h, s);
    }
    let u = /* @__PURE__ */ new Map();
    if (typeof t == "string")
      if (it(t))
        a = t, o = Promise.resolve(t);
      else {
        const h = cr(n, "resolveName");
        if (!uo(h))
          throw dt("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        o = h.resolveName(t).then((g) => {
          if (g == null)
            throw dt("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: t
            });
          return Vt(this).addr = g, g;
        });
      }
    else
      o = t.getAddress().then((h) => {
        if (h == null)
          throw new Error("TODO");
        return Vt(this).addr = h, h;
      });
    Wp(this, { addrPromise: o, addr: a, deployTx: c, subs: u });
    const f = new Proxy({}, {
      get: (h, g, A) => {
        if (typeof g == "symbol" || bi.indexOf(g) >= 0)
          return Reflect.get(h, g, A);
        try {
          return this.getEvent(g);
        } catch (E) {
          if (!se(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, g) => bi.indexOf(g) >= 0 ? Reflect.has(h, g) : Reflect.has(h, g) || this.interface.hasEvent(String(g))
    });
    return M(this, { filters: f }), M(this, {
      fallback: i.receive || i.fallback ? jp(this) : null
    }), new Proxy(this, {
      get: (h, g, A) => {
        if (typeof g == "symbol" || g in h || bi.indexOf(g) >= 0)
          return Reflect.get(h, g, A);
        try {
          return h.getFunction(g);
        } catch (E) {
          if (!se(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, g) => typeof g == "symbol" || g in h || bi.indexOf(g) >= 0 ? Reflect.has(h, g) : h.interface.hasFunction(g)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(t) {
    return new Us(this.target, this.interface, t);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(t) {
    return new Us(t, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await Vt(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const t = Fn(this.runner);
    P(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const e = await t.getCode(await this.getAddress());
    return e === "0x" ? null : e;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const t = this.deploymentTransaction();
    if (t)
      return await t.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = Fn(this.runner);
    return P(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const o = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", o);
        } catch (a) {
          i(a);
        }
      };
      o();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return Vt(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(t) {
    return typeof t != "string" && (t = t.format()), zp(this, t);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(t) {
    return typeof t != "string" && (t = t.format()), Kp(this, t);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(t) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(t, e, n) {
    e == null && (e = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = Vt(this), o = s || await i, { fragment: a, topics: c } = await Da(this, t), u = { address: o, topics: c, fromBlock: e, toBlock: n }, f = Fn(this.runner);
    return P(f, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await f.getLogs(u)).map((h) => {
      let g = a;
      if (g == null)
        try {
          g = this.interface.getEvent(h.topics[0]);
        } catch {
        }
      if (g)
        try {
          return new Sa(h, this.interface, g);
        } catch (A) {
          return new Ll(h, A);
        }
      return new ui(h, f);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(t, e) {
    const n = await eu(this, "on", t);
    return n.listeners.push({ listener: e, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(t, e) {
    const n = await eu(this, "once", t);
    return n.listeners.push({ listener: e, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(t, ...e) {
    return await na(this, t, e, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(t) {
    if (t) {
      const s = await Os(this, t);
      return s ? s.listeners.length : 0;
    }
    const { subs: e } = Vt(this);
    let n = 0;
    for (const { listeners: s } of e.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(t) {
    if (t) {
      const s = await Os(this, t);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: e } = Vt(this);
    let n = [];
    for (const { listeners: s } of e.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(t, e) {
    const n = await Os(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (e == null || n.listeners.length === 0) && (n.stop(), Vt(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(t) {
    if (t) {
      const e = await Os(this, t);
      if (!e)
        return this;
      e.stop(), Vt(this).subs.delete(e.tag);
    } else {
      const { subs: e } = Vt(this);
      for (const { tag: n, stop: s } of e.values())
        s(), e.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(t, e) {
    return await this.on(t, e);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(t, e) {
    return await this.off(t, e);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(t) {
    class e extends Us {
      constructor(s, i = null) {
        super(s, t, i);
      }
    }
    return e;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(t, e, n) {
    return n == null && (n = null), new this(t, e, n);
  }
};
Kg = Vi;
let ra = Us;
function Xp() {
  return ra;
}
class Cn extends Xp() {
}
function So(r) {
  return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : y(!1, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
}
class qp {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(t) {
    /**
     *  The name.
     */
    w(this, "name");
    M(this, { name: t });
  }
  connect(t) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(t) {
    return !1;
  }
  /**
   *  Resovles to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resovles to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
}
const jl = new RegExp("^(ipfs)://(.*)$", "i"), nu = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  jl,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var yn, zn, mn, wr, Zi, zl;
const Pr = class Pr {
  constructor(t, e, n) {
    b(this, mn);
    /**
     *  The connected provider.
     */
    w(this, "provider");
    /**
     *  The address of the resolver.
     */
    w(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    w(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    b(this, yn, void 0);
    b(this, zn, void 0);
    M(this, { provider: t, address: e, name: n }), d(this, yn, null), d(this, zn, new Cn(e, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], t));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    return l(this, yn) == null && d(this, yn, (async () => {
      try {
        return await l(this, zn).supportsInterface("0x9061b923");
      } catch (t) {
        if (se(t, "CALL_EXCEPTION"))
          return !1;
        throw d(this, yn, null), t;
      }
    })()), await l(this, yn);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(t) {
    if (t == null && (t = 60), t === 60)
      try {
        const i = await I(this, mn, wr).call(this, "addr(bytes32)");
        return i == null || i === zo ? null : i;
      } catch (i) {
        if (se(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (t >= 0 && t < 2147483648) {
      let i = t + 2147483648;
      const o = await I(this, mn, wr).call(this, "addr(bytes32,uint)", [i]);
      if (it(o, 20))
        return W(o);
    }
    let e = null;
    for (const i of this.provider.plugins)
      if (i instanceof qp && i.supportsCoinType(t)) {
        e = i;
        break;
      }
    if (e == null)
      return null;
    const n = await I(this, mn, wr).call(this, "addr(bytes32,uint)", [t]);
    if (n == null || n === "0x")
      return null;
    const s = await e.decodeAddress(t, n);
    if (s != null)
      return s;
    P(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${t})`,
      info: { coinType: t, data: n }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(t) {
    const e = await I(this, mn, wr).call(this, "text(bytes32,string)", [t]);
    return e == null || e === "0x" ? null : e;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const t = await I(this, mn, wr).call(this, "contenthash(bytes32)");
    if (t == null || t === "0x")
      return null;
    const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (e) {
      const s = e[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(e[4], 16);
      if (e[5].length === i * 2)
        return `${s}://${Rf("0x" + e[2])}`;
    }
    const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (n && n[1].length === 64)
      return `bzz://${n[1]}`;
    P(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data: t }
    });
  }
  /**
   *  Resolves to the avatar url or ``null`` if the avatar is either
   *  unconfigured or incorrectly configured (e.g. references an NFT
   *  not owned by the address).
   *
   *  If diagnosing issues with configurations, the [[_getAvatar]]
   *  method may be useful.
   */
  async getAvatar() {
    return (await this._getAvatar()).url;
  }
  /**
   *  When resolving an avatar, there are many steps involved, such
   *  fetching metadata and possibly validating ownership of an
   *  NFT.
   *
   *  This method can be used to examine each step and the value it
   *  was working from.
   */
  async _getAvatar() {
    const t = [{ type: "name", value: this.name }];
    try {
      const e = await this.getText("avatar");
      if (e == null)
        return t.push({ type: "!avatar", value: "" }), { url: null, linkage: t };
      t.push({ type: "avatar", value: e });
      for (let n = 0; n < nu.length; n++) {
        const s = e.match(nu[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return t.push({ type: "url", value: e }), { linkage: t, url: e };
          case "ipfs": {
            const o = So(e);
            return t.push({ type: "ipfs", value: e }), t.push({ type: "url", value: o }), { linkage: t, url: o };
          }
          case "erc721":
          case "erc1155": {
            const o = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            t.push({ type: i, value: e });
            const a = await this.getAddress();
            if (a == null)
              return t.push({ type: "!owner", value: "" }), { url: null, linkage: t };
            const c = (s[2] || "").split("/");
            if (c.length !== 2)
              return t.push({ type: `!${i}caip`, value: s[2] || "" }), { url: null, linkage: t };
            const u = c[1], f = new Cn(c[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (i === "erc721") {
              const m = await f.ownerOf(u);
              if (a !== m)
                return t.push({ type: "!owner", value: m }), { url: null, linkage: t };
              t.push({ type: "owner", value: m });
            } else if (i === "erc1155") {
              const m = await f.balanceOf(a, u);
              if (!m)
                return t.push({ type: "!balance", value: "0" }), { url: null, linkage: t };
              t.push({ type: "balance", value: m.toString() });
            }
            let h = await f[o](u);
            if (h == null || h === "0x")
              return t.push({ type: "!metadata-url", value: "" }), { url: null, linkage: t };
            t.push({ type: "metadata-url-base", value: h }), i === "erc1155" && (h = h.replace("{id}", On(u, 32).substring(2)), t.push({ type: "metadata-url-expanded", value: h })), h.match(/^ipfs:/i) && (h = So(h)), t.push({ type: "metadata-url", value: h });
            let g = {};
            const A = await new In(h).send();
            A.assertOk();
            try {
              g = A.bodyJson;
            } catch {
              try {
                t.push({ type: "!metadata", value: A.bodyText });
              } catch {
                const x = A.body;
                return x && t.push({ type: "!metadata", value: D(x) }), { url: null, linkage: t };
              }
              return { url: null, linkage: t };
            }
            if (!g)
              return t.push({ type: "!metadata", value: "" }), { url: null, linkage: t };
            t.push({ type: "metadata", value: JSON.stringify(g) });
            let E = g.image;
            if (typeof E != "string")
              return t.push({ type: "!imageUrl", value: "" }), { url: null, linkage: t };
            if (!E.match(/^(https:\/\/|data:)/i)) {
              if (E.match(jl) == null)
                return t.push({ type: "!imageUrl-ipfs", value: E }), { url: null, linkage: t };
              t.push({ type: "imageUrl-ipfs", value: E }), E = So(E);
            }
            return t.push({ type: "url", value: E }), { linkage: t, url: E };
          }
        }
      }
    } catch {
    }
    return { linkage: t, url: null };
  }
  static async getEnsAddress(t) {
    const e = await t.getNetwork(), n = e.getPlugin("org.ethers.plugins.network.Ens");
    return P(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network: e }
    }), n.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(t, e) {
    var s;
    let n = e;
    for (; ; ) {
      if (n === "" || n === "." || e !== "eth" && n === "eth")
        return null;
      const i = await I(s = Pr, Zi, zl).call(s, t, n);
      if (i != null) {
        const o = new Pr(t, i, e);
        return n !== e && !await o.supportsWildcard() ? null : o;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
yn = new WeakMap(), zn = new WeakMap(), mn = new WeakSet(), wr = async function(t, e) {
  e = (e || []).slice();
  const n = l(this, zn).interface;
  e.unshift(qo(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(t), P(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: t }
  }), e = [
    rp(this.name),
    n.encodeFunctionData(s, e)
  ], t = "resolve(bytes,bytes)"), e.push({
    enableCcipRead: !0
  });
  try {
    const i = await l(this, zn)[t](...e);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!se(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, Zi = new WeakSet(), zl = async function(t, e) {
  const n = await Pr.getEnsAddress(t);
  try {
    const i = await new Cn(n, [
      "function resolver(bytes32) view returns (address)"
    ], t).resolver(qo(e), {
      enableCcipRead: !0
    });
    return i === zo ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, b(Pr, Zi);
let Ji = Pr;
const ru = BigInt(0);
function nt(r, t) {
  return function(e) {
    return e == null ? t : r(e);
  };
}
function Fa(r) {
  return (t) => {
    if (!Array.isArray(t))
      throw new Error("not an array");
    return t.map((e) => r(e));
  };
}
function li(r, t) {
  return (e) => {
    const n = {};
    for (const s in r) {
      let i = s;
      if (t && s in t && !(i in e)) {
        for (const o of t[s])
          if (o in e) {
            i = o;
            break;
          }
      }
      try {
        const o = r[s](e[i]);
        o !== void 0 && (n[s] = o);
      } catch (o) {
        const a = o instanceof Error ? o.message : "not-an-error";
        P(!1, `invalid value for value.${s} (${a})`, "BAD_DATA", { value: e });
      }
    }
    return n;
  };
}
function $p(r) {
  switch (r) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  y(!1, `invalid boolean; ${JSON.stringify(r)}`, "value", r);
}
function As(r) {
  return y(it(r, !0), "invalid data", "value", r), r;
}
function ie(r) {
  return y(it(r, 32), "invalid hash", "value", r), r;
}
const tg = li({
  address: W,
  blockHash: ie,
  blockNumber: V,
  data: As,
  index: V,
  removed: nt($p, !1),
  topics: Fa(ie),
  transactionHash: ie,
  transactionIndex: V
}, {
  index: ["logIndex"]
});
function eg(r) {
  return tg(r);
}
const ng = li({
  hash: nt(ie),
  parentHash: ie,
  number: V,
  timestamp: V,
  nonce: nt(As),
  difficulty: F,
  gasLimit: F,
  gasUsed: F,
  miner: nt(W),
  extraData: As,
  baseFeePerGas: nt(F)
});
function rg(r) {
  const t = ng(r);
  return t.transactions = r.transactions.map((e) => typeof e == "string" ? e : Kl(e)), t;
}
const sg = li({
  transactionIndex: V,
  blockNumber: V,
  transactionHash: ie,
  address: W,
  topics: Fa(ie),
  data: As,
  index: V,
  blockHash: ie
}, {
  index: ["logIndex"]
});
function ig(r) {
  return sg(r);
}
const og = li({
  to: nt(W, null),
  from: nt(W, null),
  contractAddress: nt(W, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: V,
  root: nt(D),
  gasUsed: F,
  logsBloom: nt(As),
  blockHash: ie,
  hash: ie,
  logs: Fa(ig),
  blockNumber: V,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: F,
  effectiveGasPrice: nt(F),
  status: nt(V),
  type: nt(V, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function ag(r) {
  return og(r);
}
function Kl(r) {
  r.to && F(r.to) === ru && (r.to = "0x0000000000000000000000000000000000000000");
  const t = li({
    hash: ie,
    type: (e) => e === "0x" || e == null ? 0 : V(e),
    accessList: nt(ur, null),
    blockHash: nt(ie, null),
    blockNumber: nt(V, null),
    transactionIndex: nt(V, null),
    //confirmations: allowNull(getNumber, null),
    from: W,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: nt(F),
    maxPriorityFeePerGas: nt(F),
    maxFeePerGas: nt(F),
    gasLimit: F,
    to: nt(W, null),
    value: F,
    nonce: V,
    data: As,
    creates: nt(W, null),
    chainId: nt(F, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"]
  })(r);
  if (t.to == null && t.creates == null && (t.creates = od(t)), (r.type === 1 || r.type === 2) && r.accessList == null && (t.accessList = []), r.signature ? t.signature = ye.from(r.signature) : t.signature = ye.from(r), t.chainId == null) {
    const e = t.signature.legacyChainId;
    e != null && (t.chainId = e);
  }
  return t.blockHash && F(t.blockHash) === ru && (t.blockHash = null), t;
}
const cg = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class fi {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(t) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    w(this, "name");
    M(this, { name: t });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new fi(this.name);
  }
}
class lo extends fi {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(e, n) {
    e == null && (e = 0);
    super(`org.ethers.network.plugins.GasCost#${e || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    w(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    w(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    w(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    w(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    w(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    w(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    w(this, "txAccessListAddress");
    const s = { effectiveBlock: e };
    function i(o, a) {
      let c = (n || {})[o];
      c == null && (c = a), y(typeof c == "number", `invalud value for ${o}`, "costs", n), s[o] = c;
    }
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), M(this, s);
  }
  clone() {
    return new lo(this.effectiveBlock, this);
  }
}
class fo extends fi {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    w(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    w(this, "targetNetwork");
    M(this, {
      address: e || cg,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new fo(this.address, this.targetNetwork);
  }
}
var $s, ti;
class Wl extends fi {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    b(this, $s, void 0);
    b(this, ti, void 0);
    d(this, $s, e), d(this, ti, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return l(this, $s);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return l(this, ti);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
$s = new WeakMap(), ti = new WeakMap();
const Uo = /* @__PURE__ */ new Map();
var ts, es, wn;
const Nr = class Nr {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(t, e) {
    b(this, ts, void 0);
    b(this, es, void 0);
    b(this, wn, void 0);
    d(this, ts, t), d(this, es, F(e)), d(this, wn, /* @__PURE__ */ new Map());
  }
  /**
   *  Returns a JSON-compatible representation of a Network.
   */
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  /**
   *  The network common name.
   *
   *  This is the canonical name, as networks migh have multiple
   *  names.
   */
  get name() {
    return l(this, ts);
  }
  set name(t) {
    d(this, ts, t);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return l(this, es);
  }
  set chainId(t) {
    d(this, es, F(t, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(t) {
    if (t == null)
      return !1;
    if (typeof t == "string") {
      try {
        return this.chainId === F(t);
      } catch {
      }
      return this.name === t;
    }
    if (typeof t == "number" || typeof t == "bigint") {
      try {
        return this.chainId === F(t);
      } catch {
      }
      return !1;
    }
    if (typeof t == "object") {
      if (t.chainId != null) {
        try {
          return this.chainId === F(t.chainId);
        } catch {
        }
        return !1;
      }
      return t.name != null ? this.name === t.name : !1;
    }
    return !1;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(l(this, wn).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(t) {
    if (l(this, wn).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return l(this, wn).set(t.name, t.clone()), this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(t) {
    return l(this, wn).get(t) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(t) {
    return this.plugins.filter((e) => e.name.split("#")[0] === t);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const t = new Nr(this.name, this.chainId);
    return this.plugins.forEach((e) => {
      t.attachPlugin(e.clone());
    }), t;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(t) {
    const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new lo();
    let n = e.txBase;
    if (t.to == null && (n += e.txCreate), t.data)
      for (let s = 2; s < t.data.length; s += 2)
        t.data.substring(s, s + 2) === "00" ? n += e.txDataZero : n += e.txDataNonzero;
    if (t.accessList) {
      const s = ur(t.accessList);
      for (const i in s)
        n += e.txAccessListAddress + e.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(t) {
    if (lg(), t == null)
      return Nr.from("mainnet");
    if (typeof t == "number" && (t = BigInt(t)), typeof t == "string" || typeof t == "bigint") {
      const e = Uo.get(t);
      if (e)
        return e();
      if (typeof t == "bigint")
        return new Nr("unknown", t);
      y(!1, "unknown network", "network", t);
    }
    if (typeof t.clone == "function")
      return t.clone();
    if (typeof t == "object") {
      y(typeof t.name == "string" && typeof t.chainId == "number", "invalid network object name or chainId", "network", t);
      const e = new Nr(t.name, t.chainId);
      return (t.ensAddress || t.ensNetwork != null) && e.attachPlugin(new fo(t.ensAddress, t.ensNetwork)), e;
    }
    y(!1, "invalid network", "network", t);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(t, e) {
    typeof t == "number" && (t = BigInt(t));
    const n = Uo.get(t);
    n && y(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), Uo.set(t, e);
  }
};
ts = new WeakMap(), es = new WeakMap(), wn = new WeakMap();
let qe = Nr;
function su(r, t) {
  const e = String(r);
  if (!e.match(/^[0-9.]+$/))
    throw new Error(`invalid gwei value: ${r}`);
  const n = e.split(".");
  if (n.length === 1 && n.push(""), n.length !== 2)
    throw new Error(`invalid gwei value: ${r}`);
  for (; n[1].length < t; )
    n[1] += "0";
  if (n[1].length > 9) {
    let s = BigInt(n[1].substring(0, 9));
    n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
  }
  return BigInt(n[0] + n[1]);
}
function iu(r) {
  return new Wl(r, async (t, e, n) => {
    n.setHeader("User-Agent", "ethers");
    let s;
    try {
      const [i, o] = await Promise.all([
        n.send(),
        t()
      ]);
      s = i;
      const a = s.bodyJson.standard;
      return {
        gasPrice: o.gasPrice,
        maxFeePerGas: su(a.maxFee, 9),
        maxPriorityFeePerGas: su(a.maxPriorityFee, 9)
      };
    } catch (i) {
      P(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
function ug(r) {
  return new Wl("data:", async (t, e, n) => {
    const s = await t();
    if (s.maxFeePerGas == null || s.maxPriorityFeePerGas == null)
      return s;
    const i = s.maxFeePerGas - s.maxPriorityFeePerGas;
    return {
      gasPrice: s.gasPrice,
      maxFeePerGas: i + r,
      maxPriorityFeePerGas: r
    };
  });
}
let ou = !1;
function lg() {
  if (ou)
    return;
  ou = !0;
  function r(t, e, n) {
    const s = function() {
      const i = new qe(t, e);
      return n.ensNetwork != null && i.attachPlugin(new fo(null, n.ensNetwork)), i.attachPlugin(new lo()), (n.plugins || []).forEach((o) => {
        i.attachPlugin(o);
      }), i;
    };
    qe.register(t, s), qe.register(e, s), n.altNames && n.altNames.forEach((i) => {
      qe.register(i, s);
    });
  }
  r("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), r("ropsten", 3, { ensNetwork: 3 }), r("rinkeby", 4, { ensNetwork: 4 }), r("goerli", 5, { ensNetwork: 5 }), r("kovan", 42, { ensNetwork: 42 }), r("sepolia", 11155111, {}), r("classic", 61, {}), r("classicKotti", 6, {}), r("arbitrum", 42161, {
    ensNetwork: 1
  }), r("arbitrum-goerli", 421613, {}), r("bnb", 56, { ensNetwork: 1 }), r("bnbt", 97, {}), r("linea", 59144, { ensNetwork: 1 }), r("linea-goerli", 59140, {}), r("matic", 137, {
    ensNetwork: 1,
    plugins: [
      iu("https://gasstation.polygon.technology/v2")
    ]
  }), r("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      iu("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), r("optimism", 10, {
    ensNetwork: 1,
    plugins: [
      ug(BigInt("1000000"))
    ]
  }), r("optimism-goerli", 420, {}), r("xdai", 100, { ensNetwork: 1 });
}
function sa(r) {
  return JSON.parse(JSON.stringify(r));
}
var je, te, An, Ne, ns, Bi;
class fg {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    b(this, ns);
    b(this, je, void 0);
    b(this, te, void 0);
    b(this, An, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, Ne, void 0);
    d(this, je, t), d(this, te, null), d(this, An, 4e3), d(this, Ne, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return l(this, An);
  }
  set pollingInterval(t) {
    d(this, An, t);
  }
  start() {
    l(this, te) || (d(this, te, l(this, je)._setTimeout(I(this, ns, Bi).bind(this), l(this, An))), I(this, ns, Bi).call(this));
  }
  stop() {
    l(this, te) && (l(this, je)._clearTimeout(l(this, te)), d(this, te, null));
  }
  pause(t) {
    this.stop(), t && d(this, Ne, -2);
  }
  resume() {
    this.start();
  }
}
je = new WeakMap(), te = new WeakMap(), An = new WeakMap(), Ne = new WeakMap(), ns = new WeakSet(), Bi = async function() {
  try {
    const t = await l(this, je).getBlockNumber();
    if (l(this, Ne) === -2) {
      d(this, Ne, t);
      return;
    }
    if (t !== l(this, Ne)) {
      for (let e = l(this, Ne) + 1; e <= t; e++) {
        if (l(this, te) == null)
          return;
        await l(this, je).emit("block", e);
      }
      d(this, Ne, t);
    }
  } catch {
  }
  l(this, te) != null && d(this, te, l(this, je)._setTimeout(I(this, ns, Bi).bind(this), l(this, An)));
};
var Kn, Wn, bn;
class Yl {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    b(this, Kn, void 0);
    b(this, Wn, void 0);
    b(this, bn, void 0);
    d(this, Kn, t), d(this, bn, !1), d(this, Wn, (e) => {
      this._poll(e, l(this, Kn));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(t, e) {
    throw new Error("sub-classes must override this");
  }
  start() {
    l(this, bn) || (d(this, bn, !0), l(this, Wn).call(this, -2), l(this, Kn).on("block", l(this, Wn)));
  }
  stop() {
    l(this, bn) && (d(this, bn, !1), l(this, Kn).off("block", l(this, Wn)));
  }
  pause(t) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
Kn = new WeakMap(), Wn = new WeakMap(), bn = new WeakMap();
var Xi;
class hg extends Yl {
  constructor(e, n) {
    super(e);
    b(this, Xi, void 0);
    d(this, Xi, sa(n));
  }
  async _poll(e, n) {
    throw new Error("@TODO");
  }
}
Xi = new WeakMap();
var rs;
class dg extends Yl {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(e, n) {
    super(e);
    b(this, rs, void 0);
    d(this, rs, n);
  }
  async _poll(e, n) {
    const s = await n.getTransactionReceipt(l(this, rs));
    s && n.emit(l(this, rs), s);
  }
}
rs = new WeakMap();
var ze, ss, is, En, ee, qi, Zl;
class La {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(t, e) {
    b(this, qi);
    b(this, ze, void 0);
    b(this, ss, void 0);
    b(this, is, void 0);
    b(this, En, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, ee, void 0);
    d(this, ze, t), d(this, ss, sa(e)), d(this, is, I(this, qi, Zl).bind(this)), d(this, En, !1), d(this, ee, -2);
  }
  start() {
    l(this, En) || (d(this, En, !0), l(this, ee) === -2 && l(this, ze).getBlockNumber().then((t) => {
      d(this, ee, t);
    }), l(this, ze).on("block", l(this, is)));
  }
  stop() {
    l(this, En) && (d(this, En, !1), l(this, ze).off("block", l(this, is)));
  }
  pause(t) {
    this.stop(), t && d(this, ee, -2);
  }
  resume() {
    this.start();
  }
}
ze = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), En = new WeakMap(), ee = new WeakMap(), qi = new WeakSet(), Zl = async function(t) {
  if (l(this, ee) === -2)
    return;
  const e = sa(l(this, ss));
  e.fromBlock = l(this, ee) + 1, e.toBlock = t;
  const n = await l(this, ze).getLogs(e);
  if (n.length === 0) {
    l(this, ee) < t - 60 && d(this, ee, t - 60);
    return;
  }
  for (const s of n)
    l(this, ze).emit(l(this, ss), s), d(this, ee, s.blockNumber);
};
const pg = BigInt(2), gg = 10;
function Ei(r) {
  return r && typeof r.then == "function";
}
function Ri(r, t) {
  return r + ":" + JSON.stringify(t, (e, n) => {
    if (n == null)
      return "null";
    if (typeof n == "bigint")
      return `bigint:${n.toString()}`;
    if (typeof n == "string")
      return n.toLowerCase();
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = Object.keys(n);
      return s.sort(), s.reduce((i, o) => (i[o] = n[o], i), {});
    }
    return n;
  });
}
class Xl {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(t) {
    /**
     *  The name fof the event.
     */
    w(this, "name");
    M(this, { name: t });
  }
  start() {
  }
  stop() {
  }
  pause(t) {
  }
  resume() {
  }
}
function yg(r) {
  return JSON.parse(JSON.stringify(r));
}
function ia(r) {
  return r = Array.from(new Set(r).values()), r.sort(), r;
}
async function Do(r, t) {
  if (r == null)
    throw new Error("invalid event");
  if (Array.isArray(r) && (r = { topics: r }), typeof r == "string")
    switch (r) {
      case "block":
      case "pending":
      case "debug":
      case "error":
      case "network":
        return { type: r, tag: r };
    }
  if (it(r, 32)) {
    const e = r.toLowerCase();
    return { type: "transaction", tag: Ri("tx", { hash: e }), hash: e };
  }
  if (r.orphan) {
    const e = r;
    return { type: "orphan", tag: Ri("orphan", e), filter: yg(e) };
  }
  if (r.address || r.topics) {
    const e = r, n = {
      topics: (e.topics || []).map((s) => s == null ? null : Array.isArray(s) ? ia(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (e.address) {
      const s = [], i = [], o = (a) => {
        it(a) ? s.push(a) : i.push((async () => {
          s.push(await St(a, t));
        })());
      };
      Array.isArray(e.address) ? e.address.forEach(o) : o(e.address), i.length && await Promise.all(i), n.address = ia(s.map((a) => a.toLowerCase()));
    }
    return { filter: n, tag: Ri("event", n), type: "event" };
  }
  y(!1, "unknown ProviderEvent", "event", r);
}
function Fo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const mg = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var Pt, vn, Nt, os, zt, Yn, xn, Ke, ei, ne, as, cs, Ft, Zt, ni, oa, ri, aa, Zn, Is, si, ca, Xn, Bs, us, ki;
class wg {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(t, e) {
    // Shares multiple identical requests made during the same 250ms
    b(this, Ft);
    b(this, ni);
    b(this, ri);
    // Account
    b(this, Zn);
    b(this, si);
    b(this, Xn);
    b(this, us);
    b(this, Pt, void 0);
    b(this, vn, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    b(this, Nt, void 0);
    b(this, os, void 0);
    b(this, zt, void 0);
    b(this, Yn, void 0);
    b(this, xn, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    b(this, Ke, void 0);
    b(this, ei, void 0);
    b(this, ne, void 0);
    b(this, as, void 0);
    b(this, cs, void 0);
    if (d(this, cs, Object.assign({}, mg, e || {})), t === "any")
      d(this, Yn, !0), d(this, zt, null);
    else if (t) {
      const n = qe.from(t);
      d(this, Yn, !1), d(this, zt, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      d(this, Yn, !1), d(this, zt, null);
    d(this, Ke, -1), d(this, xn, /* @__PURE__ */ new Map()), d(this, Pt, /* @__PURE__ */ new Map()), d(this, vn, /* @__PURE__ */ new Map()), d(this, Nt, null), d(this, os, !1), d(this, ei, 1), d(this, ne, /* @__PURE__ */ new Map()), d(this, as, !1);
  }
  get pollingInterval() {
    return l(this, cs).pollingInterval;
  }
  /**
   *  Returns ``this``, to allow an **AbstractProvider** to implement
   *  the [[ContractRunner]] interface.
   */
  get provider() {
    return this;
  }
  /**
   *  Returns all the registered plug-ins.
   */
  get plugins() {
    return Array.from(l(this, vn).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(t) {
    if (l(this, vn).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return l(this, vn).set(t.name, t.connect(this)), this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(t) {
    return l(this, vn).get(t) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return l(this, as);
  }
  set disableCcipRead(t) {
    d(this, as, !!t);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(t, e, n) {
    if (this.disableCcipRead || n.length === 0 || t.to == null)
      return null;
    const s = t.to.toLowerCase(), i = e.toLowerCase(), o = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], u = c.replace("{sender}", s).replace("{data}", i), f = new In(u);
      c.indexOf("{data}") === -1 && (f.body = { data: i, sender: s }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: f, index: a, urls: n });
      let h = "unknown error";
      const g = await f.send();
      try {
        const A = g.bodyJson;
        if (A.data)
          return this.emit("debug", { action: "receiveCcipReadFetchResult", request: f, result: A }), A.data;
        A.message && (h = A.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: f, result: A });
      } catch {
      }
      P(g.statusCode < 400 || g.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: t, info: { url: c, errorMessage: h } }), o.push(h);
    }
    P(!1, `error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: t,
      info: { urls: n, errorMessages: o }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(t, e) {
    return new Mp(rg(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(t, e) {
    return new ui(eg(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(t, e) {
    return new Ul(ag(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(t, e) {
    return new Js(Kl(t), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    P(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(t) {
    P(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
      operation: t.method,
      info: t
    });
  }
  // State
  async getBlockNumber() {
    const t = V(await I(this, Ft, Zt).call(this, { method: "getBlockNumber" }), "%response");
    return l(this, Ke) >= 0 && d(this, Ke, t), t;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(t) {
    return St(t, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(t) {
    if (t == null)
      return "latest";
    switch (t) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return t;
    }
    if (it(t))
      return it(t, 32) ? t : Er(t);
    if (typeof t == "bigint" && (t = V(t, "blockTag")), typeof t == "number")
      return t >= 0 ? Er(t) : l(this, Ke) >= 0 ? Er(l(this, Ke) + t) : this.getBlockNumber().then((e) => Er(e + t));
    y(!1, "invalid blockTag", "blockTag", t);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(t) {
    const e = (t.topics || []).map((c) => c == null ? null : Array.isArray(c) ? ia(c.map((u) => u.toLowerCase())) : c.toLowerCase()), n = "blockHash" in t ? t.blockHash : void 0, s = (c, u, f) => {
      let h;
      switch (c.length) {
        case 0:
          break;
        case 1:
          h = c[0];
          break;
        default:
          c.sort(), h = c;
      }
      if (n && (u != null || f != null))
        throw new Error("invalid filter");
      const g = {};
      return h && (g.address = h), e.length && (g.topics = e), u && (g.fromBlock = u), f && (g.toBlock = f), n && (g.blockHash = n), g;
    };
    let i = [];
    if (t.address)
      if (Array.isArray(t.address))
        for (const c of t.address)
          i.push(this._getAddress(c));
      else
        i.push(this._getAddress(t.address));
    let o;
    "fromBlock" in t && (o = this._getBlockTag(t.fromBlock));
    let a;
    return "toBlock" in t && (a = this._getBlockTag(t.toBlock)), i.filter((c) => typeof c != "string").length || o != null && typeof o != "string" || a != null && typeof a != "string" ? Promise.all([Promise.all(i), o, a]).then((c) => s(c[0], c[1], c[2])) : s(i, o, a);
  }
  /**
   *  Returns or resovles to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(t) {
    const e = _i(t), n = [];
    if (["to", "from"].forEach((s) => {
      if (e[s] == null)
        return;
      const i = St(e[s], this);
      Ei(i) ? n.push(async function() {
        e[s] = await i;
      }()) : e[s] = i;
    }), e.blockTag != null) {
      const s = this._getBlockTag(e.blockTag);
      Ei(s) ? n.push(async function() {
        e.blockTag = await s;
      }()) : e.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), e;
    }() : e;
  }
  async getNetwork() {
    if (l(this, zt) == null) {
      const s = this._detectNetwork().then((i) => (this.emit("network", i, null), i), (i) => {
        throw l(this, zt) === s && d(this, zt, null), i;
      });
      return d(this, zt, s), (await s).clone();
    }
    const t = l(this, zt), [e, n] = await Promise.all([
      t,
      this._detectNetwork()
      // The actual connected network
    ]);
    return e.chainId !== n.chainId && (l(this, Yn) ? (this.emit("network", n, e), l(this, zt) === t && d(this, zt, Promise.resolve(n))) : P(!1, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), e.clone();
  }
  async getFeeData() {
    const t = await this.getNetwork(), e = async () => {
      const { _block: s, gasPrice: i } = await Bt({
        _block: I(this, si, ca).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const u = await I(this, Ft, Zt).call(this, { method: "getGasPrice" });
            return F(u, "%response");
          } catch {
          }
          return null;
        })()
      });
      let o = null, a = null;
      const c = this._wrapBlock(s, t);
      return c && c.baseFeePerGas && (a = BigInt("1000000000"), o = c.baseFeePerGas * pg + a), new $c(i, o, a);
    }, n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new In(n.url), i = await n.processFunc(e, this, s);
      return new $c(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await e();
  }
  async estimateGas(t) {
    let e = this._getTransactionRequest(t);
    return Ei(e) && (e = await e), F(await I(this, Ft, Zt).call(this, {
      method: "estimateGas",
      transaction: e
    }), "%response");
  }
  async call(t) {
    const { tx: e, blockTag: n } = await Bt({
      tx: this._getTransactionRequest(t),
      blockTag: this._getBlockTag(t.blockTag)
    });
    return await I(this, ri, aa).call(this, I(this, ni, oa).call(this, e, n, t.enableCcipRead ? 0 : -1));
  }
  async getBalance(t, e) {
    return F(await I(this, Zn, Is).call(this, { method: "getBalance" }, t, e), "%response");
  }
  async getTransactionCount(t, e) {
    return V(await I(this, Zn, Is).call(this, { method: "getTransactionCount" }, t, e), "%response");
  }
  async getCode(t, e) {
    return D(await I(this, Zn, Is).call(this, { method: "getCode" }, t, e));
  }
  async getStorage(t, e, n) {
    const s = F(e, "position");
    return D(await I(this, Zn, Is).call(this, { method: "getStorage", position: s }, t, n));
  }
  // Write
  async broadcastTransaction(t) {
    const { blockNumber: e, hash: n, network: s } = await Bt({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: t
      }),
      network: this.getNetwork()
    }), i = Qi.from(t);
    if (i.hash !== n)
      throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(i, s).replaceableTransaction(e);
  }
  // Queries
  async getBlock(t, e) {
    const { network: n, params: s } = await Bt({
      network: this.getNetwork(),
      params: I(this, si, ca).call(this, t, !!e)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(t) {
    const { network: e, params: n } = await Bt({
      network: this.getNetwork(),
      params: I(this, Ft, Zt).call(this, { method: "getTransaction", hash: t })
    });
    return n == null ? null : this._wrapTransactionResponse(n, e);
  }
  async getTransactionReceipt(t) {
    const { network: e, params: n } = await Bt({
      network: this.getNetwork(),
      params: I(this, Ft, Zt).call(this, { method: "getTransactionReceipt", hash: t })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await I(this, Ft, Zt).call(this, { method: "getTransaction", hash: t });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, e);
  }
  async getTransactionResult(t) {
    const { result: e } = await Bt({
      network: this.getNetwork(),
      result: I(this, Ft, Zt).call(this, { method: "getTransactionResult", hash: t })
    });
    return e == null ? null : D(e);
  }
  // Bloom-filter Queries
  async getLogs(t) {
    let e = this._getFilter(t);
    Ei(e) && (e = await e);
    const { network: n, params: s } = await Bt({
      network: this.getNetwork(),
      params: I(this, Ft, Zt).call(this, { method: "getLogs", filter: e })
    });
    return s.map((i) => this._wrapLog(i, n));
  }
  // ENS
  _getProvider(t) {
    P(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(t) {
    return await Ji.fromName(this, t);
  }
  async getAvatar(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAvatar() : null;
  }
  async resolveName(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAddress() : null;
  }
  async lookupAddress(t) {
    t = W(t);
    const e = qo(t.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const n = await Ji.getEnsAddress(this), i = await new Cn(n, [
        "function resolver(bytes32) view returns (address)"
      ], this).resolver(e);
      if (i == null || i === zo)
        return null;
      const a = await new Cn(i, [
        "function name(bytes32) view returns (string)"
      ], this).name(e);
      return await this.resolveName(a) !== t ? null : a;
    } catch (n) {
      if (se(n, "BAD_DATA") && n.value === "0x" || se(n, "CALL_EXCEPTION"))
        return null;
      throw n;
    }
    return null;
  }
  async waitForTransaction(t, e, n) {
    const s = e ?? 1;
    return s === 0 ? this.getTransactionReceipt(t) : new Promise(async (i, o) => {
      let a = null;
      const c = async (u) => {
        try {
          const f = await this.getTransactionReceipt(t);
          if (f != null && u - f.blockNumber + 1 >= s) {
            i(f), a && (clearTimeout(a), a = null);
            return;
          }
        } catch (f) {
          console.log("EEE", f);
        }
        this.once("block", c);
      };
      n != null && (a = setTimeout(() => {
        a != null && (a = null, this.off("block", c), o(dt("timeout", "TIMEOUT", { reason: "timeout" })));
      }, n)), c(await this.getBlockNumber());
    });
  }
  async waitForBlock(t) {
    P(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(t) {
    const e = l(this, ne).get(t);
    e && (e.timer && clearTimeout(e.timer), l(this, ne).delete(t));
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(t, e) {
    e == null && (e = 0);
    const n = vs(this, ei)._++, s = () => {
      l(this, ne).delete(n), t();
    };
    if (this.paused)
      l(this, ne).set(n, { timer: null, func: s, time: e });
    else {
      const i = setTimeout(s, e);
      l(this, ne).set(n, { timer: i, func: s, time: Fo() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(t) {
    for (const e of l(this, Pt).values())
      t(e.subscriber);
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(t) {
    switch (t.type) {
      case "debug":
      case "error":
      case "network":
        return new Xl(t.type);
      case "block": {
        const e = new fg(this);
        return e.pollingInterval = this.pollingInterval, e;
      }
      case "event":
        return new La(this, t.filter);
      case "transaction":
        return new dg(this, t.hash);
      case "orphan":
        return new hg(this, t.filter);
    }
    throw new Error(`unsupported event: ${t.type}`);
  }
  /**
   *  If a [[Subscriber]] fails and needs to replace itself, this
   *  method may be used.
   *
   *  For example, this is used for providers when using the
   *  ``eth_getFilterChanges`` method, which can return null if state
   *  filters are not supported by the backend, allowing the Subscriber
   *  to swap in a [[PollingEventSubscriber]].
   */
  _recoverSubscriber(t, e) {
    for (const n of l(this, Pt).values())
      if (n.subscriber === t) {
        n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), l(this, Nt) != null && e.pause(l(this, Nt));
        break;
      }
  }
  async on(t, e) {
    const n = await I(this, us, ki).call(this, t);
    return n.listeners.push({ listener: e, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, l(this, Nt) != null && n.subscriber.pause(l(this, Nt))), this;
  }
  async once(t, e) {
    const n = await I(this, us, ki).call(this, t);
    return n.listeners.push({ listener: e, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, l(this, Nt) != null && n.subscriber.pause(l(this, Nt))), this;
  }
  async emit(t, ...e) {
    const n = await I(this, Xn, Bs).call(this, t, e);
    if (!n || n.listeners.length === 0)
      return !1;
    const s = n.listeners.length;
    return n.listeners = n.listeners.filter(({ listener: i, once: o }) => {
      const a = new wu(this, o ? null : i, t);
      try {
        i.call(this, ...e, a);
      } catch {
      }
      return !o;
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), l(this, Pt).delete(n.tag)), s > 0;
  }
  async listenerCount(t) {
    if (t) {
      const n = await I(this, Xn, Bs).call(this, t);
      return n ? n.listeners.length : 0;
    }
    let e = 0;
    for (const { listeners: n } of l(this, Pt).values())
      e += n.length;
    return e;
  }
  async listeners(t) {
    if (t) {
      const n = await I(this, Xn, Bs).call(this, t);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let e = [];
    for (const { listeners: n } of l(this, Pt).values())
      e = e.concat(n.map(({ listener: s }) => s));
    return e;
  }
  async off(t, e) {
    const n = await I(this, Xn, Bs).call(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!e || n.listeners.length === 0) && (n.started && n.subscriber.stop(), l(this, Pt).delete(n.tag)), this;
  }
  async removeAllListeners(t) {
    if (t) {
      const { tag: e, started: n, subscriber: s } = await I(this, us, ki).call(this, t);
      n && s.stop(), l(this, Pt).delete(e);
    } else
      for (const [e, { started: n, subscriber: s }] of l(this, Pt))
        n && s.stop(), l(this, Pt).delete(e);
    return this;
  }
  // Alias for "on"
  async addListener(t, e) {
    return await this.on(t, e);
  }
  // Alias for "off"
  async removeListener(t, e) {
    return this.off(t, e);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return l(this, os);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const t of l(this, ne).keys())
      this._clearTimeout(t);
    d(this, os, !0);
  }
  /**
   *  Whether the provider is currently paused.
   *
   *  A paused provider will not emit any events, and generally should
   *  not make any requests to the network, but that is up to sub-classes
   *  to manage.
   *
   *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
   *  which will buffer any events that occur while paused until the
   *  provider is unpaused.
   */
  get paused() {
    return l(this, Nt) != null;
  }
  set paused(t) {
    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(t) {
    if (d(this, Ke, -1), l(this, Nt) != null) {
      if (l(this, Nt) == !!t)
        return;
      P(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((e) => e.pause(t)), d(this, Nt, !!t);
    for (const e of l(this, ne).values())
      e.timer && clearTimeout(e.timer), e.time = Fo() - e.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (l(this, Nt) != null) {
      this._forEachSubscriber((t) => t.resume()), d(this, Nt, null);
      for (const t of l(this, ne).values()) {
        let e = t.time;
        e < 0 && (e = 0), t.time = Fo(), setTimeout(t.func, e);
      }
    }
  }
}
Pt = new WeakMap(), vn = new WeakMap(), Nt = new WeakMap(), os = new WeakMap(), zt = new WeakMap(), Yn = new WeakMap(), xn = new WeakMap(), Ke = new WeakMap(), ei = new WeakMap(), ne = new WeakMap(), as = new WeakMap(), cs = new WeakMap(), Ft = new WeakSet(), Zt = async function(t) {
  const e = l(this, cs).cacheTimeout;
  if (e < 0)
    return await this._perform(t);
  const n = Ri(t.method, t);
  let s = l(this, xn).get(n);
  return s || (s = this._perform(t), l(this, xn).set(n, s), setTimeout(() => {
    l(this, xn).get(n) === s && l(this, xn).delete(n);
  }, e)), await s;
}, ni = new WeakSet(), oa = async function(t, e, n) {
  P(n < gg, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, t, { blockTag: e, enableCcipRead: !0 })
  });
  const s = _i(t);
  try {
    return D(await this._perform({ method: "call", transaction: s, blockTag: e }));
  } catch (i) {
    if (!this.disableCcipRead && ma(i) && i.data && n >= 0 && e === "latest" && s.to != null && at(i.data, 0, 4) === "0x556f1830") {
      const o = i.data, a = await St(s.to, this);
      let c;
      try {
        c = xg(at(i.data, 4));
      } catch (h) {
        P(!1, h.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction: s,
          info: { data: o }
        });
      }
      P(c.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data: o,
        reason: "OffchainLookup",
        transaction: s,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: c.errorArgs
        }
      });
      const u = await this.ccipReadFetch(s, c.calldata, c.urls);
      P(u != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction: s,
        info: { data: i.data, errorArgs: c.errorArgs }
      });
      const f = {
        to: a,
        data: pt([c.selector, vg([u, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: f });
      try {
        const h = await I(this, ni, oa).call(this, f, e, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, f), result: h }), h;
      } catch (h) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, f), error: h }), h;
      }
    }
    throw i;
  }
}, ri = new WeakSet(), aa = async function(t) {
  const { value: e } = await Bt({
    network: this.getNetwork(),
    value: t
  });
  return e;
}, Zn = new WeakSet(), Is = async function(t, e, n) {
  let s = this._getAddress(e), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await I(this, ri, aa).call(this, I(this, Ft, Zt).call(this, Object.assign(t, { address: s, blockTag: i })));
}, si = new WeakSet(), ca = async function(t, e) {
  if (it(t, 32))
    return await I(this, Ft, Zt).call(this, {
      method: "getBlock",
      blockHash: t,
      includeTransactions: e
    });
  let n = this._getBlockTag(t);
  return typeof n != "string" && (n = await n), await I(this, Ft, Zt).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: e
  });
}, Xn = new WeakSet(), Bs = async function(t, e) {
  let n = await Do(t, this);
  return n.type === "event" && e && e.length > 0 && e[0].removed === !0 && (n = await Do({ orphan: "drop-log", log: e[0] }, this)), l(this, Pt).get(n.tag) || null;
}, us = new WeakSet(), ki = async function(t) {
  const e = await Do(t, this), n = e.tag;
  let s = l(this, Pt).get(n);
  return s || (s = { subscriber: this._getSubscriber(e), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, l(this, Pt).set(n, s)), s;
};
function Ag(r, t) {
  try {
    const e = ua(r, t);
    if (e)
      return Aa(e);
  } catch {
  }
  return null;
}
function ua(r, t) {
  if (r === "0x")
    return null;
  try {
    const e = V(at(r, t, t + 32)), n = V(at(r, e, e + 32));
    return at(r, e + 32, e + 32 + n);
  } catch {
  }
  return null;
}
function au(r) {
  const t = Kt(r);
  if (t.length > 32)
    throw new Error("internal; should not happen");
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function bg(r) {
  if (r.length % 32 === 0)
    return r;
  const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return t.set(r), t;
}
const Eg = new Uint8Array([]);
function vg(r) {
  const t = [];
  let e = 0;
  for (let n = 0; n < r.length; n++)
    t.push(Eg), e += 32;
  for (let n = 0; n < r.length; n++) {
    const s = X(r[n]);
    t[n] = au(e), t.push(au(s.length)), t.push(bg(s)), e += 32 + Math.ceil(s.length / 32) * 32;
  }
  return pt(t);
}
const cu = "0x0000000000000000000000000000000000000000000000000000000000000000";
function xg(r) {
  const t = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  P(Tr(r) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const e = at(r, 0, 32);
  P(at(e, 0, 12) === at(cu, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), t.sender = at(e, 12);
  try {
    const n = [], s = V(at(r, 32, 64)), i = V(at(r, s, s + 32)), o = at(r, s + 32);
    for (let a = 0; a < i; a++) {
      const c = Ag(o, a * 32);
      if (c == null)
        throw new Error("abort");
      n.push(c);
    }
    t.urls = n;
  } catch {
    P(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const n = ua(r, 64);
    if (n == null)
      throw new Error("abort");
    t.calldata = n;
  } catch {
    P(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  P(at(r, 100, 128) === at(cu, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), t.selector = at(r, 96, 100);
  try {
    const n = ua(r, 128);
    if (n == null)
      throw new Error("abort");
    t.extraData = n;
  } catch {
    P(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  return t.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => t[n]), t;
}
function pr(r, t) {
  if (r.provider)
    return r.provider;
  P(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: t });
}
async function uu(r, t) {
  let e = _i(t);
  if (e.to != null && (e.to = St(e.to, r)), e.from != null) {
    const n = e.from;
    e.from = Promise.all([
      r.getAddress(),
      St(n, r)
    ]).then(([s, i]) => (y(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
  } else
    e.from = r.getAddress();
  return await Bt(e);
}
class Pg {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(t) {
    /**
     *  The provider this signer is connected to.
     */
    w(this, "provider");
    M(this, { provider: t || null });
  }
  async getNonce(t) {
    return pr(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t);
  }
  async populateCall(t) {
    return await uu(this, t);
  }
  async populateTransaction(t) {
    const e = pr(this, "populateTransaction"), n = await uu(this, t);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const s = await this.provider.getNetwork();
    if (n.chainId != null) {
      const o = F(n.chainId);
      y(o === s.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId);
    } else
      n.chainId = s.chainId;
    const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || i) ? y(!1, "eip-1559 transaction do not support gasPrice", "tx", t) : (n.type === 0 || n.type === 1) && i && y(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
      n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const o = await e.getFeeData();
      P(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      }), n.gasPrice == null && (n.gasPrice = o.gasPrice);
    } else {
      const o = await e.getFeeData();
      if (n.type == null)
        if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
          if (n.type = 2, n.gasPrice != null) {
            const a = n.gasPrice;
            delete n.gasPrice, n.maxFeePerGas = a, n.maxPriorityFeePerGas = a;
          } else
            n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
        else
          o.gasPrice != null ? (P(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
            operation: "populateTransaction"
          }), n.gasPrice == null && (n.gasPrice = o.gasPrice), n.type = 0) : P(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
            operation: "signer.getFeeData"
          });
      else
        n.type === 2 && (n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas));
    }
    return await Bt(n);
  }
  async estimateGas(t) {
    return pr(this, "estimateGas").estimateGas(await this.populateCall(t));
  }
  async call(t) {
    return pr(this, "call").call(await this.populateCall(t));
  }
  async resolveName(t) {
    return await pr(this, "resolveName").resolveName(t);
  }
  async sendTransaction(t) {
    const e = pr(this, "sendTransaction"), n = await this.populateTransaction(t);
    delete n.from;
    const s = Qi.from(n);
    return await e.broadcastTransaction(await this.signTransaction(s));
  }
}
function Ng(r) {
  return JSON.parse(JSON.stringify(r));
}
var Lt, Te, qn, Pn, $n, ls, ii, la, oi, fa;
class ql {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(t) {
    b(this, ii);
    b(this, oi);
    b(this, Lt, void 0);
    b(this, Te, void 0);
    b(this, qn, void 0);
    b(this, Pn, void 0);
    b(this, $n, void 0);
    b(this, ls, void 0);
    d(this, Lt, t), d(this, Te, null), d(this, qn, I(this, ii, la).bind(this)), d(this, Pn, !1), d(this, $n, null), d(this, ls, !1);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(t) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(t, e) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(t) {
    throw new Error("subclasses must override this");
  }
  start() {
    l(this, Pn) || (d(this, Pn, !0), I(this, ii, la).call(this, -2));
  }
  stop() {
    l(this, Pn) && (d(this, Pn, !1), d(this, ls, !0), I(this, oi, fa).call(this), l(this, Lt).off("block", l(this, qn)));
  }
  pause(t) {
    t && I(this, oi, fa).call(this), l(this, Lt).off("block", l(this, qn));
  }
  resume() {
    this.start();
  }
}
Lt = new WeakMap(), Te = new WeakMap(), qn = new WeakMap(), Pn = new WeakMap(), $n = new WeakMap(), ls = new WeakMap(), ii = new WeakSet(), la = async function(t) {
  try {
    l(this, Te) == null && d(this, Te, this._subscribe(l(this, Lt)));
    let e = null;
    try {
      e = await l(this, Te);
    } catch (i) {
      if (!se(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (e == null) {
      d(this, Te, null), l(this, Lt)._recoverSubscriber(this, this._recover(l(this, Lt)));
      return;
    }
    const n = await l(this, Lt).getNetwork();
    if (l(this, $n) || d(this, $n, n), l(this, $n).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (l(this, ls))
      return;
    const s = await l(this, Lt).send("eth_getFilterChanges", [e]);
    await this._emitResults(l(this, Lt), s);
  } catch (e) {
    console.log("@TODO", e);
  }
  l(this, Lt).once("block", l(this, qn));
}, oi = new WeakSet(), fa = function() {
  const t = l(this, Te);
  t && (d(this, Te, null), t.then((e) => {
    l(this, Lt).send("eth_uninstallFilter", [e]);
  }));
};
var tr;
class Tg extends ql {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(e, n) {
    super(e);
    b(this, tr, void 0);
    d(this, tr, Ng(n));
  }
  _recover(e) {
    return new La(e, l(this, tr));
  }
  async _subscribe(e) {
    return await e.send("eth_newFilter", [l(this, tr)]);
  }
  async _emitResults(e, n) {
    for (const s of n)
      e.emit(l(this, tr), e._wrapLog(s, e._network));
  }
}
tr = new WeakMap();
class Cg extends ql {
  async _subscribe(t) {
    return await t.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(t, e) {
    for (const n of e)
      t.emit("pending", n);
  }
}
const Og = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Si(r) {
  if (r == null || Og.indexOf(typeof r) >= 0 || typeof r.getAddress == "function")
    return r;
  if (Array.isArray(r))
    return r.map(Si);
  if (typeof r == "object")
    return Object.keys(r).reduce((t, e) => (t[e] = r[e], t), {});
  throw new Error(`should not happen: ${r} (${typeof r})`);
}
function Ig(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function gr(r) {
  return r && r.toLowerCase();
}
function lu(r) {
  return r && typeof r.pollingInterval == "number";
}
const Bg = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class Lo extends Pg {
  constructor(e, n) {
    super(e);
    w(this, "address");
    n = W(n), M(this, { address: n });
  }
  connect(e) {
    P(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(e) {
    return await this.populateCall(e);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(e) {
    const n = Si(e), s = [];
    if (n.from) {
      const o = n.from;
      s.push((async () => {
        const a = await St(o, this.provider);
        y(a != null && a.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", e), n.from = a;
      })());
    } else
      n.from = this.address;
    if (n.gasLimit == null && s.push((async () => {
      n.gasLimit = await this.provider.estimateGas({ ...n, from: this.address });
    })()), n.to != null) {
      const o = n.to;
      s.push((async () => {
        n.to = await St(o, this.provider);
      })());
    }
    s.length && await Promise.all(s);
    const i = this.provider.getRpcTransaction(n);
    return this.provider.send("eth_sendTransaction", [i]);
  }
  async sendTransaction(e) {
    const n = await this.provider.getBlockNumber(), s = await this.sendUncheckedTransaction(e);
    return await new Promise((i, o) => {
      const a = [1e3, 100], c = async () => {
        const u = await this.provider.getTransaction(s);
        if (u != null) {
          i(u.replaceableTransaction(n));
          return;
        }
        this.provider._setTimeout(() => {
          c();
        }, a.pop() || 4e3);
      };
      c();
    });
  }
  async signTransaction(e) {
    const n = Si(e);
    if (n.from) {
      const i = await St(n.from, this.provider);
      y(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", e), n.from = i;
    } else
      n.from = this.address;
    const s = this.provider.getRpcTransaction(n);
    return await this.provider.send("eth_signTransaction", [s]);
  }
  async signMessage(e) {
    const n = typeof e == "string" ? $e(e) : e;
    return await this.provider.send("personal_sign", [
      D(n),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(e, n, s) {
    const i = Si(s), o = await Hi.resolveNames(e, n, i, async (a) => {
      const c = await St(a);
      return y(c != null, "TypedData does not support null address", "value", a), c;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(Hi.getPayload(o.domain, n, o.value))
    ]);
  }
  async unlock(e) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      e,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(e) {
    const n = typeof e == "string" ? $e(e) : e;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      D(n)
    ]);
  }
}
var er, fs, We, Ce, pe, Ye, ai, ha;
class Rg extends wg {
  constructor(e, n) {
    super(e, n);
    b(this, ai);
    b(this, er, void 0);
    // The next ID to use for the JSON-RPC ID field
    b(this, fs, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    b(this, We, void 0);
    b(this, Ce, void 0);
    b(this, pe, void 0);
    b(this, Ye, void 0);
    d(this, fs, 1), d(this, er, Object.assign({}, Bg, n || {})), d(this, We, []), d(this, Ce, null), d(this, Ye, null);
    {
      let i = null;
      const o = new Promise((a) => {
        i = a;
      });
      d(this, pe, { promise: o, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    s && (y(e == null || s.matches(e), "staticNetwork MUST match network object", "options", n), d(this, Ye, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(e) {
    return l(this, er)[e];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    return P(l(this, Ye), "network is not available yet", "NETWORK_ERROR"), l(this, Ye);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(e) {
    if (e.method === "call" || e.method === "estimateGas") {
      let s = e.transaction;
      if (s && s.type != null && F(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
        const i = await this.getFeeData();
        i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (e = Object.assign({}, e, {
          transaction: Object.assign({}, s, { type: void 0 })
        }));
      }
    }
    const n = this.getRpcRequest(e);
    return n != null ? await this.send(n.method, n.args) : super._perform(e);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const e = this._getOption("staticNetwork");
    if (e)
      return e;
    if (this.ready)
      return qe.from(F(await this.send("eth_chainId", [])));
    const n = {
      id: vs(this, fs)._++,
      method: "eth_chainId",
      params: [],
      jsonrpc: "2.0"
    };
    this.emit("debug", { action: "sendRpcPayload", payload: n });
    let s;
    try {
      s = (await this._send(n))[0];
    } catch (i) {
      throw this.emit("debug", { action: "receiveRpcError", error: i }), i;
    }
    if (this.emit("debug", { action: "receiveRpcResult", result: s }), "result" in s)
      return qe.from(F(s.result));
    throw this.getRpcError(n, s);
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    l(this, pe) == null || l(this, pe).resolve == null || (l(this, pe).resolve(), d(this, pe, null), (async () => {
      for (; l(this, Ye) == null && !this.destroyed; )
        try {
          d(this, Ye, await this._detectNetwork());
        } catch (e) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", dt("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: e } })), await Ig(1e3);
        }
      I(this, ai, ha).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (l(this, pe) != null)
      return await l(this, pe).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(e) {
    return e.type === "pending" ? new Cg(this) : e.type === "event" ? this._getOption("polling") ? new La(this, e.filter) : new Tg(this, e.filter) : e.type === "orphan" && e.filter.orphan === "drop-log" ? new Xl("orphan") : super._getSubscriber(e);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return l(this, pe) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(e) {
    const n = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((s) => {
      if (e[s] == null)
        return;
      let i = s;
      s === "gasLimit" && (i = "gas"), n[i] = Er(F(e[s], `tx.${s}`));
    }), ["from", "to", "data"].forEach((s) => {
      e[s] != null && (n[s] = D(e[s]));
    }), e.accessList && (n.accessList = ur(e.accessList)), n;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(e) {
    switch (e.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [gr(e.address), e.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [gr(e.address), e.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [gr(e.address), e.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            gr(e.address),
            "0x" + e.position.toString(16),
            e.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [e.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in e)
          return {
            method: "eth_getBlockByNumber",
            args: [e.blockTag, !!e.includeTransactions]
          };
        if ("blockHash" in e)
          return {
            method: "eth_getBlockByHash",
            args: [e.blockHash, !!e.includeTransactions]
          };
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [e.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [e.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(e.transaction), e.blockTag]
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(e.transaction)]
        };
      case "getLogs":
        return e.filter && e.filter.address != null && (Array.isArray(e.filter.address) ? e.filter.address = e.filter.address.map(gr) : e.filter.address = gr(e.filter.address)), { method: "eth_getLogs", args: [e.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(e, n) {
    const { method: s } = e, { error: i } = n;
    if (s === "eth_estimateGas" && i.message) {
      const c = i.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return dt("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: e.params[0],
          info: { payload: e, error: i }
        });
    }
    if (s === "eth_call" || s === "eth_estimateGas") {
      const c = da(i), u = Vs.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", e.params[0], c ? c.data : null);
      return u.info = { error: i, payload: e }, u;
    }
    const o = JSON.stringify(Sg(i));
    if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
      return dt("user rejected action", "ACTION_REJECTED", {
        action: {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        }[s] || "unknown",
        reason: "rejected",
        info: { payload: e, error: i }
      });
    if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
      const c = e.params[0];
      if (o.match(/insufficient funds|base fee exceeds gas limit/i))
        return dt("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: c,
          info: { error: i }
        });
      if (o.match(/nonce/i) && o.match(/too low/i))
        return dt("nonce has already been used", "NONCE_EXPIRED", { transaction: c, info: { error: i } });
      if (o.match(/replacement transaction/i) && o.match(/underpriced/i))
        return dt("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: c, info: { error: i } });
      if (o.match(/only replay-protected/i))
        return dt("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: s,
          info: { transaction: c, info: { error: i } }
        });
    }
    let a = !!o.match(/the method .* does not exist/i);
    return a || i && i.details && i.details.startsWith("Unauthorized method:") && (a = !0), a ? dt("unsupported operation", "UNSUPPORTED_OPERATION", {
      operation: e.method,
      info: { error: i, payload: e }
    }) : dt("could not coalesce error", "UNKNOWN_ERROR", { error: i, payload: e });
  }
  /**
   *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
   *  over the underlying channel. This can be used to call methods
   *  on the backend that do not have a high-level API within the Provider
   *  API.
   *
   *  This method queues requests according to the batch constraints
   *  in the options, assigns the request a unique ID.
   *
   *  **Do NOT override** this method in sub-classes; instead
   *  override [[_send]] or force the options values in the
   *  call to the constructor to modify this method's behavior.
   */
  send(e, n) {
    if (this.destroyed)
      return Promise.reject(dt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e }));
    const s = vs(this, fs)._++, i = new Promise((o, a) => {
      l(this, We).push({
        resolve: o,
        reject: a,
        payload: { method: e, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return I(this, ai, ha).call(this), i;
  }
  /**
   *  Resolves to the [[Signer]] account for  %%address%% managed by
   *  the client.
   *
   *  If the %%address%% is a number, it is used as an index in the
   *  the accounts from [[listAccounts]].
   *
   *  This can only be used on clients which manage accounts (such as
   *  Geth with imported account or MetaMask).
   *
   *  Throws if the account doesn't exist.
   */
  async getSigner(e) {
    e == null && (e = 0);
    const n = this.send("eth_accounts", []);
    if (typeof e == "number") {
      const i = await n;
      if (e >= i.length)
        throw new Error("no such account");
      return new Lo(this, i[e]);
    }
    const { accounts: s } = await Bt({
      network: this.getNetwork(),
      accounts: n
    });
    e = W(e);
    for (const i of s)
      if (W(i) === e)
        return new Lo(this, e);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new Lo(this, n));
  }
  destroy() {
    l(this, Ce) && (clearTimeout(l(this, Ce)), d(this, Ce, null));
    for (const { payload: e, reject: n } of l(this, We))
      n(dt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e.method }));
    d(this, We, []), super.destroy();
  }
}
er = new WeakMap(), fs = new WeakMap(), We = new WeakMap(), Ce = new WeakMap(), pe = new WeakMap(), Ye = new WeakMap(), ai = new WeakSet(), ha = function() {
  if (l(this, Ce))
    return;
  const e = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  d(this, Ce, setTimeout(() => {
    d(this, Ce, null);
    const n = l(this, We);
    for (d(this, We, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== l(this, er).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((o) => o.payload)).length > l(this, er).batchMaxSize) {
          n.unshift(s.pop());
          break;
        }
      (async () => {
        const i = s.length === 1 ? s[0].payload : s.map((o) => o.payload);
        this.emit("debug", { action: "sendRpcPayload", payload: i });
        try {
          const o = await this._send(i);
          this.emit("debug", { action: "receiveRpcResult", result: o });
          for (const { resolve: a, reject: c, payload: u } of s) {
            if (this.destroyed) {
              c(dt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: u.method }));
              continue;
            }
            const f = o.filter((h) => h.id === u.id)[0];
            if (f == null) {
              const h = dt("missing response for request", "BAD_DATA", {
                value: o,
                info: { payload: u }
              });
              this.emit("error", h), c(h);
              continue;
            }
            if ("error" in f) {
              c(this.getRpcError(u, f));
              continue;
            }
            a(f.result);
          }
        } catch (o) {
          this.emit("debug", { action: "receiveRpcError", error: o });
          for (const { reject: a } of s)
            a(o);
        }
      })();
    }
  }, e));
};
var Nn;
class kg extends Rg {
  constructor(e, n) {
    super(e, n);
    b(this, Nn, void 0);
    d(this, Nn, 4e3);
  }
  _getSubscriber(e) {
    const n = super._getSubscriber(e);
    return lu(n) && (n.pollingInterval = l(this, Nn)), n;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return l(this, Nn);
  }
  set pollingInterval(e) {
    if (!Number.isInteger(e) || e < 0)
      throw new Error("invalid interval");
    d(this, Nn, e), this._forEachSubscriber((n) => {
      lu(n) && (n.pollingInterval = l(this, Nn));
    });
  }
}
Nn = new WeakMap();
function da(r) {
  if (r == null)
    return null;
  if (typeof r.message == "string" && r.message.match(/revert/i) && it(r.data))
    return { message: r.message, data: r.data };
  if (typeof r == "object") {
    for (const t in r) {
      const e = da(r[t]);
      if (e)
        return e;
    }
    return null;
  }
  if (typeof r == "string")
    try {
      return da(JSON.parse(r));
    } catch {
    }
  return null;
}
function pa(r, t) {
  if (r != null) {
    if (typeof r.message == "string" && t.push(r.message), typeof r == "object")
      for (const e in r)
        pa(r[e], t);
    if (typeof r == "string")
      try {
        return pa(JSON.parse(r), t);
      } catch {
      }
  }
}
function Sg(r) {
  const t = [];
  return pa(r, t), t;
}
var hs;
class Ug extends kg {
  /**
   *  Connnect to the %%ethereum%% provider, optionally forcing the
   *  %%network%%.
   */
  constructor(e, n) {
    super(n, { batchMaxCount: 1 });
    b(this, hs, void 0);
    d(this, hs, async (s, i) => {
      const o = { method: s, params: i };
      this.emit("debug", { action: "sendEip1193Request", payload: o });
      try {
        const a = await e.request(o);
        return this.emit("debug", { action: "receiveEip1193Result", result: a }), a;
      } catch (a) {
        const c = new Error(a.message);
        throw c.code = a.code, c.data = a.data, c.payload = o, this.emit("debug", { action: "receiveEip1193Error", error: c }), c;
      }
    });
  }
  async send(e, n) {
    return await this._start(), await super.send(e, n);
  }
  async _send(e) {
    y(!Array.isArray(e), "EIP-1193 does not support batch request", "payload", e);
    try {
      const n = await l(this, hs).call(this, e.method, e.params || []);
      return [{ id: e.id, result: n }];
    } catch (n) {
      return [{
        id: e.id,
        error: { code: n.code, data: n.data, message: n.message }
      }];
    }
  }
  getRpcError(e, n) {
    switch (n = JSON.parse(JSON.stringify(n)), n.error.code || -1) {
      case 4001:
        n.error.message = `ethers-user-denied: ${n.error.message}`;
        break;
      case 4200:
        n.error.message = `ethers-unsupported: ${n.error.message}`;
        break;
    }
    return super.getRpcError(e, n);
  }
  /**
   *  Resolves to ``true`` if the provider manages the %%address%%.
   */
  async hasSigner(e) {
    e == null && (e = 0);
    const n = await this.send("eth_accounts", []);
    return typeof e == "number" ? n.length > e : (e = e.toLowerCase(), n.filter((s) => s.toLowerCase() === e).length !== 0);
  }
  async getSigner(e) {
    if (e == null && (e = 0), !await this.hasSigner(e))
      try {
        await l(this, hs).call(this, "eth_requestAccounts", []);
      } catch (n) {
        const s = n.payload;
        throw this.getRpcError(s, { id: s.id, error: n });
      }
    return await super.getSigner(e);
  }
}
hs = new WeakMap();
const ho = new Ug(window.ethereum);
let vi, xi;
async function ga() {
  return vi ? Promise.resolve(vi) : xi || (xi = new Promise(async (r) => {
    await window.ethereum.enable(), vi = await ho.getSigner(), r(vi);
  }), xi);
}
function Dg({
  activating: r,
  activationFunctions: t,
  selectedFunctionId: e,
  balance: n
}) {
  return console.log(t, e), /* @__PURE__ */ et.jsxs(et.Fragment, { children: [
    /* @__PURE__ */ et.jsx(
      "div",
      {
        className: r === "unactivated" ? "opacity-100" : "opacity-0",
        children: /* @__PURE__ */ et.jsxs("p", { className: "text-sm text-center", children: [
          t[e].context,
          /* @__PURE__ */ et.jsx("br", {}),
          /* @__PURE__ */ et.jsx("br", {}),
          t[e].description,
          /* @__PURE__ */ et.jsx("br", {}),
          /* @__PURE__ */ et.jsx("br", {}),
          "Reward:",
          " ",
          String(
            t[e].multiplier * t[e].weightInWatt
          ),
          " ",
          "Verification WATT"
        ] })
      }
    ),
    r === "activating" && /* @__PURE__ */ et.jsx(
      "img",
      {
        src: "./assets/loading.png",
        alt: "Loading...",
        className: "absolute top-16 w-20 h-20"
      }
    ),
    r === "activated" && /* @__PURE__ */ et.jsxs("div", { children: [
      "activated $",
      n,
      " WATTS"
    ] })
  ] });
}
const Fg = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkCancelled",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkFulfilled",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkRequested",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferRequested",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "requester",
        type: "address"
      }
    ],
    name: "RequestFulfilled",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_activationFunctionId",
        type: "uint256"
      }
    ],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "bool",
        name: "data",
        type: "bool"
      }
    ],
    name: "fulfill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getFeeInHundredthsOfLink",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getJobId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOracleAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "passportHolders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "request",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "requesters",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "response",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeInHundredthsOfLink",
        type: "uint256"
      }
    ],
    name: "setFeeInHundredthsOfLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeInJuels",
        type: "uint256"
      }
    ],
    name: "setFeeInJuels",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_jobId",
        type: "string"
      }
    ],
    name: "setJobId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracleAddress",
        type: "address"
      }
    ],
    name: "setOracleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
], Lg = "0xf192Ee5a9fB9AE3A8dee79669CFd2BA8C8441d9c", Mg = new Cn(
  Lg,
  Fg,
  ho
), Gg = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poC",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256"
      }
    ],
    name: "ActivationFunctionApproved",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "developer",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "string",
        name: "context",
        type: "string"
      }
    ],
    name: "ActivationFunctionRegistered",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "DebugAddress",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256"
      }
    ],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "activationFunctions",
    outputs: [
      {
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      },
      {
        internalType: "enum NewcoinEncoder.WattType",
        name: "wattType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "multiplier",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "contextId",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "context",
        type: "string"
      },
      {
        internalType: "string",
        name: "description",
        type: "string"
      },
      {
        internalType: "address",
        name: "addrss",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "weightInWatt",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "isAsync",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256"
      }
    ],
    name: "approveActivationFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256"
      }
    ],
    name: "canMint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getApprovedActivationFunctions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "issuer",
            type: "address"
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool"
          },
          {
            internalType: "enum NewcoinEncoder.WattType",
            name: "wattType",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "multiplier",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "contextId",
            type: "bytes32"
          },
          {
            internalType: "string",
            name: "context",
            type: "string"
          },
          {
            internalType: "string",
            name: "description",
            type: "string"
          },
          {
            internalType: "address",
            name: "addrss",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "weightInWatt",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "isAsync",
            type: "bool"
          }
        ],
        internalType: "struct NewcoinEncoder.ActivationFunction[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "conditionMet",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256"
      }
    ],
    name: "oracleResponse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poC",
    outputs: [
      {
        internalType: "contract EnergyMinterMock",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum NewcoinEncoder.WattType",
        name: "_wattType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_contextId",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "_context",
        type: "string"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "address",
        name: "_addrss",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_weightInWatt",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_isAsync",
        type: "bool"
      }
    ],
    name: "registerActivationFunction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
], Qg = "0x84387e3ad062D683BFc7eD2Eeaf2C30B27Bd3d05", $l = new Cn(
  Qg,
  Gg,
  ho
), Hg = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "id",
        type: "uint8"
      }
    ],
    name: "balanceOfEnergy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOfWatts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "id",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    name: "neuralTokenBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "wattBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], _g = "0xf272Fe62eEdCBCf7221D8451a68a85c3AF4fAcFe", Vg = new Cn(
  _g,
  Hg,
  ho
);
function ya(r, t, e) {
  const [n, s] = Pi(e);
  return hu(() => {
    let i = !1;
    const o = r();
    if (o != null)
      return o.then((a) => {
        i || s(a);
      }), () => {
        i = !0;
      };
  }, t), n;
}
function Jg({
  activating: r,
  setActivating: t,
  setBalance: e,
  selectedFunctionId: n
}) {
  const s = ya(ga, []);
  if (!s)
    return /* @__PURE__ */ et.jsx(et.Fragment, { children: "Wait..." });
  const i = async () => {
    try {
      await Mg.connect(
        s
      ).request(), setTimeout(async () => {
        try {
          await (await $l.connect(
            s
          ).activate(n)).wait(), o();
        } catch (c) {
          console.log("Error during activation: ", c);
        }
      }, 6e4);
    } catch (a) {
      console.log("Error during request: ", a);
    }
    t("activating");
  }, o = async () => {
    const a = Vg.connect(
      s
    );
    try {
      const c = await s.getAddress(), u = await a.balanceOfWatts(c);
      console.log("Balance of Watts: ", u.toString()), e(u.toString()), t("activated");
    } catch (c) {
      console.log("Error fetching balance: ", c);
    }
  };
  return /* @__PURE__ */ et.jsx(
    "button",
    {
      onClick: () => i(),
      className: `py-2 px-4 text-white rounded-full w-40 ${r === "activating" ? "bg-gray-400" : "bg-black"}`,
      disabled: r === "activating",
      children: r === "activating" ? "Activating" : "Activate"
    }
  );
}
function jg({
  activationFunctions: r,
  setSelectedFunctionId: t,
  selectedFunctionId: e
}) {
  const n = (s) => {
    const i = Number(s.target.value);
    t(i);
  };
  return hu(() => {
    console.log(e);
  }, [e]), /* @__PURE__ */ et.jsxs(
    "select",
    {
      onChange: n,
      value: e,
      className: `py-2 px-4 text-xs text-black rounded-full w-40 border border-black ${e ? "bg-gray-200" : "bg-white"}`,
      children: [
        /* @__PURE__ */ et.jsx("option", { value: "", disabled: !0, children: "Select an activation function" }),
        r.map((s, i) => /* @__PURE__ */ et.jsx("option", { value: i, children: s.context }, s.id))
      ]
    }
  );
}
function zg() {
  const [r, t] = Pi("unactivated"), [e, n] = Pi("0"), [s, i] = Pi(0), o = ya(ga, []), c = ya(async () => {
    if (!o)
      return;
    const f = await $l.connect(
      o
    ).getApprovedActivationFunctions();
    return console.log(f), f;
  }, [o], []) || [];
  return /* @__PURE__ */ et.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ et.jsx("div", { className: "relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96", children: c.length > 0 && /* @__PURE__ */ et.jsxs(et.Fragment, { children: [
    r != "activating" && /* @__PURE__ */ et.jsx(
      jg,
      {
        selectedFunctionId: s,
        setSelectedFunctionId: i,
        activationFunctions: c
      }
    ),
    /* @__PURE__ */ et.jsx(
      Dg,
      {
        activating: r,
        activationFunctions: c,
        selectedFunctionId: s,
        balance: e
      }
    ),
    /* @__PURE__ */ et.jsx(
      Jg,
      {
        activating: r,
        setActivating: t,
        balance: e,
        setBalance: n,
        selectedFunctionId: s
      }
    )
  ] }) }) });
}
const Xg = zg;
export {
  Xg as ActivationByContractAddress,
  zg as default
};
//# sourceMappingURL=af-widget.js.map
