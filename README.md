# MessageList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1. I went with this for speed to production as well as comfort level. I used several add ons as well:

HammerJS for animation and transition actions

Infinite Scroll for quickly handling the scolling container actions

Moment for the angular pipe to show "X &lt;time&gt; ago" in the cards

## NB: Breaking change:
npm module `ngx-infinite-scroll` needs fixed: 
in `ngx-infinite-scroll.es5.js` - replace the following imports with `import { of, fromEvent } from 'rxjs';`:

`import { of } from 'rxjs/observable/of';`
`import { fromEvent } from 'rxjs/observable/fromEvent';`

## Requirements Questions:
The requirements document specifically stated a "swipe" action, yet the action indicated in the comp appears to 
be a "pan" action (at least, as described in the Material Design guidelines) - I went with "pan" because the 
feedback to the user felt much more organic - that is, the card starts moving as you're dragging, rather 
than when you're done with your action... can just as easily switch to "swipe" in the app.component.html element.

If I had had this as a real project with a client/customer, I would probably ask the following (hopefully during the requirements process): 
<ul>
  <li>Should there not be some kind of indication to the user about what actions they can take (that is => swipe right removes the message)?</li>

  <li>Should they be able to undo their swipe if they accidentally removed the message? This is just a prototype, I know, and the messages reappear when you refresh, but again - I would ask if this was for a production site.</li>

  <li>Perhaps that is what the hamburger navigation could include? That is - you click on that, and it shows a little helpful text?</li>
</ul>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
