import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  userName = history.state;
  constructor() { }

  ngOnInit(): void {
  }
  //todo ver html como ser tarefas e outro
}
