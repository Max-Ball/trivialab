import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Question{
  constructor(data){
    this.id = data.id || generateId()
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
  }

  get Template(){
    return `
    <h2 class="bg-dark text-light rounded border border-3 border-light text-center p-3">
      ${this.question}
    </h2>
    `
  }

  get Answer(){
    let answers = ProxyState.answers.filter(a => a.id == this.id)
    answers.forEach(a => template += a.Template)
  }
}



