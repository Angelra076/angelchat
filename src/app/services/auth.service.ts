import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private toastrSvc:ToastrService) { }

 async register(email:string,password:string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
      
    } catch (error) {
      console.log("error en login: ", error)
      this.toastrSvc.error('Verify your Email and Password')
      return null;
    }
  }

  async login(email:string,password:string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error en login: ", error)
      this.toastrSvc.error('Email or Password are incorrect')
      return null;

    }
  }

  async loginWithGoogle(email:string,password:string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("error en login con google: ", error)
      this.toastrSvc.error('Email or Password are incorrect')
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
  }
}
