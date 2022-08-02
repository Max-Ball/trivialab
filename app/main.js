import { AnswersController } from "./Controllers/AnswersController.js";
import { QuestionsController } from "./Controllers/QuestionsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  questionsController = new QuestionsController()
  answersController = new AnswersController()
}

window["app"] = new App();
