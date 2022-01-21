import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})

export class NovoClienteComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);


public cadastroForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private httpClient : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome:[''],
      email:[''],
      password:['']
    })
  }

  mensagem="";

  cadastroEnvio(){
    this.httpClient.post<any>("http://localhost:3000/users",this.cadastroForm.value)
    .subscribe(res=>{
      this.mensagem = "Cadastrado com sucesso!";
      // alert("Cadastrado com sucesso!!!");
      this.cadastroForm.reset();
      this.router.navigate([""]);
    },err=>{
      alert("Parece que algo deu errado, necessario nome, email e senha.")
    })

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
