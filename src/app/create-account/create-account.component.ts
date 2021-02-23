import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
   jobSelected;
   jobValidation=false;
  data = ['Selecciona tu puesto', 'Ejecutivo', 'Gerente', 'Director'
  ];

  form= new FormGroup({
    fullName: new FormControl('',[Validators.required, Validators.pattern("[A-Za-z ]+")]),
    mail: new FormControl('',[Validators.required, Validators.email]),
    phoneNumber: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    password: new FormControl('',[Validators.required]),
    passwordConfirmation: new FormControl('',[Validators.required]),
  },{
    validators: this.validaPassIguales
  })
  
  get f(){
    return this.form.controls;
  }

  validaPassIguales(group:FormGroup){
    const password = group.controls.password.value;
    const passwordConfirm = group.controls.passwordConfirmation.value;
    
    return  password== passwordConfirm ? null : {passwordNotEqual:true}
   
  }

  changeCity(event){
    this.jobSelected = event.target.value;
    if(this.jobSelected  === "Selecciona tu puesto"){
      this.jobValidation=true;
    }else{
      this.jobValidation=false;
    }
    //console.log(event.target.value,this.jobValidation);
  }

  get jobSatus(){
    return this.jobValidation;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
