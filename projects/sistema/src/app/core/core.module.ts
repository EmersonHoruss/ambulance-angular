import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
