import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'textFilter',
    pure: false
})
export class TextFilterPipe implements PipeTransform {

    private keys_from_json;


    fetchJSONKeys(jsonData) {
        if (jsonData) {
            this.keys_from_json = Object.keys(jsonData);
        }
    }


    transform(items: any[], filter: any): any {

        if (!items) {
            return [];
        }

        if (!filter[0]) {
            return items;
        }

        if (typeof filter !== 'string') {
            const label = filter[1];
            const filterto = filter[0];

            // filter items array, items which match and return true will be
            // kept, false will be filtered out

            if (label !== undefined) {
                return items.filter(item => item[label].toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1);

            } else {
                return items.filter(item => item.toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1);

            }
        } else {
            this.fetchJSONKeys(items[0]);
            filter = filter.toLowerCase();
            return items.filter((json_item) => this.applyFilter(json_item, filter));
        }
    }

    // apply the search text filter on the json item passed
    applyFilter(json_item, searchFilter) {
        if (searchFilter) {
            for (const key of this.keys_from_json) {
                if (json_item[key]) {
                    if (json_item[key].toString().toLowerCase().includes(searchFilter)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

}
