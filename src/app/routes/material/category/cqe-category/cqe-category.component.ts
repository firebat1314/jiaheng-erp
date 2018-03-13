import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 's-cqe-category',
    templateUrl: './cqe-category.component.html',
    styleUrls: ['./cqe-category.component.less']
})
export class CqeCategoryComponent implements OnInit {


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
