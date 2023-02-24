"use strict";
exports.__esModule = true;
exports.AppFormComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var button_component_1 = require("src/app/components/button/button.component");
var label_component_1 = require("src/app/components/label/label.component");
var comment_select_component_1 = require("src/app/components/select/comment.select.component");
var post_select_component_1 = require("src/app/components/select/post.select.component");
var user_select_component_1 = require("src/app/components/select/user.select.component");
var text_input_component_1 = require("src/app/components/input/text.input.component");
var AppFormComponent = (function () {
    function AppFormComponent() {
        this.disabled = false;
        this.form = core_1.inject(forms_1.FormBuilder).group({
            Name: ["", forms_1.Validators.maxLength(32)],
            Description: [""],
            StartDate: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
                ]],
            EndDate: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
                ]],
            Location: [""]
        });
    }
    AppFormComponent.prototype.saveNewEntry = function () {
        return;
    };
    AppFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-form",
            templateUrl: "./form.component.html",
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                button_component_1.AppButtonComponent,
                label_component_1.AppLabelComponent,
                comment_select_component_1.AppSelectCommentComponent,
                post_select_component_1.AppSelectPostComponent,
                user_select_component_1.AppSelectUserComponent,
                text_input_component_1.AppInputTextComponent
            ]
        })
    ], AppFormComponent);
    return AppFormComponent;
}());
exports.AppFormComponent = AppFormComponent;
//# sourceMappingURL=form.component.js.map