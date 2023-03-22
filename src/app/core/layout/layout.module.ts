import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    LayoutComponent,
    NotFoundComponent,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
