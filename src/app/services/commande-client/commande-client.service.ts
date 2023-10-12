import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeClient } from 'src/app/model/commandeClient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCommandeClients(): Observable<CommandeClient[]> {
    return this.http.get<CommandeClient[]>(`${this.apiServerUrl}/commandeClient/all`);
  }

  public addCommandeClient(commandeClient: CommandeClient): Observable<CommandeClient> {
    return this.http.post<CommandeClient>(`${this.apiServerUrl}/commandeClient/add`, commandeClient);
  }

  public deleteCommandeClient(commandeClientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/commandeClient/delete/${commandeClientId}`);
  }
}
