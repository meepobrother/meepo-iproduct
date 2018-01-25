import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IProductComponent } from './iproduct';

@NgModule({
    declarations: [
        IProductComponent
    ],
    exports: [
        IProductComponent
    ],
    imports: [
        HttpClientModule
    ],
})
export class IProductModule {}
