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
export class BookKeepingService {

  private keepingAPI = "/api/keeping";

  constructor(
    private http: HttpClient
  ) { }

  getChargeKeepings(): Observable<Keeping[]> {
    const url = `${this.keepingAPI}`;
    return this.http.get<Keeping[]>(url, httpOptions)
  } 

  getChargeKeeping(id: number): Observable<Keeping> {
    const url = `${this.keepingAPI}/${id}`;
    return this.http.get<Keeping>(url, httpOptions);
  }

  addChargeKeeping(keeping: Keeping): Observable<JSON> {
    const url = `${this.keepingAPI}`;
    return this.http.post<JSON>(url, keeping, httpOptions);
  }

  editChargeKeeping(keeping: Keeping): Observable<Keeping> {
    return this.http.put<Keeping>(this.keepingAPI, keeping, httpOptions);
  }

  deleteChargeKeeping(id: number ): Observable<JSON> {
    const url = `${this.keepingAPI}/${id}`;
    return this.http.delete<JSON>(url, httpOptions)
  }

  getLastKeeping(): Observable<Keeping> {
    const url = `${this.keepingAPI}/last`;
    return this.http.get<Keeping>(url, httpOptions);
  }

}
