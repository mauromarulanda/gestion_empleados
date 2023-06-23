import {Component, OnInit} from '@angular/core';
import {Empleado} from "../empleado";
import {EmpleadoService} from "../empleado.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(private empleadoServicio: EmpleadoService, private router: Router) {
  }

  ngOnInit(): void {
    // console.log(this.empleado);
  }

  guardaEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
        console.log(dato)
        this.irALista();
      },
      error => console.log(error)
    )
  }

  irALista() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.guardaEmpleado();
  }

}
