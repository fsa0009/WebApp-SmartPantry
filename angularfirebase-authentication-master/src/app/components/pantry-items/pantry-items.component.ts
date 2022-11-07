
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-pantry-items',
  templateUrl: './pantry-items.component.html'
  //styleUrls: ['./app.component.css']
})
export class PantryItemsComponent implements OnInit {


  
  printingUID= DashboardComponent.something; 


  //fullURL = 'test-other-items/' + this.printingUID ; 

  fullURL = 'pantry-items/' + this.printingUID ; 

  myItem : any ; 

  item : any ; 



   
  constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth  , private db : AngularFireDatabase ){




  }

  getAll(): Observable<any>{
      return this.db.list<any>(this.fullURL)
      .snapshotChanges()
      .pipe(
          map(X =>X.map((y:any) => ({...y.payload.val() , id: y.payload.key}) ))

      );
      
      }





  ngOnInit(): void {

      this.getAll().subscribe(p => this.item = p)

  console.log(DashboardComponent.something);

}







}

