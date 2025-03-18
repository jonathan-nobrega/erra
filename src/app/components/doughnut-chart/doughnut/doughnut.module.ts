import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DoughnutComponent } from './doughnut.component';



@NgModule({
  declarations: [DoughnutComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [DoughnutComponent]
})
export class DoughnutModule { }
