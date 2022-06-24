import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupRequestPayload } from './signup-request.payload';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup =  new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit() {
   
  }

  signup() {

    this.authService.signup(this.signupForm.value).subscribe(() => {
         this.router.navigate(['/login'],
        { queryParams: {registered: 'true'}})
      },
     () => {
        console.log(Error)
        this.toastr.error('Registration Failed! Please try again');
      }
    )
  }
}