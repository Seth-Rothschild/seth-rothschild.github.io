function w() {}
function I(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function B(t) {
  return t();
}
function k() {
  return Object.create(null);
}
function g(t) {
  t.forEach(B);
}
function O(t) {
  return typeof t == "function";
}
function ut(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
let b;
function ot(t, n) {
  return b || (b = document.createElement("a")), (b.href = n), t === b.href;
}
function G(t) {
  return Object.keys(t).length === 0;
}
function J(t, ...n) {
  if (t == null) return w;
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function st(t, n, e) {
  t.$$.on_destroy.push(J(n, e));
}
function ft(t, n, e, i) {
  if (t) {
    const r = T(t, n, e, i);
    return t[0](r);
  }
}
function T(t, n, e, i) {
  return t[1] && i ? I(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function at(t, n, e, i) {
  if (t[2] && i) {
    const r = t[2](i(e));
    if (n.dirty === void 0) return r;
    if (typeof r == "object") {
      const s = [],
        c = Math.max(n.dirty.length, r.length);
      for (let o = 0; o < c; o += 1) s[o] = n.dirty[o] | r[o];
      return s;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function _t(t, n, e, i, r, s) {
  if (r) {
    const c = T(n, e, i, s);
    t.p(c, r);
  }
}
function dt(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let i = 0; i < e; i++) n[i] = -1;
    return n;
  }
  return -1;
}
let E = !1;
function L() {
  E = !0;
}
function W() {
  E = !1;
}
function K(t, n, e, i) {
  for (; t < n; ) {
    const r = t + ((n - t) >> 1);
    e(r) <= i ? (t = r + 1) : (n = r);
  }
  return t;
}
function Q(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let u = 0; u < n.length; u++) {
      const a = n[u];
      a.claim_order !== void 0 && l.push(a);
    }
    n = l;
  }
  const e = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  e[0] = -1;
  let r = 0;
  for (let l = 0; l < n.length; l++) {
    const u = n[l].claim_order,
      a =
        (r > 0 && n[e[r]].claim_order <= u
          ? r + 1
          : K(1, r, (x) => n[e[x]].claim_order, u)) - 1;
    i[l] = e[a] + 1;
    const f = a + 1;
    (e[f] = l), (r = Math.max(f, r));
  }
  const s = [],
    c = [];
  let o = n.length - 1;
  for (let l = e[r] + 1; l != 0; l = i[l - 1]) {
    for (s.push(n[l - 1]); o >= l; o--) c.push(n[o]);
    o--;
  }
  for (; o >= 0; o--) c.push(n[o]);
  s.reverse(), c.sort((l, u) => l.claim_order - u.claim_order);
  for (let l = 0, u = 0; l < c.length; l++) {
    for (; u < s.length && c[l].claim_order >= s[u].claim_order; ) u++;
    const a = u < s.length ? s[u] : null;
    t.insertBefore(c[l], a);
  }
}
function R(t, n) {
  if (E) {
    for (
      Q(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function ht(t, n, e) {
  E && !e
    ? R(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function U(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function V(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createTextNode(t);
}
function mt() {
  return S(" ");
}
function pt() {
  return S("");
}
function yt(t, n, e) {
  e == null
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function X(t) {
  return Array.from(t.childNodes);
}
function Y(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, n, e, i, r = !1) {
  Y(t);
  const s = (() => {
    for (let c = t.claim_info.last_index; c < t.length; c++) {
      const o = t[c];
      if (n(o)) {
        const l = e(o);
        return (
          l === void 0 ? t.splice(c, 1) : (t[c] = l),
          r || (t.claim_info.last_index = c),
          o
        );
      }
    }
    for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
      const o = t[c];
      if (n(o)) {
        const l = e(o);
        return (
          l === void 0 ? t.splice(c, 1) : (t[c] = l),
          r
            ? l === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = c),
          o
        );
      }
    }
    return i();
  })();
  return (
    (s.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    s
  );
}
function Z(t, n, e, i) {
  return P(
    t,
    (r) => r.nodeName === n,
    (r) => {
      const s = [];
      for (let c = 0; c < r.attributes.length; c++) {
        const o = r.attributes[c];
        e[o.name] || s.push(o.name);
      }
      s.forEach((c) => r.removeAttribute(c));
    },
    () => i(n)
  );
}
function gt(t, n, e) {
  return Z(t, n, e, V);
}
function tt(t, n) {
  return P(
    t,
    (e) => e.nodeType === 3,
    (e) => {
      const i = "" + n;
      if (e.data.startsWith(i)) {
        if (e.data.length !== i.length) return e.splitText(i.length);
      } else e.data = i;
    },
    () => S(n),
    !0
  );
}
function xt(t) {
  return tt(t, " ");
}
function bt(t, n) {
  (n = "" + n), t.wholeText !== n && (t.data = n);
}
function $t(t, n, e, i) {
  e === null
    ? t.style.removeProperty(n)
    : t.style.setProperty(n, e, i ? "important" : "");
}
function wt(t, n) {
  return new t(n);
}
let y;
function p(t) {
  y = t;
}
function z() {
  if (!y) throw new Error("Function called outside component initialization");
  return y;
}
function Et(t) {
  z().$$.on_mount.push(t);
}
function vt(t) {
  z().$$.after_update.push(t);
}
const h = [],
  M = [];
let m = [];
const q = [],
  D = Promise.resolve();
let N = !1;
function F() {
  N || ((N = !0), D.then(H));
}
function Nt() {
  return F(), D;
}
function A(t) {
  m.push(t);
}
const v = new Set();
let d = 0;
function H() {
  if (d !== 0) return;
  const t = y;
  do {
    try {
      for (; d < h.length; ) {
        const n = h[d];
        d++, p(n), nt(n.$$);
      }
    } catch (n) {
      throw ((h.length = 0), (d = 0), n);
    }
    for (p(null), h.length = 0, d = 0; M.length; ) M.pop()();
    for (let n = 0; n < m.length; n += 1) {
      const e = m[n];
      v.has(e) || (v.add(e), e());
    }
    m.length = 0;
  } while (h.length);
  for (; q.length; ) q.pop()();
  (N = !1), v.clear(), p(t);
}
function nt(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(A);
  }
}
function et(t) {
  const n = [],
    e = [];
  m.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))),
    e.forEach((i) => i()),
    (m = n);
}
const $ = new Set();
let _;
function At() {
  _ = { r: 0, c: [], p: _ };
}
function St() {
  _.r || g(_.c), (_ = _.p);
}
function it(t, n) {
  t && t.i && ($.delete(t), t.i(n));
}
function jt(t, n, e, i) {
  if (t && t.o) {
    if ($.has(t)) return;
    $.add(t),
      _.c.push(() => {
        $.delete(t), i && (e && t.d(1), i());
      }),
      t.o(n);
  } else i && i();
}
function Ct(t) {
  t && t.c();
}
function kt(t, n) {
  t && t.l(n);
}
function rt(t, n, e, i) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(n, e),
    i ||
      A(() => {
        const c = t.$$.on_mount.map(B).filter(O);
        t.$$.on_destroy ? t.$$.on_destroy.push(...c) : g(c),
          (t.$$.on_mount = []);
      }),
    s.forEach(A);
}
function ct(t, n) {
  const e = t.$$;
  e.fragment !== null &&
    (et(e.after_update),
    g(e.on_destroy),
    e.fragment && e.fragment.d(n),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function lt(t, n) {
  t.$$.dirty[0] === -1 && (h.push(t), F(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Mt(t, n, e, i, r, s, c, o = [-1]) {
  const l = y;
  p(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: w,
    not_equal: r,
    bound: k(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    callbacks: k(),
    dirty: o,
    skip_bound: !1,
    root: n.target || l.$$.root,
  });
  c && c(u.root);
  let a = !1;
  if (
    ((u.ctx = e
      ? e(t, n.props || {}, (f, x, ...j) => {
          const C = j.length ? j[0] : x;
          return (
            u.ctx &&
              r(u.ctx[f], (u.ctx[f] = C)) &&
              (!u.skip_bound && u.bound[f] && u.bound[f](C), a && lt(t, f)),
            x
          );
        })
      : []),
    u.update(),
    (a = !0),
    g(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      L();
      const f = X(n.target);
      u.fragment && u.fragment.l(f), f.forEach(U);
    } else u.fragment && u.fragment.c();
    n.intro && it(t.$$.fragment),
      rt(t, n.target, n.anchor, n.customElement),
      W(),
      H();
  }
  p(l);
}
class qt {
  $destroy() {
    ct(this, 1), (this.$destroy = w);
  }
  $on(n, e) {
    if (!O(e)) return w;
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      i.push(e),
      () => {
        const r = i.indexOf(e);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(n) {
    this.$$set &&
      !G(n) &&
      ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
export {
  rt as A,
  ct as B,
  ft as C,
  R as D,
  _t as E,
  dt as F,
  at as G,
  w as H,
  st as I,
  ot as J,
  qt as S,
  mt as a,
  ht as b,
  xt as c,
  jt as d,
  pt as e,
  St as f,
  it as g,
  U as h,
  Mt as i,
  vt as j,
  V as k,
  gt as l,
  X as m,
  yt as n,
  Et as o,
  $t as p,
  S as q,
  tt as r,
  ut as s,
  Nt as t,
  bt as u,
  At as v,
  M as w,
  wt as x,
  Ct as y,
  kt as z,
};
