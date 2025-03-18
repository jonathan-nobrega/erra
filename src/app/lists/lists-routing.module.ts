import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListsPage } from './lists.page';

const routes: Routes = [
  {
    path: '',
    component: ListsPage,
  },
  {
    path: ':id',
    component: ListDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsPageRoutingModule { }
