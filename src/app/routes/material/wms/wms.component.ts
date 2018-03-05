import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-wms',
  templateUrl: './wms.component.html',
  styleUrls: ['./wms.component.less']
})
export class WmsComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
