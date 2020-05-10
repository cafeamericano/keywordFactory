function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/all-keywords/all-keywords.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/all-keywords/all-keywords.component.ts ***!
    \********************************************************/

  /*! exports provided: AllKeywordsComponent */

  /***/
  function srcAppAllKeywordsAllKeywordsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllKeywordsComponent", function () {
      return AllKeywordsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _keyword_card_keyword_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../keyword-card/keyword-card.component */
    "./src/app/keyword-card/keyword-card.component.ts");

    function AllKeywordsComponent_div_0_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r12);
      }
    }

    function AllKeywordsComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_12_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.type == "language");
      }
    }

    function AllKeywordsComponent_div_0_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r15);
      }
    }

    function AllKeywordsComponent_div_0_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_18_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.type == "library");
      }
    }

    function AllKeywordsComponent_div_0_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r18);
      }
    }

    function AllKeywordsComponent_div_0_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_24_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.type == "front-end-framework");
      }
    }

    function AllKeywordsComponent_div_0_div_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r21);
      }
    }

    function AllKeywordsComponent_div_0_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_30_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.type == "back-end-framework");
      }
    }

    function AllKeywordsComponent_div_0_div_36_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r24);
      }
    }

    function AllKeywordsComponent_div_0_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_36_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.type == "database");
      }
    }

    function AllKeywordsComponent_div_0_div_42_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r27);
      }
    }

    function AllKeywordsComponent_div_0_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_42_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r27.type == "orm");
      }
    }

    function AllKeywordsComponent_div_0_div_48_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r30);
      }
    }

    function AllKeywordsComponent_div_0_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_48_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.type == "deployment");
      }
    }

    function AllKeywordsComponent_div_0_div_54_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r33);
      }
    }

    function AllKeywordsComponent_div_0_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_54_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r33.type == "operating-system");
      }
    }

    function AllKeywordsComponent_div_0_div_60_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyword-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywordObj", item_r36);
      }
    }

    function AllKeywordsComponent_div_0_div_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_div_0_div_60_div_1_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.type == "other");
      }
    }

    function AllKeywordsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Languages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllKeywordsComponent_div_0_div_12_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Libraries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllKeywordsComponent_div_0_div_18_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front End Frameworks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllKeywordsComponent_div_0_div_24_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back End Frameworks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AllKeywordsComponent_div_0_div_30_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Databases");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AllKeywordsComponent_div_0_div_36_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ORMs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AllKeywordsComponent_div_0_div_42_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Deployment Technologies");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AllKeywordsComponent_div_0_div_48_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Operating Systems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AllKeywordsComponent_div_0_div_54_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Other");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AllKeywordsComponent_div_0_div_60_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing ", ctx_r0.keywordCount, " keywords.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allKeywordsArray);
      }
    }

    function AllKeywordsComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading keyword data...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AllKeywordsComponent = function AllKeywordsComponent() {
      var _this = this;

      _classCallCheck(this, AllKeywordsComponent);

      this.ngOnInit = function () {
        var rootUrl = 'https://central-api-go.appspot.com';
        fetch(rootUrl + "/KeywordFactory/api/allkeywords").then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.allKeywordsArray = data;
          _this.keywordCount = data.length;
          _this.serverResponded = true;
        });
      };

      this.serverResponded = false;
      this.ngOnInit();
    };

    AllKeywordsComponent.ɵfac = function AllKeywordsComponent_Factory(t) {
      return new (t || AllKeywordsComponent)();
    };

    AllKeywordsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllKeywordsComponent,
      selectors: [["app-all-keywords"]],
      decls: 3,
      vars: 2,
      consts: [["style", "overflow: scroll; height: 100%; padding-bottom: 5rem", 4, "ngIf", "ngIfElse"], ["loadingScreen", ""], [2, "overflow", "scroll", "height", "100%", "padding-bottom", "5rem"], [1, "container", "animated", "fadeInLeft"], [2, "text-align", "right"], [1, "keyword-section"], [1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col", "s6", "m6", "l4", "xl3"], [3, "keywordObj"], [1, "center-content", "h-90"], [1, "container"], [2, "text-align", "center"], [1, "progress"], [1, "indeterminate"]],
      template: function AllKeywordsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllKeywordsComponent_div_0_Template, 61, 10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllKeywordsComponent_ng_template_1_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverResponded)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _keyword_card_keyword_card_component__WEBPACK_IMPORTED_MODULE_2__["KeywordCardComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllKeywordsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-keywords',
          template: "\n\n        <div *ngIf=\"serverResponded; else loadingScreen\" style=\"overflow: scroll; height: 100%; padding-bottom: 5rem\">\n            <section class='container animated fadeInLeft'>\n\n                <br/>\n                <div style='text-align: right'><h6>Showing {{keywordCount}} keywords.</h6></div>\n                <br/>\n\n                <div class='keyword-section'>\n                    <h6>Languages</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'language'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>Libraries</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'library'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>Front End Frameworks</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'front-end-framework'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n                \n                <div class='keyword-section'>\n                    <h6>Back End Frameworks</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'back-end-framework'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>Databases</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'database'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>ORMs</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'orm'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>Deployment Technologies</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'deployment'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>Operating Systems</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'operating-system'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class='keyword-section'>\n                    <h6>Other</h6>\n                    <hr/>\n                    <div class='row'>\n                        <div *ngFor='let item of allKeywordsArray'>\n                            <div *ngIf=\"item.type == 'other'\">\n                                <section class='col s6 m6 l4 xl3'>\n                                    <!-- <div *ngIf=\"item.isActive == true; else inactiveKeywordCard\"> -->\n                                        <app-keyword-card [keywordObj]=\"item\"></app-keyword-card>\n                                    <!-- </div> -->\n                                </section>\n                            </div>\n                            <!-- <ng-template #inactiveKeywordCard>\n                                <div style=\"opacity: 0.5\"><app-keyword-card [keywordObj]=\"item\"></app-keyword-card></div>\n                            </ng-template> -->\n                        </div>\n                    </div>\n                </div>\n                \n            </section>\n        </div>\n        \n        <ng-template #loadingScreen>\n            <section class='center-content h-90'>\n                <div class='container'>\n                    <div style='text-align: center'><h6>Loading keyword data...</h6></div>\n                    <div class=\"progress\">\n                        <div class=\"indeterminate\"></div>\n                    </div>\n                </div>\n            </section>\n        </ng-template>\n\n    ",
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./all-keywords/all-keywords.component */
    "./src/app/all-keywords/all-keywords.component.ts");
    /* harmony import */


    var _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyword-details/keyword-details.component */
    "./src/app/keyword-details/keyword-details.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'allkeywords',
      pathMatch: 'full'
    }, {
      path: 'allkeywords',
      component: _all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_2__["AllKeywordsComponent"]
    }, {
      path: 'allkeywords/keyworddetails/:id',
      component: _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_3__["KeywordDetailsComponent"]
    }, {
      path: 'addnew',
      component: _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_3__["KeywordDetailsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_2__["AllKeywordsComponent"], _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_3__["KeywordDetailsComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'keywordfactory';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 18,
      vars: 0,
      consts: [[1, "nav-wrapper", "deep-orange", "lighten-1"], ["href", "#", 1, "brand-logo", 2, "padding-left", "15px"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], ["routerLink", "allkeywords", "routerLinkActive", "teal lighten-2"], ["routerLink", "addnew", "routerLinkActive", "teal lighten-2"], ["href", "https://cafeamericano.github.io/appGalleryLite/", "target", "_blank"], ["href", "https://cafeamericano.github.io/appFactory/#/", "target", "_blank"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Keyword Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All Keywords");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "App Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "App Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./all-keywords/all-keywords.component */
    "./src/app/all-keywords/all-keywords.component.ts");
    /* harmony import */


    var _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./keyword-details/keyword-details.component */
    "./src/app/keyword-details/keyword-details.component.ts");
    /* harmony import */


    var _keyword_card_keyword_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./keyword-card/keyword-card.component */
    "./src/app/keyword-card/keyword-card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_4__["AllKeywordsComponent"], _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_5__["KeywordDetailsComponent"], _all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_4__["AllKeywordsComponent"], _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_5__["KeywordDetailsComponent"], _keyword_card_keyword_card_component__WEBPACK_IMPORTED_MODULE_6__["KeywordCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"], _all_keywords_all_keywords_component__WEBPACK_IMPORTED_MODULE_4__["AllKeywordsComponent"], _keyword_details_keyword_details_component__WEBPACK_IMPORTED_MODULE_5__["KeywordDetailsComponent"], _keyword_card_keyword_card_component__WEBPACK_IMPORTED_MODULE_6__["KeywordCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/keyword-card/keyword-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/keyword-card/keyword-card.component.ts ***!
    \********************************************************/

  /*! exports provided: KeywordCardComponent */

  /***/
  function srcAppKeywordCardKeywordCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeywordCardComponent", function () {
      return KeywordCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var KeywordCardComponent =
    /*#__PURE__*/
    function () {
      function KeywordCardComponent() {
        _classCallCheck(this, KeywordCardComponent);
      }

      _createClass(KeywordCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KeywordCardComponent;
    }();

    KeywordCardComponent.ɵfac = function KeywordCardComponent_Factory(t) {
      return new (t || KeywordCardComponent)();
    };

    KeywordCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeywordCardComponent,
      selectors: [["app-keyword-card"]],
      inputs: {
        keywordObj: "keywordObj"
      },
      decls: 4,
      vars: 2,
      consts: [["routerLinkActive", "", 3, "routerLink"], [1, "card", 2, "padding", "7px"]],
      template: function KeywordCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "keyworddetails/", ctx.keywordObj._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.keywordObj.name);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeywordCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-keyword-card',
          template: "\n        <a routerLink='keyworddetails/{{keywordObj._id}}' routerLinkActive=''>\n            <div class='card' style=\"padding: 7px\">\n                <strong>{{keywordObj.name}}</strong>\n            </div>\n        </a>\n    ",
          styles: []
        }]
      }], function () {
        return [];
      }, {
        keywordObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/keyword-details/keyword-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/keyword-details/keyword-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: KeywordDetailsComponent */

  /***/
  function srcAppKeywordDetailsKeywordDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeywordDetailsComponent", function () {
      return KeywordDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function KeywordDetailsComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r39.keywordInformation.name);
      }
    }

    function KeywordDetailsComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 16);
      }
    }

    function KeywordDetailsComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r49.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r49.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r49.label, " ");
      }
    }

    function KeywordDetailsComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r50.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r50.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r50.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.label, " ");
      }
    }

    function KeywordDetailsComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r51.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r51.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r51.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r51.label, " ");
      }
    }

    function KeywordDetailsComponent_a_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeywordDetailsComponent_a_28_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.processDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KeywordDetailsComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeywordDetailsComponent_span_31_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.processUpdate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KeywordDetailsComponent_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeywordDetailsComponent_ng_template_32_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.processCreate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var KeywordDetailsComponent =
    /*#__PURE__*/
    function () {
      function KeywordDetailsComponent(route, location) {
        var _this2 = this;

        _classCallCheck(this, KeywordDetailsComponent);

        this.location = location;

        this.ngOnInit = function () {
          _this2.definePossibleKeywordTypes();

          _this2.definePossibleDisplayStatuses();

          if (_this2.keywordId) {
            _this2.processRead();
          }
        };

        this.definePossibleDisplayStatuses = function () {
          _this2.possibleDisplayStatuses = [{
            label: "Show",
            value: "true"
          }, {
            label: "Hide",
            value: "false"
          }];
        };

        this.definePossibleKeywordTypes = function () {
          _this2.possibleKeywordTypes = [{
            label: "Language",
            value: 'language'
          }, {
            label: "Library",
            value: 'library'
          }, {
            label: "Front End Framework",
            value: 'front-end-framework'
          }, {
            label: "Back End Framework",
            value: 'back-end-framework'
          }, {
            label: "Database",
            value: 'database'
          }, {
            label: "ORM",
            value: 'orm'
          }, {
            label: "Deployment Technology",
            value: 'deployment'
          }, {
            label: "Operating System",
            value: 'operating-system'
          }, {
            label: "Other",
            value: 'other'
          }];
        };

        this.applyPreselectedKeywordType = function () {
          if (_this2.keywordInformation && _this2.keywordInformation.type) {
            document.getElementById(_this2.keywordInformation.type).setAttribute('selected', '');
          }
        };

        this.applyPreselectedDisplayStatus = function () {
          if (_this2.keywordInformation) {
            console.log(_this2.keywordInformation);
            console.log(document.getElementById('keywordShowInGallery'));
            document.getElementById('keywordShowInGallery').querySelector(".".concat(_this2.keywordInformation.showInGallery)).setAttribute('selected', '');
            document.getElementById('keywordShowOnPortfolio').querySelector(".".concat(_this2.keywordInformation.showOnPortfolio)).setAttribute('selected', '');
          }
        };

        route.params.subscribe(function (params) {
          console.log(params);
          _this2.keywordId = params.id;
        });
        route.queryParams.subscribe(function (qParams) {
          console.log(qParams);
        });
        this.ngOnInit();
      }

      _createClass(KeywordDetailsComponent, [{
        key: "processRead",
        value: function processRead() {
          var _this3 = this;

          var rootUrl = 'https://central-api-go.appspot.com';
          fetch(rootUrl + "/KeywordFactory/api/keyword?id=" + this.keywordId).then(function (response) {
            return response.json();
          }).then(function (data) {
            _this3.keywordInformation = data[0];

            _this3.applyPreselectedKeywordType();

            _this3.applyPreselectedDisplayStatus();
          });
        }
      }, {
        key: "processCreate",
        value: function processCreate() {
          var _this4 = this;

          var rootUrl = 'https://central-api-go.appspot.com';
          var url = rootUrl + '/KeywordFactory/api/keyword';
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: document.getElementById('keywordName').value,
              type: document.getElementById('keywordSelectedType').value,
              showInGallery: document.getElementById('keywordShowInGallery').value == "true",
              showOnPortfolio: document.getElementById('keywordShowOnPortfolio').value == "true"
            })
          }).then(function (response) {
            _this4.location.back();
          });
        }
      }, {
        key: "processUpdate",
        value: function processUpdate() {
          var _this5 = this;

          var rootUrl = 'https://central-api-go.appspot.com';
          var url = rootUrl + '/KeywordFactory/api/keyword';
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              _id: this.keywordId,
              name: document.getElementById('keywordName').value,
              type: document.getElementById('keywordSelectedType').value,
              showInGallery: document.getElementById('keywordShowInGallery').value == "true",
              showOnPortfolio: document.getElementById('keywordShowOnPortfolio').value == "true"
            })
          }).then(function (response) {
            _this5.location.back();
          });
        }
      }, {
        key: "processDelete",
        value: function processDelete() {
          var _this6 = this;

          var rootUrl = 'https://central-api-go.appspot.com';
          var url = rootUrl + '/KeywordFactory/api/keyword';
          fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              _id: this.keywordId
            })
          }).then(function (response) {
            _this6.location.back();
          });
        }
      }, {
        key: "processCancel",
        value: function processCancel() {
          this.location.back();
        }
      }]);

      return KeywordDetailsComponent;
    }();

    KeywordDetailsComponent.ɵfac = function KeywordDetailsComponent_Factory(t) {
      return new (t || KeywordDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    KeywordDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeywordDetailsComponent,
      selectors: [["app-keyword-details"]],
      decls: 34,
      vars: 8,
      consts: [[1, "center-content", "h-90", "animated", "fadeInDown"], [1, "card", "container", "p-2", 2, "width", "350px"], [1, "row"], [4, "ngIf", "ngIfElse"], ["elseBlock1", ""], ["id", "keywordSelectedType", 1, "browser-default"], ["value", "", "disabled", "", "selected", ""], [3, "id", "value", 4, "ngFor", "ngForOf"], ["id", "keywordShowInGallery", 1, "browser-default"], [3, "id", "class", "value", 4, "ngFor", "ngForOf"], ["id", "keywordShowOnPortfolio", 1, "browser-default"], [1, "row", 2, "text-align", "center"], ["class", "m-1 waves-effect waves-light btn red lighten-2", 3, "click", 4, "ngIf"], [1, "m-1", "waves-effect", "waves-light", "btn", "blue-grey", "lighten-3", 3, "click"], ["elseBlock2", ""], ["id", "keywordName", "type", "text", 1, "validate", 3, "value"], ["value", "", "placeholder", "Keyword Name", "id", "keywordName", "type", "text", 1, "validate"], [3, "id", "value"], [1, "m-1", "waves-effect", "waves-light", "btn", "red", "lighten-2", 3, "click"], [1, "m-1", "waves-effect", "waves-light", "btn", 3, "click"]],
      template: function KeywordDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KeywordDetailsComponent_span_3_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KeywordDetailsComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Keyword Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KeywordDetailsComponent_option_12_Template, 2, 3, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show in App Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, KeywordDetailsComponent_option_19_Template, 2, 6, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Show on Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, KeywordDetailsComponent_option_26_Template, 2, 6, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, KeywordDetailsComponent_a_28_Template, 2, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeywordDetailsComponent_Template_a_click_29_listener() {
            return ctx.processCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, KeywordDetailsComponent_span_31_Template, 3, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, KeywordDetailsComponent_ng_template_32_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.keywordInformation)("ngIfElse", _r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.possibleKeywordTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.possibleDisplayStatuses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.possibleDisplayStatuses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.keywordInformation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.keywordId)("ngIfElse", _r47);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeywordDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-keyword-details',
          template: "\n    <section class='center-content h-90 animated fadeInDown'>\n        <div class='card container p-2' style='width: 350px'>\n\n            <div class=\"row\">\n                <span *ngIf=\"keywordInformation; else elseBlock1\">\n                    <input\n                    value=\"{{keywordInformation.name}}\" \n                    id=\"keywordName\" \n                    type=\"text\" \n                    class=\"validate\"\n                >\n                </span>\n                <ng-template #elseBlock1>\n                    <input\n                        value=\"\" \n                        placeholder=\"Keyword Name\"\n                        id=\"keywordName\" \n                        type=\"text\" \n                        class=\"validate\"\n                    >\n                </ng-template>\n            </div>\n\n            <div class=\"row\">\n                <label>Keyword Type</label>\n                <select id='keywordSelectedType' class=\"browser-default\">\n                    <option value=\"\" disabled selected>Select type</option>\n                    <option \n                        *ngFor='let item of this.possibleKeywordTypes'\n                        id={{item.value}}\n                        value={{item.value}}\n                    >\n                        {{item.label}}\n                    </option>\n                </select>\n            </div>\n\n            <div class=\"row\">\n                <label>Show in App Gallery</label>\n                <select id='keywordShowInGallery' class=\"browser-default\">\n                    <option value=\"\" disabled selected>Select status</option>\n                    <option \n                        *ngFor='let item of this.possibleDisplayStatuses'\n                        id={{item.value}}\n                        class={{item.value}}\n                        value={{item.value}}\n                    >\n                        {{item.label}}\n                    </option>\n                </select>\n            </div>\n\n            <div class=\"row\">\n                <label>Show on Portfolio</label>\n                <select id='keywordShowOnPortfolio' class=\"browser-default\">\n                    <option value=\"\" disabled selected>Select status</option>\n                    <option \n                        *ngFor='let item of this.possibleDisplayStatuses'\n                        id={{item.value}}\n                        class={{item.value}}\n                        value={{item.value}}\n                    >\n                        {{item.label}}\n                    </option>\n                </select>\n            </div>\n\n            <div class=\"row\" style=\"text-align: center\">\n                <a *ngIf=\"keywordInformation\" (click)=\"processDelete()\" class=\"m-1 waves-effect waves-light btn red lighten-2\">Delete</a>\n                <a (click)=\"processCancel()\" class=\"m-1 waves-effect waves-light btn blue-grey lighten-3\">Cancel</a>\n                <span *ngIf=\"keywordId; else elseBlock2\">\n                    <a (click)=\"processUpdate()\" class=\"m-1 waves-effect waves-light btn\">Update</a>\n                </span>\n                <ng-template #elseBlock2>\n                    <a (click)=\"processCreate()\" class=\"m-1 waves-effect waves-light btn\">Add</a>\n                </ng-template>\n            </div>\n\n        </div>\n    </section>\n  ",
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/matthew-dev/Repositories/keywordFactory/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map