import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor (private studentService:StudentService){}
  signedIn = this.studentService.getSignedIn();

  ngOnInit(): void {
  }

}
