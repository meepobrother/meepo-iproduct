import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { IProductComponent } from './iproduct';
import { NgComponentDirective } from './ng-component';
@NgModule({
    declarations: [
        IProductComponent,
        NgComponentDirective
    ],
    exports: [
        IProductComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ],
})
export class IProductModule {}
