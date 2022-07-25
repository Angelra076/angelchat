import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){

  }

  Enter(){
    const {email,password}=this.user;
    this.authService.login(email,password)

  }

  EnterWithGoogle(){
    console.log(this.user);
    const {email,password}=this.user;
    this.authService.loginWithGoogle(email,password).then(res => {
      console.log("was registered: ",res)
    })
  }

  logout(): void{
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
