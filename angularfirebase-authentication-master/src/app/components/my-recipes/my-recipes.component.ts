import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase , AngularFireList } from "@angular/fire/compat/database";
import { AuthService } from "src/app/shared/services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { getDatabase , ref, push, set , onValue } from "firebase/database";


import {  query, orderByChild } from "firebase/database";
import { getAuth } from "firebase/auth";


@Injectable()
@Component({
    selector: 'app-my-recipes',
    templateUrl: 'my-recipes.component.html',
    
})

export class MyRecipesComponent implements OnInit  {

    printingUID = DashboardComponent.something; 
    branchURL = '/Recipes/' ;
    fullURL =  this.branchURL + this.printingUID ; 


    recipe : any ; 
    allRecipes: any ;  


     
    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth   ){
        const db = getDatabase();
        const auth = getAuth();
        if(auth.currentUser){
            const myUserId = auth.currentUser.uid;
            console.log('start');
            const topUserPostsRef = query(ref(db, 'my-info/' + myUserId));
            console.log(topUserPostsRef);

        }
        
        //const topUserPostsRef = query(ref(db, 'user-posts/' + myUserId), orderByChild('starCount'));
 
      
       console.log(this.fullURL);



    }
    ngOnInit(): void {
        const db = getDatabase();

        const dbRef = ref(db, 'Recipes');
        onValue(dbRef, (snapshot) => {
         snapshot.forEach((childSnapshot) => {
           const childKey = childSnapshot.key;
           console.log(childKey);
           const childData = childSnapshot.val();
           console.log(childData);
           // ...
         });
       }, {
         onlyOnce: true
       });

    console.log("sending get request to the server");
    console.log(DashboardComponent.something);
    //throw new Error("Method not implemented.");
}
}