import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  headerHeight:number = 0;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let $innerheight =  document.documentElement.scrollTop;
    this.headerHeight =  $innerheight;
  }

}
