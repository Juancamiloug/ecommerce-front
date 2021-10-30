import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ClienteI} from '../../modelos/cliente.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  datosCliente: ClienteI | any;
  editarForm = new FormGroup({
    nombre: new FormControl('',),
    apellido: new FormControl('',),
    cedula: new FormControl('',),
    correo: new FormControl('',),
    telefono: new FormControl('',),
  });

  ngOnInit(): void {
    let clienteid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getOneClientes(clienteid).subscribe(data =>{ 
      this.datosCliente= data;
      this.editarForm.setValue({
        'nombre': this.datosCliente.nombre,
        'apellido': this.datosCliente.apellido,
        'cedula': this.datosCliente.cedula,
        'correo': this.datosCliente.correo,
        'telefono': this.datosCliente.telefono
      });
    })
  }
  postForm(form:ClienteI){
    let clienteid = this.activerouter.snapshot.paramMap.get('id');
    this.api.putcliente(form, clienteid).subscribe (data=>{
      console.log(data);
    })}

    eliminar(){
      let datos: ClienteI = this.editarForm.value;
      let clienteid = this.activerouter.snapshot.paramMap.get('id');
      this.api.deleteCliente(datos,clienteid).subscribe(data=>{
        console.log(data);
      })
    }
    salir(){
      this.router.navigate(['clientes'])
    } 
  
}
