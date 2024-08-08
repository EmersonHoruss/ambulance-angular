import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DriverRoutingModule,
    FormComponent,
    PageListComponent,
  ],
})
export class DriverModule {}
