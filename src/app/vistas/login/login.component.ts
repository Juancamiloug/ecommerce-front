import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service'; '../../servicios/api/api.service';
import {LoginI} from '../../modelos/login.interface';
import {Router} from '@angular/router';
import {ResponseI} from '../../modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    usuario: new FormControl ('',Validators.required),
    password: new FormControl ('',Validators.required),
  })

  constructor(private api: ApiService, private router:Router) { }

  errorStatus: boolean = false;
  errorMsg: any = "";  

  ngOnInit(): void {
  }

  onLogin(form:LoginI){
    //this.api.LoginByEmail(form)
    if (form.usuario === '' || form.pasword === ''){
      this.errorStatus = true;
      this.errorMsg = "Ingresa tus credenciales para acceder";
      console.log("Error");}
    else{
    this.router.navigate(['homepage']);
    console.log(form);}
  }
}
