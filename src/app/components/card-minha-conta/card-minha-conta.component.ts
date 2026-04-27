import { Component, Input } from '@angular/core';
import { AccountMenu } from '../../core/models/type';
import { MegaMenuModule } from "primeng/megamenu";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-minha-conta',
  standalone: true,
  imports: [MegaMenuModule , CommonModule, RouterLink],
  templateUrl: './card-minha-conta.component.html',
  styleUrl: './card-minha-conta.component.scss'
})
export class CardMinhaContaComponent {
  @Input() data!: AccountMenu;
}
