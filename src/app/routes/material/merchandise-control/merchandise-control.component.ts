import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-merchandise-control',
  templateUrl: './merchandise-control.component.html',
  styleUrls: ['./merchandise-control.component.less']
})
export class MerchandiseControlComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
