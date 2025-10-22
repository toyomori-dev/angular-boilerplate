import { Component } from '@angular/core';
import { Funcionario } from '../services/funcionario';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrl: './cadastro-funcionario.css',
})
export class CadastroFuncionario {

 constructor(private funcionariosService: Funcionario, private router: Router) {}

    formFuncionario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sexo: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    grauEscolaridade: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    valorPassagem: new FormControl('', Validators.required),
    optouVT: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataDemissao: new FormControl(null),
    });

    enviar(){
      this.funcionariosService.postFuncionarios(this.formFuncionario.value).subscribe((data) => {
        console.log(data);
      })
      this.router.navigate(['/lista-funcionarios']);
    }

}
