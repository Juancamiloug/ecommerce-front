import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { EditarClienteComponent } from './vistas/editarcliente/editarcliente.component';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoClienteComponent } from './vistas/nuevocliente/nuevo.component';
import { HomepageComponent } from './vistas/homepage/homepage.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import {NuevoproductoComponent} from './vistas/nuevoproducto/nuevoproducto.component';
import {EditarproductoComponent} from './vistas/editarproducto/editarproducto.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'editarcliente/:id', component:EditarClienteComponent},
  {path: 'nuevocliente', component:NuevoClienteComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'nuevoproducto', component:NuevoproductoComponent},
  {path: 'editarproducto/:id', component:EditarproductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }