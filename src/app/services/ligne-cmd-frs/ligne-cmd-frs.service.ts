import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigneCmdFrs } from 'src/app/model/ligneCmdFrs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LigneCmdFrsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getLigneCmdFrs(): Observable<LigneCmdFrs[]> {
    return this.http.get<LigneCmdFrs[]>(`${this.apiServerUrl}/ligneCommandeFournisseur/all`);
  }

  public addLigneCmdFrs(ligneCmdFrs: LigneCmdFrs): Observable<LigneCmdFrs> {
    return this.http.post<LigneCmdFrs>(`${this.apiServerUrl}/ligneCommandeFournisseur/add`, ligneCmdFrs);
  }

  public deleteLigneCmdFrs(ligneCmdFrsId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneCommandeFournisseur/delete/${ligneCmdFrsId}`);
  }
}
