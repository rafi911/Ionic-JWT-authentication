function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n  <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n      <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n  </div>\n</nav>\n\n<!-- main app container -->\n<div>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card login-page\">\n        <!-- <div class=\"alert alert-info\">\n                Username: test<br />\n                Password: test\n            </div> -->\n            <h5 class=\"header\">Login to Continue</h5>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" \n                    [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"User name\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" formControlName=\"password\" \n                    class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" \n                    placeholder=\"password\"/>\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading || loginForm.invalid\" class=\"btn login-button\">Login</button>\n                    <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                </div>\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n            </form>\n</div>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-details/post-details.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-details/post-details.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostDetailsPostDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Post details</h4>\n<div *ngIf=\"post\">\n\n\n        <div class=\"card mat-card\" >\n                <div class=\"card-header\">\n                  <h1 class=\"card-title post-title\">{{post.title | slice : 0:2 | uppercase }}</h1>\n                        \n                      </div>\n                <div class=\"card-body\">\n                  <h6 class=\"card-subtitle mb-2\">{{post.title}}</h6>\n                  <p class=\"card-text\">{{post.body}}</p>\n                </div>\n                <h6 class=\"post-comments-heading\">Post comments</h6>\n                <div *ngIf=\"post.comments\">\n                        <div class=\"card-footer\" *ngFor=\"let comment of post.comments\">\n                                <div class=\"card\" >\n                                        \n                                        <div class=\"card-body\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-2\">\n                                                    <div class=\"comment-title-radius\">\n                                                            <h5 class=\"card-title comment-title\">{{comment.name | slice : 0:2 | uppercase }}\n                                                                </h5>\n                                                    </div>\n                                                         \n                                                </div>\n                                                \n                                                <div class=\"col-md-8 comment-name\">\n                                                    <h6 class=\"card-subtitle mb-2\">{{comment.name}}</h6>\n                                                    <h6 class=\"card-subtitle mb-2\">{{comment.email}}</h6>       \n                                                </div>\n                                                <div class=\"col-md-2 edit-comment-button\">\n                                                        <button class=\"btn edit-button\" (click)=\"openModal(template,comment)\" >EDIT</button>\n\n                                                </div>\n                                               \n                                            </div>\n\n                                          <p class=\"card-text\">{{comment.body}}</p>\n                                          <!-- <a href=\"\" (click)=\"getComments(post.id)\"  class=\"card-link\">Comments</a> -->\n                                        </div>\n                                                                               \n                                </div>\n                        </div>\n                </div>\n                \n\n                \n        </div>\n\n\n  </div>\n        \n\n  <ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Edit comment</h4>\n          \n          \n        </div>\n        <div class=\"modal-body\" *ngIf=\"isCommentEditable\">\n                <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" \n                             placeholder=\"Name\" />\n                            <div *ngIf=\"this.commentForm.controls['name'].invalid\" class=\"invalid-feedback\">\n                                <div *ngIf=\"this.commentForm.controls['name'].invalid\">Name is required</div>\n                            </div>\n                        </div>\n        \n                        <div class=\"form-group\">\n                                <input type=\"text\" formControlName=\"email\" class=\"form-control\" \n                                 placeholder=\"Email\" />\n                                <div *ngIf=\"this.commentForm.controls['email'].invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"this.commentForm.controls['email'].invalid\">Email is required</div>\n                                </div>\n                        </div>\n        \n                        <div class=\"form-group\">\n                                <textarea type=\"text\" formControlName=\"body\" class=\"form-control\" \n                                 placeholder=\"Body\" rows=\"2\" ></textarea>\n                                <div *ngIf=\"this.commentForm.controls['body'].invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"this.commentForm.controls['body'].invalid\">Body is required</div>\n                                </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <button [disabled]=\"loading || commentForm.invalid\" class=\"btn submit-comment-button\">Submit</button>\n                            <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                        </div>\n                        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                    </form>\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n        </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Posts</h4>\n<div *ngFor=\"let post of postsArray\">\n        <div class=\"card mat-card\" >\n                <div class=\"card-header\">\n                  <h1 class=\"card-title\">{{post.title | slice : 0:2 | uppercase }}</h1>\n                        \n                      </div>\n                <div class=\"card-body\">\n                  <h6 class=\"card-subtitle mb-2\">{{post.title}}</h6>\n                  <p class=\"card-text\">{{post.body}}</p>\n                  <button class=\"btn comment-button\"  (click)=\"getComments(post.id)\"  >Comments</button>\n                <button class=\"btn edit-button\" (click)=\"editPost(template,post)\" >EDIT</button>\n                </div>              \n        </div>\n\n\n        \n\n</div>\n<!-- pop up window -->\n<ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Edit post</h4>\n          \n          \n        </div>\n        <div class=\"modal-body\" *ngIf=\"isPostEditable\">\n                <form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" formControlName=\"title\" class=\"form-control\" \n                             placeholder=\"Name\" />\n                            <div *ngIf=\"this.postForm.controls['title'].invalid\" class=\"invalid-feedback\">\n                                <div *ngIf=\"this.postForm.controls['title'].invalid\">Title is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                                <textarea type=\"text\" formControlName=\"body\" class=\"form-control\" \n                                 placeholder=\"Body\" rows=\"2\" ></textarea>\n                                <div *ngIf=\"this.postForm.controls['body'].invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"this.postForm.controls['body'].invalid\">Body is required</div>\n                                </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <button [disabled]=\"loading || postForm.invalid\" class=\"btn submit-post-button\">Submit</button>\n                            <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                        </div>\n                        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                    </form>\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n        </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_gurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/auth.gurd */
    "./src/app/shared/auth.gurd.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-details/post-details.component */
    "./src/app/post-details/post-details.component.ts"); // const routes: Routes = [
    //   {path : '', redirectTo : 'user/registration', pathMatch : 'full'},
    //   {
    //     path : 'user', component : UserComponent,
    //       children : [
    //         {path : 'registration', component : RegistrationComponent}
    //       ]
    //   }
    // ];
    // const routes : Routes = [
    //   {path : 'list', component : ListEmployeeComponent },
    //   {path : 'create', component : CreateEmployeeComponent},
    //   {path : '', redirectTo : '/list', pathMatch: 'full'}
    // ]


    var appRoutes = [{
      path: '',
      component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
      canActivate: [_shared_auth_gurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'comments',
      component: _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_6__["PostDetailsComponent"],
      canActivate: [_shared_auth_gurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {};

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/authentication.service */
    "./src/app/shared/authentication.service.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(userService, router, authenticationService, titleService) {
        this.userService = userService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.titleService = titleService;
        this.title = 'Post';
        this.titleService.setTitle("Post");
      }

      var _proto = AppComponent.prototype;

      _proto.ngOnInit = function ngOnInit() {
        var _this = this;

        this.authenticationService.currentUser.subscribe(function (x) {
          _this.currentUser = x;
          console.log("user", x);
        });
      };

      _proto.logout = function logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      };

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/jwt.interceptor */
    "./src/app/shared/jwt.interceptor.ts");
    /* harmony import */


    var _shared_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/error.interceptor */
    "./src/app/shared/error.interceptor.ts");
    /* harmony import */


    var _shared_fake_backend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/fake-backend */
    "./src/app/shared/fake-backend.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./post-details/post-details.component */
    "./src/app/post-details/post-details.component.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"); // or


    var AppModule = function AppModule() {};

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"], _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_13__["PostDetailsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _shared_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _shared_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
        multi: true
      }, // provider used to create fake backend
      _shared_fake_backend__WEBPACK_IMPORTED_MODULE_11__["fakeBackendProvider"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-page {\r\n\theight: 37%;\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n  \tpadding: 30px;\r\n\tmargin: 10px;\r\n\tmargin-bottom: auto;\r\n\tmargin-top: auto;\r\n}\r\n.header{\r\n    text-align: center;\r\n}\r\n.login-button{\r\n    width: -webkit-fill-available;\r\n    background-color: #CCCC00;\t\r\n    border: #CCCC00 solid 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsS0FBSztDQUNMLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsUUFBUTtHQUNOLGFBQWE7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XHJcblx0aGVpZ2h0OiAzNyU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDowO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG4gIFx0cGFkZGluZzogMzBweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogYXV0bztcclxuXHRtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b257XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDMDA7XHRcclxuICAgIGJvcmRlcjogI0NDQ0MwMCBzb2xpZCAxcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/authentication.service */
    "./src/app/shared/authentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authenticationService) {
        var _this2 = this;

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this2.currentUser = x;
        });
      }

      var _proto2 = LoginComponent.prototype;

      _proto2.logout = function logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      };

      _proto2.ngOnInit = function ngOnInit() {
        this.loginForm = this.formBuilder.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }); // reset login status

        this.authenticationService.logout(); // get return url from route parameters or default to '/'

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      };

      _proto2.onSubmit = function onSubmit() {
        var _this3 = this;

        this.submitted = true; // stop here if form is invalid

        if (this.loginForm.invalid) {
          return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
          _this3.router.navigate([_this3.returnUrl]);
        }, function (error) {
          _this3.error = error;
          _this3.loading = false;
        });
      };

      _createClass(LoginComponent, [{
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/post-details/post-details.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/post-details/post-details.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostDetailsPostDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card{\r\n    width: 100%;\r\n}\r\n.post-title{\r\n    font-size: 4.5rem;\r\n    text-align: center;\r\n    color: #CCCC00;\r\n    opacity: 0.4;\r\n}\r\n.comment-title {\r\n    text-align: center;\r\n    color: white;\r\n    opacity: 0.4;\r\n}\r\n.edit-button{\r\n    background-color: #CCCC00;\t\r\n    border: #CCCC00 solid 1px;\r\n}\r\n.comment-title-radius{\r\n    border-radius: 50%;\r\n    background-color: #CCCC00;\r\n    padding : 19px;\r\n    height:  63px;\r\n    width: 70px;\r\n}\r\n.comment-name{\r\n    padding-top: 15px;\r\n}\r\n.edit-comment-button{\r\n    padding-top: 15px;\r\n}\r\n.post-comments-heading{\r\n    padding-left: 20px;\r\n}\r\n.submit-comment-button{\r\n    width: -webkit-fill-available;\r\n    background-color: #CCCC00;\t\r\n    border: #CCCC00 solid 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvc3QtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDQuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjQ0NDQzAwO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcbi5jb21tZW50LXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG4uZWRpdC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQzAwO1x0XHJcbiAgICBib3JkZXI6ICNDQ0NDMDAgc29saWQgMXB4O1xyXG59XHJcblxyXG4uY29tbWVudC10aXRsZS1yYWRpdXN7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQzAwO1xyXG4gICAgcGFkZGluZyA6IDE5cHg7XHJcbiAgICBoZWlnaHQ6ICA2M3B4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuLmNvbW1lbnQtbmFtZXtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5lZGl0LWNvbW1lbnQtYnV0dG9ue1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLnBvc3QtY29tbWVudHMtaGVhZGluZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4uc3VibWl0LWNvbW1lbnQtYnV0dG9ue1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQzAwO1x0XHJcbiAgICBib3JkZXI6ICNDQ0NDMDAgc29saWQgMXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post-details/post-details.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/post-details/post-details.component.ts ***!
    \********************************************************/

  /*! exports provided: PostDetailsComponent */

  /***/
  function srcAppPostDetailsPostDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function () {
      return PostDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PostDetailsComponent =
    /*#__PURE__*/
    function () {
      function PostDetailsComponent(postService, route, activateRoute, modalService, fb) {
        this.postService = postService;
        this.route = route;
        this.activateRoute = activateRoute;
        this.modalService = modalService;
        this.fb = fb;
      }

      var _proto3 = PostDetailsComponent.prototype;

      _proto3.ngOnInit = function ngOnInit() {
        var _this4 = this;

        this.postId = this.activateRoute.snapshot.queryParamMap.get('postId');
        this.postService.getComments(this.postId).subscribe(function (comments) {
          _this4.postService.getPost(_this4.postId).subscribe(function (post) {
            _this4.post = post;
            _this4.post.comments = comments;
            console.log('comments', comments);
          });
        });
      };

      _proto3.openModal = function openModal(template, comment) {
        this.commentForm = this.fb.group({
          name: [comment.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          email: [comment.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          body: [comment.body, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.isCommentEditable = true;
        console.log('comments', comment);
        this.modalRef = this.modalService.show(template);
      };

      return PostDetailsComponent;
    }();

    PostDetailsComponent.ctorParameters = function () {
      return [{
        type: _shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    PostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-details/post-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-details.component.css */
      "./src/app/post-details/post-details.component.css")).default]
    })], PostDetailsComponent);
    /***/
  },

  /***/
  "./src/app/post/post.component.css":
  /*!*****************************************!*\
    !*** ./src/app/post/post.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card{\r\n    width: 100%;\r\n    margin-bottom:3%;\r\n}\r\n\r\n.card-title{\r\n    font-size: 4.5rem;\r\n    text-align: center;\r\n    color: #CCCC00;\r\n    opacity: 0.4;\r\n}\r\n\r\n.edit-button{\r\n    background-color: #CCCC00;\t\r\n    border: #CCCC00 solid 1px;\r\n}\r\n\r\n.comment-button{\r\n    background-color: #CCCC00;\t\r\n    border: #CCCC00 solid 1px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.submit-post-button{\r\n    width: -webkit-fill-available;\r\n    background-color: #CCCC00;\t\r\n    border: #CCCC00 solid 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MyU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0NDQ0MwMDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG4uZWRpdC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQzAwO1x0XHJcbiAgICBib3JkZXI6ICNDQ0NDMDAgc29saWQgMXB4O1xyXG59XHJcbi5jb21tZW50LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDMDA7XHRcclxuICAgIGJvcmRlcjogI0NDQ0MwMCBzb2xpZCAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnN1Ym1pdC1wb3N0LWJ1dHRvbntcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0MwMDtcdFxyXG4gICAgYm9yZGVyOiAjQ0NDQzAwIHNvbGlkIDFweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PostComponent =
    /*#__PURE__*/
    function () {
      function PostComponent(postService, router, modalService, fb) {
        this.postService = postService;
        this.router = router;
        this.modalService = modalService;
        this.fb = fb;
      }

      var _proto4 = PostComponent.prototype;

      _proto4.ngOnInit = function ngOnInit() {
        var _this5 = this;

        this.postService.getPosts().subscribe(function (posts) {
          _this5.postsArray = posts;
          console.log('Data', posts);
        });
      };

      _proto4.editPost = function editPost(template, post) {
        console.log('post', post);
        this.postForm = this.fb.group({
          title: [post.title, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          body: [post.body, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.isPostEditable = true;
        this.modalRef = this.modalService.show(template);
      };

      _proto4.getComments = function getComments(postId) {
        this.router.navigate(['/comments'], {
          queryParams: {
            postId: postId
          }
        });
      };

      return PostComponent;
    }();

    PostComponent.ctorParameters = function () {
      return [{
        type: _shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.component.css */
      "./src/app/post/post.component.css")).default]
    })], PostComponent);
    /***/
  },

  /***/
  "./src/app/shared/auth.gurd.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/auth.gurd.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedAuthGurdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/shared/authentication.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
      }

      var _proto5 = AuthGuard.prototype;

      _proto5.canActivate = function canActivate(route, state) {
        var currentUser = this.authenticationService.currentUserValue;

        if (currentUser) {
          // logged in so return true
          return true;
        } // not logged in so redirect to login page with the return url


        this.router.navigate(['/login'], {
          queryParams: {
            returnUrl: state.url
          }
        }); // this.authenticationService.logout();

        return false;
      };

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/authentication.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/authentication.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppSharedAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      var _proto6 = AuthenticationService.prototype;

      _proto6.login = function login(username, password) {
        var _this6 = this;

        return this.http.post("http://localhost:4000/users/authenticate", {
          username: username,
          password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this6.currentUserSubject.next(user);
          }

          return user;
        }));
      };

      _proto6.logout = function logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      };

      _createClass(AuthenticationService, [{
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/shared/error.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/error.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppSharedErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/authentication.service */
    "./src/app/shared/authentication.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
      }

      var _proto7 = ErrorInterceptor.prototype;

      _proto7.intercept = function intercept(request, next) {
        var _this7 = this;

        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          if (err.status === 401) {
            // auto logout if 401 response returned from api
            _this7.authenticationService.logout();

            location.reload(true);
          }

          var error = err.error.message || err.statusText;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
      };

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/fake-backend.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/fake-backend.ts ***!
    \****************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppSharedFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FakeBackendInterceptor =
    /*#__PURE__*/
    function () {
      function FakeBackendInterceptor() {}

      var _proto8 = FakeBackendInterceptor.prototype;

      _proto8.intercept = function intercept(request, next) {
        var users = [{
          id: 1,
          userName: 'test',
          password: 'test'
        }];
        var authHeader = request.headers.get('Authorization');
        var isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token'); // wrap in delayed observable to simulate server api call

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
          // authenticate - public
          if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            var user = users.find(function (x) {
              return x.userName === request.body.username && x.password === request.body.password;
            });
            if (!user) return error('Username or password is incorrect');
            return ok({
              id: user.id,
              username: user.userName,
              token: "fake-jwt-token"
            });
          } // get all users


          if (request.url.endsWith('/users') && request.method === 'GET') {
            if (!isLoggedIn) return unauthorised();
            return ok(users);
          } // pass through any requests not handled above


          return next.handle(request);
        })) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])()); // private helper functions

        function ok(body) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
            status: 200,
            body: body
          }));
        }

        function unauthorised() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }

        function error(message) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
            status: 400,
            error: {
              message: message
            }
          });
        }
      };

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FakeBackendInterceptor);
    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/shared/jwt.interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/jwt.interceptor.ts ***!
    \*******************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppSharedJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/authentication.service */
    "./src/app/shared/authentication.service.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
      }

      var _proto9 = JwtInterceptor.prototype;

      _proto9.intercept = function intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        var currentUser = this.authenticationService.currentUserValue;
        var isLoggedIn = currentUser && currentUser.token;
        var isApiUrl = request.url.startsWith('http://localhost:4000');

        if (isLoggedIn && isApiUrl) {
          request = request.clone({
            setHeaders: {
              Authorization: "Bearer " + currentUser.token
            }
          });
        }

        return next.handle(request);
      };

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/post.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/post.service.ts ***!
    \****************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppSharedPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PostService =
    /*#__PURE__*/
    function () {
      function PostService(http) {
        this.http = http;
      }

      var _proto10 = PostService.prototype;

      _proto10.getPosts = function getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
      };

      _proto10.getComments = function getComments(postId) {
        var options = postId ? {
          params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('postId', postId)
        } : {};
        return this.http.get('https://jsonplaceholder.typicode.com/comments/', options);
      };

      _proto10.getPost = function getPost(postId) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId);
      };

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostService);
    /***/
  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        this.http = http;
      }

      var _proto11 = UserService.prototype;

      _proto11.getAll = function getAll() {
        return this.http.get("http://localhost:4000/users");
      };

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\rafi\Desktop\Post\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map