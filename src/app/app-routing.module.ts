import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubsectionComponent } from './subsection/create-subsection/create-subsection.component';
import { ListSubsectionsComponent } from './subsection/list-subsections/list-subsections.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view-post/:id', component: ViewPostComponent},
  {path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'list-subsections', component: ListSubsectionsComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'create-subsection', component: CreateSubsectionComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: SignupComponent},
  {path: 'authenticate', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
