import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
