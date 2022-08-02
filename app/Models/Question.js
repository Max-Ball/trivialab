
export class Question{
  constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get Template(){
    return `
    <h2 class="bg-dark text-light rounded border border-3 border-light text-center p-3">
      ${this.question}
    </h2>
    `
  }
}
