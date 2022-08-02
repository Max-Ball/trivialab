

export class Answer{
  constructor(){
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.questionId = data.questionId
  }


get Template(){
  return `
  <div class="col-md-4 offset-md-1 my-3">
          <h4 class="bg-dark text-light rounded border border-3 border-light p-4 text-center">
            ${this.correctAnswer}
          </h4>
          <h4 class="bg-dark text-light rounded border border-3 border-light p-4 text-center">
            ${this.incorrectAnswers}
          </h4>
        </div>
        <div class="col-md-4 offset-md-2 my-3">
          <h4 class="bg-dark text-light rounded border border-3 border-light p-4 text-center">
            Answer C
          </h4>
          <h4 class="bg-dark text-light rounded border border-3 border-light p-4 text-center">
            Answer D
          </h4>
        </div>
  `
}
}
