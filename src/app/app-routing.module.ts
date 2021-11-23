import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { Play5Component } from './views/play5/play5.component';
import { NovoClienteComponent } from './clientes/novo-cliente/novo-cliente.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"consoles", component: ConsolesComponent},
  {path:"produtos", component: ProdutosComponent},
  {path:"playstation5", component: Play5Component},
  {path:"novo", component:NovoClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
