import { HttpTokenInterceptor } from './providers/http-token.interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { TranslateModule } from './translate/translate.module';

const ngModules = [
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    TranslateModule,
    ...ngModules,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  exports: [
    LayoutModule,
    TranslateModule
  ]
})
export class CoreModule {
  /* Make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
