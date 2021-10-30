import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {ListaClientesI} from '../../modelos/listaClientes.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:ListaClientesI[] | undefined;
  
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllClientes().subscribe(data =>{
      this.clientes = data;
      console.log (data);
    })
  }
  editarCliente(id:number){
    this.router.navigate(['editarcliente', id])
  }
  nuevoPaciente(){
    this.router.navigate(['nuevocliente']);
  }
  login(){
    this.router.navigate(['homepage']);
  }

}
