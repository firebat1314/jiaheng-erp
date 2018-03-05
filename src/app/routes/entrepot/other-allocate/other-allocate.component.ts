import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-allocate',
  templateUrl: './other-allocate.component.html',
  styleUrls: ['./other-allocate.component.less']
})
export class OtherAllocateComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
