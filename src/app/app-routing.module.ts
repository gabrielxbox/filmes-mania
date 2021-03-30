import { VisualizarComponent } from './filmes/visualizar/visualizar.component';
import { ValidarCamposService } from './sharad/components/campos/validar-campos.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { FilmesModel } from './filmes/filmes-model';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'
  },

  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: ListagemFilmesComponent
      },
      {
        path: 'cadastro',
        children: [
            {
              path: '',
              component: CadastroFilmesComponent
            },
            {
              path: ':id',
              component: CadastroFilmesComponent
            }
        ]
      },
       {
        path: ':id',
        component: VisualizarComponent,
        pathMatch: 'full'

      }


    ]
  },
  {path: '**', redirectTo:'filmes'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FilmesModel
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
