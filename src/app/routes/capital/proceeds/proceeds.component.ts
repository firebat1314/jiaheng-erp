import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-proceeds',
  templateUrl: './proceeds.component.html',
  styleUrls: ['./proceeds.component.less']
})
export class ProceedsComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
