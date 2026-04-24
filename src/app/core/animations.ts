import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

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

export const cardEnter = trigger('cardEnter', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(24px) scale(0.96)'
    }),
    animate(
      '800ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0) scale(1)'
      })
    )
  ])
]);

export const logoIntro = trigger('logoIntro', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-10px) scale(0.5)'
    }),
    animate(
      '800ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0) scale(1.2)'
      })
    )
  ])
]);

export const lottieIntro = trigger('lottieIntro', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.75)'
    }),
    animate(
      '650ms 200ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        transform: 'scale(1)'
      })
    )
  ])
]);

export const staggerContent = trigger('staggerContent', [
  transition(':enter', [
    query('h2, p', [
      style({
        opacity: 0,
        transform: 'translateY(16px)'
      }),
      stagger(140, [
        animate(
          '500ms cubic-bezier(0.22, 1, 0.36, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
        )
      ])
    ], { optional: true })
  ])
]);

export const buttonIntro = trigger('buttonIntro', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(14px)'
    }),
    animate(
      '450ms 520ms ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    )
  ])
]);