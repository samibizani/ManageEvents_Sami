"use strict";
exports.__esModule = true;
exports.DatepickerComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var core_2 = require("@angular/material/core");
require("moment/locale/ja");
require("moment/locale/fr");
var DatepickerComponent = (function () {
    function DatepickerComponent(_adapter, _locale) {
        this._adapter = _adapter;
        this._locale = _locale;
    }
    DatepickerComponent.prototype.french = function () {
        this._locale = 'fr';
        this._adapter.setLocale(this._locale);
    };
    DatepickerComponent.prototype.getDateFormatString = function () {
        return 'YYYY/MM/DD';
    };
    DatepickerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-input-datepicker',
            templateUrl: './datepicker.component.html',
            styleUrls: ['./datepicker.component.scss'],
            providers: [
                { provide: core_2.MAT_DATE_LOCALE, useValue: 'ca-FR' },
                {
                    provide: core_2.DateAdapter,
                    useClass: material_moment_adapter_1.MomentDateAdapter,
                    deps: [core_2.MAT_DATE_LOCALE, material_moment_adapter_1.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: core_2.MAT_DATE_FORMATS, useValue: material_moment_adapter_1.MAT_MOMENT_DATE_FORMATS },
            ]
        }),
        tslib_1.__param(1, core_1.Inject(core_2.MAT_DATE_LOCALE))
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map