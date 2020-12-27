import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cs-panel-heading',
  templateUrl: './panel-heading.component.html',
  styleUrls: ['./panel-heading.component.scss']
})
export class PanelHeadingComponent implements OnInit {
  
  @Input() textLabel = '';
  @Input() className = '';

  constructor() { }

  ngOnInit() {
  }

}
