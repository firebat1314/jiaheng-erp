import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 's-proceeds',
  templateUrl: './proceeds.component.html',
  styleUrls: ['./proceeds.component.less']
})
export class ProceedsComponent implements OnInit {

    num: string = '45454545454545';
    editnum: boolean = false;
    userScanner: boolean = true;
    _dataSet = [];
    _loading = false;
    optional = [{id:'1',value:1},{id:'2',value:2},{id:'3',value:3}]

    constructor(
        private http: _HttpClient,
        private _message: NzMessageService
    ) { }

    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this._dataSet.push({});
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
