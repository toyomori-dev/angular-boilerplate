import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface loginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  constructor(private auth: AuthService,
    private router: Router) {}

 loginForm = new FormGroup<loginForm>({
  email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
  password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
});

login(){
  this.auth.login('admin', 'admin')
  this.router.navigate(['/lista']);
}

}
