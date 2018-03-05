import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-other-output',
  templateUrl: './other-output.component.html',
  styleUrls: ['./other-output.component.less']
})
export class OtherOutputComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
