import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JosuevgInfoFacebookService {

  constructor(private http: HttpClient) { }

  getInfoFacebook(): Observable<any> {
    return this.http.get(`https://epublic.s3-sa-east-1.amazonaws.com/josuevg/josuevg_info_facebook.json`)
  }

}
