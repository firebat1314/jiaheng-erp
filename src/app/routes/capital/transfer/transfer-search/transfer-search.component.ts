import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-transfer-search',
  templateUrl: './transfer-search.component.html',
  styleUrls: ['./transfer-search.component.less']
})
export class TransferSearchComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
