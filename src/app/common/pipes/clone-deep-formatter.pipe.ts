import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cloneDeepFormatter'
})
export class CloneDeepFormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value) { return };
    
    // Process and return deep copy
    return JSON.parse( JSON.stringify(value) );
  }

}
