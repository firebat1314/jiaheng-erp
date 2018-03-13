import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-revenue-search',
  templateUrl: './other-revenue-search.component.html',
  styleUrls: ['./other-revenue-search.component.less']
})
export class OtherRevenueSearchComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
