import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 's-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {
    num: string = '45454545454545';
    editnum: boolean = false;
    userScanner: boolean = true;
    _dataSet = [];
    _loading = false;
    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
       
        for (let i = 1; i <= 1000; i++) {
            this._dataSet.push({
                key: i,
                a: i,
                b: `我是第${i}条`
            });
        }
    }

}
