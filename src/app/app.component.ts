import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,RouterModule
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
      <h1><font color="orange">お悩み掲示板</font></h1>
      </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'お悩み掲示板';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/