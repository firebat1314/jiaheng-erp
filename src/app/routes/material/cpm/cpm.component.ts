import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-cpm',
  templateUrl: './cpm.component.html',
  styleUrls: ['./cpm.component.less']
})
export class CpmComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
