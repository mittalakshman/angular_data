import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailsectorComponent } from './retailsector/retailsector.component';

const routes: Routes = [
  {
    path:"sample",
    component:RetailsectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
