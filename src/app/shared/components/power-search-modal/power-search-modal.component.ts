import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-power-search-modal',
  templateUrl: './power-search-modal.component.html',
  styleUrls: ['./power-search-modal.component.less']
})
export class PowerSearchModalComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

    isVisible = false;
    isConfirmLoading = false;
  
    showModal = () => {
      this.isVisible = true;
    }
  
    ModalHandleOk = (e) => {
      this.isConfirmLoading = true;
      setTimeout(() => {
        this.isVisible = false;
        this.isConfirmLoading = false;
      }, 3000);
    }
  
    ModalHandleCancel = (e) => {
      this.isVisible = false;
    }
}
