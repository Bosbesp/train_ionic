import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  [x: string]: any;
  checked: any;
  isChecked: Boolean = false;
  isChecked1: Boolean = false;
  isChecked2: Boolean = false;
  myInput: any;

  InputName!: string;
  age!:number;
  gender!:string;
  color!:string;
  food!:string;
  no!:string;
  line!:string;
  fb!:string;
  ig!:string;
  constructor(
    private router:Router
  ) {}

  logInputValue() {
    console.log('name:',this.InputName);
    console.log('age:',this.age);
    console.log('gender:',this.gender);
    console.log('color:',this.color);
    console.log('food:',this.food);
    console.log('no:',this.no);
    console.log('line:',this.line);
    console.log('fb:',this.fb);
    console.log('ig:',this.ig);
  }
  NavigateToPage1(){
    this.router.navigate(['/page1'])
  }
}
