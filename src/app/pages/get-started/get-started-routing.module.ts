import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TryFreeComponent } from './try-free/try-free.component';

const routes: Routes = [
  { path: 'Try Free' , component: TryFreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartedRoutingModule { }
