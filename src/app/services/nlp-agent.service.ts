import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { v4 as uuid } from 'uuid' ;


@Injectable({
  providedIn: 'root'
})
export class NlpAgentService {

 
  constructor(private http: HttpClient) { }
  session_uuid: any;
  /**
 * createUUID
 */

  public createUUID() {
   this.session_uuid = uuid();
   console.log("UUID: ", this.session_uuid);
  }

  /**
  * async sendToBot
  msg */
  public async sendToBot(msg: string) {
    const url = 'http://localhost:5005/';
    const body = {"sender": this.session_uuid, "message": msg};
    const data = await this.http.post<Array<any>>(url, body).toPromise();
    return data;

  }

  
}

 
