import { Component, OnInit } from '@angular/core';

import showndown from 'showdown';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-calendar-demo',
    templateUrl: './calendar-demo.component.html',
    styleUrls: ['./calendar-demo.component.css']
})

export class CalendarDemoComponent implements OnInit {

    startYear: number = 2009
    endYear: number = 2029

    year: any
    day: any
    month: any
    apiTable = '';
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('/assets/calendar/calendar-api.md', { responseType: 'text' }).subscribe(res => {
            this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
        });
    }

    dateChange(date: any) {
        const { year, day, month } = date
        this.year = year
        this.day = day
        this.month = month
    }
}