(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/gnx-ui/src/lib/dropdown/dropdown.component.html":
/*!******************************************************************!*\
  !*** ./projects/gnx-ui/src/lib/dropdown/dropdown.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" [ngClass]=\"{'material':theme === 'material'}\" [style.width]=\"style['width']\" [style.minWidth]=\"style['min-width']\">\r\n    <!--Button Container-->\r\n    <div #parentdiv class=\"dropdown-button\" [ngClass]=\"{'dropdown-open':isItemsDisplayed}\" id=\"app-dropdown-id\" (click)=\"toggleItemDisplay($event)\">\r\n\r\n        <div class=\"singleselect-container\" *ngIf=\"!isMultiSelect\">\r\n            <div class=\"placeholder\">\r\n                <header>{{buttonValue}}</header>\r\n            </div>\r\n            <div class=\"deletecontainer\" (click)=\"clearSelected()\" *ngIf=\"isClearable && selectedItem !== undefined\">\r\n                <header *ngIf=\"style['deleteiconsrc'] === undefined && theme === 'default'\">X</header>\r\n                <img *ngIf=\"style['deleteiconsrc'] !== undefined && theme === 'default'\" [src]=\"style['deleteiconsrc']\" width=\"20\" height=\"20\">\r\n                <i *ngIf=\"theme === 'material'\" class=\"material-icons\">clear</i>\r\n            </div>\r\n        </div>\r\n        <div class=\"multiselect-container\" *ngIf=\"isMultiSelect\">\r\n            <div class=\"multiselect-item-container\" *ngIf=\"multiSelectedItems.length > 0\">\r\n                <div class=\"multiselect-item\" *ngFor=\"let item of multiSelectedItems\">\r\n                    <header *ngIf=\"item[bindLabel] === undefined\">{{item}}<span (click)=\"deleteItem(item)\">X</span></header>\r\n                    <header *ngIf=\"item[bindLabel] !== undefined\">{{item[bindLabel]}}<span (click)=\"deleteItem(item)\">X</span></header>\r\n                </div>\r\n            </div>\r\n            <div class=\"placeholder multiselect-placeholder\" [ngClass]=\"{'spread':multiSelectedItems.length > 0}\" *ngIf=\"multiSelectedItems.length === 0\">\r\n                <header>{{buttonValue}}</header>\r\n            </div>\r\n            <div class=\"deletecontainer\" (click)=\"clearSelected()\" *ngIf=\"isClearable && selectedItem !== undefined && multiSelectedItems.length > 0\">\r\n                <img *ngIf=\"style['deleteiconsrc'] !== undefined && theme === 'default'\" [src]=\"style['deleteiconsrc']\" width=\"20\" height=\"20\">\r\n                <i *ngIf=\"theme === 'material'\" class=\"material-icons\">clear</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Content Container-->\r\n    <div class=\"dropdown-content\" (click)=\"stopPropagation($event)\" *ngIf=\"isItemsDisplayed\" [style.marginTop.px]=\"parentdiv.offsetHeight\">\r\n        <!--List of Items-->\r\n        <div class=\"dropdown-items\" *ngIf=\"!isErrorOccured\">\r\n            <div class=\"dropdown-search-box\" *ngIf=\"isSearchable\">\r\n                <input placeholder=\"Search...\" [(ngModel)]=\"searchText\" (keyup.enter)=\"addMultiItems()\">\r\n            </div>\r\n\r\n            <header class=\"customItems\" *ngIf=\"customItems.length !== 0\">Custom Items</header>\r\n            <div *ngFor=\"let item of customItems | textFilter:[searchText,bindLabel]\" class=\"dropdown-item\" (click)=\"selectItem(item)\">\r\n                <header *ngIf=\"bindLabel === undefined\">{{item}}</header>\r\n                <header *ngIf=\"bindLabel !== undefined\">{{item[bindLabel]}}</header>\r\n            </div>\r\n\r\n            <header class=\"customItems\" *ngIf=\"customItems.length !== 0\">Regular Items</header>\r\n            <div *ngFor=\"let item of items | textFilter:[searchText,bindLabel]\" class=\"dropdown-item\" (click)=\"selectItem(item)\">\r\n                <header *ngIf=\"!isBindEnabled\">{{item}}</header>\r\n                <header *ngIf=\"isBindEnabled && item[bindLabel] !== undefined\">{{item[bindLabel]}}</header>\r\n                <header *ngIf=\"isBindEnabled && item[bindLabel] === undefined\">{{item | json}}</header>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"dropdown-no-item-error\" *ngIf=\"isErrorOccured && !isDebugMode\">\r\n            <header>{{errormessage}}</header>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/gnx-ui/src/lib/dropdown/dropdown.component.less":
/*!******************************************************************!*\
  !*** ./projects/gnx-ui/src/lib/dropdown/dropdown.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* fallback */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n.dropdown {\n  display: flex;\n  min-height: 36px;\n  min-width: 100px;\n  width: 100%;\n  position: relative;\n  float: left;\n}\n.dropdown .dropdown-button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.dropdown .dropdown-button .placeholder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  word-break: break-word;\n}\n.dropdown .dropdown-button .deletecontainer {\n  display: flex;\n  align-items: center;\n}\n.dropdown .dropdown-button .singleselect-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.dropdown .dropdown-button .multiselect-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.dropdown .dropdown-button .multiselect-container .placeholder {\n  width: unset;\n  justify-content: center;\n}\n.dropdown .dropdown-button .multiselect-container .placeholder img {\n  margin: 0;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container {\n  width: 100%;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item {\n  float: left;\n  word-break: break-word;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1px 6px 2px 6px;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item header span {\n  margin-left: 10px;\n}\n.dropdown .dropdown-button .multiselect-container .spread {\n  width: 30px;\n}\n.dropdown .dropdown-content {\n  width: 100%;\n  margin-top: 36px;\n  position: absolute;\n  font-size: 14px;\n  z-index: 1;\n}\n.dropdown .dropdown-content .dropdown-items {\n  width: inherit;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-search-box {\n  display: flex;\n  justify-content: center;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-search-box input {\n  width: 100%;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-search-box input:focus {\n  outline: none;\n}\n.dropdown .dropdown-content .dropdown-items .customItems {\n  font-weight: 700;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-item {\n  cursor: pointer;\n  word-break: break-word;\n  transition: 0.5s;\n}\n.dropdown .dropdown-content .dropdown-no-item-error {\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.material {\n  min-height: 40px;\n}\n.material .material-icons {\n  font-size: 18px;\n  cursor: pointer;\n}\n.material ::-webkit-scrollbar {\n  width: 5px;\n}\n.material ::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 10px;\n  background: #646464;\n}\n.material ::-webkit-scrollbar-thumb:window-inactive {\n  background: rgba(255, 0, 0, 0.4);\n}\n.material .dropdown-button {\n  padding: 5px 10px 5px 10px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.material .dropdown-button .placeholder {\n  width: 85%;\n}\n.material .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item {\n  border: 1px solid #c8c8c8;\n  margin: 5px 5px 0 0;\n  border-radius: 4px;\n}\n.material .dropdown-open {\n  border-bottom: 1px solid darkblue;\n}\n.material .dropdown-content {\n  box-shadow: 0 1px 2px 1px #c8c8c8;\n  background-color: white;\n}\n.material .dropdown-content .dropdown-items .dropdown-search-box {\n  padding: 10px 10px 5px 10px;\n}\n.material .dropdown-content .dropdown-items .dropdown-search-box input {\n  border: none;\n  padding: 5px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.material .dropdown-content .dropdown-items .customItems {\n  margin: 5px 10px 5px 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.material .dropdown-content .dropdown-items .dropdown-item {\n  display: flex;\n  align-items: center;\n  padding: 14px 10px 14px 10px;\n}\n.material .dropdown-content .dropdown-items .dropdown-item:hover {\n  background-color: #f0f0f0;\n}\n.material .dropdown-content .dropdown-no-item-error {\n  display: flex;\n  justify-content: center;\n  font-size: 13px;\n  color: #b4b4b4;\n}\n.material .dropdown-content .dropdown-no-item-error header {\n  width: 90%;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./projects/gnx-ui/src/lib/dropdown/dropdown.component.ts":
/*!****************************************************************!*\
  !*** ./projects/gnx-ui/src/lib/dropdown/dropdown.component.ts ***!
  \****************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        // Outputs
        this.selectedItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isItemsDisplayed = false;
        this.multiSelectedItems = [];
        this.customItems = [];
        this.isMultiSelectInitialised = false;
        this.isBindEnabled = false;
    }
    DropdownComponent.prototype.clickedOutside = function ($event) {
        this.isItemsDisplayed = false;
    };
    DropdownComponent.prototype.ngOnInit = function () {
        if (this.items === undefined) {
            this.items = [];
        }
        if (this.isSearchable === undefined) {
            this.isSearchable = true;
        }
        if (this.isAddTag === undefined) {
            this.isAddTag = false;
        }
        if (this.isSelectBindValue === undefined) {
            this.isSelectBindValue = true;
        }
        if (this.isClearable === undefined) {
            this.isClearable = true;
        }
        if (this.isDebugMode === undefined) {
            this.isDebugMode = false;
        }
        if (this.style === undefined) {
            this.style = {};
        }
        if (this.isMultiSelect === undefined) {
            this.isMultiSelect = false;
        }
        if (this.placeholder === undefined) {
            this.placeholder = 'Select';
            this.buttonValue = 'Select';
        }
        else {
            this.buttonValue = this.placeholder;
        }
        if (this.theme === undefined) {
            this.theme = 'material';
        }
        if (this.items.length === 0) {
            this.showError('Loading Items');
        }
        // Set PlaceHolder
        this.setSelectedItemText(this.buttonValue);
    };
    DropdownComponent.prototype.ngOnChanges = function () {
        this.isErrorOccured = false;
        // Do not proceed until Items are Loaded
        if (this.items === undefined) {
            this.showError('Loading Items');
        }
        else if (this.items.length > 0) {
            // Validate Parameters
            if (this.bindValue !== undefined && this.bindLabel === undefined) {
                this.showError('Bind Error');
            }
            else if (this.bindValue !== undefined && this.bindLabel === undefined) {
                this.showError('Bind Error');
            }
            else if (typeof (this.items[0]) === 'object' && (this.bindValue === undefined || this.bindLabel === undefined)) {
                this.showError('Please provide bindLabel and bindValue');
            }
            else {
                this.isBindEnabled = typeof (this.items[0]) === 'object';
                // Check if Selected Item Present
                if (this.selectedItem !== undefined) {
                    if (this.selectedItem.constructor === Array && this.isMultiSelect === false) {
                        this.showError('Selected Items Cannot be Array if Multiselect is False');
                    }
                    else {
                        if (!this.isMultiSelect) {
                            var isfound = false;
                            var temp = void 0;
                            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                                var val = _a[_i];
                                if (this.isBindEnabled && this.isSelectBindValue) {
                                    temp = val[this.bindValue];
                                }
                                else {
                                    temp = this.selectedItem;
                                }
                                if (temp === this.selectedItem) {
                                    isfound = true;
                                    break;
                                }
                            }
                            if (isfound) {
                                if (this.isBindEnabled) {
                                    this.setSelectedItemText(temp);
                                }
                                else {
                                    this.setSelectedItemText(temp[this.bindLabel]);
                                }
                            }
                            else {
                                this.showError('Selected Item Not Found in Items');
                            }
                        }
                        else {
                            if (this.selectedItem.constructor !== Array) {
                                this.showError('Multiselect Selected Items must be an array');
                            }
                            else if (this.findDuplicates(this.selectedItem)) {
                                this.showError('Selected Items cannot have Duplicates');
                            }
                            else if (this.selectedItem.length > 0) {
                                var isfound = false;
                                for (var _b = 0, _c = this.items; _b < _c.length; _b++) {
                                    var val = _c[_b];
                                    for (var _d = 0, _e = this.selectedItem; _d < _e.length; _d++) {
                                        var valsel = _e[_d];
                                        var temp = void 0;
                                        if (this.isBindEnabled && this.isSelectBindValue) {
                                            temp = val[this.bindValue];
                                        }
                                        else {
                                            temp = val;
                                        }
                                        if (temp === valsel && !this.isMultiSelectInitialised) {
                                            isfound = true;
                                            this.multiSelectedItems.push(val);
                                            break;
                                        }
                                    }
                                }
                                if (!isfound && !this.isMultiSelectInitialised) {
                                    this.showError('Selected Item Not Found in Multi Items');
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            this.showError('Loading Items');
        }
    };
    DropdownComponent.prototype.stopPropagation = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    DropdownComponent.prototype.findDuplicates = function (array) {
        var object = {};
        var result = [];
        array.forEach(function (item) {
            if (!object[item]) {
                object[item] = 0;
            }
            object[item] += 1;
        });
        for (var prop in object) {
            if (object[prop] >= 2) {
                result.push(prop);
            }
        }
        return result.length > 0;
    };
    DropdownComponent.prototype.showError = function (message) {
        this.isErrorOccured = true;
        this.errormessage = message;
    };
    DropdownComponent.prototype.setSelectedItemText = function (text) {
        if (text !== undefined) {
            this.buttonValue = text;
        }
        else {
            this.buttonValue = '';
        }
    };
    DropdownComponent.prototype.toggleItemDisplay = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.isItemsDisplayed = !this.isItemsDisplayed;
    };
    DropdownComponent.prototype.selectItem = function (item) {
        if (this.isMultiSelect === false) {
            if (this.isBindEnabled && item[this.bindValue] !== undefined && item[this.bindLabel] !== undefined) {
                if (this.isSelectBindValue) {
                    this.selectedItem = item[this.bindValue];
                }
                else {
                    this.selectedItem = item;
                }
                this.setSelectedItemText(item[this.bindLabel]);
            }
            else if (this.isBindEnabled) {
                this.selectedItem = item;
                this.setSelectedItemText(JSON.stringify(item));
            }
            else {
                this.selectedItem = item;
                this.setSelectedItemText(item);
            }
        }
        else {
            if (this.selectedItem === undefined) {
                this.selectedItem = [];
                this.isMultiSelectInitialised = true;
            }
            if (this.multiSelectedItems.indexOf(item) < 0) {
                this.multiSelectedItems.push(item);
                if (this.isBindEnabled && this.isSelectBindValue) {
                    this.selectedItem.push(item[this.bindValue]);
                }
                else {
                    this.selectedItem.push(item);
                }
            }
        }
        this.isItemsDisplayed = false;
        this.onChangeEmit();
    };
    DropdownComponent.prototype.onChangeEmit = function () {
        this.selectedItemChange.emit(this.selectedItem);
    };
    DropdownComponent.prototype.addMultiItems = function () {
        if (this.isAddTag === true) {
            if (this.selectedItem === undefined) {
                this.selectedItem = [];
            }
            if (!this.isBindEnabled) {
                this.selectedItem.push(this.searchText);
                this.customItems.push(this.searchText);
                this.multiSelectedItems.push(this.searchText);
            }
            else {
                var temp_dict = {};
                if (this.bindValue !== undefined) {
                    temp_dict[this.bindValue] = this.searchText;
                }
                if (this.bindLabel !== undefined) {
                    temp_dict[this.bindLabel] = this.searchText;
                }
                if (this.isSelectBindValue) {
                    this.selectedItem.push(this.searchText);
                }
                else {
                    this.selectedItem.push(temp_dict);
                }
                this.customItems.push(temp_dict);
                this.multiSelectedItems.push(temp_dict);
            }
            this.searchText = undefined;
            this.onChangeEmit();
        }
    };
    DropdownComponent.prototype.deleteItem = function (item) {
        event.stopPropagation();
        this.multiSelectedItems.splice(this.multiSelectedItems.indexOf(item), 1);
        this.customItems.splice(this.selectedItem.indexOf(item), 1);
        this.selectedItem.splice(this.selectedItem.indexOf(item[this.bindLabel]), 1);
        this.onChangeEmit();
    };
    DropdownComponent.prototype.clearSelected = function () {
        event.stopPropagation();
        if (this.isMultiSelect === true) {
            this.multiSelectedItems = [];
            this.customItems = [];
            this.selectedItem = [];
        }
        else {
            this.selectedItem = undefined;
            this.setSelectedItemText(this.placeholder);
        }
        this.onChangeEmit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "bindLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "bindValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isSearchable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isClearable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isMultiSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isAddTag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isSelectBindValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isDebugMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownComponent.prototype, "clickedOutside", null);
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gnx-ui-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./projects/gnx-ui/src/lib/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.less */ "./projects/gnx-ui/src/lib/dropdown/dropdown.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./projects/gnx-ui/src/lib/gnx-ui.module.ts":
/*!**************************************************!*\
  !*** ./projects/gnx-ui/src/lib/gnx-ui.module.ts ***!
  \**************************************************/
/*! exports provided: GnxUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnxUiModule", function() { return GnxUiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./projects/gnx-ui/src/lib/dropdown/dropdown.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table/table.component */ "./projects/gnx-ui/src/lib/table/table.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_directives_app_dropdown_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/directives/app-dropdown.pipe */ "./projects/gnx-ui/src/lib/shared/directives/app-dropdown.pipe.ts");
/* harmony import */ var _gnx_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gnx-ui.service */ "./projects/gnx-ui/src/lib/gnx-ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GnxUiModule = /** @class */ (function () {
    function GnxUiModule() {
    }
    GnxUiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["DropdownComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _shared_directives_app_dropdown_pipe__WEBPACK_IMPORTED_MODULE_5__["TextFilterPipe"]],
            exports: [_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["DropdownComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _shared_directives_app_dropdown_pipe__WEBPACK_IMPORTED_MODULE_5__["TextFilterPipe"]],
            providers: [_gnx_ui_service__WEBPACK_IMPORTED_MODULE_6__["GnxUiService"]]
        })
    ], GnxUiModule);
    return GnxUiModule;
}());



/***/ }),

/***/ "./projects/gnx-ui/src/lib/gnx-ui.service.ts":
/*!***************************************************!*\
  !*** ./projects/gnx-ui/src/lib/gnx-ui.service.ts ***!
  \***************************************************/
/*! exports provided: GnxUiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnxUiService", function() { return GnxUiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GnxUiService = /** @class */ (function () {
    function GnxUiService() {
    }
    GnxUiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GnxUiService);
    return GnxUiService;
}());



/***/ }),

/***/ "./projects/gnx-ui/src/lib/shared/directives/app-dropdown.pipe.ts":
/*!************************************************************************!*\
  !*** ./projects/gnx-ui/src/lib/shared/directives/app-dropdown.pipe.ts ***!
  \************************************************************************/
/*! exports provided: TextFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFilterPipe", function() { return TextFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextFilterPipe = /** @class */ (function () {
    function TextFilterPipe() {
    }
    TextFilterPipe.prototype.transform = function (items, filter) {
        var label = filter[1];
        var filterto = filter[0];
        if (!items || !filterto) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if (label !== undefined) {
            return items.filter(function (item) { return item[label].toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1; });
        }
        else {
            return items.filter(function (item) { return item.toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1; });
        }
    };
    TextFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'textFilter',
            pure: false
        })
    ], TextFilterPipe);
    return TextFilterPipe;
}());



/***/ }),

/***/ "./projects/gnx-ui/src/lib/table/table.component.html":
/*!************************************************************!*\
  !*** ./projects/gnx-ui/src/lib/table/table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n\r\n    <div class=\"table-row table-error\" *ngIf=\"internal_error_message && isDebugMode\">\r\n        <header>{{internal_error_message}}</header>\r\n    </div>\r\n\r\n\r\n    <div class=\"table-row table-header\" [style.backgroundColor]=\"tableConfig['style']['headerbackgroundcolor']\">\r\n        <div class=\"table-column\" *ngFor=\"let column of tableConfig['tableColumnConfig']\" [style.width]=\"column['columnwidth']\">\r\n            <header>{{column['columnname']}}</header>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"table-row table-data\" *ngFor=\"let row of tableData\">\r\n        <div class=\"table-column\" *ngFor=\"let column of tableConfig['tableColumnConfig']\" [style.width]=\"column['columnwidth']\">\r\n            <div class=\"text\" *ngIf=\"column['type'] === 'text' && column['isclickable'] === true\" (click)=\"onButtonClick(column['columnkeybinding'],row)\">\r\n                <header>{{row[column['columnkeybinding']]}}</header>\r\n            </div>\r\n            <div class=\"text\" *ngIf=\"column['type'] === 'text' && column['isclickable'] === false\">\r\n                <header>{{row[column['columnkeybinding']]}}</header>\r\n            </div>\r\n            <div class=\"checkbox\" *ngIf=\"column['type'] === 'checkbox'\">\r\n                <input [title]=\"row[column['columnkeybinding']]\"\r\n                       (change)=\"onButtonClick(column['columnkeybinding'], row)\"\r\n                       type=\"checkbox\"\r\n                       [checked]=\"row[column['columnkeybinding']]\">\r\n            </div>\r\n            <div class=\"checkbox\" *ngIf=\"column['type'] === 'checkbox'\">\r\n                <input [title]=\"row[column['columnkeybinding']]\"\r\n                       type=\"radio\" *ngIf=\"column['type'] === 'radio'\"\r\n                       [(ngModel)]=\"row[column['columnkeybinding']]\">\r\n            </div>\r\n\r\n            <div class=\"button\" (click)=\"onButtonClick(column['columnkeybinding'], row)\" *ngIf=\"column['type'] === 'button'\">{{column['buttonname']}}</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"table-row table-error\" *ngIf=\"!isLoading && errorMessage\">\r\n        <header>{{errorMessage}}</header>\r\n    </div>\r\n\r\n    <div class=\"table-row table-error\" *ngIf=\"isLoading\">\r\n        <header>Loading</header>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./projects/gnx-ui/src/lib/table/table.component.less":
/*!************************************************************!*\
  !*** ./projects/gnx-ui/src/lib/table/table.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  width: 100%;\n}\n.table .table-row {\n  display: flex;\n  align-items: center;\n  min-height: 44px;\n}\n.table .table-column {\n  display: flex;\n  align-items: center;\n  min-height: 44px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.table .table-error {\n  min-height: 200px;\n  justify-content: center;\n}\n.table .table-header {\n  background-color: #DAE0E0;\n}\n.table .table-data {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid black;\n}\n.table .table-data .text {\n  display: flex;\n  align-items: center;\n  min-height: 44px;\n  width: 100%;\n}\n.table .table-data .button {\n  display: flex;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid #c8c8c8;\n  background-color: white;\n  cursor: pointer;\n}\n.table .table-data .button:hover {\n  opacity: 0.7;\n}\n"

/***/ }),

/***/ "./projects/gnx-ui/src/lib/table/table.component.ts":
/*!**********************************************************!*\
  !*** ./projects/gnx-ui/src/lib/table/table.component.ts ***!
  \**********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.isDebugMode === undefined) {
            this.isDebugMode = false;
        }
        if (this.isLoading === undefined) {
            this.isLoading = false;
        }
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.ngOnChanges = function () {
        if (this.tableConfig === undefined) {
            this.tableConfig = {
                'tableColumnConfig': [],
                'style': {},
                'generalConfig': {
                    'isrowclickable': false
                }
            };
        }
        else {
            if (this.tableConfig['tableColumnConfig'] === undefined) {
                this.tableConfig['tableColumnConfig'] = [];
            }
            if (this.tableConfig['style'] === undefined) {
                this.tableConfig['style'] = [];
            }
        }
    };
    TableComponent.prototype.logError = function (error) {
        this.internal_error_message = error;
    };
    TableComponent.prototype.onButtonClick = function (type, row) {
        event.preventDefault();
        event.stopPropagation();
        this.dataChange.emit({ 'column': type, 'data': row });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "tableConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "tableData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TableComponent.prototype, "isDebugMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TableComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "dataChange", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gnx-ui-table',
            template: __webpack_require__(/*! ./table.component.html */ "./projects/gnx-ui/src/lib/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.less */ "./projects/gnx-ui/src/lib/table/table.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n    <div class=\"header\">\r\n        <h2>Dropdown Examples</h2>\r\n    </div>\r\n\r\n    <div class=\"examples\">\r\n        <div class=\"dropdown\">\r\n            <header>A Simple Dropdown with a Simple Array</header>\r\n            <div class=\"codeparams\">\r\n                <code> &lt;gnx-ui-dropdown</code>\r\n                <code class=\"padded\">[placeholder]=\"'Select Cheese'\"</code>\r\n                <code class=\"padded\">[items]=\"['Mozarella', 'Cottage', 'Vintage']\"></code>\r\n                <code>&lt;/gnx-ui-dropdown></code>\r\n            </div>\r\n            <gnx-ui-dropdown\r\n                [placeholder]=\"'Select Cheese'\"\r\n                [items]=\"['Mozarella', 'Cottage', 'Vintage']\">\r\n            </gnx-ui-dropdown>\r\n        </div>\r\n\r\n        <div class=\"dropdown\">\r\n            <header>A Simple Dropdown with an Object Array</header>\r\n            <div class=\"codeparams\">\r\n                <code> &lt;gnx-ui-dropdown</code>\r\n                <code class=\"padded\">[placeholder]=\"'Select Cheese'\"</code>\r\n                <code class=\"padded\">[items]=[objectlist]</code>\r\n                <code class=\"padded\">[bindLabel]=\"'name'\"</code>\r\n                <code class=\"padded\">[bindValue]=\"'id'\"></code>\r\n                <code>&lt;/gnx-ui-dropdown></code>\r\n            </div>\r\n            <gnx-ui-dropdown\r\n                [placeholder]=\"'Select Cheese'\"\r\n                [items]=\"[{'id':1,'name':'Mozarella'},{'id':2,'name':'Cottage'}]\"\r\n                [bindLabel]=\"'name'\"\r\n                [bindValue]=\"'id'\">\r\n            </gnx-ui-dropdown>\r\n        </div>\r\n\r\n        <div class=\"dropdown\">\r\n            <header>A Simple Dropdown with an Object Array with MultiSelect</header>\r\n            <div class=\"codeparams\">\r\n                <code> &lt;gnx-ui-dropdown</code>\r\n                <code class=\"padded\">[placeholder]=\"'Select Cheese'\"</code>\r\n                <code class=\"padded\">[items]=[objectlist]</code>\r\n                <code class=\"padded\">[bindLabel]=\"'name'\"</code>\r\n                <code class=\"padded\">[bindValue]=\"'id'\"</code>\r\n                <code class=\"padded\">[isMultiSelect]=\"true\"></code>\r\n                <code>&lt;/gnx-ui-dropdown></code>\r\n            </div>\r\n            <gnx-ui-dropdown\r\n                [placeholder]=\"'Select Cheese'\"\r\n                [items]=\"[{'id':1,'name':'Mozarella'},{'id':2,'name':'Cottage'}]\"\r\n                [bindLabel]=\"'name'\"\r\n                [bindValue]=\"'id'\"\r\n                [isMultiSelect]=\"true\">\r\n            </gnx-ui-dropdown>\r\n        </div>\r\n        <div class=\"dropdown\">\r\n            <header>A Simple Dropdown with an Object Array with MultiSelect and Tag Addition</header>\r\n            <div class=\"codeparams\">\r\n                <code> &lt;gnx-ui-dropdown</code>\r\n                <code class=\"padded\">[placeholder]=\"'Select Cheese'\"</code>\r\n                <code class=\"padded\">[items]=[objectlist]</code>\r\n                <code class=\"padded\">[bindLabel]=\"'name'\"</code>\r\n                <code class=\"padded\">[bindValue]=\"'id'\"</code>\r\n                <code class=\"padded\">[isMultiSelect]=\"true\"</code>\r\n                <code class=\"padded\">[isAddTag]=\"true\"></code>\r\n                <code>&lt;/gnx-ui-dropdown></code>\r\n            </div>\r\n            <gnx-ui-dropdown\r\n                [placeholder]=\"'Select Cheese'\"\r\n                [items]=\"[{'id':1,'name':'Mozarella'},{'id':2,'name':'Cottage'}]\"\r\n                [bindLabel]=\"'name'\"\r\n                [bindValue]=\"'id'\"\r\n                [isMultiSelect]=\"true\"\r\n                [isAddTag]=\"true\">\r\n            </gnx-ui-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"header\">\r\n        <h2>Table Examples</h2>\r\n    </div>\r\n\r\n\r\n    <div class=\"examples\">\r\n        <div class=\"table\">\r\n            <header>A Simple Table with a Simple Array</header>\r\n            <div class=\"codeparams\">\r\n                <code> &lt;gnx-ui-table </code>\r\n                <code class=\"padded\">[tableConfig]=\"tableConfig\"</code>\r\n                <code class=\"padded\">[errorMessage]=\"err\"</code>\r\n                <code class=\"padded\">[tableData]=\"tableData\"></code>\r\n                <code>&lt;/gnx-ui-table></code>\r\n                <code><b>Table Config : </b>{{tableConfig | json}}</code>\r\n                <code><b>Table Data : </b>{{tableData | json}}</code>\r\n            </div>\r\n            <gnx-ui-table (change)="dataChanged($event)" [tableConfig]=\"tableConfig\" [tableData]=\"tableData\"></gnx-ui-table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  width: 96%;\n  min-height: 100vh;\n  padding: 2%;\n  background-color: #fafafa;\n}\n.app .header {\n  margin-bottom: 20px;\n}\n.app .examples {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: auto;\n  margin-bottom: 20px;\n  padding-top: 20px;\n  background-color: white;\n  box-shadow: 1px 1px 1px 0 #c8c8c8;\n  min-height: 200px;\n}\n.app .examples .dropdown,\n.app .examples .table {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 30px;\n}\n.app .examples .dropdown header,\n.app .examples .table header {\n  font-size: 14px;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n.app .examples .dropdown .codeparams,\n.app .examples .table .codeparams {\n  display: flex;\n  flex-direction: column;\n  min-height: 130px;\n}\n.app .examples .dropdown .codeparams .padded,\n.app .examples .table .codeparams .padded {\n  padding-left: 20px;\n  max-width: 200px;\n}\n.app .examples .table {\n  width: 100%;\n}\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tableConfig = {
                'generalConfig': {
                    'isrowclickable': false
                },
                'tableColumnConfig': [
                    {
                        'columnname': 'Header 1',
                        'columnkeybinding': 'header1',
                        'columnwidth': '5%',
                        'type': 'checkbox'
                    },
                    {
                        'columnname': 'Header 2',
                        'columnkeybinding': 'header2',
                        'columnwidth': '85%',
                        'type': 'text',
                        'isclickable': true
                    },
                    {
                        'columnname': 'Header 3',
                        'columnkeybinding': 'header3',
                        'columnwidth': '10%',
                        'type': 'button',
                        'buttonname': 'Save'
                    }
                ],
                'style': {
                    'headerbackgroundcolor': '#DAE0E0'
                }
            };
            _this.tableData = [{
                    'header1': true,
                    'header2': 'data-col2-row1 ',
                    'header3': 'data-col3-row1',
                }, {
                    'header1': false,
                    'header2': 'data-col2-row2',
                    'header3': 'data-col3-row2',
                }
            ];
        }, 1000);
    };
    AppComponent.prototype.dataChanged = function (event) {
        var type = event['column'];
        var row = event['data'];
        console.log(type);
        console.log(row);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_gnx_ui_src_lib_gnx_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/gnx-ui/src/lib/gnx-ui.module */ "./projects/gnx-ui/src/lib/gnx-ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                projects_gnx_ui_src_lib_gnx_ui_module__WEBPACK_IMPORTED_MODULE_3__["GnxUiModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GTX\PycharmProjects\Open Source\gnx-ui-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
