import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import CategoryResponse from './Types/CategoryResponse'
import TriviaResponse from './Types/TriviaResponse'

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  constructor (private http: HttpClient) {}

  private triviaUrl = 'https://opentdb.com/api.php'
  private categoryUrl = 'https://opentdb.com/api_category.php'

  getTrivia (category: number, amount: number = 20) {
    return this.http.get<TriviaResponse>(this.triviaUrl, {
      params: {
        amount,
        category
      }
    })
  }

  getCategories () {
    return this.http.get<CategoryResponse>(this.categoryUrl)
  }
}
