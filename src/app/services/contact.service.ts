import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import {} from '@angular/fire/compat/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private afs: AngularFirestore,private router: Router) {}

  getContacts(){
    return this.afs.collection('contact').snapshotChanges();
   
   }// end of get Contact list

   /*
getContact(contactId)
{
  return this.afs.collection('contact').doc(contactId).valuechanges();
} //end of get Contact
*/
}
