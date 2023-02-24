import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { AppButtonComponent } from "src/app/components/button/button.component";
import { AppLabelComponent } from "src/app/components/label/label.component";
import { AppSelectCommentComponent } from "src/app/components/select/comment.select.component";
import { AppSelectPostComponent } from "src/app/components/select/post.select.component";
import { AppSelectUserComponent } from "src/app/components/select/user.select.component";
import { AppInputTextComponent } from "src/app/components/input/text.input.component";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppButtonComponent,
        AppLabelComponent,
        AppSelectCommentComponent,
        AppSelectPostComponent,
        AppSelectUserComponent,
        AppInputTextComponent
    ]
})
export class AppFormComponent {
    disabled = false;

    form = inject(FormBuilder).group({
        Name: ["", Validators.maxLength(32)],
        Description: [""],
        StartDate: ["", [
            Validators.required,
            Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
        ]],
        EndDate: ["", [
            Validators.required,
            Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
        ]],
        Location: [""]
    });

    saveNewEntry() {
        return;
    }
}
