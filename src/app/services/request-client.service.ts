import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders
} from "../../../node_modules/@angular/common/http";
import { retry, catchError } from "rxjs/operators";
import { of } from "../../../node_modules/rxjs";
@Injectable({
  providedIn: "root"
})
export class RequestClientService {
  public constructor(private httpClient: HttpClient) {}

  public getToken(): string {
    return "Bearer " + sessionStorage.getItem("access_token");
  }

  public queryServer(
    query: { url: string; method: string },
    param: any,
    headers?
  ): Promise<any> {
    switch (query.method) {
      case "post": {
        const headerOptions = this.createHeaders(headers);
        return this.httpClient
          .post(query.url, param, { headers: headerOptions })
          .pipe(catchError(this.throwError))
          .toPromise()
          .then(this.checkResponeData);
      }
      case "post-form-data": {
        const headerOptions = this.createHeaders(headers);
        return this.httpClient
          .post(query.url, param, { headers: headerOptions })
          .pipe(catchError(this.throwError))
          .toPromise()
          .then(this.checkResponeData);
      }
      case "get":
        return this.httpClient
          .get(query.url, {
            params: param,
            headers: this.createHeaders(headers)
          })
          .pipe(catchError(this.throwError))
          .toPromise()
          .then(this.checkResponeData);
      case "put": {
        const headerOptions = this.createHeaders(headers);
        return this.httpClient
          .put(query.url, param, { headers: headerOptions })
          .pipe(catchError(this.throwError))
          .toPromise()
          .then(this.checkResponeData);
      }
      case "delete": {
        return this.httpClient
          .delete(query.url, {
            headers: this.createHeaders(headers),
            params: param
          })
          .pipe(catchError(this.throwError))
          .toPromise()
          .then(this.checkResponeData);
      }
    }
  }

  public createHeaders(header?) {
    let formObject;
    if (sessionStorage.getItem("access_token")) {
      formObject = {
        Authorization: this.getToken()
      };
    }
    Object.assign(formObject, header);
    let httpHeaders = new HttpHeaders(formObject);
    return httpHeaders;
  }
  public checkResponeData(res) {
    return res;
  }
  public throwError(error) {
    retry(2);
    console.error(error);
    if (error.error) {
      return of(error.error);
    } else {
      return of({ item: "未知错误" });
    }
  }
}
