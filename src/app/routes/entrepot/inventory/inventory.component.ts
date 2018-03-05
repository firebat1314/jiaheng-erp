import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.less']
})
export class InventoryComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
