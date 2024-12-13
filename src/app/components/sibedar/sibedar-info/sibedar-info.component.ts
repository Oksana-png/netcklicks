import { Component } from '@angular/core';

import { sidebarInfo } from '../../../constants/sidebarinfo.constants';

@Component({
  selector: 'app-sibedar-info',
  standalone: false,

  styleUrl: './sibedar-info.component.css',

  template: `
    <div class="content-sidebar__info__wrapper">
      <div class="content-sidebar__info__item" *ngFor="let info of sidebar">
        <h5>{{info.title}}</h5>
        <p>{{info.description}}</p>
      </div>
    </div>
  `
})
export class SibedarInfoComponent {
  sidebar = sidebarInfo;
}
