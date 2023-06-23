import {Component, OnInit} from '@angular/core';
import {Empleado} from "../empleado";
import {EmpleadoService} from "../empleado.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router: Router) {
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
    // this.empleados = [{
    //   "id": 1,
    //   "nombre": "carlos",
    //   "apellido": "pabon",
    //   "email": "carlos@gmail.com"
    // }, {
    //   "id": 2,
    //   "nombre": "alba",
    //   "apellido": "marulanda",
    //   "email": "alba@gmail.com"
    // },
    // ];
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
    // this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
    //   this.obtenerEmpleados();
    // });
  }

  verDetallesDeEmpleado(id:number){
  this.router.navigate(['empleado-detalle',id]);
  }
}
