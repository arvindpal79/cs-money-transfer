import { Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortOrder: SortOrder | string = 'asc', sortKey?: string): any {
    if (!sortKey) return value;

    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (sortOrder !== 'asc' && sortOrder !== 'desc') sortOrder = 'asc';

    if (!value) return value;

    let numberArray = [];
    let stringArray = [];

    let getObjectValue: any = (key, dataToFilter) => {
      let fieldToFilter: any;
      if (key.indexOf('.') !== -1) {
        let storeObject: any = dataToFilter;
        let keyArray = key.split('.');
        keyArray.forEach((item, i) => {
          storeObject = storeObject[item] ? storeObject[item] : '';
          fieldToFilter = storeObject;
        });
      } else if (key.indexOf('.') === -1) {
        if (Array.isArray(dataToFilter[key])) {
          fieldToFilter = dataToFilter[key].length !== 0 ? dataToFilter[key][0] : '';
        } else {
          fieldToFilter = dataToFilter[key];
        }
      }
      return fieldToFilter;
    };

    if (!sortKey) {
      numberArray = value.filter(item => typeof item === 'number').sort();
      stringArray = value.filter(item => typeof item === 'string').sort();
    } else {
      numberArray = value
        .filter(item => typeof getObjectValue(sortKey, item) === 'number')
        .sort((a, b) => {
          return getObjectValue(sortKey, a) - getObjectValue(sortKey, b)
        });

        stringArray = value
        .filter(item => typeof getObjectValue(sortKey, item) === 'string')
        .sort((a, b) => {
          if (getObjectValue(sortKey, a) < getObjectValue(sortKey, b)) return -1;
          else if (getObjectValue(sortKey, a) > getObjectValue(sortKey, b)) return 1;
          else return 0;
        });
    }

    const sorted = numberArray.concat(stringArray);
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }

}
