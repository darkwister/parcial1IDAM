import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonText, IonButton, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-comparer-avg',
  templateUrl: './comparer-avg.page.html',
  styleUrls: ['./comparer-avg.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonText, IonButton, IonList, IonItem]
})
export class ComparerAvgPage {
  num1?: number;
  num2?: number;
  num3?: number;
  lastNum1?: number;
  lastNum2?: number;
  lastNum3?: number;
  biggestNumber?:number;
  avg?:number;
  constructor() { }

  compareNumbers(){
    this.lastNum1 = this.num1
    this.lastNum2 = this.num2
    this.lastNum3 = this.num3
    if(Number(this.num1) >= Number(this.lastNum2) && Number(this.num1) >= Number(this.lastNum3)){
      this.biggestNumber = Number(this.lastNum1)
    }
    else if(Number(this.num2) >= Number(this.lastNum1) && Number(this.lastNum2) >= Number(this.lastNum3)){
      this.biggestNumber = Number(this.lastNum2)
    }
    else if(Number(this.num3) >= Number(this.lastNum1) && Number(this.lastNum3) >= Number(this.lastNum2)){
      this.biggestNumber = Number(this.lastNum3)
    }
    else{
      this.biggestNumber = 0 
    }

    this.avg = this.promedioDeNumeros(Number(this.lastNum1), Number(this.lastNum2), Number(this.lastNum3))
    this.num1 = undefined;
    this.num2 = undefined;
    this.num3 = undefined;
  }

  promedioDeNumeros(num1: number, num2: number, num3: number): number{
    return (num1 + num2 + num3)/3
  } 
}
