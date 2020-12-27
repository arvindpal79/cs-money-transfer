import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
  pure: false
})
export class DataFilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    return items.filter(item =>
      item['merchant']['name'].toLowerCase().indexOf(
        filter.toString().toLowerCase()
      ) !== -1
    );
  }

}
