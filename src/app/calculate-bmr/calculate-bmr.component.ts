import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-bmr',
  templateUrl: './calculate-bmr.component.html',
  styleUrls: ['./calculate-bmr.component.scss'],
})
export class CalculateBMRComponent  implements OnInit {
  gender!: string ;
  age!: number;
  weight!: number;
  height!: number;
  bmi: number = 0;
  bmilevel!: string;
  bmr!: number;
  public alertButtons = ['OK'];

  ngOnInit() {}

  
  calculateBMR() {
    let bmr: number;
    if (this.gender === 'male') {
      bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    } else {
      bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    }
    this.bmr = bmr;
  }
}
