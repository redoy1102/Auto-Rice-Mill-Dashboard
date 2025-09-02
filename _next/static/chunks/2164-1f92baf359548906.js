"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2164],
  {
    6758: (e, a, s) => {
      s.d(a, { default: () => i });
      var t = s(5155),
        r = s(244),
        n = s(2115);
      function i(e) {
        let { faqData: a = r.r, parentClass: s = "" } = e,
          i = (0, n.useRef)([]),
          l = (0, n.useRef)([]),
          c = (0, n.useRef)([]),
          [d, o] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            if (
              (l.current.forEach((e) => {
                e.classList.remove("active");
              }),
              i.current.forEach((e) => {
                e.classList.remove("active");
              }),
              c.current.forEach((e) => {
                (e.style.height = "0px"),
                  (e.style.overflow = "hidden"),
                  (e.style.transition = "all 0.5s ease-in-out"),
                  (e.style.marginTop = "0px");
              }),
              -1 !== d)
            ) {
              l.current[d].classList.add("active"),
                i.current[d].classList.add("active");
              let e = c.current[d];
              (e.style.height = e.scrollHeight + "px"),
                (e.style.overflow = "hidden"),
                (e.style.transition = "all 0.5s ease-in-out"),
                (e.style.marginTop = "20px");
            }
          }, [d]),
          (0, t.jsx)(t.Fragment, {
            children: a.map((e, a) =>
              (0, t.jsxs)(
                "li",
                {
                  ref: (e) => (i.current[a] = e),
                  className: ""
                    .concat(d == a ? "uc-open" : "", " ")
                    .concat(s, " "),
                  onClick: () => {
                    o((e) => (e == a ? -1 : a));
                  },
                  children: [
                    (0, t.jsx)("a", {
                      className: "uc-accordion-title fs-5 sm:fs-4",
                      role: "button",
                      "aria-disabled": "false",
                      ref: (e) => (l.current[a] = e),
                      children: e.question,
                    }),
                    (0, t.jsx)("div", {
                      className: "uc-accordion-content",
                      ref: (e) => (c.current[a] = e),
                      children: (0, t.jsx)("p", { children: e.answer }),
                    }),
                  ],
                },
                a
              )
            ),
          })
        );
      }
    },
    7254: (e, a, s) => {
      s.d(a, { default: () => l });
      var t = s(5155),
        r = s(3628),
        n = s(9914),
        i = s(5565);
      function l() {
        return (0, t.jsx)(r.RC, {
          slidesPerView: 2,
          centeredSlides: !0,
          centeredSlidesBounds: !0,
          breakpoints: {
            640: {
              slidesPerView: 4,
              centeredSlides: !1,
              centeredSlidesBounds: !1,
            },
            768: { slidesPerView: 6, spaceBetween: 80 },
          },
          children: n.Hk.map((e, a) =>
            (0, t.jsx)(
              r.qr,
              {
                className: "brand-item swiper-slide text-center",
                children: (0, t.jsx)(i.default, {
                  className: "brand-item-image h-40px image-filter",
                  src: e.src,
                  width: 165,
                  height: 48,
                  alt: e.alt,
                }),
              },
              a
            )
          ),
        });
      }
    },
    254: (e, a, s) => {
      s.d(a, { default: () => i });
      var t = s(5155),
        r = s(2115);
      let n = ["English", "العربية", "中文"];
      function i() {
        let [e, a] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(n[0]);
        return (0, t.jsxs)("div", {
          className: "d-inline-block",
          style: { position: "relative" },
          children: [
            (0, t.jsxs)("a", {
              onClick: () => a((e) => !e),
              className: "hstack gap-1 text-none fw-medium",
              role: "button",
              "aria-expanded": e,
              "aria-haspopup": "true",
              children: [
                (0, t.jsx)("i", {
                  className: "icon icon-1 unicon-earth-filled",
                }),
                (0, t.jsx)("span", { children: s }),
                (0, t.jsx)("span", {
                  "data-uc-drop-parent-icon": "",
                  className: "uc-icon uc-drop-parent-icon",
                  children: (0, t.jsx)("svg", {
                    width: 12,
                    height: 12,
                    viewBox: "0 0 12 12",
                    children: (0, t.jsx)("polyline", {
                      fill: "none",
                      stroke: "#000",
                      strokeWidth: "1.1",
                      points: "1 3.5 6 8.5 11 3.5",
                    }),
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop ".concat(
                  e ? "uc-open" : "",
                  " "
                ),
              style: { bottom: "40px", right: 0, maxWidth: 1428 },
              children: (0, t.jsx)("ul", {
                className: "nav-y gap-1 fw-medium items-end",
                children: n.map((e, s) =>
                  (0, t.jsx)(
                    "li",
                    {
                      onClick: () => {
                        i(e), a(!1);
                      },
                      children: (0, t.jsx)("a", { children: e }),
                    },
                    s
                  )
                ),
              }),
            }),
          ],
        });
      }
    },
    8436: (e, a, s) => {
      s.d(a, { A: () => d });
      var t = s(5155);
      let r = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1e3,
        },
        n = {
          position: "relative",
          width: "90%",
          maxWidth: "1100px",
          backgroundColor: "#fff",
          borderRadius: "4px",
          overflow: "hidden",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        },
        i = {
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "30px",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          zIndex: 1001,
        },
        l = {
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        },
        c = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        },
        d = (e) => {
          let { videoId: a, isOpen: s, setIsOpen: d, src: o } = e,
            m = () => d(!1);
          return (0, t.jsx)(t.Fragment, {
            children:
              s &&
              (0, t.jsx)("div", {
                style: r,
                onClick: m,
                children: (0, t.jsxs)("div", {
                  style: n,
                  onClick: (e) => e.stopPropagation(),
                  children: [
                    (0, t.jsx)("button", {
                      onClick: m,
                      style: i,
                      children: "\xd7",
                    }),
                    (0, t.jsx)("div", {
                      style: l,
                      children: (0, t.jsx)("iframe", {
                        src:
                          o ||
                          "https://www.youtube.com/embed/".concat(
                            a,
                            "?autoplay=1"
                          ),
                        title: "YouTube video player",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        style: c,
                      }),
                    }),
                  ],
                }),
              }),
          });
        };
    },
    4665: (e, a, s) => {
      s.d(a, { default: () => u });
      var t = s(5155),
        r = s(2115),
        n = s(8173),
        i = s.n(n),
        l = s(5565),
        c = s(6957),
        d = s(1975),
        o = s(6046);
      function m() {
        let e = (0, o.usePathname)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("li", {
              className: "has-dd-menu",
              children: [
                (0, t.jsxs)("a", {
                  href: "#",
                  role: "button",
                  "aria-haspopup": "true",
                  children: [
                    "Featu",
                    " ",
                    (0, t.jsx)("span", {
                      "data-uc-navbar-parent-icon": "",
                      className: "uc-icon uc-navbar-parent-icon",
                      children: (0, t.jsx)("svg", {
                        width: 12,
                        height: 12,
                        viewBox: "0 0 12 12",
                        children: (0, t.jsx)("polyline", {
                          fill: "none",
                          stroke: "#000",
                          strokeWidth: "1.1",
                          points: "1 3.5 6 8.5 11 3.5",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  style: { top: 127, maxWidth: "100vw" },
                  className:
                    "uc-navbar-dropdown w-100 ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop",
                  children: (0, t.jsxs)("div", {
                    className: "row g-0 col-match uc-grid uc-grid-stack",
                    "data-uc-grid": "",
                    children: [
                      (0, t.jsx)("div", {
                        className: "col-7",
                        children: (0, t.jsxs)("div", {
                          className: "panel p-3",
                          children: [
                            (0, t.jsx)("h6", {
                              className: "h6 ms-3",
                              children: "Main pagsdfsfes",
                            }),
                            (0, t.jsx)("div", {
                              className: "row child-cols-3 g-0",
                              children: d.wh.map((a, s) =>
                                (0, t.jsx)(
                                  "div",
                                  {
                                    children: (0, t.jsxs)(i(), {
                                      href: a.href,
                                      className:
                                        "vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 ".concat(
                                          e == a.href ? "menuActiveBg" : "",
                                          " "
                                        ),
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "featured-image panel border shadow-xs rounded-1 overflow-hidden",
                                          children: (0, t.jsx)(l.default, {
                                            alt: a.alt,
                                            src: a.src,
                                            width: 700,
                                            height: 817,
                                          }),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: "panel p-1",
                                          children: (0, t.jsx)("h5", {
                                            className: "fs-7 m-0",
                                            children: a.title,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                  s
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "col-5",
                        children: (0, t.jsxs)("div", {
                          className:
                            "panel p-3 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5",
                          children: [
                            (0, t.jsx)("h6", {
                              className: "h6 ms-3",
                              children: "Other pages",
                            }),
                            (0, t.jsxs)("div", {
                              className: "row child-cols-6 g-0",
                              children: [
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)("ul", {
                                    className: "uc-nav uc-navbar-dropdown-nav",
                                    children: d.og.slice(0, 8).map((e, a) =>
                                      (0, t.jsx)(
                                        "li",
                                        {
                                          children: (0, t.jsxs)(i(), {
                                            className:
                                              "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                            href: e.href,
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: "icon-1 ".concat(
                                                  e.icon,
                                                  " fw-bold text-primary dark:text-secondary"
                                                ),
                                              }),
                                              (0, t.jsx)("span", {
                                                className: "vstack gap-narrow",
                                                children: (0, t.jsx)("b", {
                                                  className:
                                                    "fw-bold dark:text-white",
                                                  children: e.title,
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        a
                                      )
                                    ),
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)("ul", {
                                    className: "uc-nav uc-navbar-dropdown-nav",
                                    children: d.og.slice(8).map((e, a) =>
                                      (0, t.jsx)(
                                        "li",
                                        {
                                          children: (0, t.jsxs)(i(), {
                                            className:
                                              "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                            href: e.href,
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: "icon-1 ".concat(
                                                  e.icon,
                                                  " fw-bold text-primary dark:text-secondary"
                                                ),
                                              }),
                                              (0, t.jsx)("span", {
                                                className: "vstack gap-narrow",
                                                children: (0, t.jsx)("b", {
                                                  className:
                                                    "fw-bold dark:text-white",
                                                  children: e.title,
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        a
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("li", {
              className: "has-dd-menu",
              style: { position: "relative" },
              children: [
                (0, t.jsxs)("a", {
                  href: "#",
                  role: "button",
                  "aria-haspopup": "true",
                  children: [
                    "Products",
                    " ",
                    (0, t.jsx)("span", {
                      "data-uc-navbar-parent-icon": "",
                      className: "uc-icon uc-navbar-parent-icon",
                      children: (0, t.jsx)("svg", {
                        width: 12,
                        height: 12,
                        viewBox: "0 0 12 12",
                        children: (0, t.jsx)("polyline", {
                          fill: "none",
                          stroke: "#000",
                          strokeWidth: "1.1",
                          points: "1 3.5 6 8.5 11 3.5",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop",
                  "data-uc-drop":
                    "mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;",
                  children: (0, t.jsxs)("div", {
                    className:
                      "row child-cols-6 g-0 col-match uc-grid uc-grid-stack",
                    "data-uc-grid": "",
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("ul", {
                          className: "uc-nav uc-navbar-dropdown-nav p-2",
                          children: [
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-features",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-checkmark fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "To-Do List",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "Managing multiple software and tools for different tasks.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-features",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-chart-pie fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Reports",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "The latest industry reports, updates and info.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-features",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-increase-level fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Spreadsheets",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "Suite of tools that cover all aspects of your business.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-features",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-chart-venn-diagram fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Collaboration",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "Assign tasks, share files, and communicate with your team.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("div", {
                          className:
                            "vstack gap-2 p-3 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "featured-image panel",
                              "data-uc-lightbox": "video-autoplay: true;",
                              children: [
                                (0, t.jsx)("figure", {
                                  className:
                                    "featured-image m-0 rounded ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden",
                                  children: (0, t.jsx)(l.default, {
                                    className:
                                      "media-cover image uc-transition-scale-up uc-transition-opaque",
                                    alt: "Image",
                                    src: "/assets/images/common/login.webp",
                                    width: "1500",
                                    height: "1000",
                                  }),
                                }),
                                (0, t.jsx)("button", {
                                  className:
                                    "btn btn-md btn-alt-primary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-2",
                                  children: (0, t.jsx)("i", {
                                    className: "icon-1 unicon-play-filled-alt",
                                  }),
                                }),
                                (0, t.jsx)("a", {
                                  "data-caption":
                                    "Easy project managment of any complexity.",
                                  "data-attrs": "width: 640; height: 480;",
                                  className: "position-cover",
                                  role: "button",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "vstack justify-between gap-2",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "vstack gap-1",
                                  children: [
                                    (0, t.jsx)("h5", {
                                      className: "h6 m-0",
                                      children:
                                        "Everything you need is right at your fingertips",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "fs-7 opacity-70",
                                      children:
                                        "Say goodbye to the hassle of managing multiple software and tools for different tasks.",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(i(), {
                                  href: "/page-pricing",
                                  className: "btn btn-sm btn-primary",
                                  children: "Start free trial",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("li", {
              className: "has-dd-menu",
              style: { position: "relative" },
              children: [
                (0, t.jsxs)("a", {
                  href: "#",
                  role: "button",
                  "aria-haspopup": "true",
                  children: [
                    "Resources",
                    " ",
                    (0, t.jsx)("span", {
                      "data-uc-navbar-parent-icon": "",
                      className: "uc-icon uc-navbar-parent-icon",
                      children: (0, t.jsx)("svg", {
                        width: 12,
                        height: 12,
                        viewBox: "0 0 12 12",
                        children: (0, t.jsx)("polyline", {
                          fill: "none",
                          stroke: "#000",
                          strokeWidth: "1.1",
                          points: "1 3.5 6 8.5 11 3.5",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop",
                  "data-uc-drop":
                    "mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;",
                  children: (0, t.jsxs)("div", {
                    className:
                      "row child-cols-6 g-0 col-match uc-grid uc-grid-stack",
                    "data-uc-grid": "",
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("ul", {
                          className: "uc-nav uc-navbar-dropdown-nav p-2",
                          children: [
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/blog",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-course fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Blog",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "Managing multiple software and tools for different tasks.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)("a", {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                onClick: c.Y,
                                role: "button",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-email fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Newsletter",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "The latest industry reports, updates and info.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-features",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-play fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Video Tutorials",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "Assign tasks, share files, and communicate with your team.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("ul", {
                          className:
                            "uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5",
                          children: [
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-career",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-star fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "We're hiring",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "Managing multiple software and tools for different tasks.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsxs)(i(), {
                                className:
                                  "hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5",
                                href: "/page-contact",
                                children: [
                                  (0, t.jsx)("i", {
                                    className:
                                      "icon-1 unicon-headset fw-bold text-primary dark:text-secondary",
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: "vstack gap-narrow mt-nnarrow",
                                    children: [
                                      (0, t.jsx)("b", {
                                        className: "fw-bold dark:text-white",
                                        children: "Help Center",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "fw-normal",
                                        children:
                                          "The latest industry reports, updates and info.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)("li", {
              children: (0, t.jsx)(i(), {
                href: "/page-pricing",
                children: "Pricing",
              }),
            }),
            (0, t.jsx)("li", {
              children: (0, t.jsx)("a", {
                href: "https://themeforest.net/user/ib-themes/portfolio",
                target: "_blank",
                children: "More",
              }),
            }),
          ],
        });
      }
      var h = s(7906);
      function u() {
        let [e, a] = (0, r.useState)(0),
          [s, n] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          a(window.pageYOffset);
          let s = () => {
            let s = window.pageYOffset;
            n(!(s <= 80) && s < e), a(s);
          };
          return (
            window.addEventListener("scroll", s),
            () => {
              window.removeEventListener("scroll", s);
            }
          );
        }, [e]);
        let c = (0, r.useRef)(null),
          [d, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = (e) => {
              c.current && !c.current.contains(e.target) && o(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, []),
          (0, t.jsx)("header", {
            style: { "--uc-nav-height": "80px !important" },
            className:
              "uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ".concat(
                s ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
              ),
            "data-uc-sticky":
              "start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;",
            children: (0, t.jsx)("nav", {
              className:
                "uc-navbar-container uc-navbar-float ft-tertiary z-1 ".concat(
                  s ? "uc-navbar-sticky" : "uc-navbar-transparent",
                  " "
                ),
              "data-anime":
                "translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;",
              children: (0, t.jsx)("div", {
                className: "container max-w-xl",
                children: (0, t.jsxs)("div", {
                  className:
                    "uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "uc-navbar-left",
                      children: [
                        (0, t.jsx)("div", {
                          className: "uc-logo text-dark dark:text-white",
                          children: (0, t.jsxs)(i(), {
                            className: "panel text-none",
                            href: "/",
                            style: { width: 140 },
                            children: [
                              (0, t.jsx)(l.default, {
                                className: "dark:d-none",
                                alt: "Lexend",
                                src: "/assets/images/common/logo-light.svg",
                                width: "117",
                                height: "40",
                              }),
                              (0, t.jsx)(l.default, {
                                className: "d-none dark:d-block",
                                alt: "Lexend",
                                src: "/assets/images/common/logo-dark.svg",
                                width: "117",
                                height: "40",
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("ul", {
                          className:
                            "uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4",
                          children: (0, t.jsx)(m, {}),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "uc-navbar-right",
                      children: [
                        (0, t.jsx)("ul", {
                          className:
                            "uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4",
                          children: (0, t.jsxs)("li", {
                            ref: c,
                            children: [
                              (0, t.jsx)("a", {
                                onClick: () => o((e) => !e),
                                role: "button",
                                "aria-haspopup": "true",
                                children: "Request a demo",
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "uc-navbar-dropdown p-3 w-300px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop ".concat(
                                    d ? "uc-open" : "",
                                    " "
                                  ),
                                "data-uc-drop":
                                  "mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;",
                                children: [
                                  (0, t.jsx)("p", {
                                    className: "fs-7",
                                    children:
                                      "Lexend offers a comprehensive suite of tools that cover all aspects of your business.",
                                  }),
                                  (0, t.jsxs)("form", {
                                    onSubmit: (e) => e.preventDefault(),
                                    className: "vstack gap-1 my-2",
                                    children: [
                                      (0, t.jsx)("input", {
                                        className:
                                          "form-control form-control-sm rounded-default fs-7 w-full bg-gray-25 dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30",
                                        type: "text",
                                        placeholder: "Full name",
                                        required: !0,
                                      }),
                                      (0, t.jsx)("input", {
                                        className:
                                          "form-control form-control-sm rounded-default fs-7 w-full bg-gray-25 dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30",
                                        type: "email",
                                        placeholder: "Your email",
                                        required: !0,
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "hstack items-center justify-between mt-1",
                                        children: (0, t.jsxs)("div", {
                                          className: "form-check m-0",
                                          children: [
                                            (0, t.jsx)("input", {
                                              id: "header_request_demo_application",
                                              className:
                                                "form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30",
                                              type: "checkbox",
                                              required: !0,
                                            }),
                                            (0, t.jsxs)("label", {
                                              htmlFor:
                                                "header_request_demo_application",
                                              className:
                                                "hstack justify-between form-check-label fw-medium fs-7",
                                              children: [
                                                "I read and agree to",
                                                " ",
                                                (0, t.jsx)(i(), {
                                                  href: "/page-terms",
                                                  className:
                                                    "uc-link text-underline ltr:ms-narrow rtl:me-narrow dark:text-secondary",
                                                  children: "terms",
                                                }),
                                                ".",
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, t.jsx)("button", {
                                        className:
                                          "btn btn-primary btn-sm rounded-default text-white mt-1",
                                        type: "submit",
                                        children: "Request a demo",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("p", {
                                    className: "fs-7",
                                    children: [
                                      "We care about your data in our",
                                      " ",
                                      (0, t.jsx)(i(), {
                                        href: "/page-privacy",
                                        className:
                                          "uc-link text-underline dark:text-secondary",
                                        children: "privacy policy",
                                      }),
                                      ".",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(i(), {
                          className:
                            "btn btn-sm btn-primary rounded-default text-white text-none d-none lg:d-inline-flex",
                          href: "/page-pricing",
                          children: "Start free trial",
                        }),
                        (0, t.jsx)("a", {
                          className:
                            "d-block lg:d-none uc-icon uc-navbar-toggle-icon",
                          onClick: h.k,
                          children: (0, t.jsxs)("svg", {
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            children: [
                              (0, t.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                                },
                              }),
                              (0, t.jsx)("rect", {
                                className: "line-1",
                                y: 3,
                                width: 20,
                                height: 2,
                              }),
                              (0, t.jsx)("rect", {
                                className: "line-2",
                                y: 9,
                                width: 20,
                                height: 2,
                              }),
                              (0, t.jsx)("rect", {
                                className: "line-3",
                                y: 9,
                                width: 20,
                                height: 2,
                              }),
                              (0, t.jsx)("rect", {
                                className: "line-4",
                                y: 15,
                                width: 20,
                                height: 2,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
    },
    64: (e, a, s) => {
      s.d(a, { default: () => l });
      var t = s(5155),
        r = s(1673),
        n = s(8173),
        i = s.n(n);
      function l() {
        return (0, t.jsx)("div", {
          id: "pre_cta",
          className: "pre-cta section panel overflow-hidden",
          children: (0, t.jsx)("div", {
            className: "section-outer panel pb-4 sm:pb-6 xl:pb-9",
            children: (0, t.jsx)("div", {
              className: "container max-w-xl",
              children: (0, t.jsx)("div", {
                className:
                  "section-inner panel p-4 md:p-6 lg:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white",
                "data-anime":
                  "onview: -200; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;",
                children: (0, t.jsxs)("div", {
                  className:
                    "vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center",
                  "data-anime":
                    "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "h3 lg:h2 m-0",
                      children: "Start your 30-day free trial.",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "fs-6 md:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70",
                      children:
                        "Join over 2,500+ startups already growing with Lexend.",
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column",
                      children: [
                        (0, t.jsxs)("a", {
                          onClick: r.y,
                          className:
                            "btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs",
                          "data-uc-toggle": "",
                          children: [
                            (0, t.jsx)("i", {
                              className: "icon-1 unicon-play-outline fw-medium",
                            }),
                            (0, t.jsx)("span", { children: "View demo" }),
                          ],
                        }),
                        (0, t.jsx)(i(), {
                          href: "/page-pricing",
                          className:
                            "btn btn-md btn-primary rounded-default text-white shadow-xs",
                          children: "Start free trial",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    1742: (e, a, s) => {
      s.d(a, { default: () => l });
      var t = s(5155),
        r = s(1673),
        n = s(8173),
        i = s.n(n);
      function l() {
        return (0, t.jsx)("div", {
          id: "cta",
          className: "cta section panel overflow-hidden",
          children: (0, t.jsx)("div", {
            className: "section-outer panel pt-4 sm:pt-6 xl:pt-9",
            children: (0, t.jsx)("div", {
              className: "container max-w-xl",
              children: (0, t.jsx)("div", {
                className: "section-inner",
                children: (0, t.jsxs)("div", {
                  className:
                    "vstack items-center gap-narrow max-w-400px lg:max-w-700px mx-auto text-center",
                  "data-anime":
                    "onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "h4 lg:h3 m-0",
                      children: "No long-term contracts. No catches. Simple.",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2",
                      children: "Start your 30-day free trial. Cancel anytime.",
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "vstack sm:hstack justify-center gap-1 lg:gap-2 mt-2 lg:mt-4 fdr",
                      children: [
                        (0, t.jsxs)("a", {
                          onClick: r.y,
                          className:
                            "btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs",
                          "data-uc-toggle": "",
                          children: [
                            (0, t.jsx)("i", {
                              className: "icon-1 unicon-play-outline fw-medium",
                            }),
                            (0, t.jsx)("span", { children: "View demo" }),
                          ],
                        }),
                        (0, t.jsx)(i(), {
                          href: "/page-pricing",
                          className:
                            "btn btn-md btn-primary rounded-default text-white shadow-xs",
                          children: "Start free trial",
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "fs-7 text-dark dark:text-white text-opacity-70 mt-2",
                      children: "14-day trial, no credit card required.",
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    5846: (e, a, s) => {
      s.d(a, { default: () => l });
      var t = s(5155),
        r = s(8173),
        n = s.n(r),
        i = s(5565);
      function l() {
        return (0, t.jsxs)("div", {
          id: "hero_header",
          className: "hero-header section panel overflow-hidden",
          children: [
            (0, t.jsx)("div", {
              className: "position-cover bg-secondary dark:bg-gray-800",
            }),
            (0, t.jsx)("div", {
              className: "section-outer panel pt-8",
              children: (0, t.jsx)("div", {
                className: "container max-w-xl",
                children: (0, t.jsx)("div", {
                  className: "section-inner panel",
                  children: (0, t.jsxs)("div", {
                    className:
                      "row child-cols justify-center lg:justify-between items-center g-0",
                    children: [
                      (0, t.jsx)("div", {
                        className: "col-12 sm:col-10 md:col-8 lg:col-5",
                        children: (0, t.jsxs)("div", {
                          className:
                            "panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4",
                          "data-anime":
                            "targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                          children: [
                            (0, t.jsxs)("h1", {
                              className: "h2 xl:display-5 mb-1 xl:mb-2",
                              children: [
                                "Tools that cover ",
                                (0, t.jsx)("br", {}),
                                (0, t.jsxs)("span", {
                                  className: "text-primary dark:text-secondary",
                                  children: ["all aspects", " "],
                                }),
                                "of your growing business.",
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70",
                              children:
                                "Say goodbye to the hassle of managing multiple software and tools for different tasks. Lexend offers a comprehensive suite of tools that cover all aspects of your business.",
                            }),
                            (0, t.jsxs)("form", {
                              onSubmit: (e) => e.preventDefault(),
                              className: "row child-cols g-1 mt-1 sm:mt-2",
                              children: [
                                (0, t.jsx)("div", {
                                  children: (0, t.jsxs)("div", {
                                    className: "form-icon-group inline-block",
                                    children: [
                                      (0, t.jsx)("input", {
                                        type: "email",
                                        className:
                                          "form-control rounded-default h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white",
                                        placeholder: "Your email..",
                                        required: !0,
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "form-icon text-gray dark:text-gray-300",
                                        children: (0, t.jsx)("i", {
                                          className: "unicon-email icon-1",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "col-12 sm:col-auto",
                                  children: (0, t.jsxs)(n(), {
                                    href: "/page-pricing",
                                    className:
                                      "btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "d-none md:d-block",
                                        children: "Try it out for free",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "d-block md:d-none",
                                        children: "Sign up",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "fs-7 text-dark dark:text-white text-opacity-70",
                              children: [
                                "We care about your data in our",
                                (0, t.jsx)(n(), {
                                  href: "/page-privacy",
                                  className:
                                    "uc-link text-underline dark:text-secondary",
                                  children: "privacy policy",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "col-12 lg:col-6",
                        children: (0, t.jsxs)("div", {
                          className:
                            "expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2",
                          "data-anime":
                            "translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                          children: [
                            (0, t.jsx)(i.default, {
                              className: "ltr:d-block rtl:d-none",
                              alt: "hero-mockup",
                              src: "/assets/images/template/hero-mockup.png",
                              width: "1492",
                              height: "1250",
                            }),
                            (0, t.jsx)(i.default, {
                              className: "ltr:d-none rtl:d-block",
                              alt: "hero-mockup-rtl",
                              src: "/assets/images/template/hero-mockup-rtl.png",
                              width: "1492",
                              height: "1250",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    1098: (e, a, s) => {
      s.d(a, { default: () => l });
      var t = s(5155),
        r = s(5565),
        n = s(2115),
        i = s(8436);
      function l() {
        let [e, a] = (0, n.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              id: "clients_feedbacks",
              className: "clients-feedbacks section panel overflow-hidden",
              children: (0, t.jsx)("div", {
                className: "section-outer panel pt-4 md:pt-6 xl:pt-9",
                children: (0, t.jsx)("div", {
                  className: "container max-w-lg",
                  children: (0, t.jsx)("div", {
                    className: "section-inner panel",
                    children: (0, t.jsxs)("div", {
                      className:
                        "panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8",
                      "data-anime":
                        "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "row child-cols-12 justify-center col-match g-2 lg:g-3",
                          "data-uc-grid": "",
                          children: (0, t.jsx)("div", {
                            children: (0, t.jsx)("div", {
                              className:
                                "panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden",
                              children: (0, t.jsxs)("div", {
                                className: "row child-cols-12 col-match g-0",
                                "data-uc-grid": "",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "sm:col-6 lg:col-8",
                                    children: (0, t.jsxs)("div", {
                                      className:
                                        "panel vstack justify-between gap-3 px-3 py-4 lg:px-5 lg:py-6",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className:
                                            "panel vstack items-start gap-2",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className: "panel",
                                              children: (0, t.jsxs)("div", {
                                                className: "hstack h-48px",
                                                children: [
                                                  (0, t.jsx)(r.default, {
                                                    className:
                                                      "w-128px dark:d-none",
                                                    alt: "Brand",
                                                    src: "/assets/images/brands/brand-08.svg",
                                                    width: "163",
                                                    height: "48",
                                                  }),
                                                  (0, t.jsx)(r.default, {
                                                    className:
                                                      "w-128px d-none dark:d-inline-flex",
                                                    alt: "Brand",
                                                    src: "/assets/images/brands/brand-08-dark.svg",
                                                    width: "163",
                                                    height: "48",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, t.jsx)("p", {
                                              className:
                                                "fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white",
                                              children:
                                                "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation and as we look to create our website and this builder just outstanding!”",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("div", {
                                          className: "panel mt-2 lg:mt-4",
                                          children: (0, t.jsxs)("div", {
                                            className:
                                              "panel vstack items-start gap-0 lg:gap-1",
                                            children: [
                                              (0, t.jsx)("h6", {
                                                className: "h6 lg:h5 m-0",
                                                children: "Sarah Edrissi",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "fs-7 lg:h6 opacity-70",
                                                children: "Lead Marketing",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "sm:col-6 lg:col-4",
                                    children: (0, t.jsxs)("div", {
                                      className: "panel overflow-hidden h-100",
                                      "data-uc-lightbox":
                                        "video-autoplay: true;",
                                      children: [
                                        (0, t.jsx)("figure", {
                                          className:
                                            "featured-image m-0 rounded ratio ratio-1x1 h-100 uc-transition-toggle overflow-hidden",
                                          children: (0, t.jsx)(r.default, {
                                            className:
                                              "media-cover image uc-transition-scale-up uc-transition-opaque",
                                            alt: "image",
                                            src: "/assets/images/common/login.webp",
                                            width: "1500",
                                            height: "1000",
                                          }),
                                        }),
                                        (0, t.jsx)("a", {
                                          onClick: () => a(!0),
                                          className:
                                            "position-absolute top-50 start-50 translate-middle cstack w-48px lg:w-64px h-48px lg:h-64px rounded-circle shadow-xs text-none bg-white bg-opacity-80 text-primary",
                                          style: {
                                            backdropFilter: "blur(2px)",
                                          },
                                          children: (0, t.jsx)("i", {
                                            className:
                                              "icon-1 unicon-play fw-bold",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, t.jsxs)("a", {
                          href: "#",
                          className:
                            "uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow",
                          children: [
                            (0, t.jsx)("span", {
                              children: "See all feedbacks",
                            }),
                            (0, t.jsx)("i", {
                              className:
                                "icon icon-1 unicon-arrow-right rtl:rotate-180",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
            (0, t.jsx)(i.A, {
              isOpen: e,
              src: "/assets/images/media/lexend_vid.webm",
              setIsOpen: () => a(!1),
            }),
          ],
        });
      }
    },
    9914: (e, a, s) => {
      s.d(a, { Hk: () => t, Ji: () => r });
      let t = [
          { id: 1, src: "/assets/images/brands/brand-01.svg", alt: "Proline" },
          { id: 2, src: "/assets/images/brands/brand-02.svg", alt: "Iceberg" },
          { id: 3, src: "/assets/images/brands/brand-03.svg", alt: "PinPoint" },
          { id: 4, src: "/assets/images/brands/brand-04.svg", alt: "Clues" },
          {
            id: 5,
            src: "/assets/images/brands/brand-05.svg",
            alt: "Snowflake",
          },
          { id: 6, src: "/assets/images/brands/brand-06.svg", alt: "Proline" },
          { id: 7, src: "/assets/images/brands/brand-01.svg", alt: "Proline" },
          { id: 8, src: "/assets/images/brands/brand-02.svg", alt: "Iceberg" },
          { id: 9, src: "/assets/images/brands/brand-03.svg", alt: "PinPoint" },
          { id: 10, src: "/assets/images/brands/brand-04.svg", alt: "Clues" },
          {
            id: 11,
            src: "/assets/images/brands/brand-05.svg",
            alt: "Snowflake",
          },
          { id: 12, src: "/assets/images/brands/brand-06.svg", alt: "Proline" },
        ],
        r = [
          {
            alt: "Proline",
            src: "/assets/images/brands/brand-01.svg",
            width: 165,
          },
          {
            alt: "Iceberg",
            src: "/assets/images/brands/brand-02.svg",
            width: 146,
          },
          {
            alt: "PinPoint",
            src: "/assets/images/brands/brand-03.svg",
            width: 178,
          },
          {
            alt: "Clues",
            src: "/assets/images/brands/brand-04.svg",
            width: 177,
          },
          {
            alt: "Snowflake",
            src: "/assets/images/brands/brand-05.svg",
            width: 179,
          },
          {
            alt: "Proline",
            src: "/assets/images/brands/brand-06.svg",
            width: 167,
          },
          {
            alt: "Iceberg",
            src: "/assets/images/brands/brand-07.svg",
            width: 170,
          },
          {
            alt: "PinPoint",
            src: "/assets/images/brands/brand-08.svg",
            width: 163,
          },
        ];
    },
    244: (e, a, s) => {
      s.d(a, { b: () => r, r: () => t });
      let t = [
          {
            id: 1,
            question: "Do I need to know about how to code?",
            answer:
              "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
            controls: "uc-accordion-24",
            expanded: !0,
          },
          {
            id: 2,
            question: "Can I use it for commercial projects?",
            answer:
              "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
            controls: "uc-accordion-26",
            expanded: !1,
          },
          {
            id: 3,
            question: "Can I use it for multiple projects?",
            answer:
              "Definitely! Please use it however you like; we don’t limit it.",
            controls: "uc-accordion-28",
            expanded: !1,
          },
          {
            id: 4,
            question: "Can I use this to create and sell a product?",
            answer: "Do not ever consider doing it.",
            controls: "uc-accordion-30",
            expanded: !1,
          },
          {
            id: 5,
            question: "What is your refund policy?",
            answer:
              "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
            controls: "uc-accordion-32",
            expanded: !1,
          },
        ],
        r = [
          {
            id: 23,
            title: "Manage tasks",
            icon: "/assets/images/common/icons/zap.svg",
            content:
              "Offers a unified platform that fosters innovation while providing end-to-end data management.",
            isOpen: !1,
          },
          {
            id: 25,
            title: "Set priorities",
            icon: "/assets/images/common/icons/target.svg",
            content:
              "Providing end-to-end data management. See how we help your team solve today’s biggest challenges.",
            isOpen: !1,
          },
          {
            id: 27,
            title: "Collaborate with your team",
            icon: "/assets/images/common/icons/settings.svg",
            content:
              "Our shared team inboxes keep everyone on the same page and in the loop.",
            isOpen: !0,
          },
        ];
    },
    6046: (e, a, s) => {
      var t = s(6658);
      s.o(t, "usePathname") &&
        s.d(a, {
          usePathname: function () {
            return t.usePathname;
          },
        });
    },
    1673: (e, a, s) => {
      s.d(a, { I: () => r, y: () => t });
      let t = () => {
          document
            .getElementById("uc-contact-modal")
            .classList.add("uc-offcanvas-overlay"),
            document
              .getElementById("uc-contact-modal")
              .classList.add("uc-open");
        },
        r = () => {
          document
            .getElementById("uc-contact-modal")
            .classList.remove("uc-offcanvas-overlay"),
            document
              .getElementById("uc-contact-modal")
              .classList.remove("uc-open");
        };
    },
    6957: (e, a, s) => {
      s.d(a, { F: () => r, Y: () => t });
      let t = () => {
          document
            .getElementById("uc-newsletter-modal")
            .classList.add("uc-offcanvas-overlay"),
            document
              .getElementById("uc-newsletter-modal")
              .classList.add("uc-open");
        },
        r = () => {
          document
            .getElementById("uc-newsletter-modal")
            .classList.remove("uc-offcanvas-overlay"),
            document
              .getElementById("uc-newsletter-modal")
              .classList.remove("uc-open");
        };
    },
  },
]);
