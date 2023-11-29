import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousAddPageRoutingModule } from './rendez-vous-add-routing.module';

import { RendezVousAddPage } from './rendez-vous-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezVousAddPageRoutingModule
  ],
  declarations: [RendezVousAddPage]
})
export class RendezVousAddPageModule {}
