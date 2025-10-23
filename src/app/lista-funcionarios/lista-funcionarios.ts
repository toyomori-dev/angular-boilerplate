import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../services/funcionario';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-funcionarios',
  standalone: false,
  templateUrl: './lista-funcionarios.html',
  styleUrl: './lista-funcionarios.css',
})
export class ListaFuncionarios implements OnInit {
  funcionariosLista: any[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario', 'detalhes'];
  dataSource = [];

  constructor(
    private funcionario: Funcionario,
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: Funcionario
  ) {}

  ngOnInit(): void {
    this.getFuncionarios();
    this.route.paramMap.subscribe((params) => {
      this.idUsuario = params.get('id');
      this.getUserDetails(this.idUsuario);
    });
  }

  funcionarios: any[] = [];
  idUsuario: any = '';
  usuario: any;

  getUserDetails(id: string) {
    return this.funcionarioService.getUserById(id).subscribe((data: any) => {
      this.usuario = data;
    });
  }
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
