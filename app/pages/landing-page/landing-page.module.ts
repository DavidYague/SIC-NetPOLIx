import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbListModule,
  NbDatepickerModule, NbIconModule,
  NbStepperModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule,
  NbPopoverModule,
} from '@nebular/theme';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-page-routing.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { LandingPageComponent } from './landing-page.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports: [
    NbPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbListModule,
    NbDatepickerModule, NbIconModule,
    NbStepperModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbTreeGridModule,
    LandingRoutingModule,
  ],
  declarations: [
    LandingPageComponent,
    PeliculasComponent,
    SeriesComponent,
    ColeccionesComponent,
    InicioComponent
  ],
})
export class LandingPageModule { }
