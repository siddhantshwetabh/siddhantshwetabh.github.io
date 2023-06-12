import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'siddhantshwetabh';
  isDesktopView: boolean;

  constructor() {
    this.isDesktopView = window.innerWidth > 768 ? true : false;
    console.log(this.isDesktopView, window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])  
  onResize(event:any) {  
    this.isDesktopView = window.innerWidth > 768 ? true : false;
  } 
}
