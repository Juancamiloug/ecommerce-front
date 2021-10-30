import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {ProductosI} from '../../modelos/productos.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:ProductosI[] | undefined;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllProductos().subscribe(data =>{
      this.productos = data;
      console.log (data);
    })
  }
  
  editarProducto(id:any){
    this.router.navigate(['editarproducto',id]);
  }
  nuevoProducto(){
    this.router.navigate(['nuevoproducto']);
  }
  login(){
    this.router.navigate(['homepage']);
  }
}
