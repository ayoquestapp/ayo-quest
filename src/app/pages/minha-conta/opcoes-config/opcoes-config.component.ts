import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { OpcoesPerfilComponent } from "./opcoes-perfil/opcoes-perfil.component";
import { OpcoesConquistasComponent } from "./opcoes-conquistas/opcoes-conquistas.component";
import { OpcoesFavoritosComponent } from "./opcoes-favoritos/opcoes-favoritos.component";
import { OpcoesNotificacoesComponent } from "./opcoes-notificacoes/opcoes-notificacoes.component";
import { OpcoesPreferenciasComponent } from "./opcoes-preferencias/opcoes-preferencias.component";
import { CardDadosUsuarioComponent } from "../card-dados-usuario/card-dados-usuario.component";

@Component({
  selector: 'app-opcoes-config',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, OpcoesPerfilComponent, OpcoesConquistasComponent, OpcoesFavoritosComponent, OpcoesNotificacoesComponent, OpcoesPreferenciasComponent, CardDadosUsuarioComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './opcoes-config.component.html',
  styleUrl: './opcoes-config.component.scss'
})
export class OpcoesConfigComponent {

}
