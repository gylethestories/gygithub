import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { EventUtil } from '../../../shared/utilities/eventutil';

@Component({
  selector: 'm-calendar',
  templateUrl: './m-calendar.component.html',
  styleUrls: ['./m-calendar.component.scss']
})
export class MCalendarComponent implements OnInit {

  CONST_MONTH: Object = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

  CONST_LABEL = [7, 1, 2, 3, 4, 5, 6]

  monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  selectedMonth: number
  yearList = []
  selectedYear: number
  dayList = []
  selectedDay: number
  tag: any
  handler: any;

  defaultMonth: number

  @Input() display: boolean
  @Input() startYear: number
  @Input() endYear: number
  @Output() calendarChange = new EventEmitter();

  @ViewChild("calendarMonthUlWrapper", { static: false }) calendarMonthUlWrapper: ElementRef;
  @ViewChild("calendarMonthBtn", { static: false }) calendarMonthBtn: ElementRef;
  @ViewChild("calendarMonthArrowDownIcon", { static: false }) calendarMonthArrowDownIcon: ElementRef;

  @ViewChild("calendarYearUlWrapper", { static: false }) calendarYearUlWrapper: ElementRef;
  @ViewChild("calendarYearBtn", { static: false }) calendarYearBtn: ElementRef;
  @ViewChild("calendarYearArrowDownIcon", { static: false }) calendarYearArrowDownIcon: ElementRef;

  constructor() { }

  ngOnInit() {
    this.handler = this.onClickBlank.bind(this);
    EventUtil.addHandler(window, 'click', this.handler);

    let date = new Date();
    this.selectedYear = date.getFullYear()
    let startYear = this.selectedYear - 10
    this.yearList = Array.from({ length: this.endYear - this.startYear + 1 }, (v, k) => k + startYear);
    this.defaultMonth = date.getMonth() + 1
    this.selectedDay = date.getDate();
    this.calendarChange.emit({ year: this.selectedYear, month: this.defaultMonth, day: this.selectedDay })
    this.dayListFactoty();
  }

  onClickBlank(e) {
    if (!(<HTMLElement>event.target).matches('.calendar-month-arrow-down-btn')) {
      if (this.calendarMonthUlWrapper.nativeElement.classList.contains('calendar-month-ul-wrapper-active')) {
        this.calendarMonthUlWrapper.nativeElement.classList.remove('calendar-month-ul-wrapper-active');
      }
      if (this.calendarMonthArrowDownIcon.nativeElement.classList.contains('calendar-arrow-down-active')) {
        this.calendarMonthArrowDownIcon.nativeElement.classList.remove('calendar-arrow-down-active');
        this.calendarMonthArrowDownIcon.nativeElement.classList.add('calendar-arrow-down-deactive');
      }
    }
    if (!(<HTMLElement>event.target).matches('.calendar-year-arrow-down-btn')) {
      if (this.calendarYearUlWrapper.nativeElement.classList.contains('calendar-year-ul-wrapper-active')) {
        this.calendarYearUlWrapper.nativeElement.classList.remove('calendar-year-ul-wrapper-active');
      }
      if (this.calendarYearArrowDownIcon.nativeElement.classList.contains('calendar-arrow-down-active')) {
        this.calendarYearArrowDownIcon.nativeElement.classList.remove('calendar-arrow-down-active');
        this.calendarYearArrowDownIcon.nativeElement.classList.add('calendar-arrow-down-deactive');
      }
    }
  }

  checkSunday(d: number): boolean {
    return (new Date(this.selectedYear, this.defaultMonth - 1, d)).getDay() === 0 ? true : false
  }

  selectDay(day: number) {
    this.selectedDay = day
    this.calendarChange.emit({ year: this.selectedYear, month: this.defaultMonth, day: this.selectedDay })
  }

  selectMonth(month: number) {
    this.selectedMonth = month
    this.monthDropDown()
    if (month !== this.defaultMonth) {
      this.defaultMonth = month
      this.dayListFactoty()
    }
    this.calendarChange.emit({ year: this.selectedYear, month: this.defaultMonth, day: this.selectedDay })
  }

  selectYear(year: number) {
    if (year !== this.selectedYear) {
      this.selectedYear = year
      this.dayListFactoty()
    }
    this.yearDropDown()
    this.calendarChange.emit({ year: this.selectedYear, month: this.defaultMonth, day: this.selectedDay })
  }

  monthDropDown() {
    this.calendarMonthUlWrapper.nativeElement.classList.toggle("calendar-month-ul-wrapper-active");
    if (this.calendarMonthBtn.nativeElement.classList.contains('calendar-arrow-down-active')) {
      this.calendarMonthBtn.nativeElement.classList.remove('calendar-arrow-down-active')
      this.calendarMonthBtn.nativeElement.classList.add('calendar-arrow-down-deactive')
    } else {
      this.calendarMonthBtn.nativeElement.classList.add('calendar-arrow-down-active')
      this.calendarMonthBtn.nativeElement.classList.remove('calendar-arrow-down-deactive')
    }
  }

  yearDropDown() {
    this.calendarYearUlWrapper.nativeElement.classList.toggle("calendar-year-ul-wrapper-active");
    if (this.calendarYearBtn.nativeElement.classList.contains('calendar-arrow-down-active')) {
      this.calendarYearBtn.nativeElement.classList.remove('calendar-arrow-down-active')
      this.calendarYearBtn.nativeElement.classList.add('calendar-arrow-down-deactive')
    } else {
      this.calendarYearBtn.nativeElement.classList.add('calendar-arrow-down-active')
      this.calendarYearBtn.nativeElement.classList.remove('calendar-arrow-down-deactive')
    }
  }

  dayListFactoty() {
    let total = (new Date(this.selectedYear, this.defaultMonth, 0)).getDate()
    this.dayList = Array.from({ length: total }, (v, k) => k + 1);
    this.tag = (new Date(this.selectedYear, this.defaultMonth - 1, 1)).getDay() == 7 ? [] : Array.from({ length: (new Date(this.selectedYear, this.defaultMonth - 1, 1)).getDay() }, (v, k) => k + (this.selectedYear - 10));
  }

}
