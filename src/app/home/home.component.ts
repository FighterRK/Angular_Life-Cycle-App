import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  DestroyContent : boolean = true;
  Destroy(){
    this.DestroyContent = false;
  }


  public dataChild :string = '';

  constructor (private route :Router){}
  
  

  goToLogin(){
    this.route.navigate(['/','login'])

  }

}
