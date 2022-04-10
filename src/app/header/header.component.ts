import { Component, Input, OnInit } from '@angular/core'
import { TriviaService } from '../trivia.service'
import Category from '../Types/Category'
import CategoryResponse from '../Types/CategoryResponse'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor (private triviaService: TriviaService) { }

  selectedAmount: number = 16
  selectedCategory: number = 0
  @Input() generateCards!: (category: number, amount: number) => void

  categories: Category[] = []

  ngOnInit (): void {
    this.triviaService.getCategories().subscribe({
      next: (data: CategoryResponse) => {
        this.categories = data.trivia_categories
      }
    })
  }
}
