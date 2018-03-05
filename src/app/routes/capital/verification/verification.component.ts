import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.less']
})
export class VerificationComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
