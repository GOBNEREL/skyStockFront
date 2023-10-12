import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigneCmdClt } from 'src/app/model/ligneCmdClt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LigneCmdCltService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getLigneCmdClt(): Observable<LigneCmdClt[]> {
    return this.http.get<LigneCmdClt[]>(`${this.apiServerUrl}/ligneCommandeClient/all`);
  }

  public addLigneCmdClt(ligneCmdClt: LigneCmdClt): Observable<LigneCmdClt> {
    return this.http.post<LigneCmdClt>(`${this.apiServerUrl}/ligneCommandeClient/add`, ligneCmdClt);
  }

  public deleteLigneCmdClt(ligneCmdCltId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneCommandeClient/delete/${ligneCmdCltId}`);
  }
}
