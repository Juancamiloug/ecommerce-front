import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ResponseI} from '../../modelos/response.interface';
import {ApiService} from '../../servicios/api/api.service';
import {ProductosI} from '../../modelos/productos.interface';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit {

  nuevoForm = new FormGroup({
    dni: new FormControl('',),
    cantidad: new FormControl('',),
    precio: new FormControl('',),
    nombre: new FormControl('',),
  });

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  postForm(form:ProductosI){
    this.api.postProducto(form).subscribe (data =>{
      console.log(form);
    })
  }

  salir(){
    this.router.navigate(['productos'])
  } 

}
