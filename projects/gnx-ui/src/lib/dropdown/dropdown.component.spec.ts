import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownComponent} from './dropdown.component';
import {CommonModule} from "@angular/common";
import {TableComponent} from "../table/table.component";
import {TextFilterPipe} from "../shared/directives/app-dropdown.pipe";
import {GnxUiService} from "../gnx-ui.service";
import {FormsModule} from "@angular/forms";

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
    imports: [FormsModule, CommonModule],
            declarations: [DropdownComponent, TableComponent, TextFilterPipe],
            providers: [GnxUiService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
