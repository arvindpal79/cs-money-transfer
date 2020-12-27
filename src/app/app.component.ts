import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) {
    // Set default locale
    translate.setDefaultLang('nl');
  }

  ngOnInit(): void {
  }

  /**
   * Set locale of app component
   */
  setLocale = (lang:string) => {
    this.translate.setDefaultLang(lang);
  }

}
