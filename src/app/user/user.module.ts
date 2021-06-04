import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ControlComponent } from './control/control.component';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [UserComponent, ControlComponent, AllComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ThemeModule,
    NbMenuModule,
  ]
})
export class UserModule { }
