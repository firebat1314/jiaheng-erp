import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-order-pay',
  templateUrl: './order-pay.component.html',
  styleUrls: ['./order-pay.component.less']
})
export class OrderPayComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
