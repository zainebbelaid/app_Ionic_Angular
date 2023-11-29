import { Injectable } from '@angular/core';
import {} from '@angular/fire/compat/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
 
  constructor(private afs: AngularFirestore,private router: Router) {}

  getRendezVouss(){
    return this.afs.collection('rendezvous').snapshotChanges();
   
   }// end of get Rendez-Vous list

}
