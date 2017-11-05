import { Component } from '@angular/core';

@Component (
  {
    selector: 'my-component1',
    template: `
      <div class="mycomp1">
        <h3>MyComponent1</h3>
      </div>
    `,
    styles: [`app/my.component.css`]
  })

  export class MyComponent1 {}
