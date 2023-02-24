"use strict";
exports.__esModule = true;
exports.AppSelectComponent = void 0;
var tslib_1 = require("tslib");
var component_1 = require("src/app/components/component");
var AppSelectComponent = (function (_super) {
    tslib_1.__extends(AppSelectComponent, _super);
    function AppSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = new Array();
        _this.clear = function () { return _this.options = new Array(); };
        _this.load = function (parameter) { return _this.get(parameter).subscribe(function (options) { return _this.options = options; }); };
        return _this;
    }
    AppSelectComponent.prototype.writeValue = function (value) { this.value = value; this.change(); };
    AppSelectComponent.prototype.change = function () {
        if (!this.child)
            return;
        var child = this.child;
        while (child) {
            child.value = undefined;
            child.clear();
            child = child.child;
        }
        this.child.load(this.value);
    };
    return AppSelectComponent;
}(component_1.AppComponent));
exports.AppSelectComponent = AppSelectComponent;
//# sourceMappingURL=select.component.js.map