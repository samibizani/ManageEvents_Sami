"use strict";
exports.__esModule = true;
exports.AppNavComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppNavComponent = (function () {
    function AppNavComponent(appAuthService) {
        var _this = this;
        this.appAuthService = appAuthService;
        this.signout = function () { return _this.appAuthService.signout(); };
    }
    AppNavComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-nav",
            templateUrl: "./nav.component.html",
            standalone: true,
            imports: [
                router_1.RouterModule
            ]
        })
    ], AppNavComponent);
    return AppNavComponent;
}());
exports.AppNavComponent = AppNavComponent;
//# sourceMappingURL=nav.component.js.map