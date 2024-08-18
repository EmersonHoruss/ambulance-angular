import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  group: FormGroup;

  constructor(private readonly dialogRefence: MatDialogRef<FormComponent>) {
    this.group = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+/),
      ]),
      surname: new FormControl('', [Validators.required]),
    });
  }

  save() {
    if (this.group.invalid) return;

    const values = this.group.value;
    this.dialogRefence.close(values);
  }
}
