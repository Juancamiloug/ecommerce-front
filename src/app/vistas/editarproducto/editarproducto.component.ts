import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductosI} from '../../modelos/productos.interface';


@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  datosProducto: ProductosI | any;
  editarForm = new FormGroup({
    dni: new FormControl('',),
    cantidad: new FormControl('',),
    precio: new FormControl('',),
    nombre: new FormControl('',),
  });

  ngOnInit(): void {
    let productoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getOneProductos(productoid).subscribe(data =>{ 
      this.datosProducto= data;
      this.editarForm.setValue({
        'dni': this.datosProducto.dni,
        'cantidad': this.datosProducto.cantidad,
        'precio': this.datosProducto.precio,
        'nombre': this.datosProducto.nombre,
        
      });
    })
  }

  postForm(form:ProductosI){
    let productoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.putproducto(form, productoid).subscribe (data=>{
      console.log(data);
    })}

    eliminar(){
      let datos: ProductosI = this.editarForm.value;
      let productoid = this.activerouter.snapshot.paramMap.get('id');
      this.api.deleteProducto(datos,productoid).subscribe(data=>{
        console.log(data);
      })
    }
    salir(){
      this.router.navigate(['productos'])
    }  

}
