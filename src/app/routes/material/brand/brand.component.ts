import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.less']
})
export class BrandComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
