import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit () {
    this.menuItems = [
      {label:'new', icon: 'pi pi-fw pi-plus'},
      {label:'open', icon: 'pi pi-fw pi-download'},
      {label:'undo', icon: 'pi pi-fw pi-refresh'},
    ];
  }

}
