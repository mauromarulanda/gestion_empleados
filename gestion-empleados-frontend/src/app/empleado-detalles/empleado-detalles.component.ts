import {Component, OnInit} from '@angular/core';
import {Empleado} from "../empleado";
import {ActivatedRoute} from "@angular/router";
import {EmpleadoService} from "../empleado.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private servicioEmpleado: EmpleadoService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.servicioEmpleado.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal('Detalles del empleado', this.empleado.nombre);
    })
  }

}
