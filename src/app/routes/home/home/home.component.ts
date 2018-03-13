import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { getTimeDistance } from '@delon/abc';

@Component({
    selector: 's-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    webSite: any;
    offlineChartData: any;
    salesData: any[] = [];
    salesType: any = 'xiao';
    salesType1: any = 0;
    q: any = {
        start: null,
        end: null
    };
    selectDate;
    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
        this.http.get('/chart').subscribe((res: any) => {
            this.webSite = res.visitData.slice(0, 10);
            this.salesData = res.salesData;
            this.offlineChartData = res.offlineChartData;
        },(error)=>{console.log(error)},()=>{console.log(3333333333333333333)});
    }
    setDate(type: any,name:string) {
        this.selectDate = name;
        const rank = getTimeDistance(type);
        this.q.start = rank[0];
        this.q.end = rank[1];
    }
    changeSaleType(){
        this.salesData = [];
        this.http.get('/chart').subscribe((res: any) => {
            this.webSite = res.visitData.slice(0, 10);
            this.salesData = res.salesData;
            this.offlineChartData = res.offlineChartData;
        });
    }
}
