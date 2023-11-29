import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rendez-vous-add',
  templateUrl: './rendez-vous-add.page.html',
  styleUrls: ['./rendez-vous-add.page.scss'],
})
export class RendezVousAddPage implements OnInit {

  id_rendezvous!: string;
  dh_rendezvous!: number;
  nom_medcin!: string;
  centre_medicale!: string;
  motif_rendezvous!: string;

  constructor(   
    private afs: AngularFirestore,
    private router:Router,
    private loadingCtrl:LoadingController,
    private toastr:ToastController) { }

  ngOnInit() {
  }

  async addrendezvous()
   {
      if(this.dh_rendezvous && this.nom_medcin && this.centre_medicale && this.motif_rendezvous )
      {
        const loading = await this.loadingCtrl.create({
          message:'Ajout rendez vous',
          spinner: 'crescent',
          showBackdrop: true
        });

        loading.present();

        const id_rendezvous = this.afs.createId();

        this.afs.collection('todo').doc(id_rendezvous).set({
          'id_rendezvous':id_rendezvous,
          'dh_rendezvous':this.dh_rendezvous,
          'nom_medcin':this.nom_medcin,         
          'centre_medicale':this.centre_medicale,
          'motif_rendezvous':this.motif_rendezvous
        })
           .then(()=> {
              loading.dismiss();
              this.toast('Task Successfully Added!', 'success');
              this.router.navigate(['/rendez-vous']);
           })
           .catch((error)=>{
                 loading.dismiss();
                 this.toast(error.message, 'danger')
           });
      }
   }//end of addTask

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
