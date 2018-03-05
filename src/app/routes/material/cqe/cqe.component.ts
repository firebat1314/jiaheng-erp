import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-cqe',
  templateUrl: './cqe.component.html',
  styleUrls: ['./cqe.component.less']
})
export class CqeComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
