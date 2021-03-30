import { CampoGenerico } from './campo-generico';
/// clase interface utilizado para paginação
export interface ConfigParames {
  pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: CampoGenerico;

}
