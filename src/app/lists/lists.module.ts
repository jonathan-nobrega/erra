import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ListCardModule } from './list-card/list-card.module';
import { ListDetailsModule } from './list-details/list-details.module';
import { ListsPageRoutingModule } from './lists-routing.module';
import { ListsPage } from './lists.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ListsPageRoutingModule,
    ListCardModule,
    ListDetailsModule,
],
  declarations: [ListsPage]
})
export class ListsPageModule {}
