import { Component } from '@angular/core';

@Component({
  selector: 'my-content',
  template: `
    <section>
      <header>
        <h3>
          <ng-content select=".header"></ng-content>
        </h3>
      </header>
      <div>
        <h2>
          <ng-content select=".attention"></ng-content>
        </h2>
        <ng-content></ng-content>
      </div>
      <footer>
        <hr />
        <ng-content select="small"></ng-content>
      </footer>
    </section>
  `,
})
export class ContentComponent {
}
