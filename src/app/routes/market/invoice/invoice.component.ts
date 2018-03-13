import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 's-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

    num: string = '45454545454545';
    editnum: boolean = false;
    userScanner: boolean = true;
    _dataSet = [];
    _loading = false;
    _allChecked = false;
    _disabledButton = true;
    _checkedNumber = 0;
    _displayData: Array<any> = [];
    _operating = false;
    _indeterminate = false;
    _header = true;
    constructor(
        private http: _HttpClient,
        private _message: NzMessageService
    ) { }

  
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
    ngOnInit() {
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
    addTr(index) {
        this._dataSet.splice(index + 1, 0, {})
    }
    removeTr(index) {
        if (this._dataSet.length > 1) {
            this._dataSet.splice(index, 1);
        } else {
            this._message.warning('至少保留一条分录！');
        }
    }
}
