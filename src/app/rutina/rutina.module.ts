import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EjercicioModule } from '../ejercicio/ejercicio.module';
import { RutinaCrearComponent } from './rutina-crear/rutina-crear.component';
import { ToastrModule } from 'ngx-toastr';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { RutinaListaComponent } from './rutina-lista/rutina-lista.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    EncabezadoAppModule,
    EjercicioModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    RutinaCrearComponent,
    RutinaListaComponent,
    RouterModule,
  ],
  declarations: [
    RutinaCrearComponent,
    RutinaListaComponent
  ]
})
export class RutinaModule { }
