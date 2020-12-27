import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cs-header',
  templateUrl: './cs-header.component.html',
  styleUrls: ['./cs-header.component.scss']
})
export class CsHeaderComponent implements OnInit {

  @Output() locale = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setLocale = (lang:string) => {
    this.locale.emit(lang);
  }

}
