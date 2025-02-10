import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonList, IonItem, IonText, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-table-mult',
  templateUrl: './table-mult.page.html',
  styleUrls: ['./table-mult.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonList, IonItem, IonText, IonButton]
})
export class TableMultPage {
  inputNumber?: number;
  lastNumber: number = 0;
  tableMult: {num: number, result: number}[] = [];

  constructor() { }

  generateTable() {
    this.tableMult = [];
    if(this.inputNumber){
      this.lastNumber = this.inputNumber;
      for(let x = 1; x <= 14; x++){
        this.tableMult.push({num: x, result: this.lastNumber * x});
      }
    }
  }
}
