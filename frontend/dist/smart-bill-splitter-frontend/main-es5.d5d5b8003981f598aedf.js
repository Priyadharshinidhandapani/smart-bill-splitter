(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\priya\Downloads\sbs\smart-bill-splitter\frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0z2C":
    /*!****************************************************!*\
      !*** ./src/app/components/home/home.component.css ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function z2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Home styles are handled by global styles.css */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSG9tZSBzdHlsZXMgYXJlIGhhbmRsZWQgYnkgZ2xvYmFsIHN0eWxlcy5jc3MgKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "1+D7":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/contact-management/contact-management.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ContactManagementComponent */

    /***/
    function D7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactManagementComponent", function () {
        return ContactManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact-management.component.html */
      "Q4ac");
      /* harmony import */


      var _contact_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-management.component.css */
      "Sutc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/contact.service */
      "3ITz");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/toast.service */
      "2g2N");

      var ContactManagementComponent = /*#__PURE__*/function () {
        function ContactManagementComponent(contactService, toast) {
          _classCallCheck(this, ContactManagementComponent);

          this.contactService = contactService;
          this.toast = toast;
          this.contacts = [];
          this.isLoading = false;
          this.searchTerm = '';
          this.showForm = false;
          this.editingId = null;
          this.formName = '';
          this.formPhone = '';
          this.isSaving = false; // Field-level validation error messages shown beneath the Name and
          // Phone Number inputs. Null means that field currently has no error.

          this.nameError = null;
          this.phoneError = null;
          this.confirmDeleteId = null;
        }

        return _createClass(ContactManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadContacts();
          }
        }, {
          key: "loadContacts",
          value: function loadContacts() {
            var _this = this;

            this.isLoading = true;
            this.contactService.getAll(this.searchTerm || undefined).subscribe({
              next: function next(contacts) {
                _this.contacts = contacts;
                _this.isLoading = false;
              },
              error: function error() {
                _this.isLoading = false;

                _this.toast.error('Could not load contacts. Is the backend running?');
              }
            });
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange() {
            this.loadContacts();
          }
        }, {
          key: "openAddForm",
          value: function openAddForm() {
            this.editingId = null;
            this.formName = '';
            this.formPhone = '';
            this.clearFieldErrors();
            this.showForm = true;
          }
        }, {
          key: "openEditForm",
          value: function openEditForm(contact) {
            this.editingId = contact.id;
            this.formName = contact.name;
            this.formPhone = contact.phone;
            this.clearFieldErrors();
            this.showForm = true;
          }
        }, {
          key: "cancelForm",
          value: function cancelForm() {
            this.showForm = false;
            this.editingId = null;
            this.clearFieldErrors();
          }
        }, {
          key: "clearFieldErrors",
          value: function clearFieldErrors() {
            this.nameError = null;
            this.phoneError = null;
          }
        }, {
          key: "onNameInput",
          value: function onNameInput() {
            if (this.nameError) {
              this.nameError = null;
            }
          }
        }, {
          key: "onPhoneInput",
          value: function onPhoneInput() {
            if (this.phoneError) {
              this.phoneError = null;
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this2 = this;

            var name = this.formName.trim();
            var phone = this.formPhone.trim();
            this.clearFieldErrors();
            var isNameEmpty = !name;
            var isPhoneEmpty = !phone; // Rule 4: both fields empty -> single combined message on both fields.

            if (isNameEmpty && isPhoneEmpty) {
              this.nameError = 'Please enter a valid full name and phone number.';
              this.phoneError = 'Please enter a valid full name and phone number.';
              return;
            } // Rule 1: full name missing.


            if (isNameEmpty) {
              this.nameError = 'Please enter the full name.';
            } // Rule 2 & 3: phone missing, or not exactly 10 digits.


            if (isPhoneEmpty) {
              this.phoneError = 'Please enter the phone number.';
            } else if (!/^\d{10}$/.test(phone)) {
              this.phoneError = 'Please enter a valid phone number.';
            } // Stop here if any validation error was set above (Rule 5: only
            // proceed to create/update the contact once all checks pass).


            if (this.nameError || this.phoneError) {
              return;
            }

            this.isSaving = true;

            if (this.editingId) {
              this.contactService.update(this.editingId, {
                name: name,
                phone: phone
              }).subscribe({
                next: function next(updated) {
                  _this2.isSaving = false;
                  _this2.contacts = _this2.contacts.map(function (c) {
                    return c.id === _this2.editingId ? updated : c;
                  });
                  _this2.showForm = false;

                  _this2.toast.success('Contact updated');
                },
                error: function error(err) {
                  var _a;

                  _this2.isSaving = false;

                  _this2.toast.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error) || 'Failed to update contact');
                }
              });
            } else {
              this.contactService.create({
                name: name,
                phone: phone
              }).subscribe({
                next: function next(created) {
                  _this2.isSaving = false;
                  _this2.contacts = [created].concat(_toConsumableArray(_this2.contacts));
                  _this2.showForm = false;

                  _this2.toast.success('Contact added');
                },
                error: function error(err) {
                  var _a;

                  _this2.isSaving = false;

                  _this2.toast.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error) || 'Failed to create contact');
                }
              });
            }
          }
        }, {
          key: "requestDelete",
          value: function requestDelete(id) {
            this.confirmDeleteId = id;
          }
        }, {
          key: "cancelDelete",
          value: function cancelDelete() {
            this.confirmDeleteId = null;
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(id) {
            var _this3 = this;

            this.contactService["delete"](id).subscribe({
              next: function next() {
                _this3.contacts = _this3.contacts.filter(function (c) {
                  return c.id !== id;
                });
                _this3.confirmDeleteId = null;

                _this3.toast.success('Contact deleted');
              },
              error: function error() {
                _this3.toast.error('Failed to delete contact');
              }
            });
          }
        }, {
          key: "formatDate",
          value: function formatDate(dateStr) {
            var d = new Date(dateStr.replace(' ', 'T') + 'Z');

            if (isNaN(d.getTime())) {
              return dateStr;
            }

            return d.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });
          }
        }]);
      }();

      ContactManagementComponent.ctorParameters = function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      ContactManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-management',
        template: _raw_loader_contact_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactManagementComponent);
      /***/
    },

    /***/
    "2g2N":
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function g2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // Lightweight global toast service used to surface success and error
      // notifications throughout the application without prop drilling.


      var ToastService = /*#__PURE__*/function () {
        function ToastService() {
          _classCallCheck(this, ToastService);

          this.nextId = 0;
          this.toastsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.toasts$ = this.toastsSubject.asObservable();
        }

        return _createClass(ToastService, [{
          key: "toasts",
          get: function get() {
            return this.toastsSubject.getValue();
          }
        }, {
          key: "success",
          value: function success(message) {
            this.show(message, 'success');
          }
        }, {
          key: "error",
          value: function error(message) {
            this.show(message, 'error');
          }
        }, {
          key: "dismiss",
          value: function dismiss(id) {
            var updated = this.toastsSubject.getValue().filter(function (t) {
              return t.id !== id;
            });
            this.toastsSubject.next(updated);
          }
        }, {
          key: "show",
          value: function show(message, type) {
            var _this4 = this;

            var id = this.nextId++;
            var current = this.toastsSubject.getValue();
            this.toastsSubject.next([].concat(_toConsumableArray(current), [{
              id: id,
              message: message,
              type: type
            }]));
            setTimeout(function () {
              return _this4.dismiss(id);
            }, 4000);
          }
        }]);
      }();

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "3ITz":
    /*!*********************************************!*\
      !*** ./src/app/services/contact.service.ts ***!
      \*********************************************/

    /*! exports provided: ContactService */

    /***/
    function ITz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-config */
      "GIuP"); // Handles all HTTP communication with the /contacts backend endpoints.


      var ContactService = /*#__PURE__*/function () {
        function ContactService(http) {
          _classCallCheck(this, ContactService);

          this.http = http;
          this.baseUrl = "".concat(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"], "/contacts");
        }

        return _createClass(ContactService, [{
          key: "getAll",
          value: function getAll(query) {
            var url = query ? "".concat(this.baseUrl, "?q=").concat(encodeURIComponent(query)) : this.baseUrl;
            return this.http.get(url);
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "create",
          value: function create(contact) {
            return this.http.post(this.baseUrl, contact);
          }
        }, {
          key: "update",
          value: function update(id, contact) {
            return this.http.put("".concat(this.baseUrl, "/").concat(id), contact);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id));
          }
        }]);
      }();

      ContactService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ContactService);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* App component styles are in global styles.css */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcCBjb21wb25lbnQgc3R5bGVzIGFyZSBpbiBnbG9iYWwgc3R5bGVzLmNzcyAqL1xuIl19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        apiBaseUrl: 'https://smart-bill-splitter-backend.onrender.com'
      };
      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "tXZI");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "0z2C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/contact.service */
      "3ITz");
      /* harmony import */


      var _services_bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/bill.service */
      "ZRiD");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/toast.service */
      "2g2N");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(contactService, billService, toast, router) {
          _classCallCheck(this, HomeComponent);

          this.contactService = contactService;
          this.billService = billService;
          this.toast = toast;
          this.router = router; // ----- Core bill state -----

          this.billAmount = null;
          this.splitMethod = 'contacts';
          this.isSaving = false; // ----- Contacts split state -----

          this.allContacts = [];
          this.selectedContactIds = new Set();
          this.showAddFriendsPanel = false;
          this.contactSearchTerm = '';
          this.newContactName = '';
          this.newContactPhone = '';
          this.isAddingContact = false;
          this.isLoadingContacts = false; // ----- Shares / Percentage split state -----

          this.rowIdCounter = 0;
          this.participantRows = [];
          this.showParticipantContactsPanel = false;
          this.participantSearchTerm = '';
          this.selectedParticipantContactIds = new Set(); // ----- Validation popup (modal) state -----

          this.showValidationModal = false;
          this.validationModalMessage = '';
        }

        return _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadContacts();
          } // ============================================================
          // Split method switching
          // ============================================================

        }, {
          key: "setSplitMethod",
          value: function setSplitMethod(method) {
            if (method === this.splitMethod) {
              return;
            }

            this.splitMethod = method; // Shares and Percentage share the same underlying participantRows array,
            // but each method should start from a clean slate when selected — names
            // or values entered under one method must never carry over to the other.

            this.participantRows = [];
            this.selectedParticipantContactIds = new Set();
            this.showParticipantContactsPanel = false;
            this.participantSearchTerm = '';
          } // ============================================================
          // CONTACTS SPLIT
          // ============================================================

        }, {
          key: "loadContacts",
          value: function loadContacts() {
            var _this5 = this;

            this.isLoadingContacts = true;
            this.contactService.getAll().subscribe({
              next: function next(contacts) {
                _this5.allContacts = contacts;
                _this5.isLoadingContacts = false;
              },
              error: function error() {
                _this5.isLoadingContacts = false;

                _this5.toast.error('Could not load contacts. Is the backend running?');
              }
            });
          }
        }, {
          key: "filteredContacts",
          get: function get() {
            var term = this.contactSearchTerm.trim().toLowerCase();

            if (!term) {
              return this.allContacts;
            }

            return this.allContacts.filter(function (c) {
              return c.name.toLowerCase().includes(term) || c.phone.includes(term);
            });
          }
        }, {
          key: "toggleAddFriendsPanel",
          value: function toggleAddFriendsPanel() {
            this.showAddFriendsPanel = !this.showAddFriendsPanel;
          }
        }, {
          key: "isContactSelected",
          value: function isContactSelected(id) {
            return this.selectedContactIds.has(id);
          }
        }, {
          key: "toggleContactSelection",
          value: function toggleContactSelection(id) {
            var current = new Set(this.selectedContactIds);

            if (current.has(id)) {
              current["delete"](id);
            } else {
              current.add(id);
            }

            this.selectedContactIds = current;
          }
        }, {
          key: "removeSelectedContact",
          value: function removeSelectedContact(id) {
            this.toggleContactSelection(id);
          }
        }, {
          key: "toggleParticipantContactsPanel",
          value: function toggleParticipantContactsPanel() {
            this.showParticipantContactsPanel = !this.showParticipantContactsPanel;
          }
        }, {
          key: "filteredParticipantContacts",
          get: function get() {
            var term = this.participantSearchTerm.trim().toLowerCase();

            if (!term) {
              return this.allContacts;
            }

            return this.allContacts.filter(function (c) {
              return c.name.toLowerCase().includes(term) || c.phone.includes(term);
            });
          }
        }, {
          key: "isParticipantSelected",
          value: function isParticipantSelected(id) {
            return this.selectedParticipantContactIds.has(id);
          }
        }, {
          key: "toggleParticipantSelection",
          value: function toggleParticipantSelection(contact) {
            var current = new Set(this.selectedParticipantContactIds);

            if (current.has(contact.id)) {
              current["delete"](contact.id);
              this.participantRows = this.participantRows.filter(function (row) {
                return row.name !== contact.name;
              });
            } else {
              current.add(contact.id);
              var alreadyExists = this.participantRows.some(function (row) {
                return row.name === contact.name;
              });

              if (!alreadyExists) {
                this.participantRows = [].concat(_toConsumableArray(this.participantRows), [{
                  tempId: this.rowIdCounter++,
                  name: contact.name,
                  value: null
                }]);
              }
            }

            this.selectedParticipantContactIds = current;
          }
        }, {
          key: "selectedContacts",
          get: function get() {
            var _this6 = this;

            return this.allContacts.filter(function (c) {
              return _this6.selectedContactIds.has(c.id);
            });
          }
        }, {
          key: "createNewContact",
          value: function createNewContact() {
            var _this7 = this;

            var name = this.newContactName.trim();
            var phone = this.newContactPhone.trim();

            if (!name) {
              this.toast.error('Contact name is required');
              return;
            }

            if (!phone) {
              this.toast.error('Phone number is required');
              return;
            }

            this.isAddingContact = true;
            this.contactService.create({
              name: name,
              phone: phone
            }).subscribe({
              next: function next(contact) {
                _this7.isAddingContact = false;
                _this7.allContacts = [contact].concat(_toConsumableArray(_this7.allContacts));

                _this7.toggleContactSelection(contact.id);

                if (_this7.splitMethod === 'shares' || _this7.splitMethod === 'percentage') {
                  _this7.selectedParticipantContactIds.add(contact.id);

                  _this7.participantRows = [].concat(_toConsumableArray(_this7.participantRows), [{
                    tempId: _this7.rowIdCounter++,
                    name: contact.name,
                    value: null
                  }]);
                }

                _this7.newContactName = '';
                _this7.newContactPhone = '';

                _this7.toast.success("".concat(contact.name, " added to contacts"));
              },
              error: function error(err) {
                var _a;

                _this7.isAddingContact = false;

                _this7.toast.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error) || 'Failed to create contact');
              }
            });
          }
        }, {
          key: "contactsSplitAmount",
          get: function get() {
            var count = this.selectedContacts.length;

            if (!this.billAmount || count === 0) {
              return 0;
            }

            return Math.round(this.billAmount / count * 100) / 100;
          } // ============================================================
          // SHARES / PERCENTAGE SPLIT
          // ============================================================

        }, {
          key: "addParticipantRow",
          value: function addParticipantRow() {
            this.participantRows = [].concat(_toConsumableArray(this.participantRows), [{
              tempId: this.rowIdCounter++,
              name: '',
              value: null
            }]);
          }
        }, {
          key: "removeParticipantRow",
          value: function removeParticipantRow(tempId) {
            this.participantRows = this.participantRows.filter(function (r) {
              return r.tempId !== tempId;
            });
          } // Used by *ngFor's trackBy so Angular matches each row to its existing
          // DOM node (and input element) by tempId, instead of destroying and
          // recreating every row's inputs whenever the rows array changes. Without
          // this, every keystroke in a Name/Shares/Percentage field would rebuild
          // all the input elements and kick focus out of the one being typed in.

        }, {
          key: "trackByTempId",
          value: function trackByTempId(_index, row) {
            return row.tempId;
          }
        }, {
          key: "updateRowName",
          value: function updateRowName(tempId, name) {
            var row = this.participantRows.find(function (r) {
              return r.tempId === tempId;
            });

            if (row) {
              row.name = name;
            }
          }
        }, {
          key: "updateRowValue",
          value: function updateRowValue(tempId, value) {
            var num = value === '' ? null : Number(value);
            var row = this.participantRows.find(function (r) {
              return r.tempId === tempId;
            });

            if (row) {
              row.value = num;
            }
          } // True when this row's Shares value has been entered but is negative.
          // Used to show "Please enter a valid share." beneath the offending row.

        }, {
          key: "isShareInvalid",
          value: function isShareInvalid(row) {
            return this.splitMethod === 'shares' && row.value !== null && row.value < 0;
          }
        }, {
          key: "totalShares",
          get: function get() {
            return this.participantRows.reduce(function (sum, r) {
              return sum + (r.value || 0);
            }, 0);
          }
        }, {
          key: "totalPercentage",
          get: function get() {
            return this.participantRows.reduce(function (sum, r) {
              return sum + (r.value || 0);
            }, 0);
          }
        }, {
          key: "percentageRemaining",
          get: function get() {
            return Math.round((100 - this.totalPercentage) * 100) / 100;
          }
        }, {
          key: "amountForRow",
          value: function amountForRow(row) {
            if (!this.billAmount || !row.value) {
              return 0;
            }

            if (this.splitMethod === 'shares') {
              if (this.totalShares <= 0) {
                return 0;
              }

              return Math.round(row.value / this.totalShares * this.billAmount * 100) / 100;
            }

            if (this.splitMethod === 'percentage') {
              return Math.round(row.value / 100 * this.billAmount * 100) / 100;
            }

            return 0;
          } // ============================================================
          // VALIDATION
          // ============================================================

        }, {
          key: "validationError",
          get: function get() {
            if (!this.billAmount || this.billAmount <= 0) {
              return 'Enter a bill amount greater than zero';
            }

            if (this.splitMethod === 'contacts') {
              if (this.selectedContacts.length === 0) {
                return 'Select at least one contact to split with';
              }
            }

            if (this.splitMethod === 'shares') {
              var rows = this.participantRows;

              if (rows.length === 0) {
                return 'Add at least one participant';
              }

              var _iterator = _createForOfIteratorHelper(rows),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var r = _step.value;

                  if (!r.name.trim()) {
                    return 'Every participant needs a name';
                  }

                  if (r.value === null) {
                    return 'Please enter a valid share.';
                  }

                  if (r.value < 0) {
                    return 'Please enter a valid share.';
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (this.totalShares <= 0) {
                return 'Please enter a valid share.';
              }
            }

            if (this.splitMethod === 'percentage') {
              var _rows = this.participantRows;

              if (_rows.length === 0) {
                return 'Add at least one participant';
              }

              var _iterator2 = _createForOfIteratorHelper(_rows),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _r = _step2.value;

                  if (!_r.name.trim()) {
                    return 'Every participant needs a name';
                  }

                  if (_r.value === null || _r.value < 0) {
                    return 'Percentage cannot be negative';
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (this.isPercentageMismatch) {
                return 'Total percentage must equal 100%.';
              }
            }

            return null;
          } // True once every row has a name and a non-negative percentage, but the
          // rows don't add up to exactly 100%. Used to trigger the popup validation
          // message specifically for the "total must equal 100%" rule.

        }, {
          key: "isPercentageMismatch",
          get: function get() {
            if (this.splitMethod !== 'percentage') {
              return false;
            }

            var rows = this.participantRows;

            if (rows.length === 0) {
              return false;
            }

            var _iterator3 = _createForOfIteratorHelper(rows),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var r = _step3.value;

                if (!r.name.trim() || r.value === null || r.value < 0) {
                  return false;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return Math.abs(this.totalPercentage - 100) > 0.01;
          } // ============================================================
          // SAVE
          // ============================================================

        }, {
          key: "saveBill",
          value: function saveBill() {
            var _this8 = this;

            if (this.isPercentageMismatch) {
              this.validationModalMessage = "Total percentage must equal 100%. It is currently ".concat(this.totalPercentage.toFixed(2), "%. ") + "Please adjust the percentages so they add up to exactly 100% before saving.";
              this.showValidationModal = true;
              return;
            }

            var error = this.validationError;

            if (error) {
              this.toast.error(error);
              return;
            }

            var participants = [];

            if (this.splitMethod === 'contacts') {
              participants = this.selectedContacts.map(function (c) {
                return {
                  participant_name: c.name,
                  phone: c.phone
                };
              });
            } else if (this.splitMethod === 'shares') {
              participants = this.participantRows.map(function (r) {
                return {
                  participant_name: r.name.trim(),
                  shares: r.value
                };
              });
            } else {
              participants = this.participantRows.map(function (r) {
                return {
                  participant_name: r.name.trim(),
                  percentage: r.value
                };
              });
            }

            this.isSaving = true;
            this.billService.create({
              bill_amount: this.billAmount,
              split_method: this.splitMethod,
              participants: participants
            }).subscribe({
              next: function next(bill) {
                _this8.isSaving = false;

                _this8.toast.success('Bill saved successfully');

                _this8.router.navigate(['/history', bill.id]);
              },
              error: function error(err) {
                var _a;

                _this8.isSaving = false;

                _this8.toast.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error) || 'Failed to save bill');
              }
            });
          }
        }, {
          key: "closeValidationModal",
          value: function closeValidationModal() {
            this.showValidationModal = false;
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.billAmount = null;
            this.selectedContactIds = new Set();
            this.participantRows = [];
            this.selectedParticipantContactIds = new Set();
            this.showValidationModal = false;
          }
        }]);
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"]
        }, {
          type: _services_bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "ChNy":
    /*!******************************************************************!*\
      !*** ./src/app/components/bill-detail/bill-detail.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function ChNy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Bill detail styles are handled by global styles.css */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEIiwiZmlsZSI6ImJpbGwtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCaWxsIGRldGFpbCBzdHlsZXMgYXJlIGhhbmRsZWQgYnkgZ2xvYmFsIHN0eWxlcy5jc3MgKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "E8lZ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E8lZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-container\">\n\n  <div class=\"card auth-card\">\n\n    <h1>Create Account</h1>\n\n    <input\n      type=\"text\"\n      placeholder=\"Full Name\"\n      [(ngModel)]=\"name\">\n\n    <input\n      type=\"email\"\n      placeholder=\"Email\"\n      [(ngModel)]=\"email\">\n\n    <input\n      type=\"password\"\n      placeholder=\"Password\"\n      [(ngModel)]=\"password\">\n\n    <button\n      class=\"btn btn-primary\"\n      (click)=\"register()\"\n      [disabled]=\"isLoading\">\n\n      {{ isLoading ? 'Creating...' : 'Register' }}\n\n    </button>\n\n    <p>\n      Already have an account?\n      <a routerLink=\"/login\">Login</a>\n    </p>\n\n  </div>\n\n</div>";
      /***/
    },

    /***/
    "GIuP":
    /*!****************************************!*\
      !*** ./src/app/services/api-config.ts ***!
      \****************************************/

    /*! exports provided: API_BASE_URL */

    /***/
    function GIuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function () {
        return API_BASE_URL;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var API_BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl;
      /***/
    },

    /***/
    "O5bD":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function O5bD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-container\">\n\n  <div class=\"card auth-card\">\n\n    <h1>Login</h1>\n\n    <input\n      type=\"email\"\n      placeholder=\"Email\"\n      [(ngModel)]=\"email\">\n\n    <input\n      type=\"password\"\n      placeholder=\"Password\"\n      [(ngModel)]=\"password\">\n\n    <button\n      class=\"btn btn-primary\"\n      (click)=\"login()\"\n      [disabled]=\"isLoading\">\n\n      {{ isLoading ? 'Logging in...' : 'Login' }}\n\n    </button>\n\n    <p>\n      Don't have an account?\n      <a routerLink=\"/register\">Register</a>\n    </p>\n\n  </div>\n\n</div>";
      /***/
    },

    /***/
    "Q4ac":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-management/contact-management.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q4ac(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-container\">\n  <div class=\"header-row\">\n    <div>\n      <h1 class=\"page-title\">Contacts</h1>\n      <p class=\"page-subtitle\">People you split bills with regularly.</p>\n    </div>\n    <button class=\"btn btn-primary btn-sm\" (click)=\"openAddForm()\">+ Add Contact</button>\n  </div>\n\n  <!-- Add / Edit Form -->\n  <div class=\"card form-card\" *ngIf=\"showForm\">\n    <h3 class=\"form-title\">{{ editingId ? 'Edit Contact' : 'New Contact' }}</h3>\n    <div class=\"field\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"formName\"\n        (ngModelChange)=\"onNameInput()\"\n        placeholder=\"Full name\"\n        name=\"formName\"\n        [class.input-invalid]=\"nameError\"\n      />\n      <p class=\"field-error\" *ngIf=\"nameError\">{{ nameError }}</p>\n    </div>\n    <div class=\"field\">\n      <label>Phone Number</label>\n      <input\n        type=\"tel\"\n        [(ngModel)]=\"formPhone\"\n        (ngModelChange)=\"onPhoneInput()\"\n        placeholder=\"Phone number\"\n        name=\"formPhone\"\n        [class.input-invalid]=\"phoneError\"\n      />\n      <p class=\"field-error\" *ngIf=\"phoneError\">{{ phoneError }}</p>\n    </div>\n    <div class=\"form-actions\">\n      <button class=\"btn btn-ghost\" (click)=\"cancelForm()\">Cancel</button>\n      <button class=\"btn btn-primary\" (click)=\"submitForm()\" [disabled]=\"isSaving\">\n        <span class=\"spinner\" *ngIf=\"isSaving\"></span>\n        <span *ngIf=\"isSaving\">Saving…</span>\n        <span *ngIf=\"!isSaving\">Save Contact</span>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"controls-row\">\n    <input\n      type=\"text\"\n      placeholder=\"Search by name or phone\"\n      [(ngModel)]=\"searchTerm\"\n      (ngModelChange)=\"onSearchChange()\"\n      class=\"search-input\"\n      name=\"searchTerm\"\n    />\n  </div>\n\n  <div class=\"loading-row\" *ngIf=\"isLoading\">\n    <span class=\"spinner spinner-dark\"></span> Loading contacts…\n  </div>\n\n  <div class=\"empty-state\" *ngIf=\"!isLoading && contacts.length === 0\">\n    <h3>No Contacts Yet</h3>\n    <p>Add a contact to reuse them across future bill splits.</p>\n  </div>\n\n  <div class=\"card\" *ngIf=\"!isLoading && contacts.length > 0\">\n    <div class=\"table-wrap\">\n      <table class=\"data-table\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Phone</th>\n            <th>Added</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let c of contacts\">\n            <td data-label=\"Name\">{{ c.name }}</td>\n            <td data-label=\"Phone\">{{ c.phone }}</td>\n            <td data-label=\"Added\">{{ formatDate(c.created_at) }}</td>\n            <td data-label=\"Actions\">\n              <div class=\"row-actions\" *ngIf=\"confirmDeleteId === c.id\">\n                <button class=\"btn btn-ghost btn-sm\" (click)=\"cancelDelete()\">Cancel</button>\n                <button class=\"btn btn-danger btn-sm\" (click)=\"confirmDelete(c.id)\">Confirm</button>\n              </div>\n              <div class=\"row-actions\" *ngIf=\"confirmDeleteId !== c.id\">\n                <button class=\"btn btn-ghost btn-sm\" (click)=\"openEditForm(c)\">Edit</button>\n                <button class=\"btn btn-danger btn-sm\" (click)=\"requestDelete(c.id)\">Delete</button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "RDNO":
    /*!**************************************************!*\
      !*** ./src/app/interceptors/auth.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function RDNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        return _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = localStorage.getItem('token'); // Don't attach token for login/register requests

            if (!token || req.url.includes('/auth/login') || req.url.includes('/auth/register')) {
              return next.handle(req);
            }

            var clonedReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
            return next.handle(clonedReq);
          }
        }]);
      }();

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "Sutc":
    /*!********************************************************************************!*\
      !*** ./src/app/components/contact-management/contact-management.component.css ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Sutc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Contact management styles are handled by global styles.css */\n\n/* Highlights an input that has a validation error (paired with the\n   shared .field-error message rendered just beneath it). */\n\n.input-invalid {\n  border-color: var(--neon-pink) !important;\n  box-shadow: 0 0 8px rgba(255, 0, 127, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDs7QUFFL0Q7MkRBQzJEOztBQUMzRDtFQUNFLHlDQUF5QztFQUN6QywyQ0FBMkM7QUFDN0MiLCJmaWxlIjoiY29udGFjdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb250YWN0IG1hbmFnZW1lbnQgc3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGdsb2JhbCBzdHlsZXMuY3NzICovXG5cbi8qIEhpZ2hsaWdodHMgYW4gaW5wdXQgdGhhdCBoYXMgYSB2YWxpZGF0aW9uIGVycm9yIChwYWlyZWQgd2l0aCB0aGVcbiAgIHNoYXJlZCAuZmllbGQtZXJyb3IgbWVzc2FnZSByZW5kZXJlZCBqdXN0IGJlbmVhdGggaXQpLiAqL1xuLmlucHV0LWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tcGluaykgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDI1NSwgMCwgMTI3LCAwLjI1KTtcbn0iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/toast.service */
      "2g2N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(toastService) {
          _classCallCheck(this, AppComponent);

          this.toastService = toastService;
          this.toasts = [];
        }

        return _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.toastService.toasts$.subscribe(function (toasts) {
              _this9.toasts = toasts;
            });
          }
        }]);
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-shell\">\n  <header class=\"top-nav\">\n    <div class=\"nav-inner\">\n      <a routerLink=\"/\" class=\"brand\">\n        <span class=\"brand-mark\">S</span>\n        <span class=\"brand-name\">Smart Bill Splitter</span>\n      </a>\n      <nav class=\"nav-links\">\n        <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">New Split</a>\n        <a routerLink=\"/history\" routerLinkActive=\"active\">History</a>\n        <a routerLink=\"/contacts\" routerLinkActive=\"active\">Contacts</a>\n      </nav>\n    </div>\n  </header>\n\n  <main class=\"main-content\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <!-- Global toast notifications -->\n  <div class=\"toast-wrap\">\n    <div\n      *ngFor=\"let toast of toasts\"\n      class=\"toast\"\n      [class.toast-success]=\"toast.type === 'success'\"\n      [class.toast-error]=\"toast.type === 'error'\"\n    >\n      <span>{{ toast.type === 'success' ? '✓' : '!' }}</span>\n      <span>{{ toast.message }}</span>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "O5bD");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "mDuy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/toast.service */
      "2g2N");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, router, toast) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.router = router;
          this.toast = toast;
          this.email = '';
          this.password = '';
          this.isLoading = false;
        }

        return _createClass(LoginComponent, [{
          key: "login",
          value: function login() {
            var _this0 = this;

            if (!this.email || !this.password) {
              this.toast.error('Please fill all fields');
              return;
            }

            this.isLoading = true;
            this.authService.login({
              email: this.email,
              password: this.password
            }).subscribe({
              next: function next(response) {
                _this0.isLoading = false; // Save JWT token

                _this0.authService.saveToken(response.token); // Optional: Save user info


                localStorage.setItem('user', JSON.stringify(response.user));

                _this0.toast.success('Login successful');

                _this0.router.navigate(['/']);
              },
              error: function error(err) {
                var _a;

                _this0.isLoading = false;

                _this0.toast.error(((_a = err.error) === null || _a === void 0 ? void 0 : _a.error) || 'Login failed');
              }
            });
          }
        }]);
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "XC3f":
    /*!***********************************************************!*\
      !*** ./src/app/components/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XC3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "E8lZ");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "woRh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/toast.service */
      "2g2N");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authService, router, toast) {
          _classCallCheck(this, RegisterComponent);

          this.authService = authService;
          this.router = router;
          this.toast = toast;
          this.name = '';
          this.email = '';
          this.password = '';
          this.isLoading = false;
        }

        return _createClass(RegisterComponent, [{
          key: "register",
          value: function register() {
            var _this1 = this;

            if (!this.name || !this.email || !this.password) {
              this.toast.error('Please fill all fields');
              return;
            }

            this.isLoading = true;
            this.authService.register({
              name: this.name,
              email: this.email,
              password: this.password
            }).subscribe({
              next: function next() {
                _this1.isLoading = false;

                _this1.toast.success('Registration successful');

                _this1.router.navigate(['/login']);
              },
              error: function error(err) {
                var _a;

                _this1.isLoading = false;

                _this1.toast.error(((_a = err.error) === null || _a === void 0 ? void 0 : _a.error) || 'Registration failed');
              }
            });
          }
        }]);
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/bill-history/bill-history.component */
      "jCgZ");
      /* harmony import */


      var _components_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/bill-detail/bill-detail.component */
      "fgnb");
      /* harmony import */


      var _components_contact_management_contact_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/contact-management/contact-management.component */
      "1+D7");
      /* harmony import */


      var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./interceptors/auth.interceptor */
      "RDNO");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_8__["BillHistoryComponent"], _components_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__["BillDetailComponent"], _components_contact_management_contact_management_component__WEBPACK_IMPORTED_MODULE_10__["ContactManagementComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZRiD":
    /*!******************************************!*\
      !*** ./src/app/services/bill.service.ts ***!
      \******************************************/

    /*! exports provided: BillService */

    /***/
    function ZRiD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillService", function () {
        return BillService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-config */
      "GIuP"); // Handles all HTTP communication with the /bills backend endpoints.


      var BillService = /*#__PURE__*/function () {
        function BillService(http) {
          _classCallCheck(this, BillService);

          this.http = http;
          this.baseUrl = "".concat(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"], "/bills");
        }

        return _createClass(BillService, [{
          key: "getAll",
          value: function getAll(query) {
            var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
            var params = new URLSearchParams();

            if (query) {
              params.set('q', query);
            }

            params.set('sort', sort);
            return this.http.get("".concat(this.baseUrl, "?").concat(params.toString()));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "create",
          value: function create(payload) {
            return this.http.post(this.baseUrl, payload);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id));
          }
        }]);
      }();

      BillService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      BillService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BillService);
      /***/
    },

    /***/
    "em8q":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill-detail/bill-detail.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function em8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-container\">\n  <a routerLink=\"/history\" class=\"back-link\">← Back to History</a>\n\n  <div class=\"loading-row\" *ngIf=\"isLoading\">\n    <span class=\"spinner spinner-dark\"></span>\n    Loading bill...\n  </div>\n\n  <div class=\"empty-state\" *ngIf=\"!isLoading && notFound\">\n    <h3>Bill Not Found</h3>\n    <p>It may have been deleted.</p>\n  </div>\n\n  <div class=\"card detail-card\" *ngIf=\"!isLoading && !notFound && bill\">\n\n    <div class=\"detail-header\">\n      <div>\n        <span class=\"money figure detail-amount\">\n          ₹{{ (+bill.bill_amount).toFixed(2) }}\n        </span>\n\n        <p class=\"detail-date\">\n          {{ formatDate(bill.created_at) }}\n        </p>\n      </div>\n\n      <span\n        class=\"badge\"\n        [ngClass]=\"'badge-' + bill.split_method\">\n        {{ bill.split_method }}\n      </span>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <h3 class=\"participants-heading\">Participants</h3>\n\n    <div class=\"table-wrap\">\n      <table class=\"data-table\">\n\n        <thead>\n          <tr>\n            <th>Name</th>\n\n            <th *ngIf=\"bill.split_method === 'shares'\">\n              Shares\n            </th>\n\n            <th *ngIf=\"bill.split_method === 'percentage'\">\n              Percentage\n            </th>\n\n            <th>Amount</th>\n          </tr>\n        </thead>\n\n        <tbody>\n\n          <tr *ngFor=\"let p of bill.participants\">\n\n            <td data-label=\"Name\">\n              {{ p.participant_name }}\n            </td>\n\n            <td\n              *ngIf=\"bill.split_method === 'shares'\"\n              data-label=\"Shares\"\n              class=\"figure\">\n              {{ p.shares }}\n            </td>\n\n            <td\n              *ngIf=\"bill.split_method === 'percentage'\"\n              data-label=\"Percentage\"\n              class=\"figure\">\n              {{ p.percentage }}%\n            </td>\n\n            <td\n              data-label=\"Amount\"\n              class=\"money figure\">\n              ₹{{ (+p.amount).toFixed(2) }}\n            </td>\n\n          </tr>\n\n        </tbody>\n\n      </table>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"confirm-row\" *ngIf=\"showConfirmDelete\">\n      <span>Delete this bill permanently?</span>\n\n      <button\n        class=\"btn btn-ghost btn-sm\"\n        (click)=\"showConfirmDelete = false\">\n        Cancel\n      </button>\n\n      <button\n        class=\"btn btn-danger btn-sm\"\n        (click)=\"deleteBill()\">\n        Delete\n      </button>\n    </div>\n\n    <button\n      class=\"btn btn-danger\"\n      *ngIf=\"!showConfirmDelete\"\n      (click)=\"showConfirmDelete = true\">\n      Delete Bill\n    </button>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "fgnb":
    /*!*****************************************************************!*\
      !*** ./src/app/components/bill-detail/bill-detail.component.ts ***!
      \*****************************************************************/

    /*! exports provided: BillDetailComponent */

    /***/
    function fgnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillDetailComponent", function () {
        return BillDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bill_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bill-detail.component.html */
      "em8q");
      /* harmony import */


      var _bill_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bill-detail.component.css */
      "ChNy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/bill.service */
      "ZRiD");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/toast.service */
      "2g2N");

      var BillDetailComponent = /*#__PURE__*/function () {
        function BillDetailComponent(route, router, billService, toast) {
          _classCallCheck(this, BillDetailComponent);

          this.route = route;
          this.router = router;
          this.billService = billService;
          this.toast = toast;
          this.bill = null;
          this.isLoading = true;
          this.notFound = false;
          this.showConfirmDelete = false;
        }

        return _createClass(BillDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            var id = Number(this.route.snapshot.paramMap.get('id'));

            if (!id) {
              this.notFound = true;
              this.isLoading = false;
              return;
            }

            this.billService.getById(id).subscribe({
              next: function next(bill) {
                bill.bill_amount = Number(bill.bill_amount);

                if (bill.participants && Array.isArray(bill.participants)) {
                  bill.participants = bill.participants.map(function (p) {
                    return Object.assign(Object.assign({}, p), {
                      amount: Number(p.amount),
                      shares: p.shares ? Number(p.shares) : null,
                      percentage: p.percentage ? Number(p.percentage) : null
                    });
                  });
                }

                _this10.bill = bill;
                _this10.isLoading = false;
              },
              error: function error(err) {
                console.error(err);
                _this10.notFound = true;
                _this10.isLoading = false;
              }
            });
          }
        }, {
          key: "deleteBill",
          value: function deleteBill() {
            var _this11 = this;

            if (!this.bill) {
              return;
            }

            this.billService["delete"](this.bill.id).subscribe({
              next: function next() {
                _this11.toast.success('Bill deleted');

                _this11.router.navigate(['/history']);
              },
              error: function error() {
                _this11.toast.error('Failed to delete bill');
              }
            });
          }
        }, {
          key: "formatDate",
          value: function formatDate(dateStr) {
            var d = new Date(dateStr);

            if (isNaN(d.getTime())) {
              return dateStr;
            }

            return d.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });
          }
        }]);
      }();

      BillDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_bill_service__WEBPACK_IMPORTED_MODULE_5__["BillService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      BillDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bill-detail',
        template: _raw_loader_bill_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bill_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BillDetailComponent);
      /***/
    },

    /***/
    "jCgZ":
    /*!*******************************************************************!*\
      !*** ./src/app/components/bill-history/bill-history.component.ts ***!
      \*******************************************************************/

    /*! exports provided: BillHistoryComponent */

    /***/
    function jCgZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillHistoryComponent", function () {
        return BillHistoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bill_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bill-history.component.html */
      "rSd8");
      /* harmony import */


      var _bill_history_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bill-history.component.css */
      "p+Tr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/bill.service */
      "ZRiD");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/toast.service */
      "2g2N");

      var BillHistoryComponent = /*#__PURE__*/function () {
        function BillHistoryComponent(billService, toast) {
          _classCallCheck(this, BillHistoryComponent);

          this.billService = billService;
          this.toast = toast;
          this.bills = [];
          this.isLoading = false;
          this.searchTerm = '';
          this.sortOrder = 'desc';
          this.confirmDeleteId = null;
        }

        return _createClass(BillHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadBills();
          }
        }, {
          key: "loadBills",
          value: function loadBills() {
            var _this12 = this;

            this.isLoading = true;
            this.billService.getAll(this.searchTerm || undefined, this.sortOrder).subscribe({
              next: function next(bills) {
                _this12.bills = bills;
                _this12.isLoading = false;
              },
              error: function error() {
                _this12.isLoading = false;

                _this12.toast.error('Could not load bill history. Is the backend running?');
              }
            });
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange() {
            this.loadBills();
          }
        }, {
          key: "toggleSort",
          value: function toggleSort() {
            this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
            this.loadBills();
          }
        }, {
          key: "requestDelete",
          value: function requestDelete(id) {
            this.confirmDeleteId = id;
          }
        }, {
          key: "cancelDelete",
          value: function cancelDelete() {
            this.confirmDeleteId = null;
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(id) {
            var _this13 = this;

            this.billService["delete"](id).subscribe({
              next: function next() {
                _this13.bills = _this13.bills.filter(function (b) {
                  return b.id !== id;
                });
                _this13.confirmDeleteId = null;

                _this13.toast.success('Bill deleted');
              },
              error: function error() {
                _this13.toast.error('Failed to delete bill');
              }
            });
          }
        }, {
          key: "participantNames",
          value: function participantNames(bill) {
            return bill.participants.map(function (p) {
              return p.participant_name;
            }).join(', ');
          }
        }, {
          key: "formatDate",
          value: function formatDate(dateStr) {
            var d = new Date(dateStr.replace(' ', 'T') + 'Z');

            if (isNaN(d.getTime())) {
              return dateStr;
            }

            return d.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });
          }
        }]);
      }();

      BillHistoryComponent.ctorParameters = function () {
        return [{
          type: _services_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      BillHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bill-history',
        template: _raw_loader_bill_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bill_history_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BillHistoryComponent);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-config */
      "GIuP");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.baseUrl = "".concat(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"], "/auth");
        }

        return _createClass(AuthService, [{
          key: "register",
          value: function register(user) {
            return this.http.post("".concat(this.baseUrl, "/register"), user);
          }
        }, {
          key: "login",
          value: function login(credentials) {
            return this.http.post("".concat(this.baseUrl, "/login"), credentials);
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            localStorage.setItem('token', token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.getToken();
          }
        }]);
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "mDuy":
    /*!******************************************************!*\
      !*** ./src/app/components/login/login.component.css ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function mDuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-container{\r\n  display:flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n  min-height:80vh;\r\n}\r\n\r\n.auth-card{\r\n  width:400px;\r\n  padding:30px;\r\n  display:flex;\r\n  flex-direction:column;\r\n  gap:15px;\r\n}\r\n\r\ninput{\r\n  padding:12px;\r\n  border:1px solid #444;\r\n  border-radius:8px;\r\n  background:transparent;\r\n  color:white;\r\n}\r\n\r\nbutton{\r\n  padding:12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgbWluLWhlaWdodDo4MHZoO1xyXG59XHJcblxyXG4uYXV0aC1jYXJke1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIHBhZGRpbmc6MzBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIGdhcDoxNXB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBwYWRkaW5nOjEycHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjNDQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBwYWRkaW5nOjEycHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "p+Tr":
    /*!********************************************************************!*\
      !*** ./src/app/components/bill-history/bill-history.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function pTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Bill history styles are handled by global styles.css */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RCIsImZpbGUiOiJiaWxsLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJpbGwgaGlzdG9yeSBzdHlsZXMgYXJlIGhhbmRsZWQgYnkgZ2xvYmFsIHN0eWxlcy5jc3MgKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "rSd8":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill-history/bill-history.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rSd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-container\">\n  <div class=\"header-row\">\n    <div>\n      <h1 class=\"page-title\">Bill History</h1>\n      <p class=\"page-subtitle\">Every split you've saved, all in one place.</p>\n    </div>\n  </div>\n\n  <div class=\"controls-row\">\n    <input\n      type=\"text\"\n      placeholder=\"Search by participant, method, or amount\"\n      [(ngModel)]=\"searchTerm\"\n      (ngModelChange)=\"onSearchChange()\"\n      class=\"search-input\"\n    />\n    <button class=\"btn btn-ghost btn-sm\" (click)=\"toggleSort()\">\n      Date {{ sortOrder === 'desc' ? '↓' : '↑' }}\n    </button>\n  </div>\n\n  <div class=\"loading-row\" *ngIf=\"isLoading\">\n    <span class=\"spinner spinner-dark\"></span> Loading bills…\n  </div>\n\n  <div class=\"empty-state\" *ngIf=\"!isLoading && bills.length === 0\">\n    <h3>No Bills Yet</h3>\n    <p>Save your first split and it'll show up here.</p>\n    <a routerLink=\"/\" class=\"btn btn-primary\" style=\"margin-top: 16px; display: inline-flex;\">Split a Bill</a>\n  </div>\n\n  <div class=\"bill-list\" *ngIf=\"!isLoading && bills.length > 0\">\n    <div class=\"card bill-card\" *ngFor=\"let bill of bills\">\n      <a [routerLink]=\"['/history', bill.id]\" class=\"bill-card-main\">\n        <div class=\"bill-card-top\">\n          <span class=\"money figure bill-amount\">₹{{ (+bill.bill_amount).toFixed(2) }}</span>\n          <span class=\"badge\" [ngClass]=\"'badge-' + bill.split_method\">{{ bill.split_method }}</span>\n        </div>\n        <p class=\"bill-participants\">{{ participantNames(bill) }}</p>\n        <p class=\"bill-date\">{{ formatDate(bill.created_at) }}</p>\n      </a>\n\n      <div class=\"confirm-delete-row\" *ngIf=\"confirmDeleteId === bill.id\">\n        <span>Delete this bill?</span>\n        <button class=\"btn btn-ghost btn-sm\" (click)=\"cancelDelete()\">Cancel</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"confirmDelete(bill.id)\">Delete</button>\n      </div>\n\n      <button class=\"delete-trigger\" *ngIf=\"confirmDeleteId !== bill.id\" (click)=\"requestDelete(bill.id)\" aria-label=\"Delete bill\">🗑</button>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "tXZI":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function tXZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-container\">\n  <h1 class=\"page-title\">Split a Bill</h1>\n  <p class=\"page-subtitle\">Enter the total, pick a method, and we'll do the math.</p>\n\n  <!-- Bill amount -->\n  <div class=\"card amount-card\">\n    <label for=\"billAmount\" class=\"amount-label\">Total Bill Amount</label>\n    <div class=\"amount-input-wrap\">\n      <span class=\"currency-symbol\">₹</span>\n      <input\n        id=\"billAmount\"\n        type=\"number\"\n        class=\"amount-input\"\n        placeholder=\"0.00\"\n        min=\"0\"\n        step=\"0.01\"\n        [(ngModel)]=\"billAmount\"\n        name=\"billAmount\"\n      />\n    </div>\n  </div>\n\n  <!-- Split method tabs -->\n  <div class=\"method-tabs\">\n    <button\n      class=\"method-tab\"\n      [class.active]=\"splitMethod === 'contacts'\"\n      (click)=\"setSplitMethod('contacts')\"\n    >\n      Contacts\n    </button>\n    <button\n      class=\"method-tab\"\n      [class.active]=\"splitMethod === 'shares'\"\n      (click)=\"setSplitMethod('shares')\"\n    >\n      Shares\n    </button>\n    <button\n      class=\"method-tab\"\n      [class.active]=\"splitMethod === 'percentage'\"\n      (click)=\"setSplitMethod('percentage')\"\n    >\n      Percentage\n    </button>\n  </div>\n\n  <!-- ===================== CONTACTS SPLIT ===================== -->\n  <div class=\"card\" *ngIf=\"splitMethod === 'contacts'\">\n    <div class=\"section-header\">\n      <h3>Split With</h3>\n      <button class=\"btn btn-secondary btn-sm\" (click)=\"toggleAddFriendsPanel()\">\n        {{ showAddFriendsPanel ? '— Close' : '+ Add Friends' }}\n      </button>\n    </div>\n\n    <div class=\"empty-state-inline\" *ngIf=\"selectedContacts.length === 0\">\n      No one selected yet. Tap \"Add Friends\" to choose contacts.\n    </div>\n\n    <div class=\"chip-list\" *ngIf=\"selectedContacts.length > 0\">\n      <span class=\"chip\" *ngFor=\"let c of selectedContacts\">\n        {{ c.name }}\n        <button class=\"chip-remove\" (click)=\"removeSelectedContact(c.id)\" aria-label=\"Remove\">×</button>\n      </span>\n    </div>\n\n    <div class=\"add-friends-panel\" *ngIf=\"showAddFriendsPanel\">\n      <div class=\"field\">\n        <label>Search Contacts</label>\n        <input type=\"text\" placeholder=\"Search by name or phone\" [(ngModel)]=\"contactSearchTerm\" name=\"contactSearch\" />\n      </div>\n\n      <div class=\"loading-row\" *ngIf=\"isLoadingContacts\">\n        <span class=\"spinner spinner-dark\"></span> Loading contacts…\n      </div>\n\n      <p class=\"empty-state-inline\" *ngIf=\"!isLoadingContacts && filteredContacts.length === 0\">\n        No contacts found.\n      </p>\n\n      <div class=\"contact-pick-list\" *ngIf=\"!isLoadingContacts && filteredContacts.length > 0\">\n        <label class=\"contact-pick-row\" *ngFor=\"let c of filteredContacts\">\n          <input\n            type=\"checkbox\"\n            [checked]=\"isContactSelected(c.id)\"\n            (change)=\"toggleContactSelection(c.id)\"\n          />\n          <span class=\"contact-pick-name\">{{ c.name }}</span>\n          <span class=\"contact-pick-phone\">{{ c.phone }}</span>\n        </label>\n      </div>\n\n      <div class=\"divider\"></div>\n\n      <p class=\"subsection-label\">Or Create a New Contact</p>\n      <div class=\"new-contact-row\">\n        <input type=\"text\" placeholder=\"Full name\" [(ngModel)]=\"newContactName\" name=\"newContactName\" />\n        <input type=\"tel\" placeholder=\"Phone number\" [(ngModel)]=\"newContactPhone\" name=\"newContactPhone\" />\n        <button class=\"btn btn-primary btn-sm\" (click)=\"createNewContact()\" [disabled]=\"isAddingContact\">\n          <span class=\"spinner\" *ngIf=\"isAddingContact\"></span>\n          <span *ngIf=\"!isAddingContact\">Add</span>\n        </button>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"selectedContacts.length > 0 && billAmount\">\n      <div class=\"divider\"></div>\n      <div class=\"split-preview\">\n        <div class=\"split-preview-row\" *ngFor=\"let c of selectedContacts\">\n          <span>{{ c.name }}</span>\n          <span class=\"money figure\">₹{{ contactsSplitAmount.toFixed(2) }}</span>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <!-- ===================== SHARES SPLIT ===================== -->\n<div class=\"card\" *ngIf=\"splitMethod === 'shares'\">\n  <div class=\"section-header\">\n    <h3>Participants &amp; Shares</h3>\n\n    <div>\n      <button\n        class=\"btn btn-secondary btn-sm\"\n        (click)=\"toggleParticipantContactsPanel()\">\n        Use Contacts\n      </button>\n\n      <button\n        class=\"btn btn-secondary btn-sm\"\n        (click)=\"addParticipantRow()\">\n        + Add Person\n      </button>\n    </div>\n  </div>\n\n  <div\n    class=\"add-friends-panel\"\n    *ngIf=\"showParticipantContactsPanel\">\n\n    <div class=\"field\">\n      <label>Search Contacts</label>\n\n      <input\n        type=\"text\"\n        placeholder=\"Search by name or phone\"\n        [(ngModel)]=\"participantSearchTerm\"\n        name=\"participantSearchShares\" />\n    </div>\n\n    <div class=\"contact-pick-list\">\n\n      <label\n        class=\"contact-pick-row\"\n        *ngFor=\"let c of filteredParticipantContacts\">\n\n        <input\n          type=\"checkbox\"\n          [checked]=\"isParticipantSelected(c.id)\"\n          (change)=\"toggleParticipantSelection(c)\" />\n\n        <span class=\"contact-pick-name\">\n          {{ c.name }}\n        </span>\n\n        <span class=\"contact-pick-phone\">\n          {{ c.phone }}\n        </span>\n\n      </label>\n\n    </div>\n\n  </div>\n\n  <div class=\"empty-state-inline\" *ngIf=\"participantRows.length === 0\">\n    No participants yet. Use \"Use Contacts\" to pick people, or \"+ Add Person\" to add one manually.\n  </div>\n\n  <div class=\"participant-rows\" *ngIf=\"participantRows.length > 0\">\n    <div class=\"participant-row\" *ngFor=\"let row of participantRows; trackBy: trackByTempId\">\n      <div class=\"participant-row-fields\">\n        <input\n          type=\"text\"\n          placeholder=\"Name\"\n          [ngModel]=\"row.name\"\n          (ngModelChange)=\"updateRowName(row.tempId, $event)\"\n          name=\"name-{{ row.tempId }}\"\n        />\n\n        <input\n          type=\"number\"\n          placeholder=\"Shares\"\n          min=\"0\"\n          step=\"any\"\n          [ngModel]=\"row.value\"\n          (ngModelChange)=\"updateRowValue(row.tempId, $event)\"\n          name=\"value-{{ row.tempId }}\"\n          class=\"value-input\"\n          [class.input-invalid]=\"isShareInvalid(row)\"\n        />\n\n        <span class=\"row-amount money figure\">\n          ₹{{ amountForRow(row).toFixed(2) }}\n        </span>\n\n        <button\n          class=\"btn-icon-remove\"\n          (click)=\"removeParticipantRow(row.tempId)\"\n          aria-label=\"Remove\">\n          ×\n        </button>\n      </div>\n\n      <p class=\"field-error\" *ngIf=\"isShareInvalid(row)\">Please enter a valid share.</p>\n    </div>\n  </div>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"totals-row\">\n    <span>Total Shares</span>\n    <span class=\"figure\">{{ totalShares }}</span>\n  </div>\n</div>\n  <!-- ===================== PERCENTAGE SPLIT ===================== -->\n<div class=\"card\" *ngIf=\"splitMethod === 'percentage'\">\n  <div class=\"section-header\">\n    <h3>Participants &amp; Percentage</h3>\n\n    <div>\n      <button\n        class=\"btn btn-secondary btn-sm\"\n        (click)=\"toggleParticipantContactsPanel()\">\n        Use Contacts\n      </button>\n\n      <button\n        class=\"btn btn-secondary btn-sm\"\n        (click)=\"addParticipantRow()\">\n        + Add Person\n      </button>\n    </div>\n  </div>\n\n  <div\n    class=\"add-friends-panel\"\n    *ngIf=\"showParticipantContactsPanel\">\n\n    <div class=\"field\">\n      <label>Search Contacts</label>\n\n      <input\n        type=\"text\"\n        placeholder=\"Search by name or phone\"\n        [(ngModel)]=\"participantSearchTerm\"\n        name=\"participantSearchPercentage\" />\n    </div>\n\n    <div class=\"contact-pick-list\">\n\n      <label\n        class=\"contact-pick-row\"\n        *ngFor=\"let c of filteredParticipantContacts\">\n\n        <input\n          type=\"checkbox\"\n          [checked]=\"isParticipantSelected(c.id)\"\n          (change)=\"toggleParticipantSelection(c)\" />\n\n        <span class=\"contact-pick-name\">\n          {{ c.name }}\n        </span>\n\n        <span class=\"contact-pick-phone\">\n          {{ c.phone }}\n        </span>\n\n      </label>\n\n    </div>\n\n  </div>\n\n  <div class=\"empty-state-inline\" *ngIf=\"participantRows.length === 0\">\n    No participants yet. Use \"Use Contacts\" to pick people, or \"+ Add Person\" to add one manually.\n  </div>\n\n  <div class=\"participant-rows\" *ngIf=\"participantRows.length > 0\">\n    <div class=\"participant-row\" *ngFor=\"let row of participantRows; trackBy: trackByTempId\">\n      <div class=\"participant-row-fields\">\n        <input\n          type=\"text\"\n          placeholder=\"Name\"\n          [ngModel]=\"row.name\"\n          (ngModelChange)=\"updateRowName(row.tempId, $event)\"\n          name=\"pname-{{ row.tempId }}\"\n        />\n\n        <input\n          type=\"number\"\n          placeholder=\"%\"\n          min=\"0\"\n          max=\"100\"\n          [ngModel]=\"row.value\"\n          (ngModelChange)=\"updateRowValue(row.tempId, $event)\"\n          name=\"pvalue-{{ row.tempId }}\"\n          class=\"value-input\"\n        />\n\n        <span class=\"row-amount money figure\">\n          ₹{{ amountForRow(row).toFixed(2) }}\n        </span>\n\n        <button\n          class=\"btn-icon-remove\"\n          (click)=\"removeParticipantRow(row.tempId)\"\n          aria-label=\"Remove\">\n          ×\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"divider\"></div>\n\n  <div\n    class=\"totals-row\"\n    [class.totals-error]=\"percentageRemaining !== 0\">\n\n    <span>Total Percentage</span>\n\n    <span class=\"figure\">\n      {{ totalPercentage.toFixed(2) }}%\n    </span>\n  </div>\n\n  <p\n    class=\"field-error\"\n    *ngIf=\"percentageRemaining !== 0\">\n\n    {{ percentageRemaining > 0\n      ? (percentageRemaining.toFixed(2) + '% remaining')\n      : ((-percentageRemaining).toFixed(2) + '% over 100%') }}\n  </p>\n</div>\n  <!-- Validation + Save -->\n  <p class=\"validation-message\" *ngIf=\"validationError\">{{ validationError }}</p>\n\n  <div class=\"action-row\">\n    <button class=\"btn btn-ghost\" (click)=\"resetForm()\">Reset</button>\n    <button class=\"btn btn-primary btn-block\" (click)=\"saveBill()\" [disabled]=\"isSaving || (!!validationError && !isPercentageMismatch)\">\n      <span class=\"spinner\" *ngIf=\"isSaving\"></span>\n      <span *ngIf=\"isSaving\">Saving…</span>\n      <span *ngIf=\"!isSaving\">Save Bill</span>\n    </button>\n  </div>\n</div>\n\n<!-- Popup validation: shown when the Percentage split does not total 100% -->\n<div class=\"modal-overlay\" *ngIf=\"showValidationModal\" (click)=\"closeValidationModal()\">\n  <div class=\"modal-card\" role=\"alertdialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n    <h3 class=\"modal-title\">Total Percentage Must Equal 100%</h3>\n    <p class=\"modal-message\">{{ validationModalMessage }}</p>\n    <div class=\"modal-actions\">\n      <button class=\"btn btn-primary\" (click)=\"closeValidationModal()\">OK</button>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/bill-history/bill-history.component */
      "jCgZ");
      /* harmony import */


      var _components_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/bill-detail/bill-detail.component */
      "fgnb");
      /* harmony import */


      var _components_contact_management_contact_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/contact-management/contact-management.component */
      "1+D7");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'history',
        component: _components_bill_history_bill_history_component__WEBPACK_IMPORTED_MODULE_4__["BillHistoryComponent"]
      }, {
        path: 'history/:id',
        component: _components_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_5__["BillDetailComponent"]
      }, {
        path: 'contacts',
        component: _components_contact_management_contact_management_component__WEBPACK_IMPORTED_MODULE_6__["ContactManagementComponent"]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "woRh":
    /*!************************************************************!*\
      !*** ./src/app/components/register/register.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function woRh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-container{\r\n  display:flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n  min-height:80vh;\r\n}\r\n\r\n.auth-card{\r\n  width:400px;\r\n  padding:30px;\r\n  display:flex;\r\n  flex-direction:column;\r\n  gap:15px;\r\n}\r\n\r\ninput{\r\n  padding:12px;\r\n  border:1px solid #444;\r\n  border-radius:8px;\r\n  background:transparent;\r\n  color:white;\r\n}\r\n\r\nbutton{\r\n  padding:12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgbWluLWhlaWdodDo4MHZoO1xyXG59XHJcblxyXG4uYXV0aC1jYXJke1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIHBhZGRpbmc6MzBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIGdhcDoxNXB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBwYWRkaW5nOjEycHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjNDQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBwYWRkaW5nOjEycHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.d5d5b8003981f598aedf.js.map