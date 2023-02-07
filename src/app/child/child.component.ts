import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges,DoCheck{

  public ngOn:string= '';
  
  

  @Input() exampleName ! : string


  ngOnInit(){

    this.ngOn = 'ngOnInit Is Called';
    console.log('ngOnInit Is Called');
    console.log(this.exampleName.valueOf());
    
    

  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChanges Is Called');
    console.log(changes);
    
   
      
  }

  ngDoCheck(): void {
      console.log('!!!!! ngDoCheck IS Called !!!!');
      
  }

}
