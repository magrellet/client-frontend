import { Injectable } from '@angular/core';

import { CLIENTS } from './clients.json';
import { Client } from './client.js';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndpoint: string = 'http://localhost:8080/api/clients';
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Client[])
    );
  }
}
