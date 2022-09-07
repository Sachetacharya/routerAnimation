import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
    <p>
      body works!
    </p>
    <h1>Middle Page</h1>
    <img src="../../assets/name (1).jpg" alt="">
  `,
  styles: [
  ]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
