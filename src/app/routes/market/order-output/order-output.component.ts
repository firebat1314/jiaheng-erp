import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-order-output',
  templateUrl: './order-output.component.html',
  styleUrls: ['./order-output.component.less']
})
export class OrderOutputComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
