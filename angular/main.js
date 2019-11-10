(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n    {{alert.message}}\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-register/admin-register.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-register/admin-register.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n         <div id=\"login-page\" class=\"row\">\n        <div class=\"col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8\">\n\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Administrator</h4>\n                <div class=\"text-center mt-4 font-weight-light\">\n                  Already have an account? <a href=\"/cmrLogin\" >Login</a>\n                </div>\n                <br>\n                <form class=\"col s12\" #adminForm=\"ngForm\" (ngSubmit)=\"createAdmin(adminForm)\" novalidate>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"admin.email\" type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Admin Email\">\n                      <label for=\"email\">Admin Email</label>\n                    </div>\n                  </div>\n\n\n                   <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"admin.passcode\" type=\"password\" class=\"form-control\" name=\"passcode\" id=\"passcode\" placeholder=\"Admin Password\" >\n                      <label for=\"passcode\">Admin Password</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Admin\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  \n                </form>\n              </div>\n\n\n  </div>\n</div>\n\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/anniversary/anniversary.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anniversary/anniversary.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n<!-- <div class=\"container-fluid page-body-wrapper\">\n  \n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <h4>Anniversary</h4>\n\n      <div class=\"row\">\n\n          <div class=\"col-md-8 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Profile a Branch</h5>\n                  <div class=\"table-responsive\">\n\n                    <form class=\"forms-sample\" #anniversary=\"ngForm\" (ngSubmit)=\"createAnniversary(anniversary)\" novalidate>\n\n                      <div class=\"form-group\">\n                        <label for=\"companyId\">Company</label>\n                        <select class=\"form-control\" id=\"companyId\" [(ngModel)]=\"anniversary.companyId\" name=\"companyId\">\n                          <option *ngFor=\"let coy of companies\" [ngValue]=\"coy.companyId\">{{coy.company_name}}</option>\n                        </select>\n                      </div>\n\n\n\n                          <div class=\"form-group\">\n                            <label for=\"branchId\">Branch</label>\n                            <select class=\"form-control\" id=\"branchId\" [(ngModel)]=\"anniversary.branchId\" name=\"branchId\">\n                              <option *ngFor=\"let branch of branches['data']\" [ngValue]=\"branch.branchId\">{{branch.branchName}}\n                              </option>\n                            </select>\n                          </div>\n\n\n                      <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input [(ngModel)]=\"anniversary.branchName\" type=\"text\" class=\"form-control\" name=\"branchName\" id=\"branchName\"\n                          placeholder=\"Name\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input [(ngModel)]=\"anniversary.email\" type=\"text\" class=\"form-control\" name=\"email\" id=\"email\"\n                          placeholder=\"Email\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"phoneNo\">Phone No</label>\n                        <input [(ngModel)]=\"anniversary.phoneNo\" type=\"text\" class=\"form-control\" name=\"phoneNo\" id=\"phoneNo\"\n                          placeholder=\"Phone No\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"address\">Address</label>\n                        <input [(ngModel)]=\"anniversary.address\" type=\"text\" class=\"form-control\" name=\"address\" id=\"address\"\n                          placeholder=\"Address\">\n                      </div>\n\n                      <button type=\"submit\" class=\"btn btn-primary mr-2\" onclick=\"showSwal('success-message')\">Submit</button>\n                      <button class=\"btn btn-light\">Cancel</button>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n        <div class=\"col-md-12 grid-margin stretch-card\">\n          <div class=\"card\">\n            <div class=\"card-body d-flex flex-column justify-content-between\">\n              <h4 class=\"card-title\">All Anniversaries</h4>\n              <div class=\"d-flex justify-content-between\">\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <thead>\n                      <tr>\n                        <th>Branch ID</th>\n                        <th>Staff Name</th>\n                        <th>Department</th>\n                        <th>Date Joined</th>\n                        <th>Email</th>\n                        <th>Phone</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let ann of anniversaries\">\n                        <td>{{ann.branchId}}</td>\n                        <td>{{ann.staff_name}}</td>\n                        <td>{{ann.department}}</td>\n                        <td>{{ann.date_joined}}</td>\n                        <td>{{ann.email}}</td>\n                        <td>{{ann.phone}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Anniversary</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Anniversary\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n          <ngx-ui-loader></ngx-ui-loader>\n        <!-- <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Anniversary</h4>\n                <form class=\"col s12\" #anniversary=\"ngForm\" (ngSubmit)=\"createAnniversary(anniversary)\" novalidate>\n                \n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select id=\"branchId\" [(ngModel)]=\"anniversary.branchId\" name=\"branchId\">\n                        <option value=\"\" disabled selected>Choose your Branch</option>\n                        <option *ngFor=\"let branch of branches['data']\" [ngValue]=\"branch.branchId\">{{branch.branchName}}\n                        </option>\n                      </select>\n                      <label for=\"branchId\">Branch</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Name\" [(ngModel)]=\"anniversary.branchName\" type=\"text\" class=\"form-control\" name=\"branchName\" id=\"branchName\">\n                      <label for=\"title\">Name</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Email\" [(ngModel)]=\"anniversary.email\" type=\"text\" class=\"form-control\" name=\"email\" id=\"email\">\n                      <label for=\"email\">Email</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Phone No\" [(ngModel)]=\"anniversary.phoneNo\" type=\"text\" class=\"form-control\" name=\"phoneNo\" id=\"phoneNo\">\n                      <label for=\"phoneNo\">Phone No</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Address\" [(ngModel)]=\"anniversary.address\" type=\"text\" class=\"form-control\" name=\"address\" id=\"address\">\n                      <label for=\"address\">Address</label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Anniversary\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div> -->\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Anniversaries</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Branch ID</th>\n                        <th>Staff Name</th>\n                        <th>Department</th>\n                        <th>Date Joined</th>\n                        <th>Email</th>\n                        <th>Phone</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let ann of anniversaries\">\n                          <td>{{ann.branchId}}</td>\n                          <td>{{ann.staff_name}}</td>\n                          <td>{{ann.department}}</td>\n                          <td>{{ann.date_joined}}</td>\n                          <td>{{ann.email}}</td>\n                          <td>{{ann.phone}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Branch ID</th>\n                          <th>Staff Name</th>\n                          <th>Department</th>\n                          <th>Date Joined</th>\n                          <th>Email</th>\n                          <th>Phone</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcement/announcement.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcement/announcement.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n          <ngx-ui-loader></ngx-ui-loader>\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Announcement</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Announcement\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Announcement</h4>\n                <form class=\"col s12\" [formGroup]=\"form\" (ngSubmit)=\"createAnouncement()\" novalidate>\n\n<!--\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select id=\"companyId\" [(ngModel)]=\"announcementData.companyId\" name=\"companyId\">\n                        <option value=\"\" disabled selected>Choose your Company</option>\n                        <option *ngFor=\"let coy of companies['data']\" [ngValue]=\"coy.companyId\">{{coy.company_name}}\n                        </option>\n                      </select>\n                      <label for=\"branchId\">Company</label>\n                    </div>\n                  </div> -->\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Title\" type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\">\n                      <label for=\"title\">Title</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Location\" type=\"text\" class=\"form-control\" formControlName=\"location\" id=\"location\">\n                      <label for=\"location\">Location</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"date\" type=\"text\" class=\"form-control\" formControlName=\"date\" id=\"date\">\n                      <label for=\"date\">Date</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"time\" type=\"text\" class=\"form-control\" formControlName=\"time\" id=\"time\">\n                      <label for=\"time\">Time</label>\n                    </div>\n                  </div>\n\n                  <div>\n                    <input type=\"file\" id=\"images\" (change)=\"uploadFile($event)\" #fileInput>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Announcement\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Announcements</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Title</th>\n                        <th>Location</th>\n                        <th>Date</th>\n                        <th>Time</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let announcement of announcements\">\n                          <td>{{announcement.title}}</td>\n                          <td>{{announcement.location}}</td>\n                          <td>{{announcement.date}}</td>\n                          <td>{{announcement.time}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Title</th>\n                        <th>Location</th>\n                        <th>Date</th>\n                        <th>Time</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/birthday/birthday.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthday/birthday.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Birthday</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Birthday\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n        <ngx-ui-loader></ngx-ui-loader>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Birthdays</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Branch ID</th>\n                          <th>Name</th>\n                          <th>Date of Birth</th>\n                          <th>Department</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let birthday of birthdays\">\n                          <td>{{birthday.branchId}}</td>\n                          <td>{{birthday.staff_name}}</td>\n                          <td>{{birthday.date_of_birth}}</td>\n                          <td>{{birthday.department}}</td>\n                          <td>{{birthday.email}}</td>\n                          <td>{{birthday.phone}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Branch ID</th>\n                          <th>Name</th>\n                          <th>Date of Birth</th>\n                          <th>Department</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/branch/branch.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/branch/branch.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Branch</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Branch\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n        <ngx-ui-loader></ngx-ui-loader>\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Branch</h4>\n                <form class=\"col s12\" [formGroup] = \"form\" (ngSubmit)=\"createBranch()\" novalidate>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input formControlName = \"branchName\" type=\"text\" class=\"form-control\" name=\"branchName\" required\n                        id=\"branchName\" placeholder=\"Branch Name\">\n                      <label for=\"branchName\">Branch Name</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input formControlName=\"email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" required\n                        placeholder=\"Email\">\n                      <label for=\"email\">Branch Email</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input formControlName=\"phoneNo\" type=\"number\" class=\"form-control\" name=\"phoneNo\" id=\"phoneNo\" required\n                        placeholder=\"Branch Phone No\">\n                      <label for=\"phone\">Branch Phone No</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input formControlName=\"address\" type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" required\n                        placeholder=\"Branch Address\">\n                      <label for=\"address\">Branch Address</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" [disabled]=\"!form.valid\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Branch\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Staff</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Branch ID</th>\n                          <th>Name</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                          <th>Address</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let branch of branches['data']\">\n                          <td>{{branch.branchId}}</td>\n                          <td>{{branch.branchName}}</td>\n                          <td>{{branch.email}}</td>\n                          <td>{{branch.phoneNo}}</td>\n                          <td>{{branch.address}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Branch ID</th>\n                          <th>Name</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                          <th>Address</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-dashboard/cmr-dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-dashboard/cmr-dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-cmr-sidebar></app-cmr-sidebar>\n\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n          <ngx-ui-loader></ngx-ui-loader>\n\n        <div class=\"row\">\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalCompanies}}</h5>\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Companies</p>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalBranches}}</h5>\n                <!-- <p class=\"no-margin\">New</p>\n                <p class=\"mb-0 pt-8\">1,12,900</p> -->\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Branches</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalDepartments}}</h5>\n                <!-- <p class=\"no-margin\">New</p>\n                <p class=\"mb-0 pt-8\">1,12,900</p> -->\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Departments</p>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalStaff}}</h5>\n                <!-- <p class=\"no-margin\">New</p>\n                <p class=\"mb-0 pt-8\">1,12,900</p> -->\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Staff</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-login/cmr-login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-login/cmr-login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"container\">\n\n      <div id=\"login-page\" class=\"row\">\n        <div class=\"col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8\">\n\n          <form class=\"login-form\" [formGroup] = \"form\" (ngSubmit)=\"cmrLogin()\" novalidate>\n              <img src=\"../../assets/images/logo/office-people-logo.png\" width=\"100px\" height=\"100px\" style=\"margin-left:45%\">\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <h5 class=\"ml-4\">Admin Sign in</h5>\n              </div>\n            </div>\n            <div class=\"row margin\">\n              <div class=\"input-field col s12\">\n                <i class=\"material-icons prefix pt-2\">person_outline</i>\n                <input type=\"text\" id=\"email\" name=\"email\" ngModel formControlName=\"email\">\n                <label for=\"email\" class=\"center-align\">Email Address</label>\n              </div>\n            </div>\n            <div class=\"row margin\">\n              <div class=\"input-field col s12\">\n                <i class=\"material-icons prefix pt-2\">lock_outline</i>\n                <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\">\n                <label for=\"password\">Password</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col s12 m12 l12 ml-2 mt-1\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" />\n                    <span>Remember Me</span>\n                  </label>\n                </p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button class=\"btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12\"\n                  type=\"submit\" name=\"action\" [disabled]=\"!form.valid\">\n                  Login\n                </button>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s6 m6 l6\">\n                <p class=\"margin medium-small\"><a href=\"/admin-register\" target=\"new\">Register\n                    Now!</a></p>\n              </div>\n              <div class=\"input-field col s6 m6 l6\">\n                <p class=\"margin right-align medium-small\"><a href=\"#\">Forgot password ?</a></p>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-staff/cmr-staff.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-staff/cmr-staff.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-cmr-sidebar></app-cmr-sidebar>\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Staff</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Staff\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12\">\n      <div class=\"container\">\n        <ngx-ui-loader></ngx-ui-loader>\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Staff</h4>\n                <form class=\"col s12\" [formGroup] = \"form\" (ngSubmit)=\"createStaff()\" novalidate>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Company ID\" formControlName=\"companyId\" type=\"text\" class=\"form-control\"\n                        name=\"companyId\" id=\"companyId\">\n                      <label for=\"companyId\">Company ID</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Branch ID\" formControlName=\"branchId\" type=\"text\" class=\"form-control\"\n                        name=\"branchId\" id=\"branchId\">\n                      <label for=\"branchId\">Branch ID</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Surname\" formControlName=\"surname\" type=\"text\" class=\"form-control\"\n                        name=\"surname\" id=\"surname\">\n                      <label for=\"surname\">Staff Surname</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Othernames\" formControlName=\"othernames\" type=\"text\"\n                        class=\"form-control\" name=\"othernames\" id=\"othernames\">\n                      <label for=\"othernames\">Staff Othernames</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select formControlName=\"gender\" type=\"text\" class=\"form-control\" name=\"gender\" id=\"gender\">\n                        <option value=\"\" disabled selected>Choose Staff Gender</option>\n                        <option value=\"Male\">Male</option>\n                        <option value=\"Female\">Female</option>\n                      </select>\n                      <label for=\"gender\">Staff Gender</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Email\" formControlName=\"email\" type=\"text\" class=\"form-control\"\n                        name=\"email\" id=\"email\">\n                      <label for=\"email\">Staff Email</label>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Phone\" formControlName=\"phoneNo\" type=\"text\" class=\"form-control\"\n                        name=\"phoneNo\" id=\"phoneNo\">\n                      <label for=\"phoneNo\">Staff Phone</label>\n                    </div>\n                  </div>\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Address\" [(ngModel)]=\"staff.address\" type=\"text\" class=\"form-control\"\n                        name=\"address\" id=\"address\">\n                      <label for=\"address\">Staff Address</label>\n                    </div>\n                  </div> -->\n\n\n                  <div class=\"row\">\n                   <div class=\"input-field\">\n\n                    <div class=\"row\">\n                        <label for=\"date_of_birth\">Staff Date of Birth</label>\n                    </div>\n                      <!-- <mat-form-field> -->\n                        <div class=\"col\">\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" formControlName=\"date_of_birth\"\n                            name=\"date_of_birth\" id=\"date_of_birth\">\n                        </div>\n                        <div class=\"col\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker startView=\"year\" [startAt]=\"DOBstartDate\"></mat-datepicker>\n                        </div>\n\n\n                        <!-- </mat-form-field> -->\n                      <!--  <input placeholder=\"Staff Date of Birth\" [(ngModel)]=\"staff.date_of_birth\" type=\"date\" class=\"form-control\"\n                        name=\"date_of_birth\" id=\"date_of_birth\">\n                      <label for=\"date_of_birth\">Staff Date of Birth</label>-->\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                      <div class=\"input-field\">\n\n                       <div class=\"row\">\n                           <label for=\"date_joined\">Staff Date Joined</label>\n                       </div>\n\n                           <div class=\"col\">\n                               <input matInput [matDatepicker]=\"DJpicker\" placeholder=\"Date Joined\" formControlName=\"date_joined\"\n                               name=\"date_joined\" id=\"date_joined\">\n                           </div>\n                           <div class=\"col\">\n                               <mat-datepicker-toggle matSuffix [for]=\"DJpicker\"></mat-datepicker-toggle>\n                               <mat-datepicker #DJpicker startView=\"year\" [startAt]=\"DateJoinedStartDate\"></mat-datepicker>\n                           </div>\n                       </div>\n                     </div>\n\n\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Date Joined\" formControlName=\"date_joined\" type=\"date\" class=\"form-control\"\n                        name=\"date_joined\" id=\"date_joined\">\n                      <label for=\"date_joined\">Staff Date Joined</label>\n                    </div>\n                  </div> -->\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Department\" formControlName=\"department\" type=\"text\" class=\"form-control\"\n                        name=\"department\" id=\"department\">\n                      <label for=\"department\">Staff Department</label>\n                    </div>\n                  </div> -->\n\n                 <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Department ID\" formControlName=\"departmentId\" type=\"text\" class=\"form-control\"\n                        name=\"departmentId\" id=\"departmentId\">\n                      <label for=\"departmentId\">Department ID</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Role\" formControlName=\"role\" type=\"text\" class=\"form-control\"\n                        name=\"role\" id=\"role\">\n                      <label for=\"role\">Staff Role</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Line Manager Email\"formControlName=\"line_manager_id\" type=\"text\" class=\"form-control\"\n                        name=\"line_manager_id\" id=\"line_manager_id\">\n                      <label for=\"line_manager_id\">Staff Line Manager Email</label>\n                    </div>\n                  </div>\n\n                  <!-- <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Date Joined\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field> -->\n\n\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" [disabled]=\"!form.valid\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Staff\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Upload Staff Sheet Instead (CSV or Excel)</h4>\n                <form class=\"col s12\" [formGroup] = \"form\" novalidate>\n\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Company ID\" formControlName=\"companyId\" type=\"text\" class=\"form-control\"\n                        name=\"companyId\" id=\"companyId\">\n                      <label for=\"companyId\">Company ID</label>\n                    </div>\n                  </div>\n\n         <div>\n          <button class=\"btn cyan waves-effect waves-light right\" (click)=\"selectFile.click()\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Select File and Upload\n                        </button>\n          </div>\n\n        <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <input style=\"display: none\" type=\"file\" (change)=\"uploadFile($event)\" #selectFile>\n                      </div>\n                    </div>\n                  </div>\n\n              <div class=\"image-preview\" >\n            <img [src]=\"imagePreview\" >\n            </div>\n\n          </form >\n\n          </div>\n           </div>\n           </div>\n            </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Staff</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Staff ID</th>\n                        <th>Surname</th>\n                        <th>Othernames</th>\n                        <th>Email</th>\n                        <th>Phone No</th>\n                        <th>Gender</th>\n                        <th>Role</th>\n                        <th>Department</th>\n                        <th>Date of Birth</th>\n                        <th>Date Joined</th>\n                        <th>Line Manager</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let staff of allStaff['data']\">\n                          <td>{{staff.staffId}}</td>\n                          <td>{{staff.surname}}</td>\n                          <td>{{staff.othernames}}</td>\n                          <td>{{staff.email}}</td>\n                          <td>{{staff.phoneNo}}</td>\n                          <td>{{staff.gender}}</td>\n                          <td>{{staff.role}}</td>\n                          <td>{{staff.department}}</td>\n                          <td>{{staff.date_of_birth}}</td>\n                          <td>{{staff.date_joined}}</td>\n                          <td>{{staff.line_manager_id}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Staff ID</th>\n                          <th>Surname</th>\n                          <th>Othernames</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                          <th>Gender</th>\n                          <th>Role</th>\n                          <th>Department</th>\n                          <th>Date of Birth</th>\n                          <th>Date Joined</th>\n                          <th>Line Manager</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-register/company-register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-register/company-register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<br>\n<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"container\">\n\n<div id=\"login-page\" class=\"row\">\n        <div class=\"col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8\">\n\n              <div class=\"card-content\">\n              <img src=\"../../assets/images/logo/office-people-logo.png\" width=\"100px\" height=\"100px\" style=\"margin-left:40%; margin-top: 10px\">\n              <h4 style=\"margin-left: 80px\">Glad to have you here!</h4>\n              <h6 class=\"font-weight-light\" style= \"text-align: center\">Please Fill the Form to Activate Your Company</h6>\n              <form class=\"pt-3\" #registerForm=\"ngForm\" (ngSubmit)=\"registerCompany(registerForm)\" novalidate>\n\n                <div class=\"form-group\">\n                  <label>Company ID:</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-account-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.companyId\" type=\"text\" class=\"form-control\" name=\"companyId\" id=\"companyId\" placeholder=\"Company ID\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-email-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Staff Email\">\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Password</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-lock-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.passcode\" type=\"Password\" class=\"form-control\" name=\"passcode\" id=\"passcode\" placeholder=\"Password\">\n                  </div>\n                </div>\n\n                <div class=\"row\">\n              <div class=\"col s12 m12 l12 ml-2 mt-1\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" />\n                    <span>I have read and accept the Office People Terms/Conditions</span>\n                  </label>\n                </p>\n              </div>\n            </div>\n\n                <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Register\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"text-center mt-4 font-weight-light\">\n                  Already have an account?  <a href=\"/login\" >Login</a> Now.\n                </div>\n                <br>\n\n              </form>\n            </div>\n          </div>\n        </div>\n\n          </div>\n         </div>\n        </div>\n\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-cmr-sidebar></app-cmr-sidebar>\n\n<!-- <div class=\"container-fluid page-body-wrapper\">\n\n\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <h4>Company</h4>\n\n      <div class=\"row\">\n        <div class=\"col-md-8 grid-margin stretch-card\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Profile a Company</h5>\n              <div class=\"table-responsive\">\n                <alert></alert>\n\n                <form class=\"forms-sample\" #coy=\"ngForm\" (ngSubmit)=\"createCompany(coy)\" novalidate>\n                  <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input [(ngModel)]=\"company.company_name\" type=\"text\" class=\"form-control\" name=\"company_name\" id=\"company_name\" placeholder=\"Name\" >\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input [(ngModel)]=\"company.email\" type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"phoneNo\">Phone No</label>\n                    <input [(ngModel)]=\"company.phoneNo\" type=\"text\" class=\"form-control\" name=\"phoneNo\" id=\"phoneNo\" placeholder=\"Phone No\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"address\">Address</label>\n                    <input [(ngModel)]=\"company.address\" type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Address\">\n                  </div>\n\n                  <button type=\"submit\" class=\"btn btn-primary mr-2\" onclick=\"showSwal('success-message')\">Submit</button>\n                  <button class=\"btn btn-light\">Cancel</button>\n                </form>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-12 grid-margin stretch-card\">\n          <div class=\"card\">\n            <div class=\"card-body d-flex flex-column justify-content-between\">\n              <h4 class=\"card-title\">All Companies</h4>\n              <div class=\"d-flex justify-content-between\">\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <thead>\n                      <tr>\n                        <th>Company ID</th>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Phone No</th>\n                        <th>Address</th>\n                        <th>Status</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let coy of companies\">\n                        <td>{{coy.companyId}}</td>\n                        <td>{{coy.company_name}}</td>\n                        <td>{{coy.email}}</td>\n                        <td>{{coy.phoneNo}}</td>\n                        <td>{{coy.address}}</td>\n                        <td><label class=\"badge badge-danger\">Pending</label></td>\n                      </tr>\n\n                    </tbody>\n                  </table>\n                </div>\n\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Company</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Company\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Company</h4>\n                <form class=\"col s12\" #coy=\"ngForm\" (ngSubmit)=\"createCompany(coy)\" novalidate>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"company.company_name\" type=\"text\" class=\"form-control\" name=\"company_name\" id=\"company_name\" placeholder=\"Company Name\" >\n                      <label for=\"company_name\">Company Name</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"company.email\" type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Company Email\">\n                      <label for=\"email\">Company Email</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"company.password\" type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Company password\">\n                      <label for=\"password\">Company Password</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"company.phoneNo\" type=\"text\" class=\"form-control\" name=\"phoneNo\" id=\"phoneNo\" placeholder=\"Phone No\">\n                      <label for=\"phoneNo\">Company Phone</label>\n                    </div>\n                  </div>\n\n\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"company.country\" type=\"text\" class=\"form-control\" name=\"country\" id=\"country\" placeholder=\"Country\">\n                      <label for=\"country\">Country</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"company.address\" type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Address\">\n                      <label for=\"address\">Company Address</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Company\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Company</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Company ID</th>\n                          <th>Name</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                          <th>Country</th>\n                          <th>Address</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let coy of companies\">\n                          <td>{{coy.companyId}}</td>\n                          <td>{{coy.company_name}}</td>\n                          <td>{{coy.email}}</td>\n                          <td>{{coy.phoneNo}}</td>\n                          <td>{{coy.country}}</td>\n                          <td>{{coy.address}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Company ID</th>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Phone No</th>\n                        <th>Country</th>\n                        <th>Address</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Department</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Department\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n          <ngx-ui-loader></ngx-ui-loader>\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Department</h4>\n                <form class=\"col s12\" [formGroup] = \"form\" (ngSubmit)=\"createDepartment()\" novalidate>\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select id=\"companyId\" formControlName=\"department.companyId\" name=\"companyId\">\n                        <option value=\"\" disabled selected>Choose your Company</option>\n                        <option *ngFor=\"let coy of companies['data']\" [ngValue]=\"coy.companyId\">{{coy.company_name}}\n                        </option>\n                      </select>\n                      <label for=\"companyId\">Company</label>\n                    </div>\n                  </div> -->\n\n                  <!-- <select >\n                  <option *ngFor=\"let coy of companies['data']\" > {{coy.company_name}}</option>\n                  </select>  -->\n\n                  <!-- {{companies.data|json}} -->\n                  <!--\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select id=\"branchId\" formControlName=\"staff.branchId\" name=\"branchId\">\n                        <option value=\"\" disabled selected>Choose your Branch</option>\n                        <option *ngFor=\"let branch of branches['data']\" [ngValue]=\"branch.branchId\">{{branch.branchName}}\n                        </option>\n                      </select>\n                      <label for=\"branchId\">Branch</label>\n                    </div>\n                  </div> -->\n\n\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Department Name\" formControlName=\"name\" type=\"text\"\n                        class=\"form-control\" name=\"name\" id=\"name\">\n                      <label for=\"name\">Department Name</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Department Email\" formControlName=\"email\" type=\"text\"\n                        class=\"form-control\" name=\"email\" id=\"email\">\n                      <label for=\"email\">Department Email</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Department Description\" formControlName=\"description\" type=\"text\"\n                        class=\"form-control\" name=\"description\" id=\"description\">\n                      <label for=\"description\">Department Description</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\" [disabled]=\"!form.valid\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Department\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Departments</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Department ID</th>\n                          <th>Name</th>\n                          <th>Email</th>\n                          <th>Description</th>\n                          <th>Company ID</th>\n\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let dept of departments['data']\">\n                          <td>{{dept.departmentId}}</td>\n                          <td>{{dept.name}}</td>\n                          <td>{{dept.email}}</td>\n                          <td>{{dept.description}}</td>\n                          <td>{{dept.companyId}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Department ID</th>\n                          <th>Name</th>\n                          <th>Email</th>\n                          <th>Description</th>\n                          <th>Company ID</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"col s12\">\n      <div class=\"container\">\n          <ngx-ui-loader></ngx-ui-loader>\n\n        <div class=\"row\">\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalBranches}}</h5>\n                <!-- <p class=\"no-margin\">New</p>\n                <p class=\"mb-0 pt-8\">1,12,900</p> -->\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Branches</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalDepartments}}</h5>\n                <!-- <p class=\"no-margin\">New</p>\n                <p class=\"mb-0 pt-8\">1,12,900</p> -->\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Departments</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card padding-4 animate fadeLeft\">\n              <div class=\"col s5 m5\">\n                <h5 class=\"mb-0\">{{totalStaff}}</h5>\n                <!-- <p class=\"no-margin\">New</p>\n                <p class=\"mb-0 pt-8\">1,12,900</p> -->\n              </div>\n              <div class=\"col s7 m7 right-align\">\n                <i\n                  class=\"material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text\">perm_identity</i>\n                <p class=\"mb-0\">Total Staff</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <app-top></app-top>\n<app-sidebar></app-sidebar>\n\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Leave</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Leave\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n <div class=\"col s12\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Leave</h4>\n                <form class=\"col s12\" #leaveForm=\"ngForm\" (ngSubmit)=\"createLeave()\" novalidate>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input #leaveType [(ngModel)]=\"leave.leaveType\" (keyup.enter)=\"leaveType\" type=\"text\" class=\"form-control\" name=\"leaveType\" id=\"leaveType\" placeholder=\"Leave Type\" >\n                      <label for=\"company_name\">Leave Type</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input #days [(ngModel)]=\"leave.days\" (keyup.enter)=\"days\" type=\"number\" class=\"form-control\" name=\"days\" id=\"days\" placeholder=\"Leave Days\">\n                      <label for=\"days\">Leave days</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"data\">\n                <table class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Leave Type</th>\n                          <th>Days</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let leaves of display\">\n                          <td>{{leaves.leaveType}}</td>\n                          <td>{{leaves.days}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Leave Type</th>\n                        <th>Days</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <span class=\"input-group-text\" (click)=\"addLeave(leaveForm.value)\">\n                  <i class=\"material-icons\">add</i>\n                  </span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Leave\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Leave</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Leave Type</th>\n                          <th>Days</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let lv of leaves\">\n                          <td>{{lv.leaveType}}</td>\n                          <td>{{lv.days}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Leave Type</th>\n                        <th>Days</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"container\">\n\n      <div id=\"login-page\" class=\"row\">\n        <div class=\"col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8\">\n\n          <form class=\"login-form\" [formGroup] = \"form\" (ngSubmit)=\"login()\" novalidate>\n              <img src=\"../../assets/images/logo/office-people-logo.png\" width=\"100px\" height=\"100px\" style=\"margin-left:45%\">\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <h5 class=\"ml-4\">Sign in</h5>\n              </div>\n            </div>\n            <div class=\"row margin\">\n              <div class=\"input-field col s12\">\n                <i class=\"material-icons prefix pt-2\">person_outline</i>\n                <input type=\"text\" id=\"email\" name=\"username\" formControlName=\"email\">\n                <label for=\"email\" class=\"center-align\">Email</label>\n              </div>\n            </div>\n            <div class=\"row margin\">\n              <div class=\"input-field col s12\">\n                <i class=\"material-icons prefix pt-2\">lock_outline</i>\n                <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\">\n                <label for=\"password\">Password</label>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col s12 m12 l12 ml-2 mt-1\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" />\n                    <span>Remember Me</span>\n                  </label>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button class=\"btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12\"\n                  type=\"submit\" name=\"action\" [disabled]=\"!form.valid\">\n                  Login\n                </button>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s6 m6 l6\">\n                <p class=\"margin medium-small\"><a href=\"https://officepeopleapp.com/#requestdemo\" target=\"new\">Register\n                    Now!</a></p>\n              </div>\n              <div class=\"input-field col s6 m6 l6\">\n                <p class=\"margin right-align medium-small\"><a href=\"#\">Forgot password ?</a></p>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-scroller\">\n    <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n      <div class=\"content-wrapper d-flex align-items-center text-center error-page bg-primary\">\n        <div class=\"row flex-grow\">\n          <div class=\"col-lg-7 mx-auto text-white\">\n            <div class=\"row align-items-center d-flex flex-row\">\n              <div class=\"col-lg-6 text-lg-right pr-lg-4\">\n                <h1 class=\"display-1 mb-0\">404</h1>\n              </div>\n              <div class=\"col-lg-6 error-page-divider text-lg-left pl-lg-4\">\n                <h2>SORRY!</h2>\n                <h3 class=\"font-weight-light\">The page you’re looking for was not found.</h3>\n              </div>\n            </div>\n            <div class=\"row mt-5\">\n              <div class=\"col-12 text-center mt-xl-2\">\n                <a class=\"text-white font-weight-medium\" href=\"/\">Back to home</a>\n              </div>\n            </div>\n            <div class=\"row mt-5\">\n              <div class=\"col-12 mt-xl-2\">\n                <p class=\"text-white font-weight-medium text-center\">Copyright &copy; 2019  All rights reserved.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content-wrapper ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<br>\n<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"container\">\n\n<div id=\"login-page\" class=\"row\">\n        <div class=\"col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8\">\n\n              <div class=\"card-content\">\n              <img src=\"../../assets/images/logo/office-people-logo.png\" width=\"100px\" height=\"100px\" style=\"margin-left:40%; margin-top: 10px\">\n              <h4 style=\"margin-left: 160px\">New Staff?</h4>\n              <h6 class=\"font-weight-light\" style= \"text-align: center\">Please Fill the Form to Activate Your account</h6>\n              <form class=\"pt-3\" #registerForm=\"ngForm\" (ngSubmit)=\"registerStaff(registerForm)\" novalidate>\n\n                <div class=\"form-group\">\n                  <label>Company ID:</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-account-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.companyId\" type=\"text\" class=\"form-control\" name=\"companyId\" id=\"companyId\" placeholder=\"Company ID\">\n                  </div>\n                </div>\n\n              <div class=\"form-group\">\n                  <label>Branch ID:</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-lock-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.branchId\" type=\"text\" class=\"form-control\" name=\"branchId\" id=\"branchId\" placeholder=\"Branch ID\">\n                  </div>\n                </div>\n\n              <div class=\"form-group\">\n                  <label>Staff ID:</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-lock-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.staffId\" type=\"text\" class=\"form-control\" name=\"staffId\" id=\"staffId\" placeholder=\"Staff ID\">\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-email-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Staff Email\">\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Password</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend bg-transparent\">\n                      <span class=\"input-group-text bg-transparent border-right-0\">\n                        <i class=\"mdi mdi-lock-outline text-primary\"></i>\n                      </span>\n                    </div>\n                    <input [(ngModel)]=\"register.passcode\" type=\"Password\" class=\"form-control\" name=\"passcode\" id=\"passcode\" placeholder=\"Password\">\n                  </div>\n                </div>\n\n                <div class=\"row\">\n              <div class=\"col s12 m12 l12 ml-2 mt-1\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" />\n                    <span>I have read and accept the Office People Terms/Conditions</span>\n                  </label>\n                </p>\n              </div>\n            </div>\n\n                <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Register\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"text-center mt-4 font-weight-light\">\n                  Already have an account? Download The <a href=\"/register\" >Office People App</a> Now on Playstore to Login\n                </div>\n                <br>\n\n              </form>\n            </div>\n          </div>\n        </div>\n\n          </div>\n         </div>\n        </div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cmr-sidebar/cmr-sidebar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cmr-sidebar/cmr-sidebar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- BEGIN: SideNav-->\n<aside class=\"sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square\">\n  <div class=\"brand-sidebar\">\n    <h1 class=\"logo-wrapper\"><a class=\"brand-logo darken-1\" href=\"/cmrDashboard\">\n        <img src=\"assets/images/logo/office-people-logo.png\" alt=\"\" />\n        <span class=\"logo-text hide-on-med-and-down\">CMR dashboard</span></a>\n      <a class=\"navbar-toggler\" href=\"#\">\n        <i class=\"material-icons\">radio_button_checked</i>\n      </a>\n    </h1>\n  </div>\n  <ul class=\"sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow\" id=\"slide-out\"\n    data-menu=\"menu-navigation\" data-collapsible=\"menu-accordion\">\n    <li class=\"active bold\">\n      <a class=\"collapsible-header waves-effect waves-cyan \" href=\"/cmrDashboard\">\n        <i class=\"material-icons\">dashboard</i>\n        <span class=\"menu-title\" data-i18n=\"\">Dashboard</span>\n      </a>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">CMR Admin</a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n\n     <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i class=\"material-icons\">group</i><span\n          class=\"menu-title\" data-i18n=\"\">Company</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/company\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i class=\"material-icons\">group</i><span\n          class=\"menu-title\" data-i18n=\"\">Staff</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/staff\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">announcement</i><span class=\"menu-title\" data-i18n=\"\">Announcement</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/announcement\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">linear_scale</i><span class=\"menu-title\" data-i18n=\"\">Anniversary</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/anniversary\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">perm_contact_calendar</i><span class=\"menu-title\" data-i18n=\"\">Birthday</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/birthday\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <!-- <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">domain</i><span class=\"menu-title\" data-i18n=\"\">Company</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/company\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li> -->\n\n\n\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Settings</a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">device_hub</i><span class=\"menu-title\" data-i18n=\"\">Branch</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/branch\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">group_work</i><span class=\"menu-title\" data-i18n=\"\">Departments</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/department\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <!-- <li class=\"navigation-header\"><a class=\"navigation-header-text\">Human Resources </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \" ><i\n          class=\"material-icons\">content_paste</i><span class=\"menu-title\" data-i18n=\"\">Staff</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/staff\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \" ><i\n          class=\"material-icons\">crop_original</i><span class=\"menu-title\" data-i18n=\"\">Customer</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/customer\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Financials </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">content_paste</i><span class=\"menu-title\" data-i18n=\"\">Bank/Cash</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/bank\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Bank</span></a>\n          </li>\n          <li><a class=\"collapsible-body\" href=\"/cash\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Cash</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Settings </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">cast</i><span class=\"menu-title\" data-i18n=\"\">Company</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/company\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">invert_colors</i><span class=\"menu-title\" data-i18n=\"\">Branch</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/branch\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Reports </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \" ><i\n          class=\"material-icons\">pie_chart_outlined</i><span class=\"menu-title\" data-i18n=\"\">Reports</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/reports\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Misc </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"waves-effect waves-cyan \" href=\"/\"><i\n          class=\"material-icons\">import_contacts</i><span class=\"menu-title\" data-i18n=\"\">Documentation</span></a>\n    </li>\n    <li class=\"bold\"><a class=\"waves-effect waves-cyan \" href=\"/\"><i\n          class=\"material-icons\">help_outline</i><span class=\"menu-title\" data-i18n=\"\">Support</span></a>\n    </li> -->\n  </ul>\n  <div class=\"navigation-background\"></div><a\n    class=\"sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only\"\n    href=\"#\" data-target=\"slide-out\"><i class=\"material-icons\">menu</i></a>\n</aside>\n<!-- END: SideNav-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- BEGIN: Footer-->\n<footer\n  class=\"page-footer footer footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow\">\n  <div class=\"footer-copyright\">\n    <div class=\"container\"><span>&copy; 2019 <a href=\"#\" target=\"_blank\">Office People</a> All rights\n        reserved.</span><span class=\"right hide-on-small-only\">Design and Developed by <a\n          href=\"http://cmr.com.ng/\">Collins Magnus Resources</a></span></div>\n  </div>\n</footer>\n<!-- END: Footer-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- BEGIN: SideNav-->\n<aside class=\"sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square\">\n  <div class=\"brand-sidebar\">\n    <h1 class=\"logo-wrapper\"><a class=\"brand-logo darken-1\" href=\"/\">\n        <img src=\"assets/images/logo/office-people-logo.png\" alt=\"\" />\n        <span class=\"logo-text hide-on-med-and-down\">Office People</span></a>\n      <a class=\"navbar-toggler\" href=\"#\">\n        <i class=\"material-icons\">radio_button_checked</i>\n      </a>\n    </h1>\n  </div>\n  <ul class=\"sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow\" id=\"slide-out\"\n    data-menu=\"menu-navigation\" data-collapsible=\"menu-accordion\">\n    <li class=\"active bold\">\n      <a class=\"collapsible-header waves-effect waves-cyan \" href=\"/\">\n        <i class=\"material-icons\">dashboard</i>\n        <span class=\"menu-title\" data-i18n=\"\">Dashboard</span>\n      </a>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Human Resources</a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i class=\"material-icons\">group</i><span\n          class=\"menu-title\" data-i18n=\"\">Staff</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/staff\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">announcement</i><span class=\"menu-title\" data-i18n=\"\">Announcement</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/announcement\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">linear_scale</i><span class=\"menu-title\" data-i18n=\"\">Anniversary</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/anniversary\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">perm_contact_calendar</i><span class=\"menu-title\" data-i18n=\"\">Birthday</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/birthday\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">perm_contact_calendar</i><span class=\"menu-title\" data-i18n=\"\">Leave</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/leave\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <!-- <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">domain</i><span class=\"menu-title\" data-i18n=\"\">Company</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/company\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li> -->\n\n\n\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Settings</a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">device_hub</i><span class=\"menu-title\" data-i18n=\"\">Branch</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/branch\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">group_work</i><span class=\"menu-title\" data-i18n=\"\">Departments</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/department\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <!-- <li class=\"navigation-header\"><a class=\"navigation-header-text\">Human Resources </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \" ><i\n          class=\"material-icons\">content_paste</i><span class=\"menu-title\" data-i18n=\"\">Staff</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/staff\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \" ><i\n          class=\"material-icons\">crop_original</i><span class=\"menu-title\" data-i18n=\"\">Customer</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/customer\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Financials </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">content_paste</i><span class=\"menu-title\" data-i18n=\"\">Bank/Cash</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/bank\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Bank</span></a>\n          </li>\n          <li><a class=\"collapsible-body\" href=\"/cash\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Cash</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Settings </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">cast</i><span class=\"menu-title\" data-i18n=\"\">Company</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/company\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \"><i\n          class=\"material-icons\">invert_colors</i><span class=\"menu-title\" data-i18n=\"\">Branch</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/branch\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Reports </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan \" ><i\n          class=\"material-icons\">pie_chart_outlined</i><span class=\"menu-title\" data-i18n=\"\">Reports</span></a>\n      <div class=\"collapsible-body\">\n        <ul class=\"collapsible collapsible-sub\" data-collapsible=\"accordion\">\n          <li><a class=\"collapsible-body\" href=\"/reports\" data-i18n=\"\"><i\n                class=\"material-icons\">radio_button_unchecked</i><span>Manage</span></a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"navigation-header\"><a class=\"navigation-header-text\">Misc </a><i\n        class=\"navigation-header-icon material-icons\">more_horiz</i>\n    </li>\n    <li class=\"bold\"><a class=\"waves-effect waves-cyan \" href=\"/\"><i\n          class=\"material-icons\">import_contacts</i><span class=\"menu-title\" data-i18n=\"\">Documentation</span></a>\n    </li>\n    <li class=\"bold\"><a class=\"waves-effect waves-cyan \" href=\"/\"><i\n          class=\"material-icons\">help_outline</i><span class=\"menu-title\" data-i18n=\"\">Support</span></a>\n    </li> -->\n  </ul>\n  <div class=\"navigation-background\"></div><a\n    class=\"sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only\"\n    href=\"#\" data-target=\"slide-out\"><i class=\"material-icons\">menu</i></a>\n</aside>\n<!-- END: SideNav-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/top/top.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/top/top.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- BEGIN: Header-->\n<header class=\"page-topbar\" id=\"header\">\n  <div class=\"navbar navbar-fixed\">\n    <nav\n      class=\"navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow\">\n      <div class=\"nav-wrapper\">\n        <div class=\"header-search-wrapper hide-on-med-and-down\"><i class=\"material-icons\">search</i>\n          <input class=\"header-search-input z-depth-2\" type=\"text\" name=\"Search\" placeholder=\"Explore Office People\">\n        </div>\n        <ul class=\"navbar-list right\">\n          <li class=\"hide-on-med-and-down\"><a class=\"waves-effect waves-block waves-light translation-button\"\n              href=\"javascript:void(0);\" data-target=\"translation-dropdown\"><span\n                class=\"flag-icon flag-icon-gb\"></span></a></li>\n          <li class=\"hide-on-med-and-down\"><a class=\"waves-effect waves-block waves-light toggle-fullscreen\"\n              href=\"javascript:void(0);\"><i class=\"material-icons\">settings_overscan</i></a></li>\n          <li class=\"hide-on-large-only\"><a class=\"waves-effect waves-block waves-light search-button\"\n              href=\"javascript:void(0);\"><i class=\"material-icons\">search</i></a></li>\n          <li><a class=\"waves-effect waves-block waves-light profile-button\" href=\"javascript:void(0);\"\n              data-target=\"profile-dropdown\"><span class=\"avatar-status avatar-online\"><img\n                  src=\"assets/images/logo/office-people-logo.png\" alt=\"avatar\"><i></i></span></a></li>\n        </ul>\n     \n        <ul class=\"dropdown-content\" id=\"translation-dropdown\">\n          <li><a class=\"grey-text text-darken-1\" href=\"#!\"><i class=\"flag-icon flag-icon-gb\"></i> English</a></li>\n          <li><a class=\"grey-text text-darken-1\" href=\"#!\"><i class=\"flag-icon flag-icon-fr\"></i> French</a></li>\n          <!-- <li><a class=\"grey-text text-darken-1\" href=\"#!\"><i class=\"flag-icon flag-icon-cn\"></i> Chinese</a></li>\n          <li><a class=\"grey-text text-darken-1\" href=\"#!\"><i class=\"flag-icon flag-icon-de\"></i> German</a></li> -->\n        </ul>\n\n        \n        <ul class=\"dropdown-content\" id=\"profile-dropdown\">\n          <li><a class=\"grey-text text-darken-1\" href=\"/profile\"><i class=\"material-icons\">person_outline</i>\n              Profile</a></li>\n          <li><a class=\"grey-text text-darken-1\" href=\"\"><i class=\"material-icons\">help_outline</i>\n              Help</a></li>\n          <li class=\"divider\"></li>\n          <li><a class=\"grey-text text-darken-1\" href=\"\"><i class=\"material-icons\">lock_outline</i>\n              Lock</a></li>\n          <li (click)=\"logout()\"><a class=\"grey-text text-darken-1\" href=\"\"><i class=\"material-icons\">keyboard_tab</i>\n              Logout</a></li>\n        </ul>\n      </div>\n      <nav class=\"display-none search-sm\">\n        <div class=\"nav-wrapper\">\n          <form>\n            <div class=\"input-field\">\n              <input class=\"search-box-sm\" type=\"search\" required=\"\">\n              <label class=\"label-icon\" for=\"search\"><i class=\"material-icons search-sm-icon\">search</i></label><i\n                class=\"material-icons search-sm-close\">close</i>\n            </div>\n          </form>\n        </div>\n      </nav>\n    </nav>\n  </div>\n</header>\n<!-- END: Header-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top></app-top>\n<app-sidebar></app-sidebar>\n\n<!-- BEGIN: Page Main-->\n<div id=\"main\">\n  <div class=\"row\">\n    <div class=\"content-wrapper-before gradient-45deg-indigo-purple\"></div>\n    <div class=\"breadcrumbs-dark pb-0 pt-4\" id=\"breadcrumbs-wrapper\">\n      <!-- Search for small screen-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s10 m6 l6\">\n            <h5 class=\"breadcrumbs-title mt-0 mb-0\">Staff</h5>\n            <ol class=\"breadcrumbs mb-0\">\n              <li class=\"breadcrumb-item\"><a href=\"/\">Office People</a>\n              </li>\n              <li class=\"breadcrumb-item\"><a href=\"/\">Human Resources</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Staff\n              </li>\n            </ol>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12\">\n      <div class=\"container\">\n        <ngx-ui-loader></ngx-ui-loader>\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l6\">\n            <div id=\"placeholder\" class=\"card card card-default scrollspy\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Create New Staff</h4>\n                <form class=\"col s12\" [formGroup] = \"form\" (ngSubmit)=\"createStaff()\" novalidate>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select id=\"branchId\" formControlName=\"branchId\" name=\"branchId\">\n                        <option value=\"\" disabled selected>Choose your Branch</option>\n                        <option *ngFor=\"let branch of (branches['data'])\" [ngValue]=\"branch.branchId\">{{branch.branchName}} </option>\n                      </select>\n                      <label for=\"branchId\">Branch</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Surname\" formControlName=\"surname\" type=\"text\" class=\"form-control\"\n                        name=\"surname\" id=\"surname\">\n                      <label for=\"surname\">Staff Surname</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Othernames\" formControlName=\"othernames\" type=\"text\"\n                        class=\"form-control\" name=\"othernames\" id=\"othernames\">\n                      <label for=\"othernames\">Staff Othernames</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <select formControlName=\"gender\" type=\"text\" class=\"form-control\" name=\"gender\" id=\"gender\">\n                        <option value=\"\" disabled selected>Choose Staff Gender</option>\n                        <option value=\"Male\">Male</option>\n                        <option value=\"Female\">Female</option>\n                      </select>\n                      <label for=\"gender\">Staff Gender</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Email\" formControlName=\"email\" type=\"text\" class=\"form-control\"\n                        name=\"email\" id=\"email\">\n                      <label for=\"email\">Staff Email</label>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Phone\" formControlName=\"phoneNo\" type=\"text\" class=\"form-control\"\n                        name=\"phoneNo\" id=\"phoneNo\">\n                      <label for=\"phoneNo\">Staff Phone</label>\n                    </div>\n                  </div>\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Address\" formControlName=\"address\" type=\"text\" class=\"form-control\"\n                        name=\"address\" id=\"address\">\n                      <label for=\"address\">Staff Address</label>\n                    </div>\n                  </div> -->\n\n\n                  <div class=\"row\">\n                   <div class=\"input-field\">\n\n                    <div class=\"row\">\n                        <label for=\"date_of_birth\">Staff Date of Birth</label>\n                    </div>\n                      <!-- <mat-form-field> -->\n                        <div class=\"col\">\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" formControlName=\"date_of_birth\"\n                            name=\"date_of_birth\" id=\"date_of_birth\">\n                        </div>\n                        <div class=\"col\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker startView=\"year\" [startAt]=\"DOBstartDate\"></mat-datepicker>\n                        </div>\n\n\n                        <!-- </mat-form-field> -->\n                      <!--  <input placeholder=\"Staff Date of Birth\" formControlName=\"staff.date_of_birth\" type=\"date\" class=\"form-control\"\n                        name=\"date_of_birth\" id=\"date_of_birth\">\n                      <label for=\"date_of_birth\">Staff Date of Birth</label>-->\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                      <div class=\"input-field\">\n\n                       <div class=\"row\">\n                           <label for=\"date_joined\">Staff Date Joined</label>\n                       </div>\n\n                           <div class=\"col\">\n                               <input matInput [matDatepicker]=\"DJpicker\" placeholder=\"Date of Birth\" formControlName=\"date_joined\"\n                               name=\"date_joined\" id=\"date_joined\">\n                           </div>\n                           <div class=\"col\">\n                               <mat-datepicker-toggle matSuffix [for]=\"DJpicker\"></mat-datepicker-toggle>\n                               <mat-datepicker #DJpicker startView=\"year\" [startAt]=\"DateJoinedStartDate\"></mat-datepicker>\n                           </div>\n                       </div>\n                     </div>\n\n\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Date Joined\" formControlName=\"date_joined\" type=\"date\" class=\"form-control\"\n                        name=\"date_joined\" id=\"date_joined\">\n                      <label for=\"date_joined\">Staff Date Joined</label>\n                    </div>\n                  </div> -->\n\n\n                  <!-- <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Department\" formControlName=\"department\" type=\"text\" class=\"form-control\"\n                        name=\"department\" id=\"department\">\n                      <label for=\"department\">Staff Department</label>\n                    </div>\n                  </div> -->\n\n                  <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <select id=\"departmentId\" formControlName=\"departmentId\" name=\"departmentId\">\n                          <option value=\"\" disabled selected>Choose Department</option>\n                          <option *ngFor=\"let dept of departments['data']\" [ngValue]=\"dept.departmentId\">{{dept.name}}\n                          </option>\n                        </select>\n                        <label for=\"departmentId\">Staff Department</label>\n                      </div>\n                    </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Role\" formControlName=\"role\" type=\"text\" class=\"form-control\"\n                        name=\"role\" id=\"role\">\n                      <label for=\"role\">Staff Role</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <input placeholder=\"Staff Line Manager Email\" formControlName=\"line_manager_id\" type=\"text\" class=\"form-control\"\n                        name=\"line_manager_id\" id=\"line_manager_id\">\n                      <label for=\"line_manager_id\">Staff Line Manager Email</label>\n                    </div>\n                  </div>\n\n                  <!-- <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Date Joined\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field> -->\n\n\n\n                  <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Add Staff\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Upload Staff Sheet Instead (CSV or Excel)</h4>\n                <form class=\"col s12\" novalidate>\n\n         <div>\n          <button class=\"btn cyan waves-effect waves-light right\" (click)=\"selectFile.click()\">\n                          <i class=\"material-icons left\">add_circle_outline</i>\n                          Select File and Upload\n                        </button>\n          </div>\n\n        <div class=\"row\">\n                    <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                        <input style=\"display: none\" type=\"file\" (change)=\"uploadFile($event)\" #selectFile>\n                      </div>\n                    </div>\n                  </div>\n\n              <div class=\"image-preview\" >\n            <img [src]=\"imagePreview\" >\n            </div>\n\n          </form >\n\n          </div>\n           </div>\n           </div>\n            </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">Your Staff</h4>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <table id=\"page-length-option\" class=\"display\">\n                      <thead>\n                        <tr>\n                          <th>Staff ID</th>\n                        <th>Surname</th>\n                        <th>Othernames</th>\n                        <th>Email</th>\n                        <th>Phone No</th>\n                        <th>Gender</th>\n                        <th>Role</th>\n                        <th>Department</th>\n                        <th>Date of Birth</th>\n                        <th>Date Joined</th>\n                        <th>Line Manager</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let staff of allStaff['data']\">\n                          <td>{{staff.staffId}}</td>\n                          <td>{{staff.surname}}</td>\n                          <td>{{staff.othernames}}</td>\n                          <td>{{staff.email}}</td>\n                          <td>{{staff.phoneNo}}</td>\n                          <td>{{staff.gender}}</td>\n                          <td>{{staff.role}}</td>\n                          <td>{{staff.department}}</td>\n                          <td>{{staff.date_of_birth}}</td>\n                          <td>{{staff.date_joined}}</td>\n                          <td>{{staff.line_manager_id}}</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Staff ID</th>\n                          <th>Surname</th>\n                          <th>Othernames</th>\n                          <th>Email</th>\n                          <th>Phone No</th>\n                          <th>Gender</th>\n                          <th>Role</th>\n                          <th>Department</th>\n                          <th>Date of Birth</th>\n                          <th>Date Joined</th>\n                          <th>Line Manager</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END: Page Main-->\n\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/alert */ "./src/app/_models/alert.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.OnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'alert alert-success';
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'alert alert-danger';
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'alert alert-info';
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __importDefault(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html")).default
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('cu')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/_models/alert.ts":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/admin-register/Admin.ts":
/*!*****************************************!*\
  !*** ./src/app/admin-register/Admin.ts ***!
  \*****************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());



/***/ }),

/***/ "./src/app/admin-register/admin-register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-register/admin-register.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXJlZ2lzdGVyL2FkbWluLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-register/admin-register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-register/admin-register.component.ts ***!
  \************************************************************/
/*! exports provided: AdminRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisterComponent", function() { return AdminRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin */ "./src/app/admin-register/Admin.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AdminRegisterComponent = /** @class */ (function () {
    function AdminRegisterComponent(ngxService, registerService) {
        this.ngxService = ngxService;
        this.registerService = registerService;
        this.admin = new _Admin__WEBPACK_IMPORTED_MODULE_1__["Admin"]();
    }
    AdminRegisterComponent.prototype.ngOnInit = function () {
    };
    AdminRegisterComponent.prototype.createAdmin = function (adminForm) {
        var _this = this;
        this.ngxService.start();
        console.log(adminForm.value);
        this.admin = adminForm.value;
        this.registerService.createAdmin({
            email: this.admin.email,
            passcode: this.admin.passcode
        }).subscribe(function (response) {
            console.log(response);
            console.log('this is new admin', response);
            _this.admin = new _Admin__WEBPACK_IMPORTED_MODULE_1__["Admin"]();
            console.log('this is new admin', _this.admin);
            _this.ngxService.stop();
        });
    };
    AdminRegisterComponent.ctorParameters = function () { return [
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] },
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] }
    ]; };
    AdminRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-register/admin-register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-register.component.css */ "./src/app/admin-register/admin-register.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"], _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], AdminRegisterComponent);
    return AdminRegisterComponent;
}());



/***/ }),

/***/ "./src/app/anniversary/Anniversary.ts":
/*!********************************************!*\
  !*** ./src/app/anniversary/Anniversary.ts ***!
  \********************************************/
/*! exports provided: Anniversary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anniversary", function() { return Anniversary; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Anniversary = /** @class */ (function () {
    function Anniversary() {
    }
    return Anniversary;
}());



/***/ }),

/***/ "./src/app/anniversary/anniversary.component.css":
/*!*******************************************************!*\
  !*** ./src/app/anniversary/anniversary.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fubml2ZXJzYXJ5L2Fubml2ZXJzYXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/anniversary/anniversary.component.ts":
/*!******************************************************!*\
  !*** ./src/app/anniversary/anniversary.component.ts ***!
  \******************************************************/
/*! exports provided: AnniversaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnniversaryComponent", function() { return AnniversaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_anniversary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/anniversary.service */ "./src/app/services/anniversary.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _Anniversary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Anniversary */ "./src/app/anniversary/Anniversary.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/branch.service */ "./src/app/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AnniversaryComponent = /** @class */ (function () {
    function AnniversaryComponent(anniversaryService, companyService, branchService) {
        this.anniversaryService = anniversaryService;
        this.companyService = companyService;
        this.branchService = branchService;
        this.anniversaries = [];
        this.companies = [];
        this.branches = [];
        this.anniversary = new _Anniversary__WEBPACK_IMPORTED_MODULE_3__["Anniversary"]();
        this.isDataAvail = false;
    }
    AnniversaryComponent.prototype.ngOnInit = function () {
        this.getAllAnniversaries();
        this.getCompanies();
        this.getBranches();
    };
    AnniversaryComponent.prototype.getAllAnniversaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.anniversaryService.getCompanyAnniversary().subscribe(function (data) {
                    _this.anniversaries = data['data'];
                    console.log('=>', data);
                    return _this.anniversaries;
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    AnniversaryComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data['data'];
            console.log(data);
        });
    };
    AnniversaryComponent.prototype.getBranches = function () {
        var _this = this;
        this.branchService.getBranches().subscribe(function (data) {
            _this.branches = data;
            console.log(data);
        });
    };
    AnniversaryComponent.prototype.createAnniversary = function (anniversary) {
        var _this = this;
        console.log(anniversary.value);
        this.anniversary = anniversary.value;
        this.anniversaryService.createAnniversary(this.anniversary).subscribe(function (response) {
            console.log(response);
            _this.anniversary = new _Anniversary__WEBPACK_IMPORTED_MODULE_3__["Anniversary"]();
            _this.getAllAnniversaries();
        });
    };
    AnniversaryComponent.ctorParameters = function () { return [
        { type: _services_anniversary_service__WEBPACK_IMPORTED_MODULE_1__["AnniversaryService"] },
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"] }
    ]; };
    AnniversaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anniversary',
            template: __importDefault(__webpack_require__(/*! raw-loader!./anniversary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/anniversary/anniversary.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./anniversary.component.css */ "./src/app/anniversary/anniversary.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_anniversary_service__WEBPACK_IMPORTED_MODULE_1__["AnniversaryService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], _services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]])
    ], AnniversaryComponent);
    return AnniversaryComponent;
}());



/***/ }),

/***/ "./src/app/announcement/Announcement.ts":
/*!**********************************************!*\
  !*** ./src/app/announcement/Announcement.ts ***!
  \**********************************************/
/*! exports provided: Announcement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Announcement", function() { return Announcement; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Announcement = /** @class */ (function () {
    function Announcement() {
    }
    return Announcement;
}());



/***/ }),

/***/ "./src/app/announcement/announcement.component.css":
/*!*********************************************************!*\
  !*** ./src/app/announcement/announcement.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fubm91bmNlbWVudC9hbm5vdW5jZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/announcement/announcement.component.ts":
/*!********************************************************!*\
  !*** ./src/app/announcement/announcement.component.ts ***!
  \********************************************************/
/*! exports provided: AnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function() { return AnnouncementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/announcement.service */ "./src/app/services/announcement.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _Announcement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Announcement */ "./src/app/announcement/Announcement.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent(announcementService, host, companyService, fb) {
        this.announcementService = announcementService;
        this.host = host;
        this.companyService = companyService;
        this.fb = fb;
        this.announcements = [];
        this.companies = [];
        this.announcement = new _Announcement__WEBPACK_IMPORTED_MODULE_3__["Announcement"]();
        this.isDataAvail = false;
        this.form = this.fb.group({
            title: [''],
            images: [null],
            location: [''],
            date: [''],
            time: ['']
        });
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
        this.getAllAnnouncements();
        this.getCompanies();
    };
    AnnouncementComponent.prototype.getAllAnnouncements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.announcementService.getCompanyAnnouncements().subscribe(function (data) {
                    _this.announcements = data['data'];
                    console.log('=>', data);
                    return _this.announcements;
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    AnnouncementComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data['data'];
            console.log(data);
        });
    };
    AnnouncementComponent.prototype.createAnouncement = function () {
        var _this = this;
        var formData = new FormData();
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        this.announcement.status = 'active';
        formData.append('title', this.form.get('title').value);
        formData.append('location', this.form.get('location').value);
        formData.append('date', this.form.get('date').value);
        formData.append('time', this.form.get('time').value);
        formData.append('images', this.form.get('images').value);
        formData.append('companyId', companyId);
        formData.append('status', this.announcement.status);
        this.announcement = formData.value;
        this.announcementService.createAnnouncement(formData).subscribe(function (response) {
            console.log(response);
            _this.announcement = new _Announcement__WEBPACK_IMPORTED_MODULE_3__["Announcement"]();
            _this.getAllAnnouncements();
        });
    };
    AnnouncementComponent.prototype.uploadFile = function (event) {
        var file = event.target.files[0];
        if (/\.(jpe?g|gif)$/i.test(file.name) === false) {
            alert('please choose an Image with JPG or GIF extension!');
        }
        else {
            this.form.patchValue({
                images: file
            });
            this.form.get('images').updateValueAndValidity();
        }
    };
    AnnouncementComponent.ctorParameters = function () { return [
        { type: _services_announcement_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AnnouncementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcement',
            template: __importDefault(__webpack_require__(/*! raw-loader!./announcement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcement/announcement.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./announcement.component.css */ "./src/app/announcement/announcement.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'Office People Web';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_top_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/top/top.component */ "./src/app/shared/top/top.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/announcement/announcement.component.ts");
/* harmony import */ var _anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./anniversary/anniversary.component */ "./src/app/anniversary/anniversary.component.ts");
/* harmony import */ var _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./birthday/birthday.component */ "./src/app/birthday/birthday.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm5/ngx-ui-loader.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _cmr_login_cmr_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cmr-login/cmr-login.component */ "./src/app/cmr-login/cmr-login.component.ts");
/* harmony import */ var _cmr_dashboard_cmr_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cmr-dashboard/cmr-dashboard.component */ "./src/app/cmr-dashboard/cmr-dashboard.component.ts");
/* harmony import */ var _shared_cmr_sidebar_cmr_sidebar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/cmr-sidebar/cmr-sidebar.component */ "./src/app/shared/cmr-sidebar/cmr-sidebar.component.ts");
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/leave/leave.component.ts");
/* harmony import */ var _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin-register/admin-register.component */ "./src/app/admin-register/admin-register.component.ts");
/* harmony import */ var _company_register_company_register_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./company-register/company-register.component */ "./src/app/company-register/company-register.component.ts");
/* harmony import */ var _cmr_staff_cmr_staff_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cmr-staff/cmr-staff.component */ "./src/app/cmr-staff/cmr-staff.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _shared_top_top_component__WEBPACK_IMPORTED_MODULE_6__["TopComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_12__["BranchComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_13__["StaffComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_19__["DepartmentComponent"],
                _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_20__["AnnouncementComponent"],
                _anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_21__["AnniversaryComponent"],
                _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_22__["BirthdayComponent"],
                _cmr_login_cmr_login_component__WEBPACK_IMPORTED_MODULE_29__["CmrLoginComponent"],
                _cmr_dashboard_cmr_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["CmrDashboardComponent"],
                _shared_cmr_sidebar_cmr_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["CmrSidebarComponent"],
                _leave_leave_component__WEBPACK_IMPORTED_MODULE_32__["LeaveComponent"],
                _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_33__["AdminRegisterComponent"],
                _company_register_company_register_component__WEBPACK_IMPORTED_MODULE_34__["CompanyRegisterComponent"],
                _cmr_staff_cmr_staff_component__WEBPACK_IMPORTED_MODULE_35__["CmrStaffComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_23__["NgxUiLoaderModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_23__["NgxUiLoaderRouterModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_23__["NgxUiLoaderHttpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"]
            ],
            providers: [_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_alert_service__WEBPACK_IMPORTED_MODULE_18__["AlertService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/announcement/announcement.component.ts");
/* harmony import */ var _anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./anniversary/anniversary.component */ "./src/app/anniversary/anniversary.component.ts");
/* harmony import */ var _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./birthday/birthday.component */ "./src/app/birthday/birthday.component.ts");
/* harmony import */ var _staff_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./staff-resolver.service */ "./src/app/staff-resolver.service.ts");
/* harmony import */ var _cmr_dashboard_cmr_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmr-dashboard/cmr-dashboard.component */ "./src/app/cmr-dashboard/cmr-dashboard.component.ts");
/* harmony import */ var _cmr_login_cmr_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmr-login/cmr-login.component */ "./src/app/cmr-login/cmr-login.component.ts");
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/leave/leave.component.ts");
/* harmony import */ var _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-register/admin-register.component */ "./src/app/admin-register/admin-register.component.ts");
/* harmony import */ var _company_register_company_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company-register/company-register.component */ "./src/app/company-register/company-register.component.ts");
/* harmony import */ var _cmr_staff_cmr_staff_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cmr-staff/cmr-staff.component */ "./src/app/cmr-staff/cmr-staff.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




















var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'branch', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_4__["BranchComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__["StaffComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], resolve: { branches: _staff_resolver_service__WEBPACK_IMPORTED_MODULE_13__["StaffResolverService"] } },
    { path: 'department', component: _department_department_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'announcement', component: _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_10__["AnnouncementComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'anniversary', component: _anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_11__["AnniversaryComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'birthday', component: _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_12__["BirthdayComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'cmrDashboard', component: _cmr_dashboard_cmr_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["CmrDashboardComponent"] },
    { path: 'leave', component: _leave_leave_component__WEBPACK_IMPORTED_MODULE_16__["LeaveComponent"] },
    { path: 'cmrLogin', component: _cmr_login_cmr_login_component__WEBPACK_IMPORTED_MODULE_15__["CmrLoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'admin-register', component: _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_17__["AdminRegisterComponent"] },
    { path: 'companyReg', component: _company_register_company_register_component__WEBPACK_IMPORTED_MODULE_18__["CompanyRegisterComponent"] },
    { path: 'cmrStaff', component: _cmr_staff_cmr_staff_component__WEBPACK_IMPORTED_MODULE_19__["CmrStaffComponent"] },
    // otherwise redirect to home
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/birthday/birthday.component.css":
/*!*************************************************!*\
  !*** ./src/app/birthday/birthday.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpcnRoZGF5L2JpcnRoZGF5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/birthday/birthday.component.ts":
/*!************************************************!*\
  !*** ./src/app/birthday/birthday.component.ts ***!
  \************************************************/
/*! exports provided: BirthdayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayComponent", function() { return BirthdayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_birthday_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/birthday.service */ "./src/app/services/birthday.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BirthdayComponent = /** @class */ (function () {
    function BirthdayComponent(birthdayService) {
        this.birthdayService = birthdayService;
        this.birthdays = [];
    }
    BirthdayComponent.prototype.ngOnInit = function () {
        this.getAllAnniversaries();
    };
    BirthdayComponent.prototype.getAllAnniversaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.birthdayService.getCompanyBirthdays().subscribe(function (data) {
                    _this.birthdays = data['data'];
                    console.log('=>', _this.birthdays);
                    //return this.birthdays;
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    BirthdayComponent.ctorParameters = function () { return [
        { type: _services_birthday_service__WEBPACK_IMPORTED_MODULE_1__["BirthdayService"] }
    ]; };
    BirthdayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-birthday',
            template: __importDefault(__webpack_require__(/*! raw-loader!./birthday.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/birthday/birthday.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./birthday.component.css */ "./src/app/birthday/birthday.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_birthday_service__WEBPACK_IMPORTED_MODULE_1__["BirthdayService"]])
    ], BirthdayComponent);
    return BirthdayComponent;
}());



/***/ }),

/***/ "./src/app/branch/Branch.ts":
/*!**********************************!*\
  !*** ./src/app/branch/Branch.ts ***!
  \**********************************/
/*! exports provided: Branch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branch", function() { return Branch; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Branch = /** @class */ (function () {
    function Branch() {
    }
    return Branch;
}());



/***/ }),

/***/ "./src/app/branch/branch.component.css":
/*!*********************************************!*\
  !*** ./src/app/branch/branch.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaC9icmFuY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/branch/branch.component.ts":
/*!********************************************!*\
  !*** ./src/app/branch/branch.component.ts ***!
  \********************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Branch */ "./src/app/branch/Branch.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BranchComponent = /** @class */ (function () {
    function BranchComponent(branchService, companyService, fb) {
        this.branchService = branchService;
        this.companyService = companyService;
        this.branches = [];
        this.companies = [];
        this.branch = new _Branch__WEBPACK_IMPORTED_MODULE_3__["Branch"]();
        this.branchName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.phoneNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.branchId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.form = fb.group({
            'branchName': this.branchName,
            'phoneNo': this.phoneNo,
            'branchId': this.branchId,
            'email': this.email,
            'address': this.address
        });
    }
    BranchComponent.prototype.ngOnInit = function () {
        this.getBranches();
        this.getCompanies();
    };
    BranchComponent.prototype.getBranches = function () {
        var _this = this;
        this.branchService.getCompanyBranches().subscribe(function (data) {
            _this.branches = data;
            console.log(data);
        });
    };
    BranchComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data['data'];
            console.log(data);
        });
    };
    BranchComponent.prototype.createBranch = function (form) {
        var _this = this;
        form = this.form;
        console.log(form.value);
        this.branch = form.value;
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        this.branch['companyId'] = companyId;
        this.branchService.createBranch(this.branch).subscribe(function (response) {
            console.log(response);
            _this.branch = new _Branch__WEBPACK_IMPORTED_MODULE_3__["Branch"]();
            _this.getBranches();
        });
    };
    BranchComponent.ctorParameters = function () { return [
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] },
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    BranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __importDefault(__webpack_require__(/*! raw-loader!./branch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/branch/branch.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./branch.component.css */ "./src/app/branch/branch.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/cmr-dashboard/cmr-dashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cmr-dashboard/cmr-dashboard.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ntci1kYXNoYm9hcmQvY21yLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cmr-dashboard/cmr-dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cmr-dashboard/cmr-dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: CmrDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrDashboardComponent", function() { return CmrDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/staff.service */ "./src/app/services/staff.service.ts");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/department.service */ "./src/app/services/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CmrDashboardComponent = /** @class */ (function () {
    function CmrDashboardComponent(companyService, branchService, staffService, departmentService) {
        this.companyService = companyService;
        this.branchService = branchService;
        this.staffService = staffService;
        this.departmentService = departmentService;
        this.totalCompanies = 0;
        this.totalBranches = 0;
        this.totalStaff = 0;
        this.totalDepartments = 0;
    }
    CmrDashboardComponent.prototype.ngOnInit = function () {
        this.getStatistics();
    };
    CmrDashboardComponent.prototype.getStatistics = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            console.log(data);
            _this.totalCompanies = data['data'].length;
        });
        this.branchService.getBranches().subscribe(function (data) {
            console.log(data);
            _this.totalBranches = data['data'].length;
        });
        this.staffService.getAllStaff().subscribe(function (data) {
            console.log(data);
            _this.totalStaff = data['data'].length;
        });
        this.departmentService.getDepartments().subscribe(function (data) {
            console.log(data);
            _this.totalDepartments = data['data'].length;
        });
    };
    CmrDashboardComponent.ctorParameters = function () { return [
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] },
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] },
        { type: _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] }
    ]; };
    CmrDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmr-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cmr-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-dashboard/cmr-dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cmr-dashboard.component.css */ "./src/app/cmr-dashboard/cmr-dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"], _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
    ], CmrDashboardComponent);
    return CmrDashboardComponent;
}());



/***/ }),

/***/ "./src/app/cmr-login/User.ts":
/*!***********************************!*\
  !*** ./src/app/cmr-login/User.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/cmr-login/cmr-login.component.css":
/*!***************************************************!*\
  !*** ./src/app/cmr-login/cmr-login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ntci1sb2dpbi9jbXItbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/cmr-login/cmr-login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cmr-login/cmr-login.component.ts ***!
  \**************************************************/
/*! exports provided: CmrLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrLoginComponent", function() { return CmrLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./src/app/cmr-login/User.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CmrLoginComponent = /** @class */ (function () {
    function CmrLoginComponent(route, router, loginService, fb) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.userData = [];
        this.user = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.form = fb.group({
            'email': this.email,
            'password': this.password
        });
    }
    CmrLoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/cmrDashboard';
    };
    CmrLoginComponent.prototype.cmrLogin = function (form) {
        var _this = this;
        form = this.form;
        console.log('this is form', form.value);
        this.user.email = form.value.email;
        this.user.passcode = form.value.password;
        this.loginService.adminLogin(this.user).subscribe(function (data) {
            _this.userData = data;
            console.log(data);
            if (data['errorCode'] === 200) {
                var _data = data['message'];
                console.log(_data);
                localStorage.setItem('cu', JSON.stringify(_data));
                _this.router.navigate([_this.returnUrl]);
            }
        });
    };
    CmrLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    CmrLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmr-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cmr-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-login/cmr-login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cmr-login.component.css */ "./src/app/cmr-login/cmr-login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CmrLoginComponent);
    return CmrLoginComponent;
}());



/***/ }),

/***/ "./src/app/cmr-staff/Staff.ts":
/*!************************************!*\
  !*** ./src/app/cmr-staff/Staff.ts ***!
  \************************************/
/*! exports provided: Staff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staff", function() { return Staff; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Staff = /** @class */ (function () {
    function Staff() {
    }
    return Staff;
}());



/***/ }),

/***/ "./src/app/cmr-staff/cmr-staff.component.css":
/*!***************************************************!*\
  !*** ./src/app/cmr-staff/cmr-staff.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ntci1zdGFmZi9jbXItc3RhZmYuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/cmr-staff/cmr-staff.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cmr-staff/cmr-staff.component.ts ***!
  \**************************************************/
/*! exports provided: CmrStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrStaffComponent", function() { return CmrStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/staff.service */ "./src/app/services/staff.service.ts");
/* harmony import */ var _Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Staff */ "./src/app/cmr-staff/Staff.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm5/ngx-ui-loader.js");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var CmrStaffComponent = /** @class */ (function () {
    function CmrStaffComponent(branchService, companyService, staffService, ngxService, departmentService, actr, fb) {
        var _this = this;
        this.branchService = branchService;
        this.companyService = companyService;
        this.staffService = staffService;
        this.ngxService = ngxService;
        this.departmentService = departmentService;
        this.actr = actr;
        this.DOBstartDate = new Date(1990, 0, 1);
        this.DateJoinedStartDate = new Date(2000, 0, 1);
        this.branches = [];
        this.companies = [];
        this.departments = [];
        this.allStaff = [];
        this.staff = new _Staff__WEBPACK_IMPORTED_MODULE_4__["Staff"]();
        this.surname = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.genders = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]([{ 'gender': 'Male' }, { 'gender': 'Female' }], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.othernames = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.branchId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.companyId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.phoneNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.staffId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.date_of_birth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.date_joined = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.line_manager_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.reporting_line_ids = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.department = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.form = fb.group({
            'surname': this.surname,
            'othernames': this.othernames,
            'branchId': this.branchId,
            'email': this.email,
            'companyId': this.companyId,
            'phoneNo': this.phoneNo,
            'gender': this.genders,
            'staffId': this.staffId,
            'role': this.role,
            'date_of_birth': this.date_of_birth,
            'date_joined': this.date_joined,
            'line_manager_id': this.line_manager_id,
            'reporting_line_ids': this.reporting_line_ids,
            'department': this.department
        });
        // this.getBranches();
        // this.getCompanies();
        // this.getDepartments()
        // this.getStaff();
        this.actr.data.map(function (data) { return data.branches; }).subscribe(function (res) {
            console.log('Here I am => ', res);
            console.log(typeof res);
            _this.branches = res;
        });
    }
    // ngOnChanges(){
    //   //this.getBranches();
    //   this.getDepartments()
    //   this.getStaff();
    // }
    CmrStaffComponent.prototype.ngOnInit = function () {
        this.getBranches();
        // this.getDepartments()
        // this.getStaff();
    };
    CmrStaffComponent.prototype.getBranches = function () {
        var _this = this;
        this.ngxService.start();
        this.branchService.getCompanyBranches().subscribe(function (data) {
            var trial = data['data'];
            var again = [];
            for (var count = 0; count < trial.length; count++) {
                again.push(trial[count]);
            }
            _this.branches = again;
            console.log('Branches => ', _this.branches);
            _this.ngxService.stop();
        });
    };
    CmrStaffComponent.prototype.getCompanies = function () {
        var _this = this;
        this.ngxService.start();
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data;
            console.log(data);
            _this.ngxService.stop();
        });
    };
    CmrStaffComponent.prototype.getStaff = function () {
        var _this = this;
        this.ngxService.start();
        this.staffService.getCompanyStaff().subscribe(function (data) {
            _this.allStaff = data;
            console.log(data);
            _this.ngxService.stop();
        });
    };
    CmrStaffComponent.prototype.createStaff = function (form) {
        var _this = this;
        form = this.form;
        this.ngxService.start();
        console.log(form.value);
        this.staff = form.value;
        var about = this.companyId;
        this.staff['about'] = about;
        this.staffService.createStaff(this.staff).subscribe(function (response) {
            console.log(response);
            _this.staff = new _Staff__WEBPACK_IMPORTED_MODULE_4__["Staff"]();
            _this.getStaff();
            _this.ngxService.stop();
        });
    };
    CmrStaffComponent.prototype.uploadFile = function (event, form) {
        var _this = this;
        form = this.form;
        this.staffs = form.value;
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
        var files = new FormData();
        files.append('files', this.selectedFile, this.selectedFile.name);
        if (/\.(csv|xlsx)$/i.test(this.selectedFile.name) === false) {
            alert('please choose a file in CSV or Excel format!');
        }
        else {
            this.companyId = this.staffs.companyId;
            this.staffService.submitCsv(this.companyId, files).subscribe(function (csv) {
                if (csv) {
                    console.log('sent', csv);
                    alert('Staff Sheet sent to Database');
                }
                else {
                    alert('Data was not sent. Contact Office People Admin ');
                }
            });
        }
    };
    CmrStaffComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getCompanyDepartments().subscribe(function (data) {
            _this.departments = data;
            console.log(data);
        });
    };
    CmrStaffComponent.ctorParameters = function () { return [
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] },
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] },
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    CmrStaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmr-staff',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cmr-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cmr-staff/cmr-staff.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cmr-staff.component.css */ "./src/app/cmr-staff/cmr-staff.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"],
            _services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CmrStaffComponent);
    return CmrStaffComponent;
}());



/***/ }),

/***/ "./src/app/company-register/Register.ts":
/*!**********************************************!*\
  !*** ./src/app/company-register/Register.ts ***!
  \**********************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/company-register/company-register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company-register/company-register.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktcmVnaXN0ZXIvY29tcGFueS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/company-register/company-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company-register/company-register.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRegisterComponent", function() { return CompanyRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register */ "./src/app/company-register/Register.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm5/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CompanyRegisterComponent = /** @class */ (function () {
    function CompanyRegisterComponent(ngxService, registerService, route, router) {
        this.ngxService = ngxService;
        this.registerService = registerService;
        this.route = route;
        this.router = router;
        this.register = new _Register__WEBPACK_IMPORTED_MODULE_1__["Register"]();
    }
    CompanyRegisterComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/companyReg';
    };
    CompanyRegisterComponent.prototype.registerCompany = function (registerForm) {
        var _this = this;
        this.ngxService.start();
        console.log('this is data from the form', registerForm.value);
        this.register = registerForm.value;
        this.registerService.registerStaff({
            companyId: this.register.companyId,
            email: this.register.email,
            passcode: this.register.passcode,
        }).subscribe(function (response) {
            console.log(response);
            console.log('this is new registration', response);
            alert('Account Activated Successfully. Please Proceed to Login.');
            if (response['errorCode'] === 200) {
                var _data = response['message'].data;
                delete _data['passcode'];
                delete _data['token'];
                delete _data['__v'];
                delete _data['_id'];
                console.log(_data);
            }
            _this.register = new _Register__WEBPACK_IMPORTED_MODULE_1__["Register"]();
            _this.router.navigate([_this.returnUrl]);
            _this.ngxService.stop();
        });
    };
    CompanyRegisterComponent.ctorParameters = function () { return [
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] },
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CompanyRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./company-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-register/company-register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./company-register.component.css */ "./src/app/company-register/company-register.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"], _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CompanyRegisterComponent);
    return CompanyRegisterComponent;
}());



/***/ }),

/***/ "./src/app/company/Company.ts":
/*!************************************!*\
  !*** ./src/app/company/Company.ts ***!
  \************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Company */ "./src/app/company/Company.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService, alertService) {
        this.companyService = companyService;
        this.alertService = alertService;
        this.companies = [];
        this.company = new _Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompanyComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data['data'];
            console.log(data);
        });
    };
    CompanyComponent.prototype.createCompany = function (coy) {
        var _this = this;
        console.log(coy.value);
        this.company = coy.value;
        this.companyService.createCompany(coy.value).subscribe(function (response) {
            if (response) {
                _this.alertService.success('Company created Successfully', true);
            }
            else {
                _this.alertService.error('Something went wrong: Company Not Created', true);
            }
            console.log('new company', response);
            _this.company = new _Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
            _this.getCompanies();
        });
    };
    CompanyComponent.ctorParameters = function () { return [
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __importDefault(__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/department/Department.ts":
/*!******************************************!*\
  !*** ./src/app/department/Department.ts ***!
  \******************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());



/***/ }),

/***/ "./src/app/department/department.component.css":
/*!*****************************************************!*\
  !*** ./src/app/department/department.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _Department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Department */ "./src/app/department/Department.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(departmentService, companyService, fb) {
        this.departmentService = departmentService;
        this.companyService = companyService;
        this.departments = [];
        this.companies = [];
        this.department = new _Department__WEBPACK_IMPORTED_MODULE_3__["Department"]();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.form = fb.group({
            'name': this.name,
            'email': this.email,
            'description': this.description
        });
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCompanies();
    };
    // tslint:disable-next-line: use-life-cycle-interface
    /* ngOnChanges() {
      this.getCompanies();
    } */
    DepartmentComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getCompanyDepartments().subscribe(function (data) {
            _this.departments = data;
            console.log(data);
        });
    };
    DepartmentComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data;
            console.log(data);
        });
    };
    DepartmentComponent.prototype.createDepartment = function (form) {
        var _this = this;
        form = this.form;
        console.log(form.value);
        this.department = form.value;
        this.departmentService.createDepartment(this.department).subscribe(function (response) {
            console.log(response);
            _this.department = new _Department__WEBPACK_IMPORTED_MODULE_3__["Department"]();
            _this.getDepartments();
        });
    };
    DepartmentComponent.ctorParameters = function () { return [
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentService"] },
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __importDefault(__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_department_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentService"], _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/staff.service */ "./src/app/services/staff.service.ts");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/department.service */ "./src/app/services/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(companyService, branchService, staffService, departmentService) {
        this.companyService = companyService;
        this.branchService = branchService;
        this.staffService = staffService;
        this.departmentService = departmentService;
        this.totalCompanies = 0;
        this.totalBranches = 0;
        this.totalStaff = 0;
        this.totalDepartments = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getStatistics();
    };
    HomeComponent.prototype.getStatistics = function () {
        var _this = this;
        this.companyService.getCompanyById().subscribe(function (data) {
            console.log(data);
            _this.totalCompanies = data['data'].length;
        });
        this.branchService.getCompanyBranches().subscribe(function (data) {
            console.log(data);
            _this.totalBranches = data['data'].length;
        });
        this.staffService.getCompanyStaff().subscribe(function (data) {
            console.log(data);
            _this.totalStaff = data['data'].length;
        });
        this.departmentService.getCompanyDepartments().subscribe(function (data) {
            console.log(data);
            _this.totalDepartments = data['data'].length;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] },
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] },
        { type: _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"], _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/leave/Leave.ts":
/*!********************************!*\
  !*** ./src/app/leave/Leave.ts ***!
  \********************************/
/*! exports provided: Leave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leave", function() { return Leave; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Leave = /** @class */ (function () {
    function Leave() {
    }
    return Leave;
}());



/***/ }),

/***/ "./src/app/leave/leave.component.css":
/*!*******************************************!*\
  !*** ./src/app/leave/leave.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Raleway');\n/*Google fonts*/\nform .input-group-text i{    font-size: 2em;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUvbGVhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBZ0IsOERBQThEO0FBQTlFLGVBQWU7QUFDZiw2QkFBNkIsY0FBYyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbGVhdmUvbGVhdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qR29vZ2xlIGZvbnRzKi9AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXknKTtcbmZvcm0gLmlucHV0LWdyb3VwLXRleHQgaXsgICAgZm9udC1zaXplOiAyZW07fVxuIl19 */");

/***/ }),

/***/ "./src/app/leave/leave.component.ts":
/*!******************************************!*\
  !*** ./src/app/leave/leave.component.ts ***!
  \******************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _Leave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Leave */ "./src/app/leave/Leave.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LeaveComponent = /** @class */ (function () {
    function LeaveComponent(leaveService, alertService) {
        this.leaveService = leaveService;
        this.alertService = alertService;
        this.leave = new _Leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]();
        this.leaveArray = [];
    }
    LeaveComponent.prototype.ngOnInit = function () {
        this.companyId = '';
        if (localStorage.getItem('cu')) {
            this.currentUser = JSON.parse(localStorage.getItem('cu'));
            this.companyId = this.currentUser['companyId'];
            this.getLeaves();
        }
    };
    LeaveComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getLeave(this.companyId).subscribe(function (data) {
            var real = data['message'];
            console.log('this is data', real);
            var trial = [];
            for (var count = 0; count < real.length; count++) {
                trial.push(real[count]);
            }
            var leavey = trial.map(function (el) { return el['components']; });
            _this.leaves = leavey[0];
            console.log('this is leaves', leavey);
            // this.leaves = Object.keys(real);
        });
    };
    LeaveComponent.prototype.addLeave = function (value) {
        if (value !== '') {
            this.leaveArray.push(value);
            console.log('this is leave array', this.leaveArray);
            var trial = [];
            for (var count = 0; count < this.leaveArray.length; count++) {
                trial.push(this.leaveArray[count]);
            }
            this.display = trial;
            console.log('this is display', this.display);
        }
        else {
            alert('Please fill in the Fields **');
        }
    };
    LeaveComponent.prototype.createLeave = function (leaveForm) {
        var _this = this;
        var components = this.leaveArray;
        // leaveForm.resetForm();
        this.leaveService.createLeave(this.companyId, {
            'components': components
        }).subscribe(function (response) {
            if (response) {
                _this.alertService.success('Leave created Successfully', true);
            }
            else {
                _this.alertService.error('Something went wrong: Leave Not Created', true);
            }
            _this.leaveService.updateLeave(_this.companyId).subscribe(function (update) {
                console.log('this is update', update);
            });
            console.log('this is response', response);
            _this.leave = new _Leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]();
            _this.getLeaves();
        });
    };
    LeaveComponent.ctorParameters = function () { return [
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_1__["LeaveService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    LeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave',
            template: __importDefault(__webpack_require__(/*! raw-loader!./leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./leave.component.css */ "./src/app/leave/leave.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_1__["LeaveService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LeaveComponent);
    return LeaveComponent;
}());



/***/ }),

/***/ "./src/app/login/User.ts":
/*!*******************************!*\
  !*** ./src/app/login/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./src/app/login/User.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, loginService, fb) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.userData = [];
        this.user = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.form = fb.group({
            'email': this.email,
            'password': this.password
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('cu')) {
            this.currentUser = JSON.parse(localStorage.getItem('cu'));
            console.log(this.currentUser);
        }
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        form = this.form;
        this.user.email = form.value.email;
        this.user.passcode = form.value.password;
        this.loginService.doLogin(this.user).subscribe(function (data) {
            _this.userData = data;
            console.log(data);
            if (data['errorCode'] === 200) {
                var _data = data['message'].data;
                delete _data['passcode'];
                delete _data['token'];
                delete _data['__v'];
                delete _data['_id'];
                console.log(_data);
                localStorage.setItem('cu', JSON.stringify(_data));
                _this.router.navigate([_this.returnUrl]);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/Register.ts":
/*!**************************************!*\
  !*** ./src/app/register/Register.ts ***!
  \**************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register */ "./src/app/register/Register.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm5/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(ngxService, registerService, route, router) {
        this.ngxService = ngxService;
        this.registerService = registerService;
        this.route = route;
        this.router = router;
        this.register = new _Register__WEBPACK_IMPORTED_MODULE_1__["Register"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/register';
    };
    RegisterComponent.prototype.registerStaff = function (registerForm) {
        var _this = this;
        this.ngxService.start();
        console.log('this is data from the form', registerForm.value);
        this.register = registerForm.value;
        this.registerService.registerStaff({
            staffId: this.register.staffId,
            companyId: this.register.companyId,
            email: this.register.email,
            passcode: this.register.passcode,
            branchId: this.register.branchId,
        }).subscribe(function (response) {
            console.log(response);
            console.log('this is new registration', response);
            alert('Account Activated Successfully. Please Download the App and Proceed to Login.');
            if (response['errorCode'] === 200) {
                var _data = response['message'].data;
                delete _data['passcode'];
                delete _data['token'];
                delete _data['__v'];
                delete _data['_id'];
                console.log(_data);
            }
            _this.register = new _Register__WEBPACK_IMPORTED_MODULE_1__["Register"]();
            _this.router.navigate([_this.returnUrl]);
            _this.ngxService.stop();
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] },
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"], _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/alert */ "./src/app/_models/alert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/anniversary.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/anniversary.service.ts ***!
  \*************************************************/
/*! exports provided: AnniversaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnniversaryService", function() { return AnniversaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AnniversaryService = /** @class */ (function () {
    function AnniversaryService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    AnniversaryService.prototype.getAnniversaries = function () {
        return this.httpClient.get(this.API_URL + "/anniversary");
    };
    AnniversaryService.prototype.createAnniversary = function (anniversary) {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        anniversary['companyId'] = companyId;
        return this.httpClient.post(this.API_URL + "/anniversary/", anniversary);
    };
    AnniversaryService.prototype.getCompanyAnniversary = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        return this.httpClient.get(this.API_URL + "/anniversary/" + companyId + "/company");
    };
    AnniversaryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AnniversaryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnniversaryService);
    return AnniversaryService;
}());



/***/ }),

/***/ "./src/app/services/announcement.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/announcement.service.ts ***!
  \**************************************************/
/*! exports provided: AnnouncementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementService", function() { return AnnouncementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AnnouncementService = /** @class */ (function () {
    function AnnouncementService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.testUrl = 'https://peopleappapis.herokuapp.com/v1';
    }
    AnnouncementService.prototype.getAnnouncements = function () {
        return this.httpClient.get(this.API_URL + "/announcement");
    };
    AnnouncementService.prototype.createAnnouncement = function (form) {
        return this.httpClient.post(this.testUrl + "/announcement", form);
    };
    AnnouncementService.prototype.getCompanyAnnouncements = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        return this.httpClient.get(this.testUrl + "/announcement/" + companyId + "/company");
    };
    AnnouncementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AnnouncementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnnouncementService);
    return AnnouncementService;
}());



/***/ }),

/***/ "./src/app/services/birthday.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/birthday.service.ts ***!
  \**********************************************/
/*! exports provided: BirthdayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayService", function() { return BirthdayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BirthdayService = /** @class */ (function () {
    function BirthdayService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    BirthdayService.prototype.getBirthdays = function () {
        return this.httpClient.get(this.API_URL + "/birthday");
    };
    BirthdayService.prototype.createBirthday = function (birthday) {
        return this.httpClient.post(this.API_URL + "/birthday/", birthday);
    };
    BirthdayService.prototype.getCompanyBirthdays = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        return this.httpClient.get(this.API_URL + "/birthday/" + companyId + "/company");
    };
    BirthdayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BirthdayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BirthdayService);
    return BirthdayService;
}());



/***/ }),

/***/ "./src/app/services/branch.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/branch.service.ts ***!
  \********************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BranchService = /** @class */ (function () {
    function BranchService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.testUrl = 'https://peopleappapis.herokuapp.com/v1';
    }
    BranchService.prototype.getBranches = function () {
        return this.httpClient.get(this.API_URL + "/branch");
    };
    BranchService.prototype.getCompanyBranches = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        return this.httpClient.get(this.API_URL + "/branch/" + companyId + "/company");
    };
    BranchService.prototype.createBranch = function (branch) {
        return this.httpClient.post(this.API_URL + "/branch/", branch);
    };
    BranchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BranchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BranchService);
    return BranchService;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CompanyService = /** @class */ (function () {
    function CompanyService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    CompanyService.prototype.getCompanies = function () {
        return this.httpClient.get(this.API_URL + "/company");
    };
    CompanyService.prototype.getCompanyById = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            this.currentUser = JSON.parse(localStorage.getItem('cu'));
            companyId = this.currentUser['companyId'];
        }
        return this.httpClient.get(this.API_URL + "/company/" + companyId);
    };
    CompanyService.prototype.createCompany = function (company) {
        return this.httpClient.post(this.API_URL + "/company/", company);
    };
    CompanyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/services/department.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/department.service.ts ***!
  \************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DepartmentService = /** @class */ (function () {
    function DepartmentService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    DepartmentService.prototype.getDepartments = function () {
        return this.httpClient.get(this.API_URL + "/department");
    };
    DepartmentService.prototype.createDepartment = function (department) {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        department['companyId'] = companyId;
        return this.httpClient.post(this.API_URL + "/department/", department);
    };
    DepartmentService.prototype.getCompanyDepartments = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        return this.httpClient.get(this.API_URL + "/department/" + companyId + "/company");
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DepartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/services/leave.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/leave.service.ts ***!
  \*******************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LeaveService = /** @class */ (function () {
    function LeaveService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.testUrl = 'https://peopleappapis.herokuapp.com/v1/';
    }
    LeaveService.prototype.createLeave = function (companyId, leaveForm) {
        return this.httpClient.post(this.testUrl + "leave/" + companyId, leaveForm);
    };
    LeaveService.prototype.getLeave = function (companyId) {
        return this.httpClient.get(this.testUrl + "leave/all/" + companyId);
    };
    LeaveService.prototype.updateLeave = function (companyId) {
        return this.httpClient.get(this.testUrl + "leave/all/staff/" + companyId);
    };
    LeaveService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LeaveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LeaveService);
    return LeaveService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.testUrl = 'https://peopleappapis.herokuapp.com/v1';
    }
    LoginService.prototype.doLogin = function (credentials) {
        return this.httpClient.post(this.testUrl + "/login", credentials);
    };
    LoginService.prototype.adminLogin = function (credentials) {
        return this.httpClient.post(this.testUrl + "/admin/login", credentials);
    };
    LoginService.prototype.companyLogin = function (credentials) {
        return this.httpClient.post(this.testUrl + "/company/", credentials);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var RegisterService = /** @class */ (function () {
    function RegisterService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.testUrl = 'https://peopleappapis.herokuapp.com/v1';
    }
    RegisterService.prototype.createAdmin = function (credentials) {
        return this.httpClient.post(this.testUrl + "/admin/register", credentials);
    };
    RegisterService.prototype.registerStaff = function (credentials) {
        return this.httpClient.post(this.testUrl + "/register", credentials);
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/staff.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/staff.service.ts ***!
  \*******************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var StaffService = /** @class */ (function () {
    function StaffService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.testUrl = 'https://peopleappapis.herokuapp.com/v1';
    }
    StaffService.prototype.getAllStaff = function () {
        return this.httpClient.get(this.testUrl + "/staff");
    };
    StaffService.prototype.createStaff = function (staff) {
        return this.httpClient.post(this.testUrl + "/staff/", staff);
    };
    StaffService.prototype.getCompanyStaff = function () {
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        return this.httpClient.get(this.testUrl + "/staff/" + companyId + "/company");
    };
    StaffService.prototype.getBranchStaff = function (branchId) {
        return this.httpClient.get(this.API_URL + "/staff/" + branchId + "/branch");
    };
    StaffService.prototype.submitCsv = function (companyId, csv) {
        return this.httpClient.post(this.testUrl + "/staff/file/" + companyId, csv);
    };
    StaffService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/shared/cmr-sidebar/cmr-sidebar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/cmr-sidebar/cmr-sidebar.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jbXItc2lkZWJhci9jbXItc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/cmr-sidebar/cmr-sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/cmr-sidebar/cmr-sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: CmrSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrSidebarComponent", function() { return CmrSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var CmrSidebarComponent = /** @class */ (function () {
    function CmrSidebarComponent() {
    }
    CmrSidebarComponent.prototype.ngOnInit = function () {
    };
    CmrSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmr-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cmr-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cmr-sidebar/cmr-sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cmr-sidebar.component.css */ "./src/app/shared/cmr-sidebar/cmr-sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CmrSidebarComponent);
    return CmrSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/top/top.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/top/top.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b3AvdG9wLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/top/top.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/top/top.component.ts ***!
  \*********************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TopComponent = /** @class */ (function () {
    function TopComponent(router) {
        this.router = router;
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent.prototype.logout = function () {
        localStorage.removeItem('cu');
        this.router.navigate(['/login']);
    };
    TopComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    TopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top',
            template: __importDefault(__webpack_require__(/*! raw-loader!./top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/top/top.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./top.component.css */ "./src/app/shared/top/top.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/staff-resolver.service.ts":
/*!*******************************************!*\
  !*** ./src/app/staff-resolver.service.ts ***!
  \*******************************************/
/*! exports provided: StaffResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffResolverService", function() { return StaffResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var StaffResolverService = /** @class */ (function () {
    function StaffResolverService(http) {
        this.http = http;
    }
    StaffResolverService.prototype.resolve = function (route, state) {
        return this.http.get('https://api.officepeopleapp.com/v1/branch').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    StaffResolverService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    StaffResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StaffResolverService);
    return StaffResolverService;
}());



/***/ }),

/***/ "./src/app/staff/Staff.ts":
/*!********************************!*\
  !*** ./src/app/staff/Staff.ts ***!
  \********************************/
/*! exports provided: Staff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staff", function() { return Staff; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Staff = /** @class */ (function () {
    function Staff() {
    }
    return Staff;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/staff.service */ "./src/app/services/staff.service.ts");
/* harmony import */ var _Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Staff */ "./src/app/staff/Staff.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm5/ngx-ui-loader.js");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var StaffComponent = /** @class */ (function () {
    function StaffComponent(branchService, companyService, staffService, ngxService, departmentService, actr, fb) {
        var _this = this;
        this.branchService = branchService;
        this.companyService = companyService;
        this.staffService = staffService;
        this.ngxService = ngxService;
        this.departmentService = departmentService;
        this.actr = actr;
        this.DOBstartDate = new Date(1990, 0, 1);
        this.DateJoinedStartDate = new Date(2000, 0, 1);
        this.branches = [];
        this.companies = [];
        this.departments = [];
        this.allStaff = [];
        this.staff = new _Staff__WEBPACK_IMPORTED_MODULE_4__["Staff"]();
        this.surname = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.genders = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]([{ 'gender': 'Male' }, { 'gender': 'Female' }], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.othernames = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.branchId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.phoneNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.staffId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.date_of_birth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.date_joined = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.line_manager_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.reporting_line_ids = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.department = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.form = fb.group({
            'surname': this.surname,
            'othernames': this.othernames,
            'branchId': this.branchId,
            'email': this.email,
            'phoneNo': this.phoneNo,
            'gender': this.genders,
            'staffId': this.staffId,
            'role': this.role,
            'date_of_birth': this.date_of_birth,
            'date_joined': this.date_joined,
            'line_manager_id': this.line_manager_id,
            'reporting_line_ids': this.reporting_line_ids,
            'department': this.department
        });
        // this.getBranches();
        // this.getCompanies();
        // this.getDepartments()
        // this.getStaff();
        this.actr.data.map(function (data) { return data.branches; }).subscribe(function (res) {
            console.log('Here I am => ', res);
            console.log(typeof res);
            _this.branches = res;
        });
    }
    // ngOnChanges(){
    //   //this.getBranches();
    //   this.getDepartments()
    //   this.getStaff();
    // }
    StaffComponent.prototype.ngOnInit = function () {
        // this.getBranches();
        // this.getDepartments()
        // this.getStaff();
        this.companyId = '';
        if (localStorage.getItem('cu')) {
            this.currentUser = JSON.parse(localStorage.getItem('cu'));
            this.companyId = this.currentUser['companyId'];
        }
    };
    StaffComponent.prototype.getBranches = function () {
        var _this = this;
        this.ngxService.start();
        this.branchService.getCompanyBranches().subscribe(function (data) {
            _this.branches = data;
            console.log('Branches => ', data);
            _this.ngxService.stop();
        });
    };
    StaffComponent.prototype.getCompanies = function () {
        var _this = this;
        this.ngxService.start();
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data;
            console.log(data);
            _this.ngxService.stop();
        });
    };
    StaffComponent.prototype.getStaff = function () {
        var _this = this;
        this.ngxService.start();
        this.staffService.getCompanyStaff().subscribe(function (data) {
            _this.allStaff = data;
            console.log(data);
            _this.ngxService.stop();
        });
    };
    StaffComponent.prototype.createStaff = function (form) {
        var _this = this;
        form = this.form;
        this.ngxService.start();
        console.log(form.value);
        this.staff = form.value;
        var companyId = '';
        if (localStorage.getItem('cu')) {
            companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
        }
        this.staff['companyId'] = companyId;
        this.staff['about'] = companyId;
        this.staffService.createStaff(this.staff).subscribe(function (response) {
            console.log(response);
            _this.staff = new _Staff__WEBPACK_IMPORTED_MODULE_4__["Staff"]();
            _this.getStaff();
            _this.ngxService.stop();
        });
    };
    StaffComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
        var files = new FormData();
        files.append('files', this.selectedFile, this.selectedFile.name);
        if (/\.(csv|xlsx)$/i.test(this.selectedFile.name) === false) {
            alert('please choose a file in CSV or Excel format!');
        }
        else {
            this.staffService.submitCsv(this.companyId, files).subscribe(function (csv) {
                if (csv) {
                    console.log('sent', csv);
                    alert('Staff Sheet sent to Database');
                }
                else {
                    alert('Data was not sent. Contact Office People Admin ');
                }
            });
        }
    };
    StaffComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getCompanyDepartments().subscribe(function (data) {
            _this.departments = data;
            console.log(data);
        });
    };
    StaffComponent.ctorParameters = function () { return [
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] },
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] },
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __importDefault(__webpack_require__(/*! raw-loader!./staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"],
            _services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    apiUrl: 'https://api.officepeopleapp.com/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chinedu/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map