import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerHeight: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let $innerheight =  document.documentElement.scrollTop;
    this.headerHeight =  $innerheight;
  }

}
