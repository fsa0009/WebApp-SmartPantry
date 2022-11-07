
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ["top-navbar.component.css"],
})
export class TopNavBarComponent implements OnInit {


  
  printingUID= DashboardComponent.something; 


  //fullURL = 'test-other-items/' + this.printingUID ; 

  fullURL = 'pantry-items/' + this.printingUID ; 

  myItem : any ; 

  item : any ; 



   
  constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth  , private db : AngularFireDatabase ){

  }

  ngOnInit(): void {

      

}







}
