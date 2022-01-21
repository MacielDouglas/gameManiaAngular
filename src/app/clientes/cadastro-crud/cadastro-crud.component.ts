import { LoginService } from 'src/app/service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroModel } from './cadastro-crud.model';

@Component({
  selector: 'app-cadastro-crud',
  templateUrl: './cadastro-crud.component.html',
  styleUrls: ['./cadastro-crud.component.css']
})
export class CadastroCrudComponent implements OnInit {

  cadastroForm !: FormGroup;
  cadastroModelObj : CadastroModel = new CadastroModel();
  cadastroData !: any;
  showAdicionar: boolean | undefined;
  showEditar: boolean | undefined;

  constructor(private formbuilder: FormBuilder, private api : LoginService) { }

  ngOnInit(): void {
    this.cadastroForm = this.formbuilder.group({
      nome : [''],
      email : [''],
      password : ['']
    })
    this.getCadastro();
  }

  clickEditarCadastro(){
    this.cadastroForm.reset();
    this.showAdicionar = true;
    this.showEditar = false;
  }

  postCadastroDetalhes(){
    this.cadastroModelObj.nome = this.cadastroForm.value.nome;
    this.cadastroModelObj.email = this.cadastroForm.value.email;
    this.cadastroModelObj.password = this.cadastroForm.value.password;

    this.api.postCadastroCrud(this.cadastroModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Cadastrado com sucesso!!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.cadastroForm.reset();
      this.getCadastro();
    },
    err=>{
      alert("Algo errado com cadastro");
    })
  }

  getCadastro(){
    this.api.getCadastroCrud()
    .subscribe(res=>{
      this.cadastroData = res;
    })
  }

  deleteCadastro(row : any){
    this.api.deleteCadastroCrud(row.id)
    .subscribe(res=>{
      alert("Cliente Deletado");
      this.getCadastro();
    })
  }

  editarCadastro(row:any){
    this.showAdicionar = false;
    this.showEditar = true;
    this.cadastroModelObj.id = row.id;
    this.cadastroForm.controls['nome'].setValue(row.nome);
    this.cadastroForm.controls['email'].setValue(row.email);
    this.cadastroForm.controls['password'].setValue(row.password)

  }

  editarCadastroDetalhes(){
    this.cadastroModelObj.nome = this.cadastroForm.value.nome;
    this.cadastroModelObj.email = this.cadastroForm.value.email;
    this.cadastroModelObj.password = this.cadastroForm.value.password;

    this.api.updateCadastroCrud(this.cadastroModelObj,this.cadastroModelObj.id)
    .subscribe(res=>{
      alert("Cadastro Alterado!");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.cadastroForm.reset();
      this.getCadastro();
    },
    err=>{
      alert("Algo errado com cadastro");
    })
  }

}
