import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { VolunteermenuComponent } from './components/volunteermenu/volunteermenu.component';
import { PublicmenuComponent } from './components/publicmenu/publicmenu.component';
import { AddTelephoneComponent } from './components/add-telephone/add-telephone.component';
import { AddInstituteComponent } from './components/add-institute/add-institute.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AddSosComponent } from './components/add-sos/add-sos.component';
import { AddFirstaidComponent } from './components/add-firstaid/add-firstaid.component';
import { TelephoneComponent } from './components/telephone/telephone.component';
import { InstituteComponent } from './components/institute/institute.component';
import { AnimalComponent } from './components/animal/animal.component';
import { SosComponent } from './components/sos/sos.component';
import { FirstaidComponent } from './components/firstaid/firstaid.component';
import { UserComponent } from './components/user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { SosacceptComponent } from './components/sosaccept/sosaccept.component';
import { StatisComponent } from './components/statis/statis.component'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
// Routes
export const router: Routes = [

  // { path: 'profile', component: ProfileComponent },
  // {path:''}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MenuComponent,
    VolunteermenuComponent,
    PublicmenuComponent,
    AddTelephoneComponent,
    AddInstituteComponent,
    AddAnimalComponent,
    AddSosComponent,
    AddFirstaidComponent,
    TelephoneComponent,
    InstituteComponent,
    AnimalComponent,
    SosComponent,
    FirstaidComponent,
    UserComponent,
    VolunteerComponent,
    SosacceptComponent,
    StatisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AngularFireDatabase,],
  bootstrap: [AppComponent]
})
export class AppModule { }
