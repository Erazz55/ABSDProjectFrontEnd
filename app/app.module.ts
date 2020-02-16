import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashbordComponent } from './view/dashbord/dashbord.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { SingupComponent } from './view/singup/singup.component';
import { ShopOwnerDashdordComponent } from './shopOwner/shop-owner-dashdord/shop-owner-dashdord.component';
import { AddItemComponent } from './shopOwner/add-item/add-item.component';
import { OwnerSignUpComponent } from './shopOwner/owner-sign-up/owner-sign-up.component';
import { OwnerLoginComponent } from './shopOwner/owner-login/owner-login.component';
import { DeleteItemComponent } from './shopOwner/delete-item/delete-item.component';
import { ItemService } from './shopOwner/shopService/item.service';
import { RoutingModule } from './routing.module';
import {
  IgxButtonModule,
  IgxCardModule,
  IgxDividerModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxRadioModule,
  IgxSelectModule
} from 'igniteui-angular';
import { ItemCardComponent } from './shopOwner/item-card/item-card.component';
import { ViewItemComponent } from './shopOwner/view-item/view-item.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import {FooterComponent} from './view/footer/footer.component';
import {MyTestComponent} from './my-test/my-test.component';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    LoginComponent,
    SingupComponent,
    ShopOwnerDashdordComponent,
    AddItemComponent,
    OwnerSignUpComponent,
    OwnerLoginComponent,
    DeleteItemComponent,
    ItemCardComponent,
    ViewItemComponent,
    HomepageComponent,
    FooterComponent,
    MyTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    IgxCardModule,
    IgxDividerModule,
    IgxRadioModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxIconModule,
    ReactiveFormsModule,
    IgxButtonModule
  ],
  providers: [
    ItemService
    // {provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
