import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})

export class NovoClienteComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);



  constructor() { }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Insira um email válido';
    }

    return this.email.hasError('email') ? 'Esse email não é valido' : '';
  }

  userModel = new User("", "", "")

  onSubmit() {
    console.log(this.userModel)
  }


 
}