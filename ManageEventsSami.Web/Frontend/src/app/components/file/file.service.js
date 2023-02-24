"use strict";
exports.__esModule = true;
exports.AppFileService = void 0;
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var upload_model_1 = require("./upload.model");
var AppFileService = (function () {
    function AppFileService(http) {
        this.http = http;
    }
    AppFileService.prototype.upload = function (file) {
        var _this = this;
        var formData = new FormData();
        formData.append(file.name, file);
        var request = new http_1.HttpRequest("POST", "files", formData, { reportProgress: true });
        return new rxjs_1.Observable(function (observable) {
            _this.http.request(request).subscribe(function (event) {
                if (event.type === http_1.HttpEventType.Response) {
                    return observable.next(new upload_model_1.UploadModel(event.body[0].id, 100));
                }
                if (event.type === http_1.HttpEventType.UploadProgress && event.total) {
                    var progress = Math.round(100 * event.loaded / event.total);
                    return observable.next(new upload_model_1.UploadModel("", progress));
                }
                return observable.next(new upload_model_1.UploadModel("", 0));
            });
        });
    };
    AppFileService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: "root" })
    ], AppFileService);
    return AppFileService;
}());
exports.AppFileService = AppFileService;
//# sourceMappingURL=file.service.js.map