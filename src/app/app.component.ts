import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  isDarkMode: any = JSON.parse(localStorage.getItem("isDarkMode"));
  isNavbarCollapsed: boolean = true;

  ngOnInit(): void {
    if (this.isDarkMode) {
      document.body.classList.toggle("dark-mode");
    }
  }

  changeMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("isDarkMode", JSON.stringify(this.isDarkMode));
    document.body.classList.toggle("dark-mode");
  }
}
