import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/model/supplier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiServerUrl}/supplier/all`);
  }

  public addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiServerUrl}/supplier/add`, supplier);
  }

  public deleteSupplier(supplierId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/supplier/delete/${supplierId}`);
  }
}
