import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private studentService:StudentService) { }

  click = 0;
  signedIn = this.studentService.getSignedIn();

  menuButtonClickEvent() {
    if (this.click == 0) this.click = 1;
    else this.click = 0;
  }

  signin(){
    console.log('Sign in clicked');
    this.router.navigateByUrl('signin');
  }

  ngOnInit(): void {
  }

}
