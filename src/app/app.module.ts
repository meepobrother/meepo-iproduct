import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactCommonModule } from 'ng-react-component';
import { IDesignModule, DesignService, DESIGN_COMPONENTS } from 'meepo-idesign';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { IProductModule } from './iproduct';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactCommonModule,
    IProductModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    { provide: DESIGN_COMPONENTS, useValue: [], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
