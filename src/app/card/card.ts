import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Funcionario } from '../services/funcionario';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {

  constructor(private funcionarios: Funcionario) {}


  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() sobrenome: string = '';
  @Input() salario: number = 0;
  @Input() endereco: string = '';
  @Input() optouVT: string = '';


  deletarFuncionario(usuarioId: string){
    this.funcionarios.deletarUserById(usuarioId).subscribe((data) => {
      console.log(data);
    })
  }


}
