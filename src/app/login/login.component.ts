import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  motDePasse = new FormControl('');
  adresse = new FormControl('');

  monUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  valide() {
    console.log("valide !");
    this.monUser.username = this.username.value;
    this.monUser.email = this.email.value;
    this.monUser.motDePass = this.motDePasse.value;
    this.monUser.adresse = this.adresse.value;
  }
}
