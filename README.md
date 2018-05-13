# MessageList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1. I went with this for speed to production as well as comfort level. I used several add ons as well:
HammerJS for animation and transition actions

Infinite Scroll for quickly handling the scolling container actions

Moment for the angular pipe to show "X &lt;time&gt; ago" in the cards

## NB: Breaking change:
npm module `ngx-infinite-scroll` needs fixed: in `ngx-infinite-scroll.es5.js` - replace the following imports with `import { of, fromEvent } from 'rxjs';`:

`import { of } from 'rxjs/observable/of';`
`import { fromEvent } from 'rxjs/observable/fromEvent';`
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
