import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="ここにキーワードを入力" #filter>
        <button class="primary" type="button"(click)="filterResults(filter.value)">検索</button>
      </form>
      <form action="#" method="POST">
        件名: <input type="text" name="name"><br>
        本文: <textarea name="section" rows="3"></textarea><br>
        <button type="submit">投稿</button>
      <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
    
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
 

  constructor() {
    this.housingLocationList = 
    this.housingService.getAllHousingLocations();
      this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = 
    this.housingLocationList.filter(housingLocation => housingLocation?.subject.toLowerCase().includes(text.toLowerCase()));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/