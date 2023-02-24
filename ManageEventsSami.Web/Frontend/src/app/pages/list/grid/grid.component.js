"use strict";
exports.__esModule = true;
exports.AppListGridComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var button_component_1 = require("src/app/components/button/button.component");
var text_input_component_1 = require("src/app/components/input/text.input.component");
var order_component_1 = require("src/app/components/grid/order/order.component");
var page_component_1 = require("src/app/components/grid/page/page.component");
var grid_model_1 = require("src/app/components/grid/grid.model");
var grid_parameters_model_1 = require("src/app/components/grid/grid-parameters.model");
var AppListGridComponent = (function () {
    function AppListGridComponent(appUserService) {
        this.appUserService = appUserService;
        this.filters = core_1.inject(forms_1.FormBuilder).group({
            Id: new forms_1.FormControl(),
            Name: new forms_1.FormControl(),
            Description: new forms_1.FormControl(),
            StartDate: new forms_1.FormControl(),
            EndDate: new forms_1.FormControl()
        });
        this.grid = new grid_model_1.GridModel();
        this.init();
    }
    AppListGridComponent.prototype.load = function () {
        var _this = this;
        this.appUserService.grid(this.grid.parameters).subscribe(function (grid) { return _this.grid = grid; });
    };
    AppListGridComponent.prototype.filter = function () {
        this.grid.parameters = new grid_parameters_model_1.GridParametersModel();
        this.grid.parameters.filters.addFromFormGroup(this.filters);
        this.load();
    };
    AppListGridComponent.prototype.init = function () {
        var _this = this;
        this.grid.parameters.order.property = "Id";
        this.filters.valueChanges.pipe(operators_1.debounceTime(0)).subscribe(function () { return _this.filter(); });
        this.load();
    };
    AppListGridComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-list-grid",
            templateUrl: "./grid.component.html",
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                order_component_1.AppOrderComponent,
                page_component_1.AppPageComponent,
                button_component_1.AppButtonComponent,
                text_input_component_1.AppInputTextComponent
            ]
        })
    ], AppListGridComponent);
    return AppListGridComponent;
}());
exports.AppListGridComponent = AppListGridComponent;
//# sourceMappingURL=grid.component.js.map