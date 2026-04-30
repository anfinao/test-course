import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormField, MatLabel, MatInput } from "@angular/material/input";
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { MatAnchor } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent } from '@angular/material/dialog';

type CategoryData = {
    name: string;
}

@Component({
    selector: 'app-category-form',
    imports: [
        MatFormField, MatLabel,
        MatInput, FormsModule,
        ReactiveFormsModule, MatAnchor,
        MatDialogActions, MatDialogContent
    ],
    templateUrl: './category-form.html',
    styleUrl: './category-form.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryForm {
    private readonly dialogRef = inject(MatDialogRef<CategoryForm>);
    private readonly data = inject<CategoryData>(MAT_DIALOG_DATA);

    protected readonly form = new FormGroup({
        name: new FormControl('', [Validators.required])
    });

    protected onSubmit(): void {
        console.log({ data: this.data });
        if (this.form.invalid) {
            return;
        }

        this.dialogRef.close(this.form.getRawValue());
    }
}
