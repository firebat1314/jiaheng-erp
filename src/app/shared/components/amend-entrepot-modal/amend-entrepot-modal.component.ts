import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 's-amend-entrepot-modal',
  templateUrl: './amend-entrepot-modal.component.html',
  styleUrls: ['./amend-entrepot-modal.component.less']
})
export class AmendEntrepotModalComponent implements OnInit {

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
