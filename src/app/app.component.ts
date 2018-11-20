import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    cd = '<gnx-ui-dropdown\n' +
        '                [placeholder]="\'Select Cheese\'"\n' +
        '                [items]="[\'Mozarella\', \'Cottage\', \'Vintage\']">\n' +
        '            </gnx-ui-dropdown>';


    ngOnInit() {

        setTimeout(() => {


        }, 3000);
    }

    hello() {

    }
}
