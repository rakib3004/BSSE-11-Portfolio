import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student';
  constructor(private router: Router,private studentService:StudentService) { }

  signedIn=this.studentService.signedIn;

}
