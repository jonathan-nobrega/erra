import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChoreCardModule } from 'src/app/chores/chore-card/chore-card.module';
import { DoughnutModule } from 'src/app/components/doughnut-chart/doughnut/doughnut.module';
import { ListDetailsComponent } from './list-details.component';
import { AvatarComponent } from "../../components/avatar/avatar.component";



@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    ChoreCardModule,
    DoughnutModule,
    AvatarComponent
],
  declarations: [ListDetailsComponent],
  exports: [ListDetailsComponent]
})
export class ListDetailsModule { }
