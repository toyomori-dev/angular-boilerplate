import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaFuncionarios } from './lista-funcionarios/lista-funcionarios';
import { CadastroFuncionario } from './cadastro-funcionario/cadastro-funcionario';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Configuracoes } from './configuracoes/configuracoes';
import { Detalhes } from './detalhes/detalhes';
import { MatTableModule } from '@angular/material/table';
import { Card } from './card/card';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    App,
    ListaFuncionarios,
    CadastroFuncionario,
    Admin,
    Login,
    Profile,
    Configuracoes,
    Detalhes,
    Card 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
