import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Quiz } from '../model/Quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private http: HttpClient) {}

  getAllQuizzes(): Observable<Quiz[]> {
    const url = 'https://h-api-ava.tindin.com.br/quizzes';
    const options = {
      headers: {
        'x-api-key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIzNDk4MWI3Y2NiNzJhNTQ3MTdiOWY3IiwiaWF0IjoxNjQ3NjE0MDMxfQ.pLq-u_u9jQ6rwYkCzZXUq5fH50DDDycdoCR41xqldqs',
      },
      params: {
        filter: 'team:623497e07ccb72a54717b9f4',
        fields: 'title,description,level,rewardXp,type,options'
      },
    };

    return this.http.get<Quiz[]>(url, options);
  }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    const url = 'https://h-api-ava.tindin.com.br/quizzes';
    const body = {
      team: quiz.team,
      title: quiz.title,
      description: quiz.description,
      level: quiz.level,
      type: quiz.type,
      rewardXp: quiz.rewardXp,
      options: quiz.options,
    };
    const options = {
      headers: {
        'x-api-key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIzNDk4MWI3Y2NiNzJhNTQ3MTdiOWY3IiwiaWF0IjoxNjQ3NjE0MDMxfQ.pLq-u_u9jQ6rwYkCzZXUq5fH50DDDycdoCR41xqldqs',
      },
    };
    return this.http.post<Quiz>(url, body, options);
  }

  updateQuiz(quiz: Quiz): Observable<Quiz> {
    const url = 'https://h-api-ava.tindin.com.br/quizzes';
    const body = {
      ...quiz,
    };
    const options = {
      headers: {
        'x-api-key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIzNDk4MWI3Y2NiNzJhNTQ3MTdiOWY3IiwiaWF0IjoxNjQ3NjE0MDMxfQ.pLq-u_u9jQ6rwYkCzZXUq5fH50DDDycdoCR41xqldqs',
      },
    };
    return this.http.put<Quiz>(url, body, options);
  }

  deleteQuiz(quiz: Quiz): Observable<Quiz> {
    const url = 'https://h-api-ava.tindin.com.br/quizzes';
    const options = {
      headers: {
        'x-api-key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIzNDk4MWI3Y2NiNzJhNTQ3MTdiOWY3IiwiaWF0IjoxNjQ3NjE0MDMxfQ.pLq-u_u9jQ6rwYkCzZXUq5fH50DDDycdoCR41xqldqs',
      },
    };
    return this.http.delete<Quiz>(`${url}/${quiz._id}`, options);
  }
}
