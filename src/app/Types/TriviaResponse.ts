/* eslint-disable camelcase */
export default interface TriviaResponse {
  response_code: number,
  results: {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
  }[]
}
