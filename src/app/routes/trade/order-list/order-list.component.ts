import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
