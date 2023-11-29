import { Component, OnInit,ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.page.html',
  styleUrls: ['./formu.page.scss'],
})
export class FormuPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

    nom!: string;
    prenom!: string;
    datenaiss!: number;
    email!: string;
    password!: string;
    taille!: string;  
    poids!: string;
    all_medic!: string;
    all_peau!: string;
    all_aliments!: string;
    all_insectes!: string;
    all_autres!: string;
    

  constructor(
    private afs: AngularFirestore,
    private router:Router,
    private loadingCtrl:LoadingController,
    private toastr:ToastController) { }

    cancel() {
      this.modal.dismiss(null, 'cancel');
    }
  ngOnInit() {
  }

  async addformu(){
    if(  this.nom &&
         this.prenom && 
         this.datenaiss &&
         this.email && 
         this.password &&
         this.taille &&         
         this.poids &&
         this.all_medic &&
         this.all_peau &&
         this.all_aliments &&
         this.all_insectes &&
         this.all_autres 
          
         ){

      const loading = await this.loadingCtrl.create({
        message:'add info',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

        const dossierId = this.afs.createId();

        this.afs.collection('dossier').doc(dossierId).set({
          'dossierId':dossierId,
         'nom': this.nom,
         'prenom':this.prenom, 
         'datenaiss':this.datenaiss,
         'email':this.email,
         'password':this.password,
         'taille':this.taille,
         'poids':this.poids,
         'all_medic':this.all_medic,        
         'all_peau':this.all_peau,
         'all_aliments':this.all_aliments,
         'all_insectes':this.all_insectes,
         'all_autres':this.all_autres
               
          
        })
           .then(()=> {
              loading.dismiss();
              this.toast('Successfully Added!', 'success');
              this.router.navigate(['/menu']);
              
           })
           .catch((error)=>{
                 loading.dismiss();
                 this.toast(error.message, 'danger')
           });
    }
  }//end of addformu

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
