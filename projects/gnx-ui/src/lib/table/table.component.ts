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

    @Output() change = new EventEmitter();
    @Output() sort = new EventEmitter();
    @Output() scroll = new EventEmitter();

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
                'generalConfig': {
                    'isrowclickable': false,
                    'isloading': true,
                    'sortingparameters': {
                        'islocallysorted': true
                    },
                    'tableheaderstyle': {},
                    'tablerowstyle': {},
                    'tabledatastyle': {},
                    'tablestyle': {},

                }
            };
        } else {
            if (this.tableConfig['tableColumnConfig'] === undefined) {
                this.tableConfig['tableColumnConfig'] = [];
            }

            if (this.tableConfig['generalConfig'] === undefined) {
                this.tableConfig['generalConfig'] = {
                    'isrowclickable': false,
                    'isloading': true,
                    'sortingparameters': {
                        'islocallysorted': true
                    }
                };
            }

            if (this.tableConfig['generalConfig']['sortingparameters'] === undefined) {
                this.tableConfig['generalConfig']['sortingparameters'] = {
                    'islocallysorted': true
                };
            }


            if (this.tableConfig['generalConfig']['sortingparameters']['defaultsortkey']) {
                this.sortData(this.tableConfig['generalConfig']['sortingparameters']['defaultsortkey'], 'text');
            }


        }
    }

    logError(error) {
        this.internal_error_message = error;
    }

    onButtonClick(type, row) {
        event.preventDefault();
        event.stopPropagation();
        this.change.emit({'column': type, 'data': row});
    }

    sortData(sort_on, column_type) {
        if (this.tableConfig['generalConfig']['sortingparameters']['islocallysorted'] === undefined) {
            this.tableConfig['generalConfig']['sortingparameters']['islocallysorted'] = true;
        }


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

                this.tableConfig['generalConfig']['isloading'] = false;

            }
        } else {
            if (column_type === 'text') {
                this.sort_reverse = !this.sort_reverse;
                const sorting_details = {
                    'sort_on': sort_on,
                    'sort_order': this.sort_reverse
                };
                this.tableConfig['generalConfig']['isloading'] = true;
                this.sort.emit(sorting_details);
            }
        }
    }

    onScrollEnd() {
        this.scroll.emit();
    }
}
