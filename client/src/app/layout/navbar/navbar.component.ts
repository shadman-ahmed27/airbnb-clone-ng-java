import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { ToastService } from '../toast.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent,
  ],
  providers: [DynamicDialogComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  location: string = 'Anywhere';
  guests: string = 'Add guests';
  dates: string = 'Any week';

  toastService: ToastService = inject(ToastService);

  // login() => this.authService.login();
  // logout() => this.authService.logout();

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
    this.toastService.send({
      severity: 'info',
      summary: 'Welcome to your Airbnb App!',
    });
  }

  private fetchMenu(): void {
    this.currentMenuItems = [
      {
        label: 'Sign up',
        styleClass: 'font-bold',
      },
      {
        label: 'Log in',
        styleClass: 'font-bold',
      },
    ];
  }
}
