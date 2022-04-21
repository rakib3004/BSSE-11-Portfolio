import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialMedia } from '../social-media';
import { SocialMediaService } from '../social-media.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private socialMediaService: SocialMediaService, private router: Router)
   { }
  studentSocialMedia = this.socialMediaService.getSocialMedias();
  ngOnInit(): void {
  }

  facebookUrl='https://www.facebook.com/';
  githubUrl='https://github.com/';
  linkedInUrl='https://www.linkedin.com/in/';

  redirectToFacebook(r: any){
    const goToFacebook=this.facebookUrl+this.studentSocialMedia[r].facebook;
    this.router.navigateByUrl(goToFacebook);

  }

  redirectToGitHub(r: any){
    const goToGitHub=this.githubUrl+this.studentSocialMedia[r].github;
    this.router.navigateByUrl(goToGitHub);
    
  }
  redirectToLinkedIn(r: any){
    const goToLinedIn=this.linkedInUrl+this.studentSocialMedia[r].linkedin;
    this.router.navigateByUrl(goToLinedIn);
  }

}
