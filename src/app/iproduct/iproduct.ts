import { Component, OnInit, KeyValueDiffers, Input, InjectionToken, Inject } from '@angular/core';
import { PreviewComponents } from 'meepo-common-components';
import { ReactComponent } from 'ng-react-component';
import { HttpClient } from '@angular/common/http';
export const PREVIEW_COMPONENTS = new InjectionToken('PREVIEW_COMPONENTS');

export interface IProductProps {
    api: string;
}
export interface IProductState {
    loading: boolean;
}

@Component({
    selector: 'iproduct',
    templateUrl: './iproduct.html',
    styleUrls: ['./iproduct.scss']
})
export class IProductComponent extends ReactComponent<IProductProps, IProductState> implements OnInit {
    components: any[] = [];
    constructor(
        private differs: KeyValueDiffers,
        private http: HttpClient,
        @Inject(PREVIEW_COMPONENTS) private allComponents: any[]
    ) {
        super(differs);
    }

    ngOnInit() {
        this.props = this.props || { api: '' };
        this.http.get(this.props.api).subscribe((res: any) => {
            this.components = res.info;
        });
    }

    onStateChange() { }
    onPropsChange() { }

    getComponentByName(name: string) {
        let com: any;
        for (const key in this.allComponents) {
            const res = this.allComponents[key];
            if (res.name === name) {
                com = res;
            }
        }
        return com;
    }
}
