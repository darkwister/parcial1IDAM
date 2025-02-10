import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-table-mult',
  templateUrl: './table-mult.page.html',
  styleUrls: ['./table-mult.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TableMultPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
