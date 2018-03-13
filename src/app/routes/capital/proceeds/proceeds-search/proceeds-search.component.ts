import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-proceeds-search',
  templateUrl: './proceeds-search.component.html',
  styleUrls: ['./proceeds-search.component.less']
})
export class ProceedsSearchComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
