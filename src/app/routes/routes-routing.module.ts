import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { ErrorComponent } from './exception/error/error.component';
import { ForgetPasswordComponent } from './passport/forget-password/forget-password.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            // 业务子模块
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'business', loadChildren: './business/business.module#BusinessModule' },
            { path: 'trade', loadChildren: './trade/trade.module#TradeModule' },
            { path: 'market', loadChildren: './market/market.module#MarketModule' },
            { path: 'entrepot', loadChildren: './entrepot/entrepot.module#EntrepotModule' },
            { path: 'capital', loadChildren: './capital/capital.module#CapitalModule' },
            { path: 'entrepot', loadChildren: './entrepot/entrepot.module#EntrepotModule' },
            { path: 'material', loadChildren: './material/material.module#MaterialModule' },
            { path: 'pos', loadChildren: './pos/pos.module#PosModule' },
            { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
        ]
    },
    // 全屏布局
    {
        path: 'fullscreen',
        component: LayoutFullScreenComponent,
        children: [
        ]
    },
    // passport
    {
        path: 'passport',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: 'register', component: UserRegisterComponent },
            { path: 'register-result', component: UserRegisterResultComponent },
            { path: 'forget-password', component: ForgetPasswordComponent }
        ]
    },
    // 单页不包裹Layout
    { path: 'callback/:type', component: CallbackComponent },
    { path: '403', component: Exception403Component },
    { path: '404', component: Exception404Component },
    { path: '500', component: Exception500Component },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
