import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'gnx-ui-app';

    items = [];
    objectitems = [];
    selectedItem = [];
    selectedObjectItem = [];
    style = {
        'width': '250px',
        'min-width': '200px',
    };

    ngOnInit() {

        setTimeout(() => {
            this.objectitems = [{'id': 0, 'name': 'Item1'}, {'id': 1, 'name': 'Item2'}];
            this.selectedObjectItem = [this.objectitems[0]];

            this.items = ['Item1', 'Item Long Text', 'Item Very Long Text', 'Item Very Very Extra Long Text', 'Sample 1', 'Sample 2', 'Sample 3'];
            this.selectedItem = [this.items[0]];

        }, 200);
    }

    hello() {
        console.log(this.selectedItem);
        console.log(this.selectedObjectItem);
    }
}
