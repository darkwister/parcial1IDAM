
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {personSharp, personOutline, calculatorSharp, calculatorOutline, sparklesSharp, sparklesOutline} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi Informacion', url: '/my-info', icon: 'person' },
    { title: 'Tabla de multiplicar', url: '/table-mult', icon: 'calculator' },
    { title: 'Comparar y promediar', url: '/comparer-avg', icon: 'sparkles' },
  ];
  constructor() {
    addIcons({ personSharp, personOutline, calculatorSharp, calculatorOutline, sparklesSharp, sparklesOutline});
  }
}
