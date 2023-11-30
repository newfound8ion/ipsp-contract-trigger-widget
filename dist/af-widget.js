var Ef = Object.defineProperty;
var vf = (r, t, e) => t in r ? Ef(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var w = (r, t, e) => (vf(r, typeof t != "symbol" ? t + "" : t, e), e), Ao = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var l = (r, t, e) => (Ao(r, t, "read from private field"), e ? e.call(r) : t.get(r)), b = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, p = (r, t, e, n) => (Ao(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
var Es = (r, t, e, n) => ({
  set _(s) {
    p(r, t, s, e);
  },
  get _() {
    return l(r, t, n);
  }
}), O = (r, t, e) => (Ao(r, t, "access private method"), e);
import hu, { useState as Pi, useEffect as du } from "react";
var Lo = { exports: {} }, vs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function xf() {
  if ($a)
    return vs;
  $a = 1;
  var r = hu, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, u) {
    var f, h = {}, g = null, A = null;
    u !== void 0 && (g = "" + u), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (A = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (h[f] = c[f]);
    if (a && a.defaultProps)
      for (f in c = a.defaultProps, c)
        h[f] === void 0 && (h[f] = c[f]);
    return { $$typeof: t, type: a, key: g, ref: A, props: h, _owner: s.current };
  }
  return vs.Fragment = e, vs.jsx = o, vs.jsxs = o, vs;
}
var xs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function Pf() {
  return tc || (tc = 1, process.env.NODE_ENV !== "production" && function() {
    var r = hu, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), E = Symbol.iterator, m = "@@iterator";
    function x(d) {
      if (d === null || typeof d != "object")
        return null;
      var N = E && d[E] || d[m];
      return typeof N == "function" ? N : null;
    }
    var v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(d) {
      {
        for (var N = arguments.length, I = new Array(N > 1 ? N - 1 : 0), Q = 1; Q < N; Q++)
          I[Q - 1] = arguments[Q];
        S("error", d, I);
      }
    }
    function S(d, N, I) {
      {
        var Q = v.ReactDebugCurrentFrame, W = Q.getStackAddendum();
        W !== "" && (N += "%s", I = I.concat([W]));
        var tt = I.map(function(z) {
          return String(z);
        });
        tt.unshift("Warning: " + N), Function.prototype.apply.call(console[d], console, tt);
      }
    }
    var V = !1, L = !1, k = !1, M = !1, G = !1, et;
    et = Symbol.for("react.module.reference");
    function Z(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || G || d === s || d === u || d === f || M || d === A || V || L || k || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === h || d.$$typeof === o || d.$$typeof === a || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === et || d.getModuleId !== void 0));
    }
    function K(d, N, I) {
      var Q = d.displayName;
      if (Q)
        return Q;
      var W = N.displayName || N.name || "";
      return W !== "" ? I + "(" + W + ")" : I;
    }
    function bt(d) {
      return d.displayName || "Context";
    }
    function nt(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var N = d;
            return bt(N) + ".Consumer";
          case o:
            var I = d;
            return bt(I._context) + ".Provider";
          case c:
            return K(d, d.render, "ForwardRef");
          case h:
            var Q = d.displayName || null;
            return Q !== null ? Q : nt(d.type) || "Memo";
          case g: {
            var W = d, tt = W._payload, z = W._init;
            try {
              return nt(z(tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Et = Object.assign, C = 0, R, H, $, X, ut, vt, xt;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function be() {
      {
        if (C === 0) {
          R = console.log, H = console.info, $ = console.warn, X = console.error, ut = console.group, vt = console.groupCollapsed, xt = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        C++;
      }
    }
    function rn() {
      {
        if (C--, C === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, d, {
              value: R
            }),
            info: Et({}, d, {
              value: H
            }),
            warn: Et({}, d, {
              value: $
            }),
            error: Et({}, d, {
              value: X
            }),
            group: Et({}, d, {
              value: ut
            }),
            groupCollapsed: Et({}, d, {
              value: vt
            }),
            groupEnd: Et({}, d, {
              value: xt
            })
          });
        }
        C < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = v.ReactCurrentDispatcher, Wt;
    function sn(d, N, I) {
      {
        if (Wt === void 0)
          try {
            throw Error();
          } catch (W) {
            var Q = W.stack.trim().match(/\n( *(at )?)/);
            Wt = Q && Q[1] || "";
          }
        return `
` + Wt + d;
      }
    }
    var ce = !1, ue;
    {
      var pi = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new pi();
    }
    function ke(d, N) {
      if (!d || ce)
        return "";
      {
        var I = ue.get(d);
        if (I !== void 0)
          return I;
      }
      var Q;
      ce = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var tt;
      tt = Re.current, Re.current = null, be();
      try {
        if (N) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (Se) {
              Q = Se;
            }
            Reflect.construct(d, [], z);
          } else {
            try {
              z.call();
            } catch (Se) {
              Q = Se;
            }
            d.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Se) {
            Q = Se;
          }
          d();
        }
      } catch (Se) {
        if (Se && Q && typeof Se.stack == "string") {
          for (var J = Se.stack.split(`
`), Ot = Q.stack.split(`
`), lt = J.length - 1, ht = Ot.length - 1; lt >= 1 && ht >= 0 && J[lt] !== Ot[ht]; )
            ht--;
          for (; lt >= 1 && ht >= 0; lt--, ht--)
            if (J[lt] !== Ot[ht]) {
              if (lt !== 1 || ht !== 1)
                do
                  if (lt--, ht--, ht < 0 || J[lt] !== Ot[ht]) {
                    var Yt = `
` + J[lt].replace(" at new ", " at ");
                    return d.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", d.displayName)), typeof d == "function" && ue.set(d, Yt), Yt;
                  }
                while (lt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        ce = !1, Re.current = tt, rn(), Error.prepareStackTrace = W;
      }
      var hr = d ? d.displayName || d.name : "", qa = hr ? sn(hr) : "";
      return typeof d == "function" && ue.set(d, qa), qa;
    }
    function Vt(d, N, I) {
      return ke(d, !1);
    }
    function on(d) {
      var N = d.prototype;
      return !!(N && N.isReactComponent);
    }
    function Rn(d, N, I) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return ke(d, on(d));
      if (typeof d == "string")
        return sn(d);
      switch (d) {
        case u:
          return sn("Suspense");
        case f:
          return sn("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return Vt(d.render);
          case h:
            return Rn(d.type, N, I);
          case g: {
            var Q = d, W = Q._payload, tt = Q._init;
            try {
              return Rn(tt(W), N, I);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, Qa = {}, Ha = v.ReactDebugCurrentFrame;
    function gi(d) {
      if (d) {
        var N = d._owner, I = Rn(d.type, d._source, N ? N.type : null);
        Ha.setExtraStackFrame(I);
      } else
        Ha.setExtraStackFrame(null);
    }
    function tf(d, N, I, Q, W) {
      {
        var tt = Function.call.bind(kn);
        for (var z in d)
          if (tt(d, z)) {
            var J = void 0;
            try {
              if (typeof d[z] != "function") {
                var Ot = Error((Q || "React class") + ": " + I + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              J = d[z](N, z, Q, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (lt) {
              J = lt;
            }
            J && !(J instanceof Error) && (gi(W), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", I, z, typeof J), gi(null)), J instanceof Error && !(J.message in Qa) && (Qa[J.message] = !0, gi(W), T("Failed %s type: %s", I, J.message), gi(null));
          }
      }
    }
    var ef = Array.isArray;
    function po(d) {
      return ef(d);
    }
    function nf(d) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, I = N && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return I;
      }
    }
    function rf(d) {
      try {
        return Va(d), !1;
      } catch {
        return !0;
      }
    }
    function Va(d) {
      return "" + d;
    }
    function _a(d) {
      if (rf(d))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nf(d)), Va(d);
    }
    var bs = v.ReactCurrentOwner, sf = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ja, za, go;
    go = {};
    function of(d) {
      if (kn.call(d, "ref")) {
        var N = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function af(d) {
      if (kn.call(d, "key")) {
        var N = Object.getOwnPropertyDescriptor(d, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function cf(d, N) {
      if (typeof d.ref == "string" && bs.current && N && bs.current.stateNode !== N) {
        var I = nt(bs.current.type);
        go[I] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', nt(bs.current.type), d.ref), go[I] = !0);
      }
    }
    function uf(d, N) {
      {
        var I = function() {
          Ja || (Ja = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        I.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function lf(d, N) {
      {
        var I = function() {
          za || (za = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        I.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var ff = function(d, N, I, Q, W, tt, z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: N,
        ref: I,
        props: z,
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
        value: W
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function hf(d, N, I, Q, W) {
      {
        var tt, z = {}, J = null, Ot = null;
        I !== void 0 && (_a(I), J = "" + I), af(N) && (_a(N.key), J = "" + N.key), of(N) && (Ot = N.ref, cf(N, W));
        for (tt in N)
          kn.call(N, tt) && !sf.hasOwnProperty(tt) && (z[tt] = N[tt]);
        if (d && d.defaultProps) {
          var lt = d.defaultProps;
          for (tt in lt)
            z[tt] === void 0 && (z[tt] = lt[tt]);
        }
        if (J || Ot) {
          var ht = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          J && uf(z, ht), Ot && lf(z, ht);
        }
        return ff(d, J, Ot, W, Q, bs.current, z);
      }
    }
    var yo = v.ReactCurrentOwner, ja = v.ReactDebugCurrentFrame;
    function fr(d) {
      if (d) {
        var N = d._owner, I = Rn(d.type, d._source, N ? N.type : null);
        ja.setExtraStackFrame(I);
      } else
        ja.setExtraStackFrame(null);
    }
    var mo;
    mo = !1;
    function wo(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Ka() {
      {
        if (yo.current) {
          var d = nt(yo.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function df(d) {
      {
        if (d !== void 0) {
          var N = d.fileName.replace(/^.*[\\\/]/, ""), I = d.lineNumber;
          return `

Check your code at ` + N + ":" + I + ".";
        }
        return "";
      }
    }
    var Wa = {};
    function pf(d) {
      {
        var N = Ka();
        if (!N) {
          var I = typeof d == "string" ? d : d.displayName || d.name;
          I && (N = `

Check the top-level render call using <` + I + ">.");
        }
        return N;
      }
    }
    function Ya(d, N) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var I = pf(N);
        if (Wa[I])
          return;
        Wa[I] = !0;
        var Q = "";
        d && d._owner && d._owner !== yo.current && (Q = " It was passed a child from " + nt(d._owner.type) + "."), fr(d), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, Q), fr(null);
      }
    }
    function Za(d, N) {
      {
        if (typeof d != "object")
          return;
        if (po(d))
          for (var I = 0; I < d.length; I++) {
            var Q = d[I];
            wo(Q) && Ya(Q, N);
          }
        else if (wo(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var W = x(d);
          if (typeof W == "function" && W !== d.entries)
            for (var tt = W.call(d), z; !(z = tt.next()).done; )
              wo(z.value) && Ya(z.value, N);
        }
      }
    }
    function gf(d) {
      {
        var N = d.type;
        if (N == null || typeof N == "string")
          return;
        var I;
        if (typeof N == "function")
          I = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === h))
          I = N.propTypes;
        else
          return;
        if (I) {
          var Q = nt(N);
          tf(I, d.props, "prop", Q, d);
        } else if (N.PropTypes !== void 0 && !mo) {
          mo = !0;
          var W = nt(N);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yf(d) {
      {
        for (var N = Object.keys(d.props), I = 0; I < N.length; I++) {
          var Q = N[I];
          if (Q !== "children" && Q !== "key") {
            fr(d), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), fr(null);
            break;
          }
        }
        d.ref !== null && (fr(d), T("Invalid attribute `ref` supplied to `React.Fragment`."), fr(null));
      }
    }
    function Xa(d, N, I, Q, W, tt) {
      {
        var z = Z(d);
        if (!z) {
          var J = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = df(W);
          Ot ? J += Ot : J += Ka();
          var lt;
          d === null ? lt = "null" : po(d) ? lt = "array" : d !== void 0 && d.$$typeof === t ? (lt = "<" + (nt(d.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : lt = typeof d, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", lt, J);
        }
        var ht = hf(d, N, I, W, tt);
        if (ht == null)
          return ht;
        if (z) {
          var Yt = N.children;
          if (Yt !== void 0)
            if (Q)
              if (po(Yt)) {
                for (var hr = 0; hr < Yt.length; hr++)
                  Za(Yt[hr], d);
                Object.freeze && Object.freeze(Yt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Za(Yt, d);
        }
        return d === n ? yf(ht) : gf(ht), ht;
      }
    }
    function mf(d, N, I) {
      return Xa(d, N, I, !0);
    }
    function wf(d, N, I) {
      return Xa(d, N, I, !1);
    }
    var Af = wf, bf = mf;
    xs.Fragment = n, xs.jsx = Af, xs.jsxs = bf;
  }()), xs;
}
process.env.NODE_ENV === "production" ? Lo.exports = xf() : Lo.exports = Pf();
var rt = Lo.exports;
const Nf = "6.8.0";
function Tf(r, t, e) {
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
function D(r, t, e) {
  for (let n in t) {
    let s = t[n];
    const i = e ? e[n] : null;
    i && Tf(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
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
function ie(r, t) {
  return r && r.code === t;
}
function ya(r) {
  return ie(r, "CALL_EXCEPTION");
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
    i.push(`code=${t}`), i.push(`version=${Nf}`), i.length && (r += " (" + i.join(", ") + ")");
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
  return D(s, { code: t }), e && Object.assign(s, e), s.shortMessage == null && D(s, { shortMessage: n }), s;
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
const Cf = ["NFD", "NFC", "NFKD", "NFKC"].reduce((r, t) => {
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
function If(r) {
  P(Cf.indexOf(r) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
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
function q(r, t) {
  return gu(r, t, !1);
}
function Qt(r, t) {
  return gu(r, t, !0);
}
function at(r, t) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && r.length !== 2 + 2 * t || t === !0 && r.length % 2 !== 0);
}
function Of(r) {
  return at(r, !0) || r instanceof Uint8Array;
}
const ec = "0123456789abcdef";
function U(r) {
  const t = q(r);
  let e = "0x";
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    e += ec[(s & 240) >> 4] + ec[s & 15];
  }
  return e;
}
function pt(r) {
  return "0x" + r.map((t) => U(t).substring(2)).join("");
}
function Tr(r) {
  return at(r, !0) ? (r.length - 2) / 2 : q(r).length;
}
function ct(r, t, e) {
  const n = q(r);
  return e != null && e > n.length && P(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: e
  }), U(n.slice(t ?? 0, e ?? n.length));
}
function yu(r, t, e) {
  const n = q(r);
  P(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: t,
    offset: t + 1
  });
  const s = new Uint8Array(t);
  return s.fill(0), e ? s.set(n, t - n.length) : s.set(n, 0), U(s);
}
function ir(r, t) {
  return yu(r, t, !0);
}
function Bf(r, t) {
  return yu(r, t, !1);
}
const to = BigInt(0), ye = BigInt(1), br = 9007199254740991;
function Rf(r, t) {
  const e = eo(r, "value"), n = BigInt(_(t, "width"));
  if (P(e >> n === to, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), e >> n - ye) {
    const s = (ye << n) - ye;
    return -((~e & s) + ye);
  }
  return e;
}
function mu(r, t) {
  let e = F(r, "value");
  const n = BigInt(_(t, "width")), s = ye << n - ye;
  if (e < to) {
    e = -e, P(e <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (ye << n) - ye;
    return (~e & i) + ye;
  } else
    P(e < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return e;
}
function Cs(r, t) {
  const e = eo(r, "value"), n = BigInt(_(t, "bits"));
  return e & (ye << n) - ye;
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
const nc = "0123456789abcdef";
function ma(r) {
  if (r instanceof Uint8Array) {
    let t = "0x0";
    for (const e of r)
      t += nc[e >> 4], t += nc[e & 15];
    return BigInt(t);
  }
  return F(r);
}
function _(r, t) {
  switch (typeof r) {
    case "bigint":
      return y(r >= -br && r <= br, "overflow", t || "value", r), Number(r);
    case "number":
      return y(Number.isInteger(r), "underflow", t || "value", r), y(r >= -br && r <= br, "overflow", t || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return _(BigInt(r), t);
      } catch (e) {
        y(!1, `invalid numeric string: ${e.message}`, t || "value", r);
      }
  }
  y(!1, "invalid numeric value", t || "value", r);
}
function kf(r) {
  return _(ma(r));
}
function In(r, t) {
  let n = eo(r, "value").toString(16);
  if (t == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = _(t, "width");
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
  let t = U(Of(r) ? r : Kt(r)).substring(2);
  for (; t.startsWith("0"); )
    t = t.substring(1);
  return t === "" && (t = "0"), "0x" + t;
}
const Sf = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const rc = BigInt(58);
function Uf(r) {
  let t = ma(q(r)), e = "";
  for (; t; )
    e = Sf[Number(t % rc)] + e, t /= rc;
  return e;
}
function Ff(r) {
  r = atob(r);
  const t = new Uint8Array(r.length);
  for (let e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return q(t);
}
function Df(r) {
  const t = q(r);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += String.fromCharCode(t[n]);
  return btoa(e);
}
var Ir;
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
    b(this, Ir, void 0);
    p(this, Ir, e), D(this, { emitter: t, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    l(this, Ir) != null && await this.emitter.off(this.filter, l(this, Ir));
  }
}
Ir = new WeakMap();
function Lf(r, t, e, n, s) {
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
function Mf(r, t, e, n, s) {
  return r === "OVERLONG" ? (y(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Au(r, t, e));
}
const Gf = Object.freeze({
  error: Lf,
  ignore: Au,
  replace: Mf
});
function Qf(r, t) {
  t == null && (t = Gf.error);
  const e = q(r, "bytes"), n = [];
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
  t != null && (If(t), r = r.normalize(t));
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
function Hf(r) {
  return r.map((t) => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10 & 1023) + 55296, (t & 1023) + 56320))).join("");
}
function wa(r, t) {
  return Hf(Qf(r, t));
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
const Vf = 12, _f = 250;
let sc = bu();
const Jf = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), zf = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let bo = !1;
async function Eu(r, t) {
  try {
    const e = r.match(Jf);
    if (!e)
      throw new Error("invalid data");
    return new Tn(200, "OK", {
      "content-type": e[1] || "text/plain"
    }, e[2] ? Ff(e[3]) : Kf(e[3]));
  } catch {
    return new Tn(599, "BAD REQUEST (invalid data: URI)", {}, null, new On(r));
  }
}
function vu(r) {
  async function t(e, n) {
    try {
      const s = e.match(zf);
      if (!s)
        throw new Error("invalid link");
      return new On(`${r}${s[2]}`);
    } catch {
      return new Tn(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new On(e));
    }
  }
  return t;
}
const yi = {
  data: Eu,
  ipfs: vu("https://gateway.ipfs.io/ipfs/")
}, xu = /* @__PURE__ */ new WeakMap();
var Mn, fn;
class jf {
  constructor(t) {
    b(this, Mn, void 0);
    b(this, fn, void 0);
    p(this, Mn, []), p(this, fn, !1), xu.set(t, () => {
      if (!l(this, fn)) {
        p(this, fn, !0);
        for (const e of l(this, Mn))
          setTimeout(() => {
            e();
          }, 0);
        p(this, Mn, []);
      }
    });
  }
  addListener(t) {
    P(!l(this, fn), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), l(this, Mn).push(t);
  }
  get cancelled() {
    return l(this, fn);
  }
  checkSignal() {
    P(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
Mn = new WeakMap(), fn = new WeakMap();
function mi(r) {
  if (r == null)
    throw new Error("missing signal; should not happen");
  return r.checkSignal(), r;
}
var Or, Br, he, Le, Rr, kr, gt, Jt, Me, Gn, Qn, Hn, ve, Ge, hn, Vn, Is;
const zi = class zi {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(t) {
    b(this, Vn);
    b(this, Or, void 0);
    b(this, Br, void 0);
    b(this, he, void 0);
    b(this, Le, void 0);
    b(this, Rr, void 0);
    b(this, kr, void 0);
    b(this, gt, void 0);
    b(this, Jt, void 0);
    b(this, Me, void 0);
    // Hooks
    b(this, Gn, void 0);
    b(this, Qn, void 0);
    b(this, Hn, void 0);
    b(this, ve, void 0);
    b(this, Ge, void 0);
    b(this, hn, void 0);
    p(this, kr, String(t)), p(this, Or, !1), p(this, Br, !0), p(this, he, {}), p(this, Le, ""), p(this, Rr, 3e5), p(this, Ge, {
      slotInterval: _f,
      maxAttempts: Vf
    }), p(this, hn, null);
  }
  /**
   *  The fetch URI to requrest.
   */
  get url() {
    return l(this, kr);
  }
  set url(t) {
    p(this, kr, String(t));
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
      p(this, gt, void 0), p(this, Jt, void 0);
    else if (typeof t == "string")
      p(this, gt, $e(t)), p(this, Jt, "text/plain");
    else if (t instanceof Uint8Array)
      p(this, gt, t), p(this, Jt, "application/octet-stream");
    else if (typeof t == "object")
      p(this, gt, $e(JSON.stringify(t))), p(this, Jt, "application/json");
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
    t == null && (t = ""), p(this, Le, String(t).toUpperCase());
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
    const t = Object.assign({}, l(this, he));
    return l(this, Me) && (t.authorization = `Basic ${Df($e(l(this, Me)))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), t["content-type"] == null && l(this, Jt) && (t["content-type"] = l(this, Jt)), this.body && (t["content-length"] = String(this.body.length)), t;
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
    l(this, he)[String(t).toLowerCase()] = String(e);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    p(this, he, {});
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
    y(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), p(this, Me, `${t}:${e}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return l(this, Br);
  }
  set allowGzip(t) {
    p(this, Br, !!t);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!l(this, Or);
  }
  set allowInsecureAuthentication(t) {
    p(this, Or, !!t);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complere response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return l(this, Rr);
  }
  set timeout(t) {
    y(t >= 0, "timeout must be non-zero", "timeout", t), p(this, Rr, t);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return l(this, Gn) || null;
  }
  set preflightFunc(t) {
    p(this, Gn, t);
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
    return l(this, Qn) || null;
  }
  set processFunc(t) {
    p(this, Qn, t);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return l(this, Hn) || null;
  }
  set retryFunc(t) {
    p(this, Hn, t);
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
    return l(this, hn) || sc;
  }
  set getUrlFunc(t) {
    p(this, hn, t);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${l(this, gt) ? U(l(this, gt)) : "null"}>`;
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
    return P(l(this, ve) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), p(this, ve, new jf(this)), O(this, Vn, Is).call(this, 0, ic() + this.timeout, 0, this, new Tn(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    P(l(this, ve) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
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
    const s = new zi(t);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, p(s, he, Object.assign({}, l(this, he))), l(this, gt) && p(s, gt, new Uint8Array(l(this, gt))), p(s, Jt, l(this, Jt)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const t = new zi(this.url);
    return p(t, Le, l(this, Le)), l(this, gt) && p(t, gt, l(this, gt)), p(t, Jt, l(this, Jt)), p(t, he, Object.assign({}, l(this, he))), p(t, Me, l(this, Me)), this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), p(t, Gn, l(this, Gn)), p(t, Qn, l(this, Qn)), p(t, Hn, l(this, Hn)), p(t, hn, l(this, hn)), t;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    bo = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(t) {
    return yi[t.toLowerCase()] || null;
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
    if (bo)
      throw new Error("gateways locked");
    yi[t] = e;
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
    if (bo)
      throw new Error("gateways locked");
    sc = t;
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
Or = new WeakMap(), Br = new WeakMap(), he = new WeakMap(), Le = new WeakMap(), Rr = new WeakMap(), kr = new WeakMap(), gt = new WeakMap(), Jt = new WeakMap(), Me = new WeakMap(), Gn = new WeakMap(), Qn = new WeakMap(), Hn = new WeakMap(), ve = new WeakMap(), Ge = new WeakMap(), hn = new WeakMap(), Vn = new WeakSet(), Is = async function(t, e, n, s, i) {
  var f, h, g;
  if (t >= l(this, Ge).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  P(ic() <= e, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await Wf(n);
  let o = this.clone();
  const a = (o.url.split(":")[0] || "").toLowerCase();
  if (a in yi) {
    const A = await yi[a](o.url, mi(l(s, ve)));
    if (A instanceof Tn) {
      let E = A;
      if (this.processFunc) {
        mi(l(s, ve));
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
  const c = await this.getUrlFunc(o, mi(l(s, ve)));
  let u = new Tn(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (u.statusCode === 301 || u.statusCode === 302) {
    try {
      const A = u.headers.location || "";
      return O(f = o.redirect(A), Vn, Is).call(f, t + 1, e, 0, s, u);
    } catch {
    }
    return u;
  } else if (u.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, u, t))) {
    const A = u.headers["retry-after"];
    let E = l(this, Ge).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
    return typeof A == "string" && A.match(/^[1-9][0-9]*$/) && (E = parseInt(A)), O(h = o.clone(), Vn, Is).call(h, t + 1, e, E, s, u);
  }
  if (this.processFunc) {
    mi(l(s, ve));
    try {
      u = await this.processFunc(o, u);
    } catch (A) {
      (A.throttle == null || typeof A.stall != "number") && u.makeServerError("error in post-processing function", A).assertOk();
      let E = l(this, Ge).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
      return A.stall >= 0 && (E = A.stall), O(g = o.clone(), Vn, Is).call(g, t + 1, e, E, s, u);
    }
  }
  return u;
};
let On = zi;
var Ks, Ws, Ys, de, Sr, _n;
const La = class La {
  constructor(t, e, n, s, i) {
    b(this, Ks, void 0);
    b(this, Ws, void 0);
    b(this, Ys, void 0);
    b(this, de, void 0);
    b(this, Sr, void 0);
    b(this, _n, void 0);
    p(this, Ks, t), p(this, Ws, e), p(this, Ys, Object.keys(n).reduce((o, a) => (o[a.toLowerCase()] = String(n[a]), o), {})), p(this, de, s == null ? null : new Uint8Array(s)), p(this, Sr, i || null), p(this, _n, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${l(this, de) ? U(l(this, de)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return l(this, Ks);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return l(this, Ws);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, l(this, Ys));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return l(this, de) == null ? null : new Uint8Array(l(this, de));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return l(this, de) == null ? "" : wa(l(this, de));
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
    const s = new La(599, n, this.headers, this.body, l(this, Sr) || void 0);
    return p(s, _n, { message: t, error: e }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(t, e) {
    e == null ? e = -1 : y(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
    const n = new Error(t || "throttling requests");
    throw D(n, { stall: e, throttle: !0 }), n;
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
    return l(this, de) != null;
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
Ks = new WeakMap(), Ws = new WeakMap(), Ys = new WeakMap(), de = new WeakMap(), Sr = new WeakMap(), _n = new WeakMap();
let Tn = La;
function ic() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Kf(r) {
  return $e(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
}
function Wf(r) {
  return new Promise((t) => setTimeout(t, r));
}
function Yf(r) {
  let t = r.toString(16);
  for (; t.length < 2; )
    t = "0" + t;
  return "0x" + t;
}
function oc(r, t, e) {
  let n = 0;
  for (let s = 0; s < e; s++)
    n = n * 256 + r[t + s];
  return n;
}
function ac(r, t, e, n) {
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
    const s = oc(r, t + 1, n);
    return e(t + 1 + n + s), ac(r, t, t + 1 + n, n + s);
  } else if (r[t] >= 192) {
    const n = r[t] - 192;
    return e(t + 1 + n), ac(r, t, t + 1, n);
  } else if (r[t] >= 184) {
    const n = r[t] - 183;
    e(t + 1 + n);
    const s = oc(r, t + 1, n);
    e(t + 1 + n + s);
    const i = U(r.slice(t + 1 + n, t + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (r[t] >= 128) {
    const n = r[t] - 128;
    e(t + 1 + n);
    const s = U(r.slice(t + 1, t + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: Yf(r[t]) };
}
function Aa(r) {
  const t = q(r, "data"), e = Pu(t, 0);
  return y(e.consumed === t.length, "unexpected junk after rlp payload", "data", r), e.result;
}
function cc(r) {
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
    const s = cc(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const t = Array.prototype.slice.call(q(r, "object"));
  if (t.length === 1 && t[0] <= 127)
    return t;
  if (t.length <= 55)
    return t.unshift(128 + t.length), t;
  const e = cc(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
const uc = "0123456789abcdef";
function Ls(r) {
  let t = "0x";
  for (const e of Nu(r))
    t += uc[e >> 4], t += uc[e & 15];
  return t;
}
const kt = 32, Mo = new Uint8Array(kt), Zf = ["then"], wi = {};
function Ps(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw e.error = t, e;
}
var dn;
const Fs = class Fs extends Array {
  /**
   *  @private
   */
  constructor(...e) {
    const n = e[0];
    let s = e[1], i = (e[2] || []).slice(), o = !0;
    n !== wi && (s = e, i = [], o = !1);
    super(s.length);
    b(this, dn, void 0);
    s.forEach((c, u) => {
      this[u] = c;
    });
    const a = i.reduce((c, u) => (typeof u == "string" && c.set(u, (c.get(u) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (p(this, dn, Object.freeze(s.map((c, u) => {
      const f = i[u];
      return f != null && a.get(f) === 1 ? f : null;
    }))), !!o)
      return Object.freeze(this), new Proxy(this, {
        get: (c, u, f) => {
          if (typeof u == "string") {
            if (u.match(/^[0-9]+$/)) {
              const g = _(u, "%index");
              if (g < 0 || g >= this.length)
                throw new RangeError("out of result range");
              const A = c[g];
              return A instanceof Error && Ps(`index ${g}`, A), A;
            }
            if (Zf.indexOf(u) >= 0)
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
      n instanceof Error && Ps(`index ${s}`, n), e.push(n);
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
    return new Fs(wi, s, i);
  }
  /**
   *  @_ignore
   */
  filter(e, n) {
    const s = [], i = [];
    for (let o = 0; o < this.length; o++) {
      const a = this[o];
      a instanceof Error && Ps(`index ${o}`, a), e.call(n, a, o, this) && (s.push(a), i.push(l(this, dn)[o]));
    }
    return new Fs(wi, s, i);
  }
  /**
   *  @_ignore
   */
  map(e, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const o = this[i];
      o instanceof Error && Ps(`index ${i}`, o), s.push(e.call(n, o, i, this));
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
    return s instanceof Error && Ps(`property ${JSON.stringify(e)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(e, n) {
    return new Fs(wi, e, n);
  }
};
dn = new WeakMap();
let Ui = Fs;
function lc(r) {
  let t = Kt(r);
  return P(t.length <= kt, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: t, length: kt, offset: t.length }), t.length !== kt && (t = Qt(pt([Mo.slice(t.length % kt), t]))), t;
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
    D(this, { name: t, type: e, localName: n, dynamic: s }, {
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
var Qe, Jn, Ur, Ni;
class Go {
  constructor() {
    b(this, Ur);
    // An array of WordSize lengthed objects to concatenation
    b(this, Qe, void 0);
    b(this, Jn, void 0);
    p(this, Qe, []), p(this, Jn, 0);
  }
  get data() {
    return pt(l(this, Qe));
  }
  get length() {
    return l(this, Jn);
  }
  appendWriter(t) {
    return O(this, Ur, Ni).call(this, Qt(t.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(t) {
    let e = Qt(t);
    const n = e.length % kt;
    return n && (e = Qt(pt([e, Mo.slice(n)]))), O(this, Ur, Ni).call(this, e);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(t) {
    return O(this, Ur, Ni).call(this, lc(t));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const t = l(this, Qe).length;
    return l(this, Qe).push(Mo), p(this, Jn, l(this, Jn) + kt), (e) => {
      l(this, Qe)[t] = lc(e);
    };
  }
}
Qe = new WeakMap(), Jn = new WeakMap(), Ur = new WeakSet(), Ni = function(t) {
  return l(this, Qe).push(t), p(this, Jn, l(this, Jn) + t.length), t.length;
};
var zt, te, ji, Tu;
const Ma = class Ma {
  constructor(t, e) {
    b(this, ji);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    w(this, "allowLoose");
    b(this, zt, void 0);
    b(this, te, void 0);
    D(this, { allowLoose: !!e }), p(this, zt, Qt(t)), p(this, te, 0);
  }
  get data() {
    return U(l(this, zt));
  }
  get dataLength() {
    return l(this, zt).length;
  }
  get consumed() {
    return l(this, te);
  }
  get bytes() {
    return new Uint8Array(l(this, zt));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(t) {
    return new Ma(l(this, zt).slice(l(this, te) + t), this.allowLoose);
  }
  // Read bytes
  readBytes(t, e) {
    let n = O(this, ji, Tu).call(this, 0, t, !!e);
    return p(this, te, l(this, te) + n.length), n.slice(0, t);
  }
  // Read a numeric values
  readValue() {
    return ma(this.readBytes(kt));
  }
  readIndex() {
    return kf(this.readBytes(kt));
  }
};
zt = new WeakMap(), te = new WeakMap(), ji = new WeakSet(), Tu = function(t, e, n) {
  let s = Math.ceil(e / kt) * kt;
  return l(this, te) + s > l(this, zt).length && (this.allowLoose && n && l(this, te) + e <= l(this, zt).length ? s = e : P(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: Qt(l(this, zt)),
    length: l(this, zt).length,
    offset: l(this, te) + s
  })), l(this, zt).slice(l(this, te), l(this, te) + s);
};
let Qo = Ma;
function Fi(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function ba(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function Xf(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Fi(r.outputLen), Fi(r.blockLen);
}
function ds(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function Cu(r, t) {
  ba(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const Eo = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Iu = (r) => r instanceof Uint8Array, qf = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), vo = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), Ee = (r, t) => r << 32 - t | r >>> t, $f = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!$f)
  throw new Error("Non little-endian hardware is not supported");
function th(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function no(r) {
  if (typeof r == "string" && (r = th(r)), !Iu(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function eh(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!Iu(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
class Ea {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Ou(r) {
  const t = (n) => r().update(no(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function nh(r = 32) {
  if (Eo && typeof Eo.getRandomValues == "function")
    return Eo.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
class Bu extends Ea {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, Xf(t);
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
    ds(this), ba(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
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
function rh(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(e >> s & i), a = Number(e & i), c = n ? 4 : 0, u = n ? 0 : 4;
  r.setUint32(t + c, o, n), r.setUint32(t + u, a, n);
}
class sh extends Ea {
  constructor(t, e, n, s) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = vo(this.buffer);
  }
  update(t) {
    ds(this);
    const { view: e, buffer: n, blockLen: s } = this;
    t = no(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(s - this.pos, i - o);
      if (a === s) {
        const c = vo(t);
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
    rh(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = vo(t), c = this.outputLen;
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
const ih = (r, t, e) => r & t ^ ~r & e, oh = (r, t, e) => r & t ^ r & e ^ t & e, ah = /* @__PURE__ */ new Uint32Array([
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
class ch extends sh {
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
      const g = cn[h - 15], A = cn[h - 2], E = Ee(g, 7) ^ Ee(g, 18) ^ g >>> 3, m = Ee(A, 17) ^ Ee(A, 19) ^ A >>> 10;
      cn[h] = m + cn[h - 7] + E + cn[h - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: a, F: c, G: u, H: f } = this;
    for (let h = 0; h < 64; h++) {
      const g = Ee(a, 6) ^ Ee(a, 11) ^ Ee(a, 25), A = f + g + ih(a, c, u) + ah[h] + cn[h] | 0, m = (Ee(n, 2) ^ Ee(n, 13) ^ Ee(n, 22)) + oh(n, s, i) | 0;
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
const uh = /* @__PURE__ */ Ou(() => new ch()), Ai = /* @__PURE__ */ BigInt(2 ** 32 - 1), fc = /* @__PURE__ */ BigInt(32);
function lh(r, t = !1) {
  return t ? { h: Number(r & Ai), l: Number(r >> fc & Ai) } : { h: Number(r >> fc & Ai) | 0, l: Number(r & Ai) | 0 };
}
function fh(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: o } = lh(r[s], t);
    [e[s], n[s]] = [i, o];
  }
  return [e, n];
}
const hh = (r, t, e) => r << e | t >>> 32 - e, dh = (r, t, e) => t << e | r >>> 32 - e, ph = (r, t, e) => t << e - 32 | r >>> 64 - e, gh = (r, t, e) => r << e - 32 | t >>> 64 - e, [ku, Su, Uu] = [[], [], []], yh = /* @__PURE__ */ BigInt(0), Ns = /* @__PURE__ */ BigInt(1), mh = /* @__PURE__ */ BigInt(2), wh = /* @__PURE__ */ BigInt(7), Ah = /* @__PURE__ */ BigInt(256), bh = /* @__PURE__ */ BigInt(113);
for (let r = 0, t = Ns, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], ku.push(2 * (5 * n + e)), Su.push((r + 1) * (r + 2) / 2 % 64);
  let s = yh;
  for (let i = 0; i < 7; i++)
    t = (t << Ns ^ (t >> wh) * bh) % Ah, t & mh && (s ^= Ns << (Ns << /* @__PURE__ */ BigInt(i)) - Ns);
  Uu.push(s);
}
const [Eh, vh] = /* @__PURE__ */ fh(Uu, !0), hc = (r, t, e) => e > 32 ? ph(r, t, e) : hh(r, t, e), dc = (r, t, e) => e > 32 ? gh(r, t, e) : dh(r, t, e);
function xh(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      e[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = e[c], f = e[c + 1], h = hc(u, f, 1) ^ e[a], g = dc(u, f, 1) ^ e[a + 1];
      for (let A = 0; A < 50; A += 10)
        r[o + A] ^= h, r[o + A + 1] ^= g;
    }
    let s = r[2], i = r[3];
    for (let o = 0; o < 24; o++) {
      const a = Su[o], c = hc(s, i, a), u = dc(s, i, a), f = ku[o];
      s = r[f], i = r[f + 1], r[f] = c, r[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        e[a] = r[o + a];
      for (let a = 0; a < 10; a++)
        r[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    r[0] ^= Eh[n], r[1] ^= vh[n];
  }
  e.fill(0);
}
class va extends Ea {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, e, n, s = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Fi(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = qf(this.state);
  }
  keccak() {
    xh(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
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
    ds(this, !1), ba(t), this.finish();
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
    return Fi(t), this.xofInto(new Uint8Array(t));
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
    return t || (t = new va(e, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const Ph = (r, t, e) => Ou(() => new va(t, r, e)), Nh = /* @__PURE__ */ Ph(1, 136, 256 / 8);
let Fu = !1;
const Du = function(r) {
  return Nh(r);
};
let Lu = Du;
function ot(r) {
  const t = q(r, "data");
  return U(Lu(t));
}
ot._ = Du;
ot.lock = function() {
  Fu = !0;
};
ot.register = function(r) {
  if (Fu)
    throw new TypeError("keccak256 is locked");
  Lu = r;
};
Object.freeze(ot);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Mu = BigInt(0), ro = BigInt(1), Th = BigInt(2), so = (r) => r instanceof Uint8Array, Ch = /* @__PURE__ */ Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function ps(r) {
  if (!so(r))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += Ch[r[e]];
  return t;
}
function Gu(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function xa(r) {
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
function rr(r) {
  return xa(ps(r));
}
function Pa(r) {
  if (!so(r))
    throw new Error("Uint8Array expected");
  return xa(ps(Uint8Array.from(r).reverse()));
}
function ys(r, t) {
  return gs(r.toString(16).padStart(t * 2, "0"));
}
function Na(r, t) {
  return ys(r, t).reverse();
}
function Ih(r) {
  return gs(Gu(r));
}
function fe(r, t, e) {
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
function Ms(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!so(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
function Oh(r, t) {
  if (r.length !== t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
function Bh(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Rh(r) {
  let t;
  for (t = 0; r > Mu; r >>= ro, t += 1)
    ;
  return t;
}
function kh(r, t) {
  return r >> BigInt(t) & ro;
}
const Sh = (r, t, e) => r | (e ? ro : Mu) << BigInt(t), Ta = (r) => (Th << BigInt(r - 1)) - ro, xo = (r) => new Uint8Array(r), pc = (r) => Uint8Array.from(r);
function Qu(r, t, e) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function")
    throw new Error("hmacFn must be a function");
  let n = xo(r), s = xo(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, a = (...h) => e(s, n, ...h), c = (h = xo()) => {
    s = a(pc([0]), h), n = a(), h.length !== 0 && (s = a(pc([1]), h), n = a());
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
    return Ms(...g);
  };
  return (h, g) => {
    o(), c(h);
    let A;
    for (; !(A = g(u())); )
      c();
    return o(), A;
  };
}
const Uh = {
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
function li(r, t, e = {}) {
  const n = (s, i, o) => {
    const a = Uh[i];
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
const Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: kh,
  bitLen: Rh,
  bitMask: Ta,
  bitSet: Sh,
  bytesToHex: ps,
  bytesToNumberBE: rr,
  bytesToNumberLE: Pa,
  concatBytes: Ms,
  createHmacDrbg: Qu,
  ensureBytes: fe,
  equalBytes: Oh,
  hexToBytes: gs,
  hexToNumber: xa,
  numberToBytesBE: ys,
  numberToBytesLE: Na,
  numberToHexUnpadded: Gu,
  numberToVarBytesBE: Ih,
  utf8ToBytes: Bh,
  validateObject: li
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const yt = BigInt(0), ft = BigInt(1), Sn = BigInt(2), Dh = BigInt(3), Ho = BigInt(4), gc = BigInt(5), yc = BigInt(8);
BigInt(9);
BigInt(16);
function Lt(r, t) {
  const e = r % t;
  return e >= yt ? e : t + e;
}
function Lh(r, t, e) {
  if (e <= yt || t < yt)
    throw new Error("Expected power/modulo > 0");
  if (e === ft)
    return yt;
  let n = ft;
  for (; t > yt; )
    t & ft && (n = n * r % e), r = r * r % e, t >>= ft;
  return n;
}
function Zt(r, t, e) {
  let n = r;
  for (; t-- > yt; )
    n *= n, n %= e;
  return n;
}
function Vo(r, t) {
  if (r === yt || t <= yt)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = Lt(r, t), n = t, s = yt, i = ft;
  for (; e !== yt; ) {
    const a = n / e, c = n % e, u = s - i * a;
    n = e, e = c, s = i, i = u;
  }
  if (n !== ft)
    throw new Error("invert: does not exist");
  return Lt(s, t);
}
function Mh(r) {
  const t = (r - ft) / Sn;
  let e, n, s;
  for (e = r - ft, n = 0; e % Sn === yt; e /= Sn, n++)
    ;
  for (s = Sn; s < r && Lh(s, t, r) !== r - ft; s++)
    ;
  if (n === 1) {
    const o = (r + ft) / Ho;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const i = (e + ft) / Sn;
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
      const E = a.pow(f, ft << BigInt(u - A - 1));
      f = a.sqr(E), h = a.mul(h, E), g = a.mul(g, f), u = A;
    }
    return h;
  };
}
function Gh(r) {
  if (r % Ho === Dh) {
    const t = (r + ft) / Ho;
    return function(n, s) {
      const i = n.pow(s, t);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % yc === gc) {
    const t = (r - gc) / yc;
    return function(n, s) {
      const i = n.mul(s, Sn), o = n.pow(i, t), a = n.mul(s, o), c = n.mul(n.mul(a, Sn), o), u = n.mul(a, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return Mh(r);
}
const Qh = [
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
function Hh(r) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = Qh.reduce((n, s) => (n[s] = "function", n), t);
  return li(r, e);
}
function Vh(r, t, e) {
  if (e < yt)
    throw new Error("Expected power > 0");
  if (e === yt)
    return r.ONE;
  if (e === ft)
    return t;
  let n = r.ONE, s = t;
  for (; e > yt; )
    e & ft && (n = r.mul(n, s)), s = r.sqr(s), e >>= ft;
  return n;
}
function _h(r, t) {
  const e = new Array(t.length), n = t.reduce((i, o, a) => r.is0(o) ? i : (e[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
  return t.reduceRight((i, o, a) => r.is0(o) ? i : (e[a] = r.mul(i, e[a]), r.mul(i, o)), s), e;
}
function Hu(r, t) {
  const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: n };
}
function Jh(r, t, e = !1, n = {}) {
  if (r <= yt)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = Hu(r, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Gh(r), a = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: Ta(s),
    ZERO: yt,
    ONE: ft,
    create: (c) => Lt(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return yt <= c && c < r;
    },
    is0: (c) => c === yt,
    isOdd: (c) => (c & ft) === ft,
    neg: (c) => Lt(-c, r),
    eql: (c, u) => c === u,
    sqr: (c) => Lt(c * c, r),
    add: (c, u) => Lt(c + u, r),
    sub: (c, u) => Lt(c - u, r),
    mul: (c, u) => Lt(c * u, r),
    pow: (c, u) => Vh(a, c, u),
    div: (c, u) => Lt(c * Vo(u, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Vo(c, r),
    sqrt: n.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => _h(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => e ? Na(c, i) : ys(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return e ? Pa(c) : rr(c);
    }
  });
  return Object.freeze(a);
}
function Vu(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const t = r.toString(2).length;
  return Math.ceil(t / 8);
}
function _u(r) {
  const t = Vu(r);
  return t + Math.ceil(t / 2);
}
function zh(r, t, e = !1) {
  const n = r.length, s = Vu(t), i = _u(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const o = e ? rr(r) : Pa(r), a = Lt(o, t - ft) + ft;
  return e ? Na(a, s) : ys(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const jh = BigInt(0), Po = BigInt(1);
function Kh(r, t) {
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
      for (; i > jh; )
        i & Po && (o = o.add(a)), a = a.double(), i >>= Po;
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
        let x = Number(o & h);
        o >>= A, x > c && (x -= g, o += Po);
        const v = m, T = m + Math.abs(x) - 1, S = E % 2 !== 0, V = x < 0;
        x === 0 ? f = f.add(e(S, i[v])) : u = u.add(e(V, i[T]));
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
  return Hh(r.Fp), li(r, {
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
function Wh(r) {
  const t = Ju(r);
  li(t, {
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
const { bytesToNumberBE: Yh, hexToBytes: Zh } = Fh, Fn = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(r) {
    const { Err: t } = Fn;
    if (r.length < 2 || r[0] !== 2)
      throw new t("Invalid signature integer tag");
    const e = r[1], n = r.subarray(2, e + 2);
    if (!e || n.length !== e)
      throw new t("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: Yh(n), l: r.subarray(e + 2) };
  },
  toSig(r) {
    const { Err: t } = Fn, e = typeof r == "string" ? Zh(r) : r;
    if (!(e instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = e.length;
    if (n < 2 || e[0] != 48)
      throw new t("Invalid signature tag");
    if (e[1] !== n - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: s, l: i } = Fn._parseInt(e.subarray(2)), { d: o, l: a } = Fn._parseInt(i);
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
}, Ze = BigInt(0), se = BigInt(1);
BigInt(2);
const mc = BigInt(3);
BigInt(4);
function Xh(r) {
  const t = Wh(r), { Fp: e } = t, n = t.toBytes || ((E, m, x) => {
    const v = m.toAffine();
    return Ms(Uint8Array.from([4]), e.toBytes(v.x), e.toBytes(v.y));
  }), s = t.fromBytes || ((E) => {
    const m = E.subarray(1), x = e.fromBytes(m.subarray(0, e.BYTES)), v = e.fromBytes(m.subarray(e.BYTES, 2 * e.BYTES));
    return { x, y: v };
  });
  function i(E) {
    const { a: m, b: x } = t, v = e.sqr(E), T = e.mul(v, E);
    return e.add(e.add(T, e.mul(E, m)), x);
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
    const { allowedPrivateKeyLengths: m, nByteLength: x, wrapPrivateKey: v, n: T } = t;
    if (m && typeof E != "bigint") {
      if (E instanceof Uint8Array && (E = ps(E)), typeof E != "string" || !m.includes(E.length))
        throw new Error("Invalid key");
      E = E.padStart(x * 2, "0");
    }
    let S;
    try {
      S = typeof E == "bigint" ? E : rr(fe("private key", E, x));
    } catch {
      throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof E}`);
    }
    return v && (S = Lt(S, T)), a(S), S;
  }
  const u = /* @__PURE__ */ new Map();
  function f(E) {
    if (!(E instanceof h))
      throw new Error("ProjectivePoint expected");
  }
  class h {
    constructor(m, x, v) {
      if (this.px = m, this.py = x, this.pz = v, m == null || !e.isValid(m))
        throw new Error("x required");
      if (x == null || !e.isValid(x))
        throw new Error("y required");
      if (v == null || !e.isValid(v))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(m) {
      const { x, y: v } = m || {};
      if (!m || !e.isValid(x) || !e.isValid(v))
        throw new Error("invalid affine point");
      if (m instanceof h)
        throw new Error("projective point not allowed");
      const T = (S) => e.eql(S, e.ZERO);
      return T(x) && T(v) ? h.ZERO : new h(x, v, e.ONE);
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
      const x = e.invertBatch(m.map((v) => v.pz));
      return m.map((v, T) => v.toAffine(x[T])).map(h.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(m) {
      const x = h.fromAffine(s(fe("pointHex", m)));
      return x.assertValidity(), x;
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
      const { x: m, y: x } = this.toAffine();
      if (!e.isValid(m) || !e.isValid(x))
        throw new Error("bad point: x or y not FE");
      const v = e.sqr(x), T = i(m);
      if (!e.eql(v, T))
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
      const { px: x, py: v, pz: T } = this, { px: S, py: V, pz: L } = m, k = e.eql(e.mul(x, L), e.mul(S, T)), M = e.eql(e.mul(v, L), e.mul(V, T));
      return k && M;
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
      const { a: m, b: x } = t, v = e.mul(x, mc), { px: T, py: S, pz: V } = this;
      let L = e.ZERO, k = e.ZERO, M = e.ZERO, G = e.mul(T, T), et = e.mul(S, S), Z = e.mul(V, V), K = e.mul(T, S);
      return K = e.add(K, K), M = e.mul(T, V), M = e.add(M, M), L = e.mul(m, M), k = e.mul(v, Z), k = e.add(L, k), L = e.sub(et, k), k = e.add(et, k), k = e.mul(L, k), L = e.mul(K, L), M = e.mul(v, M), Z = e.mul(m, Z), K = e.sub(G, Z), K = e.mul(m, K), K = e.add(K, M), M = e.add(G, G), G = e.add(M, G), G = e.add(G, Z), G = e.mul(G, K), k = e.add(k, G), Z = e.mul(S, V), Z = e.add(Z, Z), G = e.mul(Z, K), L = e.sub(L, G), M = e.mul(Z, et), M = e.add(M, M), M = e.add(M, M), new h(L, k, M);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(m) {
      f(m);
      const { px: x, py: v, pz: T } = this, { px: S, py: V, pz: L } = m;
      let k = e.ZERO, M = e.ZERO, G = e.ZERO;
      const et = t.a, Z = e.mul(t.b, mc);
      let K = e.mul(x, S), bt = e.mul(v, V), nt = e.mul(T, L), Et = e.add(x, v), C = e.add(S, V);
      Et = e.mul(Et, C), C = e.add(K, bt), Et = e.sub(Et, C), C = e.add(x, T);
      let R = e.add(S, L);
      return C = e.mul(C, R), R = e.add(K, nt), C = e.sub(C, R), R = e.add(v, T), k = e.add(V, L), R = e.mul(R, k), k = e.add(bt, nt), R = e.sub(R, k), G = e.mul(et, C), k = e.mul(Z, nt), G = e.add(k, G), k = e.sub(bt, G), G = e.add(bt, G), M = e.mul(k, G), bt = e.add(K, K), bt = e.add(bt, K), nt = e.mul(et, nt), C = e.mul(Z, C), bt = e.add(bt, nt), nt = e.sub(K, nt), nt = e.mul(et, nt), C = e.add(C, nt), K = e.mul(bt, C), M = e.add(M, K), K = e.mul(R, C), k = e.mul(Et, k), k = e.sub(k, K), K = e.mul(Et, bt), G = e.mul(R, G), G = e.add(G, K), new h(k, M, G);
    }
    subtract(m) {
      return this.add(m.negate());
    }
    is0() {
      return this.equals(h.ZERO);
    }
    wNAF(m) {
      return A.wNAFCached(this, u, m, (x) => {
        const v = e.invertBatch(x.map((T) => T.pz));
        return x.map((T, S) => T.toAffine(v[S])).map(h.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(m) {
      const x = h.ZERO;
      if (m === Ze)
        return x;
      if (a(m), m === se)
        return this;
      const { endo: v } = t;
      if (!v)
        return A.unsafeLadder(this, m);
      let { k1neg: T, k1: S, k2neg: V, k2: L } = v.splitScalar(m), k = x, M = x, G = this;
      for (; S > Ze || L > Ze; )
        S & se && (k = k.add(G)), L & se && (M = M.add(G)), G = G.double(), S >>= se, L >>= se;
      return T && (k = k.negate()), V && (M = M.negate()), M = new h(e.mul(M.px, v.beta), M.py, M.pz), k.add(M);
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
      let x = m, v, T;
      const { endo: S } = t;
      if (S) {
        const { k1neg: V, k1: L, k2neg: k, k2: M } = S.splitScalar(x);
        let { p: G, f: et } = this.wNAF(L), { p: Z, f: K } = this.wNAF(M);
        G = A.constTimeNegate(V, G), Z = A.constTimeNegate(k, Z), Z = new h(e.mul(Z.px, S.beta), Z.py, Z.pz), v = G.add(Z), T = et.add(K);
      } else {
        const { p: V, f: L } = this.wNAF(x);
        v = V, T = L;
      }
      return h.normalizeZ([v, T])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(m, x, v) {
      const T = h.BASE, S = (L, k) => k === Ze || k === se || !L.equals(T) ? L.multiplyUnsafe(k) : L.multiply(k), V = S(this, x).add(S(m, v));
      return V.is0() ? void 0 : V;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(m) {
      const { px: x, py: v, pz: T } = this, S = this.is0();
      m == null && (m = S ? e.ONE : e.inv(T));
      const V = e.mul(x, m), L = e.mul(v, m), k = e.mul(T, m);
      if (S)
        return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(k, e.ONE))
        throw new Error("invZ was invalid");
      return { x: V, y: L };
    }
    isTorsionFree() {
      const { h: m, isTorsionFree: x } = t;
      if (m === se)
        return !0;
      if (x)
        return x(h, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: m, clearCofactor: x } = t;
      return m === se ? this : x ? x(h, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(m = !0) {
      return this.assertValidity(), n(h, this, m);
    }
    toHex(m = !0) {
      return ps(this.toRawBytes(m));
    }
  }
  h.BASE = new h(t.Gx, t.Gy, e.ONE), h.ZERO = new h(e.ZERO, e.ONE, e.ZERO);
  const g = t.nBitLength, A = Kh(h, t.endo ? Math.ceil(g / 2) : g);
  return {
    CURVE: t,
    ProjectivePoint: h,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function qh(r) {
  const t = Ju(r);
  return li(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function $h(r) {
  const t = qh(r), { Fp: e, n } = t, s = e.BYTES + 1, i = 2 * e.BYTES + 1;
  function o(C) {
    return Ze < C && C < e.ORDER;
  }
  function a(C) {
    return Lt(C, n);
  }
  function c(C) {
    return Vo(C, n);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: f, weierstrassEquation: h, isWithinCurveOrder: g } = Xh({
    ...t,
    toBytes(C, R, H) {
      const $ = R.toAffine(), X = e.toBytes($.x), ut = Ms;
      return H ? ut(Uint8Array.from([R.hasEvenY() ? 2 : 3]), X) : ut(Uint8Array.from([4]), X, e.toBytes($.y));
    },
    fromBytes(C) {
      const R = C.length, H = C[0], $ = C.subarray(1);
      if (R === s && (H === 2 || H === 3)) {
        const X = rr($);
        if (!o(X))
          throw new Error("Point is not on curve");
        const ut = h(X);
        let vt = e.sqrt(ut);
        const xt = (vt & se) === se;
        return (H & 1) === 1 !== xt && (vt = e.neg(vt)), { x: X, y: vt };
      } else if (R === i && H === 4) {
        const X = e.fromBytes($.subarray(0, e.BYTES)), ut = e.fromBytes($.subarray(e.BYTES, 2 * e.BYTES));
        return { x: X, y: ut };
      } else
        throw new Error(`Point of length ${R} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), A = (C) => ps(ys(C, t.nByteLength));
  function E(C) {
    const R = n >> se;
    return C > R;
  }
  function m(C) {
    return E(C) ? a(-C) : C;
  }
  const x = (C, R, H) => rr(C.slice(R, H));
  class v {
    constructor(R, H, $) {
      this.r = R, this.s = H, this.recovery = $, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(R) {
      const H = t.nByteLength;
      return R = fe("compactSignature", R, H * 2), new v(x(R, 0, H), x(R, H, 2 * H));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(R) {
      const { r: H, s: $ } = Fn.toSig(fe("DER", R));
      return new v(H, $);
    }
    assertValidity() {
      if (!g(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!g(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(R) {
      return new v(this.r, this.s, R);
    }
    recoverPublicKey(R) {
      const { r: H, s: $, recovery: X } = this, ut = M(fe("msgHash", R));
      if (X == null || ![0, 1, 2, 3].includes(X))
        throw new Error("recovery id invalid");
      const vt = X === 2 || X === 3 ? H + t.n : H;
      if (vt >= e.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const xt = X & 1 ? "03" : "02", ae = u.fromHex(xt + A(vt)), be = c(vt), rn = a(-ut * be), Re = a($ * be), Wt = u.BASE.multiplyAndAddUnsafe(ae, rn, Re);
      if (!Wt)
        throw new Error("point at infinify");
      return Wt.assertValidity(), Wt;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return E(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new v(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return gs(this.toDERHex());
    }
    toDERHex() {
      return Fn.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return gs(this.toCompactHex());
    }
    toCompactHex() {
      return A(this.r) + A(this.s);
    }
  }
  const T = {
    isValidPrivateKey(C) {
      try {
        return f(C), !0;
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
      const C = _u(t.n);
      return zh(t.randomBytes(C), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(C = 8, R = u.BASE) {
      return R._setWindowSize(C), R.multiply(BigInt(3)), R;
    }
  };
  function S(C, R = !0) {
    return u.fromPrivateKey(C).toRawBytes(R);
  }
  function V(C) {
    const R = C instanceof Uint8Array, H = typeof C == "string", $ = (R || H) && C.length;
    return R ? $ === s || $ === i : H ? $ === 2 * s || $ === 2 * i : C instanceof u;
  }
  function L(C, R, H = !0) {
    if (V(C))
      throw new Error("first arg must be private key");
    if (!V(R))
      throw new Error("second arg must be public key");
    return u.fromHex(R).multiply(f(C)).toRawBytes(H);
  }
  const k = t.bits2int || function(C) {
    const R = rr(C), H = C.length * 8 - t.nBitLength;
    return H > 0 ? R >> BigInt(H) : R;
  }, M = t.bits2int_modN || function(C) {
    return a(k(C));
  }, G = Ta(t.nBitLength);
  function et(C) {
    if (typeof C != "bigint")
      throw new Error("bigint expected");
    if (!(Ze <= C && C < G))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return ys(C, t.nByteLength);
  }
  function Z(C, R, H = K) {
    if (["recovered", "canonical"].some((ce) => ce in H))
      throw new Error("sign() legacy options not supported");
    const { hash: $, randomBytes: X } = t;
    let { lowS: ut, prehash: vt, extraEntropy: xt } = H;
    ut == null && (ut = !0), C = fe("msgHash", C), vt && (C = fe("prehashed msgHash", $(C)));
    const ae = M(C), be = f(R), rn = [et(be), et(ae)];
    if (xt != null) {
      const ce = xt === !0 ? X(e.BYTES) : xt;
      rn.push(fe("extraEntropy", ce));
    }
    const Re = Ms(...rn), Wt = ae;
    function sn(ce) {
      const ue = k(ce);
      if (!g(ue))
        return;
      const pi = c(ue), ke = u.BASE.multiply(ue).toAffine(), Vt = a(ke.x);
      if (Vt === Ze)
        return;
      const on = a(pi * a(Wt + Vt * be));
      if (on === Ze)
        return;
      let Rn = (ke.x === Vt ? 0 : 2) | Number(ke.y & se), kn = on;
      return ut && E(on) && (kn = m(on), Rn ^= 1), new v(Vt, kn, Rn);
    }
    return { seed: Re, k2sig: sn };
  }
  const K = { lowS: t.lowS, prehash: !1 }, bt = { lowS: t.lowS, prehash: !1 };
  function nt(C, R, H = K) {
    const { seed: $, k2sig: X } = Z(C, R, H), ut = t;
    return Qu(ut.hash.outputLen, ut.nByteLength, ut.hmac)($, X);
  }
  u.BASE._setWindowSize(8);
  function Et(C, R, H, $ = bt) {
    var ke;
    const X = C;
    if (R = fe("msgHash", R), H = fe("publicKey", H), "strict" in $)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: ut, prehash: vt } = $;
    let xt, ae;
    try {
      if (typeof X == "string" || X instanceof Uint8Array)
        try {
          xt = v.fromDER(X);
        } catch (Vt) {
          if (!(Vt instanceof Fn.Err))
            throw Vt;
          xt = v.fromCompact(X);
        }
      else if (typeof X == "object" && typeof X.r == "bigint" && typeof X.s == "bigint") {
        const { r: Vt, s: on } = X;
        xt = new v(Vt, on);
      } else
        throw new Error("PARSE");
      ae = u.fromHex(H);
    } catch (Vt) {
      if (Vt.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (ut && xt.hasHighS())
      return !1;
    vt && (R = t.hash(R));
    const { r: be, s: rn } = xt, Re = M(R), Wt = c(rn), sn = a(Re * Wt), ce = a(be * Wt), ue = (ke = u.BASE.multiplyAndAddUnsafe(ae, sn, ce)) == null ? void 0 : ke.toAffine();
    return ue ? a(ue.x) === be : !1;
  }
  return {
    CURVE: t,
    getPublicKey: S,
    getSharedSecret: L,
    sign: nt,
    verify: Et,
    ProjectivePoint: u,
    Signature: v,
    utils: T
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function td(r) {
  return {
    hash: r,
    hmac: (t, ...e) => Ru(r, t, eh(...e)),
    randomBytes: nh
  };
}
function ed(r, t) {
  const e = (n) => $h({ ...r, ...td(n) });
  return Object.freeze({ ...e(t), create: e });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const zu = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), wc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), nd = BigInt(1), _o = BigInt(2), Ac = (r, t) => (r + t / _o) / t;
function rd(r) {
  const t = zu, e = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = r * r * r % t, f = u * u * r % t, h = Zt(f, e, t) * f % t, g = Zt(h, e, t) * f % t, A = Zt(g, _o, t) * u % t, E = Zt(A, s, t) * A % t, m = Zt(E, i, t) * E % t, x = Zt(m, a, t) * m % t, v = Zt(x, c, t) * x % t, T = Zt(v, a, t) * m % t, S = Zt(T, e, t) * f % t, V = Zt(S, o, t) * E % t, L = Zt(V, n, t) * u % t, k = Zt(L, _o, t);
  if (!Jo.eql(Jo.sqr(k), r))
    throw new Error("Cannot find square root");
  return k;
}
const Jo = Jh(zu, void 0, void 0, { sqrt: rd }), un = ed({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Jo,
  n: wc,
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
      const t = wc, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -nd * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, o = BigInt("0x100000000000000000000000000000000"), a = Ac(i * r, t), c = Ac(-n * r, t);
      let u = Lt(r - a * e - c * s, t), f = Lt(-a * n - c * i, t);
      const h = u > o, g = f > o;
      if (h && (u = t - u), g && (f = t - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: h, k1: u, k2neg: g, k2: f };
    }
  }
}, uh);
BigInt(0);
un.ProjectivePoint;
const zo = "0x0000000000000000000000000000000000000000", bc = "0x0000000000000000000000000000000000000000000000000000000000000000", Ec = BigInt(0), vc = BigInt(1), xc = BigInt(2), Pc = BigInt(27), Nc = BigInt(28), bi = BigInt(35), dr = {};
function Tc(r) {
  return ir(Kt(r), 32);
}
var Fr, Dr, Lr, zn;
const le = class le {
  /**
   *  @private
   */
  constructor(t, e, n, s) {
    b(this, Fr, void 0);
    b(this, Dr, void 0);
    b(this, Lr, void 0);
    b(this, zn, void 0);
    $i(t, dr, "Signature"), p(this, Fr, e), p(this, Dr, n), p(this, Lr, s), p(this, zn, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return l(this, Fr);
  }
  set r(t) {
    y(Tr(t) === 32, "invalid r", "value", t), p(this, Fr, U(t));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return l(this, Dr);
  }
  set s(t) {
    y(Tr(t) === 32, "invalid s", "value", t);
    const e = U(t);
    y(parseInt(e.substring(0, 3)) < 8, "non-canonical s", "value", e), p(this, Dr, e);
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
    const e = _(t, "value");
    y(e === 27 || e === 28, "invalid v", "v", t), p(this, Lr, e);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return l(this, zn);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const t = this.networkV;
    return t == null ? null : le.getChainId(t);
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
    const t = q(this.s);
    return this.yParity && (t[0] |= 128), U(t);
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
    const t = new le(dr, this.r, this.s, this.v);
    return this.networkV && p(t, zn, this.networkV), t;
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
    return e == Pc || e == Nc ? Ec : (y(e >= bi, "invalid EIP-155 v", "v", t), (e - bi) / xc);
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
    return F(t) * xc + BigInt(35 + e - 27);
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
    return e === Ec || e === Pc ? 27 : e === vc || e === Nc ? 28 : (y(e >= bi, "invalid v", "v", t), e & vc ? 27 : 28);
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
      return new le(dr, bc, bc, 27);
    if (typeof t == "string") {
      const u = q(t, "signature");
      if (u.length === 64) {
        const f = U(u.slice(0, 32)), h = u.slice(32, 64), g = h[0] & 128 ? 28 : 27;
        return h[0] &= 127, new le(dr, f, U(h), g);
      }
      if (u.length === 65) {
        const f = U(u.slice(0, 32)), h = u.slice(32, 64);
        e((h[0] & 128) === 0, "non-canonical s");
        const g = le.getNormalizedV(u[64]);
        return new le(dr, f, U(h), g);
      }
      e(!1, "invalid raw signature length");
    }
    if (t instanceof le)
      return t.clone();
    const n = t.r;
    e(n != null, "missing r");
    const s = Tc(n), i = function(u, f) {
      if (u != null)
        return Tc(u);
      if (f != null) {
        e(at(f, 32), "invalid yParityAndS");
        const h = q(f);
        return h[0] &= 127, U(h);
      }
      e(!1, "missing s");
    }(t.s, t.yParityAndS);
    e((q(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: o, v: a } = function(u, f, h) {
      if (u != null) {
        const g = F(u);
        return {
          networkV: g >= bi ? g : void 0,
          v: le.getNormalizedV(g)
        };
      }
      if (f != null)
        return e(at(f, 32), "invalid yParityAndS"), { v: q(f)[0] & 128 ? 28 : 27 };
      if (h != null) {
        switch (_(h, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        e(!1, "invalid yParity");
      }
      e(!1, "missing v");
    }(t.v, t.yParityAndS, t.yParity), c = new le(dr, s, i, a);
    return o && p(c, zn, o), e(t.yParity == null || _(t.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), e(t.yParityAndS == null || t.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
Fr = new WeakMap(), Dr = new WeakMap(), Lr = new WeakMap(), zn = new WeakMap();
let me = le;
var He;
const Un = class Un {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(t) {
    b(this, He, void 0);
    y(Tr(t) === 32, "invalid private key", "privateKey", "[REDACTED]"), p(this, He, U(t));
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
    return Un.computePublicKey(l(this, He));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return Un.computePublicKey(l(this, He), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(t) {
    y(Tr(t) === 32, "invalid digest length", "digest", t);
    const e = un.sign(Qt(t), Qt(l(this, He)), {
      lowS: !0
    });
    return me.from({
      r: In(e.r, 32),
      s: In(e.s, 32),
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
    const e = Un.computePublicKey(t);
    return U(un.getSharedSecret(Qt(l(this, He)), q(e), !1));
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
    let n = q(t, "key");
    if (n.length === 32) {
      const i = un.getPublicKey(n, !!e);
      return U(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = un.ProjectivePoint.fromHex(n);
    return U(s.toRawBytes(e));
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
    const n = me.from(e);
    let s = un.Signature.fromCompact(Qt(pt([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(Qt(t));
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
    const s = un.ProjectivePoint.fromHex(Un.computePublicKey(t).substring(2)), i = un.ProjectivePoint.fromHex(Un.computePublicKey(e).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
He = new WeakMap();
let Gs = Un;
const sd = BigInt(0), id = BigInt(36);
function Cc(r) {
  r = r.toLowerCase();
  const t = r.substring(2).split(""), e = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    e[s] = t[s].charCodeAt(0);
  const n = q(ot(e));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
  return "0x" + t.join("");
}
const Ca = {};
for (let r = 0; r < 10; r++)
  Ca[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  Ca[String.fromCharCode(65 + r)] = String(10 + r);
const Ic = 15;
function od(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let t = r.split("").map((n) => Ca[n]).join("");
  for (; t.length >= Ic; ) {
    let n = t.substring(0, Ic);
    t = parseInt(n, 10) % 97 + t.substring(n.length);
  }
  let e = String(98 - parseInt(t, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
const ad = function() {
  const r = {};
  for (let t = 0; t < 36; t++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    r[e] = BigInt(t);
  }
  return r;
}();
function cd(r) {
  r = r.toLowerCase();
  let t = sd;
  for (let e = 0; e < r.length; e++)
    t = t * id + ad[r[e]];
  return t;
}
function Y(r) {
  if (y(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const t = Cc(r);
    return y(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === r, "bad address checksum", "address", r), t;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    y(r.substring(2, 4) === od(r), "bad icap checksum", "address", r);
    let t = cd(r.substring(4)).toString(16);
    for (; t.length < 40; )
      t = "0" + t;
    return Cc("0x" + t);
  }
  y(!1, "invalid address", "address", r);
}
function ud(r) {
  const t = Y(r.from);
  let n = F(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, Y(ct(ot(Ls([t, n])), 12));
}
function ju(r) {
  return r && typeof r.getAddress == "function";
}
async function No(r, t) {
  const e = await t;
  return (e == null || e === "0x0000000000000000000000000000000000000000") && (P(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), y(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), Y(e);
}
function St(r, t) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? Y(r) : (P(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), No(r, t.resolveName(r)));
  if (ju(r))
    return No(r, r.getAddress());
  if (r && typeof r.then == "function")
    return No(r, r);
  y(!1, "unsupported addressable value", "target", r);
}
const Ue = {};
function B(r, t) {
  let e = !1;
  return t < 0 && (e = !0, t *= -1), new It(Ue, `${e ? "" : "u"}int${t}`, r, { signed: e, width: t });
}
function j(r, t) {
  return new It(Ue, `bytes${t || ""}`, r, { size: t });
}
const Oc = Symbol.for("_ethers_typed");
var jn;
const Fe = class Fe {
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
    s == null && (s = null), $i(Ue, t, "Typed"), D(this, { _typedSymbol: Oc, type: e, value: n }), p(this, jn, s), this.format();
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
    return new Fe(Ue, t, e);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(t) {
    return B(t, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(t) {
    return B(t, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(t) {
    return B(t, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(t) {
    return B(t, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(t) {
    return B(t, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(t) {
    return B(t, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(t) {
    return B(t, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(t) {
    return B(t, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(t) {
    return B(t, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(t) {
    return B(t, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(t) {
    return B(t, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(t) {
    return B(t, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(t) {
    return B(t, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(t) {
    return B(t, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(t) {
    return B(t, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(t) {
    return B(t, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(t) {
    return B(t, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(t) {
    return B(t, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(t) {
    return B(t, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(t) {
    return B(t, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(t) {
    return B(t, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(t) {
    return B(t, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(t) {
    return B(t, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(t) {
    return B(t, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(t) {
    return B(t, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(t) {
    return B(t, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(t) {
    return B(t, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(t) {
    return B(t, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(t) {
    return B(t, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(t) {
    return B(t, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(t) {
    return B(t, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(t) {
    return B(t, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(t) {
    return B(t, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(t) {
    return B(t, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(t) {
    return B(t, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(t) {
    return B(t, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(t) {
    return B(t, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(t) {
    return B(t, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(t) {
    return B(t, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(t) {
    return B(t, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(t) {
    return B(t, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(t) {
    return B(t, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(t) {
    return B(t, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(t) {
    return B(t, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(t) {
    return B(t, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(t) {
    return B(t, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(t) {
    return B(t, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(t) {
    return B(t, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(t) {
    return B(t, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(t) {
    return B(t, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(t) {
    return B(t, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(t) {
    return B(t, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(t) {
    return B(t, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(t) {
    return B(t, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(t) {
    return B(t, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(t) {
    return B(t, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(t) {
    return B(t, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(t) {
    return B(t, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(t) {
    return B(t, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(t) {
    return B(t, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(t) {
    return B(t, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(t) {
    return B(t, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(t) {
    return B(t, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(t) {
    return B(t, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(t) {
    return B(t, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(t) {
    return B(t, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(t) {
    return j(t, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(t) {
    return j(t, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(t) {
    return j(t, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(t) {
    return j(t, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(t) {
    return j(t, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(t) {
    return j(t, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(t) {
    return j(t, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(t) {
    return j(t, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(t) {
    return j(t, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(t) {
    return j(t, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(t) {
    return j(t, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(t) {
    return j(t, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(t) {
    return j(t, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(t) {
    return j(t, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(t) {
    return j(t, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(t) {
    return j(t, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(t) {
    return j(t, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(t) {
    return j(t, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(t) {
    return j(t, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(t) {
    return j(t, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(t) {
    return j(t, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(t) {
    return j(t, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(t) {
    return j(t, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(t) {
    return j(t, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(t) {
    return j(t, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(t) {
    return j(t, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(t) {
    return j(t, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(t) {
    return j(t, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(t) {
    return j(t, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(t) {
    return j(t, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(t) {
    return j(t, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(t) {
    return j(t, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(t) {
    return new Fe(Ue, "address", t);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(t) {
    return new Fe(Ue, "bool", !!t);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(t) {
    return new Fe(Ue, "bytes", t);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(t) {
    return new Fe(Ue, "string", t);
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
    return new Fe(Ue, "overrides", Object.assign({}, t));
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
    if (Fe.isTyped(t)) {
      if (t.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
      return t.value;
    }
    return t;
  }
};
jn = new WeakMap();
let It = Fe;
class ld extends nn {
  constructor(t) {
    super("address", "address", t, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(t, e) {
    let n = It.dereference(e, "string");
    try {
      n = Y(n);
    } catch (s) {
      return this._throwError(s.message, e);
    }
    return t.writeValue(n);
  }
  decode(t) {
    return Y(In(t.readValue(), 20));
  }
}
class fd extends nn {
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
  let s = new Go(), i = new Go(), o = [];
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
        if (ie(u, "BUFFER_OVERRUN"))
          throw u;
        o = u, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    } else
      try {
        o = i.decode(r);
      } catch (a) {
        if (ie(a, "BUFFER_OVERRUN"))
          throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    if (o == null)
      throw new Error("investigate");
    e.push(o), n.push(i.localName || null);
  }), Ui.fromItems(e, n);
}
class hd extends nn {
  constructor(e, n, s) {
    const i = e.type + "[" + (n >= 0 ? n : "") + "]", o = n === -1 || e.dynamic;
    super("array", i, s, o);
    w(this, "coder");
    w(this, "length");
    D(this, { coder: e, length: n });
  }
  defaultValue() {
    const e = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(e);
    return n;
  }
  encode(e, n) {
    const s = It.dereference(n, "array");
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
      s.push(new fd(this.coder));
    return Wu(e, s);
  }
}
class dd extends nn {
  constructor(t) {
    super("bool", "bool", t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    const n = It.dereference(e, "bool");
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
    e = Qt(e);
    let n = t.writeValue(e.length);
    return n += t.writeBytes(e), n;
  }
  decode(t) {
    return t.readBytes(t.readIndex(), !0);
  }
}
class pd extends Yu {
  constructor(t) {
    super("bytes", t);
  }
  decode(t) {
    return U(super.decode(t));
  }
}
class gd extends nn {
  constructor(e, n) {
    let s = "bytes" + String(e);
    super(s, s, n, !1);
    w(this, "size");
    D(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, n) {
    let s = Qt(It.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), e.writeBytes(s);
  }
  decode(e) {
    return U(e.readBytes(this.size));
  }
}
const yd = new Uint8Array([]);
class md extends nn {
  constructor(t) {
    super("null", "", t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError("not null", e), t.writeBytes(yd);
  }
  decode(t) {
    return t.readBytes(0), null;
  }
}
const wd = BigInt(0), Ad = BigInt(1), bd = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Ed extends nn {
  constructor(e, n, s) {
    const i = (n ? "int" : "uint") + e * 8;
    super(i, i, s, !1);
    w(this, "size");
    w(this, "signed");
    D(this, { size: e, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, n) {
    let s = F(It.dereference(n, this.type)), i = Cs(bd, kt * 8);
    if (this.signed) {
      let o = Cs(i, this.size * 8 - 1);
      (s > o || s < -(o + Ad)) && this._throwError("value out-of-bounds", n), s = mu(s, 8 * kt);
    } else
      (s < wd || s > Cs(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return e.writeValue(s);
  }
  decode(e) {
    let n = Cs(e.readValue(), this.size * 8);
    return this.signed && (n = Rf(n, this.size * 8)), n;
  }
}
class vd extends Yu {
  constructor(t) {
    super("string", t);
  }
  defaultValue() {
    return "";
  }
  encode(t, e) {
    return super.encode(t, $e(It.dereference(e, "string")));
  }
  decode(t) {
    return wa(super.decode(t));
  }
}
class Ei extends nn {
  constructor(e, n) {
    let s = !1;
    const i = [];
    e.forEach((a) => {
      a.dynamic && (s = !0), i.push(a.type);
    });
    const o = "tuple(" + i.join(",") + ")";
    super("tuple", o, n, s);
    w(this, "coders");
    D(this, { coders: Object.freeze(e.slice()) });
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
    const s = It.dereference(n, "tuple");
    return Ku(e, this.coders, s);
  }
  decode(e) {
    return Wu(e, this.coders);
  }
}
function or(r) {
  return ot($e(r));
}
var xd = "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";
const Bc = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), Rc = 4;
function Pd(r) {
  let t = 0;
  function e() {
    return r[t++] << 8 | r[t++];
  }
  let n = e(), s = 1, i = [0, 1];
  for (let L = 1; L < n; L++)
    i.push(s += e());
  let o = e(), a = t;
  t += o;
  let c = 0, u = 0;
  function f() {
    return c == 0 && (u = u << 8 | r[t++], c = 8), u >> --c & 1;
  }
  const h = 31, g = 2 ** h, A = g >>> 1, E = A >> 1, m = g - 1;
  let x = 0;
  for (let L = 0; L < h; L++)
    x = x << 1 | f();
  let v = [], T = 0, S = g;
  for (; ; ) {
    let L = Math.floor(((x - T + 1) * s - 1) / S), k = 0, M = n;
    for (; M - k > 1; ) {
      let Z = k + M >>> 1;
      L < i[Z] ? M = Z : k = Z;
    }
    if (k == 0)
      break;
    v.push(k);
    let G = T + Math.floor(S * i[k] / s), et = T + Math.floor(S * i[k + 1] / s) - 1;
    for (; !((G ^ et) & A); )
      x = x << 1 & m | f(), G = G << 1 & m, et = et << 1 & m | 1;
    for (; G & ~et & E; )
      x = x & A | x << 1 & m >>> 1 | f(), G = G << 1 ^ A, et = (et ^ A) << 1 | A | 1;
    T = G, S = 1 + et - G;
  }
  let V = n - 4;
  return v.map((L) => {
    switch (L - V) {
      case 3:
        return V + 65792 + (r[a++] << 16 | r[a++] << 8 | r[a++]);
      case 2:
        return V + 256 + (r[a++] << 8 | r[a++]);
      case 1:
        return V + r[a++];
      default:
        return L - 1;
    }
  });
}
function Nd(r) {
  let t = 0;
  return () => r[t++];
}
function Zu(r) {
  return Nd(Pd(Td(r)));
}
function Td(r) {
  let t = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => t[s.charCodeAt(0)] = i);
  let e = r.length, n = new Uint8Array(6 * e >> 3);
  for (let s = 0, i = 0, o = 0, a = 0; s < e; s++)
    a = a << 6 | t[r.charCodeAt(s)], o += 6, o >= 8 && (n[i++] = a >> (o -= 8));
  return n;
}
function Cd(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function Id(r, t) {
  let e = Array(r);
  for (let n = 0, s = 0; n < r; n++)
    e[n] = s += Cd(t());
  return e;
}
function Qs(r, t = 0) {
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
  return Hs(() => {
    let t = Qs(r);
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
    t.push(Od(e, r));
  }
  for (; ; ) {
    let e = r() - 1;
    if (e < 0)
      break;
    t.push(Bd(e, r));
  }
  return t.flat();
}
function Hs(r) {
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
    Id(r, e).forEach((i, o) => n[o].push(i));
  return n;
}
function Od(r, t) {
  let e = 1 + t(), n = t(), s = Hs(t);
  return $u(s.length, 1 + r, t).flatMap((o, a) => {
    let [c, ...u] = o;
    return Array(s[a]).fill().map((f, h) => {
      let g = h * n;
      return [c + h * e, u.map((A) => A + g)];
    });
  });
}
function Bd(r, t) {
  let e = 1 + t();
  return $u(e, 1 + r, t).map((s) => [s[0], s.slice(1)]);
}
function Rd(r) {
  let t = [], e = Qs(r);
  return s(n([]), []), t;
  function n(i) {
    let o = r(), a = Hs(() => {
      let c = Qs(r).map((u) => e[u]);
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
function kd(r) {
  return r.toString(16).toUpperCase().padStart(2, "0");
}
function tl(r) {
  return `{${kd(r)}}`;
}
function Sd(r) {
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
function Ud(r, t) {
  let e = r.length, n = e - t.length;
  for (let s = 0; n == 0 && s < e; s++)
    n = r[s] - t[s];
  return n;
}
var Fd = "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";
const Vs = 44032, Di = 4352, Li = 4449, Mi = 4519, el = 19, nl = 21, ws = 28, Gi = nl * ws, Dd = el * Gi, Ld = Vs + Dd, Md = Di + el, Gd = Li + nl, Qd = Mi + ws;
function Os(r) {
  return r >> 24 & 255;
}
function rl(r) {
  return r & 16777215;
}
let jo, kc, Ko, Ti;
function Hd() {
  let r = Zu(Fd);
  jo = new Map(Xu(r).flatMap((t, e) => t.map((n) => [n, e + 1 << 24]))), kc = new Set(Qs(r)), Ko = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
  for (let [t, e] of qu(r)) {
    if (!kc.has(t) && e.length == 2) {
      let [n, s] = e, i = Ti.get(n);
      i || (i = /* @__PURE__ */ new Map(), Ti.set(n, i)), i.set(s, t);
    }
    Ko.set(t, e.reverse());
  }
}
function sl(r) {
  return r >= Vs && r < Ld;
}
function Vd(r, t) {
  if (r >= Di && r < Md && t >= Li && t < Gd)
    return Vs + (r - Di) * Gi + (t - Li) * ws;
  if (sl(r) && t > Mi && t < Qd && (r - Vs) % ws == 0)
    return r + (t - Mi);
  {
    let e = Ti.get(r);
    return e && (e = e.get(t), e) ? e : -1;
  }
}
function il(r) {
  jo || Hd();
  let t = [], e = [], n = !1;
  function s(i) {
    let o = jo.get(i);
    o && (n = !0, i |= o), t.push(i);
  }
  for (let i of r)
    for (; ; ) {
      if (i < 128)
        t.push(i);
      else if (sl(i)) {
        let o = i - Vs, a = o / Gi | 0, c = o % Gi / ws | 0, u = o % ws;
        s(Di + a), s(Li + c), u > 0 && s(Mi + u);
      } else {
        let o = Ko.get(i);
        o ? e.push(...o) : s(i);
      }
      if (!e.length)
        break;
      i = e.pop();
    }
  if (n && t.length > 1) {
    let i = Os(t[0]);
    for (let o = 1; o < t.length; o++) {
      let a = Os(t[o]);
      if (a == 0 || i <= a) {
        i = a;
        continue;
      }
      let c = o - 1;
      for (; ; ) {
        let u = t[c + 1];
        if (t[c + 1] = t[c], t[c] = u, !c || (i = Os(t[--c]), i <= a))
          break;
      }
      i = Os(t[o]);
    }
  }
  return t;
}
function _d(r) {
  let t = [], e = [], n = -1, s = 0;
  for (let i of r) {
    let o = Os(i), a = rl(i);
    if (n == -1)
      o == 0 ? n = a : t.push(a);
    else if (s > 0 && s >= o)
      o == 0 ? (t.push(n, ...e), e.length = 0, n = a) : e.push(a), s = o;
    else {
      let c = Vd(n, a);
      c >= 0 ? n = c : s == 0 && o == 0 ? (t.push(n), n = a) : (e.push(a), s = o);
    }
  }
  return n >= 0 && t.push(n, ...e), t;
}
function ol(r) {
  return il(r).map(rl);
}
function Jd(r) {
  return _d(il(r));
}
const Sc = 45, al = ".", cl = 65039, ul = 1, vr = (r) => Array.from(r);
function _s(r, t) {
  return r.P.has(t) || r.Q.has(t);
}
class zd extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Wo, ll, Dn, Yo, fl, Cr, To, yr, hl, Uc, Zo;
function Ia() {
  if (Wo)
    return;
  let r = Zu(xd);
  const t = () => Qs(r), e = () => new Set(t());
  Wo = new Map(qu(r)), ll = e(), Dn = t(), Yo = new Set(t().map((f) => Dn[f])), Dn = new Set(Dn), fl = e(), e();
  let n = Xu(r), s = r();
  const i = () => new Set(t().flatMap((f) => n[f]).concat(t()));
  Cr = Hs((f) => {
    let h = Hs(r).map((g) => g + 96);
    if (h.length) {
      let g = f >= s;
      h[0] -= 32, h = ms(h), g && (h = `Restricted[${h}]`);
      let A = i(), E = i(), m = !r();
      return { N: h, P: A, Q: E, M: m, R: g };
    }
  }), To = e(), yr = /* @__PURE__ */ new Map();
  let o = t().concat(vr(To)).sort((f, h) => f - h);
  o.forEach((f, h) => {
    let g = r(), A = o[h] = g ? o[h - g] : { V: [], M: /* @__PURE__ */ new Map() };
    A.V.push(f), To.has(f) || yr.set(f, A);
  });
  for (let { V: f, M: h } of new Set(yr.values())) {
    let g = [];
    for (let E of f) {
      let m = Cr.filter((v) => _s(v, E)), x = g.find(({ G: v }) => m.some((T) => v.has(T)));
      x || (x = { G: /* @__PURE__ */ new Set(), V: [] }, g.push(x)), x.V.push(E), m.forEach((v) => x.G.add(v));
    }
    let A = g.flatMap((E) => vr(E.G));
    for (let { G: E, V: m } of g) {
      let x = new Set(A.filter((v) => !E.has(v)));
      for (let v of m)
        h.set(v, x);
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
  hl = new Set(vr(a).concat(vr(ol(a)))), Uc = Rd(r).map((f) => zd.from(f)).sort(Ud), Zo = /* @__PURE__ */ new Map();
  for (let f of Uc) {
    let h = [Zo];
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
function Oa(r) {
  return (dl(r) ? "" : `${Ba(io([r]))} `) + tl(r);
}
function Ba(r) {
  return `"${r}"‎`;
}
function jd(r) {
  if (r.length >= 4 && r[2] == Sc && r[3] == Sc)
    throw new Error(`invalid label extension: "${ms(r.slice(0, 4))}"`);
}
function Kd(r) {
  for (let e = r.lastIndexOf(95); e > 0; )
    if (r[--e] !== 95)
      throw new Error("underscore allowed only at start");
}
function Wd(r) {
  let t = r[0], e = Bc.get(t);
  if (e)
    throw Ss(`leading ${e}`);
  let n = r.length, s = -1;
  for (let i = 1; i < n; i++) {
    t = r[i];
    let o = Bc.get(t);
    if (o) {
      if (s == i)
        throw Ss(`${e} + ${o}`);
      s = i + 1, e = o;
    }
  }
  if (s == n)
    throw Ss(`trailing ${e}`);
}
function io(r, t = tl) {
  let e = [];
  Yd(r[0]) && e.push("◌");
  let n = 0, s = r.length;
  for (let i = 0; i < s; i++) {
    let o = r[i];
    dl(o) && (e.push(ms(r.slice(n, i))), e.push(t(o)), n = i + 1);
  }
  return e.push(ms(r.slice(n, s))), e.join("");
}
function Yd(r) {
  return Ia(), Dn.has(r);
}
function dl(r) {
  return Ia(), fl.has(r);
}
function Zd(r) {
  return tp(Xd(r, Jd, rp));
}
function Xd(r, t, e) {
  if (!r)
    return [];
  Ia();
  let n = 0;
  return r.split(al).map((s) => {
    let i = Sd(s), o = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let a = o.tokens = np(i, t, e), c = a.length, u;
      if (!c)
        throw new Error("empty label");
      let f = o.output = a.flat();
      if (Kd(f), !(o.emoji = c > 1 || a[0].is_emoji) && f.every((g) => g < 128))
        jd(f), u = "ASCII";
      else {
        let g = a.flatMap((A) => A.is_emoji ? [] : A);
        if (!g.length)
          u = "Emoji";
        else {
          if (Dn.has(f[0]))
            throw Ss("leading combining mark");
          for (let m = 1; m < c; m++) {
            let x = a[m];
            if (!x.is_emoji && Dn.has(x[0]))
              throw Ss(`emoji + combining mark: "${ms(a[m - 1])} + ${io([x[0]])}"`);
          }
          Wd(f);
          let A = vr(new Set(g)), [E] = $d(A);
          ep(E, g), qd(E, A), u = E.N;
        }
      }
      o.type = u;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function qd(r, t) {
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
      if (n.every((i) => _s(s, i)))
        throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
  }
}
function $d(r) {
  let t = Cr;
  for (let e of r) {
    let n = t.filter((s) => _s(s, e));
    if (!n.length)
      throw Cr.some((s) => _s(s, e)) ? gl(t[0], e) : pl(e);
    if (t = n, n.length == 1)
      break;
  }
  return t;
}
function tp(r) {
  return r.map(({ input: t, error: e, output: n }) => {
    if (e) {
      let s = e.message;
      throw new Error(r.length == 1 ? s : `Invalid label ${Ba(io(t))}: ${s}`);
    }
    return ms(n);
  }).join(al);
}
function pl(r) {
  return new Error(`disallowed character: ${Oa(r)}`);
}
function gl(r, t) {
  let e = Oa(t), n = Cr.find((s) => s.P.has(t));
  return n && (e = `${n.N} ${e}`), new Error(`illegal mixture: ${r.N} + ${e}`);
}
function Ss(r) {
  return new Error(`illegal placement: ${r}`);
}
function ep(r, t) {
  for (let e of t)
    if (!_s(r, e))
      throw gl(r, e);
  if (r.M) {
    let e = ol(t);
    for (let n = 1, s = e.length; n < s; n++)
      if (Yo.has(e[n])) {
        let i = n + 1;
        for (let o; i < s && Yo.has(o = e[i]); i++)
          for (let a = n; a < i; a++)
            if (e[a] == o)
              throw new Error(`duplicate non-spacing marks: ${Oa(o)}`);
        if (i - n > Rc)
          throw new Error(`excessive non-spacing marks: ${Ba(io(e.slice(n - 1, i)))} (${i - n}/${Rc})`);
        n = i;
      }
  }
}
function np(r, t, e) {
  let n = [], s = [];
  for (r = r.slice().reverse(); r.length; ) {
    let i = sp(r);
    if (i)
      s.length && (n.push(t(s)), s = []), n.push(e(i));
    else {
      let o = r.pop();
      if (hl.has(o))
        s.push(o);
      else {
        let a = Wo.get(o);
        if (a)
          s.push(...a);
        else if (!ll.has(o))
          throw pl(o);
      }
    }
  }
  return s.length && n.push(t(s)), n;
}
function rp(r) {
  return r.filter((t) => t != cl);
}
function sp(r, t) {
  let e = Zo, n, s = r.length;
  for (; s && (e = e.get(r[--s]), !!e); ) {
    let { V: i } = e;
    i && (n = i, t && t.push(...r.slice(s).reverse()), r.length = s);
  }
  return n;
}
const yl = new Uint8Array(32);
yl.fill(0);
function Fc(r) {
  return y(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
}
function ml(r) {
  const t = $e(ip(r)), e = [];
  if (r.length === 0)
    return e;
  let n = 0;
  for (let s = 0; s < t.length; s++)
    t[s] === 46 && (e.push(Fc(t.slice(n, s))), n = s + 1);
  return y(n < t.length, "invalid ENS name; empty component", "name", r), e.push(Fc(t.slice(n))), e;
}
function ip(r) {
  try {
    if (r.length === 0)
      throw new Error("empty label");
    return Zd(r);
  } catch (t) {
    y(!1, `invalid ENS name (${t.message})`, "name", r);
  }
}
function Xo(r) {
  y(typeof r == "string", "invalid ENS name; not a string", "name", r), y(r.length, "invalid ENS name (empty label)", "name", r);
  let t = yl;
  const e = ml(r);
  for (; e.length; )
    t = ot(pt([t, ot(e.pop())]));
  return U(t);
}
function op(r) {
  return U(pt(ml(r).map((t) => {
    if (t.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const e = new Uint8Array(t.length + 1);
    return e.set(t, 1), e[0] = e.length - 1, e;
  }))) + "00";
}
function Co(r, t) {
  return {
    address: Y(r),
    storageKeys: t.map((e, n) => (y(at(e, 32), "invalid slot", `storageKeys[${n}]`, e), e.toLowerCase()))
  };
}
function lr(r) {
  if (Array.isArray(r))
    return r.map((e, n) => Array.isArray(e) ? (y(e.length === 2, "invalid slot set", `value[${n}]`, e), Co(e[0], e[1])) : (y(e != null && typeof e == "object", "invalid address-slot set", "value", r), Co(e.address, e.storageKeys)));
  y(r != null && typeof r == "object", "invalid access list", "value", r);
  const t = Object.keys(r).map((e) => {
    const n = r[e].reduce((s, i) => (s[i] = !0, s), {});
    return Co(e, Object.keys(n).sort());
  });
  return t.sort((e, n) => e.address.localeCompare(n.address)), t;
}
function ap(r) {
  let t;
  return typeof r == "string" ? t = Gs.computePublicKey(r, !1) : t = r.publicKey, Y(ot("0x" + t.substring(4)).substring(26));
}
function cp(r, t) {
  return ap(Gs.recoverPublicKey(r, t));
}
const Mt = BigInt(0), up = BigInt(2), lp = BigInt(27), fp = BigInt(28), hp = BigInt(35), dp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Ra(r) {
  return r === "0x" ? null : Y(r);
}
function wl(r, t) {
  try {
    return lr(r);
  } catch (e) {
    y(!1, e.message, t, r);
  }
}
function oo(r, t) {
  return r === "0x" ? 0 : _(r, t);
}
function Rt(r, t) {
  if (r === "0x")
    return Mt;
  const e = F(r, t);
  return y(e <= dp, "value exceeds uint size", t, e), e;
}
function wt(r, t) {
  const e = F(r, "value"), n = Kt(e);
  return y(n.length <= 32, "value too large", `tx.${t}`, e), n;
}
function Al(r) {
  return lr(r).map((t) => [t.address, t.storageKeys]);
}
function pp(r) {
  const t = Aa(r);
  y(Array.isArray(t) && (t.length === 9 || t.length === 6), "invalid field count for legacy transaction", "data", r);
  const e = {
    type: 0,
    nonce: oo(t[0], "nonce"),
    gasPrice: Rt(t[1], "gasPrice"),
    gasLimit: Rt(t[2], "gasLimit"),
    to: Ra(t[3]),
    value: Rt(t[4], "value"),
    data: U(t[5]),
    chainId: Mt
  };
  if (t.length === 6)
    return e;
  const n = Rt(t[6], "v"), s = Rt(t[7], "r"), i = Rt(t[8], "s");
  if (s === Mt && i === Mt)
    e.chainId = n;
  else {
    let o = (n - hp) / up;
    o < Mt && (o = Mt), e.chainId = o, y(o !== Mt || n === lp || n === fp, "non-canonical legacy v", "v", t[6]), e.signature = me.from({
      r: ir(t[7], 32),
      s: ir(t[8], 32),
      v: n
    }), e.hash = ot(r);
  }
  return e;
}
function Dc(r, t) {
  const e = [
    wt(r.nonce || 0, "nonce"),
    wt(r.gasPrice || 0, "gasPrice"),
    wt(r.gasLimit || 0, "gasLimit"),
    r.to != null ? Y(r.to) : "0x",
    wt(r.value || 0, "value"),
    r.data || "0x"
  ];
  let n = Mt;
  if (r.chainId != Mt)
    n = F(r.chainId, "tx.chainId"), y(!t || t.networkV == null || t.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", t);
  else if (r.signature) {
    const i = r.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!t)
    return n !== Mt && (e.push(Kt(n)), e.push("0x"), e.push("0x")), Ls(e);
  let s = BigInt(27 + t.yParity);
  return n !== Mt ? s = me.getChainIdV(n, t.v) : BigInt(t.v) !== s && y(!1, "tx.chainId/sig.v mismatch", "sig", t), e.push(Kt(s)), e.push(Kt(t.r)), e.push(Kt(t.s)), Ls(e);
}
function bl(r, t) {
  let e;
  try {
    if (e = oo(t[0], "yParity"), e !== 0 && e !== 1)
      throw new Error("bad yParity");
  } catch {
    y(!1, "invalid yParity", "yParity", t[0]);
  }
  const n = ir(t[1], 32), s = ir(t[2], 32), i = me.from({ r: n, s, yParity: e });
  r.signature = i;
}
function gp(r) {
  const t = Aa(q(r).slice(1));
  y(Array.isArray(t) && (t.length === 9 || t.length === 12), "invalid field count for transaction type: 2", "data", U(r));
  const e = Rt(t[2], "maxPriorityFeePerGas"), n = Rt(t[3], "maxFeePerGas"), s = {
    type: 2,
    chainId: Rt(t[0], "chainId"),
    nonce: oo(t[1], "nonce"),
    maxPriorityFeePerGas: e,
    maxFeePerGas: n,
    gasPrice: null,
    gasLimit: Rt(t[4], "gasLimit"),
    to: Ra(t[5]),
    value: Rt(t[6], "value"),
    data: U(t[7]),
    accessList: wl(t[8], "accessList")
  };
  return t.length === 9 || (s.hash = ot(r), bl(s, t.slice(9))), s;
}
function Lc(r, t) {
  const e = [
    wt(r.chainId || 0, "chainId"),
    wt(r.nonce || 0, "nonce"),
    wt(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    wt(r.maxFeePerGas || 0, "maxFeePerGas"),
    wt(r.gasLimit || 0, "gasLimit"),
    r.to != null ? Y(r.to) : "0x",
    wt(r.value || 0, "value"),
    r.data || "0x",
    Al(r.accessList || [])
  ];
  return t && (e.push(wt(t.yParity, "yParity")), e.push(Kt(t.r)), e.push(Kt(t.s))), pt(["0x02", Ls(e)]);
}
function yp(r) {
  const t = Aa(q(r).slice(1));
  y(Array.isArray(t) && (t.length === 8 || t.length === 11), "invalid field count for transaction type: 1", "data", U(r));
  const e = {
    type: 1,
    chainId: Rt(t[0], "chainId"),
    nonce: oo(t[1], "nonce"),
    gasPrice: Rt(t[2], "gasPrice"),
    gasLimit: Rt(t[3], "gasLimit"),
    to: Ra(t[4]),
    value: Rt(t[5], "value"),
    data: U(t[6]),
    accessList: wl(t[7], "accessList")
  };
  return t.length === 8 || (e.hash = ot(r), bl(e, t.slice(8))), e;
}
function Mc(r, t) {
  const e = [
    wt(r.chainId || 0, "chainId"),
    wt(r.nonce || 0, "nonce"),
    wt(r.gasPrice || 0, "gasPrice"),
    wt(r.gasLimit || 0, "gasLimit"),
    r.to != null ? Y(r.to) : "0x",
    wt(r.value || 0, "value"),
    r.data || "0x",
    Al(r.accessList || [])
  ];
  return t && (e.push(wt(t.yParity, "recoveryParam")), e.push(Kt(t.r)), e.push(Kt(t.s))), pt(["0x01", Ls(e)]);
}
var Ve, Mr, Gr, Qr, Hr, Vr, _r, Jr, zr, jr, Kr, Wr;
const ln = class ln {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    b(this, Ve, void 0);
    b(this, Mr, void 0);
    b(this, Gr, void 0);
    b(this, Qr, void 0);
    b(this, Hr, void 0);
    b(this, Vr, void 0);
    b(this, _r, void 0);
    b(this, Jr, void 0);
    b(this, zr, void 0);
    b(this, jr, void 0);
    b(this, Kr, void 0);
    b(this, Wr, void 0);
    p(this, Ve, null), p(this, Mr, null), p(this, Qr, 0), p(this, Hr, BigInt(0)), p(this, Vr, null), p(this, _r, null), p(this, Jr, null), p(this, Gr, "0x"), p(this, zr, BigInt(0)), p(this, jr, BigInt(0)), p(this, Kr, null), p(this, Wr, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return l(this, Ve);
  }
  set type(t) {
    switch (t) {
      case null:
        p(this, Ve, null);
        break;
      case 0:
      case "legacy":
        p(this, Ve, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        p(this, Ve, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        p(this, Ve, 2);
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
    p(this, Mr, t == null ? null : Y(t));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return l(this, Qr);
  }
  set nonce(t) {
    p(this, Qr, _(t, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return l(this, Hr);
  }
  set gasLimit(t) {
    p(this, Hr, F(t));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const t = l(this, Vr);
    return t == null && (this.type === 0 || this.type === 1) ? Mt : t;
  }
  set gasPrice(t) {
    p(this, Vr, t == null ? null : F(t, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const t = l(this, _r);
    return t ?? (this.type === 2 ? Mt : null);
  }
  set maxPriorityFeePerGas(t) {
    p(this, _r, t == null ? null : F(t, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const t = l(this, Jr);
    return t ?? (this.type === 2 ? Mt : null);
  }
  set maxFeePerGas(t) {
    p(this, Jr, t == null ? null : F(t, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return l(this, Gr);
  }
  set data(t) {
    p(this, Gr, U(t));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return l(this, zr);
  }
  set value(t) {
    p(this, zr, F(t, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return l(this, jr);
  }
  set chainId(t) {
    p(this, jr, F(t));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return l(this, Kr) || null;
  }
  set signature(t) {
    p(this, Kr, t == null ? null : me.from(t));
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
    p(this, Wr, t == null ? null : lr(t));
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : ot(this.serialized);
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return ot(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : cp(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : Gs.recoverPublicKey(this.unsignedHash, this.signature);
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
        return Mc(this, this.signature);
      case 2:
        return Lc(this, this.signature);
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
        return Mc(this);
      case 2:
        return Lc(this);
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
      const n = q(t);
      if (n[0] >= 127)
        return ln.from(pp(n));
      switch (n[0]) {
        case 1:
          return ln.from(yp(n));
        case 2:
          return ln.from(gp(n));
      }
      P(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const e = new ln();
    return t.type != null && (e.type = t.type), t.to != null && (e.to = t.to), t.nonce != null && (e.nonce = t.nonce), t.gasLimit != null && (e.gasLimit = t.gasLimit), t.gasPrice != null && (e.gasPrice = t.gasPrice), t.maxPriorityFeePerGas != null && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), t.maxFeePerGas != null && (e.maxFeePerGas = t.maxFeePerGas), t.data != null && (e.data = t.data), t.value != null && (e.value = t.value), t.chainId != null && (e.chainId = t.chainId), t.signature != null && (e.signature = me.from(t.signature)), t.accessList != null && (e.accessList = t.accessList), t.hash != null && (y(e.isSigned(), "unsigned transaction cannot define hash", "tx", t), y(e.hash === t.hash, "hash mismatch", "tx", t)), t.from != null && (y(e.isSigned(), "unsigned transaction cannot define from", "tx", t), y(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e;
  }
};
Ve = new WeakMap(), Mr = new WeakMap(), Gr = new WeakMap(), Qr = new WeakMap(), Hr = new WeakMap(), Vr = new WeakMap(), _r = new WeakMap(), Jr = new WeakMap(), zr = new WeakMap(), jr = new WeakMap(), Kr = new WeakMap(), Wr = new WeakMap();
let Qi = ln;
const El = new Uint8Array(32);
El.fill(0);
const mp = BigInt(-1), vl = BigInt(0), xl = BigInt(1), wp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Ap(r) {
  const t = q(r), e = t.length % 32;
  return e ? pt([t, El.slice(e)]) : U(t);
}
const bp = In(xl, 32), Ep = In(vl, 32), Gc = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, Io = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function Qc(r) {
  return function(t) {
    return y(typeof t == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t), t;
  };
}
const vp = {
  name: Qc("name"),
  version: Qc("version"),
  chainId: function(r) {
    const t = F(r, "domain.chainId");
    return y(t >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(t) ? Number(t) : Er(t);
  },
  verifyingContract: function(r) {
    try {
      return Y(r).toLowerCase();
    } catch {
    }
    y(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
  },
  salt: function(r) {
    const t = q(r, "domain.salt");
    return y(t.length === 32, 'invalid domain value "salt"', "domain.salt", r), U(t);
  }
};
function Oo(r) {
  {
    const t = r.match(/^(u?)int(\d*)$/);
    if (t) {
      const e = t[1] === "", n = parseInt(t[2] || "256");
      y(n % 8 === 0 && n !== 0 && n <= 256 && (t[2] == null || t[2] === String(n)), "invalid numeric width", "type", r);
      const s = Cs(wp, e ? n - 1 : n), i = e ? (s + xl) * mp : vl;
      return function(o) {
        const a = F(o, "value");
        return y(a >= i && a <= s, `value out-of-bounds for ${r}`, "value", a), In(e ? mu(a, 256) : a, 32);
      };
    }
  }
  {
    const t = r.match(/^bytes(\d+)$/);
    if (t) {
      const e = parseInt(t[1]);
      return y(e !== 0 && e <= 32 && t[1] === String(e), "invalid bytes width", "type", r), function(n) {
        const s = q(n);
        return y(s.length === e, `invalid length for ${r}`, "value", n), Ap(n);
      };
    }
  }
  switch (r) {
    case "address":
      return function(t) {
        return ir(Y(t), 32);
      };
    case "bool":
      return function(t) {
        return t ? bp : Ep;
      };
    case "bytes":
      return function(t) {
        return ot(t);
      };
    case "string":
      return function(t) {
        return or(t);
      };
  }
  return null;
}
function Hc(r, t) {
  return `${r}(${t.map(({ name: e, type: n }) => n + " " + e).join(",")})`;
}
var Zs, _e, Yr, Ki, Pl;
const qt = class qt {
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
    b(this, Zs, void 0);
    b(this, _e, void 0);
    b(this, Yr, void 0);
    p(this, Zs, JSON.stringify(t)), p(this, _e, /* @__PURE__ */ new Map()), p(this, Yr, /* @__PURE__ */ new Map());
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
    Object.keys(t).forEach((a) => {
      e.set(a, /* @__PURE__ */ new Set()), n.set(a, []), s.set(a, /* @__PURE__ */ new Set());
    });
    for (const a in t) {
      const c = /* @__PURE__ */ new Set();
      for (const u of t[a]) {
        y(!c.has(u.name), `duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(a)}`, "types", t), c.add(u.name);
        const f = u.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
        y(f !== a, `circular type reference to ${JSON.stringify(f)}`, "types", t), !Oo(f) && (y(n.has(f), `unknown type ${JSON.stringify(f)}`, "types", t), n.get(f).push(a), e.get(a).add(f));
      }
    }
    const i = Array.from(n.keys()).filter((a) => n.get(a).length === 0);
    y(i.length !== 0, "missing primary type", "types", t), y(i.length === 1, `ambiguous primary types or unused types: ${i.map((a) => JSON.stringify(a)).join(", ")}`, "types", t), D(this, { primaryType: i[0] });
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
      u.sort(), l(this, _e).set(a, Hc(a, t[a]) + u.map((f) => Hc(f, t[f])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(l(this, Zs));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(t) {
    let e = l(this, Yr).get(t);
    return e || (e = O(this, Ki, Pl).call(this, t), l(this, Yr).set(t, e)), e;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(t) {
    const e = l(this, _e).get(t);
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
    return ot(this.encodeData(t, e));
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
    if (Oo(t))
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
    return new qt(t);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(t) {
    return qt.from(t).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(t, e, n) {
    return qt.from(e).hashStruct(t, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(t) {
    const e = [];
    for (const n in t) {
      if (t[n] == null)
        continue;
      const s = Gc[n];
      y(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), e.push({ name: n, type: s });
    }
    return e.sort((n, s) => Io.indexOf(n.name) - Io.indexOf(s.name)), qt.hashStruct("EIP712Domain", { EIP712Domain: e }, t);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(t, e, n) {
    return pt([
      "0x1901",
      qt.hashDomain(t),
      qt.from(e).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(t, e, n) {
    return ot(qt.encode(t, e, n));
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
    t.verifyingContract && !at(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
    const o = qt.from(e);
    o.visit(n, (a, c) => (a === "address" && !at(c, 20) && (i[c] = "0x"), c));
    for (const a in i)
      i[a] = await s(a);
    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), n = o.visit(n, (a, c) => a === "address" && i[c] ? i[c] : c), { domain: t, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(t, e, n) {
    qt.hashDomain(t);
    const s = {}, i = [];
    Io.forEach((c) => {
      const u = t[c];
      u != null && (s[c] = vp[c](u), i.push({ name: c, type: Gc[c] }));
    });
    const o = qt.from(e), a = Object.assign({}, e);
    return y(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", e), a.EIP712Domain = i, o.encode(n), {
      types: a,
      domain: s,
      primaryType: o.primaryType,
      message: o.visit(n, (c, u) => {
        if (c.match(/^bytes(\d*)/))
          return U(q(u));
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
Zs = new WeakMap(), _e = new WeakMap(), Yr = new WeakMap(), Ki = new WeakSet(), Pl = function(t) {
  {
    const s = Oo(t);
    if (s)
      return s;
  }
  const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
  if (e) {
    const s = e[1], i = this.getEncoder(s);
    return (o) => {
      y(!e[3] || parseInt(e[3]) === o.length, `array length mismatch; expected length ${parseInt(e[3])}`, "value", o);
      let a = o.map(i);
      return l(this, _e).has(s) && (a = a.map(ot)), ot(pt(a));
    };
  }
  const n = this.types[t];
  if (n) {
    const s = or(l(this, _e).get(t));
    return (i) => {
      const o = n.map(({ name: a, type: c }) => {
        const u = this.getEncoder(c)(i[a]);
        return l(this, _e).has(c) ? ot(u) : u;
      });
      return o.unshift(s), pt(o);
    };
  }
  y(!1, `unknown type: ${t}`, "type", t);
};
let Hi = qt;
function Ut(r) {
  const t = /* @__PURE__ */ new Set();
  return r.forEach((e) => t.add(e)), Object.freeze(t);
}
const xp = "external public payable", Pp = Ut(xp.split(" ")), Nl = "constant external internal payable private public pure view", Np = Ut(Nl.split(" ")), Tl = "constructor error event fallback function receive struct", Cl = Ut(Tl.split(" ")), Il = "calldata memory storage payable indexed", Tp = Ut(Il.split(" ")), Cp = "tuple returns", Ip = [Tl, Il, Cp, Nl].join(" "), Op = Ut(Ip.split(" ")), Bp = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, Rp = new RegExp("^(\\s*)"), kp = new RegExp("^([0-9]+)"), Sp = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), Ol = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), Bl = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var mt, pe, Xs, qo;
const Wi = class Wi {
  constructor(t) {
    b(this, Xs);
    b(this, mt, void 0);
    b(this, pe, void 0);
    p(this, mt, 0), p(this, pe, t.slice());
  }
  get offset() {
    return l(this, mt);
  }
  get length() {
    return l(this, pe).length - l(this, mt);
  }
  clone() {
    return new Wi(l(this, pe));
  }
  reset() {
    p(this, mt, 0);
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
    const e = O(this, Xs, qo).call(this, l(this, mt) + 1, t.match + 1);
    return p(this, mt, t.match + 1), e;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = [];
    for (; l(this, mt) < t.match - 1; ) {
      const n = this.peek().linkNext;
      e.push(O(this, Xs, qo).call(this, l(this, mt) + 1, n)), p(this, mt, n);
    }
    return p(this, mt, t.match + 1), e;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (l(this, mt) >= l(this, pe).length)
      throw new Error("out-of-bounds");
    return l(this, pe)[l(this, mt)];
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
    return Es(this, mt)._++, t;
  }
  toString() {
    const t = [];
    for (let e = l(this, mt); e < l(this, pe).length; e++) {
      const n = l(this, pe)[e];
      t.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${t.join(" ")}>`;
  }
};
mt = new WeakMap(), pe = new WeakMap(), Xs = new WeakSet(), qo = function(t = 0, e = 0) {
  return new Wi(l(this, pe).slice(t, e).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - t,
    linkBack: n.linkBack - t,
    linkNext: n.linkNext - t
  }))));
};
let we = Wi;
function Bn(r) {
  const t = [], e = (o) => {
    const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${a} at ${i}: ${o}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let o = r.substring(i), a = o.match(Rp);
    a && (i += a[1].length, o = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    t.push(c);
    let u = Bp[o[0]] || "";
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
          f = h + f, t[t.length - 1].value = _(h);
        }
        if (t.length === 0 || t[t.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        t[t.length - 1].text += f;
      }
      continue;
    }
    if (a = o.match(Sp), a) {
      if (c.text = a[1], i += c.text.length, Op.has(c.text)) {
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
    if (a = o.match(kp), a) {
      c.text = a[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
  }
  return new we(t.map((o) => Object.freeze(o)));
}
function Vc(r, t) {
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
  let t = en(r, Np);
  return Vc(t, Ut("constant payable nonpayable".split(" "))), Vc(t, Ut("pure view payable nonpayable".split(" "))), t.has("view") ? "view" : t.has("pure") ? "pure" : t.has("payable") ? "payable" : t.has("nonpayable") ? "nonpayable" : t.has("constant") ? "view" : "nonpayable";
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
function ar(r) {
  if (r.length)
    throw new Error(`unexpected tokens: ${r.toString()}`);
}
const Up = new RegExp(/^(.*)\[([0-9]*)\]$/);
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
const it = {}, Ht = Symbol.for("_ethers_internal"), Jc = "_ParamTypeInternal", zc = "_ErrorInternal", jc = "_EventInternal", Kc = "_ConstructorInternal", Wc = "_FallbackInternal", Yc = "_FunctionInternal", Zc = "_StructInternal";
var Zr, Ci;
const $t = class $t {
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
    if ($i(t, it, "ParamType"), Object.defineProperty(this, Ht, { value: Jc }), o && (o = Object.freeze(o.slice())), s === "array") {
      if (a == null || c == null)
        throw new Error("");
    } else if (a != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (o == null)
        throw new Error("");
    } else if (o != null)
      throw new Error("");
    D(this, {
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
    return O(this, Zr, Ci).call(this, n, t, e, (i) => {
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
    if ($t.isParamType(t))
      return t;
    if (typeof t == "string")
      try {
        return $t.from(Bn(t), e);
      } catch {
        y(!1, "invalid param type", "obj", t);
      }
    else if (t instanceof we) {
      let a = "", c = "", u = null;
      en(t, Ut(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (c = "tuple", u = t.popParams().map((m) => $t.from(m)), a = `tuple(${u.map((m) => m.format()).join(",")})`) : (a = _c(t.popType("TYPE")), c = a);
      let f = null, h = null;
      for (; t.length && t.peekType("BRACKET"); ) {
        const m = t.pop();
        f = new $t(it, "", a, c, null, u, h, f), h = m.value, a += m.text, c = "array", u = null;
      }
      let g = null;
      if (en(t, Tp).has("indexed")) {
        if (!e)
          throw new Error("");
        g = !0;
      }
      const E = t.peekType("ID") ? t.pop().text : "";
      if (t.length)
        throw new Error("leftover tokens");
      return new $t(it, E, a, c, g, u, h, f);
    }
    const n = t.name;
    y(!n || typeof n == "string" && n.match(Ol), "invalid name", "obj.name", n);
    let s = t.indexed;
    s != null && (y(e, "parameter cannot be indexed", "obj.indexed", t.indexed), s = !!s);
    let i = t.type, o = i.match(Up);
    if (o) {
      const a = parseInt(o[2] || "-1"), c = $t.from({
        type: o[1],
        components: t.components
      });
      return new $t(it, n || "", i, "array", s, null, a, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const a = t.components != null ? t.components.map((u) => $t.from(u)) : null;
      return new $t(it, n || "", i, "tuple", s, a, null, null);
    }
    return i = _c(t.type), new $t(it, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(t) {
    return t && t[Ht] === Jc;
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
      O(f = o, Zr, Ci).call(f, t, c, n, (h) => {
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
      O(f = o[u], Zr, Ci).call(f, t, c, n, (h) => {
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
let At = $t;
class cr {
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
    $i(t, it, "Fragment"), n = Object.freeze(n.slice()), D(this, { type: e, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(t) {
    if (typeof t == "string") {
      try {
        cr.from(JSON.parse(t));
      } catch {
      }
      return cr.from(Bn(t));
    }
    if (t instanceof we)
      switch (t.peekKeyword(Cl)) {
        case "constructor":
          return Xe.from(t);
        case "error":
          return Gt.from(t);
        case "event":
          return Oe.from(t);
        case "fallback":
        case "receive":
          return De.from(t);
        case "function":
          return Be.from(t);
        case "struct":
          return sr.from(t);
      }
    else if (typeof t == "object") {
      switch (t.type) {
        case "constructor":
          return Xe.from(t);
        case "error":
          return Gt.from(t);
        case "event":
          return Oe.from(t);
        case "fallback":
        case "receive":
          return De.from(t);
        case "function":
          return Be.from(t);
        case "struct":
          return sr.from(t);
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
    return Gt.isFragment(t);
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
    return Be.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(t) {
    return sr.isFragment(t);
  }
}
class co extends cr {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, n, i);
    /**
     *  The name of the fragment.
     */
    w(this, "name");
    y(typeof s == "string" && s.match(Ol), "invalid identifier", "name", s), i = Object.freeze(i.slice()), D(this, { name: s });
  }
}
function Js(r, t) {
  return "(" + t.map((e) => e.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class Gt extends co {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "error", e, n), Object.defineProperty(this, Ht, { value: zc });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return or(this.format("sighash")).substring(0, 10);
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
    return t !== "sighash" && e.push("error"), e.push(this.name + Js(t, this.inputs)), e.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(t) {
    if (Gt.isFragment(t))
      return t;
    if (typeof t == "string")
      return Gt.from(Bn(t));
    if (t instanceof we) {
      const e = ao("error", t), n = tn(t);
      return ar(t), new Gt(it, e, n);
    }
    return new Gt(it, t.name, t.inputs ? t.inputs.map(At.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(t) {
    return t && t[Ht] === zc;
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
    Object.defineProperty(this, Ht, { value: jc }), D(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return or(this.format("sighash"));
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
    return e !== "sighash" && n.push("event"), n.push(this.name + Js(e, this.inputs)), e !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(e, n) {
    return n = (n || []).map((i) => At.from(i)), new Oe(it, e, n, !1).topicHash;
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
    else if (e instanceof we) {
      const n = ao("event", e), s = tn(e, !0), i = !!en(e, Ut(["anonymous"])).has("anonymous");
      return ar(e), new Oe(it, n, s, i);
    }
    return new Oe(it, e.name, e.inputs ? e.inputs.map((n) => At.from(n, !0)) : [], !!e.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(e) {
    return e && e[Ht] === jc;
  }
}
class Xe extends cr {
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
    Object.defineProperty(this, Ht, { value: Kc }), D(this, { payable: i, gas: o });
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
    const n = [`constructor${Js(e, this.inputs)}`];
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
    else if (e instanceof we) {
      en(e, Ut(["constructor"]));
      const n = tn(e), s = !!en(e, Pp).has("payable"), i = kl(e);
      return ar(e), new Xe(it, "constructor", n, s, i);
    }
    return new Xe(it, "constructor", e.inputs ? e.inputs.map(At.from) : [], !!e.payable, e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(e) {
    return e && e[Ht] === Kc;
  }
}
class De extends cr {
  constructor(e, n, s) {
    super(e, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    w(this, "payable");
    Object.defineProperty(this, Ht, { value: Wc }), D(this, { payable: s });
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
    if (De.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return De.from(Bn(e));
      } catch {
        y(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof we) {
      const n = e.toString(), s = e.peekKeyword(Ut(["fallback", "receive"]));
      if (y(s, "type must be fallback or receive", "obj", n), e.popKeyword(Ut(["fallback", "receive"])) === "receive") {
        const c = tn(e);
        return y(c.length === 0, "receive cannot have arguments", "obj.inputs", c), en(e, Ut(["payable"])), ar(e), new De(it, [], !0);
      }
      let o = tn(e);
      o.length ? y(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map((c) => c.format("minimal")).join(", ")) : o = [At.from("bytes")];
      const a = Rl(e);
      if (y(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), en(e, Ut(["returns"])).has("returns")) {
        const c = tn(e);
        y(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((u) => u.format("minimal")).join(", "));
      }
      return ar(e), new De(it, o, a === "payable");
    }
    if (e.type === "receive")
      return new De(it, [], !0);
    if (e.type === "fallback") {
      const n = [At.from("bytes")], s = e.stateMutability === "payable";
      return new De(it, n, s);
    }
    y(!1, "invalid fallback description", "obj", e);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(e) {
    return e && e[Ht] === Wc;
  }
}
class Be extends co {
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
    Object.defineProperty(this, Ht, { value: Yc }), o = Object.freeze(o.slice()), D(this, { constant: s === "view" || s === "pure", gas: a, outputs: o, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return or(this.format("sighash")).substring(0, 10);
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
    return e !== "sighash" && n.push("function"), n.push(this.name + Js(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(Js(e, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(e, n) {
    return n = (n || []).map((i) => At.from(i)), new Be(it, e, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(e) {
    if (Be.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Be.from(Bn(e));
      } catch {
        y(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof we) {
      const s = ao("function", e), i = tn(e), o = Rl(e);
      let a = [];
      en(e, Ut(["returns"])).has("returns") && (a = tn(e));
      const c = kl(e);
      return ar(e), new Be(it, s, o, i, a, c);
    }
    let n = e.stateMutability;
    return n == null && (n = "payable", typeof e.constant == "boolean" ? (n = "view", e.constant || (n = "payable", typeof e.payable == "boolean" && !e.payable && (n = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (n = "nonpayable")), new Be(it, e.name, n, e.inputs ? e.inputs.map(At.from) : [], e.outputs ? e.outputs.map(At.from) : [], e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(e) {
    return e && e[Ht] === Yc;
  }
}
class sr extends co {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "struct", e, n), Object.defineProperty(this, Ht, { value: Zc });
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
        return sr.from(Bn(t));
      } catch {
        y(!1, "invalid struct fragment", "obj", t);
      }
    else if (t instanceof we) {
      const e = ao("struct", t), n = tn(t);
      return ar(t), new sr(it, e, n);
    }
    return new sr(it, t.name, t.inputs ? t.inputs.map(At.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(t) {
    return t && t[Ht] === Zc;
  }
}
const Ae = /* @__PURE__ */ new Map();
Ae.set(0, "GENERIC_PANIC");
Ae.set(1, "ASSERT_FALSE");
Ae.set(17, "OVERFLOW");
Ae.set(18, "DIVIDE_BY_ZERO");
Ae.set(33, "ENUM_RANGE_ERROR");
Ae.set(34, "BAD_STORAGE_DATA");
Ae.set(49, "STACK_UNDERFLOW");
Ae.set(50, "ARRAY_RANGE_ERROR");
Ae.set(65, "OUT_OF_MEMORY");
Ae.set(81, "UNINITIALIZED_FUNCTION_CALL");
const Fp = new RegExp(/^bytes([0-9]*)$/), Dp = new RegExp(/^(u?int)([0-9]*)$/);
let Bo = null;
function Lp(r, t, e, n) {
  let s = "missing revert data", i = null;
  const o = null;
  let a = null;
  if (e) {
    s = "execution reverted";
    const u = q(e);
    if (e = U(e), u.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (u.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (U(u.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], u.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (U(u.slice(0, 4)) === "0x4e487b71")
      try {
        const f = Number(n.decode(["uint256"], u.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [f]
        }, i = `Panic due to ${Ae.get(f) || "UNKNOWN"}(${f})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: t.to ? Y(t.to) : null,
    data: t.data || "0x"
  };
  return t.from && (c.from = Y(t.from)), dt(s, "CALL_EXCEPTION", {
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
    const e = t.map((s) => O(this, pn, mr).call(this, At.from(s)));
    return new Ei(e, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(t, e) {
    pu(e.length, t.length, "types/values length mismatch");
    const n = t.map((o) => O(this, pn, mr).call(this, At.from(o))), s = new Ei(n, "_"), i = new Go();
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
    const s = t.map((o) => O(this, pn, mr).call(this, At.from(o)));
    return new Ei(s, "_").decode(new Qo(e, n));
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return Bo == null && (Bo = new Yi()), Bo;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(t, e, n) {
    return Lp(t, e, n, Yi.defaultAbiCoder());
  }
};
pn = new WeakSet(), mr = function(t) {
  if (t.isArray())
    return new hd(O(this, pn, mr).call(this, t.arrayChildren), t.arrayLength, t.name);
  if (t.isTuple())
    return new Ei(t.components.map((n) => O(this, pn, mr).call(this, n)), t.name);
  switch (t.baseType) {
    case "address":
      return new ld(t.name);
    case "bool":
      return new dd(t.name);
    case "string":
      return new vd(t.name);
    case "bytes":
      return new pd(t.name);
    case "":
      return new md(t.name);
  }
  let e = t.type.match(Dp);
  if (e) {
    let n = parseInt(e[2] || "256");
    return y(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new Ed(n / 8, e[1] === "int", t.name);
  }
  if (e = t.type.match(Fp), e) {
    let n = parseInt(e[1]);
    return y(n !== 0 && n <= 32, "invalid bytes length", "param", t), new gd(n, t.name);
  }
  y(!1, "invalid type", "type", t.type);
};
let zs = Yi;
class Mp {
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
    D(this, {
      fragment: t,
      name: s,
      signature: i,
      topic: e,
      args: n
    });
  }
}
class Gp {
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
    D(this, {
      fragment: t,
      name: i,
      args: n,
      signature: o,
      selector: e,
      value: s
    });
  }
}
class Qp {
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
    D(this, {
      fragment: t,
      name: s,
      args: n,
      signature: i,
      selector: e
    });
  }
}
class Xc {
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
    D(this, { hash: t, _isIndexed: !0 });
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
const qc = {
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
}, $c = {
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
      return r >= 0 && r <= 255 && qc[r.toString()] && (t = qc[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${t})`;
    }
  }
};
var xe, Pe, Ne, Pt, Xr, Ii, qr, Oi;
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
    b(this, xe, void 0);
    b(this, Pe, void 0);
    b(this, Ne, void 0);
    //    #structs: Map<string, StructFragment>;
    b(this, Pt, void 0);
    let e = [];
    typeof t == "string" ? e = JSON.parse(t) : e = t, p(this, Ne, /* @__PURE__ */ new Map()), p(this, xe, /* @__PURE__ */ new Map()), p(this, Pe, /* @__PURE__ */ new Map());
    const n = [];
    for (const o of e)
      try {
        n.push(cr.from(o));
      } catch (a) {
        console.log("EE", a);
      }
    D(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    p(this, Pt, this.getAbiCoder()), this.fragments.forEach((o, a) => {
      let c;
      switch (o.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          D(this, { deploy: o });
          return;
        case "fallback":
          o.inputs.length === 0 ? i = !0 : (y(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
          return;
        case "function":
          c = l(this, Ne);
          break;
        case "event":
          c = l(this, Pe);
          break;
        case "error":
          c = l(this, xe);
          break;
        default:
          return;
      }
      const u = o.format();
      c.has(u) || c.set(u, o);
    }), this.deploy || D(this, {
      deploy: Xe.from("constructor()")
    }), D(this, { fallback: s, receive: i });
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
    return zs.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(t) {
    const e = O(this, Xr, Ii).call(this, t, null, !1);
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
    return !!O(this, Xr, Ii).call(this, t, null, !1);
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
    return O(this, Xr, Ii).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(t) {
    const e = Array.from(l(this, Ne).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, Ne).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(t) {
    const e = O(this, qr, Oi).call(this, t, null, !1);
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
    return !!O(this, qr, Oi).call(this, t, null, !1);
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
    return O(this, qr, Oi).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(t) {
    const e = Array.from(l(this, Pe).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, Pe).get(s), n);
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
    if (at(t)) {
      const s = t.toLowerCase();
      if ($c[s])
        return Gt.from($c[s].signature);
      for (const i of l(this, xe).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [i, o] of l(this, xe))
        i.split(
          "("
          /* fix:) */
        )[0] === t && s.push(o);
      if (s.length === 0)
        return t === "Error" ? Gt.from("error Error(string)") : t === "Panic" ? Gt.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((o) => JSON.stringify(o.format())).join(", ");
        y(!1, `ambiguous error description (i.e. ${i})`, "name", t);
      }
      return s[0];
    }
    if (t = Gt.from(t).format(), t === "Error(string)")
      return Gt.from("error Error(string)");
    if (t === "Panic(uint256)")
      return Gt.from("error Panic(uint256)");
    const n = l(this, xe).get(t);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(t) {
    const e = Array.from(l(this, xe).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, xe).get(s), n);
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
    return l(this, Pt).decode(t, e);
  }
  _encodeParams(t, e) {
    return l(this, Pt).encode(t, e);
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
    return y(ct(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, ct(e, 4));
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
    return y(ct(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, ct(e, 4));
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
    const s = Qt(e);
    if (s.length % 32 === 0)
      try {
        return l(this, Pt).decode(t.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    P(!1, n, "BAD_DATA", {
      value: U(s),
      info: { method: t.name, signature: t.format() }
    });
  }
  makeError(t, e) {
    const n = q(t, "data"), s = zs.getBuiltinCallException("call", e, n), i = "execution reverted (unknown custom error)";
    if (s.message.startsWith(i)) {
      const a = U(n.slice(0, 4)), c = this.getError(a);
      if (c)
        try {
          const u = l(this, Pt).decode(c.inputs, n.slice(4));
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
    return U(l(this, Pt).encode(t.outputs, e || []));
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
    const s = (i, o) => i.type === "string" ? or(o) : i.type === "bytes" ? ot(U(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = In(o) : i.type.match(/^bytes/) ? o = Bf(o, 32) : i.type === "address" && l(this, Pt).encode(["address"], [o]), ir(U(o), 32));
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
          n.push(or(c));
        else if (o.type === "bytes")
          n.push(ot(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(l(this, Pt).encode([o.type], [c]));
        }
      else
        s.push(o), i.push(c);
    }), {
      data: l(this, Pt).encode(s, i),
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
      y(at(n[0], 32) && n[0].toLowerCase() === A, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], o = [];
    t.inputs.forEach((A, E) => {
      A.indexed ? A.type === "string" || A.type === "bytes" || A.baseType === "tuple" || A.baseType === "array" ? (s.push(At.from({ type: "bytes32", name: A.name })), o.push(!0)) : (s.push(A), o.push(!1)) : (i.push(A), o.push(!1));
    });
    const a = n != null ? l(this, Pt).decode(s, pt(n)) : null, c = l(this, Pt).decode(i, e, !0), u = [], f = [];
    let h = 0, g = 0;
    return t.inputs.forEach((A, E) => {
      let m = null;
      if (A.indexed)
        if (a == null)
          m = new Xc(null);
        else if (o[E])
          m = new Xc(a[g++]);
        else
          try {
            m = a[g++];
          } catch (x) {
            m = x;
          }
      else
        try {
          m = c[h++];
        } catch (x) {
          m = x;
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
    const e = q(t.data, "tx.data"), n = F(t.value != null ? t.value : 0, "tx.value"), s = this.getFunction(U(e.slice(0, 4)));
    if (!s)
      return null;
    const i = l(this, Pt).decode(s.inputs, e.slice(4));
    return new Gp(s, s.selector, i, n);
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
    return !e || e.anonymous ? null : new Mp(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(t) {
    const e = U(t), n = this.getError(ct(e, 0, 4));
    if (!n)
      return null;
    const s = l(this, Pt).decode(n.inputs, ct(e, 4));
    return new Qp(n, n.selector, s);
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
xe = new WeakMap(), Pe = new WeakMap(), Ne = new WeakMap(), Pt = new WeakMap(), Xr = new WeakSet(), Ii = function(t, e, n) {
  if (at(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, Ne).values())
      if (i === o.selector)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, Ne))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      const o = e.length > 0 ? e[e.length - 1] : null;
      let a = e.length, c = !0;
      It.isTyped(o) && o.type === "overrides" && (c = !1, a--);
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs.length;
        f !== a && (!c || f !== a - 1) && i.splice(u, 1);
      }
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs;
        for (let h = 0; h < e.length; h++)
          if (It.isTyped(e[h])) {
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
  const s = l(this, Ne).get(Be.from(t).format());
  return s || null;
}, qr = new WeakSet(), Oi = function(t, e, n) {
  if (at(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, Pe).values())
      if (i === o.topicHash)
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
      for (let o = i.length - 1; o >= 0; o--)
        i[o].inputs.length < e.length && i.splice(o, 1);
      for (let o = i.length - 1; o >= 0; o--) {
        const a = i[o].inputs;
        for (let c = 0; c < e.length; c++)
          if (It.isTyped(e[c]) && e[c].type !== a[c].baseType) {
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
  const s = l(this, Pe).get(Oe.from(t).format());
  return s || null;
};
let $o = xr;
const Sl = BigInt(0);
function Us(r) {
  return r ?? null;
}
function Ct(r) {
  return r == null ? null : r.toString();
}
class tu {
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
    D(this, {
      gasPrice: Us(t),
      maxFeePerGas: Us(e),
      maxPriorityFeePerGas: Us(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: Ct(t),
      maxFeePerGas: Ct(e),
      maxPriorityFeePerGas: Ct(n)
    };
  }
}
function Vi(r) {
  const t = {};
  r.to && (t.to = r.to), r.from && (t.from = r.from), r.data && (t.data = U(r.data));
  const e = "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of e)
    !(s in r) || r[s] == null || (t[s] = F(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (t[s] = _(r[s], `request.${s}`));
  return r.accessList && (t.accessList = lr(r.accessList)), "blockTag" in r && (t.blockTag = r.blockTag), "enableCcipRead" in r && (t.enableCcipRead = !!r.enableCcipRead), "customData" in r && (t.customData = r.customData), t;
}
var Je;
class Hp {
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
    p(this, Je, t.transactions.map((n) => typeof n != "string" ? new js(n, e) : n)), D(this, {
      provider: e,
      hash: Us(t.hash),
      number: t.number,
      timestamp: t.timestamp,
      parentHash: t.parentHash,
      nonce: t.nonce,
      difficulty: t.difficulty,
      gasLimit: t.gasLimit,
      gasUsed: t.gasUsed,
      miner: t.miner,
      extraData: t.extraData,
      baseFeePerGas: Us(t.baseFeePerGas)
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
      baseFeePerGas: Ct(t),
      difficulty: Ct(e),
      extraData: n,
      gasLimit: Ct(s),
      gasUsed: Ct(i),
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
    return Vp(this);
  }
}
Je = new WeakMap();
class fi {
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
    D(this, {
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
    return _p(this);
  }
}
var qs;
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
    b(this, qs, void 0);
    p(this, qs, Object.freeze(t.logs.map((s) => new fi(s, e))));
    let n = Sl;
    t.effectiveGasPrice != null ? n = t.effectiveGasPrice : t.gasPrice != null && (n = t.gasPrice), D(this, {
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
    return l(this, qs);
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
      cumulativeGasUsed: Ct(this.cumulativeGasUsed),
      from: e,
      gasPrice: Ct(this.gasPrice),
      gasUsed: Ct(this.gasUsed),
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
    return Dl(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(t) {
    return P(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), Fl(this, t);
  }
}
qs = new WeakMap();
var gn;
const Ga = class Ga {
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
    this.provider = e, this.blockNumber = t.blockNumber != null ? t.blockNumber : null, this.blockHash = t.blockHash != null ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = t.accessList != null ? t.accessList : null, p(this, gn, -1);
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
      chainId: Ct(this.chainId),
      data: u,
      from: a,
      gasLimit: Ct(this.gasLimit),
      gasPrice: Ct(this.gasPrice),
      hash: s,
      maxFeePerGas: Ct(this.maxFeePerGas),
      maxPriorityFeePerGas: Ct(this.maxPriorityFeePerGas),
      nonce: c,
      signature: f,
      to: o,
      index: n,
      type: i,
      value: Ct(this.value)
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
          for (const x of m)
            if (x === this.hash)
              return;
          for (let x = 0; x < m.length; x++) {
            const v = await m.getTransaction(x);
            if (v.from === this.from && v.nonce === this.nonce) {
              if (a)
                return null;
              const T = await this.provider.getTransactionReceipt(v.hash);
              if (T == null || g - T.blockNumber + 1 < n)
                return;
              let S = "replaced";
              v.data === this.data && v.to === this.to && v.value === this.value ? S = "repriced" : v.data === "0x" && v.from === v.to && v.value === Sl && (S = "cancelled"), P(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: S === "replaced" || S === "cancelled",
                reason: S,
                replacement: v.replaceableTransaction(i),
                hash: v.hash,
                receipt: T
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
        E.forEach((v) => v());
      };
      if (E.push(() => {
        a = !0;
      }), s > 0) {
        const v = setTimeout(() => {
          m(), A(dt("wait for transaction timeout", "TIMEOUT"));
        }, s);
        E.push(() => {
          clearTimeout(v);
        });
      }
      const x = async (v) => {
        if (await v.confirmations() >= n) {
          m();
          try {
            g(u(v));
          } catch (T) {
            A(T);
          }
        }
      };
      if (E.push(() => {
        this.provider.off(this.hash, x);
      }), this.provider.on(this.hash, x), i >= 0) {
        const v = async () => {
          try {
            await c();
          } catch (T) {
            if (ie(T, "TRANSACTION_REPLACED")) {
              m(), A(T);
              return;
            }
          }
          a || this.provider.once("block", v);
        };
        E.push(() => {
          this.provider.off("block", v);
        }), this.provider.once("block", v);
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
    return P(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Dl(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(t) {
    return P(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), P(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Fl(this, t);
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
    const e = new Ga(this, this.provider);
    return p(e, gn, t), e;
  }
};
gn = new WeakMap();
let js = Ga;
function Vp(r) {
  return { orphan: "drop-block", hash: r.hash, number: r.number };
}
function Fl(r, t) {
  return { orphan: "reorder-transaction", tx: r, other: t };
}
function Dl(r) {
  return { orphan: "drop-transaction", tx: r };
}
function _p(r) {
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
class ka extends fi {
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
    D(this, { args: i, fragment: s, interface: n });
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
class Ll extends fi {
  /**
   * @_ignore:
   */
  constructor(e, n) {
    super(e, e.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    w(this, "error");
    D(this, { error: n });
  }
}
var $r;
class Jp extends Ul {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    b(this, $r, void 0);
    p(this, $r, e);
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
          return new ka(e, l(this, $r), n);
        } catch (s) {
          return new Ll(e, s);
        }
      return e;
    });
  }
}
$r = new WeakMap();
var $s;
class Sa extends js {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    b(this, $s, void 0);
    p(this, $s, e);
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
    return n == null ? null : new Jp(l(this, $s), this.provider, n);
  }
}
$s = new WeakMap();
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
    D(this, { log: i });
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
class zp extends Ml {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s, i) {
    super(t, e, n, new ka(i, t.interface, s));
    const o = t.interface.decodeEventLog(s, this.log.data, this.log.topics);
    D(this, { args: o, fragment: s });
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
const eu = BigInt(0);
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
function Vl(r) {
  if (r != null) {
    if (uo(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var ti;
class jp {
  constructor(t, e, n) {
    b(this, ti, void 0);
    w(this, "fragment");
    if (D(this, { fragment: e }), e.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = ur(t.runner, "resolveName"), i = uo(s) ? s : null;
    p(this, ti, async function() {
      const o = await Promise.all(e.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (f, h) => f === "address" ? Array.isArray(h) ? Promise.all(h.map((g) => St(g, i))) : St(h, i) : h)));
      return t.interface.encodeFilterTopics(e, o);
    }());
  }
  getTopicFilter() {
    return l(this, ti);
  }
}
ti = new WeakMap();
function ur(r, t) {
  return r == null ? null : typeof r[t] == "function" ? r : r.provider && typeof r.provider[t] == "function" ? r.provider : null;
}
function Ln(r) {
  return r == null ? null : r.provider || null;
}
async function _l(r, t) {
  const e = It.dereference(r, "overrides");
  y(typeof e == "object", "invalid overrides parameter", "overrides", r);
  const n = Vi(e);
  return y(n.to == null || (t || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), y(n.data == null || (t || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function Kp(r, t, e) {
  const n = ur(r, "resolveName"), s = uo(n) ? n : null;
  return await Promise.all(t.map((i, o) => i.walkAsync(e[o], (a, c) => (c = It.dereference(c, a), a === "address" ? St(c, s) : c))));
}
function Wp(r) {
  const t = async function(o) {
    const a = await _l(o, ["data"]);
    a.to = await r.getAddress(), a.from && (a.from = await St(a.from, Vl(r.runner)));
    const c = r.interface, u = F(a.value || eu, "overrides.value") === eu, f = (a.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !f && !u && y(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), y(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data);
    const h = c.receive || c.fallback && c.fallback.payable;
    return y(h || u, "cannot send value to non-payable fallback", "overrides.value", a.value), y(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data), a;
  }, e = async function(o) {
    const a = ur(r.runner, "call");
    P(Gl(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await t(o);
    try {
      return await a.call(c);
    } catch (u) {
      throw ya(u) && u.data ? r.interface.makeError(u.data, c) : u;
    }
  }, n = async function(o) {
    const a = r.runner;
    P(Hl(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await a.sendTransaction(await t(o)), u = Ln(r.runner);
    return new Sa(r.interface, u, c);
  }, s = async function(o) {
    const a = ur(r.runner, "estimateGas");
    return P(Ql(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await a.estimateGas(await t(o));
  }, i = async (o) => await n(o);
  return D(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: t,
    send: n,
    staticCall: e
  }), i;
}
function Yp(r, t) {
  const e = function(...u) {
    const f = r.interface.getFunction(t, u);
    return P(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: u }
    }), f;
  }, n = async function(...u) {
    const f = e(...u);
    let h = {};
    if (f.inputs.length + 1 === u.length && (h = await _l(u.pop()), h.from && (h.from = await St(h.from, Vl(r.runner)))), f.inputs.length !== u.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const g = await Kp(r.runner, f.inputs, u);
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
    const h = await f.sendTransaction(await n(...u)), g = Ln(r.runner);
    return new Sa(r.interface, g, h);
  }, o = async function(...u) {
    const f = ur(r.runner, "estimateGas");
    return P(Ql(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await f.estimateGas(await n(...u));
  }, a = async function(...u) {
    const f = ur(r.runner, "call");
    P(Gl(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const h = await n(...u);
    let g = "0x";
    try {
      g = await f.call(h);
    } catch (E) {
      throw ya(E) && E.data ? r.interface.makeError(E.data, h) : E;
    }
    const A = e(...u);
    return r.interface.decodeFunctionResult(A, g);
  }, c = async (...u) => e(...u).constant ? await s(...u) : await i(...u);
  return D(c, {
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
function Zp(r, t) {
  const e = function(...s) {
    const i = r.interface.getEvent(t, s);
    return P(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: s }
    }), i;
  }, n = function(...s) {
    return new jp(r, e(...s), s);
  };
  return D(n, {
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
const _i = Symbol.for("_ethersInternal_contract"), Jl = /* @__PURE__ */ new WeakMap();
function Xp(r, t) {
  Jl.set(r[_i], t);
}
function _t(r) {
  return Jl.get(r[_i]);
}
function qp(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function Ua(r, t) {
  let e, n = null;
  if (Array.isArray(t)) {
    const i = function(o) {
      if (at(o, 32))
        return o;
      const a = r.interface.getEvent(o);
      return y(a, "unknown fragment", "name", o), a.topicHash;
    };
    e = t.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
  } else
    t === "*" ? e = [null] : typeof t == "string" ? at(t, 32) ? e = [t] : (n = r.interface.getEvent(t), y(n, "unknown fragment", "event", t), e = [n.topicHash]) : qp(t) ? e = await t.getTopicFilter() : "fragment" in t ? (n = t.fragment, e = [n.topicHash]) : y(!1, "unknown event name", "event", t);
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
async function Bs(r, t) {
  const { subs: e } = _t(r);
  return e.get((await Ua(r, t)).tag) || null;
}
async function nu(r, t, e) {
  const n = Ln(r.runner);
  P(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: t });
  const { fragment: s, tag: i, topics: o } = await Ua(r, e), { addr: a, subs: c } = _t(r);
  let u = c.get(i);
  if (!u) {
    const h = { address: a || r, topics: o }, g = (x) => {
      let v = s;
      if (v == null)
        try {
          v = r.interface.getEvent(x.topics[0]);
        } catch {
        }
      if (v) {
        const T = v, S = s ? r.interface.decodeEventLog(s, x.data, x.topics) : [];
        ea(r, e, S, (V) => new zp(r, V, e, T, x));
      } else
        ea(r, e, [], (T) => new Ml(r, T, e, x));
    };
    let A = [];
    u = { tag: i, listeners: [], start: () => {
      A.length || A.push(n.on(h, g));
    }, stop: async () => {
      if (A.length == 0)
        return;
      let x = A;
      A = [], await Promise.all(x), n.off(h, g);
    } }, c.set(i, u);
  }
  return u;
}
let ta = Promise.resolve();
async function $p(r, t, e, n) {
  await ta;
  const s = await Bs(r, t);
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
  }), s.listeners.length === 0 && (s.stop(), _t(r).subs.delete(s.tag)), i > 0;
}
async function ea(r, t, e, n) {
  try {
    await ta;
  } catch {
  }
  const s = $p(r, t, e, n);
  return ta = s, await s;
}
const vi = ["then"];
var Zg;
const Ds = class Ds {
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
    w(this, Zg);
    /**
     *  The fallback or receive function if any.
     */
    w(this, "fallback");
    y(typeof t == "string" || ju(t), "invalid value for Contract target", "target", t), n == null && (n = null);
    const i = $o.from(e);
    D(this, { target: t, runner: n, interface: i }), Object.defineProperty(this, _i, { value: {} });
    let o, a = null, c = null;
    if (s) {
      const h = Ln(n);
      c = new Sa(this.interface, h, s);
    }
    let u = /* @__PURE__ */ new Map();
    if (typeof t == "string")
      if (at(t))
        a = t, o = Promise.resolve(t);
      else {
        const h = ur(n, "resolveName");
        if (!uo(h))
          throw dt("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        o = h.resolveName(t).then((g) => {
          if (g == null)
            throw dt("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: t
            });
          return _t(this).addr = g, g;
        });
      }
    else
      o = t.getAddress().then((h) => {
        if (h == null)
          throw new Error("TODO");
        return _t(this).addr = h, h;
      });
    Xp(this, { addrPromise: o, addr: a, deployTx: c, subs: u });
    const f = new Proxy({}, {
      get: (h, g, A) => {
        if (typeof g == "symbol" || vi.indexOf(g) >= 0)
          return Reflect.get(h, g, A);
        try {
          return this.getEvent(g);
        } catch (E) {
          if (!ie(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, g) => vi.indexOf(g) >= 0 ? Reflect.has(h, g) : Reflect.has(h, g) || this.interface.hasEvent(String(g))
    });
    return D(this, { filters: f }), D(this, {
      fallback: i.receive || i.fallback ? Wp(this) : null
    }), new Proxy(this, {
      get: (h, g, A) => {
        if (typeof g == "symbol" || g in h || vi.indexOf(g) >= 0)
          return Reflect.get(h, g, A);
        try {
          return h.getFunction(g);
        } catch (E) {
          if (!ie(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, g) => typeof g == "symbol" || g in h || vi.indexOf(g) >= 0 ? Reflect.has(h, g) : h.interface.hasFunction(g)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(t) {
    return new Ds(this.target, this.interface, t);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(t) {
    return new Ds(t, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await _t(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const t = Ln(this.runner);
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
    const n = Ln(this.runner);
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
    return _t(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(t) {
    return typeof t != "string" && (t = t.format()), Yp(this, t);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(t) {
    return typeof t != "string" && (t = t.format()), Zp(this, t);
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
    const { addr: s, addrPromise: i } = _t(this), o = s || await i, { fragment: a, topics: c } = await Ua(this, t), u = { address: o, topics: c, fromBlock: e, toBlock: n }, f = Ln(this.runner);
    return P(f, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await f.getLogs(u)).map((h) => {
      let g = a;
      if (g == null)
        try {
          g = this.interface.getEvent(h.topics[0]);
        } catch {
        }
      if (g)
        try {
          return new ka(h, this.interface, g);
        } catch (A) {
          return new Ll(h, A);
        }
      return new fi(h, f);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(t, e) {
    const n = await nu(this, "on", t);
    return n.listeners.push({ listener: e, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(t, e) {
    const n = await nu(this, "once", t);
    return n.listeners.push({ listener: e, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(t, ...e) {
    return await ea(this, t, e, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(t) {
    if (t) {
      const s = await Bs(this, t);
      return s ? s.listeners.length : 0;
    }
    const { subs: e } = _t(this);
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
      const s = await Bs(this, t);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: e } = _t(this);
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
    const n = await Bs(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (e == null || n.listeners.length === 0) && (n.stop(), _t(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(t) {
    if (t) {
      const e = await Bs(this, t);
      if (!e)
        return this;
      e.stop(), _t(this).subs.delete(e.tag);
    } else {
      const { subs: e } = _t(this);
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
    class e extends Ds {
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
Zg = _i;
let na = Ds;
function tg() {
  return na;
}
class Cn extends tg() {
}
function Ro(r) {
  return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : y(!1, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
}
class eg {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(t) {
    /**
     *  The name.
     */
    w(this, "name");
    D(this, { name: t });
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
const zl = new RegExp("^(ipfs)://(.*)$", "i"), ru = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  zl,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var yn, Kn, mn, wr, Zi, jl;
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
    b(this, Kn, void 0);
    D(this, { provider: t, address: e, name: n }), p(this, yn, null), p(this, Kn, new Cn(e, [
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
    return l(this, yn) == null && p(this, yn, (async () => {
      try {
        return await l(this, Kn).supportsInterface("0x9061b923");
      } catch (t) {
        if (ie(t, "CALL_EXCEPTION"))
          return !1;
        throw p(this, yn, null), t;
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
        const i = await O(this, mn, wr).call(this, "addr(bytes32)");
        return i == null || i === zo ? null : i;
      } catch (i) {
        if (ie(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (t >= 0 && t < 2147483648) {
      let i = t + 2147483648;
      const o = await O(this, mn, wr).call(this, "addr(bytes32,uint)", [i]);
      if (at(o, 20))
        return Y(o);
    }
    let e = null;
    for (const i of this.provider.plugins)
      if (i instanceof eg && i.supportsCoinType(t)) {
        e = i;
        break;
      }
    if (e == null)
      return null;
    const n = await O(this, mn, wr).call(this, "addr(bytes32,uint)", [t]);
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
    const e = await O(this, mn, wr).call(this, "text(bytes32,string)", [t]);
    return e == null || e === "0x" ? null : e;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const t = await O(this, mn, wr).call(this, "contenthash(bytes32)");
    if (t == null || t === "0x")
      return null;
    const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (e) {
      const s = e[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(e[4], 16);
      if (e[5].length === i * 2)
        return `${s}://${Uf("0x" + e[2])}`;
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
      for (let n = 0; n < ru.length; n++) {
        const s = e.match(ru[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return t.push({ type: "url", value: e }), { linkage: t, url: e };
          case "ipfs": {
            const o = Ro(e);
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
            t.push({ type: "metadata-url-base", value: h }), i === "erc1155" && (h = h.replace("{id}", In(u, 32).substring(2)), t.push({ type: "metadata-url-expanded", value: h })), h.match(/^ipfs:/i) && (h = Ro(h)), t.push({ type: "metadata-url", value: h });
            let g = {};
            const A = await new On(h).send();
            A.assertOk();
            try {
              g = A.bodyJson;
            } catch {
              try {
                t.push({ type: "!metadata", value: A.bodyText });
              } catch {
                const v = A.body;
                return v && t.push({ type: "!metadata", value: U(v) }), { url: null, linkage: t };
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
              if (E.match(zl) == null)
                return t.push({ type: "!imageUrl-ipfs", value: E }), { url: null, linkage: t };
              t.push({ type: "imageUrl-ipfs", value: E }), E = Ro(E);
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
      const i = await O(s = Pr, Zi, jl).call(s, t, n);
      if (i != null) {
        const o = new Pr(t, i, e);
        return n !== e && !await o.supportsWildcard() ? null : o;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
yn = new WeakMap(), Kn = new WeakMap(), mn = new WeakSet(), wr = async function(t, e) {
  e = (e || []).slice();
  const n = l(this, Kn).interface;
  e.unshift(Xo(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(t), P(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: t }
  }), e = [
    op(this.name),
    n.encodeFunctionData(s, e)
  ], t = "resolve(bytes,bytes)"), e.push({
    enableCcipRead: !0
  });
  try {
    const i = await l(this, Kn)[t](...e);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!ie(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, Zi = new WeakSet(), jl = async function(t, e) {
  const n = await Pr.getEnsAddress(t);
  try {
    const i = await new Cn(n, [
      "function resolver(bytes32) view returns (address)"
    ], t).resolver(Xo(e), {
      enableCcipRead: !0
    });
    return i === zo ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, b(Pr, Zi);
let Ji = Pr;
const su = BigInt(0);
function st(r, t) {
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
function hi(r, t) {
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
function ng(r) {
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
  return y(at(r, !0), "invalid data", "value", r), r;
}
function oe(r) {
  return y(at(r, 32), "invalid hash", "value", r), r;
}
const rg = hi({
  address: Y,
  blockHash: oe,
  blockNumber: _,
  data: As,
  index: _,
  removed: st(ng, !1),
  topics: Fa(oe),
  transactionHash: oe,
  transactionIndex: _
}, {
  index: ["logIndex"]
});
function sg(r) {
  return rg(r);
}
const ig = hi({
  hash: st(oe),
  parentHash: oe,
  number: _,
  timestamp: _,
  nonce: st(As),
  difficulty: F,
  gasLimit: F,
  gasUsed: F,
  miner: st(Y),
  extraData: As,
  baseFeePerGas: st(F)
});
function og(r) {
  const t = ig(r);
  return t.transactions = r.transactions.map((e) => typeof e == "string" ? e : Kl(e)), t;
}
const ag = hi({
  transactionIndex: _,
  blockNumber: _,
  transactionHash: oe,
  address: Y,
  topics: Fa(oe),
  data: As,
  index: _,
  blockHash: oe
}, {
  index: ["logIndex"]
});
function cg(r) {
  return ag(r);
}
const ug = hi({
  to: st(Y, null),
  from: st(Y, null),
  contractAddress: st(Y, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: _,
  root: st(U),
  gasUsed: F,
  logsBloom: st(As),
  blockHash: oe,
  hash: oe,
  logs: Fa(cg),
  blockNumber: _,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: F,
  effectiveGasPrice: st(F),
  status: st(_),
  type: st(_, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function lg(r) {
  return ug(r);
}
function Kl(r) {
  r.to && F(r.to) === su && (r.to = "0x0000000000000000000000000000000000000000");
  const t = hi({
    hash: oe,
    type: (e) => e === "0x" || e == null ? 0 : _(e),
    accessList: st(lr, null),
    blockHash: st(oe, null),
    blockNumber: st(_, null),
    transactionIndex: st(_, null),
    //confirmations: allowNull(getNumber, null),
    from: Y,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: st(F),
    maxPriorityFeePerGas: st(F),
    maxFeePerGas: st(F),
    gasLimit: F,
    to: st(Y, null),
    value: F,
    nonce: _,
    data: As,
    creates: st(Y, null),
    chainId: st(F, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"]
  })(r);
  if (t.to == null && t.creates == null && (t.creates = ud(t)), (r.type === 1 || r.type === 2) && r.accessList == null && (t.accessList = []), r.signature ? t.signature = me.from(r.signature) : t.signature = me.from(r), t.chainId == null) {
    const e = t.signature.legacyChainId;
    e != null && (t.chainId = e);
  }
  return t.blockHash && F(t.blockHash) === su && (t.blockHash = null), t;
}
const fg = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class di {
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
    D(this, { name: t });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new di(this.name);
  }
}
class lo extends di {
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
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), D(this, s);
  }
  clone() {
    return new lo(this.effectiveBlock, this);
  }
}
class fo extends di {
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
    D(this, {
      address: e || fg,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new fo(this.address, this.targetNetwork);
  }
}
var ei, ni;
class Wl extends di {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    b(this, ei, void 0);
    b(this, ni, void 0);
    p(this, ei, e), p(this, ni, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return l(this, ei);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return l(this, ni);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
ei = new WeakMap(), ni = new WeakMap();
const ko = /* @__PURE__ */ new Map();
var ts, es, wn;
const Nr = class Nr {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(t, e) {
    b(this, ts, void 0);
    b(this, es, void 0);
    b(this, wn, void 0);
    p(this, ts, t), p(this, es, F(e)), p(this, wn, /* @__PURE__ */ new Map());
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
    p(this, ts, t);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return l(this, es);
  }
  set chainId(t) {
    p(this, es, F(t, "chainId"));
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
      const s = lr(t.accessList);
      for (const i in s)
        n += e.txAccessListAddress + e.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(t) {
    if (dg(), t == null)
      return Nr.from("mainnet");
    if (typeof t == "number" && (t = BigInt(t)), typeof t == "string" || typeof t == "bigint") {
      const e = ko.get(t);
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
    const n = ko.get(t);
    n && y(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), ko.set(t, e);
  }
};
ts = new WeakMap(), es = new WeakMap(), wn = new WeakMap();
let qe = Nr;
function iu(r, t) {
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
function ou(r) {
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
        maxFeePerGas: iu(a.maxFee, 9),
        maxPriorityFeePerGas: iu(a.maxPriorityFee, 9)
      };
    } catch (i) {
      P(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
function hg(r) {
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
let au = !1;
function dg() {
  if (au)
    return;
  au = !0;
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
      ou("https://gasstation.polygon.technology/v2")
    ]
  }), r("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      ou("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), r("optimism", 10, {
    ensNetwork: 1,
    plugins: [
      hg(BigInt("1000000"))
    ]
  }), r("optimism-goerli", 420, {}), r("xdai", 100, { ensNetwork: 1 });
}
function ra(r) {
  return JSON.parse(JSON.stringify(r));
}
var ze, ee, An, Te, ns, Bi;
class pg {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    b(this, ns);
    b(this, ze, void 0);
    b(this, ee, void 0);
    b(this, An, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, Te, void 0);
    p(this, ze, t), p(this, ee, null), p(this, An, 4e3), p(this, Te, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return l(this, An);
  }
  set pollingInterval(t) {
    p(this, An, t);
  }
  start() {
    l(this, ee) || (p(this, ee, l(this, ze)._setTimeout(O(this, ns, Bi).bind(this), l(this, An))), O(this, ns, Bi).call(this));
  }
  stop() {
    l(this, ee) && (l(this, ze)._clearTimeout(l(this, ee)), p(this, ee, null));
  }
  pause(t) {
    this.stop(), t && p(this, Te, -2);
  }
  resume() {
    this.start();
  }
}
ze = new WeakMap(), ee = new WeakMap(), An = new WeakMap(), Te = new WeakMap(), ns = new WeakSet(), Bi = async function() {
  try {
    const t = await l(this, ze).getBlockNumber();
    if (l(this, Te) === -2) {
      p(this, Te, t);
      return;
    }
    if (t !== l(this, Te)) {
      for (let e = l(this, Te) + 1; e <= t; e++) {
        if (l(this, ee) == null)
          return;
        await l(this, ze).emit("block", e);
      }
      p(this, Te, t);
    }
  } catch {
  }
  l(this, ee) != null && p(this, ee, l(this, ze)._setTimeout(O(this, ns, Bi).bind(this), l(this, An)));
};
var Wn, Yn, bn;
class Yl {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    b(this, Wn, void 0);
    b(this, Yn, void 0);
    b(this, bn, void 0);
    p(this, Wn, t), p(this, bn, !1), p(this, Yn, (e) => {
      this._poll(e, l(this, Wn));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(t, e) {
    throw new Error("sub-classes must override this");
  }
  start() {
    l(this, bn) || (p(this, bn, !0), l(this, Yn).call(this, -2), l(this, Wn).on("block", l(this, Yn)));
  }
  stop() {
    l(this, bn) && (p(this, bn, !1), l(this, Wn).off("block", l(this, Yn)));
  }
  pause(t) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
Wn = new WeakMap(), Yn = new WeakMap(), bn = new WeakMap();
var Xi;
class gg extends Yl {
  constructor(e, n) {
    super(e);
    b(this, Xi, void 0);
    p(this, Xi, ra(n));
  }
  async _poll(e, n) {
    throw new Error("@TODO");
  }
}
Xi = new WeakMap();
var rs;
class yg extends Yl {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(e, n) {
    super(e);
    b(this, rs, void 0);
    p(this, rs, n);
  }
  async _poll(e, n) {
    const s = await n.getTransactionReceipt(l(this, rs));
    s && n.emit(l(this, rs), s);
  }
}
rs = new WeakMap();
var je, ss, is, En, ne, qi, Zl;
class Da {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(t, e) {
    b(this, qi);
    b(this, je, void 0);
    b(this, ss, void 0);
    b(this, is, void 0);
    b(this, En, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, ne, void 0);
    p(this, je, t), p(this, ss, ra(e)), p(this, is, O(this, qi, Zl).bind(this)), p(this, En, !1), p(this, ne, -2);
  }
  start() {
    l(this, En) || (p(this, En, !0), l(this, ne) === -2 && l(this, je).getBlockNumber().then((t) => {
      p(this, ne, t);
    }), l(this, je).on("block", l(this, is)));
  }
  stop() {
    l(this, En) && (p(this, En, !1), l(this, je).off("block", l(this, is)));
  }
  pause(t) {
    this.stop(), t && p(this, ne, -2);
  }
  resume() {
    this.start();
  }
}
je = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), En = new WeakMap(), ne = new WeakMap(), qi = new WeakSet(), Zl = async function(t) {
  if (l(this, ne) === -2)
    return;
  const e = ra(l(this, ss));
  e.fromBlock = l(this, ne) + 1, e.toBlock = t;
  const n = await l(this, je).getLogs(e);
  if (n.length === 0) {
    l(this, ne) < t - 60 && p(this, ne, t - 60);
    return;
  }
  for (const s of n)
    l(this, je).emit(l(this, ss), s), p(this, ne, s.blockNumber);
};
const mg = BigInt(2), wg = 10;
function xi(r) {
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
    D(this, { name: t });
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
function Ag(r) {
  return JSON.parse(JSON.stringify(r));
}
function sa(r) {
  return r = Array.from(new Set(r).values()), r.sort(), r;
}
async function So(r, t) {
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
  if (at(r, 32)) {
    const e = r.toLowerCase();
    return { type: "transaction", tag: Ri("tx", { hash: e }), hash: e };
  }
  if (r.orphan) {
    const e = r;
    return { type: "orphan", tag: Ri("orphan", e), filter: Ag(e) };
  }
  if (r.address || r.topics) {
    const e = r, n = {
      topics: (e.topics || []).map((s) => s == null ? null : Array.isArray(s) ? sa(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (e.address) {
      const s = [], i = [], o = (a) => {
        at(a) ? s.push(a) : i.push((async () => {
          s.push(await St(a, t));
        })());
      };
      Array.isArray(e.address) ? e.address.forEach(o) : o(e.address), i.length && await Promise.all(i), n.address = sa(s.map((a) => a.toLowerCase()));
    }
    return { filter: n, tag: Ri("event", n), type: "event" };
  }
  y(!1, "unknown ProviderEvent", "event", r);
}
function Uo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const bg = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var Nt, vn, Tt, os, jt, Zn, xn, Ke, ri, re, as, cs, Ft, Xt, si, ia, ii, oa, Xn, Rs, oi, aa, qn, ks, us, ki;
class Eg {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(t, e) {
    // Shares multiple identical requests made during the same 250ms
    b(this, Ft);
    b(this, si);
    b(this, ii);
    // Account
    b(this, Xn);
    b(this, oi);
    b(this, qn);
    b(this, us);
    b(this, Nt, void 0);
    b(this, vn, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    b(this, Tt, void 0);
    b(this, os, void 0);
    b(this, jt, void 0);
    b(this, Zn, void 0);
    b(this, xn, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    b(this, Ke, void 0);
    b(this, ri, void 0);
    b(this, re, void 0);
    b(this, as, void 0);
    b(this, cs, void 0);
    if (p(this, cs, Object.assign({}, bg, e || {})), t === "any")
      p(this, Zn, !0), p(this, jt, null);
    else if (t) {
      const n = qe.from(t);
      p(this, Zn, !1), p(this, jt, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      p(this, Zn, !1), p(this, jt, null);
    p(this, Ke, -1), p(this, xn, /* @__PURE__ */ new Map()), p(this, Nt, /* @__PURE__ */ new Map()), p(this, vn, /* @__PURE__ */ new Map()), p(this, Tt, null), p(this, os, !1), p(this, ri, 1), p(this, re, /* @__PURE__ */ new Map()), p(this, as, !1);
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
    p(this, as, !!t);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(t, e, n) {
    if (this.disableCcipRead || n.length === 0 || t.to == null)
      return null;
    const s = t.to.toLowerCase(), i = e.toLowerCase(), o = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], u = c.replace("{sender}", s).replace("{data}", i), f = new On(u);
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
    return new Hp(og(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(t, e) {
    return new fi(sg(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(t, e) {
    return new Ul(lg(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(t, e) {
    return new js(Kl(t), this);
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
    const t = _(await O(this, Ft, Xt).call(this, { method: "getBlockNumber" }), "%response");
    return l(this, Ke) >= 0 && p(this, Ke, t), t;
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
    if (at(t))
      return at(t, 32) ? t : Er(t);
    if (typeof t == "bigint" && (t = _(t, "blockTag")), typeof t == "number")
      return t >= 0 ? Er(t) : l(this, Ke) >= 0 ? Er(l(this, Ke) + t) : this.getBlockNumber().then((e) => Er(e + t));
    y(!1, "invalid blockTag", "blockTag", t);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(t) {
    const e = (t.topics || []).map((c) => c == null ? null : Array.isArray(c) ? sa(c.map((u) => u.toLowerCase())) : c.toLowerCase()), n = "blockHash" in t ? t.blockHash : void 0, s = (c, u, f) => {
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
    const e = Vi(t), n = [];
    if (["to", "from"].forEach((s) => {
      if (e[s] == null)
        return;
      const i = St(e[s], this);
      xi(i) ? n.push(async function() {
        e[s] = await i;
      }()) : e[s] = i;
    }), e.blockTag != null) {
      const s = this._getBlockTag(e.blockTag);
      xi(s) ? n.push(async function() {
        e.blockTag = await s;
      }()) : e.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), e;
    }() : e;
  }
  async getNetwork() {
    if (l(this, jt) == null) {
      const s = this._detectNetwork().then((i) => (this.emit("network", i, null), i), (i) => {
        throw l(this, jt) === s && p(this, jt, null), i;
      });
      return p(this, jt, s), (await s).clone();
    }
    const t = l(this, jt), [e, n] = await Promise.all([
      t,
      this._detectNetwork()
      // The actual connected network
    ]);
    return e.chainId !== n.chainId && (l(this, Zn) ? (this.emit("network", n, e), l(this, jt) === t && p(this, jt, Promise.resolve(n))) : P(!1, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), e.clone();
  }
  async getFeeData() {
    const t = await this.getNetwork(), e = async () => {
      const { _block: s, gasPrice: i } = await Bt({
        _block: O(this, oi, aa).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const u = await O(this, Ft, Xt).call(this, { method: "getGasPrice" });
            return F(u, "%response");
          } catch {
          }
          return null;
        })()
      });
      let o = null, a = null;
      const c = this._wrapBlock(s, t);
      return c && c.baseFeePerGas && (a = BigInt("1000000000"), o = c.baseFeePerGas * mg + a), new tu(i, o, a);
    }, n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new On(n.url), i = await n.processFunc(e, this, s);
      return new tu(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await e();
  }
  async estimateGas(t) {
    let e = this._getTransactionRequest(t);
    return xi(e) && (e = await e), F(await O(this, Ft, Xt).call(this, {
      method: "estimateGas",
      transaction: e
    }), "%response");
  }
  async call(t) {
    const { tx: e, blockTag: n } = await Bt({
      tx: this._getTransactionRequest(t),
      blockTag: this._getBlockTag(t.blockTag)
    });
    return await O(this, ii, oa).call(this, O(this, si, ia).call(this, e, n, t.enableCcipRead ? 0 : -1));
  }
  async getBalance(t, e) {
    return F(await O(this, Xn, Rs).call(this, { method: "getBalance" }, t, e), "%response");
  }
  async getTransactionCount(t, e) {
    return _(await O(this, Xn, Rs).call(this, { method: "getTransactionCount" }, t, e), "%response");
  }
  async getCode(t, e) {
    return U(await O(this, Xn, Rs).call(this, { method: "getCode" }, t, e));
  }
  async getStorage(t, e, n) {
    const s = F(e, "position");
    return U(await O(this, Xn, Rs).call(this, { method: "getStorage", position: s }, t, n));
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
      params: O(this, oi, aa).call(this, t, !!e)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(t) {
    const { network: e, params: n } = await Bt({
      network: this.getNetwork(),
      params: O(this, Ft, Xt).call(this, { method: "getTransaction", hash: t })
    });
    return n == null ? null : this._wrapTransactionResponse(n, e);
  }
  async getTransactionReceipt(t) {
    const { network: e, params: n } = await Bt({
      network: this.getNetwork(),
      params: O(this, Ft, Xt).call(this, { method: "getTransactionReceipt", hash: t })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await O(this, Ft, Xt).call(this, { method: "getTransaction", hash: t });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, e);
  }
  async getTransactionResult(t) {
    const { result: e } = await Bt({
      network: this.getNetwork(),
      result: O(this, Ft, Xt).call(this, { method: "getTransactionResult", hash: t })
    });
    return e == null ? null : U(e);
  }
  // Bloom-filter Queries
  async getLogs(t) {
    let e = this._getFilter(t);
    xi(e) && (e = await e);
    const { network: n, params: s } = await Bt({
      network: this.getNetwork(),
      params: O(this, Ft, Xt).call(this, { method: "getLogs", filter: e })
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
    t = Y(t);
    const e = Xo(t.substring(2).toLowerCase() + ".addr.reverse");
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
      if (ie(n, "BAD_DATA") && n.value === "0x" || ie(n, "CALL_EXCEPTION"))
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
    const e = l(this, re).get(t);
    e && (e.timer && clearTimeout(e.timer), l(this, re).delete(t));
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
    const n = Es(this, ri)._++, s = () => {
      l(this, re).delete(n), t();
    };
    if (this.paused)
      l(this, re).set(n, { timer: null, func: s, time: e });
    else {
      const i = setTimeout(s, e);
      l(this, re).set(n, { timer: i, func: s, time: Uo() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(t) {
    for (const e of l(this, Nt).values())
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
        const e = new pg(this);
        return e.pollingInterval = this.pollingInterval, e;
      }
      case "event":
        return new Da(this, t.filter);
      case "transaction":
        return new yg(this, t.hash);
      case "orphan":
        return new gg(this, t.filter);
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
    for (const n of l(this, Nt).values())
      if (n.subscriber === t) {
        n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), l(this, Tt) != null && e.pause(l(this, Tt));
        break;
      }
  }
  async on(t, e) {
    const n = await O(this, us, ki).call(this, t);
    return n.listeners.push({ listener: e, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, l(this, Tt) != null && n.subscriber.pause(l(this, Tt))), this;
  }
  async once(t, e) {
    const n = await O(this, us, ki).call(this, t);
    return n.listeners.push({ listener: e, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, l(this, Tt) != null && n.subscriber.pause(l(this, Tt))), this;
  }
  async emit(t, ...e) {
    const n = await O(this, qn, ks).call(this, t, e);
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
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), l(this, Nt).delete(n.tag)), s > 0;
  }
  async listenerCount(t) {
    if (t) {
      const n = await O(this, qn, ks).call(this, t);
      return n ? n.listeners.length : 0;
    }
    let e = 0;
    for (const { listeners: n } of l(this, Nt).values())
      e += n.length;
    return e;
  }
  async listeners(t) {
    if (t) {
      const n = await O(this, qn, ks).call(this, t);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let e = [];
    for (const { listeners: n } of l(this, Nt).values())
      e = e.concat(n.map(({ listener: s }) => s));
    return e;
  }
  async off(t, e) {
    const n = await O(this, qn, ks).call(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!e || n.listeners.length === 0) && (n.started && n.subscriber.stop(), l(this, Nt).delete(n.tag)), this;
  }
  async removeAllListeners(t) {
    if (t) {
      const { tag: e, started: n, subscriber: s } = await O(this, us, ki).call(this, t);
      n && s.stop(), l(this, Nt).delete(e);
    } else
      for (const [e, { started: n, subscriber: s }] of l(this, Nt))
        n && s.stop(), l(this, Nt).delete(e);
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
    for (const t of l(this, re).keys())
      this._clearTimeout(t);
    p(this, os, !0);
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
    return l(this, Tt) != null;
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
    if (p(this, Ke, -1), l(this, Tt) != null) {
      if (l(this, Tt) == !!t)
        return;
      P(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((e) => e.pause(t)), p(this, Tt, !!t);
    for (const e of l(this, re).values())
      e.timer && clearTimeout(e.timer), e.time = Uo() - e.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (l(this, Tt) != null) {
      this._forEachSubscriber((t) => t.resume()), p(this, Tt, null);
      for (const t of l(this, re).values()) {
        let e = t.time;
        e < 0 && (e = 0), t.time = Uo(), setTimeout(t.func, e);
      }
    }
  }
}
Nt = new WeakMap(), vn = new WeakMap(), Tt = new WeakMap(), os = new WeakMap(), jt = new WeakMap(), Zn = new WeakMap(), xn = new WeakMap(), Ke = new WeakMap(), ri = new WeakMap(), re = new WeakMap(), as = new WeakMap(), cs = new WeakMap(), Ft = new WeakSet(), Xt = async function(t) {
  const e = l(this, cs).cacheTimeout;
  if (e < 0)
    return await this._perform(t);
  const n = Ri(t.method, t);
  let s = l(this, xn).get(n);
  return s || (s = this._perform(t), l(this, xn).set(n, s), setTimeout(() => {
    l(this, xn).get(n) === s && l(this, xn).delete(n);
  }, e)), await s;
}, si = new WeakSet(), ia = async function(t, e, n) {
  P(n < wg, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, t, { blockTag: e, enableCcipRead: !0 })
  });
  const s = Vi(t);
  try {
    return U(await this._perform({ method: "call", transaction: s, blockTag: e }));
  } catch (i) {
    if (!this.disableCcipRead && ya(i) && i.data && n >= 0 && e === "latest" && s.to != null && ct(i.data, 0, 4) === "0x556f1830") {
      const o = i.data, a = await St(s.to, this);
      let c;
      try {
        c = Tg(ct(i.data, 4));
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
        data: pt([c.selector, Ng([u, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: f });
      try {
        const h = await O(this, si, ia).call(this, f, e, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, f), result: h }), h;
      } catch (h) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, f), error: h }), h;
      }
    }
    throw i;
  }
}, ii = new WeakSet(), oa = async function(t) {
  const { value: e } = await Bt({
    network: this.getNetwork(),
    value: t
  });
  return e;
}, Xn = new WeakSet(), Rs = async function(t, e, n) {
  let s = this._getAddress(e), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await O(this, ii, oa).call(this, O(this, Ft, Xt).call(this, Object.assign(t, { address: s, blockTag: i })));
}, oi = new WeakSet(), aa = async function(t, e) {
  if (at(t, 32))
    return await O(this, Ft, Xt).call(this, {
      method: "getBlock",
      blockHash: t,
      includeTransactions: e
    });
  let n = this._getBlockTag(t);
  return typeof n != "string" && (n = await n), await O(this, Ft, Xt).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: e
  });
}, qn = new WeakSet(), ks = async function(t, e) {
  let n = await So(t, this);
  return n.type === "event" && e && e.length > 0 && e[0].removed === !0 && (n = await So({ orphan: "drop-log", log: e[0] }, this)), l(this, Nt).get(n.tag) || null;
}, us = new WeakSet(), ki = async function(t) {
  const e = await So(t, this), n = e.tag;
  let s = l(this, Nt).get(n);
  return s || (s = { subscriber: this._getSubscriber(e), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, l(this, Nt).set(n, s)), s;
};
function vg(r, t) {
  try {
    const e = ca(r, t);
    if (e)
      return wa(e);
  } catch {
  }
  return null;
}
function ca(r, t) {
  if (r === "0x")
    return null;
  try {
    const e = _(ct(r, t, t + 32)), n = _(ct(r, e, e + 32));
    return ct(r, e + 32, e + 32 + n);
  } catch {
  }
  return null;
}
function cu(r) {
  const t = Kt(r);
  if (t.length > 32)
    throw new Error("internal; should not happen");
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function xg(r) {
  if (r.length % 32 === 0)
    return r;
  const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return t.set(r), t;
}
const Pg = new Uint8Array([]);
function Ng(r) {
  const t = [];
  let e = 0;
  for (let n = 0; n < r.length; n++)
    t.push(Pg), e += 32;
  for (let n = 0; n < r.length; n++) {
    const s = q(r[n]);
    t[n] = cu(e), t.push(cu(s.length)), t.push(xg(s)), e += 32 + Math.ceil(s.length / 32) * 32;
  }
  return pt(t);
}
const uu = "0x0000000000000000000000000000000000000000000000000000000000000000";
function Tg(r) {
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
  const e = ct(r, 0, 32);
  P(ct(e, 0, 12) === ct(uu, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), t.sender = ct(e, 12);
  try {
    const n = [], s = _(ct(r, 32, 64)), i = _(ct(r, s, s + 32)), o = ct(r, s + 32);
    for (let a = 0; a < i; a++) {
      const c = vg(o, a * 32);
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
    const n = ca(r, 64);
    if (n == null)
      throw new Error("abort");
    t.calldata = n;
  } catch {
    P(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  P(ct(r, 100, 128) === ct(uu, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), t.selector = ct(r, 96, 100);
  try {
    const n = ca(r, 128);
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
async function lu(r, t) {
  let e = Vi(t);
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
class Cg {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(t) {
    /**
     *  The provider this signer is connected to.
     */
    w(this, "provider");
    D(this, { provider: t || null });
  }
  async getNonce(t) {
    return pr(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t);
  }
  async populateCall(t) {
    return await lu(this, t);
  }
  async populateTransaction(t) {
    const e = pr(this, "populateTransaction"), n = await lu(this, t);
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
function Ig(r) {
  return JSON.parse(JSON.stringify(r));
}
var Dt, Ce, $n, Pn, tr, ls, ai, ua, ci, la;
class ql {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(t) {
    b(this, ai);
    b(this, ci);
    b(this, Dt, void 0);
    b(this, Ce, void 0);
    b(this, $n, void 0);
    b(this, Pn, void 0);
    b(this, tr, void 0);
    b(this, ls, void 0);
    p(this, Dt, t), p(this, Ce, null), p(this, $n, O(this, ai, ua).bind(this)), p(this, Pn, !1), p(this, tr, null), p(this, ls, !1);
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
    l(this, Pn) || (p(this, Pn, !0), O(this, ai, ua).call(this, -2));
  }
  stop() {
    l(this, Pn) && (p(this, Pn, !1), p(this, ls, !0), O(this, ci, la).call(this), l(this, Dt).off("block", l(this, $n)));
  }
  pause(t) {
    t && O(this, ci, la).call(this), l(this, Dt).off("block", l(this, $n));
  }
  resume() {
    this.start();
  }
}
Dt = new WeakMap(), Ce = new WeakMap(), $n = new WeakMap(), Pn = new WeakMap(), tr = new WeakMap(), ls = new WeakMap(), ai = new WeakSet(), ua = async function(t) {
  try {
    l(this, Ce) == null && p(this, Ce, this._subscribe(l(this, Dt)));
    let e = null;
    try {
      e = await l(this, Ce);
    } catch (i) {
      if (!ie(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (e == null) {
      p(this, Ce, null), l(this, Dt)._recoverSubscriber(this, this._recover(l(this, Dt)));
      return;
    }
    const n = await l(this, Dt).getNetwork();
    if (l(this, tr) || p(this, tr, n), l(this, tr).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (l(this, ls))
      return;
    const s = await l(this, Dt).send("eth_getFilterChanges", [e]);
    await this._emitResults(l(this, Dt), s);
  } catch (e) {
    console.log("@TODO", e);
  }
  l(this, Dt).once("block", l(this, $n));
}, ci = new WeakSet(), la = function() {
  const t = l(this, Ce);
  t && (p(this, Ce, null), t.then((e) => {
    l(this, Dt).send("eth_uninstallFilter", [e]);
  }));
};
var er;
class Og extends ql {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(e, n) {
    super(e);
    b(this, er, void 0);
    p(this, er, Ig(n));
  }
  _recover(e) {
    return new Da(e, l(this, er));
  }
  async _subscribe(e) {
    return await e.send("eth_newFilter", [l(this, er)]);
  }
  async _emitResults(e, n) {
    for (const s of n)
      e.emit(l(this, er), e._wrapLog(s, e._network));
  }
}
er = new WeakMap();
class Bg extends ql {
  async _subscribe(t) {
    return await t.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(t, e) {
    for (const n of e)
      t.emit("pending", n);
  }
}
const Rg = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Si(r) {
  if (r == null || Rg.indexOf(typeof r) >= 0 || typeof r.getAddress == "function")
    return r;
  if (Array.isArray(r))
    return r.map(Si);
  if (typeof r == "object")
    return Object.keys(r).reduce((t, e) => (t[e] = r[e], t), {});
  throw new Error(`should not happen: ${r} (${typeof r})`);
}
function kg(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function gr(r) {
  return r && r.toLowerCase();
}
function fu(r) {
  return r && typeof r.pollingInterval == "number";
}
const Sg = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class Fo extends Cg {
  constructor(e, n) {
    super(e);
    w(this, "address");
    n = Y(n), D(this, { address: n });
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
      U(n),
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
      U(n)
    ]);
  }
}
var nr, fs, We, Ie, ge, Ye, ui, fa;
class Ug extends Eg {
  constructor(e, n) {
    super(e, n);
    b(this, ui);
    b(this, nr, void 0);
    // The next ID to use for the JSON-RPC ID field
    b(this, fs, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    b(this, We, void 0);
    b(this, Ie, void 0);
    b(this, ge, void 0);
    b(this, Ye, void 0);
    p(this, fs, 1), p(this, nr, Object.assign({}, Sg, n || {})), p(this, We, []), p(this, Ie, null), p(this, Ye, null);
    {
      let i = null;
      const o = new Promise((a) => {
        i = a;
      });
      p(this, ge, { promise: o, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    s && (y(e == null || s.matches(e), "staticNetwork MUST match network object", "options", n), p(this, Ye, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(e) {
    return l(this, nr)[e];
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
      id: Es(this, fs)._++,
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
    l(this, ge) == null || l(this, ge).resolve == null || (l(this, ge).resolve(), p(this, ge, null), (async () => {
      for (; l(this, Ye) == null && !this.destroyed; )
        try {
          p(this, Ye, await this._detectNetwork());
        } catch (e) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", dt("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: e } })), await kg(1e3);
        }
      O(this, ui, fa).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (l(this, ge) != null)
      return await l(this, ge).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(e) {
    return e.type === "pending" ? new Bg(this) : e.type === "event" ? this._getOption("polling") ? new Da(this, e.filter) : new Og(this, e.filter) : e.type === "orphan" && e.filter.orphan === "drop-log" ? new Xl("orphan") : super._getSubscriber(e);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return l(this, ge) == null;
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
      e[s] != null && (n[s] = U(e[s]));
    }), e.accessList && (n.accessList = lr(e.accessList)), n;
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
      const c = ha(i), u = zs.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", e.params[0], c ? c.data : null);
      return u.info = { error: i, payload: e }, u;
    }
    const o = JSON.stringify(Dg(i));
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
    const s = Es(this, fs)._++, i = new Promise((o, a) => {
      l(this, We).push({
        resolve: o,
        reject: a,
        payload: { method: e, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return O(this, ui, fa).call(this), i;
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
      return new Fo(this, i[e]);
    }
    const { accounts: s } = await Bt({
      network: this.getNetwork(),
      accounts: n
    });
    e = Y(e);
    for (const i of s)
      if (Y(i) === e)
        return new Fo(this, e);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new Fo(this, n));
  }
  destroy() {
    l(this, Ie) && (clearTimeout(l(this, Ie)), p(this, Ie, null));
    for (const { payload: e, reject: n } of l(this, We))
      n(dt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e.method }));
    p(this, We, []), super.destroy();
  }
}
nr = new WeakMap(), fs = new WeakMap(), We = new WeakMap(), Ie = new WeakMap(), ge = new WeakMap(), Ye = new WeakMap(), ui = new WeakSet(), fa = function() {
  if (l(this, Ie))
    return;
  const e = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  p(this, Ie, setTimeout(() => {
    p(this, Ie, null);
    const n = l(this, We);
    for (p(this, We, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== l(this, nr).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((o) => o.payload)).length > l(this, nr).batchMaxSize) {
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
class Fg extends Ug {
  constructor(e, n) {
    super(e, n);
    b(this, Nn, void 0);
    p(this, Nn, 4e3);
  }
  _getSubscriber(e) {
    const n = super._getSubscriber(e);
    return fu(n) && (n.pollingInterval = l(this, Nn)), n;
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
    p(this, Nn, e), this._forEachSubscriber((n) => {
      fu(n) && (n.pollingInterval = l(this, Nn));
    });
  }
}
Nn = new WeakMap();
function ha(r) {
  if (r == null)
    return null;
  if (typeof r.message == "string" && r.message.match(/revert/i) && at(r.data))
    return { message: r.message, data: r.data };
  if (typeof r == "object") {
    for (const t in r) {
      const e = ha(r[t]);
      if (e)
        return e;
    }
    return null;
  }
  if (typeof r == "string")
    try {
      return ha(JSON.parse(r));
    } catch {
    }
  return null;
}
function da(r, t) {
  if (r != null) {
    if (typeof r.message == "string" && t.push(r.message), typeof r == "object")
      for (const e in r)
        da(r[e], t);
    if (typeof r == "string")
      try {
        return da(JSON.parse(r), t);
      } catch {
      }
  }
}
function Dg(r) {
  const t = [];
  return da(r, t), t;
}
var hs;
class Lg extends Fg {
  /**
   *  Connnect to the %%ethereum%% provider, optionally forcing the
   *  %%network%%.
   */
  constructor(e, n) {
    super(n, { batchMaxCount: 1 });
    b(this, hs, void 0);
    p(this, hs, async (s, i) => {
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
const ho = new Lg(window.ethereum);
let Ts, Do;
async function pa() {
  return Ts ? Promise.resolve(Ts) : Do || (Do = new Promise(async (r) => {
    await window.ethereum.enable(), Ts = await ho.getSigner(), r(Ts);
  }), Ts);
}
function Mg({
  activating: r,
  activationFunctions: t,
  selectedFunctionId: e,
  balance: n
}) {
  return console.log(t, e), /* @__PURE__ */ rt.jsxs(rt.Fragment, { children: [
    /* @__PURE__ */ rt.jsx(
      "div",
      {
        className: r === "unactivated" ? "opacity-100" : "opacity-0",
        children: /* @__PURE__ */ rt.jsxs("p", { className: "text-sm text-center", children: [
          t[e].context,
          /* @__PURE__ */ rt.jsx("br", {}),
          /* @__PURE__ */ rt.jsx("br", {}),
          t[e].description,
          /* @__PURE__ */ rt.jsx("br", {}),
          /* @__PURE__ */ rt.jsx("br", {}),
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
    r === "activating" && /* @__PURE__ */ rt.jsx(
      "img",
      {
        src: "./assets/loading.png",
        alt: "Loading...",
        className: "absolute top-16 w-20 h-20"
      }
    ),
    r === "activated" && /* @__PURE__ */ rt.jsxs("div", { children: [
      "activated $",
      n,
      " WATTS"
    ] })
  ] });
}
const Gg = [
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
], Qg = "0xf192Ee5a9fB9AE3A8dee79669CFd2BA8C8441d9c", Hg = new Cn(
  Qg,
  Gg,
  ho
), Vg = [
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
], _g = "0x84387e3ad062D683BFc7eD2Eeaf2C30B27Bd3d05", $l = new Cn(
  _g,
  Vg,
  ho
), Jg = [
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
], zg = "0xf272Fe62eEdCBCf7221D8451a68a85c3AF4fAcFe", jg = new Cn(
  zg,
  Jg,
  ho
);
function ga(r, t, e) {
  const [n, s] = Pi(e);
  return du(() => {
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
function Kg({
  activating: r,
  setActivating: t,
  setBalance: e,
  selectedFunctionId: n
}) {
  const s = ga(pa, []);
  if (!s)
    return /* @__PURE__ */ rt.jsx(rt.Fragment, { children: "Wait..." });
  const i = async () => {
    try {
      await Hg.connect(
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
    const a = jg.connect(
      s
    );
    try {
      const c = await s.getAddress(), u = await a.balanceOfWatts(c);
      console.log("Balance of Watts: ", u.toString()), e(u.toString()), t("activated");
    } catch (c) {
      console.log("Error fetching balance: ", c);
    }
  };
  return /* @__PURE__ */ rt.jsx(
    "button",
    {
      onClick: () => i(),
      className: `py-2 px-4 text-white rounded-full w-40 ${r === "activating" ? "bg-gray-400" : "bg-black"}`,
      disabled: r === "activating",
      children: r === "activating" ? "Activating" : "Activate"
    }
  );
}
function Wg({
  activationFunctions: r,
  setSelectedFunctionId: t,
  selectedFunctionId: e
}) {
  const n = (s) => {
    const i = Number(s.target.value);
    t(i);
  };
  return du(() => {
    console.log(e);
  }, [e]), /* @__PURE__ */ rt.jsxs(
    "select",
    {
      onChange: n,
      value: e,
      className: `py-2 px-4 text-xs text-black rounded-full w-40 border border-black ${e ? "bg-gray-200" : "bg-white"}`,
      children: [
        /* @__PURE__ */ rt.jsx("option", { value: "", disabled: !0, children: "Select an activation function" }),
        r.map((s, i) => /* @__PURE__ */ rt.jsx("option", { value: i, children: s.context }, s.id))
      ]
    }
  );
}
function Yg() {
  const [r, t] = Pi("unactivated"), [e, n] = Pi("0"), [s, i] = Pi(0), o = ga(pa, []), c = ga(async () => {
    if (!o)
      return;
    const f = await $l.connect(
      o
    ).getApprovedActivationFunctions();
    return console.log(f), f;
  }, [o], []) || [];
  return /* @__PURE__ */ rt.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ rt.jsx("div", { className: "relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96", children: c.length > 0 && /* @__PURE__ */ rt.jsxs(rt.Fragment, { children: [
    r != "activating" && /* @__PURE__ */ rt.jsx(
      Wg,
      {
        selectedFunctionId: s,
        setSelectedFunctionId: i,
        activationFunctions: c
      }
    ),
    /* @__PURE__ */ rt.jsx(
      Mg,
      {
        activating: r,
        activationFunctions: c,
        selectedFunctionId: s,
        balance: e
      }
    ),
    /* @__PURE__ */ rt.jsx(
      Kg,
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
const ty = Yg;
export {
  ty as ActivationByContractAddress,
  Yg as default
};
