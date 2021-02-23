import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form= new FormGroup({
    usermail: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  
  get f(){
    return this.form.controls;
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    const datos = this.form.value;
    console.log("Intentas ingresar " + JSON.stringify(datos));
  }

  crearCuenta(){
    //Crear clase de rutas 
  }

}
