import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ChoresPage } from './chores.page';

import { Tab2PageRoutingModule } from './chores-routing.module';
import { ChoreCardModule } from "./chore-card/chore-card.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    ChoreCardModule
],
  declarations: [ChoresPage]
})
export class ChoresPageModule {}
