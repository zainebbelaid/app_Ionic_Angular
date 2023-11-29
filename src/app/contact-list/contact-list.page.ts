import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {ContactService} from '../services/contact.service';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  contacts:Contact[]=[];

  constructor(
    private contactsevice: ContactService,
    private afs:AngularFirestore,
    private loadingCtr: LoadingController,
    private router: Router,
    private toastr: ToastController
  ) { }

  ngOnInit() {

    this.contactsevice.getContacts().subscribe((res) =>{
      this.contacts = res.map((t) =>{
        return{
          id:t.payload.doc.id,
          ...(t.payload.doc.data()as Contact),
        };
      });
    });
}

contacList(){
  this.contactsevice.getContacts().subscribe((data) =>{
    console.log(data);
  });
}

async delete(contactId: string )
{
   const loading = this.loadingCtr.create({
     message: 'Deleting..',
     spinner:'crescent',
     showBackdrop: true
   });

    (await loading).present();
   this.afs.collection('contact').doc(contactId).delete()
   .then(async ()=>{
      (await loading).dismiss();
      this.toast('Contact Deleted','success');
   })
   .catch(async (error)=> {
     (await loading).dismiss();
        this.toast(error.message,'danger')
   });
}//end of delete task

async done(contactId: string )
{
   const loading = await this.loadingCtr.create({
     message:'Updating status..',
     spinner:'crescent',
     showBackdrop:true
   });

  loading.present();
  this.afs.collection('contact').doc(contactId).update({
   'statu':'Done'
  })
    .then(()=>{
     loading.dismiss();
     this.toast('contact Update','success');
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
