import { Component } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../core/primeNgModule';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule,PrimeNgModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor(
    public loadingService: LoadingService
  ) {}
}
