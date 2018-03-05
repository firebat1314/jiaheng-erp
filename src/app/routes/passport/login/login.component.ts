
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: 'passport-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class UserLoginComponent implements OnInit {

    isLoading: boolean;
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder) {
        let userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
        let passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));

        this.loginForm = this.formBuilder.group({
            userName: userNameFc,
            password: passwordFc
        });
    }

    /**
    * 初始化
    */
    ngOnInit() {

    }


    /**
     * 登录
     */
    login() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            this.router.navigate(['/home']);
        }, 1000);
    }


}