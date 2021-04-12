import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { SearchInputModule } from './shared/components/search-input/search-input.module';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterButtonsComponent } from './shared/components/footer-buttons/footer-buttons.component';
import { BackButtonHeaderModule } from './shared/components/back-button-header/back-button-header.module';
import { ProductModalComponent } from './shared/components/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    BannerComponent,
    ProductCardComponent,
    LoginComponent,
    FooterButtonsComponent,
    ProductModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchInputModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    BackButtonHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
