import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],

})
export class Page1Component implements OnInit {
  
  constructor() {}
  weight!: number;
  height!: number;
  bmi: number = 0;
  bmilevel!: string;
  public alertButtons = ['OK'];

  ngOnInit() {}

  bmiCalculate() {
    this.bmi = (this.weight / (this.height * this.height));
    console.log(this.bmi)
    if (this.bmi < 18.5) {
      this.bmilevel = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      this.bmilevel = 'Normal';
    }else if(this.bmi > 24.9 && this.bmi <=29.9){
      this.bmilevel = 'Overweight';
    }else if(this.bmi > 29.9 && this.bmi <= 34.9){
      this.bmilevel = 'Obese';
    }else if(this.bmi > 34.9){
      this.bmilevel='Extremely Obese';
    }
  }

}

