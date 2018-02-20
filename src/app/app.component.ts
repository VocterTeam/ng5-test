import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle: string = 'Ng5-test';
  public captchaResponse: string = '';
  public apiUrls = {
    root: 'https://api.amalyze.com/0.0.12',
    login: '/system.user.login'
  };
  public apiURL: string = 'https://api.amalyze.com/0.0.12';
  public reCaptchaKey: string = '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej';
 //  public httpOptions = {
 //  	headers: new HttpHeaders({
 //  	  'Content-Type':  'application/json',
 //  	  'Authorization': 'my-auth-token'
 //  	})
	// };

  constructor(private http: HttpClient) { }

    public captchaResolved(captchaResponse: string) {
      
      this.captchaResponse = captchaResponse;

      return this.http.post(`${this.apiUrls.root}${this.apiUrls.login}`, {
      	username: 'developertest@amalyze.com',
      	password_md5: '909027439581d5d4923cb83fedd711e8',
      	captcha: this.captchaResponse
      }).subscribe(res => console.log(res));
    }
}
