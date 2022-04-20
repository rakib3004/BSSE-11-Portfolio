import { Component, OnInit } from '@angular/core';
import { LogInfo } from '../log-info';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  logInfo = new LogInfo();
  
  ngOnInit(): void {
  }

}
