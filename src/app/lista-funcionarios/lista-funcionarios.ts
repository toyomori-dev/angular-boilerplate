import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../services/funcionario';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-lista-funcionarios',
  standalone: false,
  templateUrl: './lista-funcionarios.html',
  styleUrl: './lista-funcionarios.css'
})


export class ListaFuncionarios implements OnInit {
  funcionariosLista: any[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario', 'detalhes'];
  dataSource = [];


  constructor(private funcionario: Funcionario, private router: Router) {
  }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  funcionarios: any[] = [];

  getFuncionarios() {
    this.funcionario.getFuncionarios().subscribe((data: any) => {
      console.log(data);
      this.funcionariosLista = data;
      this.dataSource = data;
    });
  }

  detalhesFuncionarios(id: number) {
    this.router.navigate(['/detalhes', id]);
  }

  cadastrarFuncionario() {
    this.router.navigate(['/cadastrar']);
  }




}