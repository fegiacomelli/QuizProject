import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../service/quizzes.service';
import { Router } from '@angular/router';
import { Quiz } from '../model/Quiz';
import { Option } from '../model/Option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})



export class MenuComponent implements OnInit {
  quiz: Quiz;
  correctOption: Option;
  wrongOption: Option;



  constructor(
    private router: Router,
    private quizzesService: QuizzesService
    ) {
      
    this.quiz = {} as Quiz;
    this.correctOption = {
      correct: true,
      text: ""
    };

    this.wrongOption = {
      correct: false,
      text: ""
    };
  }

  ngOnInit() {}

  create() {
    console.log(this.quiz);
    this.quizzesService
      .createQuiz({
        ...this.quiz,
        team: '623497e07ccb72a54717b9f4',
        type: 'MULTIPLE_CHOICE_ONE',
        options: [
          this.correctOption,
          this.wrongOption
        ]
      })
      .subscribe(() => {});
  }
}
