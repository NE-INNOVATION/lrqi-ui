import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CommonService {

    constructor(private _http: HttpClient) { }

    get(url : string) : Observable<any> {
        return this._http.get(url)
    }

    post(url : string, body: any) :Observable<any> {
        return this._http.post(url, body);
    }

}