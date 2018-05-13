import { keyframes, style } from '@angular/animations';

export const slideOutRight = [
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({ transform: 'translate3d(150%, 0, 0)', opacity: 0, offset: 1 })
];
