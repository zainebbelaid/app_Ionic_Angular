import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {

  nom!:String;
  statut!:String;
  fixe!:number;
  portable!:number;
  adresse!:string;


  constructor(
    private afs: AngularFirestore,
    private router:Router,
    private loadingCtrl:LoadingController,
    private toastr:ToastController
  ) { }

  ngOnInit() {
  }

  async addcontact(){
    if(this.nom && this.statut && this.portable &&this.fixe && this.adresse){

      const loading = await this.loadingCtrl.create({
        message:'add Task',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

        const contactId = this.afs.createId();

        this.afs.collection('contact').doc(contactId).set({
          'contactId':contactId,
          'nom':this.nom,
          'statut':this.statut,
          'portable':this.portable,
          'fixe':this.fixe,
          'adresse': this.adresse,         
          
        })
           .then(()=> {
              loading.dismiss();
              this.toast('contact Successfully Added!', 'success');
              this.router.navigate(['/contact-list']);
           })
           .catch((error)=>{
                 loading.dismiss();
                 this.toast(error.message, 'danger')
           });
    }
  }//end of addcontact




async toast(msg: string, status: string)
{
  const toast = await this.toastr.create({
    message:msg,
    position:'top',
    color: status,
    duration: 2000
  });

  toast.present();
 }//end of toast


}
