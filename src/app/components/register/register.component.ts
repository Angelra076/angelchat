import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private toastrSvc:ToastrService){

  }

  register(){
    const {email,password}=this.user;
    this.authService.register(email,password).then(res => {
      console.log("was registered: ",res),
      this.toastrSvc.success('Register Complete')
    })

  }



  ngOnInit(): void {
  }
}
