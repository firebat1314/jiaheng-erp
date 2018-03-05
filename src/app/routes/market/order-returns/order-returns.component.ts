import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-order-returns',
  templateUrl: './order-returns.component.html',
  styleUrls: ['./order-returns.component.less']
})
export class OrderReturnsComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
