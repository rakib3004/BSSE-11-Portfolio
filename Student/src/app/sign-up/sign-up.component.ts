import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  studentInfo = new Student();
  mismatch:boolean=false;

  signUp(){
     if(this.studentInfo.password==this.studentInfo.cpassword)
     {
      this.mismatch=false;
      this.studentService.saveData(this.studentInfo);
     }
     else
     {
        this.studentInfo.password="";
        this.studentInfo.cpassword="";
        this.mismatch=true;
     }
  }

  ngOnInit(): void {
  }

}
