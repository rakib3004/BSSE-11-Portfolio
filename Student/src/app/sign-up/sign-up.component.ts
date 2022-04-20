import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  studentInfo = new Student();

  signUp(){
    
  }

  ngOnInit(): void {
  }

}
