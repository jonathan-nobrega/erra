import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListCardComponent } from './list-card.component';



@NgModule({
  declarations: [ListCardComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [ListCardComponent],
})
export class ListCardModule { }
