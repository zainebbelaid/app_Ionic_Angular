import { Injectable } from '@angular/core';
import {Dossier} from '../models/dossier';
import {} from '@angular/fire/compat/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private afs: AngularFirestore,private router: Router) {}

  getdosseirs(){
    return this.afs.collection('dossier').snapshotChanges();
   
   }// end of get Dossier list

   /*
getContact(contactId)
{
  return this.afs.collection('contact').doc(contactId).valuechanges();
} //end of get Contact
*/
}
