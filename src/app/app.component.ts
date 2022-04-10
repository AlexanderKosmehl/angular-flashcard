import { Component, OnInit } from '@angular/core'
import { TriviaService } from './trivia.service'
import Trivia from './Types/Trivia'

const LOCALSTORAGE_KEY = 'flashcards.cards'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private triviaService: TriviaService) {}

  flashcards: Trivia[] = []

  decodeString (string: string) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = string
    return textArea.value
  }

  generateCards = (category: number, amount: number) => {
    this.triviaService.getTrivia(category, amount).subscribe({
      next: (data) => {
        const formattedFlashcards = data.results.map((questionItem) => {
          const answer = this.decodeString(questionItem.correct_answer)
          const options = [
            ...questionItem.incorrect_answers.map((ans: string) => this.decodeString(ans)),
            answer
          ]
          return {
            question: this.decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5)
          }
        })
        this.flashcards = formattedFlashcards

        window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formattedFlashcards))
      }
    })
  }

  ngOnInit (): void {
    const localstorage = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (!localstorage) return

    this.flashcards = JSON.parse(localstorage)
  }
}
