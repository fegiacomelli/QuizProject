import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

import { CardQuizComponent } from './inicial/components/card-quiz/card-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicialComponent,
    MenuComponent,
    CardQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
