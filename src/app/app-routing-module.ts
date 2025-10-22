import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionarios } from './lista-funcionarios/lista-funcionarios';
import { CadastroFuncionario } from './cadastro-funcionario/cadastro-funcionario';
import { Login } from './login/login';
import { AuthGuard } from './guard/auth.guard';
import { Admin } from './admin/admin';
import { Profile } from './profile/profile';
import { Configuracoes } from './configuracoes/configuracoes';
import { Detalhes } from './detalhes/detalhes';
import { Card } from './card/card';

const routes: Routes = [
  { path: 'lista', component: ListaFuncionarios },
  { path: 'cadastrar', component: CadastroFuncionario, canActivate: [AuthGuard] },
  { path: 'lista', redirectTo: 'lista', pathMatch: 'full' },
  {path: 'login', component: Login},
  {path: 'detalhes/:id', component: Detalhes},
  {
    path: 'admin',
    component: Admin,
    children: [
      {path: 'configuracoes', component: Configuracoes},
      {path: 'profile', component: Profile},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
