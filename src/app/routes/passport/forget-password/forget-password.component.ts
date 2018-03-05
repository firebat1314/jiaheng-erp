import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.less']
})
export class ForgetPasswordComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
