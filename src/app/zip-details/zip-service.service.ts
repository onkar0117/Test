import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ZipDetail } from './zip.model';

@Injectable({
  providedIn: 'root'
})
export class ZipServiceService {

  constructor(private httpClient: HttpClient) { }

  readonly Url = environment.rootUrl + environment.zip;

  GetZip(postalCode: number): Observable<ZipDetail> {
    let params = new HttpParams()
      .set('postalCode', postalCode.toString());


    const options = { params: params };

    return this.httpClient.get<ZipDetail>(this.Url, options);
  }
}
