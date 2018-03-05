import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.less']
})
export class CrmComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
