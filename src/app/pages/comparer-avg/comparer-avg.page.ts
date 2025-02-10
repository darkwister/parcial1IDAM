import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-comparer-avg',
  templateUrl: './comparer-avg.page.html',
  styleUrls: ['./comparer-avg.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComparerAvgPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
