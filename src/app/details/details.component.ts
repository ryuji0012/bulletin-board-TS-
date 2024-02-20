import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
    <section class="listing-description">
      <h1 class="listing-location">{{housingLocation?.name}}</h1>
      <p class="listing-location">{{housingLocation?.subject}}</p>
      <h2 class="listing-location">{{housingLocation?.text}}</h2>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">カテゴリー</h2>
      <ul>
        <li>いいね！: {{housingLocation?.availableUnits}}<li>
        <li>補足: {{housingLocation?.wifi}}</li>
        <li>コメントは付けますか？: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">回答欄</h2>
      <form [formGroup]="applyForm"(submit)="submitApplication()">
        <label for="name">ニックネーム</label>
        <input id="name" type="text" formControlName="Name">
        <label for="title">サブタイトル</label>
        <input id="title" type="text" formControlName="title">

        <label for="text">本文</label>
        <input id="text" type="text" formControlName="text">
        <button type="submit" class="primary">送信</button>

      </form>
    </section> 
    </article>
      

  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

    route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    housingLocation: HousingLocation | undefined;

    constructor() {
      const housingLocationId =
    Number(this.route.snapshot.params['id']);
      this.housingLocation = 
    this.housingService.getHousingLocationById(housingLocationId);
  }
  applyForm = new FormGroup({
    Name: new FormControl(''),
    subtitle: new FormControl(''),
    text: new FormControl('')
  })

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.Name ?? '',
      this.applyForm.value.subtitle ?? '',
      this.applyForm.value.text ?? ''
    );
  }
}
