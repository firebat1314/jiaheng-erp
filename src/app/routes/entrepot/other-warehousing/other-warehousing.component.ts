import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-warehousing',
  templateUrl: './other-warehousing.component.html',
  styleUrls: ['./other-warehousing.component.less']
})
export class OtherWarehousingComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
