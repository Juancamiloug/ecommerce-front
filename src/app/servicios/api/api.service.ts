import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListaClientesI} from '../../modelos/listaClientes.interface';
import {ClienteI} from '../../modelos/cliente.interface';
import {ProductosI} from '../../modelos/productos.interface';
import {ListaProductosI} from '../../modelos/listaproductos.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://simple-commerce-back.herokuapp.com/";

  constructor(private http:HttpClient) { }

    // LoginByEmail (form:LoginI):Observable<ResponseI>{
    //   let direccion = this.url + "auth";
    //   return  this.http.post<ResponseI>(direccion,form);
    // }

    getAllProductos():Observable<ListaProductosI[]>{
      let direccion= this.url + "productos";
      return this.http.get<ListaProductosI[]>(direccion);
    }

    getAllClientes():Observable<ListaClientesI[]>{
      let direccion= this.url + "clientes";
      return this.http.get<ListaClientesI[]>(direccion);
    }

    getOneClientes(id: string | null):Observable<ListaClientesI[]>{
      let direccion= this.url + "clientes/"+ id;
      return this.http.get<ListaClientesI[]>(direccion);
    }

    getOneProductos(id: string | null):Observable<ListaProductosI[]>{
      let direccion= this.url + "productos/"+ id;
      return this.http.get<ListaProductosI[]>(direccion);
    }

    putcliente(form:ClienteI, id: string | null):Observable<ResponseI>{
      let direccion= this.url + "clientes/"+ id;
          return this.http.put<ResponseI>(direccion,form);
    }

    putproducto(form:ProductosI, id: string | null):Observable<ResponseI>{
      let direccion= this.url + "productos/"+ id;
          return this.http.put<ResponseI>(direccion,form);
    }

    deleteCliente(form:ClienteI, id: string | null):Observable<ResponseI>{
      let direccion= this.url + "clientes/"+ id;
      let Options = { 
        headers: new HttpHeaders({'content-type' : 'application/json'}),
        body: form
      }
      return this.http.delete<ResponseI>(direccion,Options);
    }

    deleteProducto(form:ProductosI, id: string | null):Observable<ResponseI>{
      let direccion= this.url + "productos/"+ id;
      let Options = { 
        headers: new HttpHeaders({'content-type' : 'application/json'}),
        body: form
      }
      return this.http.delete<ResponseI>(direccion,Options);
    }

    postCliente(form:ClienteI):Observable<ResponseI>{
      let direccion = this.url + "clientes";

      return this.http.post<ResponseI>(direccion,form);
    }

    postProducto(form:ProductosI):Observable<ResponseI>{
      let direccion = this.url + "productos";

      return this.http.post<ResponseI>(direccion,form);
    }
   
}
