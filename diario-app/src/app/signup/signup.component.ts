import { AuthService } from '../services/auth.service';
import { SignupData } from './signup-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  data: SignupData = {} as SignupData;

  signupError: string = '';

  onSubmit() {
    this.authService.signup(this.data);
  }

  ngOnInit(): void {
    this.authService.errorEmitter.subscribe((errorMsg)=> (this.signupError = errorMsg));
  }

  constructor(private authService: AuthService) {}

  
}