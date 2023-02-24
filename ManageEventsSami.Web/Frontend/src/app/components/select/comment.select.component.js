"use strict";
exports.__esModule = true;
exports.AppSelectCommentComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var select_component_1 = require("./select.component");
var option_model_1 = require("./option.model");
var AppSelectCommentComponent = (function (_super) {
    tslib_1.__extends(AppSelectCommentComponent, _super);
    function AppSelectCommentComponent(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.autofocus = false;
        _this.disabled = false;
        _this.load();
        return _this;
    }
    AppSelectCommentComponent_1 = AppSelectCommentComponent;
    AppSelectCommentComponent.prototype.get = function (postId) {
        if (!postId)
            return rxjs_1.of();
        return this.http
            .get("https://jsonplaceholder.cypress.io/comments?postId=" + postId)
            .pipe(operators_1.mergeMap(function (option) { return option; }), operators_1.map(function (option) { return new option_model_1.OptionModel(option.id, option.name); }), operators_1.toArray());
    };
    var AppSelectCommentComponent_1;
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectCommentComponent.prototype, "autofocus");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectCommentComponent.prototype, "child");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectCommentComponent.prototype, "class");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectCommentComponent.prototype, "disabled");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectCommentComponent.prototype, "formControlName");
    tslib_1.__decorate([
        core_1.Input()
    ], AppSelectCommentComponent.prototype, "text");
    AppSelectCommentComponent = AppSelectCommentComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: "app-select-comment",
            templateUrl: "./select.component.html",
            standalone: true,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: AppSelectCommentComponent_1, multi: true }],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
        })
    ], AppSelectCommentComponent);
    return AppSelectCommentComponent;
}(select_component_1.AppSelectComponent));
exports.AppSelectCommentComponent = AppSelectCommentComponent;
//# sourceMappingURL=comment.select.component.js.map