import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 's-wms',
    templateUrl: './wms.component.html',
    styleUrls: ['./wms.component.less']
})
export class WmsComponent implements OnInit {

    _dataSet = [];
    _loading = false;

    constructor(
        private http: _HttpClient,
        private _message: NzMessageService
    ) { }

    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this._dataSet.push({
                key: i,
                a: i,
                b: `我是第${i}条`
            });
        }
    }

}
