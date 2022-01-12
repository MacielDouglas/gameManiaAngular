import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login();
  mensagem="";

  onSubmit(){
    this.loginService.login(this.loginModel).subscribe((Response)=>{
      this.mensagem = "Login com sucesso!";
      this.router.navigateByUrl("/");
    }, (error)=>{
      if(error.status == 400){
        this.mensagem = "Usuario ou senha não encontrado";
      }
      // console.log(error)
      // this.mensagem = error.error;
      
    })
  }

}
