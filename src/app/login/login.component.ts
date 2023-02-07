import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){ }

  

  public example :string = '';


  inputsText : string = '';

  goToVotes(inputElement : HTMLInputElement){
    this.inputsText = inputElement.value;

    if (this.inputsText === '') {

      alert('Please Type A User-Name To Start Chatting')
      
      
    } else {

      this.router.navigate(['/', 'home'])
      
    }

  }

}
