import { VisualizarComponent } from './visualizar/visualizar.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from './../sharad/material/material.module';

import { CamposModule } from './../sharad/components/campos/campos.module';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations:[CadastroFilmesComponent, ListagemFilmesComponent, VisualizarComponent]
})
export class FilmesModel {}
