"use strict";
exports.__esModule = true;
exports.AppFileComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var component_1 = require("src/app/components/component");
var file_model_1 = require("./file.model");
var upload_model_1 = require("./upload.model");
var AppFileComponent = (function (_super) {
    tslib_1.__extends(AppFileComponent, _super);
    function AppFileComponent(appFileService) {
        var _this = _super.call(this) || this;
        _this.appFileService = appFileService;
        _this.disabled = false;
        _this.uploads = new Array();
        return _this;
    }
    AppFileComponent_1 = AppFileComponent;
    AppFileComponent.prototype.change = function (files) {
        var _this = this;
        if (!files) {
            return;
        }
        var _loop_1 = function (index) {
            var file = files.item(index);
            var upload = new upload_model_1.UploadModel(file.name, 0);
            this_1.uploads.push(upload);
            this_1.appFileService.upload(file).subscribe(function (result) {
                upload.progress = result.progress;
                if (result.id) {
                    _this.value.push(new file_model_1.FileModel(result.id, file.name));
                    _this.uploads = _this.uploads.filter(function (x) { return x.progress < 100; });
                }
            });
        };
        var this_1 = this;
        for (var index = 0; index < files.length; index++) {
            _loop_1(index);
        }
    };
    var AppFileComponent_1;
    tslib_1.__decorate([
        core_1.Input()
    ], AppFileComponent.prototype, "class");
    tslib_1.__decorate([
        core_1.Input()
    ], AppFileComponent.prototype, "disabled");
    tslib_1.__decorate([
        core_1.Input()
    ], AppFileComponent.prototype, "formControlName");
    tslib_1.__decorate([
        core_1.Input()
    ], AppFileComponent.prototype, "text");
    AppFileComponent = AppFileComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: "app-file",
            templateUrl: "./file.component.html",
            standalone: true,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: AppFileComponent_1, multi: true }],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], AppFileComponent);
    return AppFileComponent;
}(component_1.AppComponent));
exports.AppFileComponent = AppFileComponent;
//# sourceMappingURL=file.component.js.map