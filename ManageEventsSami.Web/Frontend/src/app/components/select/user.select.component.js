"use strict";
exports.__esModule = true;
exports.AppSelectUserComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var select_component_1 = require("./select.component");
var option_model_1 = require("./option.model");
var AppSelectUserComponent = (function (_super) {
    tslib_1.__extends(AppSelectUserComponent, _super);
    function AppSelectUserComponent(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.autofocus = false;
        _this.disabled = false;
        _this.load();
        return _this;
    }
    AppSelectUserComponent_1 = AppSelectUserComponent;
    AppSelectUserComponent.prototype.get = function (_) {
        return this.http
            .get("https://jsonplaceholder.cypress.io/users")
            .pipe(operators_1.mergeMap(function (option) { return option; }), operators_1.map(function (option) { return new option_model_1.OptionModel(option.id, option.name); }), operators_1.toArray());
    };
    var AppSelectUserComponent_1;
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectUserComponent.prototype, "autofocus");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectUserComponent.prototype, "child");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectUserComponent.prototype, "class");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectUserComponent.prototype, "disabled");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectUserComponent.prototype, "formControlName");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectUserComponent.prototype, "text");
    AppSelectUserComponent = AppSelectUserComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: "app-select-user",
            templateUrl: "./select.component.html",
            standalone: true,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: AppSelectUserComponent_1, multi: true }],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
        })
    ], AppSelectUserComponent);
    return AppSelectUserComponent;
}(select_component_1.AppSelectComponent));
exports.AppSelectUserComponent = AppSelectUserComponent;
//# sourceMappingURL=user.select.component.js.map