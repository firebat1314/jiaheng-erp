import { Component, OnInit } from '@angular/core';
import { _HttpClient, SettingsService, MenuService, ScrollService, Menu } from '@delon/theme';
import { NavigationError, RouteConfigLoadStart, NavigationEnd, Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 's-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less']
})
export class MainComponent {

    isFetching = false;
    meun: Menu[] = []

    constructor(
        private router: Router,
        scroll: ScrollService,
        private _message: NzMessageService,
        public menuSrv: MenuService,
        public settings: SettingsService,
        private confirmServ: NzModalService
    ) {
        console.log(this.menuSrv.menus)
        // scroll to top in change page
        router.events.subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            setTimeout(() => {
                scroll.scrollToTop();
                this.isFetching = false;
            }, 100);
        });
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
