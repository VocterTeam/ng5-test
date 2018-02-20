import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Ng5-test';
  public captchaResponse: string = '';
  public reCaptchaKey: string = '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej';

  public resolved(captchaResponse: string) {
    
    this.captchaResponse += `${JSON.stringify(captchaResponse)}`;

    console.log(captchaResponse);
  }
}
 