import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient
    ) { }

    get(__do: string, __m: string = 'imeepos_runner') {
        const url: string = '';
        if (isDevMode()) {
            return this.http.get(url);
        } else {
            return this.http.get(url);
        }
    }
}
