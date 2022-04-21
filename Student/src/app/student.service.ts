import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Bool } from './bool';
import { LogInfo } from './log-info';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient,private router:Router) { }

  signedIn = new Bool();

  saveData(studentInfo:Student){
      this._http.post('http://localhost:3000/signup',studentInfo).subscribe(data => {
      console.log(data);
      if(data)
        {
          alert("Sign Up Seccessful. You can now sign in to the system");
          this.router.navigateByUrl('signin');
        }
        else
        {
          alert('User name or Email already exists...');
        }
      });
  }

  async loginValidation(logInfo:LogInfo){
    console.log(logInfo);
    const data = await this._http.post('http://localhost:3000/login',logInfo).toPromise();
    console.log(typeof(data));
    
      if(!data) 
      {
        console.log("Invaid");
        alert('Incorrect password or user Name');
        logInfo.password='';
        logInfo.userName='';
        this.signedIn.value=false;
        
      }
      if(data) 
      {
        alert('Login Successful');
        this.signedIn.value=true;
        console.log("valid");
        this.router.navigateByUrl('');
      }

    }

    getSignedIn(){
      return this.signedIn;
    }

    frontPageStatus:boolean=true;

  checkForntPage(){
    this.frontPageStatus=!this.frontPageStatus;
    return this.frontPageStatus;
  }
  

}
