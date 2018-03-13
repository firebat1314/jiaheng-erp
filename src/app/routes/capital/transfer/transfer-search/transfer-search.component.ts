import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-transfer-search',
  templateUrl: './transfer-search.component.html',
  styleUrls: ['./transfer-search.component.less']
})
export class TransferSearchComponent implements OnInit {

    _dataSet = [];
  _loading = false;

  _allChecked = false;
  _indeterminate = false;
  _displayData: Array<any> = [];
  constructor(
    private http: _HttpClient,
  ) { }

  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
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
