import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoresPage } from './chores.page';

const routes: Routes = [
  {
    path: '',
    component: ChoresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
