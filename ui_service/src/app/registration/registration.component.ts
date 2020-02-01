import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// export function EmailValidator(emailControl: AbstractControl): { [keys: string]: boolean } | null {
//   if (emailControl && (emailControl.value !== null || emailControl.value !== undefined)) {
//     const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
//     if (!regex.test(emailControl.value)) {
//       return { isError: true };
//     }
//   }
//   return null;
// };

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.subscribeToValueChanges();
  }

  subscribeToValueChanges() {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}
