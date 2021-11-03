import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: "root",
})

export class TestServiceService {

  private apiUrl = 'https://localhost:5001/actions/';

  constructor(private http: HttpClient) { }

  public async get401(): Promise<any> {
    return await this.http.get<any>(this.apiUrl + "401").toPromise();;
  }

  public async get404(): Promise<any> {
    return await this.http.get<any>(this.apiUrl + "404").toPromise();;
  }

  public async get418(): Promise<any> {
    return await this.http.get<any>(this.apiUrl + "418").toPromise();;
  }

  public async get500(): Promise<any> {
    return await this.http.get<any>(this.apiUrl + "500").toPromise();;
  }

}
