import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,PrimeNgModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
