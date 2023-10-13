import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeFournisseur } from 'src/app/model/commandeFournisseur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCommandeFournisseurs(): Observable<CommandeFournisseur[]> {
    return this.http.get<CommandeFournisseur[]>(`${this.apiServerUrl}/commandeFournisseur/all`);
  }

  public addCommandeFournisseur(commandeFournisseur: CommandeFournisseur): Observable<CommandeFournisseur> {
    return this.http.post<CommandeFournisseur>(`${this.apiServerUrl}/commandeFournisseur/add`, commandeFournisseur);
  }

  public updateCommandeFournisseur(commandeFournisseur: CommandeFournisseur): Observable<CommandeFournisseur> {
    return this.http.put<CommandeFournisseur>(`${this.apiServerUrl}/commandeFournisseur/update`, commandeFournisseur);
  }

  public deleteCommandeFournisseur(commandeFournisseurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/commandeFournisseur/delete/${commandeFournisseurId}`);
  }
}
