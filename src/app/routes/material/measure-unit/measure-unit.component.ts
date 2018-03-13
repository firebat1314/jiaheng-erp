import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 's-measure-unit',
    templateUrl: './measure-unit.component.html',
    styleUrls: ['./measure-unit.component.less']
})
export class MeasureUnitComponent implements OnInit {

    _dataSet = [];
    _loading = false;

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
        for (let i = 0; i < 500; i++) {
            this._dataSet.push({
                key: i,
                a: i,
                b: `我是第${i}条`
            });
        }
    }

}
