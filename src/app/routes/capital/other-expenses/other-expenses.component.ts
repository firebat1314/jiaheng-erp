import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-expenses',
  templateUrl: './other-expenses.component.html',
  styleUrls: ['./other-expenses.component.less']
})
export class OtherExpensesComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
