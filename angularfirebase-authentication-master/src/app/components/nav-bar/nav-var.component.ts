import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
  //styleUrls: ['./app.component.css']
})
export class NavBarComponent implements OnInit {


  baseURL: string; 
  childURL : string; 






    constructor(public authService: AuthService  ) {
      this.baseURL = 'https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/' ; 
      this.childURL = 'pantry-items/'; 

    }
  
    ngOnInit() {
      
    }
  }
  