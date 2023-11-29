import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{ AngularFireAuthModule} from '@angular/fire/compat/auth';
import{ AngularFireModule} from '@angular/fire/compat';
//firebase module

//Environment
import { environment } from 'src/environments/environment.prod';
console.log(environment.firebaseConfig);
console.log("hay");
@NgModule({
  declarations: [AppComponent],
  imports: [
     BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     AngularFireAuthModule,
     AngularFireModule,
     AngularFireModule.initializeApp(environment.firebaseConfig)
    ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
