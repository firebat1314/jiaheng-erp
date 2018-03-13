import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-expenses-search',
  templateUrl: './other-expenses-search.component.html',
  styleUrls: ['./other-expenses-search.component.less']
})
export class OtherExpensesSearchComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
