import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MedicRoutingModule, FormComponent, PageListComponent],
})
export class MedicModule {}
