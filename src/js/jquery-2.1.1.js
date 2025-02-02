/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  typeof module === 'object' && typeof module.exports === 'object'
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error('jQuery requires a window with a document');
            return b(a);
          })
    : b(a);
})(typeof window !== 'undefined' ? window : this, (a, b) => {
  const c = [];
  const d = c.slice;
  const e = c.concat;
  const f = c.push;
  const g = c.indexOf;
  const h = {};
  const i = h.toString;
  const j = h.hasOwnProperty;
  const k = {};
  const l = a.document;
  const m = '2.1.1';
  var n = function (a, b) {
    return new n.fn.init(a, b);
  };
  const o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  const p = /^-ms-/;
  const q = /-([\da-z])/gi;
  const r = function (a, b) {
    return b.toUpperCase();
  };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: '',
      length: 0,
      toArray() {
        return d.call(this);
      },
      get(a) {
        return a != null
          ? a < 0
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack(a) {
        const b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each(a, b) {
        return n.each(this, a, b);
      },
      map(a) {
        return this.pushStack(n.map(this, (b, c) => a.call(b, c, b)));
      },
      slice() {
        return this.pushStack(d.apply(this, arguments));
      },
      first() {
        return this.eq(0);
      },
      last() {
        return this.eq(-1);
      },
      eq(a) {
        const b = this.length;
        const c = +a + (a < 0 ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end() {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        let a;
        let b;
        let c;
        let d;
        let e;
        let f;
        let g = arguments[0] || {};
        let h = 1;
        const i = arguments.length;
        let j = !1;
        for (
          typeof g === 'boolean' && ((j = g), (g = arguments[h] || {}), h++),
            typeof g === 'object' || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if ((a = arguments[h]) != null)
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: `jQuery${(m + Math.random()).replace(/\D/g, '')}`,
      isReady: !0,
      error(a) {
        throw new Error(a);
      },
      noop() {},
      isFunction(a) {
        return n.type(a) === 'function';
      },
      isArray: Array.isArray,
      isWindow(a) {
        return a != null && a === a.window;
      },
      isNumeric(a) {
        return !n.isArray(a) && a - parseFloat(a) >= 0;
      },
      isPlainObject(a) {
        return n.type(a) !== 'object' || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf')
          ? !1
          : !0;
      },
      isEmptyObject(a) {
        let b;
        for (b in a) return !1;
        return !0;
      },
      type(a) {
        return a == null
          ? `${a}`
          : typeof a === 'object' || typeof a === 'function'
          ? h[i.call(a)] || 'object'
          : typeof a;
      },
      globalEval(a) {
        let b;
        const c = eval;
        (a = n.trim(a)),
          a &&
            (a.indexOf('use strict') === 1
              ? ((b = l.createElement('script')),
                (b.text = a),
                l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase(a) {
        return a.replace(p, 'ms-').replace(q, r);
      },
      nodeName(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each(a, b, c) {
        let d;
        let e = 0;
        const f = a.length;
        const g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim(a) {
        return a == null ? '' : `${a}`.replace(o, '');
      },
      makeArray(a, b) {
        const c = b || [];
        return (
          a != null &&
            (s(Object(a))
              ? n.merge(c, typeof a === 'string' ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray(a, b, c) {
        return b == null ? -1 : g.call(b, a, c);
      },
      merge(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map(a, b, c) {
        let d;
        let f = 0;
        const g = a.length;
        const h = s(a);
        const i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), d != null && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), d != null && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy(a, b) {
        let c;
        let e;
        let f;
        return (
          typeof b === 'string' && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each(
      'Boolean Number String Function Array Date RegExp Object Error'.split(
        ' ',
      ),
      (a, b) => {
        h[`[object ${b}]`] = b.toLowerCase();
      },
    );
  function s(a) {
    const b = a.length;
    const c = n.type(a);
    return c === 'function' || n.isWindow(a)
      ? !1
      : a.nodeType === 1 && b
      ? !0
      : c === 'array' ||
        b === 0 ||
        (typeof b === 'number' && b > 0 && b - 1 in a);
  }
  const t = (function (a) {
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;
    let i;
    let j;
    let k;
    let l;
    let m;
    let n;
    let o;
    let p;
    let q;
    let r;
    let s;
    let t;
    const u = `sizzle${-new Date()}`;
    const v = a.document;
    let w = 0;
    let x = 0;
    const y = gb();
    const z = gb();
    const A = gb();
    let B = function (a, b) {
      return a === b && (l = !0), 0;
    };
    const C = 'undefined';
    const D = 1 << 31;
    const E = {}.hasOwnProperty;
    let F = [];
    const G = F.pop;
    const H = F.push;
    let I = F.push;
    const J = F.slice;
    const K =
      F.indexOf ||
      function (a) {
        for (let b = 0, c = this.length; c > b; b++)
          if (this[b] === a) return b;
        return -1;
      };
    const L =
      'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
    const M = '[\\x20\\t\\r\\n\\f]';
    const N = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+';
    const O = N.replace('w', 'w#');
    const P = `\\[${M}*(${N})(?:${M}*([*^$|!~]?=)${M}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${O}))|)${M}*\\]`;
    const Q = `:(${N})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${P})*)|.*)\\)|)`;
    const R = new RegExp(`^${M}+|((?:^|[^\\\\])(?:\\\\.)*)${M}+$`, 'g');
    const S = new RegExp(`^${M}*,${M}*`);
    const T = new RegExp(`^${M}*([>+~]|${M})${M}*`);
    const U = new RegExp(`=${M}*([^\\]'"]*?)${M}*\\]`, 'g');
    const V = new RegExp(Q);
    const W = new RegExp(`^${O}$`);
    const X = {
      ID: new RegExp(`^#(${N})`),
      CLASS: new RegExp(`^\\.(${N})`),
      TAG: new RegExp(`^(${N.replace('w', 'w*')})`),
      ATTR: new RegExp(`^${P}`),
      PSEUDO: new RegExp(`^${Q}`),
      CHILD: new RegExp(
        `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${M}*(even|odd|(([+-]|)(\\d*)n|)${M}*(?:([+-]|)${M}*(\\d+)|))${M}*\\)|)`,
        'i',
      ),
      bool: new RegExp(`^(?:${L})$`, 'i'),
      needsContext: new RegExp(
        `^${M}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${M}*((?:-\\d)?\\d*)${M}*\\)|)(?=[^-]|$)`,
        'i',
      ),
    };
    const Y = /^(?:input|select|textarea|button)$/i;
    const Z = /^h\d$/i;
    const $ = /^[^{]+\{\s*\[native \w/;
    const _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    const ab = /[+~]/;
    const bb = /'|\\/g;
    const cb = new RegExp(`\\\\([\\da-f]{1,6}${M}?|(${M})|.)`, 'ig');
    const db = function (a, b, c) {
      const d = `0x${b}` - 65536;
      return d !== d || c
        ? b
        : d < 0
        ? String.fromCharCode(d + 65536)
        : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
    };
    try {
      I.apply((F = J.call(v.childNodes)), v.childNodes),
        F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = {
        apply: F.length
          ? function (a, b) {
              H.apply(a, J.call(b));
            }
          : function (a, b) {
              let c = a.length;
              let d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fb(a, b, d, e) {
      let f;
      let h;
      let j;
      let k;
      let l;
      let o;
      let r;
      let s;
      let w;
      let x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        !a || typeof a !== 'string')
      )
        return d;
      if ((k = b.nodeType) !== 1 && k !== 9) return [];
      if (p && !e) {
        if ((f = _.exec(a)))
          if ((j = f[1])) {
            if (k === 9) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
            if (
              (j = f[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return I.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = k === 9 && a),
            k === 1 && b.nodeName.toLowerCase() !== 'object')
          ) {
            (o = g(a)),
              (r = b.getAttribute('id'))
                ? (s = r.replace(bb, '\\$&'))
                : b.setAttribute('id', s),
              (s = `[id='${s}'] `),
              (l = o.length);
            while (l--) o[l] = s + qb(o[l]);
            (w = (ab.test(a) && ob(b.parentNode)) || b), (x = o.join(','));
          }
          if (x)
            try {
              return I.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute('id');
            }
        }
      }
      return i(a.replace(R, '$1'), b, d, e);
    }
    function gb() {
      const a = [];
      function b(c, e) {
        return (
          a.push(`${c} `) > d.cacheLength && delete b[a.shift()],
          (b[`${c} `] = e)
        );
      }
      return b;
    }
    function hb(a) {
      return (a[u] = !0), a;
    }
    function ib(a) {
      let b = n.createElement('div');
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function jb(a, b) {
      const c = a.split('|');
      let e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function kb(a, b) {
      let c = b && a;
      const d =
        c &&
        a.nodeType === 1 &&
        b.nodeType === 1 &&
        (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function lb(a) {
      return function (b) {
        const c = b.nodeName.toLowerCase();
        return c === 'input' && b.type === a;
      };
    }
    function mb(a) {
      return function (b) {
        const c = b.nodeName.toLowerCase();
        return (c === 'input' || c === 'button') && b.type === a;
      };
    }
    function nb(a) {
      return hb(
        (b) => (
          (b = +b),
          hb((c, d) => {
            let e;
            const f = a([], c.length, b);
            let g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        ),
      );
    }
    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a;
    }
    (c = fb.support = {}),
      (f = fb.isXML =
        function (a) {
          const b = a && (a.ownerDocument || a).documentElement;
          return b ? b.nodeName !== 'HTML' : !1;
        }),
      (m = fb.setDocument =
        function (a) {
          let b;
          const e = a ? a.ownerDocument || a : v;
          const g = e.defaultView;
          return e !== n && e.nodeType === 9 && e.documentElement
            ? ((n = e),
              (o = e.documentElement),
              (p = !f(e)),
              g &&
                g !== g.top &&
                (g.addEventListener
                  ? g.addEventListener(
                      'unload',
                      () => {
                        m();
                      },
                      !1,
                    )
                  : g.attachEvent &&
                    g.attachEvent('onunload', () => {
                      m();
                    })),
              (c.attributes = ib(
                (a) => ((a.className = 'i'), !a.getAttribute('className')),
              )),
              (c.getElementsByTagName = ib(
                (a) => (
                  a.appendChild(e.createComment('')),
                  !a.getElementsByTagName('*').length
                ),
              )),
              (c.getElementsByClassName =
                $.test(e.getElementsByClassName) &&
                ib(
                  (a) => (
                    (a.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (a.firstChild.className = 'i'),
                    a.getElementsByClassName('i').length === 2
                  ),
                )),
              (c.getById = ib(
                (a) => (
                  (o.appendChild(a).id = u),
                  !e.getElementsByName || !e.getElementsByName(u).length
                ),
              )),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if (typeof b.getElementById !== C && p) {
                      const c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    const b = a.replace(cb, db);
                    return function (a) {
                      return a.getAttribute('id') === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    const b = a.replace(cb, db);
                    return function (a) {
                      const c =
                        typeof a.getAttributeNode !== C &&
                        a.getAttributeNode('id');
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return typeof b.getElementsByTagName !== C
                      ? b.getElementsByTagName(a)
                      : void 0;
                  }
                : function (a, b) {
                    let c;
                    const d = [];
                    let e = 0;
                    const f = b.getElementsByTagName(a);
                    if (a === '*') {
                      while ((c = f[e++])) c.nodeType === 1 && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return typeof b.getElementsByClassName !== C && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(e.querySelectorAll)) &&
                (ib((a) => {
                  (a.innerHTML =
                    "<select msallowclip=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowclip^='']").length &&
                      q.push(`[*^$]=${M}*(?:''|"")`),
                    a.querySelectorAll('[selected]').length ||
                      q.push(`\\[${M}*(?:value|${L})`),
                    a.querySelectorAll(':checked').length || q.push(':checked');
                }),
                ib((a) => {
                  const b = e.createElement('input');
                  b.setAttribute('type', 'hidden'),
                    a.appendChild(b).setAttribute('name', 'D'),
                    a.querySelectorAll('[name=d]').length &&
                      q.push(`name${M}*[*^$|!~]?=`),
                    a.querySelectorAll(':enabled').length ||
                      q.push(':enabled', ':disabled'),
                    a.querySelectorAll('*,:x'),
                    q.push(',.*:');
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector),
              )) &&
                ib((a) => {
                  (c.disconnectedMatch = s.call(a, 'div')),
                    s.call(a, "[s!='']:x"),
                    r.push('!=', Q);
                }),
              (q = q.length && new RegExp(q.join('|'))),
              (r = r.length && new RegExp(r.join('|'))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      const c = a.nodeType === 9 ? a.documentElement : a;
                      const d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          d.nodeType !== 1 ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    let d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return (
                      d ||
                      ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === e || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === e || (b.ownerDocument === v && t(v, b))
                          ? 1
                          : k
                          ? K.call(k, a) - K.call(k, b)
                          : 0
                        : 4 & d
                        ? -1
                        : 1)
                    );
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    let c;
                    let d = 0;
                    const f = a.parentNode;
                    const g = b.parentNode;
                    const h = [a];
                    const i = [b];
                    if (!f || !g)
                      return a === e
                        ? -1
                        : b === e
                        ? 1
                        : f
                        ? -1
                        : g
                        ? 1
                        : k
                        ? K.call(k, a) - K.call(k, b)
                        : 0;
                    if (f === g) return kb(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? kb(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              e)
            : n;
        }),
      (fb.matches = function (a, b) {
        return fb(a, null, null, b);
      }),
      (fb.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            const d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && a.document.nodeType !== 11)
            )
              return d;
          } catch (e) {}
        return fb(b, n, null, [a]).length > 0;
      }),
      (fb.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fb.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        const e = d.attrHandle[b.toLowerCase()];
        let f =
          e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fb.error = function (a) {
        throw new Error(`Syntax error, unrecognized expression: ${a}`);
      }),
      (fb.uniqueSort = function (a) {
        let b;
        const d = [];
        let e = 0;
        let f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fb.getText =
        function (a) {
          let b;
          let c = '';
          let d = 0;
          const f = a.nodeType;
          if (f) {
            if (f === 1 || f === 9 || f === 11) {
              if (typeof a.textContent === 'string') return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (f === 3 || f === 4) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fb.selectors =
        {
          cacheLength: 50,
          createPseudo: hb,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR(a) {
              return (
                (a[1] = a[1].replace(cb, db)),
                (a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db)),
                a[2] === '~=' && (a[3] = ` ${a[3]} `),
                a.slice(0, 4)
              );
            },
            CHILD(a) {
              return (
                (a[1] = a[1].toLowerCase()),
                a[1].slice(0, 3) === 'nth'
                  ? (a[3] || fb.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * (a[3] === 'even' || a[3] === 'odd'))),
                    (a[5] = +(a[7] + a[8] || a[3] === 'odd')))
                  : a[3] && fb.error(a[0]),
                a
              );
            },
            PSEUDO(a) {
              let b;
              const c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || '')
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(')', c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG(a) {
              const b = a.replace(cb, db).toLowerCase();
              return a === '*'
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS(a) {
              let b = y[`${a} `];
              return (
                b ||
                ((b = new RegExp(`(^|${M})${a}(${M}|$)`)) &&
                  y(a, (a) =>
                    b.test(
                      (typeof a.className === 'string' && a.className) ||
                        (typeof a.getAttribute !== C &&
                          a.getAttribute('class')) ||
                        '',
                    ),
                  ))
              );
            },
            ATTR(a, b, c) {
              return function (d) {
                let e = fb.attr(d, a);
                return e == null
                  ? b === '!='
                  : b
                  ? ((e += ''),
                    b === '='
                      ? e === c
                      : b === '!='
                      ? e !== c
                      : b === '^='
                      ? c && e.indexOf(c) === 0
                      : b === '*='
                      ? c && e.indexOf(c) > -1
                      : b === '$='
                      ? c && e.slice(-c.length) === c
                      : b === '~='
                      ? ` ${e} `.indexOf(c) > -1
                      : b === '|='
                      ? e === c || e.slice(0, c.length + 1) === `${c}-`
                      : !1)
                  : !0;
              };
            },
            CHILD(a, b, c, d, e) {
              const f = a.slice(0, 3) !== 'nth';
              const g = a.slice(-4) !== 'last';
              const h = b === 'of-type';
              return d === 1 && e === 0
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    let j;
                    let k;
                    let l;
                    let m;
                    let n;
                    let o;
                    let p = f !== g ? 'nextSibling' : 'previousSibling';
                    const q = b.parentNode;
                    const r = h && b.nodeName.toLowerCase();
                    const s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : l.nodeType === 1
                            )
                              return !1;
                          o = p = a === 'only' && !o && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (l.nodeType === 1 && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : l.nodeType === 1) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO(a, b) {
              let c;
              const e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                fb.error(`unsupported pseudo: ${a}`);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, '', b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? hb((a, c) => {
                        let d;
                        const f = e(a, b);
                        let g = f.length;
                        while (g--)
                          (d = K.call(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: hb((a) => {
              const b = [];
              const c = [];
              const d = h(a.replace(R, '$1'));
              return d[u]
                ? hb((a, b, c, e) => {
                    let f;
                    const g = d(a, null, e, []);
                    let h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop();
                  };
            }),
            has: hb(
              (a) =>
                function (b) {
                  return fb(a, b).length > 0;
                },
            ),
            contains: hb(
              (a) =>
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                },
            ),
            lang: hb(
              (a) => (
                W.test(a || '') || fb.error(`unsupported lang: ${a}`),
                (a = a.replace(cb, db).toLowerCase()),
                function (b) {
                  let c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || c.indexOf(`${a}-`) === 0
                      );
                  while ((b = b.parentNode) && b.nodeType === 1);
                  return !1;
                }
              ),
            ),
            target(b) {
              const c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root(a) {
              return a === o;
            },
            focus(a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled(a) {
              return a.disabled === !1;
            },
            disabled(a) {
              return a.disabled === !0;
            },
            checked(a) {
              const b = a.nodeName.toLowerCase();
              return (
                (b === 'input' && !!a.checked) ||
                (b === 'option' && !!a.selected)
              );
            },
            selected(a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty(a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent(a) {
              return !d.pseudos.empty(a);
            },
            header(a) {
              return Z.test(a.nodeName);
            },
            input(a) {
              return Y.test(a.nodeName);
            },
            button(a) {
              const b = a.nodeName.toLowerCase();
              return (b === 'input' && a.type === 'button') || b === 'button';
            },
            text(a) {
              let b;
              return (
                a.nodeName.toLowerCase() === 'input' &&
                a.type === 'text' &&
                ((b = a.getAttribute('type')) == null ||
                  b.toLowerCase() === 'text')
              );
            },
            first: nb(() => [0]),
            last: nb((a, b) => [b - 1]),
            eq: nb((a, b, c) => [c < 0 ? c + b : c]),
            even: nb((a, b) => {
              for (let c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: nb((a, b) => {
              for (let c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: nb((a, b, c) => {
              for (let d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: nb((a, b, c) => {
              for (let d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = lb(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b);
    function pb() {}
    (pb.prototype = d.filters = d.pseudos),
      (d.setFilters = new pb()),
      (g = fb.tokenize =
        function (a, b) {
          let c;
          let e;
          let f;
          let g;
          let h;
          let i;
          let j;
          const k = z[`${a} `];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, ' ') }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        });
    function qb(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
      return d;
    }
    function rb(a, b, c) {
      const d = b.dir;
      const e = c && d === 'parentNode';
      const f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (b.nodeType === 1 || e) return a(b, c, f);
          }
        : function (b, c, g) {
            let h;
            let i;
            const j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((b.nodeType === 1 || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (b.nodeType === 1 || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sb(a) {
      return a.length > 1
        ? function (b, c, d) {
            let e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function tb(a, b, c) {
      for (let d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
      return c;
    }
    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = b != null; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function vb(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = vb(d)),
        e && !e[u] && (e = vb(e, f)),
        hb((f, g, h, i) => {
          let j;
          let k;
          let l;
          const m = [];
          const n = [];
          const o = g.length;
          const p = f || tb(b || '*', h.nodeType ? [h] : h, []);
          const q = !a || (!f && b) ? p : ub(p, m, a, h, i);
          let r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ub(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? K.call(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else
            (r = ub(r === g ? r.splice(o, r.length) : r)),
              e ? e(null, g, r, i) : I.apply(g, r);
        })
      );
    }
    function wb(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[' '],
          i = g ? 1 : 0,
          k = rb((a) => a === b, h, !0),
          l = rb((a) => K.call(b, a) > -1, h, !0),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
              );
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [rb(sb(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return vb(
              i > 1 && sb(m),
              i > 1 &&
                qb(
                  a
                    .slice(0, i - 1)
                    .concat({ value: a[i - 2].type === ' ' ? '*' : '' }),
                ).replace(R, '$1'),
              c,
              e > i && wb(a.slice(i, e)),
              f > e && wb((a = a.slice(e))),
              f > e && qb(a),
            );
          }
          m.push(c);
        }
      return sb(m);
    }
    function xb(a, b) {
      const c = b.length > 0;
      const e = a.length > 0;
      const f = function (f, g, h, i, k) {
        let l;
        let m;
        let o;
        let p = 0;
        let q = '0';
        const r = f && [];
        let s = [];
        const t = j;
        const u = f || (e && d.find.TAG('*', k));
        const v = (w += t == null ? 1 : Math.random() || 0.1);
        const x = u.length;
        for (k && (j = g !== n && g); q !== x && (l = u[q]) != null; q++) {
          if (e && l) {
            m = 0;
            while ((o = a[m++]))
              if (o(l, g, h)) {
                i.push(l);
                break;
              }
            k && (w = v);
          }
          c && ((l = !o && l) && p--, f && r.push(l));
        }
        if (((p += q), c && q !== p)) {
          m = 0;
          while ((o = b[m++])) o(r, s, g, h);
          if (f) {
            if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i));
            s = ub(s);
          }
          I.apply(i, s),
            k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
        }
        return k && ((w = v), (j = t)), r;
      };
      return c ? hb(f) : f;
    }
    return (
      (h = fb.compile =
        function (a, b) {
          let c;
          const d = [];
          const e = [];
          let f = A[`${a} `];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wb(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xb(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fb.select =
        function (a, b, e, f) {
          let i;
          let j;
          let k;
          let l;
          let m;
          const n = typeof a === 'function' && a;
          const o = !f && g((a = n.selector || a));
          if (((e = e || []), o.length === 1)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                (k = j[0]).type === 'ID' &&
                c.getById &&
                b.nodeType === 9 &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(cb, db),
                  (ab.test(j[0].type) && ob(b.parentNode)) || b,
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qb(j)), !a))
                  return I.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (ab.test(a) && ob(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split('').sort(B).join('') === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ib(
        (a) => 1 & a.compareDocumentPosition(n.createElement('div')),
      )),
      ib(
        (a) => (
          (a.innerHTML = "<a href='#'></a>"),
          a.firstChild.getAttribute('href') === '#'
        ),
      ) ||
        jb('type|href|height|width', (a, b, c) =>
          c ? void 0 : a.getAttribute(b, b.toLowerCase() === 'type' ? 1 : 2),
        ),
      (c.attributes &&
        ib(
          (a) => (
            (a.innerHTML = '<input/>'),
            a.firstChild.setAttribute('value', ''),
            a.firstChild.getAttribute('value') === ''
          ),
        )) ||
        jb('value', (a, b, c) =>
          c || a.nodeName.toLowerCase() !== 'input' ? void 0 : a.defaultValue,
        ),
      ib((a) => a.getAttribute('disabled') == null) ||
        jb(L, (a, b, c) => {
          let d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fb
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[':'] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  const u = n.expr.match.needsContext;
  const v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  const w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, (a, d) => !!b.call(a, d, a) !== c);
    if (b.nodeType) return n.grep(a, (a) => (a === b) !== c);
    if (typeof b === 'string') {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, (a) => g.call(b, a) >= 0 !== c);
  }
  (n.filter = function (a, b, c) {
    const d = b[0];
    return (
      c && (a = `:not(${a})`),
      b.length === 1 && d.nodeType === 1
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, (a) => a.nodeType === 1),
          )
    );
  }),
    n.fn.extend({
      find(a) {
        let b;
        const c = this.length;
        let d = [];
        const e = this;
        if (typeof a !== 'string')
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }),
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? `${this.selector} ${a}` : a),
          d
        );
      },
      filter(a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not(a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is(a) {
        return !!x(
          this,
          typeof a === 'string' && u.test(a) ? n(a) : a || [],
          !1,
        ).length;
      },
    });
  let y;
  const z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  const A = (n.fn.init = function (a, b) {
    let c;
    let d;
    if (!a) return this;
    if (typeof a === 'string') {
      if (
        ((c =
          a[0] === '<' && a[a.length - 1] === '>' && a.length >= 3
            ? [null, a, null]
            : z.exec(a)),
        !c || (!c[1] && b))
      )
        return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (
          ((b = b instanceof n ? b[0] : b),
          n.merge(
            this,
            n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0),
          ),
          v.test(c[1]) && n.isPlainObject(b))
        )
          for (c in b)
            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this;
      }
      return (
        (d = l.getElementById(c[2])),
        d && d.parentNode && ((this.length = 1), (this[0] = d)),
        (this.context = l),
        (this.selector = a),
        this
      );
    }
    return a.nodeType
      ? ((this.context = this[0] = a), (this.length = 1), this)
      : n.isFunction(a)
      ? typeof y.ready !== 'undefined'
        ? y.ready(a)
        : a(n)
      : (void 0 !== a.selector &&
          ((this.selector = a.selector), (this.context = a.context)),
        n.makeArray(a, this));
  });
  (A.prototype = n.fn), (y = n(l));
  const B = /^(?:parents|prev(?:Until|All))/;
  const C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir(a, b, c) {
      const d = [];
      const e = void 0 !== c;
      while ((a = a[b]) && a.nodeType !== 9)
        if (a.nodeType === 1) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling(a, b) {
      for (var c = []; a; a = a.nextSibling)
        a.nodeType === 1 && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has(a) {
        const b = n(a, this);
        const c = b.length;
        return this.filter(function () {
          for (let a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest(a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g =
              u.test(a) || typeof a !== 'string' ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : c.nodeType === 1 && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index(a) {
        return a
          ? typeof a === 'string'
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add(a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack(a) {
        return this.add(
          a == null ? this.prevObject : this.prevObject.filter(a),
        );
      },
    });
  function D(a, b) {
    while ((a = a[b]) && a.nodeType !== 1);
    return a;
  }
  n.each(
    {
      parent(a) {
        const b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null;
      },
      parents(a) {
        return n.dir(a, 'parentNode');
      },
      parentsUntil(a, b, c) {
        return n.dir(a, 'parentNode', c);
      },
      next(a) {
        return D(a, 'nextSibling');
      },
      prev(a) {
        return D(a, 'previousSibling');
      },
      nextAll(a) {
        return n.dir(a, 'nextSibling');
      },
      prevAll(a) {
        return n.dir(a, 'previousSibling');
      },
      nextUntil(a, b, c) {
        return n.dir(a, 'nextSibling', c);
      },
      prevUntil(a, b, c) {
        return n.dir(a, 'previousSibling', c);
      },
      siblings(a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children(a) {
        return n.sibling(a.firstChild);
      },
      contents(a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    (a, b) => {
      n.fn[a] = function (c, d) {
        let e = n.map(this, b, c);
        return (
          a.slice(-5) !== 'Until' && (d = c),
          d && typeof d === 'string' && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    },
  );
  const E = /\S+/g;
  const F = {};
  function G(a) {
    const b = (F[a] = {});
    return (
      n.each(a.match(E) || [], (a, c) => {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = typeof a === 'string' ? F[a] || G(a) : n.extend({}, a);
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h = [];
    let i = !a.once && [];
    var j = function (l) {
      for (
        b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
        h && f > g;
        g++
      )
        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = !1;
          break;
        }
      (d = !1),
        h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
    };
    var k = {
      add() {
        if (h) {
          const c = h.length;
          !(function g(b) {
            n.each(b, (b, c) => {
              const d = n.type(c);
              d === 'function'
                ? (a.unique && k.has(c)) || h.push(c)
                : c && c.length && d !== 'string' && g(c);
            });
          })(arguments),
            d ? (f = h.length) : b && ((e = c), j(b));
        }
        return this;
      },
      remove() {
        return (
          h &&
            n.each(arguments, (a, b) => {
              let c;
              while ((c = n.inArray(b, h, c)) > -1)
                h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
            }),
          this
        );
      },
      has(a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
      },
      empty() {
        return (h = []), (f = 0), this;
      },
      disable() {
        return (h = i = b = void 0), this;
      },
      disabled() {
        return !h;
      },
      lock() {
        return (i = void 0), b || k.disable(), this;
      },
      locked() {
        return !i;
      },
      fireWith(a, b) {
        return (
          !h ||
            (c && !i) ||
            ((b = b || []),
            (b = [a, b.slice ? b.slice() : b]),
            d ? i.push(b) : j(b)),
          this
        );
      },
      fire() {
        return k.fireWith(this, arguments), this;
      },
      fired() {
        return !!c;
      },
    };
    return k;
  }),
    n.extend({
      Deferred(a) {
        const b = [
          ['resolve', 'done', n.Callbacks('once memory'), 'resolved'],
          ['reject', 'fail', n.Callbacks('once memory'), 'rejected'],
          ['notify', 'progress', n.Callbacks('memory')],
        ];
        let c = 'pending';
        var d = {
          state() {
            return c;
          },
          always() {
            return e.done(arguments).fail(arguments), this;
          },
          then() {
            let a = arguments;
            return n
              .Deferred((c) => {
                n.each(b, (b, f) => {
                  const g = n.isFunction(a[b]) && a[b];
                  e[f[1]](function () {
                    const a = g && g.apply(this, arguments);
                    a && n.isFunction(a.promise)
                      ? a
                          .promise()
                          .done(c.resolve)
                          .fail(c.reject)
                          .progress(c.notify)
                      : c[`${f[0]}With`](
                          this === d ? c.promise() : this,
                          g ? [a] : arguments,
                        );
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          promise(a) {
            return a != null ? n.extend(a, d) : d;
          },
        };
        var e = {};
        return (
          (d.pipe = d.then),
          n.each(b, (a, f) => {
            const g = f[2];
            const h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  () => {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock,
                ),
              (e[f[0]] = function () {
                return e[`${f[0]}With`](this === e ? d : this, arguments), this;
              }),
              (e[`${f[0]}With`] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when(a) {
        let b = 0;
        const c = d.call(arguments);
        const e = c.length;
        let f = e !== 1 || (a && n.isFunction(a.promise)) ? e : 0;
        const g = f === 1 ? a : n.Deferred();
        const h = function (a, b, c) {
          return function (e) {
            (b[a] = this),
              (c[a] = arguments.length > 1 ? d.call(arguments) : e),
              c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        };
        let i;
        let j;
        let k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  let H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady(a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready(a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler('ready'), n(l).off('ready'))));
      },
    });
  function I() {
    l.removeEventListener('DOMContentLoaded', I, !1),
      a.removeEventListener('load', I, !1),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      H ||
        ((H = n.Deferred()),
        l.readyState === 'complete'
          ? setTimeout(n.ready)
          : (l.addEventListener('DOMContentLoaded', I, !1),
            a.addEventListener('load', I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  const J = (n.access = function (a, b, c, d, e, f, g) {
    let h = 0;
    const i = a.length;
    let j = c == null;
    if (n.type(c) === 'object') {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function (a) {
    return a.nodeType === 1 || a.nodeType === 9 || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get() {
        return {};
      },
    }),
      (this.expando = n.expando + Math.random());
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key(a) {
        if (!K.accepts(a)) return 0;
        const b = {};
        let c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set(a, b, c) {
        let d;
        const e = this.key(a);
        const f = this.cache[e];
        if (typeof b === 'string') f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get(a, b) {
        const c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access(a, b, c) {
        let d;
        return void 0 === b || (b && typeof b === 'string' && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove(a, b) {
        let c;
        let d;
        let e;
        const f = this.key(a);
        const g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData(a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard(a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  const L = new K();
  const M = new K();
  const N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  const O = /([A-Z])/g;
  function P(a, b, c) {
    let d;
    if (void 0 === c && a.nodeType === 1)
      if (
        ((d = `data-${b.replace(O, '-$1').toLowerCase()}`),
        (c = a.getAttribute(d)),
        typeof c === 'string')
      ) {
        try {
          c =
            c === 'true'
              ? !0
              : c === 'false'
              ? !1
              : c === 'null'
              ? null
              : `${+c}` === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData(a) {
      return M.hasData(a) || L.hasData(a);
    },
    data(a, b, c) {
      return M.access(a, b, c);
    },
    removeData(a, b) {
      M.remove(a, b);
    },
    _data(a, b, c) {
      return L.access(a, b, c);
    },
    _removeData(a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data(a, b) {
        let c;
        let d;
        let e;
        const f = this[0];
        const g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), f.nodeType === 1 && !L.get(f, 'hasDataAttrs'))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                d.indexOf('data-') === 0 &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, 'hasDataAttrs', !0);
          }
          return e;
        }
        return typeof a === 'object'
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                let c;
                const d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    const c = M.get(this, d);
                    M.set(this, d, b),
                      a.indexOf('-') !== -1 &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData(a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue(a, b, c) {
        let d;
        return a
          ? ((b = `${b || 'fx'}queue`),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue(a, b) {
        b = b || 'fx';
        const c = n.queue(a, b);
        let d = c.length;
        let e = c.shift();
        const f = n._queueHooks(a, b);
        const g = function () {
          n.dequeue(a, b);
        };
        e === 'inprogress' && ((e = c.shift()), d--),
          e &&
            (b === 'fx' && c.unshift('inprogress'),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks(a, b) {
        const c = `${b}queueHooks`;
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks('once memory').add(() => {
              L.remove(a, [`${b}queue`, c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue(a, b) {
        let c = 2;
        return (
          typeof a !== 'string' && ((b = a), (a = 'fx'), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                const c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  a === 'fx' && c[0] !== 'inprogress' && n.dequeue(this, a);
              })
        );
      },
      dequeue(a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue(a) {
        return this.queue(a || 'fx', []);
      },
      promise(a, b) {
        let c;
        let d = 1;
        const e = n.Deferred();
        const f = this;
        let g = this.length;
        const h = function () {
          --d || e.resolveWith(f, [f]);
        };
        typeof a !== 'string' && ((b = a), (a = void 0)), (a = a || 'fx');
        while (g--)
          (c = L.get(f[g], `${a}queueHooks`)),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  const Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  const R = ['Top', 'Right', 'Bottom', 'Left'];
  const S = function (a, b) {
    return (
      (a = b || a),
      n.css(a, 'display') === 'none' || !n.contains(a.ownerDocument, a)
    );
  };
  const T = /^(?:checkbox|radio)$/i;
  !(function () {
    const a = l.createDocumentFragment();
    const b = a.appendChild(l.createElement('div'));
    const c = l.createElement('input');
    c.setAttribute('type', 'radio'),
      c.setAttribute('checked', 'checked'),
      c.setAttribute('name', 't'),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = '<textarea>x</textarea>'),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  const U = 'undefined';
  k.focusinBubbles = 'onfocusin' in a;
  const V = /^key/;
  const W = /^(?:mouse|pointer|contextmenu)|click/;
  const X = /^(?:focusinfocus|focusoutblur)$/;
  const Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add(a, b, c, d, e) {
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let o;
      let p;
      let q;
      const r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return typeof n !== U && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || '').match(E) || ['']),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || '').split('.').sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join('.'),
                },
                f,
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove(a, b, c, d, e) {
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let o;
      let p;
      let q;
      const r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || '').match(E) || ['']), (j = b.length);
        while (j--)
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || '').split('.').sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] && new RegExp(`(^|\\.)${p.join('\\.(?:.*\\.|)')}(\\.|$)`)),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && (d !== '**' || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
      }
    },
    trigger(b, c, d, e) {
      let f;
      let g;
      let h;
      let i;
      let k;
      let m;
      let o;
      const p = [d || l];
      let q = j.call(b, 'type') ? b.type : b;
      let r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
      if (
        ((g = h = d = d || l),
        d.nodeType !== 3 &&
          d.nodeType !== 8 &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf('.') >= 0 &&
            ((r = q.split('.')), (q = r.shift()), r.sort()),
          (k = q.indexOf(':') < 0 && `on${q}`),
          (b = b[n.expando] ? b : new n.Event(q, typeof b === 'object' && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join('.')),
          (b.namespace_re = b.namespace
            ? new RegExp(`(^|\\.)${r.join('\\.(?:.*\\.|)')}(\\.|$)`)
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = c == null ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle')),
            m && m.apply(g, c),
            (m = k && g[k]),
            m &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch(a) {
      a = n.event.fix(a);
      let b;
      let c;
      let e;
      let f;
      let g;
      let h = [];
      const i = d.call(arguments);
      const j = (L.get(this, 'events') || {})[a.type] || [];
      const k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (a.result = e) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers(a, b) {
      let c;
      let d;
      let e;
      let f;
      const g = [];
      const h = b.delegateCount;
      let i = a.target;
      if (h && i.nodeType && (!a.button || a.type !== 'click'))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || a.type !== 'click') {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = `${f.selector} `),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' ',
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter(a, b) {
        return (
          a.which == null &&
            (a.which = b.charCode != null ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' ',
        ),
      filter(a, b) {
        let c;
        let d;
        let e;
        const f = b.button;
        return (
          a.pageX == null &&
            b.clientX != null &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix(a) {
      if (a[n.expando]) return a;
      let b;
      let c;
      let d;
      const e = a.type;
      const f = a;
      let g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger() {
          return this.type === 'checkbox' &&
            this.click &&
            n.nodeName(this, 'input')
            ? (this.click(), !1)
            : void 0;
        },
        _default(a) {
          return n.nodeName(a.target, 'a');
        },
      },
      beforeunload: {
        postDispatch(a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate(a, b, c, d) {
      const e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault() {
        const a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation() {
        const a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation() {
        const a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      (a, b) => {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle(a) {
            let c;
            const d = this;
            const e = a.relatedTarget;
            const f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      },
    ),
    k.focusinBubbles ||
      n.each({ focus: 'focusin', blur: 'focusout' }, (a, b) => {
        const c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup() {
            const d = this.ownerDocument || this;
            const e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown() {
            const d = this.ownerDocument || this;
            const e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on(a, b, c, d, e) {
        let f;
        let g;
        if (typeof a === 'object') {
          typeof b !== 'string' && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (c == null && d == null
            ? ((d = b), (c = b = void 0))
            : d == null &&
              (typeof b === 'string'
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          e === 1 &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off(a, b, c) {
        let d;
        let e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? `${d.origType}.${d.namespace}` : d.origType,
              d.selector,
              d.handler,
            ),
            this
          );
        if (typeof a === 'object') {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || typeof b === 'function') && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger(a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler(a, b) {
        const c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  const ab =
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  const bb = /<([\w:]+)/;
  const cb = /<|&#?\w+;/;
  const db = /<(?:script|style|link)/i;
  const eb = /checked\s*(?:[^=]|=\s*.checked.)/i;
  const fb = /^$|\/(?:java|ecma)script/i;
  const gb = /^true\/(.*)/;
  const hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  const ib = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  (ib.optgroup = ib.option),
    (ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead),
    (ib.th = ib.td);
  function jb(a, b) {
    return n.nodeName(a, 'table') &&
      n.nodeName(b.nodeType !== 11 ? b : b.firstChild, 'tr')
      ? a.getElementsByTagName('tbody')[0] ||
          a.appendChild(a.ownerDocument.createElement('tbody'))
      : a;
  }
  function kb(a) {
    return (a.type = `${a.getAttribute('type') !== null}/${a.type}`), a;
  }
  function lb(a) {
    const b = gb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute('type'), a;
  }
  function mb(a, b) {
    for (let c = 0, d = a.length; d > c; c++)
      L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
  }
  function nb(a, b) {
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;
    let i;
    let j;
    if (b.nodeType === 1) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function ob(a, b) {
    const c = a.getElementsByTagName
      ? a.getElementsByTagName(b || '*')
      : a.querySelectorAll
      ? a.querySelectorAll(b || '*')
      : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pb(a, b) {
    const c = b.nodeName.toLowerCase();
    c === 'input' && T.test(a.type)
      ? (b.checked = a.checked)
      : (c === 'input' || c === 'textarea') &&
        (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      const h = a.cloneNode(!0);
      const i = n.contains(a.ownerDocument, a);
      if (
        !(
          k.noCloneChecked ||
          (a.nodeType !== 1 && a.nodeType !== 11) ||
          n.isXMLDoc(a)
        )
      )
        for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
          pb(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
            nb(f[d], g[d]);
        else nb(a, h);
      return (
        (g = ob(h, 'script')), g.length > 0 && mb(g, !i && ob(a, 'script')), h
      );
    },
    buildFragment(a, b, c, d) {
      for (
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length;
        o > m;
        m++
      )
        if (((e = a[m]), e || e === 0))
          if (n.type(e) === 'object') n.merge(l, e.nodeType ? [e] : e);
          else if (cb.test(e)) {
            (f = f || k.appendChild(b.createElement('div'))),
              (g = (bb.exec(e) || ['', ''])[1].toLowerCase()),
              (h = ib[g] || ib._default),
              (f.innerHTML = h[1] + e.replace(ab, '<$1></$2>') + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = '');
          } else l.push(b.createTextNode(e));
      (k.textContent = ''), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || n.inArray(e, d) === -1) &&
          ((i = n.contains(e.ownerDocument, e)),
          (f = ob(k.appendChild(e), 'script')),
          i && mb(f),
          c)
        ) {
          j = 0;
          while ((e = f[j++])) fb.test(e.type || '') && c.push(e);
        }
      return k;
    },
    cleanData(a) {
      for (
        var b, c, d, e, f = n.event.special, g = 0;
        void 0 !== (c = a[g]);
        g++
      ) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    },
  }),
    n.fn.extend({
      text(a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length,
        );
      },
      append() {
        return this.domManip(arguments, function (a) {
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            const b = jb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend() {
        return this.domManip(arguments, function (a) {
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            const b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before() {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after() {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove(a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          (c = d[e]) != null;
          e++
        )
          b || c.nodeType !== 1 || n.cleanData(ob(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && mb(ob(c, 'script')),
              c.parentNode.removeChild(c));
        return this;
      },
      empty() {
        for (var a, b = 0; (a = this[b]) != null; b++)
          a.nodeType === 1 && (n.cleanData(ob(a, !1)), (a.textContent = ''));
        return this;
      },
      clone(a, b) {
        return (
          (a = a == null ? !1 : a),
          (b = b == null ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html(a) {
        return J(
          this,
          function (a) {
            let b = this[0] || {};
            let c = 0;
            const d = this.length;
            if (void 0 === a && b.nodeType === 1) return b.innerHTML;
            if (
              typeof a === 'string' &&
              !db.test(a) &&
              !ib[(bb.exec(a) || ['', ''])[1].toLowerCase()]
            ) {
              a = a.replace(ab, '<$1></$2>');
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    b.nodeType === 1 &&
                      (n.cleanData(ob(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length,
        );
      },
      replaceWith() {
        let a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(ob(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach(a) {
        return this.remove(a, !0);
      },
      domManip(a, b) {
        a = e.apply([], a);
        let c;
        let d;
        let f;
        let g;
        let h;
        let i;
        let j = 0;
        const l = this.length;
        const m = this;
        const o = l - 1;
        const p = a[0];
        const q = n.isFunction(p);
        if (
          q ||
          (l > 1 && typeof p === 'string' && !k.checkClone && eb.test(p))
        )
          return this.each(function (c) {
            const d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          c.childNodes.length === 1 && (c = d),
          d)
        ) {
          for (f = n.map(ob(c, 'script'), kb), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, ob(h, 'script'))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fb.test(h.type || '') &&
                  !L.access(h, 'globalEval') &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(h.textContent.replace(hb, '')));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      (a, b) => {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      },
    );
  let qb;
  const rb = {};
  function sb(b, c) {
    let d;
    const e = n(c.createElement(b)).appendTo(c.body);
    const f =
      a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
        ? d.display
        : n.css(e[0], 'display');
    return e.detach(), f;
  }
  function tb(a) {
    let b = l;
    let c = rb[a];
    return (
      c ||
        ((c = sb(a, b)),
        (c !== 'none' && c) ||
          ((qb = (
            qb || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qb[0].contentDocument),
          b.write(),
          b.close(),
          (c = sb(a, b)),
          qb.detach()),
        (rb[a] = c)),
      c
    );
  }
  const ub = /^margin/;
  const vb = new RegExp(`^(${Q})(?!px)[a-z%]+$`, 'i');
  const wb = function (a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  };
  function xb(a, b, c) {
    let d;
    let e;
    let f;
    let g;
    const h = a.style;
    return (
      (c = c || wb(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        (g !== '' || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        vb.test(g) &&
          ub.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? `${g}` : g
    );
  }
  function yb(a, b) {
    return {
      get() {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    let b;
    let c;
    const d = l.documentElement;
    const e = l.createElement('div');
    const f = l.createElement('div');
    if (f.style) {
      (f.style.backgroundClip = 'content-box'),
        (f.cloneNode(!0).style.backgroundClip = ''),
        (k.clearCloneStyle = f.style.backgroundClip === 'content-box'),
        (e.style.cssText =
          'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
          (f.innerHTML = ''),
          d.appendChild(e);
        const g = a.getComputedStyle(f, null);
        (b = g.top !== '1%'), (c = g.width === '4px'), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition() {
            return g(), b;
          },
          boxSizingReliable() {
            return c == null && g(), c;
          },
          reliableMarginRight() {
            let b;
            const c = f.appendChild(l.createElement('div'));
            return (
              (c.style.cssText = f.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
              (c.style.marginRight = c.style.width = '0'),
              (f.style.width = '1px'),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              b
            );
          },
        });
    }
  })(),
    (n.swap = function (a, b, c, d) {
      let e;
      let f;
      const g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  const zb = /^(none|table(?!-c[ea]).+)/;
  const Ab = new RegExp(`^(${Q})(.*)$`, 'i');
  const Bb = new RegExp(`^([+-])=(${Q})`, 'i');
  const Cb = { position: 'absolute', visibility: 'hidden', display: 'block' };
  const Db = { letterSpacing: '0', fontWeight: '400' };
  const Eb = ['Webkit', 'O', 'Moz', 'ms'];
  function Fb(a, b) {
    if (b in a) return b;
    const c = b[0].toUpperCase() + b.slice(1);
    const d = b;
    let e = Eb.length;
    while (e--) if (((b = Eb[e] + c), b in a)) return b;
    return d;
  }
  function Gb(a, b, c) {
    const d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
  }
  function Hb(a, b, c, d, e) {
    for (
      var f = c === (d ? 'border' : 'content') ? 4 : b === 'width' ? 1 : 0,
        g = 0;
      f < 4;
      f += 2
    )
      c === 'margin' && (g += n.css(a, c + R[f], !0, e)),
        d
          ? (c === 'content' && (g -= n.css(a, `padding${R[f]}`, !0, e)),
            c !== 'margin' && (g -= n.css(a, `border${R[f]}Width`, !0, e)))
          : ((g += n.css(a, `padding${R[f]}`, !0, e)),
            c !== 'padding' && (g += n.css(a, `border${R[f]}Width`, !0, e)));
    return g;
  }
  function Ib(a, b, c) {
    let d = !0;
    let e = b === 'width' ? a.offsetWidth : a.offsetHeight;
    const f = wb(a);
    const g = n.css(a, 'boxSizing', !1, f) === 'border-box';
    if (e <= 0 || e == null) {
      if (
        ((e = xb(a, b, f)),
        (e < 0 || e == null) && (e = a.style[b]),
        vb.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return `${e + Hb(a, b, c || (g ? 'border' : 'content'), d, f)}px`;
  }
  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, 'olddisplay')),
          (c = d.style.display),
          b
            ? (f[g] || c !== 'none' || (d.style.display = ''),
              d.style.display === '' &&
                S(d) &&
                (f[g] = L.access(d, 'olddisplay', tb(d.nodeName))))
            : ((e = S(d)),
              (c === 'none' && e) ||
                L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && d.style.display !== 'none' && d.style.display !== '') ||
            (d.style.display = b ? f[g] || '' : 'none'));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get(a, b) {
          if (b) {
            const c = xb(a, 'opacity');
            return c === '' ? '1' : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: 'cssFloat' },
    style(a, b, c, d) {
      if (a && a.nodeType !== 3 && a.nodeType !== 8 && a.style) {
        let e;
        let f;
        let g;
        const h = n.camelCase(b);
        const i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              f === 'string' &&
                (e = Bb.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = 'number')),
              c != null &&
                c === c &&
                (f !== 'number' || n.cssNumber[h] || (c += 'px'),
                k.clearCloneStyle ||
                  c !== '' ||
                  b.indexOf('background') !== 0 ||
                  (i[b] = 'inherit'),
                (g && 'set' in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css(a, b, c, d) {
      let e;
      let f;
      let g;
      const h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && 'get' in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xb(a, b, d)),
        e === 'normal' && b in Db && (e = Db[b]),
        c === '' || c
          ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(['height', 'width'], (a, b) => {
      n.cssHooks[b] = {
        get(a, c, d) {
          return c
            ? zb.test(n.css(a, 'display')) && a.offsetWidth === 0
              ? n.swap(a, Cb, () => Ib(a, b, d))
              : Ib(a, b, d)
            : void 0;
        },
        set(a, c, d) {
          const e = d && wb(a);
          return Gb(
            a,
            c,
            d
              ? Hb(a, b, d, n.css(a, 'boxSizing', !1, e) === 'border-box', e)
              : 0,
          );
        },
      };
    }),
    (n.cssHooks.marginRight = yb(k.reliableMarginRight, (a, b) =>
      b
        ? n.swap(a, { display: 'inline-block' }, xb, [a, 'marginRight'])
        : void 0,
    )),
    n.each({ margin: '', padding: '', border: 'Width' }, (a, b) => {
      (n.cssHooks[a + b] = {
        expand(c) {
          for (
            var d = 0, e = {}, f = typeof c === 'string' ? c.split(' ') : [c];
            d < 4;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }),
    n.fn.extend({
      css(a, b) {
        return J(
          this,
          (a, b, c) => {
            let d;
            let e;
            const f = {};
            let g = 0;
            if (n.isArray(b)) {
              for (d = wb(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1,
        );
      },
      show() {
        return Jb(this, !0);
      },
      hide() {
        return Jb(this);
      },
      toggle(a) {
        return typeof a === 'boolean'
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Kb),
    (Kb.prototype = {
      constructor: Kb,
      init(a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || 'swing'),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? '' : 'px'));
      },
      cur() {
        const a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run(a) {
        let b;
        const c = Kb.propHooks[this.prop];
        return (
          (this.pos = b =
            this.options.duration
              ? n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration,
                )
              : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Kb.propHooks._default.set(this),
          this
        );
      },
    }),
    (Kb.prototype.init.prototype = Kb.prototype),
    (Kb.propHooks = {
      _default: {
        get(a) {
          let b;
          return a.elem[a.prop] == null ||
            (a.elem.style && a.elem.style[a.prop] != null)
            ? ((b = n.css(a.elem, a.prop, '')), b && b !== 'auto' ? b : 0)
            : a.elem[a.prop];
        },
        set(a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (a.elem.style[n.cssProps[a.prop]] != null || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft =
      {
        set(a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear(a) {
        return a;
      },
      swing(a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Kb.prototype.init),
    (n.fx.step = {});
  let Lb;
  let Mb;
  const Nb = /^(?:toggle|show|hide)$/;
  const Ob = new RegExp(`^(?:([+-])=|)(${Q})([a-z%]*)$`, 'i');
  const Pb = /queueHooks$/;
  const Qb = [Vb];
  const Rb = {
    '*': [
      function (a, b) {
        const c = this.createTween(a, b);
        const d = c.cur();
        let e = Ob.exec(b);
        let f = (e && e[3]) || (n.cssNumber[a] ? '' : 'px');
        let g =
          (n.cssNumber[a] || (f !== 'px' && +d)) && Ob.exec(n.css(c.elem, a));
        let h = 1;
        let i = 20;
        if (g && g[3] !== f) {
          (f = f || g[3]), (e = e || []), (g = +d || 1);
          do (h = h || '.5'), (g /= h), n.style(c.elem, a, g + f);
          while (h !== (h = c.cur() / d) && h !== 1 && --i);
        }
        return (
          e &&
            ((g = c.start = +g || +d || 0),
            (c.unit = f),
            (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
          c
        );
      },
    ],
  };
  function Sb() {
    return (
      setTimeout(() => {
        Lb = void 0;
      }),
      (Lb = n.now())
    );
  }
  function Tb(a, b) {
    let c;
    let d = 0;
    const e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = R[d]), (e[`margin${c}`] = e[`padding${c}`] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ub(a, b, c) {
    for (
      var d, e = (Rb[b] || []).concat(Rb['*']), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Vb(a, b, c) {
    let d;
    let e;
    let f;
    let g;
    let h;
    let i;
    let j;
    let k;
    const l = this;
    const m = {};
    const o = a.style;
    let p = a.nodeType && S(a);
    let q = L.get(a, 'fxshow');
    c.queue ||
      ((h = n._queueHooks(a, 'fx')),
      h.unqueued == null &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(() => {
        l.always(() => {
          h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
        });
      })),
      a.nodeType === 1 &&
        ('height' in b || 'width' in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, 'display')),
        (k = j === 'none' ? L.get(a, 'olddisplay') || tb(a.nodeName) : j),
        k === 'inline' &&
          n.css(a, 'float') === 'none' &&
          (o.display = 'inline-block')),
      c.overflow &&
        ((o.overflow = 'hidden'),
        l.always(() => {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Nb.exec(e))) {
        if (
          (delete b[d], (f = f || e === 'toggle'), e === (p ? 'hide' : 'show'))
        ) {
          if (e !== 'show' || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      (j === 'none' ? tb(a.nodeName) : j) === 'inline' && (o.display = j);
    else {
      q ? 'hidden' in q && (p = q.hidden) : (q = L.access(a, 'fxshow', {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(() => {
              n(a).hide();
            }),
        l.done(() => {
          let b;
          L.remove(a, 'fxshow');
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ub(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = d === 'width' || d === 'height' ? 1 : 0)));
    }
  }
  function Wb(a, b) {
    let c;
    let d;
    let e;
    let f;
    let g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && 'expand' in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xb(a, b, c) {
    let d;
    let e;
    let f = 0;
    const g = Qb.length;
    const h = n.Deferred().always(() => {
      delete i.elem;
    });
    var i = function () {
      if (e) return !1;
      for (
        var b = Lb || Sb(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = c / j.duration || 0,
          f = 1 - d,
          g = 0,
          i = j.tweens.length;
        i > g;
        g++
      )
        j.tweens[g].run(f);
      return (
        h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
      );
    };
    var j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, { specialEasing: {} }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: Lb || Sb(),
      duration: c.duration,
      tweens: [],
      createTween(b, c) {
        const d = n.Tween(
          a,
          j.opts,
          b,
          c,
          j.opts.specialEasing[b] || j.opts.easing,
        );
        return j.tweens.push(d), d;
      },
      stop(b) {
        let c = 0;
        const d = b ? j.tweens.length : 0;
        if (e) return this;
        for (e = !0; d > c; c++) j.tweens[c].run(1);
        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      },
    });
    const k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qb[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ub, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xb, {
    tweener(a, b) {
      n.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.split(' '));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Rb[c] = Rb[c] || []), Rb[c].unshift(b);
    },
    prefilter(a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      const d =
        a && typeof a === 'object'
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : typeof d.duration === 'number'
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (d.queue == null || d.queue === !0) && (d.queue = 'fx'),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo(a, b, c, d) {
        return this.filter(S)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate(a, b, c, d) {
        const e = n.isEmptyObject(a);
        const f = n.speed(b, c, d);
        const g = function () {
          const b = Xb(this, n.extend({}, a), f);
          (e || L.get(this, 'finish')) && b.stop(!0);
        };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop(a, b, c) {
        const d = function (a) {
          const b = a.stop;
          delete a.stop, b(c);
        };
        return (
          typeof a !== 'string' && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || 'fx', []),
          this.each(function () {
            let b = !0;
            let e = a != null && `${a}queueHooks`;
            const f = n.timers;
            const g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (a != null && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish(a) {
        return (
          a !== !1 && (a = a || 'fx'),
          this.each(function () {
            let b;
            const c = L.get(this);
            const d = c[`${a}queue`];
            const e = c[`${a}queueHooks`];
            const f = n.timers;
            const g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(['toggle', 'show', 'hide'], (a, b) => {
      const c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return a == null || typeof a === 'boolean'
          ? c.apply(this, arguments)
          : this.animate(Tb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Tb('show'),
        slideUp: Tb('hide'),
        slideToggle: Tb('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      (a, b) => {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      },
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      let a;
      let b = 0;
      const c = n.timers;
      for (Lb = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Lb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Mb), (Mb = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || 'fx'),
        this.queue(b, (b, c) => {
          const d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      let a = l.createElement('input');
      const b = l.createElement('select');
      const c = b.appendChild(l.createElement('option'));
      (a.type = 'checkbox'),
        (k.checkOn = a.value !== ''),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement('input')),
        (a.value = 't'),
        (a.type = 'radio'),
        (k.radioValue = a.value === 't');
    })();
  let Yb;
  let Zb;
  const $b = n.expr.attrHandle;
  n.fn.extend({
    attr(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr(a, b, c) {
        let d;
        let e;
        const f = a.nodeType;
        if (a && f !== 3 && f !== 8 && f !== 2)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((f === 1 && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb))),
              void 0 === c
                ? d && 'get' in d && (e = d.get(a, b)) !== null
                  ? e
                  : ((e = n.find.attr(a, b)), e == null ? void 0 : e)
                : c !== null
                ? d && 'set' in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, `${c}`), c)
                : void n.removeAttr(a, b));
      },
      removeAttr(a, b) {
        let c;
        let d;
        let e = 0;
        const f = b && b.match(E);
        if (f && a.nodeType === 1)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set(a, b) {
            if (!k.radioValue && b === 'radio' && n.nodeName(a, 'input')) {
              const c = a.value;
              return a.setAttribute('type', b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Zb = {
      set(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), (a, b) => {
      const c = $b[b] || n.find.attr;
      $b[b] = function (a, b, d) {
        let e;
        let f;
        return (
          d ||
            ((f = $b[b]),
            ($b[b] = e),
            (e = c(a, b, d) != null ? b.toLowerCase() : null),
            ($b[b] = f)),
          e
        );
      };
    });
  const _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: 'htmlFor', class: 'className' },
      prop(a, b, c) {
        let d;
        let e;
        let f;
        const g = a.nodeType;
        if (a && g !== 3 && g !== 8 && g !== 2)
          return (
            (f = g !== 1 || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && 'get' in e && (d = e.get(a, b)) !== null
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get(a) {
            return a.hasAttribute('tabindex') || _b.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get(a) {
          const b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      },
    );
  const ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      const h = typeof a === 'string' && a;
      let i = 0;
      const j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || '').match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              c.nodeType === 1 &&
              (c.className ? ` ${c.className} `.replace(ac, ' ') : ' ')))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(` ${e} `) < 0 && (d += `${e} `);
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      const h = arguments.length === 0 || (typeof a === 'string' && a);
      let i = 0;
      const j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || '').match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              c.nodeType === 1 &&
              (c.className ? ` ${c.className} `.replace(ac, ' ') : '')))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(` ${e} `) >= 0) d = d.replace(` ${e} `, ' ');
            (g = a ? n.trim(d) : ''), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass(a, b) {
      const c = typeof a;
      return typeof b === 'boolean' && c === 'string'
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if (c === 'string') {
                    let b;
                    let d = 0;
                    const e = n(this);
                    const f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || c === 'boolean') &&
                      (this.className &&
                        L.set(this, '__className__', this.className),
                      (this.className =
                        this.className || a === !1
                          ? ''
                          : L.get(this, '__className__') || ''));
                },
          );
    },
    hasClass(a) {
      for (let b = ` ${a} `, c = 0, d = this.length; d > c; c++)
        if (
          this[c].nodeType === 1 &&
          ` ${this[c].className} `.replace(ac, ' ').indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  const bc = /\r/g;
  n.fn.extend({
    val(a) {
      let b;
      let c;
      let d;
      const e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              let e;
              this.nodeType === 1 &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                e == null
                  ? (e = '')
                  : typeof e === 'number'
                  ? (e += '')
                  : n.isArray(e) &&
                    (e = n.map(e, (a) => (a == null ? '' : `${a}`))),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && 'set' in b && void 0 !== b.set(this, e, 'value')) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && 'get' in b && void 0 !== (c = b.get(e, 'value'))
              ? c
              : ((c = e.value),
                typeof c === 'string' ? c.replace(bc, '') : c == null ? '' : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get(a) {
            const b = n.find.attr(a, 'value');
            return b != null ? b : n.trim(n.text(a));
          },
        },
        select: {
          get(a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = a.type === 'select-one' || e < 0,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = e < 0 ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : c.getAttribute('disabled') !== null) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, 'optgroup'))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set(a, b) {
            let c;
            let d;
            const e = a.options;
            const f = n.makeArray(b);
            let g = e.length;
            while (g--)
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(['radio', 'checkbox'], function () {
      (n.valHooks[this] = {
        set(a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return a.getAttribute('value') === null ? 'on' : a.value;
          });
    }),
    n.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' ',
      ),
      (a, b) => {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      },
    ),
    n.fn.extend({
      hover(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind(a, b) {
        return this.off(a, null, b);
      },
      delegate(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate(a, b, c) {
        return arguments.length === 1
          ? this.off(a, '**')
          : this.off(b, a || '**', c);
      },
    });
  let cc = n.now();
  const dc = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(`${a}`);
  }),
    (n.parseXML = function (a) {
      let b;
      let c;
      if (!a || typeof a !== 'string') return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, 'text/xml'));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName('parsererror').length) &&
          n.error(`Invalid XML: ${a}`),
        b
      );
    });
  let ec;
  let fc;
  const gc = /#.*$/;
  const hc = /([?&])_=[^&]*/;
  const ic = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  const jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
  const kc = /^(?:GET|HEAD)$/;
  const lc = /^\/\//;
  const mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
  const nc = {};
  const oc = {};
  const pc = '*/'.concat('*');
  try {
    fc = location.href;
  } catch (qc) {
    (fc = l.createElement('a')), (fc.href = ''), (fc = fc.href);
  }
  ec = mc.exec(fc.toLowerCase()) || [];
  function rc(a) {
    return function (b, c) {
      typeof b !== 'string' && ((c = b), (b = '*'));
      let d;
      let e = 0;
      const f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          d[0] === '+'
            ? ((d = d.slice(1) || '*'), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function sc(a, b, c, d) {
    const e = {};
    const f = a === oc;
    function g(h) {
      let i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], (a, h) => {
          const j = h(b, c, d);
          return typeof j !== 'string' || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e['*'] && g('*'));
  }
  function tc(a, b) {
    let c;
    let d;
    const e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function uc(a, b, c) {
    let d;
    let e;
    let f;
    let g;
    const h = a.contents;
    const i = a.dataTypes;
    while (i[0] === '*')
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[`${e} ${i[0]}`]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function vc(a, b, c, d) {
    let e;
    let f;
    let g;
    let h;
    let i;
    const j = {};
    const k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if (f === '*') f = i;
        else if (i !== '*' && i !== f) {
          if (((g = j[`${i} ${f}`] || j[`* ${f}`]), !g))
            for (e in j)
              if (
                ((h = e.split(' ')),
                h[1] === f && (g = j[`${i} ${h[0]}`] || j[`* ${h[0]}`]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a.throws) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: 'parsererror',
                  error: g ? l : `No conversion from ${i} to ${f}`,
                };
              }
        }
    return { state: 'success', data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: fc,
      type: 'GET',
      isLocal: jc.test(ec[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': pc,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON',
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': n.parseJSON,
        'text xml': n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup(a, b) {
      return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
    },
    ajaxPrefilter: rc(nc),
    ajaxTransport: rc(oc),
    ajax(a, b) {
      typeof a === 'object' && ((b = a), (a = void 0)), (b = b || {});
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      const k = n.ajaxSetup({}, b);
      const l = k.context || k;
      const m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event;
      const o = n.Deferred();
      const p = n.Callbacks('once memory');
      let q = k.statusCode || {};
      const r = {};
      const s = {};
      let t = 0;
      let u = 'canceled';
      var v = {
        readyState: 0,
        getResponseHeader(a) {
          let b;
          if (t === 2) {
            if (!f) {
              f = {};
              while ((b = ic.exec(e))) f[b[1].toLowerCase()] = b[2];
            }
            b = f[a.toLowerCase()];
          }
          return b == null ? null : b;
        },
        getAllResponseHeaders() {
          return t === 2 ? e : null;
        },
        setRequestHeader(a, b) {
          const c = a.toLowerCase();
          return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
        },
        overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        },
        statusCode(a) {
          let b;
          if (a)
            if (t < 2) for (b in a) q[b] = [q[b], a[b]];
            else v.always(a[v.status]);
          return this;
        },
        abort(a) {
          const b = a || u;
          return c && c.abort(b), x(0, b), this;
        },
      };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = `${a || k.url || fc}`
          .replace(gc, '')
          .replace(lc, `${ec[1]}//`)),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || '*')
          .toLowerCase()
          .match(E) || ['']),
        k.crossDomain == null &&
          ((h = mc.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === ec[1] &&
              h[2] === ec[2] &&
              (h[3] || (h[1] === 'http:' ? '80' : '443')) ===
                (ec[3] || (ec[1] === 'http:' ? '80' : '443')))
          ))),
        k.data &&
          k.processData &&
          typeof k.data !== 'string' &&
          (k.data = n.param(k.data, k.traditional)),
        sc(nc, k, b, v),
        t === 2)
      )
        return v;
      (i = k.global),
        i && n.active++ === 0 && n.event.trigger('ajaxStart'),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !kc.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data &&
            ((d = k.url += (dc.test(d) ? '&' : '?') + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = hc.test(d)
              ? d.replace(hc, `$1_=${cc++}`)
              : `${d + (dc.test(d) ? '&' : '?')}_=${cc++}`)),
        k.ifModified &&
          (n.lastModified[d] &&
            v.setRequestHeader('If-Modified-Since', n.lastModified[d]),
          n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader('Content-Type', k.contentType),
        v.setRequestHeader(
          'Accept',
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                (k.dataTypes[0] !== '*' ? `, ${pc}; q=0.01` : '')
            : k.accepts['*'],
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || t === 2))
        return v.abort();
      u = 'abort';
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = sc(oc, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger('ajaxSend', [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(() => {
              v.abort('timeout');
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(t < 2)) throw w;
          x(-1, w);
        }
      } else x(-1, 'No Transport');
      function x(a, b, f, h) {
        let j;
        let r;
        let s;
        let u;
        let w;
        let x = b;
        t !== 2 &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ''),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && a < 300) || a === 304),
          f && (u = uc(k, v, f)),
          (u = vc(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader('Last-Modified')),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader('etag')),
                w && (n.etag[d] = w)),
              a === 204 || k.type === 'HEAD'
                ? (x = 'nocontent')
                : a === 304
                ? (x = 'notmodified')
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = 'error'), a < 0 && (a = 0))),
          (v.status = a),
          (v.statusText = `${b || x}`),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i &&
            (m.trigger('ajaxComplete', [v, k]),
            --n.active || n.event.trigger('ajaxStop')));
      }
      return v;
    },
    getJSON(a, b, c) {
      return n.get(a, b, c, 'json');
    },
    getScript(a, b) {
      return n.get(a, void 0, b, 'script');
    },
  }),
    n.each(['get', 'post'], (a, b) => {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    n.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      (a, b) => {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      },
    ),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll(a) {
        let b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  let a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner(a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                const b = n(this);
                const c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              },
        );
      },
      wrap(a) {
        const b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap() {
        return this.parent()
          .each(function () {
            n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  const wc = /%20/g;
  const xc = /\[\]$/;
  const yc = /\r?\n/g;
  const zc = /^(?:submit|button|image|reset|file)$/i;
  const Ac = /^(?:input|select|textarea|keygen)/i;
  function Bc(a, b, c, d) {
    let e;
    if (n.isArray(b))
      n.each(b, (b, e) => {
        c || xc.test(a)
          ? d(a, e)
          : Bc(`${a}[${typeof e === 'object' ? b : ''}]`, e, c, d);
      });
    else if (c || n.type(b) !== 'object') d(a, b);
    else for (e in b) Bc(`${a}[${e}]`, b[e], c, d);
  }
  (n.param = function (a, b) {
    let c;
    const d = [];
    const e = function (a, b) {
      (b = n.isFunction(b) ? b() : b == null ? '' : b),
        (d[d.length] = `${encodeURIComponent(a)}=${encodeURIComponent(b)}`);
    };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Bc(c, a[c], b, e);
    return d.join('&').replace(wc, '+');
  }),
    n.fn.extend({
      serialize() {
        return n.param(this.serializeArray());
      },
      serializeArray() {
        return this.map(function () {
          const a = n.prop(this, 'elements');
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            const a = this.type;
            return (
              this.name &&
              !n(this).is(':disabled') &&
              Ac.test(this.nodeName) &&
              !zc.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            const c = n(this).val();
            return c == null
              ? null
              : n.isArray(c)
              ? n.map(c, (a) => ({
                  name: b.name,
                  value: a.replace(yc, '\r\n'),
                }))
              : { name: b.name, value: c.replace(yc, '\r\n') };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  let Cc = 0;
  const Dc = {};
  const Ec = { 0: 200, 1223: 204 };
  let Fc = n.ajaxSettings.xhr();
  a.ActiveXObject &&
    n(a).on('unload', () => {
      for (const a in Dc) Dc[a]();
    }),
    (k.cors = !!Fc && 'withCredentials' in Fc),
    (k.ajax = Fc = !!Fc),
    n.ajaxTransport((a) => {
      let b;
      return k.cors || (Fc && !a.crossDomain)
        ? {
            send(c, d) {
              let e;
              const f = a.xhr();
              const g = ++Cc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c['X-Requested-With'] ||
                  (c['X-Requested-With'] = 'XMLHttpRequest');
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Dc[g],
                    (b = f.onload = f.onerror = null),
                    a === 'abort'
                      ? f.abort()
                      : a === 'error'
                      ? d(f.status, f.statusText)
                      : d(
                          Ec[f.status] || f.status,
                          f.statusText,
                          typeof f.responseText === 'string'
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders(),
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b('error')),
                (b = Dc[g] = b('abort'));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort() {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        'text script': function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter('script', (a) => {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
    }),
    n.ajaxTransport('script', (a) => {
      if (a.crossDomain) {
        let b;
        let c;
        return {
          send(d, e) {
            (b = n('<script>')
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                'load error',
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e(a.type === 'error' ? 404 : 200, a.type);
                }),
              )),
              l.head.appendChild(b[0]);
          },
          abort() {
            c && c();
          },
        };
      }
    });
  const Gc = [];
  const Hc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback() {
      const a = Gc.pop() || `${n.expando}_${cc++}`;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter('json jsonp', (b, c, d) => {
      let e;
      let f;
      let g;
      const h =
        b.jsonp !== !1 &&
        (Hc.test(b.url)
          ? 'url'
          : typeof b.data === 'string' &&
            !(b.contentType || '').indexOf(
              'application/x-www-form-urlencoded',
            ) &&
            Hc.test(b.data) &&
            'data');
      return h || b.dataTypes[0] === 'jsonp'
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Hc, `$1${e}`))
            : b.jsonp !== !1 &&
              (b.url += `${(dc.test(b.url) ? '&' : '?') + b.jsonp}=${e}`),
          (b.converters['script json'] = function () {
            return g || n.error(`${e} was not called`), g[0];
          }),
          (b.dataTypes[0] = 'json'),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(() => {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Gc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          'script')
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || typeof a !== 'string') return null;
      typeof b === 'boolean' && ((c = b), (b = !1)), (b = b || l);
      let d = v.exec(a);
      const e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  const Ic = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if (typeof a !== 'string' && Ic) return Ic.apply(this, arguments);
    let d;
    let e;
    let f;
    const g = this;
    const h = a.indexOf(' ');
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && typeof b === 'object' && (e = 'POST'),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: 'html', data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              ((a, b) => {
                g.each(c, f || [a.responseText, b, a]);
              }),
          ),
      this
    );
  }),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, (b) => a === b.elem).length;
    });
  const Jc = a.document.documentElement;
  function Kc(a) {
    return n.isWindow(a) ? a : a.nodeType === 9 && a.defaultView;
  }
  (n.offset = {
    setOffset(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      const k = n.css(a, 'position');
      const l = n(a);
      const m = {};
      k === 'static' && (a.style.position = 'relative'),
        (h = l.offset()),
        (f = n.css(a, 'top')),
        (i = n.css(a, 'left')),
        (j =
          (k === 'absolute' || k === 'fixed') && (f + i).indexOf('auto') > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        b.top != null && (m.top = b.top - h.top + g),
        b.left != null && (m.left = b.left - h.left + e),
        'using' in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset(a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        let b;
        let c;
        const d = this[0];
        let e = { top: 0, left: 0 };
        const f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Kc(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position() {
        if (this[0]) {
          let a;
          let b;
          const c = this[0];
          let d = { top: 0, left: 0 };
          return (
            n.css(c, 'position') === 'fixed'
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], 'html') || (d = a.offset()),
                (d.top += n.css(a[0], 'borderTopWidth', !0)),
                (d.left += n.css(a[0], 'borderLeftWidth', !0))),
            {
              top: b.top - d.top - n.css(c, 'marginTop', !0),
              left: b.left - d.left - n.css(c, 'marginLeft', !0),
            }
          );
        }
      },
      offsetParent() {
        return this.map(function () {
          let a = this.offsetParent || Jc;
          while (
            a &&
            !n.nodeName(a, 'html') &&
            n.css(a, 'position') === 'static'
          )
            a = a.offsetParent;
          return a || Jc;
        });
      },
    }),
    n.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, (b, c) => {
      const d = c === 'pageYOffset';
      n.fn[b] = function (e) {
        return J(
          this,
          (b, e, f) => {
            const g = Kc(b);
            return void 0 === f
              ? g
                ? g[c]
                : b[e]
              : void (g
                  ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                  : (b[e] = f));
          },
          b,
          e,
          arguments.length,
          null,
        );
      };
    }),
    n.each(['top', 'left'], (a, b) => {
      n.cssHooks[b] = yb(k.pixelPosition, (a, c) =>
        c
          ? ((c = xb(a, b)), vb.test(c) ? `${n(a).position()[b]}px` : c)
          : void 0,
      );
    }),
    n.each({ Height: 'height', Width: 'width' }, (a, b) => {
      n.each({ padding: `inner${a}`, content: b, '': `outer${a}` }, (c, d) => {
        n.fn[d] = function (d, e) {
          const f = arguments.length && (c || typeof d !== 'boolean');
          const g = c || (d === !0 || e === !0 ? 'margin' : 'border');
          return J(
            this,
            (b, c, d) => {
              let e;
              return n.isWindow(b)
                ? b.document.documentElement[`client${a}`]
                : b.nodeType === 9
                ? ((e = b.documentElement),
                  Math.max(
                    b.body[`scroll${a}`],
                    e[`scroll${a}`],
                    b.body[`offset${a}`],
                    e[`offset${a}`],
                    e[`client${a}`],
                  ))
                : void 0 === d
                ? n.css(b, c, g)
                : n.style(b, c, d, g);
            },
            b,
            f ? d : void 0,
            f,
            null,
          );
        };
      });
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    typeof define === 'function' && define.amd && define('jquery', [], () => n);
  const Lc = a.jQuery;
  const Mc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});
