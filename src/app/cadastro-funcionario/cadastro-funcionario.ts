import { Component } from '@angular/core';
import { Funcionario } from '../services/funcionario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrls: ['./cadastro-funcionario.css'] 
})
export class CadastroFuncionario {

  constructor(
    private funcionariosService: Funcionario,
    private router: Router
  ) {}

  formFuncionario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sexo: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    grauEscolaridade: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    valorPassagem: new FormControl('', Validators.required),
    optouVT: new FormControl(false), 
    cargo: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataDemissao: new FormControl(null),
  });

  enviar() {
    if (this.formFuncionario.invalid) {
      alert('Preencha todos os campos corretamente antes de enviar!');
      this.formFuncionario.markAllAsTouched();
      return;
    }

    this.funcionariosService.postFuncionarios(this.formFuncionario.value).subscribe({
      next: (data) => {
        console.log('Funcionário cadastrado:', data);
        alert('Funcionário cadastrado com sucesso!');

        this.formFuncionario.reset();

        
        this.router.navigate(['/lista-funcionarios']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar funcionário:', err);
        alert('Ocorreu um erro ao cadastrar. Tente novamente.');
      }
    });
  }
}
