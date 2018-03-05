import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-personnel-admin',
  templateUrl: './personnel-admin.component.html',
  styleUrls: ['./personnel-admin.component.less']
})
export class PersonnelAdminComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
