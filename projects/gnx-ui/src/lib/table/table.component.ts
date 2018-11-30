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
    @Input() isLoading: boolean;
    @Input() errorMessage: string;

    @Output() dataChange = new EventEmitter();

    // Internal Variables
    internal_error_message;
    sort_reverse = false;
    sort_on;
    search_text = '';

    table_facade = new TableComponentFacade();

    constructor() {
        if (this.isDebugMode === undefined) {
            this.isDebugMode = false;
        }

        if (this.isLoading === undefined) {
            this.isLoading = false;
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
                    'isRowClickable': false
                }
            };
        } else {
            if (this.tableConfig['tableColumnConfig'] === undefined) {
                this.tableConfig['tableColumnConfig'] = [];
            }

            if (this.tableConfig['style'] === undefined) {
                this.tableConfig['style'] = [];
            }
        }

        if (this.tableConfig['generalConfig']['defaultSortKey']) {
            this.sort_on = this.tableConfig['generalConfig']['defaultSortKey'];
            this.sortData(this.sort_on, 'text');
        }

        this.isLoading = !this.isLoading;

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
        if (this.tableConfig['generalConfig']['isSortingEnabled']) {
            if (column_type === 'text') {
                this.sort_reverse = !this.sort_reverse;
                this.sort_on = sort_on;
                let is_date = false;

                if (sort_on.includes('date')) {
                    is_date = true;
                }
                if (this.sort_reverse) {
                    this.table_facade.commonReverseSortByKey(this.tableData, sort_on, is_date);
                } else {
                    this.table_facade.commonSortByKey(this.tableData, sort_on, is_date);
                }
            }
        }
    }
}
