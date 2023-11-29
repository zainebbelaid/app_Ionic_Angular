import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormuPageRoutingModule } from './formu-routing.module';

import { FormuPage } from './formu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormuPageRoutingModule
  ],
  declarations: [FormuPage]
})
export class FormuPageModule {}
