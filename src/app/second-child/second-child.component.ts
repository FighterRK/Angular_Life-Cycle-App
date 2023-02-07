import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() secondChildn !: string;

  ngAfterContentInit(){
    console.log('!!! AfterContentInit Is Called !!!');
    
  }
  ngAfterContentChecked(): void {

    console.log('~~~ AfterContentChecked Is Called ~~~');
      
  }
  ngAfterViewInit(): void {

    console.log('## AfterViewInit Is Called ##');
      
  }

  ngAfterViewChecked(): void {
    console.log('@@ AfterViewChecked Is Called @@');
  }

  ngOnDestroy(): void {
    console.log('%% OnDestroy Is Called %%');
  }

 
}
