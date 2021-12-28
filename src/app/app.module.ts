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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProdutosComponent,
    Play5Component,
    NovoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
