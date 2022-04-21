import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor (private studentService:StudentService, private router: Router){}
  signedIn = this.studentService.getSignedIn();

  ngOnInit(): void {
  }

  frontPageStatus:boolean=true;

  signIn(){
    this.router.navigateByUrl('signin');
  }

  checkForntPage(){
    this.frontPageStatus=this.studentService.checkForntPage();
  }
  
}
