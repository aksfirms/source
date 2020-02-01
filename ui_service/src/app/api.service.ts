import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:8080/api/hello";

  constructor(private httpClient: HttpClient,
              private fAuth : AngularFireAuth ) { }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }
}