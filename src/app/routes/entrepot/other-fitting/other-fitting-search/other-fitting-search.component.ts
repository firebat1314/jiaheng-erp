import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import * as moment from "moment";

@Component({
  selector: 's-other-fitting-search',
  templateUrl: './other-fitting-search.component.html',
  styleUrls: ['./other-fitting-search.component.less']
})
export class OtherFittingSearchComponent implements OnInit {

    selectedOption: { value: string; label: string; disabled?: undefined; } | { value: string; label: string; disabled: boolean; };
    options: ({ value: string; label: string; disabled?: undefined; } | { value: string; label: string; disabled: boolean; })[];
    constructor(
        private http: _HttpClient
    ) { }

    _dataSet = [];
    _loading = false;
    
    _allChecked = false;
    _disabledButton = true;
    _checkedNumber = 0;
    _displayData: Array<any> = [];
    _operating = false;
    _indeterminate = false;

    _displayDataChange($event) {
        this._displayData = $event;
    }

    _refreshStatus() {
        const allChecked = this._displayData.every(value => value.checked === true);
        const allUnChecked = this._displayData.every(value => !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
        this._disabledButton = !this._dataSet.some(value => value.checked);
        this._checkedNumber = this._dataSet.filter(value => value.checked).length;
    }

    _checkAll(value) {
        if (value) {
            this._displayData.forEach(data => data.checked = true);
        } else {
            this._displayData.forEach(data => data.checked = false);
        }
        this._refreshStatus();
    }

    _operateData() {
        this._operating = true;
        setTimeout(_ => {
            this._dataSet.forEach(value => value.checked = false);
            this._refreshStatus();
            this._operating = false;
        }, 1000);
    }
    /* ———————————————— 日期范围选择 ———————————————— */
    _startDate = null;
    _endDate = null;
    newArray = (len) => {
      const result = [];
      for (let i = 0; i < len; i++) {
        result.push(i);
      }
      return result;
    };
    _startValueChange = () => {
      if (this._startDate > this._endDate) {
        this._endDate = null;
      }
    };
    _endValueChange = () => {
      if (this._startDate > this._endDate) {
        this._startDate = null;
      }
    };
    _disabledStartDate = (startValue) => {
      if (!startValue || !this._endDate) {
        return false;
      }
      return startValue.getTime() >= this._endDate.getTime();
    };
    _disabledEndDate = (endValue) => {
      if (!endValue || !this._startDate) {
        return false;
      }
      return endValue.getTime() <= this._startDate.getTime();
    };
    get _isSameDay() {
      return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day')
    }
    get _endTime() {
      return {
        nzHideDisabledOptions: true,
        nzDisabledHours: () => {
          return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
        },
        nzDisabledMinutes: (h) => {
          if (this._isSameDay && h === this._startDate.getHours()) {
            return this.newArray(this._startDate.getMinutes());
          }
          return [];
        },
        nzDisabledSeconds: (h, m) => {
          if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
            return this.newArray(this._startDate.getSeconds());
          }
          return [];
        }
      }
    }
    ngOnInit() {
        this.options = [
            { value: '1', label: '2' },
            { value: '1', label: '2' },
            { value: '3', label: '3', disabled: true }
        ];
        for (let i = 1; i <= 1000; i++) {
            this._dataSet.push({
                key: i,
                a: i,
                b: `我是第${i}条`,
                c: `我是第${i}条`,
                d: `我是第${i}条`,
                e: `我是第${i}条`,
                f: `我是第${i}条`,
                g: `我是第${i}条`,
                h: `我是第${i}条`,
                i: `我是第${i}条`,
                j: `我是第${i}条`,
                k: `我是第${i}条`,
                l: `我是第${i}条`,
                m: `我是第${i}条`,
            });
        }
    }
}
