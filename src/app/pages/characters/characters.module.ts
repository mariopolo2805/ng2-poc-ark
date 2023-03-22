import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
