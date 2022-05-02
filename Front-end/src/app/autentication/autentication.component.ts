import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-autentication',
  templateUrl: './autentication.component.html',
  styleUrls: ['./autentication.component.css']
})
export class AutenticationComponent implements OnInit {
  invalid = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submit(user: string, pwd: string) {
    //TODO get ou post, enviar conta ou atributos
    /*requestAnswer = get or post
      if (requestAnswer){
          this.router.navigate([""],{state: {data:this.user}})
      }else {
        this.invalid=true;
      }*/
  }
}
