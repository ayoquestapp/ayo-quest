import { Component } from '@angular/core';
import { CardDadosUsuarioComponent } from './card-dados-usuario/card-dados-usuario.component';
import { OpcoesConfigComponent } from "./opcoes-config/opcoes-config.component";

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [CardDadosUsuarioComponent, OpcoesConfigComponent],
  templateUrl: './minha-conta.component.html',
  styleUrl: './minha-conta.component.scss'
})
export class MinhaContaComponent {

}
