import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

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
                'style': {}
            };
        } else {
            if (this.tableConfig['tableColumnConfig'] === undefined) {
                this.tableConfig['tableColumnConfig'] = [];
            }

            if (this.tableConfig['style'] === undefined) {
                this.tableConfig['style'] = [];
            }
        }
    }


    logError(error) {
        this.internal_error_message = error;
    }

    onButtonClick(type, row) {
        event.preventDefault();
        event.stopPropagation();
        this.dataChange.emit({'type': type, 'data': row});
    }
}
