import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-select-entrepot-modal',
  templateUrl: './select-entrepot-modal.component.html',
  styleUrls: ['./select-entrepot-modal.component.less']
})
export class SelectEntrepotModalComponent implements OnInit {

    _dataSet = [];
    _loading = false;
    _fixHeader = true;
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
    constructor(
        private http: _HttpClient
    ) { }

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

    isVisible = false;
    isConfirmLoading = false;
  
    showModal = () => {
      this.isVisible = true;
    }
  
    ModalHandleOk = (e) => {
      this.isConfirmLoading = true;
      setTimeout(() => {
        this.isVisible = false;
        this.isConfirmLoading = false;
      }, 3000);
    }
  
    ModalHandleCancel = (e) => {
      this.isVisible = false;
    }
}
