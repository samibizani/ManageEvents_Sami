"use strict";
exports.__esModule = true;
exports.AppFilesComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var file_component_1 = require("src/app/components/file/file.component");
var AppFilesComponent = (function () {
    function AppFilesComponent() {
        this.files = new Array();
    }
    AppFilesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-files",
            templateUrl: "./files.component.html",
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                file_component_1.AppFileComponent
            ]
        })
    ], AppFilesComponent);
    return AppFilesComponent;
}());
exports.AppFilesComponent = AppFilesComponent;
//# sourceMappingURL=files.component.js.map