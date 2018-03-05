import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-order-teardown',
  templateUrl: './order-teardown.component.html',
  styleUrls: ['./order-teardown.component.less']
})
export class OrderTeardownComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
