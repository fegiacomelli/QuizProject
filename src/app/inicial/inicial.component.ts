import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Quiz } from '../model/Quiz';
import { QuizzesService } from '../service/quizzes.service';
import { Option } from '../model/Option';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent implements OnInit {
  public listagemDeQuizzes: Quiz[] = [];

  constructor(
    private router: Router,
    private quizzesService: QuizzesService,
    ) {}

  ngOnInit() {
    window.scroll(0,0)

    this.getAllQuizzes();

    if (environment.email == '') {
      this.router.navigate(['/login']);
    }
  }

  getAllQuizzes() {
    this.quizzesService.getAllQuizzes().subscribe((resposta: any) => {
      this.listagemDeQuizzes = resposta.quizzes;
      console.log(resposta);
    });
  }

}
