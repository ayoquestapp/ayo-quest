import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { buttonIntro, cardEnter, logoIntro, lottieIntro, staggerContent } from '../../../core/animations';

@Component({
  selector: 'app-verificar-email-template',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, RouterLink, LottieComponent],
  animations: [ cardEnter,
    logoIntro,
    lottieIntro,
    staggerContent,
    buttonIntro
  ],
  templateUrl: './verificar-email-template.component.html',
  styleUrl: './verificar-email-template.component.scss'
})
export class VerificarEmailTemplateComponent {
  lottieOptions: AnimationOptions = {
    path: '../../../assets/verify.json',
    loop: false,
  };

}
