import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle: string = 'Ng5-test';
  public isUserLoggedIn: Boolean = false;
  public captchaResponse: string = '';
  public userInfo = {};
  public apiUrls = {
    root: 'https://api.amalyze.com/0.0.12',
    login: '/system.user.login'
  };
  public loginName: string = 'developertest@amalyze.com';
  public loginPassword: string = 'Iilo1ail';
  public reCaptchaKey: string = '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej';

  constructor(private http: HttpClient) { }

    public loginSubmit(captchaResponse: string) {
      this.captchaResponse = captchaResponse;

      return this.http.post(`${this.apiUrls.root}${this.apiUrls.login}`, {
      	username: this.loginName,
      	password_md5: Md5.hashStr(this.loginPassword),
      	captcha: this.captchaResponse
      }).subscribe(res => {
        this.isUserLoggedIn = true;
        this.userInfo = res['user'];
        console.log(res);
      });
    }
}
