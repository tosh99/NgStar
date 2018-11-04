import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'gnx-ui-app';

    items = [];
    selectedItem;
    style = {
        'width': '100px',
        'min-width': '200px',
        'deleteiconsrc': 'https://d30y9cdsu7xlg0.cloudfront.net/png/55049-200.png'
    };

    ngOnInit() {

        setTimeout(() => {
            this.items = [{'id': 0, 'name': 'Anutosh_Mohit_Shubham_Mirana'}, {'id': 1, 'name': 'While'}];
            // this.items = ['Anutosh', 'Mohit', 'Shubham'];
            // this.selectedItem = [this.items[0]];

        }, 200);
    }

    hello() {
        console.log(this.selectedItem);
    }
}
