import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    tableConfig;
    tableData;

    ngOnInit() {

        setTimeout(() => {

            this.tableConfig = {
                'generalConfig': {
                    'isRowClickable': false,
                    'defaultSortKey': 'header2'
                },
                'tableColumnConfig': [
                    {
                        'columnname': 'Header 1',
                        'columnkeybinding': 'header1',
                        'columnwidth': '5%',
                        'type': 'checkbox'
                    },
                    {
                        'columnname': 'Header 2',
                        'columnkeybinding': 'header2',
                        'columnwidth': '55%',
                        'type': 'text',
                        'isclickable': true
                    },
                    {
                        'columnname': 'Header 3',
                        'columnkeybinding': 'header3',
                        'columnwidth': '30%',
                        'type': 'text',
                        'isclickable': true
                    },
                    {
                        'columnname': 'Header 4',
                        'columnkeybinding': 'header4',
                        'columnwidth': '10%',
                        'type': 'button',
                        'buttonname': 'Save'
                    }

                ],
                'style': {
                    'headerbackgroundcolor': '#DAE0E0'

                }
            };

            this.tableData = [{
                'header1': true,
                'header2': 'data-col2-row1 ',
                'header3': 'data-col3-row1',
                'header4': 'data-col3-row1',
            }, {
                'header1': false,
                'header2': 'data-col2-row2',
                'header3': 'data-col3-row2',
                'header4': 'data-col3-row2',
            },
                {
                  'header1': true,
                    'header2': 'data-col2-row3',
                    'header3': 'data-col3-row3',
                    'header4': 'data-col3-row3',
                }

            ];

        }, 1000);
    }

    dataChanged(event) {
        const type = event['column'];
        const row = event['data'];
        console.log(type);
        console.log(row);


    }

}
