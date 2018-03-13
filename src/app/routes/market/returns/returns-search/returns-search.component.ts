import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import * as moment from "moment";

@Component({
  selector: 's-returns-search',
  templateUrl: './returns-search.component.html',
  styleUrls: ['./returns-search.component.less']
})
export class ReturnsSearchComponent implements OnInit {

   
    constructor(
      private http: _HttpClient,
    ) { }
  
    _dataSet = [];
    _loading = false;
    _allChecked = false;
    _disabledButton = true;
    _checkedNumber = 0;
    _displayData: Array<any> = [];
    _operating = false;
    _indeterminate = false;
  
    _header = true;
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
        });
      }
    }

}
