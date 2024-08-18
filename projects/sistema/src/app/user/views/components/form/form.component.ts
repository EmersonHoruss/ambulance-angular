import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  group: FormGroup;
  title: string;

  constructor(
    private readonly dialogRefence: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = `${this.data ? 'Edit' : 'Add'} User`;
    this.group = new FormGroup({
      id: new FormControl(this.data?.id ?? ''),
      name: new FormControl(this.data?.name ?? '', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+/),
      ]),
      surname: new FormControl(this.data?.surname ?? '', [Validators.required]),
    });
  }

  save() {
    if (this.group.invalid) return;

    const values = this.group.value;
    this.dialogRefence.close(values);
  }
}
