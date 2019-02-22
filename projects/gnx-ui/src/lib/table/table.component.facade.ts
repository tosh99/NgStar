export class TableComponentFacade {
    constructor() {

    }

    // common method for sort a list by key
    commonSortByKey(array, key, isdate) {
        if (array) {
            return array.sort(function (a, b) {
                let x;
                let y;
                // numerical data
                try {
                    if (typeof (a[key]) === 'number') {
                        x = a[key];
                        y = b[key];
                    } else if (typeof (a[key] === 'string')) {
                        x = a[key].toLowerCase();
                        y = b[key].toLowerCase();
                    } else if (isdate) {
                        x = new Date(a[key]);
                        x /= 1000 + 900 + 330 * 60;
                        y = new Date(b[key]);
                        y /= 1000 + 900 + 330 * 60;
                    }
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                } catch (exception) {
                    return array;
                }
            });
        }
    }

    // common method for reverse sort a list by key
    commonReverseSortByKey(array, key, isdate) {
        if (array) {
            return array.sort(function (b, a) {
                let x;
                let y;
                // numerical data
                if (typeof (a[key]) === 'number') {
                    x = a[key];
                    y = b[key];
                } else if (typeof (a[key] === 'string')) {
                    x = a[key].toLowerCase();
                    y = b[key].toLowerCase();
                } else if (isdate) {
                    x = new Date(a[key]);
                    x /= 1000 + 900 + 330 * 60;
                    y = new Date(b[key]);
                    y /= 1000 + 900 + 330 * 60;
                }

                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    }
}
