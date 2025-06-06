import {
    b as h,
    T as Se,
    h as W,
    ae as on,
    tm as sr,
    kG as ar,
    tn as or,
    W as cr,
    b9 as lr,
    M as dt,
    R as ut,
    to as dr,
    j as o,
    l as u,
    tp as ur,
    g as C,
    O as ht,
    Q as S,
    tq as hr,
    aS as Le,
    aM as fr,
    aV as cn,
    hZ as Pe,
    J as ln,
    a0 as dn,
    tr as pr,
    ts as mr,
    G as Me,
    bP as gr,
    hT as vr,
    Z as _r,
    hv as br,
    B as yr,
    F as Ir,
    H as wr,
    tt as Er,
    b3 as Cr,
    ah as Sr,
    e as Tr,
    tu as kr,
    tv as xr,
    di as Nr,
    L as Z,
    bH as Ar,
    k as un,
    aP as ke,
    kX as Rr,
    dH as Or,
    w as Dr,
    bw as Lr,
    bD as Pr,
    tw as Mr,
    bG as Ur,
    aJ as Fr,
    a8 as Br
}
from "./accountApi-b62160fd.js";
import {
    _ as Hr,
    a as Vr,
    b as jr,
    T as Nt,
    u as $r,
    c as be,
    g as hn,
    d as ze,
    B as zr,
    e as ft,
    f as rt,
    L as Ue,
    S as pt,
    h as he,
    s as Wr,
    i as Gr,
    F as fn,
    j as qr,
    k as Kr,
    l as pn,
    m as Jr,
    n as mn,
    o as Zr,
    p as Yr,
    q as At,
    r as Xr,
    A as Qr,
    C as ei,
    t as ti,
    v as ni
}
from "./main-c7d3d472.js";
import {
    F as xe,
    I as Ne,
    p as Rt,
    j as ri,
    a as ii,
    B as K,
    S as si
}
from "./constants-e7bab7ad.js";
import "./spark-md5-1b1bcc8c.js";
import "./_commonjs-dynamic-modules-5cb9de4b.js";
(function () {
    try {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
        e = new Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "09659f3d-7a02-4ffd-abba-a887963a3582", n._sentryDebugIdIdentifier = "sentry-dbid-09659f3d-7a02-4ffd-abba-a887963a3582")
    } catch {}
})();
function ai(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function mt(n, e) {
    var t = function (s) {
        return e && h.isValidElement(s) ? e(s) : s
    },
    r = Object.create(null);
    return n && h.Children.map(n, function (i) {
        return i
    }).forEach(function (i) {
        r[i.key] = t(i)
    }),
    r
}
function oi(n, e) {
    n = n || {},
    e = e || {};
    function t(f) {
        return f in e ? e[f] : n[f]
    }
    var r = Object.create(null),
    i = [];
    for (var s in n)
        s in e ? i.length && (r[s] = i, i = []) : i.push(s);
    var a,
    c = {};
    for (var l in e) {
        if (r[l])
            for (a = 0; a < r[l].length; a++) {
                var d = r[l][a];
                c[r[l][a]] = t(d)
            }
        c[l] = t(l)
    }
    for (a = 0; a < i.length; a++)
        c[i[a]] = t(i[a]);
    return c
}
function Y(n, e, t) {
    return t[e] != null ? t[e] : n.props[e]
}
function ci(n, e) {
    return mt(n.children, function (t) {
        return h.cloneElement(t, {
            onExited: e.bind(null, t),
            in: !0,
            appear: Y(t, "appear", n),
            enter: Y(t, "enter", n),
            exit: Y(t, "exit", n)
        })
    })
}
function li(n, e, t) {
    var r = mt(n.children),
    i = oi(e, r);
    return Object.keys(i).forEach(function (s) {
        var a = i[s];
        if (h.isValidElement(a)) {
            var c = s in e,
            l = s in r,
            d = e[s],
            f = h.isValidElement(d) && !d.props.in;
            l && (!c || f) ? i[s] = h.cloneElement(a, {
                onExited: t.bind(null, a),
                in: !0,
                exit: Y(a, "exit", n),
                enter: Y(a, "enter", n)
            }) : !l && c && !f ? i[s] = h.cloneElement(a, {
                in: !1
            }) : l && c && h.isValidElement(d) && (i[s] = h.cloneElement(a, {
                        onExited: t.bind(null, a),
                        in: d.props.in,
                        exit: Y(a, "exit", n),
                        enter: Y(a, "enter", n)
                    }))
        }
    }),
    i
}
var di = Object.values || function (n) {
    return Object.keys(n).map(function (e) {
        return n[e]
    })
}, ui = {
    component: "div",
    childFactory: function (e) {
        return e
    }
}, gt = function (n) {
    Hr(e, n);
    function e(r, i) {
        var s;
        s = n.call(this, r, i) || this;
        var a = s.handleExited.bind(ai(s));
        return s.state = {
            contextValue: {
                isMounting: !0
            },
            handleExited: a,
            firstRender: !0
        },
        s
    }
    var t = e.prototype;
    return t.componentDidMount = function () {
        this.mounted = !0,
        this.setState({
            contextValue: {
                isMounting: !1
            }
        })
    },
    t.componentWillUnmount = function () {
        this.mounted = !1
    },
    e.getDerivedStateFromProps = function (i, s) {
        var a = s.children,
        c = s.handleExited,
        l = s.firstRender;
        return {
            children: l ? ci(i, c) : li(i, a, c),
            firstRender: !1
        }
    },
    t.handleExited = function (i, s) {
        var a = mt(this.props.children);
        i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function (c) {
                var l = Vr({}, c.children);
                return delete l[i.key], {
                    children: l
                }
            }))
    },
    t.render = function () {
        var i = this.props,
        s = i.component,
        a = i.childFactory,
        c = jr(i, ["component", "childFactory"]),
        l = this.state.contextValue,
        d = di(this.state.children).map(a);
        return delete c.appear,
        delete c.enter,
        delete c.exit,
        s === null ? Se.createElement(Nt.Provider, {
            value: l
        }, d) : Se.createElement(Nt.Provider, {
            value: l
        }, Se.createElement(s, c, d))
    },
    e
}
(Se.Component);
gt.propTypes = {};
gt.defaultProps = ui;
const hi = gt, fi = n => h.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...n
}, h.createElement("path", {
        d: "m20 5h-7v-1c0-.26522-.1054-.51957-.2929-.70711-.1875-.18753-.4419-.29289-.7071-.29289s-.5196.10536-.7071.29289c-.1875.18754-.2929.44189-.2929.70711v1h-7c-.26522 0-.51957.10536-.70711.29289-.18753.18754-.29289.44189-.29289.70711s.10536.51957.29289.70711c.18754.18753.44189.29289.70711.29289h11.8821c-.4496 2.99763-1.8278 5.7788-3.9406 7.9523-1.4634-1.5016-2.58179-3.304-3.27744-5.28189-.08768-.25011-.27104-.45519-.50981-.57022-.23877-.11502-.51343-.13057-.76366-.04323-.25023.08733-.45557.27041-.57092.50903-.11534.23861-.13127.51321-.04428.76361.78381 2.2277 2.03908 4.26 3.68011 5.9582-1.69226 1.3349-3.66442 2.2699-5.76899 2.7351-.24073.0529-.45348.1927-.59743.3928-.14395.2-.20897.4462-.18258.6912.02639.2451.14232.4717.32557.6366.18324.1648.42088.2561.66734.2565.07223 0 .14425-.0077.21485-.023 2.50659-.5529 4.84714-1.69 6.83104-3.3189 1.9888 1.6275 4.3325 2.7644 6.8418 3.3189.2583.0544.5277.0044.7493-.1391.2216-.1434.3775-.3687.4337-.6266s.0081-.5276-.1337-.7502c-.1419-.2226-.366-.3802-.6235-.4382-2.1107-.4645-4.0896-1.3987-5.7896-2.7332 2.4448-2.539 4.0111-5.7949 4.469-9.2897h2.1077c.2652 0 .5196-.10536.7071-.29289.1875-.18754.2929-.44189.2929-.70711s-.1054-.51957-.2929-.70711c-.1875-.18753-.4419-.29289-.7071-.29289z"
    })), pi = n => h.createElement("svg", {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...n
    }, h.createElement("path", {
            d: "m18.9703 19.7573-3.6211-14.48484c-.1616-.64947-.536-1.22613-1.0635-1.638-.5276-.41188-1.1778-.63523-1.8471-.63446h-.877c-.6693-.00077-1.3195.2226-1.84707.63447-.52753.41187-.90195.98852-1.06355 1.63799l-3.62109 14.48484c-.06436.2573-.02387.5297.11257.7571.13644.2275.35765.3914.61496.4558.25732.0644.52966.0239.75713-.1126.22746-.1364.3914-.3576.45576-.6149l1.31061-5.2427h7.43838l1.3106 5.2427c.0644.2573.2283.4785.4558.6149.2274.1365.4998.177.7571.1126s.4785-.2283.6149-.4558c.1365-.2274.177-.4998.1126-.7571zm-10.18938-6.7573 1.81048-7.24219c.0538-.21658.1785-.40891.3544-.54627s.3927-.21184.6158-.21154h.877c.2232-.0003.44.07418.6159.21154.1758.13736.3006.32969.3543.54627l1.8105 7.24219z"
        })), mi = n => h.createElement("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...n
    }, h.createElement("g", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2
        }, h.createElement("path", {
                d: "m22 2-11 11"
            }), h.createElement("path", {
                d: "m22 2-7 20-4-9-9-4z"
            }))), gi = n => h.createElement("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...n
    }, h.createElement("path", {
            d: "m22.6025 10.004c-.0417-.23067-.163-.43933-.3428-.58962-.1798-.15028-.4067-.23264-.6411-.2327h-9.4184c-.1313-.00003-.2614.02581-.3827.07606-.1213.05024-.2316.1239-.3245.21676-.0928.09287-.1665.20312-.2167.32446-.0503.12134-.0761.25144-.0761.38274v3.8681c0 .1314.0258.2614.0761.3828.0502.1213.1239.2316.2167.3244.0929.0929.2032.1666.3245.2168s.2514.0761.3827.076h3.9624c-.2823.4766-.6694.8827-1.1318 1.1875-.8452.5359-1.8302.8091-2.8306.7852-1.0375-.0119-2.0449-.3504-2.879-.9676-.8341-.6171-1.45247-1.4815-1.76722-2.4702l-.00029-.0017c-.35027-1.0266-.35027-2.1403 0-3.167l.00024-.0016c.31498-.9885.93343-1.85261 1.76752-2.46957.83405-.61696 1.84135-.9554 2.87875-.96725.5764-.01323 1.1498.08754 1.6871.29652.5374.20899 1.0282.52206 1.4442.92125.189.18056.4411.28002.7024.2771.2614-.00292.5112-.10798.6961-.29271l2.8681-2.86818c.095-.09489.17-.20797.2203-.33248.0503-.1245.0751-.25787.0727-.39215-.0024-.13427-.0318-.26669-.0865-.38934s-.1336-.23301-.2319-.3245c-1.9958-1.87129-4.6367-2.900434-7.3725-2.87305-2.04-.006031-4.04123.55802-5.77785 1.62854-1.73663 1.07053-3.13963 2.60495-4.05079 4.43025l-.00147.00177c-.77248 1.53175-1.17326 3.2239-1.16987 4.9394.00243 1.7149.40291 3.4057 1.16992 4.9395l.00147.0018c.91115 1.8252 2.31415 3.3597 4.05076 4.4302 1.73662 1.0705 3.73783 1.6346 5.77783 1.6285 2.6854.068 5.2951-.8933 7.2947-2.687l.0007-.0004.0008-.0009.0002-.0001.0001-.0001c1.0838-1.0427 1.9376-2.3005 2.5065-3.6927.569-1.3921.8405-2.8879.7971-4.3912.0005-.7456-.0657-1.4898-.1978-2.2236zm-10.4023-7.00396c1.8711-.01821 3.698.56855 5.2085 1.67285l-1.4537 1.45315c-1.1022-.76294-2.4144-1.16429-3.7548-1.14846-1.2238.0063-2.42375.33859-3.47645.96269s-1.92007 1.51744-2.51284 2.5881l-1.06921-.82874-.585-.45368c.80477-1.30215 1.92998-2.3762 3.26816-3.11955 1.33817-.74334 2.84464-1.13114 4.37534-1.12636zm-8.52054 11.90336c-.63932-1.8828-.63932-3.9239 0-5.80668l1.78223 1.38188c-.22787 1.0012-.22787 2.0408 0 3.042zm8.52054 6.0966c-1.5308.0048-3.03722-.383-4.3754-1.1264-1.33819-.7434-2.46341-1.8175-3.26818-3.1196l.37841-.2936 1.27588-.9897c.5925 1.071 1.45979 1.9646 2.51253 2.5889s2.25286.9567 3.47676.9629c1.1457.0135 2.2783-.2438 3.3057-.7508l1.6917 1.3133c-1.4878.9587-3.2279 1.4514-4.9974 1.415zm6.5259-2.7607-.183-.142-1.3774-1.0693c.7222-.7802 1.2077-1.7498 1.3997-2.7955.0269-.1443.0216-.2928-.0154-.4349-.0371-.1421-.1049-.2743-.1988-.3871-.0939-.1129-.2115-.2038-.3444-.2661s-.278-.0946-.4248-.0945h-4.3818v-1.8682h7.5488c.0342.3457.0513.6953.0513 1.0459.0585 2.1888-.6785 4.3246-2.0743 6.0117z"
        })), vi = {
    english: {
        Icon: pi,
        language: "English",
        description: "The tutorial notes will be in English."
    },
    chinese: {
        Icon: fi,
        language: "中文",
        description: "教學筆記將會以中文呈現。"
    }
};
function _i() {
    const n = W(),
    e = on(),
    t = $r(), {
        execute: r
    } = be(async i => {
        n(sr(i)),
        n(ar(!1)),
        t("/");
        const s = await or(),
        a = cr(s, l => {
            l.shouldOpenSidebar = !1,
            l.lastVisitedRoute = {
                page: "map"
            }
        });
        lr.setItem("preferences", a);
        const c = dt(e.getState());
        await ut.update(c, {
            shouldShowValueSlides: !1
        }),
        n(dr())
    });
    return o("div", {
        className: "flex size-full items-center justify-center bg-whiteboard-background",
        children: u("div", {
            className: "flex flex-col items-center pb-6",
            children: [o("p", {
                    className: "mb-6 text-2xl font-bold text-primary",
                    children: "Choose the language for your tutorial notes."
                }), o("div", {
                    className: "flex gap-x-4",
                    children: ur.map(i => {
                        const {
                            Icon: s,
                            language: a,
                            description: c
                        } = vi[i];
                        return u("div", {
                            className: "group/1718139142939 box-border flex h-50 w-62 cursor-pointer flex-col items-center justify-center rounded-xl border border-solid border-border-grid bg-background-secondary hover:border-active hover:shadow-[0_0_0_1px_var(--middle-transparent-blue)]",
                            onClick: async() => {
                                await r(i)
                            },
                            children: [o("div", {
                                    className: "mb-3 box-border size-12 rounded-circle bg-ultra-light-grey p-3 group-hover/1718139142939:bg-middle-transparent-blue",
                                    children: o(s, {
                                        className: "size-6 fill-middle-hard-grey group-hover/1718139142939:fill-active"
                                    })
                                }), o("p", {
                                    className: "mb-2 text-label font-medium text-middle-hard-grey",
                                    children: a
                                }), o("p", {
                                    className: "text-label-mini text-middle-grey",
                                    children: c
                                })]
                        }, i)
                    })
                })]
        })
    })
}
function bi({
    placeholder: n,
    value: e,
    onChange: t,
    className: r
}) {
    return o("input", {
        className: C(r, "rounded-lg bg-ultra-light-grey px-3 py-1 text-center text-label text-primary shadow-[inset_0_0_0_1px_var(--light-grey)] placeholder:text-middle-grey"),
        type: "text",
        value: e,
        placeholder: n,
        onChange: t
    })
}
function Ot({
    children: n,
    checkIsValidLink: e
}) {
    const [t, r] = h.useState(""),
    i = t === "",
    [s, a, c] = ht(!1);
    function l(f) {
        r(f.target.value),
        c()
    }
    const d = h.useCallback(() => {
        if (!i) {
            if (!e(t)) {
                a();
                return
            }
            window.location.assign(hn() + new URL(t).search)
        }
    }, [e, i, t, a]);
    return h.useEffect(() => {
        const f = m => {
            ze(m) && (d(), m.preventDefault())
        };
        return document.addEventListener("keyup", f),
        () => {
            document.removeEventListener("keyup", f)
        }
    }, [d]),
    u(S, {
        children: [n, u("div", {
                className: "fixed bottom-10 left-1/2 -translate-x-1/2",
                children: [u("div", {
                        children: [s && o("p", {
                                className: "mb-4 text-label text-danger",
                                children: "Invalid link."
                            }), u("div", {
                                className: "mb-4 flex items-center",
                                children: [o(bi, {
                                        value: t,
                                        placeholder: "Redirect link...",
                                        onChange: l,
                                        className: "box-border w-[360px] grow"
                                    }), o("div", {
                                        className: "group/1692180043702 ml-2 flex size-6 cursor-pointer items-center justify-center",
                                        onClick: i ? void 0 : d,
                                        children: o(mi, {
                                            className: C("size-4.5", i ? "stroke-light-middle-grey" : "stroke-active", {
                                                "group-active/1692180043702:size-4": !i
                                            })
                                        })
                                    })]
                            })]
                    }), o("p", {
                        className: "text-label text-middle-hard-grey",
                        children: "Paste your redirect link here if not redirected automatically."
                    })]
            })]
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn = function (n) {
    const e = [];
    let t = 0;
    for (let r = 0; r < n.length; r++) {
        let i = n.charCodeAt(r);
        i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128)
    }
    return e
}, yi = function (n) {
    const e = [];
    let t = 0,
    r = 0;
    for (; t < n.length; ) {
        const i = n[t++];
        if (i < 128)
            e[r++] = String.fromCharCode(i);
        else if (i > 191 && i < 224) {
            const s = n[t++];
            e[r++] = String.fromCharCode((i & 31) << 6 | s & 63)
        } else if (i > 239 && i < 365) {
            const s = n[t++],
            a = n[t++],
            c = n[t++],
            l = ((i & 7) << 18 | (s & 63) << 12 | (a & 63) << 6 | c & 63) - 65536;
            e[r++] = String.fromCharCode(55296 + (l >> 10)),
            e[r++] = String.fromCharCode(56320 + (l & 1023))
        } else {
            const s = n[t++],
            a = n[t++];
            e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | a & 63)
        }
    }
    return e.join("")
}, vn = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/="
    },
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_."
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(n, e) {
        if (!Array.isArray(n))
            throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
        for (let i = 0; i < n.length; i += 3) {
            const s = n[i],
            a = i + 1 < n.length,
            c = a ? n[i + 1] : 0,
            l = i + 2 < n.length,
            d = l ? n[i + 2] : 0,
            f = s >> 2,
            m = (s & 3) << 4 | c >> 4;
            let _ = (c & 15) << 2 | d >> 6,
            y = d & 63;
            l || (y = 64, a || (_ = 64)),
            r.push(t[f], t[m], t[_], t[y])
        }
        return r.join("")
    },
    encodeString(n, e) {
        return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(gn(n), e)
    },
    decodeString(n, e) {
        return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : yi(this.decodeStringToByteArray(n, e))
    },
    decodeStringToByteArray(n, e) {
        this.init_();
        const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
        for (let i = 0; i < n.length; ) {
            const s = t[n.charAt(i++)],
            c = i < n.length ? t[n.charAt(i)] : 0;
            ++i;
            const d = i < n.length ? t[n.charAt(i)] : 64;
            ++i;
            const m = i < n.length ? t[n.charAt(i)] : 64;
            if (++i, s == null || c == null || d == null || m == null)
                throw Error();
            const _ = s << 2 | c >> 4;
            if (r.push(_), d !== 64) {
                const y = c << 4 & 240 | d >> 2;
                if (r.push(y), m !== 64) {
                    const T = d << 6 & 192 | m;
                    r.push(T)
                }
            }
        }
        return r
    },
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {},
            this.charToByteMap_ = {},
            this.byteToCharMapWebSafe_ = {},
            this.charToByteMapWebSafe_ = {};
            for (let n = 0; n < this.ENCODED_VALS.length; n++)
                this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n)
        }
    }
}, Ii = function (n) {
    const e = gn(n);
    return vn.encodeByteArray(e, !0)
}, _n = function (n) {
    return Ii(n).replace(/\./g, "")
}, bn = function (n) {
    try {
        return vn.decodeString(n, !0)
    } catch (e) {
        console.error("base64Decode failed: ", e)
    }
    return null
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function wi() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())
}
function Ei() {
    const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof n == "object" && n.id !== void 0
}
function Ci() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function Si() {
    const n = I();
    return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0
}
function Ti() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function ki() {
    return new Promise((n, e) => {
        try {
            let t = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
            i = self.indexedDB.open(r);
            i.onsuccess = () => {
                i.result.close(),
                t || self.indexedDB.deleteDatabase(r),
                n(!0)
            },
            i.onupgradeneeded = () => {
                t = !1
            },
            i.onerror = () => {
                var s;
                e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "")
            }
        } catch (t) {
            e(t)
        }
    })
}
function xi() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ni = () => xi().__FIREBASE_DEFAULTS__, Ai = () => {
    if (typeof process > "u" || typeof process.env > "u")
        return;
    const n = {}
    .__FIREBASE_DEFAULTS__;
    if (n)
        return JSON.parse(n)
}, Ri = () => {
    if (typeof document > "u")
        return;
    let n;
    try {
        n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
        return
    }
    const e = n && bn(n[1]);
    return e && JSON.parse(e)
}, vt = () => {
    try {
        return Ni() || Ai() || Ri()
    } catch (n) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
        return
    }
}, Oi = n => {
    var e,
    t;
    return (t = (e = vt()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n]
}, Di = () => {
    var n;
    return (n = vt()) === null || n === void 0 ? void 0 : n.config
}, yn = n => {
    var e;
    return (e = vt()) === null || e === void 0 ? void 0 : e[`_${n}`]
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li {
    constructor() {
        this.reject = () => {},
        this.resolve = () => {},
        this.promise = new Promise((e, t) => {
            this.resolve = e,
            this.reject = t
        })
    }
    wrapCallback(e) {
        return (t, r) => {
            t ? this.reject(t) : this.resolve(r),
            typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r))
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pi = "FirebaseError";
class G extends Error {
    constructor(e, t, r) {
        super(t),
        this.code = e,
        this.customData = r,
        this.name = Pi,
        Object.setPrototypeOf(this, G.prototype),
        Error.captureStackTrace && Error.captureStackTrace(this, ye.prototype.create)
    }
}
class ye {
    constructor(e, t, r) {
        this.service = e,
        this.serviceName = t,
        this.errors = r
    }
    create(e, ...t) {
        const r = t[0] || {},
        i = `${this.service}/${e}`,
        s = this.errors[e],
        a = s ? Mi(s, r) : "Error",
        c = `${this.serviceName}: ${a} (${i}).`;
        return new G(i, c, r)
    }
}
function Mi(n, e) {
    return n.replace(Ui, (t, r) => {
        const i = e[r];
        return i != null ? String(i) : `<${r}?>`
    })
}
const Ui = /\{\$([^}]+)}/g;
function Fi(n) {
    for (const e in n)
        if (Object.prototype.hasOwnProperty.call(n, e))
            return !1;
    return !0
}
function Fe(n, e) {
    if (n === e)
        return !0;
    const t = Object.keys(n),
    r = Object.keys(e);
    for (const i of t) {
        if (!r.includes(i))
            return !1;
        const s = n[i],
        a = e[i];
        if (Dt(s) && Dt(a)) {
            if (!Fe(s, a))
                return !1
        } else if (s !== a)
            return !1
    }
    for (const i of r)
        if (!t.includes(i))
            return !1;
    return !0
}
function Dt(n) {
    return n !== null && typeof n == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(n) {
    const e = [];
    for (const [t, r] of Object.entries(n))
        Array.isArray(r) ? r.forEach(i => {
            e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i))
        }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
    return e.length ? "&" + e.join("&") : ""
}
function Bi(n, e) {
    const t = new Hi(n, e);
    return t.subscribe.bind(t)
}
class Hi {
    constructor(e, t) {
        this.observers = [],
        this.unsubscribes = [],
        this.observerCount = 0,
        this.task = Promise.resolve(),
        this.finalized = !1,
        this.onNoObservers = t,
        this.task.then(() => {
            e(this)
        }).catch(r => {
            this.error(r)
        })
    }
    next(e) {
        this.forEachObserver(t => {
            t.next(e)
        })
    }
    error(e) {
        this.forEachObserver(t => {
            t.error(e)
        }),
        this.close(e)
    }
    complete() {
        this.forEachObserver(e => {
            e.complete()
        }),
        this.close()
    }
    subscribe(e, t, r) {
        let i;
        if (e === void 0 && t === void 0 && r === void 0)
            throw new Error("Missing Observer.");
        Vi(e, ["next", "error", "complete"]) ? i = e : i = {
            next: e,
            error: t,
            complete: r
        },
        i.next === void 0 && (i.next = Xe),
        i.error === void 0 && (i.error = Xe),
        i.complete === void 0 && (i.complete = Xe);
        const s = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? i.error(this.finalError) : i.complete()
            } catch {}
        }),
        this.observers.push(i),
        s
    }
    unsubscribeOne(e) {
        this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(e) {
        if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++)
                this.sendOne(t, e)
    }
    sendOne(e, t) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[e] !== void 0)
                try {
                    t(this.observers[e])
                } catch (r) {
                    typeof console < "u" && console.error && console.error(r)
                }
        })
    }
    close(e) {
        this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
                this.observers = void 0,
                this.onNoObservers = void 0
            }))
    }
}
function Vi(n, e) {
    if (typeof n != "object" || n === null)
        return !1;
    for (const t of e)
        if (t in n && typeof n[t] == "function")
            return !0;
    return !1
}
function Xe() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(n) {
    return n && n._delegate ? n._delegate : n
}
class ce {
    constructor(e, t, r) {
        this.name = e,
        this.instanceFactory = t,
        this.type = r,
        this.multipleInstances = !1,
        this.serviceProps = {},
        this.instantiationMode = "LAZY",
        this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e,
        this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e,
        this
    }
    setServiceProps(e) {
        return this.serviceProps = e,
        this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e,
        this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji {
    constructor(e, t) {
        this.name = e,
        this.container = t,
        this.component = null,
        this.instances = new Map,
        this.instancesDeferred = new Map,
        this.instancesOptions = new Map,
        this.onInitCallbacks = new Map
    }
    get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
            const r = new Li;
            if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize())
                try {
                    const i = this.getOrInitializeService({
                        instanceIdentifier: t
                    });
                    i && r.resolve(i)
                } catch {}
        }
        return this.instancesDeferred.get(t).promise
    }
    getImmediate(e) {
        var t;
        const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
        i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: r
                })
            } catch (s) {
                if (i)
                    return null;
                throw s
            }
        else {
            if (i)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name)
            throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, !!this.shouldAutoInitialize()) {
            if (zi(e))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: J
                    })
                } catch {}
            for (const [t, r] of this.instancesDeferred.entries()) {
                const i = this.normalizeInstanceIdentifier(t);
                try {
                    const s = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    r.resolve(s)
                } catch {}
            }
        }
    }
    clearInstance(e = J) {
        this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e)
    }
    async delete () {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter(t => "INTERNAL" in t).map(t => t.INTERNAL.delete()), ...e.filter(t => "_delete" in t).map(t => t._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e = J) {
        return this.instances.has(e)
    }
    getOptions(e = J) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        const {
            options: t = {}
        } = e,
        r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: r,
            options: t
        });
        for (const [s, a] of this.instancesDeferred.entries()) {
            const c = this.normalizeInstanceIdentifier(s);
            r === c && a.resolve(i)
        }
        return i
    }
    onInit(e, t) {
        var r;
        const i = this.normalizeInstanceIdentifier(t),
        s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
        s.add(e),
        this.onInitCallbacks.set(i, s);
        const a = this.instances.get(i);
        return a && e(a, i),
        () => {
            s.delete(e)
        }
    }
    invokeOnInitCallbacks(e, t) {
        const r = this.onInitCallbacks.get(t);
        if (r)
            for (const i of r)
                try {
                    i(e, t)
                } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: t = {}
    }) {
        let r = this.instances.get(e);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
                    instanceIdentifier: $i(e),
                    options: t
                }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, e, r)
            } catch {}
        return r || null
    }
    normalizeInstanceIdentifier(e = J) {
        return this.component ? this.component.multipleInstances ? e : J : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function $i(n) {
    return n === J ? void 0 : n
}
function zi(n) {
    return n.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi {
    constructor(e) {
        this.name = e,
        this.providers = new Map
    }
    addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet())
            throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        t.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
        this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e))
            return this.providers.get(e);
        const t = new ji(e, this);
        return this.providers.set(e, t),
        t
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var v;
(function (n) {
    n[n.DEBUG = 0] = "DEBUG",
    n[n.VERBOSE = 1] = "VERBOSE",
    n[n.INFO = 2] = "INFO",
    n[n.WARN = 3] = "WARN",
    n[n.ERROR = 4] = "ERROR",
    n[n.SILENT = 5] = "SILENT"
})(v || (v = {}));
const Gi = {
    debug: v.DEBUG,
    verbose: v.VERBOSE,
    info: v.INFO,
    warn: v.WARN,
    error: v.ERROR,
    silent: v.SILENT
}, qi = v.INFO, Ki = {
    [v.DEBUG]: "log",
    [v.VERBOSE]: "log",
    [v.INFO]: "info",
    [v.WARN]: "warn",
    [v.ERROR]: "error"
}, Ji = (n, e, ...t) => {
    if (e < n.logLevel)
        return;
    const r = new Date().toISOString(),
    i = Ki[e];
    if (i)
        console[i](`[${r}]  ${n.name}:`, ...t);
    else
        throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
};
class In {
    constructor(e) {
        this.name = e,
        this._logLevel = qi,
        this._logHandler = Ji,
        this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in v))
            throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = typeof e == "string" ? Gi[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if (typeof e != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, v.DEBUG, ...e),
        this._logHandler(this, v.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, v.VERBOSE, ...e),
        this._logHandler(this, v.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, v.INFO, ...e),
        this._logHandler(this, v.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, v.WARN, ...e),
        this._logHandler(this, v.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, v.ERROR, ...e),
        this._logHandler(this, v.ERROR, ...e)
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(t => {
            if (Yi(t)) {
                const r = t.getImmediate();
                return `${r.library}/${r.version}`
            } else
                return null
        }).filter(t => t).join(" ")
    }
}
function Yi(n) {
    const e = n.getComponent();
    return (e == null ? void 0 : e.type) === "VERSION"
}
const it = "@firebase/app", Lt = "0.9.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee = new In("@firebase/app"), Xi = "@firebase/app-compat", Qi = "@firebase/analytics-compat", es = "@firebase/analytics", ts = "@firebase/app-check-compat", ns = "@firebase/app-check", rs = "@firebase/auth", is = "@firebase/auth-compat", ss = "@firebase/database", as = "@firebase/database-compat", os = "@firebase/functions", cs = "@firebase/functions-compat", ls = "@firebase/installations", ds = "@firebase/installations-compat", us = "@firebase/messaging", hs = "@firebase/messaging-compat", fs = "@firebase/performance", ps = "@firebase/performance-compat", ms = "@firebase/remote-config", gs = "@firebase/remote-config-compat", vs = "@firebase/storage", _s = "@firebase/storage-compat", bs = "@firebase/firestore", ys = "@firebase/firestore-compat", Is = "firebase", ws = "9.15.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const st = "[DEFAULT]", Es = {
    [it]: "fire-core",
    [Xi]: "fire-core-compat",
    [es]: "fire-analytics",
    [Qi]: "fire-analytics-compat",
    [ns]: "fire-app-check",
    [ts]: "fire-app-check-compat",
    [rs]: "fire-auth",
    [is]: "fire-auth-compat",
    [ss]: "fire-rtdb",
    [as]: "fire-rtdb-compat",
    [os]: "fire-fn",
    [cs]: "fire-fn-compat",
    [ls]: "fire-iid",
    [ds]: "fire-iid-compat",
    [us]: "fire-fcm",
    [hs]: "fire-fcm-compat",
    [fs]: "fire-perf",
    [ps]: "fire-perf-compat",
    [ms]: "fire-rc",
    [gs]: "fire-rc-compat",
    [vs]: "fire-gcs",
    [_s]: "fire-gcs-compat",
    [bs]: "fire-fst",
    [ys]: "fire-fst-compat",
    "fire-js": "fire-js",
    [Is]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Be = new Map, at = new Map;
function Cs(n, e) {
    try {
        n.container.addComponent(e)
    } catch (t) {
        ee.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t)
    }
}
function pe(n) {
    const e = n.name;
    if (at.has(e))
        return ee.debug(`There were multiple attempts to register component ${e}.`), !1;
    at.set(e, n);
    for (const t of Be.values())
        Cs(t, n);
    return !0
}
function wn(n, e) {
    const t = n.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return t && t.triggerHeartbeat(),
    n.container.getProvider(e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss = {
    "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, z = new ye("app", "Firebase", Ss);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts {
    constructor(e, t, r) {
        this._isDeleted = !1,
        this._options = Object.assign({}, e),
        this._config = Object.assign({}, t),
        this._name = t.name,
        this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled,
        this._container = r,
        this.container.addComponent(new ce("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
        this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(),
        this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(),
        this._name
    }
    get options() {
        return this.checkDestroyed(),
        this._options
    }
    get config() {
        return this.checkDestroyed(),
        this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw z.create("app-deleted", {
                appName: this._name
            })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We = ws;
function En(n, e = {}) {
    let t = n;
    typeof e != "object" && (e = {
            name: e
        });
    const r = Object.assign({
        name: st,
        automaticDataCollectionEnabled: !1
    }, e),
    i = r.name;
    if (typeof i != "string" || !i)
        throw z.create("bad-app-name", {
            appName: String(i)
        });
    if (t || (t = Di()), !t)
        throw z.create("no-options");
    const s = Be.get(i);
    if (s) {
        if (Fe(t, s.options) && Fe(r, s.config))
            return s;
        throw z.create("duplicate-app", {
            appName: i
        })
    }
    const a = new Wi(i);
    for (const l of at.values())
        a.addComponent(l);
    const c = new Ts(t, r, a);
    return Be.set(i, c),
    c
}
function ks(n = st) {
    const e = Be.get(n);
    if (!e && n === st)
        return En();
    if (!e)
        throw z.create("no-app", {
            appName: n
        });
    return e
}
function se(n, e, t) {
    var r;
    let i = (r = Es[n]) !== null && r !== void 0 ? r : n;
    t && (i += `-${t}`);
    const s = i.match(/\s|\//),
    a = e.match(/\s|\//);
    if (s || a) {
        const c = [`Unable to register library "${i}" with version "${e}":`];
        s && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
        s && a && c.push("and"),
        a && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
        ee.warn(c.join(" "));
        return
    }
    pe(new ce(`${i}-version`, () => ({
                library: i,
                version: e
            }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xs = "firebase-heartbeat-database", Ns = 1, me = "firebase-heartbeat-store";
let Qe = null;
function Cn() {
    return Qe || (Qe = hr(xs, Ns, {
            upgrade: (n, e) => {
                switch (e) {
                case 0:
                    n.createObjectStore(me)
                }
            }
        }).catch(n => {
            throw z.create("idb-open", {
                originalErrorMessage: n.message
            })
        })),
    Qe
}
async function As(n) {
    try {
        return (await Cn()).transaction(me).objectStore(me).get(Sn(n))
    } catch (e) {
        if (e instanceof G)
            ee.warn(e.message);
        else {
            const t = z.create("idb-get", {
                originalErrorMessage: e == null ? void 0 : e.message
            });
            ee.warn(t.message)
        }
    }
}
async function Pt(n, e) {
    try {
        const r = (await Cn()).transaction(me, "readwrite");
        return await r.objectStore(me).put(e, Sn(n)),
        r.done
    } catch (t) {
        if (t instanceof G)
            ee.warn(t.message);
        else {
            const r = z.create("idb-set", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            ee.warn(r.message)
        }
    }
}
function Sn(n) {
    return `${n.name}!${n.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rs = 1024, Os = 30 * 24 * 60 * 60 * 1e3;
class Ds {
    constructor(e) {
        this.container = e,
        this._heartbeatsCache = null;
        const t = this.container.getProvider("app").getImmediate();
        this._storage = new Ps(t),
        this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r))
    }
    async triggerHeartbeat() {
        const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
        r = Mt();
        if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some(i => i.date === r)))
            return this._heartbeatsCache.heartbeats.push({
                date: r,
                agent: t
            }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(i => {
                const s = new Date(i.date).valueOf();
                return Date.now() - s <= Os
            }), this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
            return "";
        const e = Mt(), {
            heartbeatsToSend: t,
            unsentEntries: r
        } = Ls(this._heartbeatsCache.heartbeats),
        i = _n(JSON.stringify({
                    version: 2,
                    heartbeats: t
                }));
        return this._heartbeatsCache.lastSentHeartbeatDate = e,
        r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)),
        i
    }
}
function Mt() {
    return new Date().toISOString().substring(0, 10)
}
function Ls(n, e = Rs) {
    const t = [];
    let r = n.slice();
    for (const i of n) {
        const s = t.find(a => a.agent === i.agent);
        if (s) {
            if (s.dates.push(i.date), Ut(t) > e) {
                s.dates.pop();
                break
            }
        } else if (t.push({
                agent: i.agent,
                dates: [i.date]
            }), Ut(t) > e) {
            t.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: t,
        unsentEntries: r
    }
}
class Ps {
    constructor(e) {
        this.app = e,
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return Ti() ? ki().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        return await this._canUseIndexedDBPromise ? await As(this.app) || {
            heartbeats: []
        }
         : {
            heartbeats: []
        }
    }
    async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Pt(this.app, {
                lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        } else
            return
    }
    async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Pt(this.app, {
                lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...e.heartbeats]
            })
        } else
            return
    }
}
function Ut(n) {
    return _n(JSON.stringify({
            version: 2,
            heartbeats: n
        })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ms(n) {
    pe(new ce("platform-logger", e => new Zi(e), "PRIVATE")),
    pe(new ce("heartbeat", e => new Ds(e), "PRIVATE")),
    se(it, Lt, n),
    se(it, Lt, "esm2017"),
    se("fire-js", "")
}
Ms("");
var Us = "firebase", Fs = "9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
se(Us, Fs, "app");
function _t(n, e) {
    var t = {};
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
            e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
    return t
}
function Tn() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const Bs = Tn, kn = new ye("auth", "Firebase", Tn());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ft = new In("@firebase/auth");
function Ae(n, ...e) {
    Ft.logLevel <= v.ERROR && Ft.error(`Auth (${We}): ${n}`, ...e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(n, ...e) {
    throw bt(n, ...e)
}
function A(n, ...e) {
    return bt(n, ...e)
}
function xn(n, e, t) {
    const r = Object.assign(Object.assign({}, Bs()), {
        [e]: t
    });
    return new ye("auth", "Firebase", r).create(e, {
        appName: n.name
    })
}
function Hs(n, e, t) {
    const r = t;
    if (!(e instanceof r))
        throw r.name !== e.constructor.name && O(n, "argument-error"), xn(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}
function bt(n, ...e) {
    if (typeof n != "string") {
        const t = e[0],
        r = [...e.slice(1)];
        return r[0] && (r[0].appName = n.name),
        n._errorFactory.create(t, ...r)
    }
    return kn.create(n, ...e)
}
function p(n, e, ...t) {
    if (!n)
        throw bt(e, ...t)
}
function L(n) {
    const e = "INTERNAL ASSERTION FAILED: " + n;
    throw Ae(e),
    new Error(e)
}
function M(n, e) {
    n || L(e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt = new Map;
function P(n) {
    M(n instanceof Function, "Expected a class definition");
    let e = Bt.get(n);
    return e ? (M(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n, Bt.set(n, e), e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vs(n, e) {
    const t = wn(n, "auth");
    if (t.isInitialized()) {
        const i = t.getImmediate(),
        s = t.getOptions();
        if (Fe(s, e ?? {}))
            return i;
        O(i, "already-initialized")
    }
    return t.initialize({
        options: e
    })
}
function js(n, e) {
    const t = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(t) ? t : [t]).map(P);
    e != null && e.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot() {
    var n;
    return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || ""
}
function $s() {
    return Ht() === "http:" || Ht() === "https:"
}
function Ht() {
    var n;
    return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zs() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && ($s() || Ei() || "connection" in navigator) ? navigator.onLine : !0
}
function Ws() {
    if (typeof navigator > "u")
        return null;
    const n = navigator;
    return n.languages && n.languages[0] || n.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we {
    constructor(e, t) {
        this.shortDelay = e,
        this.longDelay = t,
        M(t > e, "Short delay should be less than long delay!"),
        this.isMobile = wi() || Ci()
    }
    get() {
        return zs() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(n, e) {
    M(n.emulator, "Emulator should always be set here");
    const {
        url: t
    } = n.emulator;
    return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn {
    static initialize(e, t, r) {
        this.fetchImpl = e,
        t && (this.headersImpl = t),
        r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self)
            return self.fetch;
        L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers" in self)
            return self.Headers;
        L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response" in self)
            return self.Response;
        L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gs = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "internal-error",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qs = new we(3e4, 6e4);
function Ks(n, e) {
    return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), {
        tenantId: n.tenantId
    }) : e
}
async function Ge(n, e, t, r, i = {}) {
    return An(n, i, async() => {
        let s = {},
        a = {};
        r && (e === "GET" ? a = r : s = {
                body: JSON.stringify(r)
            });
        const c = Ie(Object.assign({
                    key: n.config.apiKey
                }, a)).slice(1),
        l = await n._getAdditionalHeaders();
        return l["Content-Type"] = "application/json",
        n.languageCode && (l["X-Firebase-Locale"] = n.languageCode),
        Nn.fetch()(Rn(n, n.config.apiHost, t, c), Object.assign({
                method: e,
                headers: l,
                referrerPolicy: "no-referrer"
            }, s))
    })
}
async function An(n, e, t) {
    n._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, Gs), e);
    try {
        const i = new Zs(n),
        s = await Promise.race([t(), i.promise]);
        i.clearNetworkTimeout();
        const a = await s.json();
        if ("needConfirmation" in a)
            throw Te(n, "account-exists-with-different-credential", a);
        if (s.ok && !("errorMessage" in a))
            return a; {
            const c = s.ok ? a.errorMessage : a.error.message,
            [l, d] = c.split(" : ");
            if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw Te(n, "credential-already-in-use", a);
            if (l === "EMAIL_EXISTS")
                throw Te(n, "email-already-in-use", a);
            if (l === "USER_DISABLED")
                throw Te(n, "user-disabled", a);
            const f = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
            if (d)
                throw xn(n, f, d);
            O(n, f)
        }
    } catch (i) {
        if (i instanceof G)
            throw i;
        O(n, "network-request-failed")
    }
}
async function Js(n, e, t, r, i = {}) {
    const s = await Ge(n, e, t, r, i);
    return "mfaPendingCredential" in s && O(n, "multi-factor-auth-required", {
        _serverResponse: s
    }),
    s
}
function Rn(n, e, t, r) {
    const i = `${e}${t}?${r}`;
    return n.config.emulator ? yt(n.config, i) : `${n.config.apiScheme}://${i}`
}
class Zs {
    constructor(e) {
        this.auth = e,
        this.timer = null,
        this.promise = new Promise((t, r) => {
            this.timer = setTimeout(() => r(A(this.auth, "network-request-failed")), qs.get())
        })
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
}
function Te(n, e, t) {
    const r = {
        appName: n.name
    };
    t.email && (r.email = t.email),
    t.phoneNumber && (r.phoneNumber = t.phoneNumber);
    const i = A(n, e, r);
    return i.customData._tokenResponse = t,
    i
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ys(n, e) {
    return Ge(n, "POST", "/v1/accounts:delete", e)
}
async function Xs(n, e) {
    return Ge(n, "POST", "/v1/accounts:lookup", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(n) {
    if (n)
        try {
            const e = new Date(Number(n));
            if (!isNaN(e.getTime()))
                return e.toUTCString()
        } catch {}
}
async function Qs(n, e = !1) {
    const t = de(n),
    r = await t.getIdToken(e),
    i = It(r);
    p(i && i.exp && i.auth_time && i.iat, t.auth, "internal-error");
    const s = typeof i.firebase == "object" ? i.firebase : void 0,
    a = s == null ? void 0 : s.sign_in_provider;
    return {
        claims: i,
        token: r,
        authTime: fe(et(i.auth_time)),
        issuedAtTime: fe(et(i.iat)),
        expirationTime: fe(et(i.exp)),
        signInProvider: a || null,
        signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
    }
}
function et(n) {
    return Number(n) * 1e3
}
function It(n) {
    const [e, t, r] = n.split(".");
    if (e === void 0 || t === void 0 || r === void 0)
        return Ae("JWT malformed, contained fewer than 3 sections"), null;
    try {
        const i = bn(t);
        return i ? JSON.parse(i) : (Ae("Failed to decode base64 JWT payload"), null)
    } catch (i) {
        return Ae("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()),
        null
    }
}
function ea(n) {
    const e = It(n);
    return p(e, "internal-error"),
    p(typeof e.exp < "u", "internal-error"),
    p(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ge(n, e, t = !1) {
    if (t)
        return e;
    try {
        return await e
    } catch (r) {
        throw r instanceof G && ta(r) && n.auth.currentUser === n && await n.auth.signOut(),
        r
    }
}
function ta({
    code: n
}) {
    return n === "auth/user-disabled" || n === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na {
    constructor(e) {
        this.user = e,
        this.isRunning = !1,
        this.timerId = null,
        this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0, this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(e) {
        var t;
        if (e) {
            const r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
            r
        } else {
            this.errorBackoff = 3e4;
            const i = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(e = !1) {
        if (!this.isRunning)
            return;
        const t = this.getInterval(e);
        this.timerId = setTimeout(async() => {
            await this.iteration()
        }, t)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On {
    constructor(e, t) {
        this.createdAt = e,
        this.lastLoginAt = t,
        this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = fe(this.lastLoginAt),
        this.creationTime = fe(this.createdAt)
    }
    _copy(e) {
        this.createdAt = e.createdAt,
        this.lastLoginAt = e.lastLoginAt,
        this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function He(n) {
    var e;
    const t = n.auth,
    r = await n.getIdToken(),
    i = await ge(n, Xs(t, {
                idToken: r
            }));
    p(i == null ? void 0 : i.users.length, t, "internal-error");
    const s = i.users[0];
    n._notifyReloadListener(s);
    const a = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? sa(s.providerUserInfo) : [],
    c = ia(n.providerData, a),
    l = n.isAnonymous,
    d = !(n.email && s.passwordHash) && !(c != null && c.length),
    f = l ? d : !1,
    m = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: c,
        metadata: new On(s.createdAt, s.lastLoginAt),
        isAnonymous: f
    };
    Object.assign(n, m)
}
async function ra(n) {
    const e = de(n);
    await He(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e)
}
function ia(n, e) {
    return [...n.filter(r => !e.some(i => i.providerId === r.providerId)), ...e]
}
function sa(n) {
    return n.map(e => {
        var {
            providerId: t
        } = e,
        r = _t(e, ["providerId"]);
        return {
            providerId: t,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function aa(n, e) {
    const t = await An(n, {}, async() => {
        const r = Ie({
            grant_type: "refresh_token",
            refresh_token: e
        }).slice(1), {
            tokenApiHost: i,
            apiKey: s
        } = n.config,
        a = Rn(n, i, "/v1/token", `key=${s}`),
        c = await n._getAdditionalHeaders();
        return c["Content-Type"] = "application/x-www-form-urlencoded",
        Nn.fetch()(a, {
            method: "POST",
            headers: c,
            body: r
        })
    });
    return {
        accessToken: t.access_token,
        expiresIn: t.expires_in,
        refreshToken: t.refresh_token
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve {
    constructor() {
        this.refreshToken = null,
        this.accessToken = null,
        this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
        p(e.idToken, "internal-error"),
        p(typeof e.idToken < "u", "internal-error"),
        p(typeof e.refreshToken < "u", "internal-error");
        const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : ea(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
    }
    async getToken(e, t = !1) {
        return p(!this.accessToken || this.refreshToken, e, "user-token-expired"),
        !t && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(e, t) {
        const {
            accessToken: r,
            refreshToken: i,
            expiresIn: s
        } = await aa(e, t);
        this.updateTokensAndExpiration(r, i, Number(s))
    }
    updateTokensAndExpiration(e, t, r) {
        this.refreshToken = t || null,
        this.accessToken = e || null,
        this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(e, t) {
        const {
            refreshToken: r,
            accessToken: i,
            expirationTime: s
        } = t,
        a = new ve;
        return r && (p(typeof r == "string", "internal-error", {
                appName: e
            }), a.refreshToken = r),
        i && (p(typeof i == "string", "internal-error", {
                appName: e
            }), a.accessToken = i),
        s && (p(typeof s == "number", "internal-error", {
                appName: e
            }), a.expirationTime = s),
        a
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(e) {
        this.accessToken = e.accessToken,
        this.refreshToken = e.refreshToken,
        this.expirationTime = e.expirationTime
    }
    _clone() {
        return Object.assign(new ve, this.toJSON())
    }
    _performRefresh() {
        return L("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(n, e) {
    p(typeof n == "string" || typeof n > "u", "internal-error", {
        appName: e
    })
}
class Q {
    constructor(e) {
        var {
            uid: t,
            auth: r,
            stsTokenManager: i
        } = e,
        s = _t(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase",
        this.proactiveRefresh = new na(this),
        this.reloadUserInfo = null,
        this.reloadListener = null,
        this.uid = t,
        this.auth = r,
        this.stsTokenManager = i,
        this.accessToken = i.accessToken,
        this.displayName = s.displayName || null,
        this.email = s.email || null,
        this.emailVerified = s.emailVerified || !1,
        this.phoneNumber = s.phoneNumber || null,
        this.photoURL = s.photoURL || null,
        this.isAnonymous = s.isAnonymous || !1,
        this.tenantId = s.tenantId || null,
        this.providerData = s.providerData ? [...s.providerData] : [],
        this.metadata = new On(s.createdAt || void 0, s.lastLoginAt || void 0)
    }
    async getIdToken(e) {
        const t = await ge(this, this.stsTokenManager.getToken(this.auth, e));
        return p(t, this.auth, "internal-error"),
        this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)),
        t
    }
    getIdTokenResult(e) {
        return Qs(this, e)
    }
    reload() {
        return ra(this)
    }
    _assign(e) {
        this !== e && (p(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(t => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
        return new Q(Object.assign(Object.assign({}, this), {
                auth: e,
                stsTokenManager: this.stsTokenManager._clone()
            }))
    }
    _onReload(e) {
        p(!this.reloadListener, this.auth, "internal-error"),
        this.reloadListener = e,
        this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
    }
    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, t = !1) {
        let r = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0),
        t && await He(this),
        await this.auth._persistUserIfCurrent(this),
        r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete () {
        const e = await this.getIdToken();
        return await ge(this, Ys(this.auth, {
                idToken: e
            })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
                uid: this.uid,
                email: this.email || void 0,
                emailVerified: this.emailVerified,
                displayName: this.displayName || void 0,
                isAnonymous: this.isAnonymous,
                photoURL: this.photoURL || void 0,
                phoneNumber: this.phoneNumber || void 0,
                tenantId: this.tenantId || void 0,
                providerData: this.providerData.map(e => Object.assign({}, e)),
                stsTokenManager: this.stsTokenManager.toJSON(),
                _redirectEventId: this._redirectEventId
            }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, t) {
        var r,
        i,
        s,
        a,
        c,
        l,
        d,
        f;
        const m = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
        _ = (i = t.email) !== null && i !== void 0 ? i : void 0,
        y = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0,
        T = (a = t.photoURL) !== null && a !== void 0 ? a : void 0,
        x = (c = t.tenantId) !== null && c !== void 0 ? c : void 0,
        D = (l = t._redirectEventId) !== null && l !== void 0 ? l : void 0,
        w = (d = t.createdAt) !== null && d !== void 0 ? d : void 0,
        q = (f = t.lastLoginAt) !== null && f !== void 0 ? f : void 0, {
            uid: E,
            emailVerified: ne,
            isAnonymous: U,
            providerData: F,
            stsTokenManager: re
        } = t;
        p(E && re, e, "internal-error");
        const b = ve.fromJSON(this.name, re);
        p(typeof E == "string", e, "internal-error"),
        B(m, e.name),
        B(_, e.name),
        p(typeof ne == "boolean", e, "internal-error"),
        p(typeof U == "boolean", e, "internal-error"),
        B(y, e.name),
        B(T, e.name),
        B(x, e.name),
        B(D, e.name),
        B(w, e.name),
        B(q, e.name);
        const g = new Q({
            uid: E,
            auth: e,
            email: _,
            emailVerified: ne,
            displayName: m,
            isAnonymous: U,
            photoURL: T,
            phoneNumber: y,
            tenantId: x,
            stsTokenManager: b,
            createdAt: w,
            lastLoginAt: q
        });
        return F && Array.isArray(F) && (g.providerData = F.map(ue => Object.assign({}, ue))),
        D && (g._redirectEventId = D),
        g
    }
    static async _fromIdTokenResponse(e, t, r = !1) {
        const i = new ve;
        i.updateFromServerResponse(t);
        const s = new Q({
            uid: t.localId,
            auth: e,
            stsTokenManager: i,
            isAnonymous: r
        });
        return await He(s),
        s
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn {
    constructor() {
        this.type = "NONE",
        this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(e, t) {
        this.storage[e] = t
    }
    async _get(e) {
        const t = this.storage[e];
        return t === void 0 ? null : t
    }
    async _remove(e) {
        delete this.storage[e]
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
Dn.type = "NONE";
const Vt = Dn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(n, e, t) {
    return `firebase:${n}:${e}:${t}`
}
class ae {
    constructor(e, t, r) {
        this.persistence = e,
        this.auth = t,
        this.userKey = r;
        const {
            config: i,
            name: s
        } = this.auth;
        this.fullUserKey = Re(this.userKey, i.apiKey, s),
        this.fullPersistenceKey = Re("persistence", i.apiKey, s),
        this.boundEventHandler = t._onStorageEvent.bind(t),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? Q._fromJSON(this.auth, e) : null
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
        if (this.persistence === e)
            return;
        const t = await this.getCurrentUser();
        if (await this.removeCurrentUser(), this.persistence = e, t)
            return this.setCurrentUser(t)
    }
    delete () {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(e, t, r = "authUser") {
        if (!t.length)
            return new ae(P(Vt), e, r);
        const i = (await Promise.all(t.map(async d => {
                    if (await d._isAvailable())
                        return d
                }))).filter(d => d);
        let s = i[0] || P(Vt);
        const a = Re(r, e.config.apiKey, e.name);
        let c = null;
        for (const d of t)
            try {
                const f = await d._get(a);
                if (f) {
                    const m = Q._fromJSON(e, f);
                    d !== s && (c = m),
                    s = d;
                    break
                }
            } catch {}
        const l = i.filter(d => d._shouldAllowMigration);
        return !s._shouldAllowMigration || !l.length ? new ae(s, e, r) : (s = l[0], c && await s._set(a, c.toJSON()), await Promise.all(t.map(async d => {
                    if (d !== s)
                        try {
                            await d._remove(a)
                        } catch {}
                })), new ae(s, e, r))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(n) {
    const e = n.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
        return "Opera";
    if (Mn(e))
        return "IEMobile";
    if (e.includes("msie") || e.includes("trident/"))
        return "IE";
    if (e.includes("edge/"))
        return "Edge";
    if (Ln(e))
        return "Firefox";
    if (e.includes("silk/"))
        return "Silk";
    if (Fn(e))
        return "Blackberry";
    if (Bn(e))
        return "Webos";
    if (wt(e))
        return "Safari";
    if ((e.includes("chrome/") || Pn(e)) && !e.includes("edge/"))
        return "Chrome";
    if (Un(e))
        return "Android"; {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        r = n.match(t);
        if ((r == null ? void 0 : r.length) === 2)
            return r[1]
    }
    return "Other"
}
function Ln(n = I()) {
    return /firefox\//i.test(n)
}
function wt(n = I()) {
    const e = n.toLowerCase();
    return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}
function Pn(n = I()) {
    return /crios\//i.test(n)
}
function Mn(n = I()) {
    return /iemobile/i.test(n)
}
function Un(n = I()) {
    return /android/i.test(n)
}
function Fn(n = I()) {
    return /blackberry/i.test(n)
}
function Bn(n = I()) {
    return /webos/i.test(n)
}
function qe(n = I()) {
    return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n)
}
function oa(n = I()) {
    var e;
    return qe(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
}
function ca() {
    return Si() && document.documentMode === 10
}
function Hn(n = I()) {
    return qe(n) || Un(n) || Bn(n) || Fn(n) || /windows phone/i.test(n) || Mn(n)
}
function la() {
    try {
        return !!(window && window !== window.top)
    } catch {
        return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(n, e = []) {
    let t;
    switch (n) {
    case "Browser":
        t = jt(I());
        break;
    case "Worker":
        t = `${jt(I())}-${n}`;
        break;
    default:
        t = n
    }
    const r = e.length ? e.join(",") : "FirebaseCore-web";
    return `${t}/JsCore/${We}/${r}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da {
    constructor(e) {
        this.auth = e,
        this.queue = []
    }
    pushCallback(e, t) {
        const r = s => new Promise((a, c) => {
            try {
                const l = e(s);
                a(l)
            } catch (l) {
                c(l)
            }
        });
        r.onAbort = t,
        this.queue.push(r);
        const i = this.queue.length - 1;
        return () => {
            this.queue[i] = () => Promise.resolve()
        }
    }
    async runMiddleware(e) {
        if (this.auth.currentUser === e)
            return;
        const t = [];
        try {
            for (const r of this.queue)
                await r(e), r.onAbort && t.push(r.onAbort)
        } catch (r) {
            t.reverse();
            for (const i of t)
                try {
                    i()
                } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r == null ? void 0 : r.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua {
    constructor(e, t, r) {
        this.app = e,
        this.heartbeatServiceProvider = t,
        this.config = r,
        this.currentUser = null,
        this.emulatorConfig = null,
        this.operations = Promise.resolve(),
        this.authStateSubscription = new $t(this),
        this.idTokenSubscription = new $t(this),
        this.beforeStateQueue = new da(this),
        this.redirectUser = null,
        this.isProactiveRefreshEnabled = !1,
        this._canInitEmulator = !0,
        this._isInitialized = !1,
        this._deleted = !1,
        this._initializationPromise = null,
        this._popupRedirectResolver = null,
        this._errorFactory = kn,
        this.lastNotifiedUid = void 0,
        this.languageCode = null,
        this.tenantId = null,
        this.settings = {
            appVerificationDisabledForTesting: !1
        },
        this.frameworks = [],
        this.name = e.name,
        this.clientVersion = r.sdkClientVersion
    }
    _initializeWithPersistence(e, t) {
        return t && (this._popupRedirectResolver = P(t)),
        this._initializationPromise = this.queue(async() => {
            var r,
            i;
            if (!this._deleted && (this.persistenceManager = await ae.create(this, e), !this._deleted)) {
                if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
                    try {
                        await this._popupRedirectResolver._initialize(this)
                    } catch {}
                await this.initializeCurrentUser(t),
                this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null,
                !this._deleted && (this._isInitialized = !0)
            }
        }),
        this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        const e = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !e)) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
                this._currentUser._assign(e),
                await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(e, !0)
        }
    }
    async initializeCurrentUser(e) {
        var t;
        const r = await this.assertedPersistence.getCurrentUser();
        let i = r,
        s = !1;
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const a = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId,
            c = i == null ? void 0 : i._redirectEventId,
            l = await this.tryRedirectSignIn(e);
            (!a || a === c) && (l != null && l.user) && (i = l.user, s = !0)
        }
        if (!i)
            return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (s)
                try {
                    await this.beforeStateQueue.runMiddleware(i)
                } catch (a) {
                    i = r,
                    this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(a))
                }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return p(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(e) {
        let t = null;
        try {
            t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return t
    }
    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await He(e)
        } catch (t) {
            if ((t == null ? void 0 : t.code) !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
        this.languageCode = Ws()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(e) {
        const t = e ? de(e) : null;
        return t && p(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
        this._updateCurrentUser(t && t._clone(this))
    }
    async _updateCurrentUser(e, t = !1) {
        if (!this._deleted)
            return e && p(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async() => {
                await this.directlySetCurrentUser(e),
                this.notifyAuthListeners()
            })
    }
    async signOut() {
        return await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
        this._updateCurrentUser(null, !0)
    }
    setPersistence(e) {
        return this.queue(async() => {
            await this.assertedPersistence.setPersistence(P(e))
        })
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(e) {
        this._errorFactory = new ye("auth", "Firebase", e())
    }
    onAuthStateChanged(e, t, r) {
        return this.registerStateListener(this.authStateSubscription, e, t, r)
    }
    beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t)
    }
    onIdTokenChanged(e, t, r) {
        return this.registerStateListener(this.idTokenSubscription, e, t, r)
    }
    toJSON() {
        var e;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
        }
    }
    async _setRedirectUser(e, t) {
        const r = await this.getOrInitRedirectPersistenceManager(t);
        return e === null ? r.removeCurrentUser() : r.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            const t = e && P(e) || this._popupRedirectResolver;
            p(t, this, "argument-error"),
            this.redirectPersistenceManager = await ae.create(this, [P(t._redirectPersistence)], "redirectUser"),
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
        var t,
        r;
        return this._isInitialized && await this.queue(async() => {}),
        ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null
    }
    async _persistUserIfCurrent(e) {
        if (e === this.currentUser)
            return this.queue(async() => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
        this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
        this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var e,
        t;
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, t, r, i) {
        if (this._deleted)
            return () => {};
        const s = typeof t == "function" ? t : t.next.bind(t),
        a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        return p(a, this, "internal-error"),
        a.then(() => s(this.currentUser)),
        typeof t == "function" ? e.addObserver(t, r, i) : e.addObserver(t)
    }
    async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        this.currentUser = e,
        e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(e) {
        return this.operations = this.operations.then(e, e),
        this.operations
    }
    get assertedPersistence() {
        return p(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
    }
    _logFramework(e) {
        !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Vn(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var e;
        const t = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
        const r = await((e = this.heartbeatServiceProvider.getImmediate({
                        optional: !0
                    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
        return r && (t["X-Firebase-Client"] = r),
        t
    }
}
function Ke(n) {
    return de(n)
}
class $t {
    constructor(e) {
        this.auth = e,
        this.observer = null,
        this.addObserver = Bi(t => this.observer = t)
    }
    get next() {
        return p(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
    }
}
function ha(n, e, t) {
    const r = Ke(n);
    p(r._canInitEmulator, r, "emulator-config-failed"),
    p(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
    const i = !!(t != null && t.disableWarnings),
    s = jn(e), {
        host: a,
        port: c
    } = fa(e),
    l = c === null ? "" : `:${c}`;
    r.config.emulator = {
        url: `${s}//${a}${l}/`
    },
    r.settings.appVerificationDisabledForTesting = !0,
    r.emulatorConfig = Object.freeze({
        host: a,
        port: c,
        protocol: s.replace(":", ""),
        options: Object.freeze({
            disableWarnings: i
        })
    }),
    i || pa()
}
function jn(n) {
    const e = n.indexOf(":");
    return e < 0 ? "" : n.substr(0, e + 1)
}
function fa(n) {
    const e = jn(n),
    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
    if (!t)
        return {
            host: "",
            port: null
        };
    const r = t[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (i) {
        const s = i[1];
        return {
            host: s,
            port: zt(r.substr(s.length + 1))
        }
    } else {
        const [s, a] = r.split(":");
        return {
            host: s,
            port: zt(a)
        }
    }
}
function zt(n) {
    if (!n)
        return null;
    const e = Number(n);
    return isNaN(e) ? null : e
}
function pa() {
    function n() {
        const e = document.createElement("p"),
        t = e.style;
        e.innerText = "Running in emulator mode. Do not use with production credentials.",
        t.position = "fixed",
        t.width = "100%",
        t.backgroundColor = "#ffffff",
        t.border = ".1em solid #000000",
        t.color = "#b50000",
        t.bottom = "0px",
        t.left = "0px",
        t.margin = "0px",
        t.zIndex = "10000",
        t.textAlign = "center",
        e.classList.add("firebase-emulator-warning"),
        document.body.appendChild(e)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
    typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n {
    constructor(e, t) {
        this.providerId = e,
        this.signInMethod = t
    }
    toJSON() {
        return L("not implemented")
    }
    _getIdTokenResponse(e) {
        return L("not implemented")
    }
    _linkToIdToken(e, t) {
        return L("not implemented")
    }
    _getReauthenticationResolver(e) {
        return L("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oe(n, e) {
    return Js(n, "POST", "/v1/accounts:signInWithIdp", Ks(n, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ma = "http://localhost";
class te extends $n {
    constructor() {
        super(...arguments),
        this.pendingToken = null
    }
    static _fromParams(e) {
        const t = new te(e.providerId, e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : O("argument-error"),
        t
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(e) {
        const t = typeof e == "string" ? JSON.parse(e) : e, {
            providerId: r,
            signInMethod: i
        } = t,
        s = _t(t, ["providerId", "signInMethod"]);
        if (!r || !i)
            return null;
        const a = new te(r, i);
        return a.idToken = s.idToken || void 0,
        a.accessToken = s.accessToken || void 0,
        a.secret = s.secret,
        a.nonce = s.nonce,
        a.pendingToken = s.pendingToken || null,
        a
    }
    _getIdTokenResponse(e) {
        const t = this.buildRequest();
        return oe(e, t)
    }
    _linkToIdToken(e, t) {
        const r = this.buildRequest();
        return r.idToken = t,
        oe(e, r)
    }
    _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return t.autoCreate = !1,
        oe(e, t)
    }
    buildRequest() {
        const e = {
            requestUri: ma,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            e.pendingToken = this.pendingToken;
        else {
            const t = {};
            this.idToken && (t.id_token = this.idToken),
            this.accessToken && (t.access_token = this.accessToken),
            this.secret && (t.oauth_token_secret = this.secret),
            t.providerId = this.providerId,
            this.nonce && !this.pendingToken && (t.nonce = this.nonce),
            e.postBody = Ie(t)
        }
        return e
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et {
    constructor(e) {
        this.providerId = e,
        this.defaultLanguageCode = null,
        this.customParameters = {}
    }
    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
        return this.customParameters = e,
        this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends Et {
    constructor() {
        super(...arguments),
        this.scopes = []
    }
    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e),
        this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H extends Ee {
    constructor() {
        super("facebook.com")
    }
    static credential(e) {
        return te._fromParams({
            providerId: H.PROVIDER_ID,
            signInMethod: H.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return H.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return H.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
            return null;
        try {
            return H.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
H.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
H.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N extends Ee {
    constructor() {
        super("google.com"),
        this.addScope("profile")
    }
    static credential(e, t) {
        return te._fromParams({
            providerId: N.PROVIDER_ID,
            signInMethod: N.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: t
        })
    }
    static credentialFromResult(e) {
        return N.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return N.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e)
            return null;
        const {
            oauthIdToken: t,
            oauthAccessToken: r
        } = e;
        if (!t && !r)
            return null;
        try {
            return N.credential(t, r)
        } catch {
            return null
        }
    }
}
N.GOOGLE_SIGN_IN_METHOD = "google.com";
N.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V extends Ee {
    constructor() {
        super("github.com")
    }
    static credential(e) {
        return te._fromParams({
            providerId: V.PROVIDER_ID,
            signInMethod: V.GITHUB_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return V.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return V.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
            return null;
        try {
            return V.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
V.GITHUB_SIGN_IN_METHOD = "github.com";
V.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j extends Ee {
    constructor() {
        super("twitter.com")
    }
    static credential(e, t) {
        return te._fromParams({
            providerId: j.PROVIDER_ID,
            signInMethod: j.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: t
        })
    }
    static credentialFromResult(e) {
        return j.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return j.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e)
            return null;
        const {
            oauthAccessToken: t,
            oauthTokenSecret: r
        } = e;
        if (!t || !r)
            return null;
        try {
            return j.credential(t, r)
        } catch {
            return null
        }
    }
}
j.TWITTER_SIGN_IN_METHOD = "twitter.com";
j.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le {
    constructor(e) {
        this.user = e.user,
        this.providerId = e.providerId,
        this._tokenResponse = e._tokenResponse,
        this.operationType = e.operationType
    }
    static async _fromIdTokenResponse(e, t, r, i = !1) {
        const s = await Q._fromIdTokenResponse(e, r, i),
        a = Wt(r);
        return new le({
            user: s,
            providerId: a,
            _tokenResponse: r,
            operationType: t
        })
    }
    static async _forOperation(e, t, r) {
        await e._updateTokensIfNecessary(r, !0);
        const i = Wt(r);
        return new le({
            user: e,
            providerId: i,
            _tokenResponse: r,
            operationType: t
        })
    }
}
function Wt(n) {
    return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve extends G {
    constructor(e, t, r, i) {
        var s;
        super(t.code, t.message),
        this.operationType = r,
        this.user = i,
        Object.setPrototypeOf(this, Ve.prototype),
        this.customData = {
            appName: e.name,
            tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: r
        }
    }
    static _fromErrorAndOperation(e, t, r, i) {
        return new Ve(e, t, r, i)
    }
}
function zn(n, e, t, r) {
    return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch(s => {
        throw s.code === "auth/multi-factor-auth-required" ? Ve._fromErrorAndOperation(n, s, e, r) : s
    })
}
async function ga(n, e, t = !1) {
    const r = await ge(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
    return le._forOperation(n, "link", r)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function va(n, e, t = !1) {
    const {
        auth: r
    } = n,
    i = "reauthenticate";
    try {
        const s = await ge(n, zn(r, i, e, n), t);
        p(s.idToken, r, "internal-error");
        const a = It(s.idToken);
        p(a, r, "internal-error");
        const {
            sub: c
        } = a;
        return p(n.uid === c, r, "user-mismatch"),
        le._forOperation(n, i, s)
    } catch (s) {
        throw (s == null ? void 0 : s.code) === "auth/user-not-found" && O(r, "user-mismatch"),
        s
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _a(n, e, t = !1) {
    const r = "signIn",
    i = await zn(n, r, e),
    s = await le._fromIdTokenResponse(n, r, i);
    return t || await n._updateCurrentUser(s.user),
    s
}
function ba(n, e, t, r) {
    return de(n).onIdTokenChanged(e, t, r)
}
function ya(n, e, t) {
    return de(n).beforeAuthStateChanged(e, t)
}
const je = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn {
    constructor(e, t) {
        this.storageRetriever = e,
        this.type = t
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(je, "1"), this.storage.removeItem(je), Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)),
        Promise.resolve()
    }
    _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null)
    }
    _remove(e) {
        return this.storage.removeItem(e),
        Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ia() {
    const n = I();
    return wt(n) || qe(n)
}
const wa = 1e3, Ea = 10;
class Gn extends Wn {
    constructor() {
        super(() => window.localStorage, "LOCAL"),
        this.boundEventHandler = (e, t) => this.onStorageEvent(e, t),
        this.listeners = {},
        this.localCache = {},
        this.pollTimer = null,
        this.safariLocalStorageNotSynced = Ia() && la(),
        this.fallbackToPolling = Hn(),
        this._shouldAllowMigration = !0
    }
    forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
            const r = this.storage.getItem(t),
            i = this.localCache[t];
            r !== i && e(t, i, r)
        }
    }
    onStorageEvent(e, t = !1) {
        if (!e.key) {
            this.forAllChangedKeys((a, c, l) => {
                this.notifyListeners(a, l)
            });
            return
        }
        const r = e.key;
        if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
            const a = this.storage.getItem(r);
            if (e.newValue !== a)
                e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
            else if (this.localCache[r] === e.newValue && !t)
                return
        }
        const i = () => {
            const a = this.storage.getItem(r);
            !t && this.localCache[r] === a || this.notifyListeners(r, a)
        },
        s = this.storage.getItem(r);
        ca() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, Ea) : i()
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        const r = this.listeners[e];
        if (r)
            for (const i of Array.from(r))
                i(t && JSON.parse(t))
    }
    startPolling() {
        this.stopPolling(),
        this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, t, r) => {
                this.onStorageEvent(new StorageEvent("storage", {
                        key: e,
                        oldValue: t,
                        newValue: r
                    }), !0)
            })
        }, wa)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)),
        this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling())
    }
    async _set(e, t) {
        await super._set(e, t),
        this.localCache[e] = JSON.stringify(t)
    }
    async _get(e) {
        const t = await super._get(e);
        return this.localCache[e] = JSON.stringify(t),
        t
    }
    async _remove(e) {
        await super._remove(e),
        delete this.localCache[e]
    }
}
Gn.type = "LOCAL";
const Ca = Gn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn extends Wn {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
qn.type = "SESSION";
const Kn = qn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sa(n) {
    return Promise.all(n.map(async e => {
            try {
                return {
                    fulfilled: !0,
                    value: await e
                }
            } catch (t) {
                return {
                    fulfilled: !1,
                    reason: t
                }
            }
        }))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je {
    constructor(e) {
        this.eventTarget = e,
        this.handlersMap = {},
        this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(e) {
        const t = this.receivers.find(i => i.isListeningto(e));
        if (t)
            return t;
        const r = new Je(e);
        return this.receivers.push(r),
        r
    }
    isListeningto(e) {
        return this.eventTarget === e
    }
    async handleEvent(e) {
        const t = e, {
            eventId: r,
            eventType: i,
            data: s
        } = t.data,
        a = this.handlersMap[i];
        if (!(a != null && a.size))
            return;
        t.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: i
        });
        const c = Array.from(a).map(async d => d(t.origin, s)),
        l = await Sa(c);
        t.ports[0].postMessage({
            status: "done",
            eventId: r,
            eventType: i,
            response: l
        })
    }
    _subscribe(e, t) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set),
        this.handlersMap[e].add(t)
    }
    _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
Je.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(n = "", e = 10) {
    let t = "";
    for (let r = 0; r < e; r++)
        t += Math.floor(Math.random() * 10);
    return n + t
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta {
    constructor(e) {
        this.target = e,
        this.handlers = new Set
    }
    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()),
        this.handlers.delete(e)
    }
    async _send(e, t, r = 50) {
        const i = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!i)
            throw new Error("connection_unavailable");
        let s,
        a;
        return new Promise((c, l) => {
            const d = Ct("", 20);
            i.port1.start();
            const f = setTimeout(() => {
                l(new Error("unsupported_event"))
            }, r);
            a = {
                messageChannel: i,
                onMessage(m) {
                    const _ = m;
                    if (_.data.eventId === d)
                        switch (_.data.status) {
                        case "ack":
                            clearTimeout(f),
                            s = setTimeout(() => {
                                l(new Error("timeout"))
                            }, 3e3);
                            break;
                        case "done":
                            clearTimeout(s),
                            c(_.data.response);
                            break;
                        default:
                            clearTimeout(f),
                            clearTimeout(s),
                            l(new Error("invalid_response"));
                            break
                        }
                }
            },
            this.handlers.add(a),
            i.port1.addEventListener("message", a.onMessage),
            this.target.postMessage({
                eventType: e,
                eventId: d,
                data: t
            }, [i.port2])
        }).finally(() => {
            a && this.removeMessageHandler(a)
        })
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R() {
    return window
}
function ka(n) {
    R().location.href = n
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn() {
    return typeof R().WorkerGlobalScope < "u" && typeof R().importScripts == "function"
}
async function xa() {
    if (!(navigator != null && navigator.serviceWorker))
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function Na() {
    var n;
    return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null
}
function Aa() {
    return Jn() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zn = "firebaseLocalStorageDb", Ra = 1, $e = "firebaseLocalStorage", Yn = "fbase_key";
class Ce {
    constructor(e) {
        this.request = e
    }
    toPromise() {
        return new Promise((e, t) => {
            this.request.addEventListener("success", () => {
                e(this.request.result)
            }),
            this.request.addEventListener("error", () => {
                t(this.request.error)
            })
        })
    }
}
function Ze(n, e) {
    return n.transaction([$e], e ? "readwrite" : "readonly").objectStore($e)
}
function Oa() {
    const n = indexedDB.deleteDatabase(Zn);
    return new Ce(n).toPromise()
}
function ct() {
    const n = indexedDB.open(Zn, Ra);
    return new Promise((e, t) => {
        n.addEventListener("error", () => {
            t(n.error)
        }),
        n.addEventListener("upgradeneeded", () => {
            const r = n.result;
            try {
                r.createObjectStore($e, {
                    keyPath: Yn
                })
            } catch (i) {
                t(i)
            }
        }),
        n.addEventListener("success", async() => {
            const r = n.result;
            r.objectStoreNames.contains($e) ? e(r) : (r.close(), await Oa(), e(await ct()))
        })
    })
}
async function Gt(n, e, t) {
    const r = Ze(n, !0).put({
        [Yn]: e,
        value: t
    });
    return new Ce(r).toPromise()
}
async function Da(n, e) {
    const t = Ze(n, !1).get(e),
    r = await new Ce(t).toPromise();
    return r === void 0 ? null : r.value
}
function qt(n, e) {
    const t = Ze(n, !0).delete(e);
    return new Ce(t).toPromise()
}
const La = 800, Pa = 3;
class Xn {
    constructor() {
        this.type = "LOCAL",
        this._shouldAllowMigration = !0,
        this.listeners = {},
        this.localCache = {},
        this.pollTimer = null,
        this.pendingWrites = 0,
        this.receiver = null,
        this.sender = null,
        this.serviceWorkerReceiverAvailable = !1,
        this.activeServiceWorker = null,
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await ct(), this.db)
    }
    async _withRetries(e) {
        let t = 0;
        for (; ; )
            try {
                const r = await this._openDb();
                return await e(r)
            } catch (r) {
                if (t++ > Pa)
                    throw r;
                this.db && (this.db.close(), this.db = void 0)
            }
    }
    async initializeServiceWorkerMessaging() {
        return Jn() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = Je._getInstance(Aa()),
        this.receiver._subscribe("keyChanged", async(e, t) => ({
                keyProcessed: (await this._poll()).includes(t.key)
            })),
        this.receiver._subscribe("ping", async(e, t) => ["keyChanged"])
    }
    async initializeSender() {
        var e,
        t;
        if (this.activeServiceWorker = await xa(), !this.activeServiceWorker)
            return;
        this.sender = new Ta(this.activeServiceWorker);
        const r = await this.sender._send("ping", {}, 800);
        r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
        if (!(!this.sender || !this.activeServiceWorker || Na() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: e
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch {}
    }
    async _isAvailable() {
        try {
            if (!indexedDB)
                return !1;
            const e = await ct();
            return await Gt(e, je, "1"),
            await qt(e, je),
            !0
        } catch {}
        return !1
    }
    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(e, t) {
        return this._withPendingWrite(async() => (await this._withRetries(r => Gt(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)))
    }
    async _get(e) {
        const t = await this._withRetries(r => Da(r, e));
        return this.localCache[e] = t,
        t
    }
    async _remove(e) {
        return this._withPendingWrite(async() => (await this._withRetries(t => qt(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
    }
    async _poll() {
        const e = await this._withRetries(i => {
            const s = Ze(i, !1).getAll();
            return new Ce(s).toPromise()
        });
        if (!e)
            return [];
        if (this.pendingWrites !== 0)
            return [];
        const t = [],
        r = new Set;
        for (const {
            fbase_key: i,
            value: s
        }
            of e)
            r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
        for (const i of Object.keys(this.localCache))
            this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
        return t
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        const r = this.listeners[e];
        if (r)
            for (const i of Array.from(r))
                i(t)
    }
    startPolling() {
        this.stopPolling(),
        this.pollTimer = setInterval(async() => this._poll(), La)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
        this.listeners[e] || (this.listeners[e] = new Set, this._get(e)),
        this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
Xn.type = "LOCAL";
const Ma = Xn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ua() {
    var n,
    e;
    return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document
}
function Fa(n) {
    return new Promise((e, t) => {
        const r = document.createElement("script");
        r.setAttribute("src", n),
        r.onload = e,
        r.onerror = i => {
            const s = A("internal-error");
            s.customData = i,
            t(s)
        },
        r.type = "text/javascript",
        r.charset = "UTF-8",
        Ua().appendChild(r)
    })
}
function Ba(n) {
    return `__${n}${Math.floor(Math.random() * 1e6)}`
}
new we(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(n, e) {
    return e ? P(e) : (p(n._popupRedirectResolver, n, "argument-error"), n._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends $n {
    constructor(e) {
        super("custom", "custom"),
        this.params = e
    }
    _getIdTokenResponse(e) {
        return oe(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, t) {
        return oe(e, this._buildIdpRequest(t))
    }
    _getReauthenticationResolver(e) {
        return oe(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
        const t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (t.idToken = e),
        t
    }
}
function Ha(n) {
    return _a(n.auth, new St(n), n.bypassAuthState)
}
function Va(n) {
    const {
        auth: e,
        user: t
    } = n;
    return p(t, e, "internal-error"),
    va(t, new St(n), n.bypassAuthState)
}
async function ja(n) {
    const {
        auth: e,
        user: t
    } = n;
    return p(t, e, "internal-error"),
    ga(t, new St(n), n.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er {
    constructor(e, t, r, i, s = !1) {
        this.auth = e,
        this.resolver = r,
        this.user = i,
        this.bypassAuthState = s,
        this.pendingPromise = null,
        this.eventManager = null,
        this.filter = Array.isArray(t) ? t : [t]
    }
    execute() {
        return new Promise(async(e, t) => {
            this.pendingPromise = {
                resolve: e,
                reject: t
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                await this.onExecution(),
                this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        })
    }
    async onAuthEvent(e) {
        const {
            urlResponse: t,
            sessionId: r,
            postBody: i,
            tenantId: s,
            error: a,
            type: c
        } = e;
        if (a) {
            this.reject(a);
            return
        }
        const l = {
            auth: this.auth,
            requestUri: t,
            sessionId: r,
            tenantId: s || void 0,
            postBody: i || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(c)(l))
        } catch (d) {
            this.reject(d)
        }
    }
    onError(e) {
        this.reject(e)
    }
    getIdpTask(e) {
        switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
            return Ha;
        case "linkViaPopup":
        case "linkViaRedirect":
            return ja;
        case "reauthViaPopup":
        case "reauthViaRedirect":
            return Va;
        default:
            O(this.auth, "internal-error")
        }
    }
    resolve(e) {
        M(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp()
    }
    reject(e) {
        M(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
        this.pendingPromise = null,
        this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $a = new we(2e3, 1e4);
async function za(n, e, t) {
    const r = Ke(n);
    Hs(n, e, Et);
    const i = Qn(r, t);
    return new X(r, "signInViaPopup", e, i).executeNotNull()
}
class X extends er {
    constructor(e, t, r, i, s) {
        super(e, t, i, s),
        this.provider = r,
        this.authWindow = null,
        this.pollId = null,
        X.currentPopupAction && X.currentPopupAction.cancel(),
        X.currentPopupAction = this
    }
    async executeNotNull() {
        const e = await this.execute();
        return p(e, this.auth, "internal-error"),
        e
    }
    async onExecution() {
        M(this.filter.length === 1, "Popup operations only handle one event");
        const e = Ct();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e),
        this.authWindow.associatedEvent = e,
        this.resolver._originValidation(this.auth).catch(t => {
            this.reject(t)
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, t => {
            t || this.reject(A(this.auth, "web-storage-unsupported"))
        }),
        this.pollUserCancellation()
    }
    get eventId() {
        var e;
        return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null
    }
    cancel() {
        this.reject(A(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        this.authWindow = null,
        this.pollId = null,
        X.currentPopupAction = null
    }
    pollUserCancellation() {
        const e = () => {
            var t,
            r;
            if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null,
                    this.reject(A(this.auth, "popup-closed-by-user"))
                }, 2e3);
                return
            }
            this.pollId = window.setTimeout(e, $a.get())
        };
        e()
    }
}
X.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wa = "pendingRedirect", Oe = new Map;
class Ga extends er {
    constructor(e, t, r = !1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, r),
        this.eventId = null
    }
    async execute() {
        let e = Oe.get(this.auth._key());
        if (!e) {
            try {
                const r = await qa(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(r)
            } catch (t) {
                e = () => Promise.reject(t)
            }
            Oe.set(this.auth._key(), e)
        }
        return this.bypassAuthState || Oe.set(this.auth._key(), () => Promise.resolve(null)),
        e()
    }
    async onAuthEvent(e) {
        if (e.type === "signInViaRedirect")
            return super.onAuthEvent(e);
        if (e.type === "unknown") {
            this.resolve(null);
            return
        }
        if (e.eventId) {
            const t = await this.auth._redirectUserForId(e.eventId);
            if (t)
                return this.user = t, super.onAuthEvent(e);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
async function qa(n, e) {
    const t = Za(e),
    r = Ja(n);
    if (!await r._isAvailable())
        return !1;
    const i = await r._get(t) === "true";
    return await r._remove(t),
    i
}
function Ka(n, e) {
    Oe.set(n._key(), e)
}
function Ja(n) {
    return P(n._redirectPersistence)
}
function Za(n) {
    return Re(Wa, n.config.apiKey, n.name)
}
async function Ya(n, e, t = !1) {
    const r = Ke(n),
    i = Qn(r, e),
    a = await new Ga(r, i, t).execute();
    return a && !t && (delete a.user._redirectEventId, await r._persistUserIfCurrent(a.user), await r._setRedirectUser(null, e)),
    a
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xa = 10 * 60 * 1e3;
class Qa {
    constructor(e) {
        this.auth = e,
        this.cachedEventUids = new Set,
        this.consumers = new Set,
        this.queuedRedirectEvent = null,
        this.hasHandledPotentialRedirect = !1,
        this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(e) {
        this.consumers.add(e),
        this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
    }
    unregisterConsumer(e) {
        this.consumers.delete(e)
    }
    onEvent(e) {
        if (this.hasEventBeenHandled(e))
            return !1;
        let t = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e))
        }),
        this.hasHandledPotentialRedirect || !eo(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)),
        t
    }
    sendToConsumer(e, t) {
        var r;
        if (e.error && !tr(e)) {
            const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            t.onError(A(this.auth, i))
        } else
            t.onAuthEvent(e)
    }
    isEventForConsumer(e, t) {
        const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
        return t.filter.includes(e.type) && r
    }
    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= Xa && this.cachedEventUids.clear(),
        this.cachedEventUids.has(Kt(e))
    }
    saveEventToCache(e) {
        this.cachedEventUids.add(Kt(e)),
        this.lastProcessedEventTime = Date.now()
    }
}
function Kt(n) {
    return [n.type, n.eventId, n.sessionId, n.tenantId].filter(e => e).join("-")
}
function tr({
    type: n,
    error: e
}) {
    return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
}
function eo(n) {
    switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
        return !0;
    case "unknown":
        return tr(n);
    default:
        return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function to(n, e = {}) {
    return Ge(n, "GET", "/v1/projects", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const no = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, ro = /^https?/;
async function io(n) {
    if (n.config.emulator)
        return;
    const {
        authorizedDomains: e
    } = await to(n);
    for (const t of e)
        try {
            if (so(t))
                return
        } catch {}
    O(n, "unauthorized-domain")
}
function so(n) {
    const e = ot(), {
        protocol: t,
        hostname: r
    } = new URL(e);
    if (n.startsWith("chrome-extension://")) {
        const a = new URL(n);
        return a.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && a.hostname === r
    }
    if (!ro.test(t))
        return !1;
    if (no.test(n))
        return r === n;
    const i = n.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao = new we(3e4, 6e4);
function Jt() {
    const n = R().___jsl;
    if (n != null && n.H) {
        for (const e of Object.keys(n.H))
            if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
                for (let t = 0; t < n.CP.length; t++)
                    n.CP[t] = null
    }
}
function oo(n) {
    return new Promise((e, t) => {
        var r,
        i,
        s;
        function a() {
            Jt(),
            gapi.load("gapi.iframes", {
                callback: () => {
                    e(gapi.iframes.getContext())
                },
                ontimeout: () => {
                    Jt(),
                    t(A(n, "network-request-failed"))
                },
                timeout: ao.get()
            })
        }
        if (!((i = (r = R().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
            e(gapi.iframes.getContext());
        else if (!((s = R().gapi) === null || s === void 0) && s.load)
            a();
        else {
            const c = Ba("iframefcb");
            return R()[c] = () => {
                gapi.load ? a() : t(A(n, "network-request-failed"))
            },
            Fa(`https://apis.google.com/js/api.js?onload=${c}`).catch(l => t(l))
        }
    }).catch(e => {
        throw De = null,
        e
    })
}
let De = null;
function co(n) {
    return De = De || oo(n),
    De
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lo = new we(5e3, 15e3), uo = "__/auth/iframe", ho = "emulator/auth/iframe", fo = {
    style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
    },
    "aria-hidden": "true",
    tabindex: "-1"
}, po = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function mo(n) {
    const e = n.config;
    p(e.authDomain, n, "auth-domain-config-required");
    const t = e.emulator ? yt(e, ho) : `https://${n.config.authDomain}/${uo}`,
    r = {
        apiKey: e.apiKey,
        appName: n.name,
        v: We
    },
    i = po.get(n.config.apiHost);
    i && (r.eid = i);
    const s = n._getFrameworks();
    return s.length && (r.fw = s.join(",")),
`${t}?${Ie(r).slice(1)}`
}
async function go(n) {
    const e = await co(n),
    t = R().gapi;
    return p(t, n, "internal-error"),
    e.open({
        where: document.body,
        url: mo(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: fo,
        dontclear: !0
    }, r => new Promise(async(i, s) => {
            await r.restyle({
                setHideOnLeave: !1
            });
            const a = A(n, "network-request-failed"),
            c = R().setTimeout(() => {
                s(a)
            }, lo.get());
            function l() {
                R().clearTimeout(c),
                i(r)
            }
            r.ping(l).then(l, () => {
                s(a)
            })
        }))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vo = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}, _o = 500, bo = 600, yo = "_blank", Io = "http://localhost";
class Zt {
    constructor(e) {
        this.window = e,
        this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch {}
    }
}
function wo(n, e, t, r = _o, i = bo) {
    const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let c = "";
    const l = Object.assign(Object.assign({}, vo), {
        width: r.toString(),
        height: i.toString(),
        top: s,
        left: a
    }),
    d = I().toLowerCase();
    t && (c = Pn(d) ? yo : t),
    Ln(d) && (e = e || Io, l.scrollbars = "yes");
    const f = Object.entries(l).reduce((_, [y, T]) => `${_}${y}=${T},`, "");
    if (oa(d) && c !== "_self")
        return Eo(e || "", c), new Zt(null);
    const m = window.open(e || "", c, f);
    p(m, n, "popup-blocked");
    try {
        m.focus()
    } catch {}
    return new Zt(m)
}
function Eo(n, e) {
    const t = document.createElement("a");
    t.href = n,
    t.target = e;
    const r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
    t.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Co = "__/auth/handler", So = "emulator/auth/handler";
function Yt(n, e, t, r, i, s) {
    p(n.config.authDomain, n, "auth-domain-config-required"),
    p(n.config.apiKey, n, "invalid-api-key");
    const a = {
        apiKey: n.config.apiKey,
        appName: n.name,
        authType: t,
        redirectUrl: r,
        v: We,
        eventId: i
    };
    if (e instanceof Et) {
        e.setDefaultLanguage(n.languageCode),
        a.providerId = e.providerId || "",
        Fi(e.getCustomParameters()) || (a.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [l, d] of Object.entries(s || {}))
            a[l] = d
    }
    if (e instanceof Ee) {
        const l = e.getScopes().filter(d => d !== "");
        l.length > 0 && (a.scopes = l.join(","))
    }
    n.tenantId && (a.tid = n.tenantId);
    const c = a;
    for (const l of Object.keys(c))
        c[l] === void 0 && delete c[l];
    return `${To(n)}?${Ie(c).slice(1)}`
}
function To({
    config: n
}) {
    return n.emulator ? yt(n, So) : `https://${n.authDomain}/${Co}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt = "webStorageSupport";
class ko {
    constructor() {
        this.eventManagers = {},
        this.iframes = {},
        this.originValidationPromises = {},
        this._redirectPersistence = Kn,
        this._completeRedirectFn = Ya,
        this._overrideRedirectResult = Ka
    }
    async _openPopup(e, t, r, i) {
        var s;
        M((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
        const a = Yt(e, t, r, ot(), i);
        return wo(e, a, Ct())
    }
    async _openRedirect(e, t, r, i) {
        return await this._originValidation(e),
        ka(Yt(e, t, r, ot(), i)),
        new Promise(() => {})
    }
    _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
            const {
                manager: i,
                promise: s
            } = this.eventManagers[t];
            return i ? Promise.resolve(i) : (M(s, "If manager is not set, promise should be"), s)
        }
        const r = this.initAndGetManager(e);
        return this.eventManagers[t] = {
            promise: r
        },
        r.catch(() => {
            delete this.eventManagers[t]
        }),
        r
    }
    async initAndGetManager(e) {
        const t = await go(e),
        r = new Qa(e);
        return t.register("authEvent", i => (p(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"), {
                status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
            }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
        this.eventManagers[e._key()] = {
            manager: r
        },
        this.iframes[e._key()] = t,
        r
    }
    _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(tt, {
            type: tt
        }, i => {
            var s;
            const a = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[tt];
            a !== void 0 && t(!!a),
            O(e, "internal-error")
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(e) {
        const t = e._key();
        return this.originValidationPromises[t] || (this.originValidationPromises[t] = io(e)),
        this.originValidationPromises[t]
    }
    get _shouldInitProactively() {
        return Hn() || wt() || qe()
    }
}
const xo = ko;
var Xt = "@firebase/auth", Qt = "0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No {
    constructor(e) {
        this.auth = e,
        this.internalListeners = new Map
    }
    getUid() {
        var e;
        return this.assertAuthConfigured(),
        ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
    }
    async getToken(e) {
        return this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(e)
        }
         : null
    }
    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(), this.internalListeners.has(e))
            return;
        const t = this.auth.onIdTokenChanged(r => {
            e((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
        });
        this.internalListeners.set(e, t),
        this.updateProactiveRefresh()
    }
    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        p(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(n) {
    switch (n) {
    case "Node":
        return "node";
    case "ReactNative":
        return "rn";
    case "Worker":
        return "webworker";
    case "Cordova":
        return "cordova";
    default:
        return
    }
}
function Ro(n) {
    pe(new ce("auth", (e, {
                options: t
            }) => {
            const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"), {
                apiKey: s,
                authDomain: a
            } = r.options;
            return ((c, l) => {
                p(s && !s.includes(":"), "invalid-api-key", {
                    appName: c.name
                }),
                p(!(a != null && a.includes(":")), "argument-error", {
                    appName: c.name
                });
                const d = {
                    apiKey: s,
                    authDomain: a,
                    clientPlatform: n,
                    apiHost: "identitytoolkit.googleapis.com",
                    tokenApiHost: "securetoken.googleapis.com",
                    apiScheme: "https",
                    sdkClientVersion: Vn(n)
                },
                f = new ua(c, l, d);
                return js(f, t),
                f
            })(r, i)
        }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, r) => {
            e.getProvider("auth-internal").initialize()
        })),
    pe(new ce("auth-internal", e => {
            const t = Ke(e.getProvider("auth").getImmediate());
            return (r => new No(r))(t)
        }, "PRIVATE").setInstantiationMode("EXPLICIT")),
    se(Xt, Qt, Ao(n)),
    se(Xt, Qt, "esm2017")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo = 5 * 60, Do = yn("authIdTokenMaxAge") || Oo;
let en = null;
const Lo = n => async e => {
    const t = e && await e.getIdTokenResult(),
    r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
    if (r && r > Do)
        return;
    const i = t == null ? void 0 : t.token;
    en !== i && (en = i, await fetch(n, {
            method: i ? "POST" : "DELETE",
            headers: i ? {
                Authorization: `Bearer ${i}`
            }
             : {}
        }))
};
function Po(n = ks()) {
    const e = wn(n, "auth");
    if (e.isInitialized())
        return e.getImmediate();
    const t = Vs(n, {
        popupRedirectResolver: xo,
        persistence: [Ma, Ca, Kn]
    }),
    r = yn("authTokenSyncURL");
    if (r) {
        const s = Lo(r);
        ya(t, s, () => s(t.currentUser)),
        ba(t, a => s(a))
    }
    const i = Oi("auth");
    return i && ha(t, `http://${i}`),
    t
}
Ro("Browser");
function Mo({
    children: n,
    className: e
}) {
    return o("div", {
        className: C(e, "w-fit rounded-full bg-danger px-2.5 py-1.5 text-center text-label text-white"),
        children: n
    })
}
function $({
    className: n,
    title: e,
    description: t,
    danger: r = !1
}) {
    return u("div", {
        className: n,
        children: [e && o("p", {
                className: C("mb-3 text-[24px] font-bold leading-[1.5]", r ? "text-danger" : "text-primary"),
                children: e
            }), t && o("p", {
                className: "text-body text-middle-hard-grey",
                children: t
            })]
    })
}
function _e({
    className: n,
    ...e
}) {
    return o(zr, {
        className: C("w-full max-w-[360px] rounded-xl border-light-grey px-6 py-2.5 text-body shadow-card", n),
        ...e
    })
}
const k = Object.freeze({
    EXPIRED_ACTION_CODE: "auth/expired-action-code",
    INVALID_ACTION_CODE: "auth/invalid-action-code",
    INVALID_EMAIL: "auth/invalid-email",
    USER_DISABLED: "auth/user-disabled",
    NETWORK_REQUEST_FAILED: "network-request-failed",
    DIFFERENT_DEVICE: "differentDevice",
    SOMETHING_WENT_WRONG: "somethingWentWrong"
}), lt = "email", Uo = n => typeof n == "string", Fo = n => n instanceof Error && "code" in n && Uo(n.code);
En({
    apiKey: "AIzaSyCChCpgZZ4vfNoc_MkkaN_b7h3IsKkVxRE",
    authDomain: "project-meta-6138f.firebaseapp.com",
    projectId: "project-meta-6138f",
    storageBucket: "project-meta-6138f.appspot.com",
    messagingSenderId: "20580241631",
    appId: "1:20580241631:web:206d68f7c6488bcc17196a"
});
function Bo({
    email: n,
    setEmail: e,
    goToNextStep: t,
    goToEmailFailure: r
}) {
    const [i, s] = h.useState(""),
    a = () => {
        s("The email entered is not valid.")
    },
    c = W(), {
        execute: l
    } = be(async() => {
        if (n === "") {
            a();
            return
        }
        try {
            await nr(n),
            await Le.setItem("emailForSignIn", n),
            t("emailLink")
        } catch (d) {
            if (console.error(d), fr.plainObject(d))
                switch (d.code) {
                case k.INVALID_EMAIL:
                    a();
                    break;
                case k.NETWORK_REQUEST_FAILED:
                    c(cn(!1));
                    break;
                default:
                    r();
                    break
                }
            Pe(d)
        }
    });
    return ft("keyup", {
        listener: d => {
            ze(d) && (l(), d.preventDefault())
        }
    }),
    u(S, {
        children: [u("div", {
                className: "m-auto min-h-70 w-full max-w-180",
                children: [o($, {
                        title: "Let’s get started!",
                        description: "Please confirm your email to continue"
                    }), o("input", {
                        autoFocus: !0,
                        className: "mt-4 w-full bg-transparent text-center text-h2 font-semibold placeholder:font-semibold placeholder:text-transparent-text",
                        type: "email",
                        placeholder: "your e-mail",
                        value: n,
                        onChange: d => {
                            e(d.target.value),
                            s("")
                        },
                        required: !0
                    }), i && o(Mo, {
                        className: "mx-auto mt-8",
                        children: i
                    })]
            }), u("div", {
                className: "fixed bottom-10 left-1/2 -translate-x-1/2",
                children: [o(_e, {
                        onClick: l,
                        children: "Continue"
                    }), o("p", {
                        className: "my-3 text-body text-middle-hard-grey",
                        children: "Or"
                    }), u(_e, {
                        style: {
                            backgroundColor: "var(--tooltip-bg)",
                            display: "inline-flex"
                        },
                        className: "items-center justify-center",
                        onClick: async() => {
                            if (ln) {
                                const d = `https://signin.heptabase.com/?heptabase=true${rt()}#/google`;
                                window.open(d, "_blank"),
                                t("google")
                            } else {
                                const d = Po(),
                                f = new N;
                                try {
                                    const m = await za(d, f),
                                    _ = N.credentialFromResult(m);
                                    dn(_ != null, "credential is null");
                                    const y = `?googleAuth=true&idToken=${_.idToken}${rt()}`;
                                    window.location.replace(y)
                                } catch (m) {
                                    if (console.error(m), Fo(m) && m.code === "auth/popup-blocked")
                                        return;
                                    Pe(m),
                                    r()
                                }
                            }
                        },
                        children: [o(gi, {
                                className: "mr-2 size-6 fill-background-primary"
                            }), "Sign in with Google"]
                    }), u("p", {
                        className: "mt-6 text-label text-middle-hard-grey",
                        children: ["By pressing continue, you accept our", " ", o(Ue, {
                                className: "text-middle-hard-grey",
                                href: pr,
                                children: "Terms of Service"
                            }), " ", "and", " ", o(Ue, {
                                className: "text-middle-hard-grey",
                                href: mr,
                                children: "Privacy Policy"
                            }), "."]
                    })]
            })]
    })
}
async function nr(n) {
    let e = ln ? `https://signin.heptabase.com?${lt}=${n}&heptabase=true` : `${hn()}?${lt}=${n}&heptabase=true`;
    e += rt(),
    await Me.sendSignInLinkToEmail(n, {
        url: e,
        handleCodeInApp: !0
    })
}
function Ho({
    validationErrorCode: n,
    resetValidationErrorCode: e,
    goToEmailCheck: t,
    goToEmailConfirmation: r
}) {
    const i = W(), {
        execute: s
    } = be(async() => {
        try {
            const c = await Le.getItem("emailForSignIn");
            await nr(c),
            t()
        } catch (c) {
            switch (console.error(c), c == null ? void 0 : c.code) {
            case k.NETWORK_REQUEST_FAILED:
                i(cn(!1));
                break;
            default:
                e();
                break
            }
            Pe(c)
        }
    });
    function a() {
        switch (n) {
        case k.EXPIRED_ACTION_CODE:
        case k.INVALID_ACTION_CODE:
            return u(S, {
                children: [o($, {
                        className: "mb-6",
                        title: "Oops, login link expired!",
                        description: "You can resend confirmation email to continue the login process.",
                        danger: !0
                    }), o(he, {
                        onClick: s,
                        className: "border-light-middle-grey",
                        children: "Resend Email"
                    })]
            });
        case k.INVALID_EMAIL:
        case k.USER_DISABLED:
            return u(S, {
                children: [o($, {
                        className: "mb-6",
                        title: "Your email is not valid",
                        description: "Please try another email to continue the login process.",
                        danger: !0
                    }), o(he, {
                        onClick: r,
                        className: "border-light-middle-grey",
                        children: "Use Another Email"
                    })]
            });
        case k.DIFFERENT_DEVICE:
            return u(S, {
                children: [o($, {
                        className: "mb-6",
                        title: "Oops, wrong device!",
                        description: u(S, {
                            children: ["You would need to send a confirmation email and", o("br", {}), "click the login link", " ", o("span", {
                                    className: "font-semibold text-active",
                                    children: "from the same device"
                                }), "."]
                        }),
                        danger: !0
                    }), o(he, {
                        onClick: r,
                        className: "border-light-middle-grey",
                        children: "Send Email from This Device"
                    })]
            });
        default:
            return u(S, {
                children: [o(pt, {
                        className: "mb-6 size-20 rounded-[17.864px] shadow-card"
                    }), o($, {
                        className: "mb-6",
                        description: u(S, {
                            children: ["Oops! Login process failed.", o("br", {}), "You may", " ", o(Ue, {
                                    href: gr,
                                    className: "text-middle-hard-grey",
                                    children: "contact us for help"
                                }), " ", "or try login again."]
                        }),
                        danger: !0
                    }), o(he, {
                        className: "border-light-middle-grey",
                        onClick: r,
                        children: "Login Again"
                    })]
            })
        }
    }
    return o("div", {
        className: "m-auto min-h-70",
        children: a()
    })
}
function tn(n) {
    return new URLSearchParams(window.location.search).get(n)
}
function Vo({
    signInMethod: n,
    setEmail: e,
    onFailure: t
}) {
    return h.useEffect(function () {
        (async() => {
            try {
                if (n === "emailLink") {
                    const i = await Le.getItem("emailForSignIn");
                    if (i)
                        await Me.signInWithEmailLink(i, window.location.href), await Le.removeItem("emailForSignIn");
                    else {
                        console.error("It is not allowed to use different devices to confirm the email and open the sign-in email link.");
                        const s = tn(lt);
                        e(s),
                        t(k.DIFFERENT_DEVICE)
                    }
                } else {
                    const i = tn("idToken");
                    await Me.signInWithCredential(i)
                }
            } catch (i) {
                console.error(i),
                vr(i) && _r(i, "code", !1) && br(i.code) ? t(i.code) : t(yr(i)),
                i instanceof wr || Pe(i)
            }
            Ir() && window.heptaElectronApi.signIn(),
            Wr()
        })()
    }, []),
    o("div", {
        className: "m-auto min-h-70",
        children: o($, {
            title: "Validating..",
            description: "Just a second."
        })
    })
}
function jo({
    goToNextStep: n
}) {
    ft("keyup", {
        listener: t => {
            ze(t) && (n(), t.preventDefault())
        }
    });
    const e = Gr();
    return o("div", {
        className: "full-screen z-20 flex items-center justify-center",
        children: u("div", {
            className: "box-border flex w-full max-w-190 flex-col items-center px-8 py-6 text-center",
            children: [o(fn, {
                    className: "absolute top-0 h-12 w-full"
                }), e && o("p", {
                    className: "mb-8 rounded-full bg-successful px-2.5 py-1.5 text-label font-medium text-white",
                    children: "Great news, you get $5 off your subscription from invite!"
                }), o(pt, {
                    className: "mb-8 size-20 rounded-[17.864px] shadow-card"
                }), o("p", {
                    className: "mb-6 text-[32px] font-bold leading-normal text-primary",
                    children: "Welcome to Heptabase"
                }), o("p", {
                    className: "mb-8 text-[20px] leading-normal text-middle-hard-grey",
                    children: "Learn anything with a deep understanding."
                }), o(_e, {
                    onClick: n,
                    children: "Get Started"
                })]
        })
    })
}
function $o() {
    const n = W(),
    [e, t] = h.useState(""),
    [r, i] = ht(!1),
    s = {
        displayName: e === ""
    },
    a = () => !Object.values(s).includes(!0), {
        execute: c
    } = be(async() => {
        const {
            name: l
        } = await ut.updateName(e);
        n(Er(l))
    });
    return ft("keyup", {
        listener: l => {
            ze(l) && (c(), l.preventDefault())
        }
    }),
    o("div", {
        className: "text-left",
        children: u("div", {
            children: [o(xe, {
                    text: "What’s your name?",
                    isInvalid: r && s.displayName
                }), o(Ne, {
                    value: e,
                    placeholder: "Enter your name...",
                    required: !0,
                    isInvalid: r && s.displayName,
                    onChange: l => {
                        t(l.target.value)
                    }
                }), o(_e, {
                    className: "mx-auto mt-10 block",
                    onClick: () => {
                        if (!a()) {
                            i();
                            return
                        }
                        c()
                    },
                    children: "Continue"
                })]
        })
    })
}
const zo = "Others";
function Wo({
    onSubmit: n
}) {
    const [e, t] = h.useState(),
    [r, i] = h.useState(""),
    s = e === "others", {
        list: a,
        toggleItem: c
    } = qr(),
    [l, d] = h.useState(""),
    f = a.includes(Rt.others),
    [m, _] = h.useState(),
    [y, T] = h.useState(""),
    x = m === zo,
    D = "Choose an option",
    w = {
        jobsToBeDone: !e || s && !r,
        pastTools: a.length === 0 || f && !l,
        acquisitionChannel: !m || x && !y
    },
    q = () => !Object.values(w).includes(!0),
    [E, ne] = ht(!1),
    U = W(),
    F = on(), {
        execute: re
    } = be(async() => {
        const g = dt(F.getState()),
        ue = Cr(F.getState()),
        Tt = "self onboarding",
        Ye = s ? r : null,
        kt = f ? l : null,
        xt = x ? y : null;
        dn(e !== void 0, "should have chosen jobs to be done"),
        await Kr({
            FunctionName: "chartmogul-mutator",
            Payload: Sr(JSON.stringify({
                    idToken: await Me.getIdToken(),
                    customAttributes: [{
                            type: "String",
                            key: "Jobs_to_be_done",
                            value: e
                        }
                    ]
                }))
        }).catch(ir => {
            Tr.logger.error("TrackingError - unable to track critical customer attributes Jobs_to_be_done on chartmogul", {
                accountEmail: g,
                chosenJobsToBeDone: e,
                otherJobsToBeDone: Ye
            }),
            console.error("Failed to update customer attributes on chartmogul", ir)
        }),
        pn.identify({
            userId: ue,
            traits: {
                email: g,
                experience: Tt,
                "jobs to be done": [e],
                "other jobs to be done": Ye,
                "past tools": a,
                "others past tool": kt,
                "acquisition channel": m,
                "others acquisition channel": xt
            }
        }),
        await ut.update(g, {
            experience: Tt,
            jobsToBeDone: [e],
            otherJobsToBeDone: Ye,
            pastTools: a,
            othersPastTool: kt,
            acquisitionChannel: m,
            othersAcquisitionChannel: xt,
            didCompleteForm: !0
        }),
        U(kr([e])),
        U(xr()),
        n()
    }),
    b = "What is it?";
    return u("div", {
        className: "text-left",
        children: [u("div", {
                children: [o(xe, {
                        text: "What is your main purpose for using Heptabase?",
                        isInvalid: E && w.jobsToBeDone
                    }), o("div", {
                        className: "grid cursor-pointer grid-cols-1 gap-3",
                        children: Nr(ri).map(([g, ue]) => o("div", {
                                className: C("select-none rounded px-4 py-2.5", e === g ? "text-active shadow-[inset_0_0_0_1px_var(--active-item)]" : "text-middle-hard-grey shadow-[inset_0_0_0_1px_var(--light-grey)]"),
                                onClick: () => {
                                    t(g)
                                },
                                children: o("div", {
                                    className: "text-label",
                                    children: ue
                                })
                            }, g))
                    }), s && o(Ne, {
                        className: "mt-3",
                        value: r,
                        placeholder: b,
                        required: !0,
                        isInvalid: E && w.jobsToBeDone,
                        onChange: g => {
                            i(g.target.value)
                        }
                    })]
            }), u("div", {
                children: [o(xe, {
                        text: "Which of the following tools have you been using a lot? Choose one or more.",
                        isInvalid: E && w.pastTools
                    }), o("div", {
                        className: "grid cursor-pointer grid-cols-2 gap-3",
                        children: Object.values(Rt).map(g => o("div", {
                                className: C("select-none rounded px-4 py-2.5", a.includes(g) ? "text-active shadow-[inset_0_0_0_1px_var(--active-item)]" : "text-middle-hard-grey shadow-[inset_0_0_0_1px_var(--light-grey)]"),
                                onClick: () => {
                                    c(g)
                                },
                                children: o("div", {
                                    className: "text-label",
                                    children: g
                                })
                            }, g))
                    }), f && o(Ne, {
                        className: "mt-3",
                        value: l,
                        placeholder: b,
                        required: !0,
                        isInvalid: E && w.pastTools,
                        onChange: g => {
                            d(g.target.value)
                        }
                    })]
            }), u("div", {
                children: [o(xe, {
                        text: "Where did you hear about Heptabase?",
                        isInvalid: E && w.acquisitionChannel
                    }), u("div", {
                        className: "relative",
                        children: [u("select", {
                                className: C("w-full rounded bg-no-repeat py-2.5 pl-4 pr-9 text-label text-middle-hard-grey focus:shadow-[inset_0_0_0_1px_var(--active-item)]", E && w.acquisitionChannel ? "shadow-[inset_0_0_0_1px_var(--danger-item)]" : "shadow-[inset_0_0_0_1px_var(--light-grey)]"),
                                value: m || D,
                                onChange: g => {
                                    _(g.target.value)
                                },
                                required: !0,
                                children: [o("option", {
                                        disabled: !0,
                                        children: D
                                    }), Object.values(ii).map(g => o("option", {
                                            children: g
                                        }, g))]
                            }), o(Jr, {
                                className: "pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 rotate-90 fill-middle-hard-grey"
                            })]
                    }), x && o(Ne, {
                        className: "mt-3",
                        value: y,
                        placeholder: b,
                        required: !0,
                        isInvalid: E && w.acquisitionChannel,
                        onChange: g => {
                            T(g.target.value)
                        }
                    })]
            }), o(_e, {
                className: "mx-auto mt-10 block",
                onClick: () => {
                    if (!q()) {
                        ne();
                        return
                    }
                    re()
                },
                children: "Continue"
            })]
    })
}
function Go({
    onFinishForm: n
}) {
    const e = Z(dt),
    t = Z(Ar),
    r = mn();
    return o("div", {
        className: "py-[120px]",
        children: u("div", {
            className: "mx-auto box-border max-w-[800px] rounded-md bg-background-secondary px-[136px] py-20 shadow-[inset_0_0_0_1px_var(--light-grey)]",
            children: [o("p", {
                    className: "mb-3 text-h3 font-semibold text-primary",
                    children: "Welcome to Heptabase"
                }), o("p", {
                    className: "text-label text-middle-hard-grey",
                    children: "First thing first, tell us a bit about yourself."
                }), t ? o($o, {}) : o(Wo, {
                    onSubmit: n
                }), u("p", {
                    className: "mt-10 text-label text-middle-hard-grey",
                    children: ["You’re creating an account for ", e, ".", o("br", {}), "If you don’t intend to set up a new account, you can", " ", o("span", {
                            onClick: r,
                            className: "cursor-pointer underline",
                            children: "login with another email"
                        }), "."]
                })]
        })
    })
}
const qo = 2e3, nn = 300, Ko = 500, rr = ({
    children: n,
    onButtonClick: e,
    buttonText: t,
    canShowNextButton: r = !0
}) => o("div", {
    className: "relative flex h-[458px] w-[520px] items-center justify-center",
    children: u("div", {
        className: "flex h-70 w-80 flex-col text-4.5 leading-[27px]",
        children: [o("div", {
                className: "flex-1",
                children: n
            }), u("div", {
                className: C("flex items-center gap-4 transition-opacity", r ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                style: {
                    transitionDuration: `${qo}ms`
                },
                children: [o(Zr, {
                        onClick: e,
                        children: t
                    }), o("button", {
                        className: "text-label text-middle-grey",
                        onClick: e,
                        children: "Enter"
                    })]
            })]
    })
}), nt = ({
    content: n,
    imageX: e,
    imageY: t,
    imageSrc: r,
    imageWidth: i,
    onContinue: s,
    canShowNextButton: a
}) => o("div", {
    className: "flex size-full items-center",
    children: u(rr, {
        canShowNextButton: a,
        buttonText: "Continue",
        onButtonClick: s,
        children: [o("div", {
                className: "relative z-20",
                children: n
            }), o("img", {
                className: "absolute z-10",
                style: {
                    width: i,
                    left: e,
                    top: t
                },
                src: r,
                alt: ""
            })]
    })
});
function Jo({
    totalPages: n,
    currentPage: e,
    className: t
}) {
    return o("div", {
        className: C("flex items-center rounded-[50px] px-1.5 py-2", t),
        children: Array(n).fill(void 0).map((r, i) => o("span", {
                className: C("h-2 w-2 rounded-circle mx-1", i + 1 === e ? "bg-primary" : "bg-middle-grey")
            }, i))
    })
}
function Zo({
    onContinue: n
}) {
    const e = h.useRef();
    return h.useEffect(() => () => {
        e.current && clearTimeout(e.current)
    }, []),
    o("div", {
        className: "flex size-full items-center justify-center text-center text-[20px] font-medium leading-[40px] tracking-wider",
        children: u(Yr.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: .7,
                duration: 1
            },
            onAnimationComplete: () => {
                e.current && clearTimeout(e.current),
                e.current = setTimeout(() => {
                    n()
                }, 2500)
            },
            children: [o("p", {
                    children: "Learn anything,"
                }), u("p", {
                    children: ["with a deep ", o("span", {
                            className: "text-active",
                            children: "understanding."
                        })]
                })]
        })
    })
}
const Yo = "_appBlock_1ddh3_1", Xo = "_show_1ddh3_5", ie = {
    appBlock: Yo,
    show: Xo
}, Qo = ({
    finishValueSlides: n
}) => {
    const e = W(),
    t = h.useRef(null),
    [r, i] = h.useState(!1),
    s = () => {
        if (t.current == null)
            return;
        const c = t.current.querySelectorAll(`.${ie.appBlock}`);
        c.forEach((l, d) => {
            setTimeout(() => {
                l.classList.add(ie.show)
            }, nn * (d + 1)),
            d === c.length - 1 && setTimeout(() => {
                i(!0)
            }, nn * 4 + Ko)
        })
    },
    a = h.useRef();
    return un(() => {
        a.current && clearTimeout(a.current),
        a.current = setTimeout(() => {
            s()
        }, 1e3)
    }),
    h.useEffect(function () {
        const l = d => {
            d.key === "Enter" && r && (ke || e(At()), n())
        };
        return document.addEventListener("keyup", l),
        () => {
            document.removeEventListener("keyup", l)
        }
    }, [r, n, e]),
    u("div", {
        className: "flex size-full items-center gap-25",
        children: [o(rr, {
                canShowNextButton: r,
                buttonText: "Start",
                onButtonClick: () => {
                    ke || e(At()),
                    n()
                },
                children: u("div", {
                    children: [u("p", {
                            children: ["Meet Heptabase - a friendly and powerful", " ", o("span", {
                                    className: "font-semibold",
                                    children: "visual learning tool."
                                })]
                        }), o("br", {}), u("p", {
                            children: ["Let it help you make sense of all the", o("br", {}), "knowledge you've ever learned,"]
                        }), u("p", {
                            children: ["and use it to empower your learning,", o("br", {}), " research, and projects."]
                        })]
                })
            }), o("div", {
                children: u("svg", {
                    ref: t,
                    width: "424",
                    height: "478",
                    viewBox: "0 0 424 478",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [u("g", {
                            className: ie.appBlock,
                            children: [o("rect", {
                                    width: "206",
                                    height: "188",
                                    rx: "16",
                                    fill: "url(#journal-bg)",
                                    fillOpacity: "0.2"
                                }), u("g", {
                                    children: [o("rect", {
                                            x: "87",
                                            y: "40",
                                            width: "32",
                                            height: "32",
                                            rx: "8",
                                            fill: "url(#journal-icon)"
                                        }), o("path", {
                                            d: "M103.001 62.5334C103.186 62.5334 103.366 62.4787 103.52 62.3761C103.673 62.2736 103.793 62.1278 103.864 61.9572C103.934 61.7867 103.953 61.599 103.917 61.418C103.881 61.2369 103.792 61.0706 103.661 60.9401C103.531 60.8096 103.364 60.7207 103.183 60.6847C103.002 60.6487 102.815 60.6671 102.644 60.7378C102.474 60.8084 102.328 60.928 102.225 61.0815C102.123 61.235 102.068 61.4155 102.068 61.6001C102.068 61.8476 102.166 62.085 102.341 62.26C102.516 62.4351 102.754 62.5334 103.001 62.5334ZM107.668 62.5334C107.853 62.5334 108.033 62.4787 108.187 62.3761C108.34 62.2736 108.46 62.1278 108.53 61.9572C108.601 61.7867 108.619 61.599 108.583 61.418C108.547 61.2369 108.458 61.0706 108.328 60.9401C108.197 60.8096 108.031 60.7207 107.85 60.6847C107.669 60.6487 107.481 60.6671 107.311 60.7378C107.14 60.8084 106.994 60.928 106.892 61.0815C106.789 61.235 106.735 61.4155 106.735 61.6001C106.735 61.8476 106.833 62.085 107.008 62.26C107.183 62.4351 107.42 62.5334 107.668 62.5334ZM107.668 58.8001C107.853 58.8001 108.033 58.7453 108.187 58.6428C108.34 58.5402 108.46 58.3944 108.53 58.2239C108.601 58.0534 108.619 57.8657 108.583 57.6846C108.547 57.5036 108.458 57.3373 108.328 57.2068C108.197 57.0762 108.031 56.9873 107.85 56.9513C107.669 56.9153 107.481 56.9338 107.311 57.0044C107.14 57.0751 106.994 57.1947 106.892 57.3482C106.789 57.5017 106.735 57.6821 106.735 57.8667C106.735 58.1143 106.833 58.3517 107.008 58.5267C107.183 58.7017 107.42 58.8001 107.668 58.8001ZM103.001 58.8001C103.186 58.8001 103.366 58.7453 103.52 58.6428C103.673 58.5402 103.793 58.3944 103.864 58.2239C103.934 58.0534 103.953 57.8657 103.917 57.6846C103.881 57.5036 103.792 57.3373 103.661 57.2068C103.531 57.0762 103.364 56.9873 103.183 56.9513C103.002 56.9153 102.815 56.9338 102.644 57.0044C102.474 57.0751 102.328 57.1947 102.225 57.3482C102.123 57.5017 102.068 57.6821 102.068 57.8667C102.068 58.1143 102.166 58.3517 102.341 58.5267C102.516 58.7017 102.754 58.8001 103.001 58.8001ZM109.535 47.6001H108.601V46.6667C108.601 46.4192 108.503 46.1818 108.328 46.0068C108.153 45.8317 107.916 45.7334 107.668 45.7334C107.42 45.7334 107.183 45.8317 107.008 46.0068C106.833 46.1818 106.735 46.4192 106.735 46.6667V47.6001H99.268V46.6667C99.268 46.4192 99.1696 46.1818 98.9946 46.0068C98.8196 45.8317 98.5822 45.7334 98.3346 45.7334C98.0871 45.7334 97.8497 45.8317 97.6747 46.0068C97.4996 46.1818 97.4013 46.4192 97.4013 46.6667V47.6001H96.468C95.7254 47.6001 95.0132 47.8951 94.4881 48.4202C93.963 48.9453 93.668 49.6575 93.668 50.4001V63.4667C93.668 64.2093 93.963 64.9215 94.4881 65.4466C95.0132 65.9717 95.7254 66.2667 96.468 66.2667H109.535C110.277 66.2667 110.989 65.9717 111.515 65.4466C112.04 64.9215 112.335 64.2093 112.335 63.4667V50.4001C112.335 49.6575 112.04 48.9453 111.515 48.4202C110.989 47.8951 110.277 47.6001 109.535 47.6001ZM110.468 63.4667C110.468 63.7143 110.37 63.9517 110.195 64.1267C110.02 64.3017 109.782 64.4001 109.535 64.4001H96.468C96.2204 64.4001 95.983 64.3017 95.808 64.1267C95.633 63.9517 95.5346 63.7143 95.5346 63.4667V55.0667H110.468V63.4667ZM110.468 53.2001H95.5346V50.4001C95.5346 50.1525 95.633 49.9151 95.808 49.7401C95.983 49.5651 96.2204 49.4667 96.468 49.4667H97.4013V50.4001C97.4013 50.6476 97.4996 50.885 97.6747 51.06C97.8497 51.2351 98.0871 51.3334 98.3346 51.3334C98.5822 51.3334 98.8196 51.2351 98.9946 51.06C99.1696 50.885 99.268 50.6476 99.268 50.4001V49.4667H106.735V50.4001C106.735 50.6476 106.833 50.885 107.008 51.06C107.183 51.2351 107.42 51.3334 107.668 51.3334C107.916 51.3334 108.153 51.2351 108.328 51.06C108.503 50.885 108.601 50.6476 108.601 50.4001V49.4667H109.535C109.782 49.4667 110.02 49.5651 110.195 49.7401C110.37 49.9151 110.468 50.1525 110.468 50.4001V53.2001ZM98.3346 58.8001C98.5192 58.8001 98.6997 58.7453 98.8532 58.6428C99.0067 58.5402 99.1263 58.3944 99.1969 58.2239C99.2676 58.0534 99.286 57.8657 99.25 57.6846C99.214 57.5036 99.1251 57.3373 98.9946 57.2068C98.8641 57.0762 98.6978 56.9873 98.5167 56.9513C98.3357 56.9153 98.148 56.9338 97.9775 57.0044C97.8069 57.0751 97.6612 57.1947 97.5586 57.3482C97.456 57.5017 97.4013 57.6821 97.4013 57.8667C97.4013 58.1143 97.4996 58.3517 97.6747 58.5267C97.8497 58.7017 98.0871 58.8001 98.3346 58.8001ZM98.3346 62.5334C98.5192 62.5334 98.6997 62.4787 98.8532 62.3761C99.0067 62.2736 99.1263 62.1278 99.1969 61.9572C99.2676 61.7867 99.286 61.599 99.25 61.418C99.214 61.2369 99.1251 61.0706 98.9946 60.9401C98.8641 60.8096 98.6978 60.7207 98.5167 60.6847C98.3357 60.6487 98.148 60.6671 97.9775 60.7378C97.8069 60.8084 97.6612 60.928 97.5586 61.0815C97.456 61.235 97.4013 61.4155 97.4013 61.6001C97.4013 61.8476 97.4996 62.085 97.6747 62.26C97.8497 62.4351 98.0871 62.5334 98.3346 62.5334Z",
                                            fill: "white"
                                        })]
                                }), o("text", {
                                    fill: "black",
                                    fillOpacity: "0.72",
                                    fontFamily: "Inter",
                                    fontSize: "14",
                                    fontWeight: "500",
                                    letterSpacing: "0px",
                                    children: o("tspan", {
                                        x: "78.1582",
                                        y: "99.0909",
                                        children: "Journal"
                                    })
                                }), u("text", {
                                    fill: "black",
                                    fillOpacity: "0.32",
                                    fontFamily: "Inter",
                                    fontSize: "12",
                                    letterSpacing: "0px",
                                    children: [u("tspan", {
                                            x: "43.2695",
                                            y: "125.364",
                                            children: ["Write down everyday", " "]
                                        }), o("tspan", {
                                            x: "45.8711",
                                            y: "143.364",
                                            children: "thoughts and todos."
                                        })]
                                }), o("rect", {
                                    x: "0.5",
                                    y: "0.5",
                                    width: "205",
                                    height: "187",
                                    rx: "15.5",
                                    stroke: "black",
                                    strokeOpacity: "0.04"
                                })]
                        }), u("g", {
                            className: ie.appBlock,
                            children: [o("rect", {
                                    x: "218",
                                    width: "206",
                                    height: "188",
                                    rx: "16",
                                    fill: "url(#whiteboard-bg)",
                                    fillOpacity: "0.2"
                                }), u("g", {
                                    children: [o("rect", {
                                            x: "305",
                                            y: "40",
                                            width: "32",
                                            height: "32",
                                            rx: "8",
                                            fill: "url(#whiteboard-icon)"
                                        }), o("path", {
                                            d: "M329.7 49.5132L324.1 47.6466H324.035C323.991 47.6422 323.947 47.6422 323.904 47.6466H323.689H323.568H323.503L318.201 49.4666L312.9 47.6466C312.76 47.6003 312.61 47.588 312.464 47.6107C312.318 47.6334 312.18 47.6905 312.06 47.7772C311.939 47.8631 311.841 47.9765 311.773 48.1079C311.705 48.2394 311.669 48.3851 311.668 48.5332V61.5999C311.667 61.7956 311.728 61.9864 311.842 62.1455C311.956 62.3047 312.117 62.4239 312.303 62.4866L317.903 64.3532C318.091 64.4145 318.293 64.4145 318.481 64.3532L323.801 62.5799L329.103 64.3999C329.202 64.4133 329.302 64.4133 329.401 64.3999C329.596 64.4026 329.787 64.3402 329.943 64.2226C330.063 64.1367 330.162 64.0233 330.23 63.8919C330.298 63.7604 330.334 63.6146 330.335 63.4666V50.3999C330.335 50.2042 330.274 50.0133 330.16 49.8542C330.046 49.6951 329.885 49.5758 329.7 49.5132ZM317.268 62.1692L313.535 60.9279V49.8306L317.268 51.0719V62.1692ZM322.868 60.9279L319.135 62.1692V51.0719L322.868 49.8306V60.9279ZM328.468 62.1692L324.735 60.9279V49.8306L328.468 51.0719V62.1692Z",
                                            fill: "white"
                                        })]
                                }), o("text", {
                                    fill: "black",
                                    fillOpacity: "0.72",
                                    fontFamily: "Inter",
                                    fontSize: "14",
                                    fontWeight: "500",
                                    letterSpacing: "0px",
                                    children: o("tspan", {
                                        x: "278.262",
                                        y: "99.0909",
                                        children: "Whiteboards"
                                    })
                                }), u("text", {
                                    fill: "black",
                                    fillOpacity: "0.32",
                                    fontFamily: "Inter",
                                    fontSize: "12",
                                    letterSpacing: "0px",
                                    children: [u("tspan", {
                                            x: "258.504",
                                            y: "125.364",
                                            children: ["Synthesize notes with", " "]
                                        }), o("tspan", {
                                            x: "252.287",
                                            y: "143.364",
                                            children: "sections and mindmaps."
                                        })]
                                }), o("rect", {
                                    x: "218.5",
                                    y: "0.5",
                                    width: "205",
                                    height: "187",
                                    rx: "15.5",
                                    stroke: "black",
                                    strokeOpacity: "0.04"
                                })]
                        }), u("g", {
                            className: ie.appBlock,
                            children: [o("rect", {
                                    y: "200",
                                    width: "206",
                                    height: "188",
                                    rx: "16",
                                    fill: "url(#tag-bg)",
                                    fillOpacity: "0.2"
                                }), u("g", {
                                    children: [o("rect", {
                                            x: "87",
                                            y: "240",
                                            width: "32",
                                            height: "32",
                                            rx: "8",
                                            fill: "url(#tag-icon)"
                                        }), o("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M101.03 247.6C100.557 247.6 100.16 247.955 100.108 248.425L99.6814 252.266H96.4665C95.9511 252.266 95.5332 252.684 95.5332 253.2C95.5332 253.715 95.9511 254.133 96.4665 254.133H99.4739L99.0591 257.866H96.4665C95.9511 257.866 95.5332 258.284 95.5332 258.8C95.5332 259.315 95.9511 259.733 96.4665 259.733H98.8517L98.4477 263.37C98.3866 263.919 98.8167 264.4 99.3696 264.4C99.8423 264.4 100.239 264.044 100.292 263.574L100.718 259.733H104.452L104.048 263.37C103.987 263.919 104.417 264.4 104.97 264.4C105.442 264.4 105.839 264.044 105.892 263.574L106.318 259.733H109.533C110.049 259.733 110.467 259.315 110.467 258.8C110.467 258.284 110.049 257.866 109.533 257.866H106.526L106.941 254.133H109.533C110.049 254.133 110.467 253.715 110.467 253.2C110.467 252.684 110.049 252.266 109.533 252.266H107.148L107.552 248.63C107.613 248.08 107.183 247.6 106.63 247.6C106.157 247.6 105.76 247.955 105.708 248.425L105.281 252.266H101.548L101.952 248.63C102.013 248.08 101.583 247.6 101.03 247.6ZM101.341 254.133L100.926 257.866H104.659L105.074 254.133H101.341Z",
                                            fill: "white"
                                        })]
                                }), o("text", {
                                    fill: "black",
                                    fillOpacity: "0.72",
                                    fontFamily: "Inter",
                                    fontSize: "14",
                                    fontWeight: "500",
                                    letterSpacing: "0px",
                                    children: o("tspan", {
                                        x: "56.9463",
                                        y: "299.091",
                                        children: "Tag Database"
                                    })
                                }), u("text", {
                                    fill: "black",
                                    fillOpacity: "0.32",
                                    fontFamily: "Inter",
                                    fontSize: "12",
                                    letterSpacing: "0px",
                                    children: [u("tspan", {
                                            x: "27.3262",
                                            y: "325.364",
                                            children: ["Organize notes with tables", " "]
                                        }), o("tspan", {
                                            x: "65.1367",
                                            y: "343.364",
                                            children: "and kanbans."
                                        })]
                                }), o("rect", {
                                    x: "0.5",
                                    y: "200.5",
                                    width: "205",
                                    height: "187",
                                    rx: "15.5",
                                    stroke: "black",
                                    strokeOpacity: "0.04"
                                })]
                        }), u("g", {
                            className: ie.appBlock,
                            children: [o("rect", {
                                    x: "218",
                                    y: "200",
                                    width: "206",
                                    height: "188",
                                    rx: "16",
                                    fill: "url(#pdf-bg)",
                                    fillOpacity: "0.2"
                                }), u("g", {
                                    children: [o("rect", {
                                            x: "305",
                                            y: "240",
                                            width: "32",
                                            height: "32",
                                            rx: "8",
                                            fill: "url(#pdf-icon)"
                                        }), o("path", {
                                            d: "M330.773 262.365L329.84 258.762L326.9 247.945C326.836 247.707 326.681 247.503 326.467 247.379C326.254 247.254 326 247.22 325.761 247.282L322.149 248.216C322.063 248.12 321.958 248.044 321.841 247.991C321.723 247.938 321.597 247.909 321.468 247.908H312.135C311.887 247.908 311.65 248.006 311.475 248.181C311.3 248.356 311.201 248.594 311.201 248.841V263.774C311.201 264.022 311.3 264.259 311.475 264.434C311.65 264.609 311.887 264.708 312.135 264.708H321.468C321.715 264.708 321.953 264.609 322.128 264.434C322.303 264.259 322.401 264.022 322.401 263.774V256.308L324.455 263.98C324.509 264.183 324.631 264.363 324.801 264.488C324.97 264.613 325.177 264.678 325.388 264.67C325.468 264.68 325.55 264.68 325.631 264.67L330.139 263.466C330.258 263.435 330.369 263.379 330.467 263.304C330.565 263.229 330.647 263.135 330.708 263.028C330.806 262.821 330.829 262.587 330.773 262.365ZM315.84 262.878H313.04V261.012H315.84V262.878ZM315.84 259.145H313.04V253.545H315.84V259.145ZM315.84 251.678H313.04V249.812H315.84V251.678ZM320.507 262.878H317.707V261.012H320.507V262.878ZM320.507 259.145H317.707V253.545H320.507V259.145ZM320.507 251.678H317.707V249.812H320.507V251.678ZM322.607 250.054L325.313 249.326L325.799 251.128L323.092 251.856L322.607 250.054ZM325.024 259.07L323.577 253.657L326.284 252.929L327.731 258.342L325.024 259.07ZM325.957 262.673L325.472 260.872L328.179 260.144L328.664 261.945L325.957 262.673Z",
                                            fill: "white"
                                        })]
                                }), o("text", {
                                    fill: "black",
                                    fillOpacity: "0.72",
                                    fontFamily: "Inter",
                                    fontSize: "14",
                                    fontWeight: "500",
                                    letterSpacing: "0px",
                                    children: o("tspan", {
                                        x: "264.938",
                                        y: "299.091",
                                        children: "PDF Annotations"
                                    })
                                }), u("text", {
                                    fill: "black",
                                    fillOpacity: "0.32",
                                    fontFamily: "Inter",
                                    fontSize: "12",
                                    letterSpacing: "0px",
                                    children: [u("tspan", {
                                            x: "243.205",
                                            y: "325.364",
                                            children: ["Highlight and take notes on", " "]
                                        }), o("tspan", {
                                            x: "296.479",
                                            y: "343.364",
                                            children: "pdf files."
                                        })]
                                }), o("rect", {
                                    x: "218.5",
                                    y: "200.5",
                                    width: "205",
                                    height: "187",
                                    rx: "15.5",
                                    stroke: "black",
                                    strokeOpacity: "0.04"
                                }), !ke && u(S, {
                                    children: [u("text", {
                                            fill: "black",
                                            fillOpacity: "0.32",
                                            fontFamily: "Inter",
                                            fontSize: "12",
                                            letterSpacing: "0px",
                                            children: [u("tspan", {
                                                    x: "44.3047",
                                                    y: "417.364",
                                                    children: ["*No data lock-in. We export all of your notes to this backup", " "]
                                                }), o("tspan", {
                                                    x: "104.451",
                                                    y: "435.364",
                                                    children: `location every time you close the app:
`
                                                }), o("tspan", {
                                                    x: "212",
                                                    y: "454.364",
                                                    children: `
`
                                                }), u("tspan", {
                                                    x: "259.314",
                                                    y: "473.364",
                                                    children: ["p’", " "]
                                                })]
                                        }), o("text", {
                                            fill: "black",
                                            fillOpacity: "0.32",
                                            fontFamily: "Inter",
                                            fontSize: "12",
                                            fontStyle: "italic",
                                            letterSpacing: "0px",
                                            children: o("tspan", {
                                                x: "55.748",
                                                y: "473.364",
                                                children: "‘Documents/Heptabase-auto-backu"
                                            })
                                        }), o("text", {
                                            fill: "black",
                                            fillOpacity: "0.32",
                                            fontFamily: "Inter",
                                            fontSize: "12",
                                            letterSpacing: "0px",
                                            textDecoration: "underline",
                                            children: o("tspan", {
                                                x: "272.217",
                                                y: "473.364",
                                                className: "cursor-pointer",
                                                onClick: () => {
                                                    e(Xr())
                                                },
                                                children: "Change Location"
                                            })
                                        })]
                                })]
                        }), u("defs", {
                            children: [u("linearGradient", {
                                    id: "journal-bg",
                                    x1: "103",
                                    y1: "0",
                                    x2: "103",
                                    y2: "263.2",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#FF512F"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#DD2476"
                                        })]
                                }), u("linearGradient", {
                                    id: "journal-icon",
                                    x1: "103",
                                    y1: "40",
                                    x2: "103",
                                    y2: "84.8",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#FF512F"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#DD2476"
                                        })]
                                }), u("linearGradient", {
                                    id: "whiteboard-bg",
                                    x1: "321",
                                    y1: "188",
                                    x2: "321",
                                    y2: "-75.2",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#348F50"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#56B4D3"
                                        })]
                                }), u("linearGradient", {
                                    id: "whiteboard-icon",
                                    x1: "321",
                                    y1: "72",
                                    x2: "321",
                                    y2: "27.2",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#348F50"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#56B4D3"
                                        })]
                                }), u("linearGradient", {
                                    id: "tag-bg",
                                    x1: "103",
                                    y1: "388",
                                    x2: "103",
                                    y2: "124.8",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#E65C00"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#F9D423"
                                        })]
                                }), u("linearGradient", {
                                    id: "tag-icon",
                                    x1: "103",
                                    y1: "272",
                                    x2: "103",
                                    y2: "227.2",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#E65C00"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#F9D423"
                                        })]
                                }), u("linearGradient", {
                                    id: "pdf-bg",
                                    x1: "321",
                                    y1: "388",
                                    x2: "321",
                                    y2: "124.8",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#0046B6"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#51A2FF"
                                        })]
                                }), u("linearGradient", {
                                    id: "pdf-icon",
                                    x1: "321",
                                    y1: "272",
                                    x2: "321",
                                    y2: "227.2",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [o("stop", {
                                            stopColor: "#0046B6"
                                        }), o("stop", {
                                            offset: "1",
                                            stopColor: "#51A2FF"
                                        })]
                                })]
                        })]
                })
            })]
    })
}, ec = "_container_14vgi_1", tc = {
    container: ec
}, nc = 4, rn = 5;
function rc({
    goToNextStep: n
}) {
    W();
    const [e, t] = h.useState(1),
    r = Z(Rr);
    un(() => {
        pn.logEvent("start value slide", {
            device: ke ? "web" : "desktop"
        })
    });
    const i = h.useCallback(() => {
        t(c => c === rn ? rn : c + 1)
    }, []),
    s = h.useCallback(() => {
        t(c => c === 1 ? 1 : c - 1)
    }, []);
    h.useEffect(() => {
        const c = l => {
            l.key === "ArrowLeft" && s(),
            l.key === "Enter" && i()
        };
        return document.addEventListener("keyup", c),
        () => {
            document.removeEventListener("keyup", c)
        }
    }, [i, s]);
    const a = h.useMemo(() => {
        switch (e) {
        case 1:
            return o(Zo, {
                onContinue: i
            });
        case 2:
            return o(nt, {
                content: u("div", {
                    children: [u("p", {
                            children: ["This is a traditional", " ", o("b", {
                                    className: "font-semibold",
                                    children: "book note"
                                }), "."]
                        }), o("br", {}), u("p", {
                            children: ["It's often", " ", o("b", {
                                    className: "font-semibold",
                                    children: "long and rarely reviewed"
                                }), o("br", {}), "after it's taken."]
                        })]
                }),
                canShowNextButton: !0,
                imageX: 680,
                imageY: -128,
                imageWidth: 364.64,
                imageSrc: new URL("" + new URL("slide2-d7418023.jpg", import.meta.url).href, self.location).href,
                onContinue: i
            });
        case 3:
            return o(nt, {
                content: u("div", {
                    children: [o("p", {
                            children: "What if,"
                        }), o("br", {}), u("p", {
                            children: ["you can break it down into smaller ", o("br", {}), "pieces on a whiteboard,"]
                        }), o("br", {}), u("p", {
                            children: ["making it", " ", u("b", {
                                    className: "font-semibold",
                                    children: ["easier to review and ", o("br", {}), "understand?"]
                                })]
                        })]
                }),
                canShowNextButton: !0,
                imageX: 440,
                imageY: -150,
                imageWidth: 1056,
                imageSrc: new URL("" + new URL("slide3-57e21ad0.jpg", import.meta.url).href, self.location).href,
                onContinue: i
            });
        case 4:
            return o(nt, {
                content: u("div", {
                    children: [o("p", {
                            children: "What if,"
                        }), o("br", {}), u("p", {
                            children: ["you can synthesize knowledge from ", o("br", {}), "one book to another, as well as from ", o("br", {}), "articles, videos, and your ideas…"]
                        }), o("br", {}), u("p", {
                            children: ["to gain a", " ", u("b", {
                                    className: "font-semibold",
                                    children: ["deeper understanding of ", o("br", {}), "the topic"]
                                }), " ", "that matters to you?"]
                        })]
                }),
                canShowNextButton: !0,
                imageX: 440,
                imageY: -61,
                imageWidth: 1082,
                imageSrc: new URL("" + new URL("slide4-7355e04d.jpg", import.meta.url).href, self.location).href,
                onContinue: i
            });
        case 5:
            return o(Qo, {
                finishValueSlides: n
            })
        }
    }, [i, n, e]);
    return u(S, {
        children: [o("link", {
                rel: "preload",
                href: new URL("" + new URL("slide2-d7418023.jpg", import.meta.url).href, self.location).href,
                as: "image"
            }), o("link", {
                rel: "preload",
                href: new URL("" + new URL("slide3-57e21ad0.jpg", import.meta.url).href, self.location).href,
                as: "image"
            }), o("link", {
                rel: "preload",
                href: new URL("" + new URL("slide4-7355e04d.jpg", import.meta.url).href, self.location).href,
                as: "image"
            }), o(fn, {
                className: "absolute top-0 h-12 w-full"
            }), o("button", {
                className: C("absolute top-2 z-10 flex h-8 w-8 items-center justify-center", r ? "left-[86px]" : "left-2"),
                onClick: s,
                children: o(Qr, {
                    className: "size-4.5 fill-middle-hard-grey"
                })
            }), o(hi, {
                className: tc.container,
                children: o(ei, {
                    classNames: "slide",
                    timeout: 300,
                    unmountOnExit: !0,
                    children: o("div", {
                        className: "flex h-screen items-center justify-center bg-whiteboard-background bg-center",
                        children: o("div", {
                            className: "relative size-full max-h-[900px] max-w-300",
                            children: a
                        })
                    })
                }, e)
            }), o("div", {
                className: "absolute bottom-4 z-1000 flex w-full justify-center",
                children: e > 1 && o(Jo, {
                    totalPages: nc,
                    currentPage: e - 1
                })
            }), !1]
    })
}
function lc() {
    const n = W(),
    e = sn(window.location.href),
    t = an(window.location.href),
    [r] = Or(),
    i = r.get("inviteeEmail"),
    [s, a] = h.useState(() => e || t ? "emailValidation" : i != null ? "emailConfirmation" : "start"),
    c = () => {
        a("emailConfirmation")
    },
    l = () => {
        a("emailCheck")
    },
    d = () => {
        a("emailFailure")
    },
    f = h.useCallback(() => {
        a("valueDiscovery")
    }, []),
    [m, _] = h.useState(i ?? ""),
    [y, T] = h.useState(k.SOMETHING_WENT_WRONG),
    x = h.useCallback(() => {
        T(k.SOMETHING_WENT_WRONG)
    }, []);
    h.useEffect(function () {
        s !== "emailFailure" && x()
    }, [s, x]);
    const D = Z(ti);
    h.useEffect(function () {
        n(D ? Dr() : ni({
                id: "offline",
                shouldAutoClose: !1
            }))
    }, [D, n]);
    const w = Z(Lr),
    q = Z(b => Pr(b) || Mr(b)),
    E = Z(Ur);
    h.useEffect(() => {
        w !== void 0 && (w ? f() : a(q || E ? "userInfoForm" : "subscription"))
    }, [w, f, E, q]);
    const ne = mn(),
    [U, F] = h.useState(e ? "google" : "emailLink");
    h.useLayoutEffect(function () {
        delete document.documentElement.dataset.theme
    }, []);
    function re() {
        switch (s) {
        case "start":
            return o(jo, {
                goToNextStep: c
            });
        case "emailConfirmation":
            return o(K, {
                className: "flex",
                onExit: () => {
                    a("start")
                },
                renderExitIcon: ({
                    className: b
                }) => i != null && o(Ue, {
                    href: Br,
                    className: C(b, "no-underline"),
                    children: u(he, {
                        className: "flex items-center border-light-middle-grey px-[5px] text-middle-hard-grey",
                        children: [o(pt, {
                                className: "mr-2.5 size-5 rounded-[4.466px] shadow-[0_0_0_1px_var(--light-middle-grey)]"
                            }), "Heptabase"]
                    })
                }),
                children: o(Bo, {
                    email: m,
                    setEmail: _,
                    goToNextStep: b => {
                        l(),
                        F(b)
                    },
                    goToEmailFailure: d
                })
            });
        case "emailCheck":
            return o(K, {
                className: "flex",
                onExit: c,
                children: U === "emailLink" ? o(Ot, {
                    checkIsValidLink: b => an(b),
                    children: u("div", {
                        className: "m-auto min-h-70",
                        children: [o($, {
                                title: "Check your email",
                                description: u(S, {
                                    children: ["Please click on the link that has just been sent to your email account ", o("br", {}), o("span", {
                                            className: "font-semibold text-active",
                                            children: "from the same device"
                                        }), " ", "to continue the login process."]
                                })
                            }), o("p", {
                                className: "mt-4 text-h2 font-semibold text-primary",
                                children: m
                            })]
                    })
                }) : o(Ot, {
                    checkIsValidLink: sn,
                    children: o("div", {
                        className: "m-auto min-h-70",
                        children: o($, {
                            title: "Complete authentication",
                            description: "Verify with your Google account to continue the sign-in process."
                        })
                    })
                })
            });
        case "emailValidation":
            return o(K, {
                className: "flex",
                children: o(Vo, {
                    signInMethod: U,
                    setEmail: _,
                    onFailure: b => {
                        T(b),
                        d()
                    }
                })
            });
        case "emailFailure":
            return o(K, {
                className: "flex",
                onExit: c,
                children: o(Ho, {
                    validationErrorCode: y,
                    resetValidationErrorCode: x,
                    goToEmailCheck: l,
                    goToEmailConfirmation: c
                })
            });
        case "subscription":
            return o(K, {
                onExit: ne,
                children: o(si, {})
            });
        case "userInfoForm":
            return o(K, {
                children: o(Go, {
                    onFinishForm: f
                })
            });
        case "valueDiscovery":
            return o(rc, {
                goToNextStep: () => {
                    a("appLanguageSelection")
                }
            });
        case "appLanguageSelection":
            return o(K, {
                children: o(_i, {})
            });
        default:
            Fr()
        }
    }
    return o(S, {
        children: re()
    })
}
function sn(n) {
    try {
        const {
            searchParams: e
        } = new URL(n);
        return e.has("googleAuth") && e.has("idToken")
    } catch (e) {
        return console.error(e),
        !1
    }
}
function an(n) {
    try {
        const {
            searchParams: e
        } = new URL(n);
        return e.has("email")
    } catch (e) {
        return console.error(e),
        !1
    }
}
export {
    lc as default
};
//# sourceMappingURL=SignInPage-7a472c3d.js.map
