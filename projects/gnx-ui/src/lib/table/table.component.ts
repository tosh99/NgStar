import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TableComponentFacade} from './table.component.facade';

@Component({
    selector: 'gnx-ui-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, OnChanges {

    @Input() tableConfig;
    @Input() tableData;
    @Input() isDebugMode: boolean;
    @Input() errorMessage: string;

    @Output() dataChange = new EventEmitter();
    @Output() sortingColumnDetails = new EventEmitter();

    // Internal Variables
    internal_error_message;
    sort_reverse = false;
    sort_on;

    table_facade = new TableComponentFacade();

    constructor() {
        if (this.isDebugMode === undefined) {
            this.isDebugMode = false;
        }
    }

    ngOnInit() {
    }


    ngOnChanges() {
        if (this.tableConfig === undefined) {
            this.tableConfig = {
                'tableColumnConfig': [],
                'style': {},
                'generalConfig': {
                    'isRowClickable': false,
                    'isloading': true
                }
            };
        } else {
            const sortingparams = this.tableConfig['generalConfig']['sortingparameters'];
            if (sortingparams['defaultSrotKey'] !== undefined) {
                if (sortingparams['isAscOrder'] === undefined) {
                    sortingparams['isAscOrder'] = true;
                }
                if (sortingparams['islocallysorted'] === undefined) {
                    sortingparams['islocallysorted'] = true;
                }
            }

            if (this.tableConfig['tableColumnConfig'] === undefined) {
                this.tableConfig['tableColumnConfig'] = [];
            }

            if (this.tableConfig['style'] === undefined) {
                this.tableConfig['style'] = [];
            }
        }
        if (this.tableConfig['generalConfig']['sortingparameters']) {
            if (this.tableConfig['generalConfig']['sortingparameters']['defaultSortKey']) {
                this.sort_on = this.tableConfig['generalConfig']['sortingparameters']['defaultSortKey'];
                this.sortData(this.sort_on, 'text');
            } else {
                this.tableConfig['generalConfig']['isloading'] = false;
                this.errorMessage = 'DefaulSortKey error.';
            }
        }
    }


    logError(error) {
        this.internal_error_message = error;
    }

    onButtonClick(type, row) {
        event.preventDefault();
        event.stopPropagation();
        this.dataChange.emit({'column': type, 'data': row});
    }

    sortData(sort_on, column_type) {
        if (this.tableConfig['generalConfig']['sortingparameters']['islocallysorted']) {
            if (column_type === 'text') {
                this.sort_reverse = !this.sort_reverse;
                this.sort_on = sort_on;
                let is_date = false;

                this.tableConfig['generalConfig']['isloading'] = true;

                if (sort_on.includes('date')) {
                    is_date = true;
                }
                if (this.sort_reverse) {
                    this.table_facade.commonReverseSortByKey(this.tableData, sort_on, is_date);
                } else {
                    this.table_facade.commonSortByKey(this.tableData, sort_on, is_date);
                }
                setTimeout(() => {
                    this.tableConfig['generalConfig']['isloading'] = false;
                }, 2500);
            }
        } else {
            if (column_type === 'text') {
                this.sort_reverse = !this.sort_reverse;
                const sorting_details = {
                    'sort_on': sort_on,
                    'sort_order': this.sort_reverse
                };
                this.tableConfig['generalConfig']['isloading'] = true;
                this.sortingColumnDetails.emit(sorting_details);
            }
        }
    }
}
