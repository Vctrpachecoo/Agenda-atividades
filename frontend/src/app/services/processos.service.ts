import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {
  private apiUrl = 'http://localhost:8080/api/atividades/execucoes';

  constructor(private http: HttpClient) {}

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.apiUrl);
  }
}

// Defina a interface Processo
export interface Processo {
  nome: string;
  descricao: string;
  ultimaAtualizacao: string;
  proximaExecucao: string; 
}
