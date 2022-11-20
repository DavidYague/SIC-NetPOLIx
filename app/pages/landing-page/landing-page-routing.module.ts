import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'series',
        component: SeriesComponent,
      },
      {
        path: 'peliculas',
        component: PeliculasComponent,
      },
      {
        path: 'colecciones',
        component: ColeccionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LandingRoutingModule {
}


