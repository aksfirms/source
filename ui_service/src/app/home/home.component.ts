import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { RegistrationService } from '../_services/registration.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  authError: any;

  error: string;

  constructor(private apiService: ApiService,
    private regService: RegistrationService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.regService.eventAuthError$.subscribe( data => {
      this.authError = data;
      if (this.authError.message) {
        this.error = this.authError.message;
      }
      this.cdr.detectChanges();
    });
    this.regService.addNewUser({
      'firstName': 'Ashish',
      'lastName': 'Sinha',
      'password': 'passWorygs',
      'email': 'abclknkln@ex.com'
    });
  }

}
