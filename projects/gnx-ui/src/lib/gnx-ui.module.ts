import {NgModule} from '@angular/core';
import {DropdownComponent} from './dropdown/dropdown.component';
import {TableComponent} from './table/table.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TextFilterPipe} from './shared/directives/app-dropdown.pipe';
import {GnxUiService} from './gnx-ui.service';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [DropdownComponent, TableComponent, TextFilterPipe],
    exports: [DropdownComponent, TableComponent, TextFilterPipe],
    providers: [GnxUiService]
})
export class GnxUiModule {
}
