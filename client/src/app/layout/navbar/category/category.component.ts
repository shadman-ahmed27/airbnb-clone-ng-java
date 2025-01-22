import { Component, inject } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
isHome: any;
onChangeCategory(_t2: Category) {
throw new Error('Method not implemented.');
}
  categoryService: CategoryService = inject(CategoryService);

  categories: Category[] | undefined;

  currentActiveCategory = this.categoryService.getCategoryByDefault();

  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
}
