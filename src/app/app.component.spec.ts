import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {GnxUiModule, GnxUiService} from 'gnx-ui';
import {BrowserModule} from '@angular/platform-browser';

import {DropdownComponent} from '../../projects/gnx-ui/src/lib/dropdown/dropdown.component';
import {CommonModule} from '@angular/common';
import {TableComponent} from '../../projects/gnx-ui/src/lib/table/table.component';
import {TextFilterPipe} from '../../projects/gnx-ui/src/lib/shared/directives/app-dropdown.pipe';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                GnxUiModule
            ],
            declarations: [
                AppComponent
            ]

        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'gnx-ui-app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('gnx-ui-app');
    }));
});

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                CommonModule
            ],
            declarations: [
                DropdownComponent,
                TableComponent,
                TextFilterPipe
            ],
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
