import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor (private studentService:StudentService, private router: Router){}

  ngOnInit(): void {
  }

  frontPageStatus:boolean=true;

  checkForntPage(){
    this.frontPageStatus=this.studentService.checkForntPage();
    this.router.navigate(['mainpage'])
  }
  

}
