import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 's-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

    _dataSet = [];
    _loading = false;
    cate = 'A'
    constructor(
        private http: _HttpClient,
        private _message: NzMessageService
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
