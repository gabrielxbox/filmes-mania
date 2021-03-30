import { ConfigParames } from './../../sharad/models/config-parames';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { Filme } from './../../sharad/models/filme';
import { FilmesService } from './../../core/filmes.service';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigParames = {
    pagina: 0,
    limite: 4
  };

  filmes: Filme[] = [];
  filtroListagem: FormGroup;
  generos: Array<string>;

  constructor(private filmesService: FilmesService,
              private fb: FormBuilder,
              private router: Router) { }

  // ele inicia primeiro
  ngOnInit(): void {
    this.filtroListagem = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.filtroListagem.get('texto').valueChanges
    .pipe(debounceTime(400))// criar um delei na hora da busca
    .subscribe((val: string) => {
      this.config.pesquisa = val;
      this.resetarConsulta();
      });

      this.filtroListagem.get('genero').valueChanges
        .subscribe((val: string) => {
        this.config.campo = {tipo: 'genero', valor: val};
        this.resetarConsulta();
      });

      this.generos = ['Ação','Romance','Aventura','Terror','Ficção','Cientifica','Comédia','Aventura','Drama'];

      this.listarFilmes();

  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmesService.listar(this.config)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();

  }

  abrir(id: number) : void {
    this.router.navigateByUrl('/filmes/' + id);
  }

}
