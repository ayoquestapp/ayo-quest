import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(10px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden => visible', animate('250ms ease-out')),
  transition('visible => hidden', animate('150ms ease-in'))
]);

export const invalidFlash = trigger('invalidFlash', [
  transition('* => flash', [
    animate('600ms ease-in-out', keyframes([
      style({ boxShadow: '0 0 0 0 rgba(255,0,0,0)', offset: 0 }),
      style({ boxShadow: '0 0 0 3px rgba(255,0,0,0.7)', offset: 0.2 }),
      style({ boxShadow: '0 0 0 0 rgba(255,0,0,0)', offset: 0.4 }),
      style({ boxShadow: '0 0 0 3px rgba(255,0,0,0.7)', offset: 0.6 }),
      style({ boxShadow: '0 0 0 0 rgba(255,0,0,0)', offset: 1 }),
    ]))
  ])
]);