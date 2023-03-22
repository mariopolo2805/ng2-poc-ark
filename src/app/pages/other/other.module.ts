import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SharedModule
  ]
})
export class OtherModule { }
