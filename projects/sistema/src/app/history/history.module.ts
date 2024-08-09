import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [FormComponent, PageListComponent],
  imports: [CommonModule, HistoryRoutingModule],
})
export class HistoryModule {}
