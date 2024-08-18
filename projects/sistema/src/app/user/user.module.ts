import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserInfraestructure } from './infraestructure/user.infraestructure';

const declarations = [FormComponent, PageListComponent];
const imports = [CommonModule, UserRoutingModule, SharedModule];
const providers = [UserInfraestructure];

@NgModule({
  declarations,
  imports,
  providers,
})
export class UserModule {}
