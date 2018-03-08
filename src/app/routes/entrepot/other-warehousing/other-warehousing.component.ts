import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-warehousing',
  templateUrl: './other-warehousing.component.html',
  styleUrls: ['./other-warehousing.component.less']
})
export class OtherWarehousingComponent implements OnInit {

    selectedOption: { value: string; label: string; disabled?: undefined; } | { value: string; label: string; disabled: boolean; };
    options: ({ value: string; label: string; disabled?: undefined; } | { value: string; label: string; disabled: boolean; })[];
    constructor(
        private http: _HttpClient
    ) { }

    _dataSet = [];
    _bordered = true;
    _loading = false;
    _pagination = false;
    _header = true;
    _title = false;
    _footer = false;
    _fixHeader = false;
    _size = 'default';
    ngOnInit() {
        this.options = [
            { value: '1', label: '2' },
            { value: '1', label: '2' },
            { value: '3', label: '3', disabled: true }
        ];
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

}
