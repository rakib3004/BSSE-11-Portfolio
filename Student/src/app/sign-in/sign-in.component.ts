import { Component, OnInit } from '@angular/core';
import { LogInfo } from '../log-info';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  logInfo = new LogInfo();

  signInButtonAction(){
    console.log(this.logInfo);
    this.studentService.loginValidation(this.logInfo);
  }
  
  ngOnInit(): void {
  }

}
