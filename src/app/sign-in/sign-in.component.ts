import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email:string="jagerattila@gmail.com"
  password="Almafa12;"

  signIn()
  {
    console.log(this.email,"; ",this.password)
  }
}
