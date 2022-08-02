import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService{

  async getQuestion(){
    let result = await axios.get('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple')
    console.log('why arent you working?');
    ProxyState.questions = result.data.results.map(q => new Question(q))
    console.log('get questions', ProxyState.questions); 
  }

}

console.log('working?');

export const questionsService = new QuestionsService()