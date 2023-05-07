import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AuthService } from '../services/auth.service';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule


  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}