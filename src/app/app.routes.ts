import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MargaritaComponent } from './margarita/margarita.component';
import { VodkaComponent } from './vodka/vodka.component';
import { VinoComponent } from './vino/vino.component';
import { TequilaComponent } from './tequila/tequila.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'margarita', component: MargaritaComponent },
  { path: 'vod', component: VodkaComponent },
  { path: 'vino', component: VinoComponent },
  { path: 'tequila', component: TequilaComponent },
];
