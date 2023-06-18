import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private http: HttpClient) { }


  async editAccount(account: any) {
    const result = await this.http.put<any>(`${environment.api}/profile`, account).toPromise();
    return result;
  }

}
