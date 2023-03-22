import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { SwitchComponent } from './components/switch/switch.component';
import { IbanPipe } from './pipes/iban.pipe';
import { FormsModule } from '@angular/forms';

const appComponents = [
  LoaderComponent,
  SwitchComponent
];

const appPipes = [
  IbanPipe
];

@NgModule({
  declarations: [
    ...appComponents,
    ...appPipes
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ...appComponents,
    ...appPipes
  ]
})
export class SharedModule { }
