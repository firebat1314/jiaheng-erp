import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-order-warehousing',
  templateUrl: './order-warehousing.component.html',
  styleUrls: ['./order-warehousing.component.less']
})
export class OrderWarehousingComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
