import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng5-test';

  public captchaResponse: string = '';
  public resolved(captchaResponse: string) {

    const newResponse = captchaResponse
      ? `${captchaResponse.substr(0, 7)}...${captchaResponse.substr(-7)}`
      : captchaResponse;
    this.captchaResponse += `${JSON.stringify(newResponse)}\n`;
  }
}
 