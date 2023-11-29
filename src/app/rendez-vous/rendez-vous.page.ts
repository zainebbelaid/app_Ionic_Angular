import { Component, OnInit } from '@angular/core';
import {rendezvous} from '../models/rendez-vous';
import {RendezVousService} from '../services/rendez-vous.service';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.page.html',
  styleUrls: ['./rendez-vous.page.scss'],
  providers: [RendezVousService]
})
export class RendezVousPage implements OnInit {

  rendezvouss: rendezvous[]=[] ;

  constructor(
    private rendezvousService: RendezVousService,
    private afs:AngularFirestore,
    private loadingCtr: LoadingController,
    private router: Router,
    private toastr: ToastController
  ) { }

  ngOnInit() {
    this.rendezvousService.getRendezVouss().subscribe((res) =>{
      this.rendezvouss = res.map((t) =>{
        return{
          id:t.payload.doc.id,
          ...(t.payload.doc.data()as rendezvous),
        };
      });
    });
  }

  RendezvousList(){
    this.rendezvousService.getRendezVouss().subscribe((data) =>{
      console.log(data);
    });
  }
  edit(id_rendezvous: string){
    this.router.navigate(['/rendez-vous-edit',id_rendezvous]);
  }
  async delete(id_rendezvous: string )
  {
     const loading = this.loadingCtr.create({
       message: 'Suppression..',
       spinner:'crescent',
       showBackdrop: true
     });

      (await loading).present();
     this.afs.collection('rendezvous').doc(id_rendezvous).delete()
     .then(async ()=>{
        (await loading).dismiss();
        this.toast('rendez-vous supprimée','success');
     })
     .catch(async (error)=> {
       (await loading).dismiss();
          this.toast(error.message,'danger')
     });
  }//end of delete task

  async done(id_rendezvous: string )
  {
     const loading = await this.loadingCtr.create({
       message:'Updating status..',
       spinner:'crescent',
       showBackdrop:true
     });

    loading.present();
    this.afs.collection('rendezvous').doc(id_rendezvous).update({
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

