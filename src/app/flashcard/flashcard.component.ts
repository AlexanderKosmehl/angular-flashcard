import { Component, Input } from '@angular/core'
import Trivia from '../Types/Trivia'

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  @Input() flashcard!: Trivia
  flip: boolean = false

  flipCard = () => {
    this.flip = !this.flip
  }
}
