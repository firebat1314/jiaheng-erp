import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
