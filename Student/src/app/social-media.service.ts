import { Injectable } from '@angular/core';
import { SocialMedia } from './social-media';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() { }

  socialMedias: SocialMedia[] = [
    {  facebook: 'mohsin.amin.75098', github: 'MohsinIAmin', linkedin: 'mohsin-i-amin-1547331a6' },
    {  facebook: 'rakib.iit', github: 'rakib3004', linkedin: 'rakib-iit' },
    {  facebook: 'mdmuktarhosen.mridha', github: 'Muktar16', linkedin: 'md-muktar-hosen-46681320b' },
    {  facebook: 'mustahidhasan.sakib', github: 'musta55', linkedin: 'mustahid-hasan-042241225' },
    {  facebook: 'jafarmahin107', github: 'jaf107', linkedin: 'abu-jafar-saifullah' },
    {  facebook: 'ashrafislam.s', github: 'ashraul-islam-51998a194', linkedin: 'SIkderash' },
    {  facebook: 'Khairul.Alam82', github: 'meKhairul', linkedin: 'khairul-alam-1bb989181' },

  ];

  getSocialMedias(): SocialMedia[]{
    return this.socialMedias;
  }
}
