import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-merchandise-control-two',
  templateUrl: './merchandise-control-two.component.html',
  styleUrls: ['./merchandise-control-two.component.less']
})
export class MerchandiseControlTwoComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
