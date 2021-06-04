import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ControlComponent } from './control/control.component';

import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent, children:[
    {path:"", component:AllComponent},
    {path:"add", component:ControlComponent},
    {path:"edit/:id", component:ControlComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
