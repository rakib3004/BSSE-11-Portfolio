import { Injectable } from '@angular/core';
import { SocialMedia } from './social-media';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  constructor() {}

  socialMedias: SocialMedia[] = [
    {
      facebook: 'mohsin.amin.75098',
      github: 'MohsinIAmin',
      linkedin: 'mohsin-i-amin-1547331a6',
    },
    {
      facebook: 'fahim.morshed.503',
      github: 'Fm-man',
      linkedin: 'fahim-morshed-b182b0198',
    },
    {
      facebook: 'mahtab.hossain.58367',
      github: 'Mahtabhj',
      linkedin: 'mahtab-uddin-ahmed-6b543138',
    },
    { facebook: '', github: 'Md-Siam07', linkedin: '' },
    { facebook: '', github: 'FahadHossain9', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },

    {
      facebook: 'jafarmahin107',
      github: 'jaf107',
      linkedin: 'abu-jafar-saifullah',
    },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },

    {
      facebook: 'mustahidhasan.sakib',
      github: 'musta55',
      linkedin: 'mustahid-hasan-042241225',
    },
    { facebook: '', github: '', linkedin: '' },
    { facebook: '', github: '', linkedin: '' },

    {
      facebook: 'mdmuktarhosen.mridha',
      github: 'Muktar16',
      linkedin: 'md-muktar-hosen-46681320b',
    },
    { facebook: '', github: '', linkedin: '' },

    {
      facebook: 'Khairul.Alam82',
      github: 'meKhairul',
      linkedin: 'khairul-alam-1bb989181',
    },
    {
      facebook: 'ashrafislam.s',
      github: 'ashraul-islam-51998a194',
      linkedin: 'SIkderash',
    },
    { facebook: 'rakib.iit', github: 'rakib3004', linkedin: 'rakib-iit' },
  ];

  getSocialMedias(): SocialMedia[] {
    return this.socialMedias;
  }
}
