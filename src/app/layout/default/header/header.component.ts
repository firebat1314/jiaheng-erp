import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    searchToggleStatus: boolean;

    constructor(
        public settings: SettingsService,
        private router: Router,
        private confirmServ: NzModalService) { }

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }
    loginOut() {
        this.confirmServ.confirm({
            title: '确认退出？',
            //   content: '点确认 1 秒后关闭',
            showConfirmLoading: true,
            cancelText: '取消',
            okText: '确定',
            onOk: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.router.navigate(['/passport/login']);
                        resolve()
                    }, 1000);
                });
            },
            onCancel() {
            }
        });
    };

}
