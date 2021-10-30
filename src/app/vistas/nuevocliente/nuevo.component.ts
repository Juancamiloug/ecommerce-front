import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ClienteI} from '../../modelos/cliente.interface';
import {ResponseI} from '../../modelos/response.interface';
import {ApiService} from '../../servicios/api/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoClienteComponent implements OnInit {

  

  nuevoForm = new FormGroup({
    nombre: new FormControl('',),
    apellido: new FormControl('',),
    cedula: new FormControl('',),
    correo: new FormControl('',),
    telefono: new FormControl('',),
  });

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  postForm(form:ClienteI){
    this.api.postCliente(form).subscribe (data =>{
      console.log(form);
    })
  }

  salir(){
    this.router.navigate(['clientes'])
  } 

}
