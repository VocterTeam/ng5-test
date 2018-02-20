import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Ng5-test';
  public captchaResponse: string = '';
  public apiURL: string = 'https://app.swaggerhub.com/apis/AMALYZEAG/Falcon/0.0.12';
  public reCaptchaKey: string = '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej';
  public httpOptions = {
  	headers: new HttpHeaders({
  	  'Content-Type':  'application/json',
  	  'Authorization': 'my-auth-token'
  	})
	};

  constructor(private http: HttpClient) { }

  public captchaResolved(captchaResponse: string) {
    
    this.captchaResponse = `${JSON.stringify(captchaResponse)}`;
    console.log(captchaResponse);

    return this.http.post(`${this.apiURL}/system.user.login/`, {
    	username: 'developertest@amalyze.com',
    	password: 'Iilo1ail',
    	captcha: this.captchaResponse
    }).subscribe(res => console.log(res));
  }
}
 