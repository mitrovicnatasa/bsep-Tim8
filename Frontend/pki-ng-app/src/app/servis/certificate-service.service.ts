import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {Certificate} from "../model/certificate";
import {CertificateDB} from "../model/certificateDB";

@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {

  private URL: string;

  constructor(private http: HttpClient) {
    //url koji prihvata sertifikate iz spring aplikacije
    this.URL='http://localhost:9090/api/generate';
  }

  public getAllCertificates() : Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.URL + '/allCertificates');
  }

  public getAllPossibleIssuers() :  Observable<CertificateDB[]> {
    return this.http.get<CertificateDB[]>( this.URL+'/allPossibleIssuers');
  }
}
