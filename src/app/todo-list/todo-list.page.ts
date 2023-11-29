import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../services/todo.service';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
  providers: [TodoService]
})
export class TodoListPage implements OnInit {
  
  todos: Todo[]=[] ;

  constructor(
    private todosevice: TodoService,
    private afs:AngularFirestore,
    private loadingCtr: LoadingController,
    private router: Router,
    private toastr: ToastController

     ) { }

  ngOnInit() {
    this.todosevice.getTodos().subscribe((res) =>{
      this.todos = res.map((t) =>{
        return{
          id:t.payload.doc.id,
          ...(t.payload.doc.data()as Todo),
        };
      });
    });
     }


  todoList(){
    this.todosevice.getTodos().subscribe((data) =>{
      console.log(data);
    });
  }
  edit(todoId: string){
    this.router.navigate(['/todo-edit',todoId]);
  }
  async delete(todoId: string )
  {
     const loading = this.loadingCtr.create({
       message: 'Deleting..',
       spinner:'crescent',
       showBackdrop: true
     });

      (await loading).present();
     this.afs.collection('todo').doc(todoId).delete()
     .then(async ()=>{
        (await loading).dismiss();
        this.toast('Task Deleted','success');
     })
     .catch(async (error)=> {
       (await loading).dismiss();
          this.toast(error.message,'danger')
     });
  }//end of delete task

  async done(todoId: string )
  {
     const loading = await this.loadingCtr.create({
       message:'Updating status..',
       spinner:'crescent',
       showBackdrop:true
     });

    loading.present();
    this.afs.collection('todo').doc(todoId).update({
     'statu':'Done'
    })
      .then(()=>{
       loading.dismiss();
       this.toast('Task Update','success');
      })
      .catch((error)=>{
       this.toast(error.message,'danger')
      })
  }//end of done task

  async toast(msg:string,status:string)
  {
   const toast = await this.toastr.create({
     message: msg,
     position:'top',
     color:status,
     duration:2000
   });
   toast.present()
  }//end of toast
 
}
