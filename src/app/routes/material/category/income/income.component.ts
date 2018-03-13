import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.less']
})
export class IncomeComponent implements OnInit {

    _dataSet = [];
    _loading = false;
    cate = 'A'
    constructor(
        private http: _HttpClient,
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
