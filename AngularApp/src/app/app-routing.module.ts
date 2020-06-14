import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { VolunteermenuComponent } from './components/volunteermenu/volunteermenu.component';
import { PublicmenuComponent } from './components/publicmenu/publicmenu.component';
import { TelephoneComponent } from './components/telephone/telephone.component';
import { InstituteComponent } from './components/institute/institute.component';
import { AnimalComponent } from './components/animal/animal.component';
import { SosComponent } from './components/sos/sos.component';
import { FirstaidComponent } from './components/firstaid/firstaid.component';
import { UserComponent } from './components/user/user.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { SosacceptComponent } from './components/sosaccept/sosaccept.component';
import { StatisComponent } from './components/statis/statis.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'publicMenu',
    component: PublicmenuComponent
  },
  {
    path: 'volunteerMenu',
    component: VolunteermenuComponent
  },
  {
    path: 'publicMenu/telephone',
    component: TelephoneComponent
  },
  {
    path: 'publicMenu/institute',
    component: InstituteComponent
  },
  {
    path: 'publicMenu/animal',
    component: AnimalComponent
  },
  {
    path: 'publicMenu/sos',
    component: SosComponent
  },
  {
    path: 'publicMenu/firstAid',
    component: FirstaidComponent
  },
  {
    path: 'publicMenu/user',
    component: UserComponent
  }, {
    path: 'volunteerMenu/volunteer',
    component: VolunteerComponent
  },
  {
    path: 'volunteerMenu/sos',
    component: SosacceptComponent
  },
  {
    path: 'volunteerMenu/statis',
    component: StatisComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
