import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.less']
})
export class TransferComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
