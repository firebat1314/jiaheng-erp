import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-fitting',
  templateUrl: './other-fitting.component.html',
  styleUrls: ['./other-fitting.component.less']
})
export class OtherFittingComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
