import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../common/service/loader.service';

@Component({
  selector: 'cs-loader',
  templateUrl: './cs-loader.component.html',
  styleUrls: ['./cs-loader.component.scss']
})
export class CsLoaderComponent implements OnInit {

  isLoading: boolean;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe(
      (flag) => this.isLoading = flag
    );

  }

  ngOnInit() {
  }

}
