import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
  ],
  exports: [HeaderComponent, SidebarComponent, MenuComponent],
})
export class CoreModule {}
