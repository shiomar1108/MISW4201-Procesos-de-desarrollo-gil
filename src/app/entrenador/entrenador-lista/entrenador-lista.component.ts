import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/persona/persona';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-entrenador-lista',
  templateUrl: './entrenador-lista.component.html',
  styleUrls: ['./entrenador-lista.component.css']
})
export class EntrenadorListaComponent implements OnInit {

  elegida: Boolean = false
  entrenadores: Array<Persona>
  entrenadorElegido: Persona

  constructor(
    private routerPath: Router,
    private entrenadorService: EntrenadorService,
    private toastr: ToastrService,
  ) { }

  entrenadorCrear(): void { }

  entrenadorDetalles(id: number): void { }

  entrenadorEditar(id: number): void { }

  entrenadorEliminar(id: number): void {
    this.entrenadorService.eliminarEntrenador(id).subscribe((persona) => {
      this.toastr.success("Confirmation", "Entrenador eliminado de la lista")
      this.ngOnInit();
    },
      error => {
        if (error.statusText === "UNAUTHORIZED") {
          this.toastr.error("Error", "Su sesión ha caducado, por favor vuelva a iniciar sesión.")
        }
        else if (error.statusText === "UNPROCESSABLE ENTITY") {
          this.toastr.error("Error", "No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
        }
        else if (error.statusText === "CONFLICT") {
          this.toastr.error("Error", `No se pudo eliminar entrenador: ${error.error}`)
        }
        else {
          this.toastr.error("Error", "Ha ocurrido un error. " + error.message)
        }
      })
  }

  ngOnInit() {
    this.entrenadorService.darEntrenadores().subscribe((entrenadores) => {
      this.entrenadores = entrenadores;
    })
  }

}
