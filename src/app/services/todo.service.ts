import { Injectable } from '@angular/core';
import {Todo} from '../models/todo';
import {} from '@angular/fire/compat/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Router} from '@angular/router';


@Injectable({
providedIn : 'root',
})
export class TodoService
{

  constructor(private afs: AngularFirestore,private router: Router ) 
  {} //end of constructeur


 getTodos(){
  return this.afs.collection('todo').snapshotChanges();
 
 }// end of get todo list
 
/*
getTodo(todoId)
{
  return this.afs.collection('todo').doc(todoId).valuechanges();
} //end of get Todo
*/
}
