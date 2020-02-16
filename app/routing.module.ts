import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './view/dashbord/dashbord.component';
import {SingupComponent} from './view/singup/singup.component';
import {LoginComponent} from './view/login/login.component';
import {ShopOwnerDashdordComponent} from './shopOwner/shop-owner-dashdord/shop-owner-dashdord.component';
import {AddItemComponent} from './shopOwner/add-item/add-item.component';
import {OwnerLoginComponent} from './shopOwner/owner-login/owner-login.component';
import {OwnerSignUpComponent} from './shopOwner/owner-sign-up/owner-sign-up.component';
import {ViewItemComponent} from './shopOwner/view-item/view-item.component';
import {HomepageComponent} from './view/homepage/homepage.component';
import {FooterComponent} from './view/footer/footer.component';
import {DeleteItemComponent} from './shopOwner/delete-item/delete-item.component';
import {MyTestComponent} from './my-test/my-test.component';



const routes: Routes = [
  {
    path: 'dashbord',
    component: DashbordComponent
  },
  {
    path: 'myTest',
    component: MyTestComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashbord'
  },
  {
    path: 'shopOwnerDashbord/:email ',
    component: ShopOwnerDashdordComponent
  },
  {
    path: 'addItem',
    component: AddItemComponent
  },
  {
    path: 'deleteItem',
    component: DeleteItemComponent
  },
  {
    path: 'ownerLogin',
    component: OwnerLoginComponent
  },
  {
    path: 'ownerSignUp',
    component: OwnerSignUpComponent
  },
  {
    path: 'viewItem',
    component: ViewItemComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
