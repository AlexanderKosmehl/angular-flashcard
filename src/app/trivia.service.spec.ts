import { TestBed } from '@angular/core/testing'

import { TriviaService } from './trivia.service'

describe('TriviaServiceService', () => {
  let service: TriviaService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TriviaService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
