import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})

export class NovoClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User("", "", "")

  onSubmit() {
    console.log(this.userModel)
  }

}