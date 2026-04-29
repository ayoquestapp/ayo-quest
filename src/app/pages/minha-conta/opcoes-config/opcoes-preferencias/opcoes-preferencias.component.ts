import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigOption } from '../../../../core/models/type';
import { SupabaseService } from '../../../../core/services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcoes-preferencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opcoes-preferencias.component.html',
  styleUrl: './opcoes-preferencias.component.scss'
})
export class OpcoesPreferenciasComponent {

  constructor(private supabase : SupabaseService, private router : Router) {

  }

  configs: ConfigOption[] = [
    {
      id: 1,
      titulo: 'E-mails de novidades',
      descricao: 'Receba avisos sobre novos módulos e eventos.',
      ativo: true
    },
    {
      id: 2,
      titulo: 'Lembretes diários',
      descricao: 'Mantenha seu streak com um empurrãozinho diário.',
      ativo: true
    },
    {
      id: 3,
      titulo: 'Som ao subir de nível',
      descricao: 'Toca um efeito sonoro ao desbloquear conquistas.',
      ativo: false
    },
    {
      id: 4,
      titulo: 'Modo foco',
      descricao: 'Esconde elementos decorativos durante os módulos.',
      ativo: false
    }
  ];

  toggleConfig(id: number) {
    this.configs = this.configs.map(config =>
      config.id === id
        ? { ...config, ativo: !config.ativo }
        : config
    );
  }

  logout() {
    this.supabase.logout();
    this.router.navigate(['/login']);
  }
}