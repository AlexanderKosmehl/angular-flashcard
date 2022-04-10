import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FormsModule } from '@angular/forms';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { FlashcardComponent } from './flashcard/flashcard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashcardListComponent,
    FlashcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
