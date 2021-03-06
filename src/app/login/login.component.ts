import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  login(){
    this.auth.login(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

    environment.email = this.userLogin.email
    environment.password = this.userLogin.password


      this.router.navigate(['/inicial'])
   
    }, erro =>{
    if(erro.status == 500){
      alert('Usuário ou senha estão incorretos!')
    }

  }
)
}
}
