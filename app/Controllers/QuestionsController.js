import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


function _drawQuestion(){
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
}



export class QuestionsController{
  constructor(){
    console.log('working?');
    ProxyState.on('questions', _drawQuestion)


  }
  async getQuestion(){
    try { await questionsService.getQuestion()
      console.log('is this gonna log?');
    } catch (error) {
      console.log('getting an error', error);
    }
  }
}