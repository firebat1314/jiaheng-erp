import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-measure-unit',
  templateUrl: './measure-unit.component.html',
  styleUrls: ['./measure-unit.component.less']
})
export class MeasureUnitComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
