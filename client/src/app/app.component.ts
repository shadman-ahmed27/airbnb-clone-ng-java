import { Component, inject, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from "./layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, FontAwesomeModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
