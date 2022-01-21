import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { Play5Component } from './views/play5/play5.component';
import { NovoClienteComponent } from './clientes/novo-cliente/novo-cliente.component';

import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CadastroCrudComponent } from './clientes/cadastro-crud/cadastro-crud.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProdutosComponent,
    Play5Component,
    NovoClienteComponent,
    LoginComponent,
    NotFoundComponent,
    CadastroCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
