import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser : any;

  constructor( private fAuth : AngularFireAuth,
               private router : Router ) { }

  public addNewUser(user){
    this.fAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(userCredential =>{
      this.newUser = user;
      console.log(userCredential);
      userCredential.user.updateProfile({
        displayName: user.firstName + ' ' + user.lastName
      })
      this.router.navigate(['/home']);
    })
    .catch(error =>{
      this.eventAuthError.next(error);
    })
  }
}
