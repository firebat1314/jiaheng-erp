import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-verification-search',
  templateUrl: './verification-search.component.html',
  styleUrls: ['./verification-search.component.less']
})
export class VerificationSearchComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
