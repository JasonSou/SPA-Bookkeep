import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Keeping } from '../book-keeping';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookKeeppingService {

  private keeppingAPI = "/api/keepping/";

  constructor(
    private http: HttpClient
  ) { }

  getChargeKeeppings(): Observable<Keeping[]> {
    return this.http.get<Keeping[]>(this.keeppingAPI, httpOptions)
  } 

  getChargeKeepping(id: number): Observable<Keeping> {
    return this.http.get<Keeping>(this.keeppingAPI + id, httpOptions);
  }

  addChargeKeepping(keepping: Keeping): Observable<Boolean> {
    return this.http.post<Boolean>(this.keeppingAPI, keepping, httpOptions);
  }

  editChargeKeepping(keeping: Keeping): Observable<Keeping> {
    return this.http.put<Keeping>(this.keeppingAPI, keeping, httpOptions);
  }

  deleteChargeKeepping(id: number ): Observable<Boolean> {
    return this.http.delete<Boolean>(this.keeppingAPI + id, httpOptions)
  }
}
