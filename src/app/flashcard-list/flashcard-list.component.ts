import { Component, Input } from '@angular/core'
import Trivia from '../Types/Trivia'

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent {
  @Input() flashcards!: Trivia[]
}
