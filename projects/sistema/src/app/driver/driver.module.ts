import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [FormComponent, PageListComponent],
  imports: [CommonModule, DriverRoutingModule],
})
export class DriverModule {}
