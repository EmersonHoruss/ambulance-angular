import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [TitleComponent, ContainerComponent],
  imports: [CommonModule, MatIconModule, MatCardModule],
  exports: [TitleComponent, MatIconModule, MatButtonModule, ContainerComponent],
})
export class SharedModule {}
