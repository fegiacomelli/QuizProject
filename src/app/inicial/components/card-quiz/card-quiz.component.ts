import { Quiz } from './../../../model/Quiz';
import { Component, OnInit, Input} from '@angular/core';
import { QuizzesService } from 'src/app/service/quizzes.service';



@Component({
  selector: 'app-card-quiz',
  templateUrl: './card-quiz.component.html',
  styleUrls: ['./card-quiz.component.css']
})
export class CardQuizComponent implements OnInit {
  @Input() quiz: Quiz;


  constructor(
  private quizzesService: QuizzesService
  ) { }

  ngOnInit(){
  }

  updateQuiz(quiz: Quiz) {
    console.log('fui atualizado');
    this.quizzesService
      .updateQuiz({
        ...quiz,
        team: '623497e07ccb72a54717b9f4',
        type: 'MULTIPLE_CHOICE_ONE'
      })
      .subscribe(() => {});
  }

  deleteQuiz(quiz: Quiz) {
    console.log(quiz);
    this.quizzesService.deleteQuiz(quiz).subscribe(() => {});
  }

}
