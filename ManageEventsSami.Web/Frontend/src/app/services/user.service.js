"use strict";
exports.__esModule = true;
exports.AppUserService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AppUserService = (function () {
    function AppUserService(http, gridService) {
        var _this = this;
        this.http = http;
        this.gridService = gridService;
        this.add = function (user) { return _this.http.post("api/users", user); };
        this["delete"] = function (id) { return _this.http["delete"]("api/users/" + id); };
        this.get = function (id) { return _this.http.get("api/users/" + id); };
        this.grid = function (parameters) { return _this.gridService.get("api/users/grid", parameters); };
        this.inactivate = function (id) { return _this.http.patch("api/users/" + id + "/inactivate", {}); };
        this.list = function () { return _this.http.get("api/users"); };
        this.update = function (user) { return _this.http.put("api/users/" + user.id, user); };
    }
    AppUserService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: "root" })
    ], AppUserService);
    return AppUserService;
}());
exports.AppUserService = AppUserService;
//# sourceMappingURL=user.service.js.map