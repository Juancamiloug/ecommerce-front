import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './vistas/homepage/homepage.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { EditarproductoComponent } from './vistas/editarproducto/editarproducto.component';
import { NuevoproductoComponent } from './vistas/nuevoproducto/nuevoproducto.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { LoginComponent } from './vistas/login/login.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { NuevoClienteComponent } from './vistas/nuevocliente/nuevo.component';
import { EditarClienteComponent } from './vistas/editarcliente/editarcliente.component';

registerLocaleData(localeCo);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent, ClientesComponent, NuevoClienteComponent,EditarClienteComponent,HomepageComponent,ProductosComponent,NuevoproductoComponent,EditarproductoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: "es-CO"
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
