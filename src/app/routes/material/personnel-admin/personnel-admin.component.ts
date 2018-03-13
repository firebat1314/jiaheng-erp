import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-personnel-admin',
  templateUrl: './personnel-admin.component.html',
  styleUrls: ['./personnel-admin.component.less']
})
export class PersonnelAdminComponent implements OnInit {

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
