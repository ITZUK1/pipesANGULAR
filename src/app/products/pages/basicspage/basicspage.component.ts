import { Component } from '@angular/core';

@Component({
  selector: 'app-basicspage',
  templateUrl: './basicspage.component.html',
})
export class BasicspageComponent {

  public nameLower: string = 'miguel';
  public nameupper: string = 'mIGUEl';
  public fullname: string = 'MiGUEl MiXaTo';

  public customDate: Date = new Date();


}
