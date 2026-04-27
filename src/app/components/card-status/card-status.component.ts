import { Component, Input } from '@angular/core';
import { StatusCard } from '../../core/models/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-status.component.html',
  styleUrl: './card-status.component.scss'
})
export class CardStatusComponent {
  @Input() data!: StatusCard;
}
