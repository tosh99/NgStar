import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'textFilter',
    pure: false
})
export class TextFilterPipe implements PipeTransform {
    transform(items: any[], filter: Array<any>): any {
        const label = filter[1];
        const filterto = filter[0];

        if (!items || !filterto) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out

        if (label !== undefined) {
            return items.filter(item => item[label].toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1);

        } else {
            return items.filter(item => item.toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1);

        }

    }
}
