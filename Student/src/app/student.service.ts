import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient,private router:Router) { }

  signedIn = false;

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
}
