import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobile';
  
  @ViewChild("sidenav") sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }
}
