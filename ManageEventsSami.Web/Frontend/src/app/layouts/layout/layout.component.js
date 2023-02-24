"use strict";
exports.__esModule = true;
exports.AppLayoutComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var footer_component_1 = require("src/app/layouts/footer/footer.component");
var header_component_1 = require("src/app/layouts/header/header.component");
var AppLayoutComponent = (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-layout",
            templateUrl: "./layout.component.html",
            standalone: true,
            imports: [
                router_1.RouterModule,
                footer_component_1.AppFooterComponent,
                header_component_1.AppHeaderComponent
            ]
        })
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());
exports.AppLayoutComponent = AppLayoutComponent;
//# sourceMappingURL=layout.component.js.map