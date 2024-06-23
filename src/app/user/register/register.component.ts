import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  showAlert = false;
  alertMsg = 'Please wait!  Your account is being created.';
  alertColor = 'blue';

  name = new FormControl('', [Validators.minLength(3), Validators.required]);

  email = new FormControl('', [Validators.email, Validators.required]);

  age = new FormControl('', [
    Validators.min(18),
    Validators.max(120),
    Validators.required,
  ]);

  password = new FormControl('', [
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    Validators.required,
  ]);

  confirmPassword = new FormControl('', [Validators.required]);

  phone = new FormControl('', [
    Validators.min(13),
    Validators.max(13),
    Validators.required,
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phone: this.phone,
  });

  register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait!  Your account is being created.';
    this.alertColor = 'blue';
  }
}
