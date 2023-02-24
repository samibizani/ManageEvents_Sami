"use strict";
exports.__esModule = true;
exports.AppSelectPostComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var select_component_1 = require("./select.component");
var option_model_1 = require("./option.model");
var AppSelectPostComponent = (function (_super) {
    tslib_1.__extends(AppSelectPostComponent, _super);
    function AppSelectPostComponent(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.autofocus = false;
        _this.disabled = false;
        _this.load();
        return _this;
    }
    AppSelectPostComponent_1 = AppSelectPostComponent;
    AppSelectPostComponent.prototype.get = function (userId) {
        if (!userId)
            return rxjs_1.of();
        return this.http
            .get("https://jsonplaceholder.cypress.io/posts?userId=" + userId)
            .pipe(operators_1.mergeMap(function (option) { return option; }), operators_1.map(function (option) { return new option_model_1.OptionModel(option.id, option.title); }), operators_1.toArray());
    };
    var AppSelectPostComponent_1;
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectPostComponent.prototype, "autofocus");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectPostComponent.prototype, "child");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectPostComponent.prototype, "class");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectPostComponent.prototype, "disabled");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectPostComponent.prototype, "formControlName");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectPostComponent.prototype, "text");
    AppSelectPostComponent = AppSelectPostComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: "app-select-post",
            templateUrl: "./select.component.html",
            standalone: true,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: AppSelectPostComponent_1, multi: true }],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
        })
    ], AppSelectPostComponent);
    return AppSelectPostComponent;
}(select_component_1.AppSelectComponent));
exports.AppSelectPostComponent = AppSelectPostComponent;
//# sourceMappingURL=post.select.component.js.map