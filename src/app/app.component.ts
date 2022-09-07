import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, stepper } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ // <-- add your animations here
  fader,
  // slider,
  // transformer,
  // stepper
  // slider,
],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routerAnimation';
  add:any
  sum(a:number,b:number):number{
    this.add=a+b
    return this.add
  }

  prepareRoute(utlet: RouterOutlet) {
    return utlet && utlet.activatedRouteData && utlet.activatedRouteData['animation'];
  }
}

