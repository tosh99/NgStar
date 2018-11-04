import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
    selector: 'gnx-ui-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit, OnChanges {

    // Data Inputs
    @Input() items: Array<any>;
    @Input() selectedItem: any;
    @Input() bindLabel: string;
    @Input() bindValue: any;
    @Input() placeholder: string;
    @Input() isSearchable: boolean;
    @Input() isClearable: boolean;
    @Input() isMultiSelect: boolean;
    @Input() isAddTag: boolean;
    @Input() isSelectBindValue: boolean;
    @Input() style: any;

    // Outputs
    @Output() selectedItemChange = new EventEmitter();

    // Internal Variables
    isItemsDisplayed: boolean;
    searchText: string;
    customItems: Array<any>;
    isErrorOccured;
    errormessage;
    multiSelectedItems: Array<any>;
    isBindEnabled;

    constructor() {
    }

    @HostListener('document:click', ['$event']) clickedOutside($event) {
        // this.isItemsDisplayed = false;
    }

    ngOnInit() {
        // Close Dropdown By Default
        this.isItemsDisplayed = false;
        this.isBindEnabled = false;
        this.multiSelectedItems = [];
        this.customItems = [];


        if (this.items === undefined) {
            this.items = [];
        }

        if (this.isSearchable === undefined) {
            this.isSearchable = true;
        }

        if (this.isAddTag === undefined) {
            this.isAddTag = false;
        }

        if (this.isSelectBindValue === undefined) {
            this.isSelectBindValue = true;
        }

        if (this.isClearable === undefined) {
            this.isClearable = true;
        }

        if (this.style === undefined) {
            this.style = {};
        }

        if (this.isMultiSelect === undefined) {
            this.isMultiSelect = false;
        }

        if (this.placeholder === undefined) {
            this.placeholder = 'Select';
        }


        if (this.items.length === 0) {
            this.showError('Loading Items');
        }

        // Set PlaceHolder
        this.setSelectedItemText(this.placeholder);


    }

    ngOnChanges() {
        this.isErrorOccured = false;

        if (this.items === undefined) {
            this.showError('Loading Items');
        } else if (this.items.length > 0) {
            // Validate Parameters
            if (this.bindValue !== undefined && this.bindLabel === undefined) {
                this.showError('Bind Error');
            } else if (this.bindValue !== undefined && this.bindLabel === undefined) {
                this.showError('Bind Error');
            } else if (typeof(this.items[0]) === 'object' && (this.bindValue === undefined || this.bindLabel === undefined)) {
                this.showError('Bindings Absent');
            } else {
                this.isBindEnabled = typeof(this.items[0]) === 'object';

                // Check if Selected Item Present
                if (this.selectedItem !== undefined) {
                    if (this.selectedItem.constructor === Array && this.isMultiSelect === false) {
                        this.showError('Selected Items Cannot be Array if Multiselect is False');
                    } else {
                        if (!this.isMultiSelect) {
                            let isfound = false;

                            let temp;
                            for (const val of this.items) {

                                if (this.isBindEnabled && this.isSelectBindValue) {
                                    temp = val[this.bindValue];
                                } else {
                                    temp = this.selectedItem;
                                }

                                if (temp === this.selectedItem) {
                                    isfound = true;
                                    break;
                                }
                            }
                            if (isfound) {
                                if (this.isBindEnabled) {
                                    this.setSelectedItemText(temp);
                                } else {
                                    this.setSelectedItemText(temp[this.bindLabel]);
                                }
                            } else {
                                this.showError('Selected Item Not Found in Items');
                            }
                        } else {
                            if (this.selectedItem.constructor !== Array) {
                                this.showError('Multiselect Selected Items must be an array');
                            } else if (this.findDuplicates(this.selectedItem)) {
                                this.showError('Selected Items cannot have Duplicates');
                            } else {
                                let isfound = false;

                                for (const val of this.items) {
                                    for (const valsel of this.selectedItem) {

                                        let temp;
                                        if (this.isBindEnabled && this.isSelectBindValue) {
                                            temp = val[this.bindValue];
                                        } else {
                                            temp = val;
                                        }
                                        if (temp === valsel) {
                                            isfound = true;
                                            this.multiSelectedItems.push(val);
                                            break;
                                        }
                                    }
                                }

                                if (!isfound) {
                                    this.showError('Selected Item Not Found in Multi Items');
                                }

                            }
                        }
                    }
                }
            }
        } else {
            this.showError('Loading Items');
        }


    }

    findDuplicates(array) {
        const object = {};
        const result = [];

        array.forEach(function (item) {
            if (!object[item]) {
                object[item] = 0;
            }
            object[item] += 1;
        });

        for (const prop in object) {
            if (object[prop] >= 2) {
                result.push(prop);
            }
        }

        return result.length > 0;

    }

    showError(message) {
        this.isErrorOccured = true;
        this.errormessage = message;
    }


    setSelectedItemText(text) {
        if (text !== undefined) {
            this.placeholder = text;
        } else {
            this.placeholder = '';
        }
    }

    toggleItemDisplay($event: Event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.isItemsDisplayed = !this.isItemsDisplayed;
    }

    selectItem(item) {
        if (this.isMultiSelect === false) {
            if (this.isBindEnabled && item[this.bindValue] !== undefined && item[this.bindLabel] !== undefined) {

                if (this.isSelectBindValue) {
                    this.selectedItem = item[this.bindValue];
                } else {
                    this.selectedItem = item;
                }
                this.setSelectedItemText(item[this.bindLabel]);

            } else {
                this.selectedItem = item;
                this.setSelectedItemText(JSON.stringify(item));
            }
        } else {
            if (this.multiSelectedItems.indexOf(item) < 0) {
                this.multiSelectedItems.push(item);
                if (this.isBindEnabled && this.isSelectBindValue) {
                    this.selectedItem.push(item[this.bindValue]);
                } else {
                    this.selectedItem.push(item);
                }
            }
        }

        this.isItemsDisplayed = false;
        this.onChangeEmit();
    }

    onChangeEmit() {
        this.selectedItemChange.emit(this.selectedItem);
    }

    addMultiItems() {
        if (this.isAddTag === true && this.isMultiSelect === true) {
            if (!this.isBindEnabled) {
                this.selectedItem.push(this.searchText);
                this.customItems.push(this.searchText);
                this.multiSelectedItems.push(this.searchText);
            } else {
                const temp_dict = {};
                if (this.bindValue !== undefined) {
                    temp_dict[this.bindValue] = this.searchText;
                }
                if (this.bindLabel !== undefined) {
                    temp_dict[this.bindLabel] = this.searchText;
                }
                if (this.isSelectBindValue) {
                    this.selectedItem.push(this.searchText);
                } else {
                    this.selectedItem.push(temp_dict);
                }
                this.customItems.push(temp_dict);
                this.multiSelectedItems.push(temp_dict);
            }
            this.searchText = undefined;
            this.onChangeEmit();

        }
    }

    deleteItem(item) {
        event.stopPropagation();
        this.multiSelectedItems.splice(this.multiSelectedItems.indexOf(item), 1);
        this.customItems.splice(this.selectedItem.indexOf(item), 1);
        this.selectedItem.splice(this.selectedItem.indexOf(item[this.bindLabel]), 1);
        this.onChangeEmit();
    }

    clearSelected() {
        event.stopPropagation();
        if (this.isMultiSelect === true) {
            this.multiSelectedItems = [];
            this.customItems = [];
            this.selectedItem = [];
        } else {
            this.setSelectedItemText(undefined);
        }
        this.onChangeEmit();

    }

}
