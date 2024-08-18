import { Component } from '@angular/core';

@Component({
  selector: 'amb-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
})
export class ConfirmComponent {
  messageToConfirm = 'Are you sure?';
}