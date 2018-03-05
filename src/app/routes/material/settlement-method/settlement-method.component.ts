import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-settlement-method',
  templateUrl: './settlement-method.component.html',
  styleUrls: ['./settlement-method.component.less']
})
export class SettlementMethodComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
