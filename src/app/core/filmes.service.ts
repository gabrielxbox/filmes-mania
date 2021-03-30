import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

import { Filme } from './../sharad/models/filme';
import { ConfigParames } from '../sharad/models/config-parames';
import { ConfigParamsService } from './config-params.service';


// rota do web-server
const url ='http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient,
              private configervice: ConfigParamsService) { }



  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme);
  }

  editar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(url + filme.id, filme);
  }


  listar(config: ConfigParames): Observable<Filme[]> {
    const configParames = this.configervice.configurarParametros(config);
    return this.http.get<Filme[]>(url, {params: configParames});
  }


  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }

}
