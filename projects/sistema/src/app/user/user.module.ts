import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutingModule, FormComponent, PageListComponent],
})
export class UserModule {}
