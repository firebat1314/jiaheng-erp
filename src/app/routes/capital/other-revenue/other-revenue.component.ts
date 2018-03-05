import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-revenue',
  templateUrl: './other-revenue.component.html',
  styleUrls: ['./other-revenue.component.less']
})
export class OtherRevenueComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
